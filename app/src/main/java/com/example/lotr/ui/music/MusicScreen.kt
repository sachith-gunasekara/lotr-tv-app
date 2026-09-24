package com.example.lotr.ui.music

import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableLongStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.produceState
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.runtime.withFrameNanos
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.focus.onFocusChanged
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ImageBitmap
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.graphics.painter.BitmapPainter
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.input.key.Key
import androidx.compose.ui.input.key.KeyEventType
import androidx.compose.ui.input.key.key
import androidx.compose.ui.input.key.onPreviewKeyEvent
import androidx.compose.ui.input.key.type
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.media3.common.AudioAttributes
import androidx.media3.common.C
import androidx.media3.common.MediaItem
import androidx.media3.common.Player
import androidx.media3.exoplayer.ExoPlayer
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.Text
import com.example.lotr.data.FilmLibrary
import com.example.lotr.data.FilmRepository
import com.example.lotr.data.MusicAlbum
import com.example.lotr.data.MusicRepository
import com.example.lotr.data.MusicTrack
import com.example.lotr.data.ScoreTheme
import com.example.lotr.data.ScoreThemes
import com.example.lotr.data.YouTubeVideo
import com.example.lotr.ui.components.DetailsPanel
import com.example.lotr.ui.components.GlyphPlaceholder
import com.example.lotr.ui.components.ImmersiveBackdrop
import com.example.lotr.ui.components.ShelfCard
import com.example.lotr.ui.components.ShelfColumn
import com.example.lotr.ui.components.ShelfRow
import com.example.lotr.ui.components.ShelfTitle
import com.example.lotr.ui.components.WarmCardShape
import com.example.lotr.ui.components.backdropRes
import com.example.lotr.ui.components.formatLength
import com.example.lotr.ui.components.lotrBackground
import com.example.lotr.ui.theme.LotrBackground
import com.example.lotr.ui.theme.TileTwilight
import kotlinx.coroutines.delay

/** One card in Music: a theme of the score, or a track from the drive. */
private sealed interface MusicItem {
    val key: String

    data class Theme(val theme: ScoreTheme, val heardIn: List<MusicTrack>) : MusicItem {
        override val key get() = "theme_${theme.id}"
    }

    data class Track(val track: MusicTrack, val album: MusicAlbum, val index: Int) : MusicItem {
        override val key get() = "track_${track.file.path}"
    }
}

private data class MusicRow(val title: String, val about: String, val items: List<MusicItem>)

/**
 * Scores & soundtrack: Howard Shore's themes (what to listen for, and where), then the soundtrack
 * albums on the drive. Music plays here, with a now-playing card, and stops on leaving.
 */
@Composable
fun MusicScreen(
    filmLibrary: FilmLibrary,
    music: MusicRepository,
    onPlayOnline: (YouTubeVideo) -> Unit,
    modifier: Modifier = Modifier,
) {
    var audioGrants by remember { mutableIntStateOf(0) }
    val requestAudio = rememberLauncherForActivityResult(ActivityResultContracts.RequestPermission()) { audioGrants++ }
    LaunchedEffect(Unit) {
        if (!music.hasAudioPermission()) requestAudio.launch(music.audioPermission)
    }
    val scan by filmLibrary.scan.collectAsState()
    // Null until the drive has been looked at, so focus isn't placed before the albums exist.
    val scanned by produceState<List<MusicAlbum>?>(null, scan?.folder, audioGrants) {
        val folder = scan?.folder
        value = if (folder != null && music.hasAudioPermission()) music.albums(folder) else emptyList()
    }
    val albums = scanned.orEmpty()
    val allTracks = remember(albums) { albums.flatMap { it.tracks } }

    val rows = remember(albums) {
        listOf(
            MusicRow(
                title = "Themes of the Score",
                about = if (allTracks.isEmpty()) {
                    "What to listen for - OK plays each theme's official recording"
                } else {
                    "What to listen for - OK plays the tracks it's heard in, hold OK for the official recording"
                },
                items = ScoreThemes.themes.map { theme -> MusicItem.Theme(theme, allTracks.filter { theme.isHeardIn(it.title) }) },
            ),
        ) + albums.map { album ->
            MusicRow(album.title, "${tracks(album.tracks.size)} on the drive", album.tracks.mapIndexed { i, t -> MusicItem.Track(t, album, i) })
        }
    }
    val all = rows.flatMap { it.items }

    // The player lives as long as this screen; leaving Music stops the music.
    val context = LocalContext.current
    val player = remember {
        ExoPlayer.Builder(context).build().apply {
            setAudioAttributes(
                AudioAttributes.Builder().setUsage(C.USAGE_MEDIA).setContentType(C.AUDIO_CONTENT_TYPE_MUSIC).build(),
                /* handleAudioFocus = */ true,
            )
        }
    }
    var playingPath by remember { mutableStateOf<String?>(null) }
    var isPlaying by remember { mutableStateOf(false) }
    var positionMs by remember { mutableLongStateOf(0L) }
    var durationMs by remember { mutableLongStateOf(0L) }
    DisposableEffect(player) {
        val listener = object : Player.Listener {
            override fun onIsPlayingChanged(playing: Boolean) {
                isPlaying = playing
            }

            override fun onMediaItemTransition(mediaItem: MediaItem?, reason: Int) {
                playingPath = mediaItem?.mediaId
            }
        }
        player.addListener(listener)
        onDispose {
            player.removeListener(listener)
            player.release()
        }
    }
    LaunchedEffect(player) {
        while (true) {
            positionMs = player.currentPosition
            durationMs = player.duration.coerceAtLeast(0)
            delay(500)
        }
    }
    val playQueue = { tracks: List<MusicTrack>, start: Int ->
        player.setMediaItems(tracks.map { MediaItem.Builder().setUri(it.uri).setMediaId(it.file.path).build() }, start, 0L)
        player.prepare()
        player.play()
    }
    val nowPlaying = allTracks.firstOrNull { it.file.path == playingPath }

    var focusedKey by rememberSaveable { mutableStateOf<String?>(null) }
    val focused = all.firstOrNull { it.key == focusedKey } ?: all.first()
    val focusedRow = rows.indexOfFirst { row -> row.items.any { it.key == focused.key } }

    Box(
        modifier
            .fillMaxSize()
            .lotrBackground()
            // The remote's media keys work anywhere on the screen.
            .onPreviewKeyEvent { event ->
                if (event.type != KeyEventType.KeyDown || player.mediaItemCount == 0) return@onPreviewKeyEvent false
                when (event.key) {
                    Key.MediaPlayPause -> { if (player.isPlaying) player.pause() else player.play(); true }
                    Key.MediaPlay -> { player.play(); true }
                    Key.MediaPause -> { player.pause(); true }
                    Key.MediaNext -> { player.seekToNextMediaItem(); true }
                    Key.MediaPrevious -> { player.seekToPreviousMediaItem(); true }
                    Key.MediaFastForward -> { player.seekTo(player.currentPosition + 10_000); true }
                    Key.MediaRewind -> { player.seekTo((player.currentPosition - 10_000).coerceAtLeast(0)); true }
                    else -> false
                }
            },
    ) {
        ImmersiveBackdrop(key = focused.key, painter = rememberBackdrop(focused, music))

        Column(Modifier.fillMaxSize().padding(top = 28.dp)) {
            MusicDetails(
                item = focused,
                isCurrent = (focused as? MusicItem.Track)?.track == nowPlaying,
                isPlaying = isPlaying,
                // Narrower while the now-playing card sits in the top-right corner.
                modifier = Modifier.padding(horizontal = 48.dp).let { if (nowPlaying != null) it.width(520.dp) else it },
            )
            Spacer(Modifier.height(16.dp))

            val initialFocus = remember { FocusRequester() }
            val columnState = remember { LazyListState() }
            LaunchedEffect(scanned != null) {
                if (scanned == null) return@LaunchedEffect
                columnState.scrollToItem(focusedRow.coerceAtLeast(0))
                withFrameNanos { }
                initialFocus.requestFocus()
            }
            ShelfColumn(state = columnState, modifier = Modifier.weight(1f)) {
                items(rows, key = { it.title }) { row ->
                    Column {
                        Row(verticalAlignment = Alignment.Bottom) {
                            ShelfTitle(row.title)
                            Text(
                                text = row.about,
                                color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.6f),
                                style = MaterialTheme.typography.bodySmall,
                                maxLines = 1,
                                overflow = TextOverflow.Ellipsis,
                                modifier = Modifier.padding(start = 16.dp, end = 48.dp),
                            )
                        }
                        val initialIndex = row.items.indexOfFirst { it.key == focused.key }.coerceAtLeast(0)
                        ShelfRow(state = remember { LazyListState(firstVisibleItemIndex = initialIndex) }) {
                            items(row.items, key = { it.key }) { item ->
                                val current = item is MusicItem.Track && item.track == nowPlaying
                                ShelfCard(
                                    title = when (item) {
                                        is MusicItem.Theme -> item.theme.name
                                        is MusicItem.Track -> item.track.title
                                    },
                                    width = 208,
                                    onClick = {
                                        when (item) {
                                            is MusicItem.Theme ->
                                                if (item.heardIn.isEmpty()) onPlayOnline(item.theme.listen) else playQueue(item.heardIn, 0)
                                            is MusicItem.Track ->
                                                if (current) { if (player.isPlaying) player.pause() else player.play() }
                                                else playQueue(item.album.tracks, item.index)
                                        }
                                    },
                                    onLongClick = (item as? MusicItem.Theme)?.let { theme -> { onPlayOnline(theme.theme.listen) } },
                                    overline = when (item) {
                                        is MusicItem.Theme -> item.heardIn.size.takeIf { it > 0 }?.let { "in ${tracks(it)}" }
                                        is MusicItem.Track -> if (current) (if (isPlaying) "▶ playing" else "❚❚ paused") else item.track.trackNumber?.let { "track $it" }
                                    },
                                    modifier = Modifier
                                        .onFocusChanged { if (it.isFocused) focusedKey = item.key }
                                        .let { if (item.key == focused.key) it.focusRequester(initialFocus) else it },
                                ) {
                                    when (item) {
                                        is MusicItem.Theme -> GlyphPlaceholder(item.theme.glyph, TileTwilight)
                                        is MusicItem.Track -> {
                                            GlyphPlaceholder(item.track.trackNumber?.toString().orEmpty(), TileTwilight)
                                            rememberCover(item.track, music)?.let {
                                                Image(it, contentDescription = null, contentScale = ContentScale.Crop, modifier = Modifier.fillMaxSize())
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        AnimatedVisibility(
            visible = nowPlaying != null,
            enter = fadeIn(),
            exit = fadeOut(),
            modifier = Modifier.align(Alignment.TopEnd).padding(top = 28.dp, end = 48.dp),
        ) {
            nowPlaying?.let { NowPlaying(it, music, isPlaying, positionMs, durationMs) }
        }
    }
}

/** The corner card for what's playing: cover, title, album and a gold progress line. */
@Composable
private fun NowPlaying(track: MusicTrack, music: MusicRepository, isPlaying: Boolean, positionMs: Long, durationMs: Long) {
    Row(
        verticalAlignment = Alignment.CenterVertically,
        modifier = Modifier
            .width(320.dp)
            .clip(WarmCardShape)
            .background(LotrBackground.copy(alpha = 0.82f))
            .padding(12.dp),
    ) {
        Box(Modifier.size(72.dp).clip(RoundedCornerShape(8.dp))) {
            GlyphPlaceholder(track.trackNumber?.toString().orEmpty(), TileTwilight)
            rememberCover(track, music)?.let {
                Image(it, contentDescription = null, contentScale = ContentScale.Crop, modifier = Modifier.fillMaxSize())
            }
        }
        Column(Modifier.padding(start = 14.dp)) {
            Text(
                text = if (isPlaying) "▶  Now playing" else "❚❚  Paused",
                color = MaterialTheme.colorScheme.primary,
                style = MaterialTheme.typography.labelSmall,
            )
            Text(track.title, color = MaterialTheme.colorScheme.secondary, style = MaterialTheme.typography.titleSmall, maxLines = 1, overflow = TextOverflow.Ellipsis)
            Text(track.album, color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.7f), style = MaterialTheme.typography.bodySmall, maxLines = 1, overflow = TextOverflow.Ellipsis)
            Spacer(Modifier.height(6.dp))
            val progress = if (durationMs > 0) (positionMs.toFloat() / durationMs).coerceIn(0f, 1f) else 0f
            Box(Modifier.fillMaxWidth().height(3.dp).background(Color.White.copy(alpha = 0.2f))) {
                Box(Modifier.fillMaxHeight().fillMaxWidth(progress).background(MaterialTheme.colorScheme.primary))
            }
        }
    }
}

@Composable
private fun rememberCover(track: MusicTrack, music: MusicRepository): ImageBitmap? {
    val cover by produceState<ImageBitmap?>(null, track.album) { value = music.cover(track)?.asImageBitmap() }
    return cover
}

@Composable
private fun rememberBackdrop(item: MusicItem, music: MusicRepository): Painter? = when (item) {
    is MusicItem.Theme -> FilmRepository.films.firstOrNull { it.id == item.theme.filmId }?.let { painterResource(it.backdropRes()) }
    is MusicItem.Track -> rememberCover(item.track, music)?.let(::BitmapPainter)
}

@Composable
private fun MusicDetails(item: MusicItem, isCurrent: Boolean, isPlaying: Boolean, modifier: Modifier = Modifier) {
    when (item) {
        is MusicItem.Theme -> {
            val listen = item.theme.listen
            DetailsPanel(
                overline = "Themes of the Score  ·  Howard Shore",
                title = item.theme.name,
                meta = "Heard at its best in \"${listen.title}\"  ·  ${formatLength(listen.lengthSeconds.toLong())}",
                body = item.theme.listenFor,
                hint = if (item.heardIn.isEmpty()) {
                    "OK to hear \"${listen.title}\" (official recording, online)"
                } else {
                    "OK to play ${if (item.heardIn.size == 1) "the track" else "the ${item.heardIn.size} tracks"} it's in  ·  hold OK for the official recording"
                },
                modifier = modifier,
            )
        }
        is MusicItem.Track -> {
            val themes = ScoreThemes.themes.filter { it.isHeardIn(item.track.title) }
            DetailsPanel(
                overline = item.album.title,
                title = item.track.title,
                meta = listOfNotNull(
                    item.track.trackNumber?.let { "Track $it" },
                    item.track.durationMs.takeIf { it > 0 }?.let { formatLength(it / 1000) },
                    item.track.artist,
                ).joinToString("  ·  "),
                body = themes.firstOrNull()?.let { "Listen for ${it.name}: ${it.listenFor}" } ?: "From the Music folder on the USB drive.",
                hint = when {
                    isCurrent && isPlaying -> "OK to pause  ·  ⏭ ⏮ next / previous track"
                    isCurrent -> "OK to carry on"
                    else -> "OK to play from here"
                },
                modifier = modifier,
            )
        }
    }
}

private fun tracks(count: Int) = if (count == 1) "1 track" else "$count tracks"
