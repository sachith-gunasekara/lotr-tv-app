package com.example.lotr.ui.home

import android.net.Uri
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.produceState
import androidx.compose.runtime.remember
import androidx.compose.runtime.withFrameNanos
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.input.key.Key
import androidx.compose.ui.input.key.KeyEventType
import androidx.compose.ui.input.key.key
import androidx.compose.ui.input.key.onPreviewKeyEvent
import androidx.compose.ui.input.key.type
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.Text
import com.example.lotr.R
import com.example.lotr.data.FilmLibrary
import com.example.lotr.data.FilmRepository
import com.example.lotr.data.FilmScan
import com.example.lotr.data.PlaybackPositionRepository
import com.example.lotr.data.RingsOfPower
import com.example.lotr.data.ThumbnailRepository
import com.example.lotr.data.WatchProgress
import com.example.lotr.data.model.Episode
import com.example.lotr.data.model.Film
import com.example.lotr.data.model.Watchable
import com.example.lotr.ui.components.lotrBackground
import com.example.lotr.ui.theme.TileEarth
import com.example.lotr.ui.theme.TileEmber
import com.example.lotr.ui.theme.TileMoss
import com.example.lotr.ui.theme.TileRiver
import com.example.lotr.ui.theme.TileTwilight
import kotlinx.coroutines.delay
import java.text.SimpleDateFormat
import java.util.Date

private val sections = listOf(
    Section("The Films", "Trilogy & series", R.drawable.ic_movie, TileEarth, HomeDestination.Films, available = true, art = R.drawable.backdrop_return_of_the_king),
    Section("Appendices", "Behind the scenes", R.drawable.ic_videocam, TileRiver, HomeDestination.Appendices, available = true),
    Section("The Vault", "Maps & artwork", R.drawable.ic_explore, TileMoss, HomeDestination.Vault, available = false),
    Section("Reading", "Letters & languages", R.drawable.ic_menu_book, TileEmber, HomeDestination.Reading, available = false),
    Section("Music", "Scores & soundtrack", R.drawable.ic_music_note, TileTwilight, HomeDestination.Music, available = false),
)

@Composable
fun HomeScreen(
    filmLibrary: FilmLibrary,
    playbackPositionRepository: PlaybackPositionRepository,
    thumbnails: ThumbnailRepository,
    onOpen: (HomeDestination) -> Unit,
    onPlay: (Watchable, Uri) -> Unit,
    modifier: Modifier = Modifier,
) {
    val scan by filmLibrary.scan.collectAsState()
    val hasPermission by filmLibrary.hasPermission.collectAsState()
    val files = scan?.files.orEmpty()

    // The banner features whatever was watched last (film or episode), else the first film.
    val lastWatchedId by playbackPositionRepository.lastWatchedId.collectAsState(initial = null)
    val featured: Watchable = (FilmRepository.films + scan?.episodes.orEmpty())
        .firstOrNull { it.id == lastWatchedId } ?: FilmRepository.films.first()
    val featuredFile = when (featured) {
        is Film -> files[featured.id]
        is Episode -> featured.file
    }
    val trailer = scan?.trailers?.get(if (featured is Episode) RingsOfPower.SERIES_ID else featured.id)
    // key(): fresh state per title, so the old title's resume point never shows under the new one.
    val progress = key(featured.id) {
        remember { playbackPositionRepository.progress(featured.id) }.collectAsState(initial = WatchProgress(0, 0)).value
    }

    val heroFocus = remember { FocusRequester() }
    val filmsTileFocus = remember { FocusRequester() }
    LaunchedEffect(Unit) {
        withFrameNanos { }
        heroFocus.requestFocus()
    }

    Column(
        modifier = modifier
            .fillMaxSize()
            .lotrBackground()
            .padding(horizontal = 48.dp, vertical = 20.dp),
    ) {
        TopBar()
        Spacer(Modifier.height(12.dp))
        HeroBanner(
            watchable = featured,
            file = featuredFile,
            trailer = trailer,
            progress = progress,
            thumbnails = thumbnails,
            onActivate = { featuredFile?.let { onPlay(featured, it.uri) } ?: onOpen(HomeDestination.Films) },
            modifier = Modifier
                .fillMaxWidth()
                .height(300.dp)
                .focusRequester(heroFocus)
                // Down goes to The Films rather than to whichever tile happens to be nearest.
                .onPreviewKeyEvent { event ->
                    if (event.key != Key.DirectionDown) return@onPreviewKeyEvent false
                    if (event.type == KeyEventType.KeyDown) filmsTileFocus.requestFocus()
                    true
                },
        )
        Spacer(Modifier.height(20.dp))
        Row(horizontalArrangement = Arrangement.spacedBy(16.dp)) {
            sections.forEach { section ->
                SectionTile(
                    section = section,
                    onClick = { if (section.available) onOpen(section.destination) },
                    modifier = Modifier
                        .size(width = 160.dp, height = 112.dp)
                        .let { if (section.destination == HomeDestination.Films) it.focusRequester(filmsTileFocus) else it },
                )
            }
        }
        Spacer(Modifier.weight(1f))
        Footer(status = libraryStatus(hasPermission, scan))
    }
}

@Composable
private fun TopBar() {
    Row(verticalAlignment = Alignment.CenterVertically, modifier = Modifier.fillMaxWidth()) {
        Text(
            text = "The Lord of the Rings",
            color = MaterialTheme.colorScheme.primary,
            style = MaterialTheme.typography.titleMedium.copy(letterSpacing = 3.sp),
        )
        Spacer(Modifier.weight(1f))
        val now by produceState(Date()) {
            while (true) {
                value = Date()
                delay(15_000)
            }
        }
        val locale = LocalConfiguration.current.locales[0]
        Text(
            text = SimpleDateFormat("EEE d MMMM  ·  h:mm a", locale).format(now),
            color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.8f),
            style = MaterialTheme.typography.bodyMedium,
        )
    }
}

@Composable
private fun Footer(status: String) {
    Row(modifier = Modifier.fillMaxWidth(), verticalAlignment = Alignment.CenterVertically) {
        Text(status, color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.7f), style = MaterialTheme.typography.bodySmall)
        Spacer(Modifier.weight(1f))
        Text(
            text = "◀ ▶ browse  ·  OK select",
            color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.5f),
            style = MaterialTheme.typography.bodySmall,
        )
    }
}

private fun libraryStatus(hasPermission: Boolean, scan: FilmScan?): String = when {
    !hasPermission -> "Open The Films to allow access to the USB drive"
    scan == null -> "Looking for the films…"
    scan.folder == null -> "Insert the USB pendrive with a LOTR folder"
    else -> "${scan.files.size} of ${FilmRepository.films.size} films ready  ·  " +
        if (scan.isCustom) "custom folder" else "USB drive"
}
