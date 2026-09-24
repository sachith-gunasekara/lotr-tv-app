package com.example.lotr.ui.library

import android.net.Uri
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.animation.Crossfade
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
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
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.produceState
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.runtime.withFrameNanos
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.focus.onFocusChanged
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ImageBitmap
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.graphics.painter.BitmapPainter
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.Text
import com.example.lotr.data.FilmLibrary
import com.example.lotr.data.FilmRepository
import com.example.lotr.data.FilmScan
import com.example.lotr.data.PlaybackPositionRepository
import com.example.lotr.data.RingsOfPower
import com.example.lotr.data.StorageRepository
import com.example.lotr.data.ThumbnailRepository
import com.example.lotr.data.WatchProgress
import com.example.lotr.data.model.Episode
import com.example.lotr.data.model.Film
import com.example.lotr.data.model.FilmFile
import com.example.lotr.data.model.Watchable
import com.example.lotr.ui.components.LotrButton
import com.example.lotr.ui.components.WarmCard
import com.example.lotr.ui.components.backdropRes
import com.example.lotr.ui.components.formatPlaybackTime
import com.example.lotr.ui.components.lotrBackground
import com.example.lotr.ui.theme.LotrBackground
import com.example.lotr.ui.theme.LotrSunHaze
import kotlinx.coroutines.launch

/**
 * The films on top, Rings of Power episodes below. The focused card drives a full-bleed backdrop
 * and the details panel. OK plays (resuming if started); holding OK starts over.
 */
@Composable
fun LibraryScreen(
    storageRepository: StorageRepository,
    filmLibrary: FilmLibrary,
    playbackPositionRepository: PlaybackPositionRepository,
    thumbnails: ThumbnailRepository,
    onPlay: (Watchable, Uri) -> Unit,
    modifier: Modifier = Modifier,
) {
    val hasPermission by filmLibrary.hasPermission.collectAsState()
    val scan by filmLibrary.scan.collectAsState()
    val requestPermission = rememberLauncherForActivityResult(ActivityResultContracts.RequestPermission()) {
        filmLibrary.rescan()
    }
    LaunchedEffect(Unit) {
        if (!hasPermission) requestPermission.launch(storageRepository.readPermission)
    }

    var browsing by remember { mutableStateOf(false) }
    val scope = rememberCoroutineScope()
    if (browsing) {
        FolderBrowser(
            roots = remember { storageRepository.storageRoots() },
            listSubfolders = storageRepository::subfolders,
            onChoose = { folder ->
                scope.launch { storageRepository.setCustomFolder(folder) }
                browsing = false
            },
            onCancel = { browsing = false },
        )
        return
    }

    Box(modifier = modifier.fillMaxSize().lotrBackground()) {
        val current = scan
        when {
            !hasPermission -> StatusMessage(
                text = "Allow access to storage so the films can be found on the USB drive.",
                actionLabel = "Allow access",
                onAction = { requestPermission.launch(storageRepository.readPermission) },
            )
            current == null -> StatusMessage(text = "Looking for the films…")
            current.folder == null -> StatusMessage(
                text = "Insert the USB pendrive with a LOTR folder on it, or choose a folder.",
                actionLabel = "Choose a folder",
                onAction = { browsing = true },
            )
            else -> Shelves(
                scan = current,
                playbackPositionRepository = playbackPositionRepository,
                thumbnails = thumbnails,
                onPlay = onPlay,
                onStartOver = { watchable, uri ->
                    scope.launch {
                        playbackPositionRepository.resetPosition(watchable.id)
                        onPlay(watchable, uri)
                    }
                },
                onChooseFolder = { browsing = true },
                onUseUsb = { scope.launch { storageRepository.setCustomFolder(null) } },
            )
        }
    }
}

private fun Watchable.fileIn(scan: FilmScan): FilmFile? = when (this) {
    is Film -> scan.files[id]
    is Episode -> file
}

@Composable
private fun Shelves(
    scan: FilmScan,
    playbackPositionRepository: PlaybackPositionRepository,
    thumbnails: ThumbnailRepository,
    onPlay: (Watchable, Uri) -> Unit,
    onStartOver: (Watchable, Uri) -> Unit,
    onChooseFolder: () -> Unit,
    onUseUsb: () -> Unit,
) {
    val films = FilmRepository.films
    val episodes = scan.episodes
    val all: List<Watchable> = films + episodes
    val lastWatchedId by playbackPositionRepository.lastWatchedId.collectAsState(initial = null)

    // Saveable (MainActivity keeps each screen's saveable state) so returning from the player
    // lands back on the title that was playing.
    var focusedId by rememberSaveable { mutableStateOf<String?>(null) }
    val focused = all.firstOrNull { it.id == focusedId }
        ?: all.firstOrNull { it.id == lastWatchedId }
        ?: films.first()

    Box(Modifier.fillMaxSize()) {
        ImmersiveBackdrop(focused, thumbnails)

        Column(Modifier.fillMaxSize().padding(top = 28.dp)) {
            DetailsPanel(
                watchable = focused,
                file = focused.fileIn(scan),
                playbackPositionRepository = playbackPositionRepository,
                modifier = Modifier.padding(horizontal = 48.dp),
            )
            Spacer(Modifier.weight(1f))

            val initialFocus = remember { FocusRequester() }
            LaunchedEffect(Unit) {
                withFrameNanos { }
                initialFocus.requestFocus()
            }
            val onCardFocused = { w: Watchable -> focusedId = w.id }

            Row(verticalAlignment = Alignment.CenterVertically, modifier = Modifier.fillMaxWidth().padding(end = 48.dp)) {
                ShelfTitle("The Films")
                Spacer(Modifier.weight(1f))
                SourceChip(scan, onChooseFolder, onUseUsb)
            }
            Shelf(
                items = films,
                initialIndex = films.indexOfFirst { it.id == focused.id }.coerceAtLeast(0),
            ) { film ->
                val file = scan.files[film.id]
                WatchableCard(
                    watchable = film,
                    file = file,
                    playbackPositionRepository = playbackPositionRepository,
                    width = 192,
                    onPlay = onPlay,
                    onStartOver = onStartOver,
                    modifier = Modifier
                        .onFocusChanged { if (it.isFocused) onCardFocused(film) }
                        .let { if (film.id == focused.id) it.focusRequester(initialFocus) else it },
                ) { FilmArt(film, file) }
            }

            Spacer(Modifier.height(2.dp))
            Row(verticalAlignment = Alignment.CenterVertically) {
                ShelfTitle(RingsOfPower.TITLE)
                if (episodes.none { it.file != null }) {
                    Text(
                        text = "none on the drive yet - add a \"Rings of Power\" folder with files named like S01E01",
                        color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.6f),
                        style = MaterialTheme.typography.bodySmall,
                        modifier = Modifier.padding(start = 16.dp),
                    )
                }
            }
            EpisodeShelf(
                episodes = episodes,
                focusedId = focused.id,
            ) { episode ->
                WatchableCard(
                    watchable = episode,
                    file = episode.file,
                    playbackPositionRepository = playbackPositionRepository,
                    width = 176,
                    onPlay = onPlay,
                    onStartOver = onStartOver,
                    modifier = Modifier
                        .onFocusChanged { if (it.isFocused) onCardFocused(episode) }
                        .let { if (episode.id == focused.id) it.focusRequester(initialFocus) else it },
                ) { EpisodeArt(episode, thumbnails) }
            }
        }
    }
}

/** Episodes in season order, each season's run introduced by a small marker. */
@Composable
private fun EpisodeShelf(episodes: List<Episode>, focusedId: String, card: @Composable (Episode) -> Unit) {
    val bySeason = episodes.groupBy { it.season }.toSortedMap()
    // Index in the row (markers included) of the card that gets initial focus.
    var index = 0
    var initialIndex = 0
    bySeason.forEach { (_, seasonEpisodes) ->
        index++ // the marker
        seasonEpisodes.forEach { if (it.id == focusedId) initialIndex = index; index++ }
    }
    val state = remember { LazyListState(firstVisibleItemIndex = (initialIndex - 1).coerceAtLeast(0)) }
    LazyRow(
        state = state,
        horizontalArrangement = Arrangement.spacedBy(20.dp),
        contentPadding = PaddingValues(horizontal = 48.dp, vertical = 10.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        bySeason.forEach { (season, seasonEpisodes) ->
            item(key = "season_$season") {
                SeasonMarker(season, onDrive = seasonEpisodes.count { it.file != null }, total = seasonEpisodes.size)
            }
            items(seasonEpisodes, key = { it.id }) { card(it) }
        }
    }
}

@Composable
private fun SeasonMarker(season: Int, onDrive: Int, total: Int) {
    val info = RingsOfPower.season(season)
    Column(Modifier.width(92.dp)) {
        Text("Season $season", color = MaterialTheme.colorScheme.primary, style = MaterialTheme.typography.titleSmall)
        info?.let {
            Text(
                text = "${it.year}  ·  $onDrive/$total on drive",
                color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.65f),
                style = MaterialTheme.typography.bodySmall,
            )
        }
    }
}

@Composable
private fun ShelfTitle(text: String) {
    Text(
        text = text,
        color = MaterialTheme.colorScheme.secondary,
        style = MaterialTheme.typography.titleMedium,
        modifier = Modifier.padding(start = 48.dp),
    )
}

@Composable
private fun <T : Watchable> Shelf(items: List<T>, initialIndex: Int, card: @Composable (T) -> Unit) {
    // Start scrolled to the item that gets initial focus, so it's composed and focusable.
    val state = remember { LazyListState(firstVisibleItemIndex = initialIndex) }
    LazyRow(
        state = state,
        horizontalArrangement = Arrangement.spacedBy(20.dp),
        // Room around the cards for the focus scale-up and glow.
        contentPadding = PaddingValues(horizontal = 48.dp, vertical = 10.dp),
    ) {
        items(items, key = { it.id }) { card(it) }
    }
}

@Composable
private fun WatchableCard(
    watchable: Watchable,
    file: FilmFile?,
    playbackPositionRepository: PlaybackPositionRepository,
    width: Int,
    onPlay: (Watchable, Uri) -> Unit,
    onStartOver: (Watchable, Uri) -> Unit,
    modifier: Modifier = Modifier,
    art: @Composable () -> Unit,
) {
    val progress by remember(watchable.id) { playbackPositionRepository.progress(watchable.id) }
        .collectAsState(initial = WatchProgress(0, 0))
    var focused by remember { mutableStateOf(false) }
    WarmCard(
        onClick = { file?.let { onPlay(watchable, it.uri) } },
        onLongClick = { file?.let { onStartOver(watchable, it.uri) } },
        modifier = modifier
            .size(width = width.dp, height = (width * 9 / 16).dp)
            .onFocusChanged { focused = it.isFocused }
            .alpha(if (file == null) 0.45f else 1f),
    ) {
        art()
        // Resting cards sit slightly back in shadow; the focused one comes into the light.
        Box(
            Modifier
                .fillMaxSize()
                .background(
                    Brush.verticalGradient(
                        0.35f to Color.Black.copy(alpha = if (focused) 0f else 0.25f),
                        1f to Color.Black.copy(alpha = 0.85f),
                    ),
                ),
        )
        Column(Modifier.align(Alignment.BottomStart).padding(horizontal = 12.dp, vertical = 10.dp)) {
            if (watchable is Episode) {
                Text(
                    text = watchable.code,
                    color = MaterialTheme.colorScheme.primary,
                    style = MaterialTheme.typography.labelSmall,
                )
            }
            Text(
                text = watchable.title,
                color = MaterialTheme.colorScheme.secondary,
                style = MaterialTheme.typography.titleSmall.copy(fontSize = 12.sp, lineHeight = 15.sp),
                maxLines = if (watchable is Episode) 1 else 2,
                overflow = TextOverflow.Ellipsis,
            )
        }
        if (progress.positionMs > 0 && progress.fraction > 0f) {
            Box(Modifier.align(Alignment.BottomStart).fillMaxWidth().height(3.dp).background(Color.White.copy(alpha = 0.2f))) {
                Box(Modifier.fillMaxHeight().fillMaxWidth(progress.fraction).background(MaterialTheme.colorScheme.primary))
            }
        }
    }
}

@Composable
private fun FilmArt(film: Film, file: FilmFile?) {
    Image(
        painter = painterResource(film.backdropRes()),
        contentDescription = null,
        contentScale = ContentScale.Crop,
        modifier = Modifier.fillMaxSize(),
    )
    if (file == null) {
        Text(
            text = "not on the drive",
            color = MaterialTheme.colorScheme.onBackground,
            style = MaterialTheme.typography.labelSmall,
            modifier = Modifier.padding(10.dp),
        )
    }
}

@Composable
private fun EpisodeArt(episode: Episode, thumbnails: ThumbnailRepository) {
    val frame = rememberFrame(episode.file, thumbnails)
    if (frame != null) {
        Image(bitmap = frame, contentDescription = null, contentScale = ContentScale.Crop, modifier = Modifier.fillMaxSize())
    } else {
        EpisodePlaceholder(episode)
    }
    if (episode.file == null) {
        Text(
            text = episode.arrives?.let { "arrives $it" } ?: "not on the drive",
            color = MaterialTheme.colorScheme.onBackground,
            style = MaterialTheme.typography.labelSmall,
            modifier = Modifier.padding(10.dp),
        )
    }
}

/** For episodes without a picture: a warm panel with the episode number in large Elvish lettering. */
@Composable
fun EpisodePlaceholder(episode: Episode, modifier: Modifier = Modifier) {
    Box(
        modifier
            .fillMaxSize()
            .background(Brush.linearGradient(listOf(Color(0xFF4A3520), Color(0xFF1F150C), Color(0xFF0E0B08)))),
    ) {
        Text(
            text = episode.number.toString(),
            color = MaterialTheme.colorScheme.primary.copy(alpha = 0.22f),
            style = MaterialTheme.typography.displayLarge.copy(fontSize = 96.sp),
            modifier = Modifier.align(Alignment.CenterEnd).padding(end = 14.dp),
        )
    }
}

@Composable
private fun rememberFrame(file: FilmFile?, thumbnails: ThumbnailRepository): ImageBitmap? {
    val frame by produceState<ImageBitmap?>(null, file) {
        value = file?.let { thumbnails.frame(it)?.asImageBitmap() }
    }
    return frame
}

/** The focused title's art, full-bleed and softened into the page, with a haze of late sunlight. */
@Composable
private fun ImmersiveBackdrop(watchable: Watchable, thumbnails: ThumbnailRepository) {
    val episodeFrame = (watchable as? Episode)?.let { rememberFrame(it.file, thumbnails) }
    val painter: Painter? = when (watchable) {
        is Film -> painterResource(watchable.backdropRes())
        is Episode -> episodeFrame?.let(::BitmapPainter)
    }
    Crossfade(targetState = watchable.id to painter, animationSpec = tween(700), label = "backdrop") { (_, shown) ->
        Box(Modifier.fillMaxSize()) {
            if (shown != null) {
                Image(
                    painter = shown,
                    contentDescription = null,
                    contentScale = ContentScale.Crop,
                    alignment = Alignment.CenterEnd,
                    modifier = Modifier.fillMaxSize(),
                )
            }
            Box(
                Modifier
                    .fillMaxSize()
                    .background(
                        Brush.horizontalGradient(
                            0f to LotrBackground.copy(alpha = 0.97f),
                            0.45f to LotrBackground.copy(alpha = 0.7f),
                            1f to LotrBackground.copy(alpha = 0.15f),
                        ),
                    ),
            )
            Box(
                Modifier
                    .fillMaxSize()
                    .background(Brush.verticalGradient(0.35f to Color.Transparent, 0.62f to LotrBackground.copy(alpha = 0.85f), 1f to LotrBackground)),
            )
            // Late-afternoon light from the top right.
            Box(
                Modifier
                    .fillMaxSize()
                    .background(Brush.radialGradient(listOf(LotrSunHaze.copy(alpha = 0.16f), Color.Transparent), radius = 1400f, center = androidx.compose.ui.geometry.Offset(1900f, 0f))),
            )
        }
    }
}

@Composable
private fun DetailsPanel(
    watchable: Watchable,
    file: FilmFile?,
    playbackPositionRepository: PlaybackPositionRepository,
    modifier: Modifier = Modifier,
) {
    // key(): fresh state per title, so the previous title's resume point never flashes here.
    val progress = key(watchable.id) {
        remember { playbackPositionRepository.progress(watchable.id) }.collectAsState(initial = WatchProgress(0, 0)).value
    }
    Column(modifier.width(820.dp)) {
        Text(
            text = when (watchable) {
                is Film -> "The Lord of the Rings"
                is Episode -> "${RingsOfPower.TITLE}  ·  Season ${watchable.season}" +
                    (RingsOfPower.season(watchable.season)?.let { " (${it.year})" } ?: "") +
                    ", Episode ${watchable.number}"
            },
            color = MaterialTheme.colorScheme.primary,
            style = MaterialTheme.typography.labelLarge,
        )
        Spacer(Modifier.height(4.dp))
        Text(
            text = watchable.title,
            color = MaterialTheme.colorScheme.secondary,
            style = MaterialTheme.typography.displaySmall.copy(fontSize = 30.sp, lineHeight = 38.sp),
            maxLines = 1,
            overflow = TextOverflow.Ellipsis,
        )
        val details = when (watchable) {
            is Film -> listOf(watchable.year.toString(), watchable.runtimeFor(file?.tags).toString())
            is Episode -> listOfNotNull(progress.durationMs.takeIf { it > 0 }?.let { "${it / 60_000} min" })
        } + file?.tags?.labels.orEmpty()
        Text(
            text = details.joinToString("  ·  "),
            color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.75f),
            style = MaterialTheme.typography.bodyMedium,
        )
        Spacer(Modifier.height(4.dp))
        Text(
            text = when (watchable) {
                is Film -> watchable.synopsis
                is Episode -> RingsOfPower.episodeTeaser(watchable.season, watchable.number)
            },
            color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.9f),
            style = MaterialTheme.typography.bodyLarge,
            maxLines = 2,
            overflow = TextOverflow.Ellipsis,
        )
        Spacer(Modifier.height(6.dp))
        Text(
            text = when {
                file == null && watchable is Episode && watchable.arrives != null ->
                    "Arrives ${watchable.arrives} on Prime Video - add it to the drive once it's out"
                file == null && watchable is Episode -> "Not on the drive yet"
                file == null -> "Not in this folder"
                progress.positionMs > 0 -> "OK to resume at ${formatPlaybackTime(progress.positionMs)}  ·  hold OK to start over"
                else -> "OK to play"
            },
            color = MaterialTheme.colorScheme.primary,
            style = MaterialTheme.typography.labelMedium,
        )
    }
}

@Composable
private fun SourceChip(scan: FilmScan, onChooseFolder: () -> Unit, onUseUsb: () -> Unit) {
    Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(10.dp)) {
        Text(
            text = if (scan.isCustom) "Playing from a custom folder" else "Playing from the USB drive",
            color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.6f),
            style = MaterialTheme.typography.bodySmall,
        )
        run {
            if (scan.isCustom) {
                LotrButton(onClick = onUseUsb) { Text("Use USB drive", style = MaterialTheme.typography.labelMedium) }
            }
            LotrButton(onClick = onChooseFolder) { Text("Change folder", style = MaterialTheme.typography.labelMedium) }
        }
    }
}

@Composable
private fun StatusMessage(text: String, actionLabel: String? = null, onAction: () -> Unit = {}) {
    val focusRequester = remember { FocusRequester() }
    if (actionLabel != null) LaunchedEffect(Unit) { focusRequester.requestFocus() }

    Column(
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Text(
            text = text,
            color = MaterialTheme.colorScheme.onBackground,
            style = MaterialTheme.typography.bodyLarge,
        )
        if (actionLabel != null) {
            Spacer(Modifier.height(24.dp))
            LotrButton(onClick = onAction, modifier = Modifier.focusRequester(focusRequester)) {
                Text(actionLabel)
            }
        }
    }
}
