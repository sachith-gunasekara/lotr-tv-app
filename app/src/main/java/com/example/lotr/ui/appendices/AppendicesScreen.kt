package com.example.lotr.ui.appendices

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.itemsIndexed
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
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.focus.onFocusChanged
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.painter.BitmapPainter
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.tv.material3.Icon
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.Tab
import androidx.tv.material3.TabDefaults
import androidx.tv.material3.TabRow
import androidx.tv.material3.TabRowDefaults
import androidx.tv.material3.Text
import coil3.compose.AsyncImage
import coil3.compose.AsyncImagePainter
import coil3.compose.rememberAsyncImagePainter
import com.example.lotr.R
import com.example.lotr.data.AppendicesRepository
import com.example.lotr.data.AppendixCategory
import com.example.lotr.data.FilmLibrary
import com.example.lotr.data.PlaybackPositionRepository
import com.example.lotr.data.ThumbnailRepository
import com.example.lotr.data.WatchProgress
import com.example.lotr.data.YouTubeVideo
import com.example.lotr.data.model.DriveExtra
import com.example.lotr.ui.components.DetailsPanel
import com.example.lotr.ui.components.ImmersiveBackdrop
import com.example.lotr.ui.components.ShelfCard
import com.example.lotr.ui.components.ShelfColumn
import com.example.lotr.ui.components.ShelfRow
import com.example.lotr.ui.components.ShelfTitle
import com.example.lotr.ui.components.formatLength
import com.example.lotr.ui.components.formatPlaybackTime
import com.example.lotr.ui.components.lotrBackground
import com.example.lotr.ui.components.rememberFrame
import com.example.lotr.ui.theme.TileRiver
import kotlinx.coroutines.launch

/** One card on the Appendices shelves: a YouTube video, or an extra from the drive. */
private sealed interface Appendix {
    val key: String
    val watchId: String
    val title: String

    data class Online(val video: YouTubeVideo, val where: String, val about: String) : Appendix {
        override val key get() = video.watchId
        override val watchId get() = video.watchId
        override val title get() = video.title
    }

    data class OnDrive(val extra: DriveExtra) : Appendix {
        override val key get() = extra.id
        override val watchId get() = extra.id
        override val title get() = extra.title
    }
}

private data class AppendixRow(val title: String, val about: String, val items: List<Appendix>)

/** A tab of shelves: one catalog category, or the extras found on the drive. */
private data class AppendixTab(val id: String, val title: String, val rows: List<AppendixRow>)

/**
 * Behind the scenes: the catalog's categories as tabs across the top (the extended editions'
 * appendices, the making of, the music, the cast, Tolkien, ...), each a stack of shelves, plus the
 * extras found on the drive. Otherwise laid out like The Films - the focused card drives the
 * backdrop and details panel.
 */
@Composable
fun AppendicesScreen(
    filmLibrary: FilmLibrary,
    appendices: AppendicesRepository,
    playbackPositionRepository: PlaybackPositionRepository,
    thumbnails: ThumbnailRepository,
    onPlayVideo: (YouTubeVideo) -> Unit,
    onPlayExtra: (DriveExtra) -> Unit,
    modifier: Modifier = Modifier,
) {
    val scan by filmLibrary.scan.collectAsState()
    val extras = scan?.extras.orEmpty()
    val categories by produceState<List<AppendixCategory>?>(null) { value = appendices.categories() }
    val tabs = remember(extras, categories) {
        listOfNotNull(
            extras.takeIf { it.isNotEmpty() }?.let { found ->
                AppendixTab("drive", "On the drive", listOf(AppendixRow("On the drive", "From the Appendices folder on the USB drive", found.map(Appendix::OnDrive))))
            },
        ) + categories.orEmpty().map { category ->
            AppendixTab(
                id = category.id,
                title = category.title,
                rows = category.shelves.map { shelf ->
                    AppendixRow(shelf.title, shelf.about, shelf.videos.map { Appendix.Online(it, "${category.title}  ·  ${shelf.title}", shelf.about) })
                },
            )
        }
    }
    if (tabs.isEmpty()) {
        Box(modifier.fillMaxSize().lotrBackground())
        return
    }
    val all = tabs.flatMap { tab -> tab.rows.flatMap { it.items } }

    // Saveable, so coming back from a video lands on the card (and tab) that was playing.
    var focusedKey by rememberSaveable { mutableStateOf<String?>(null) }
    val focused = all.firstOrNull { it.key == focusedKey } ?: all.first()
    var tabId by rememberSaveable { mutableStateOf<String?>(null) }
    val tabIndex = tabs.indexOfFirst { it.id == tabId }.takeIf { it >= 0 }
        ?: tabs.indexOfFirst { tab -> tab.rows.any { row -> row.items.any { it.key == focused.key } } }.coerceAtLeast(0)
    val tab = tabs[tabIndex]
    // The card in this tab to land on: the one last focused, if it's here, else the first.
    val landing = tab.rows.flatMap { it.items }.firstOrNull { it.key == focused.key } ?: tab.rows.first().items.first()
    val shown = if (focused.key in tab.rows.flatMap { r -> r.items.map { it.key } }) focused else landing

    val scope = rememberCoroutineScope()
    val play = { item: Appendix ->
        when (item) {
            is Appendix.Online -> onPlayVideo(item.video)
            is Appendix.OnDrive -> onPlayExtra(item.extra)
        }
    }
    val startOver = { item: Appendix ->
        scope.launch {
            playbackPositionRepository.resetPosition(item.watchId)
            play(item)
        }
        Unit
    }

    Box(modifier.fillMaxSize().lotrBackground()) {
        AppendixBackdrop(shown, thumbnails)

        Column(Modifier.fillMaxSize().padding(top = 28.dp)) {
            AppendixDetails(shown, playbackPositionRepository, Modifier.padding(horizontal = 48.dp))
            Spacer(Modifier.height(12.dp))

            // Moving along the tabs switches the shelves below; ▼ goes down into them.
            TabRow(
                selectedTabIndex = tabIndex,
                modifier = Modifier.padding(horizontal = 48.dp),
                indicator = { positions, doesTabRowHaveFocus ->
                    TabRowDefaults.PillIndicator(
                        currentTabPosition = positions[tabIndex],
                        doesTabRowHaveFocus = doesTabRowHaveFocus,
                        activeColor = MaterialTheme.colorScheme.primary,
                        inactiveColor = MaterialTheme.colorScheme.primary.copy(alpha = 0.25f),
                    )
                },
            ) {
                tabs.forEachIndexed { i, t ->
                    Tab(
                        selected = i == tabIndex,
                        onFocus = { tabId = t.id },
                        colors = TabDefaults.pillIndicatorTabColors(
                            contentColor = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.75f),
                            selectedContentColor = MaterialTheme.colorScheme.secondary,
                            focusedContentColor = MaterialTheme.colorScheme.onPrimary,
                        ),
                    ) {
                        Text(t.title, style = MaterialTheme.typography.labelLarge, modifier = Modifier.padding(horizontal = 16.dp, vertical = 6.dp))
                    }
                }
            }
            Spacer(Modifier.height(8.dp))

            val initialFocus = remember { FocusRequester() }
            LaunchedEffect(Unit) {
                withFrameNanos { }
                initialFocus.requestFocus()
            }
            key(tab.id) {
                val focusedRow = tab.rows.indexOfFirst { row -> row.items.any { it.key == shown.key } }.coerceAtLeast(0)
                val columnState = remember { LazyListState(firstVisibleItemIndex = focusedRow) }
                ShelfColumn(state = columnState, modifier = Modifier.weight(1f)) {
                    items(tab.rows, key = { it.title }) { row ->
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
                            val initialIndex = row.items.indexOfFirst { it.key == shown.key }.coerceAtLeast(0)
                            val rowState = remember { LazyListState(firstVisibleItemIndex = initialIndex) }
                            ShelfRow(state = rowState) {
                                itemsIndexed(row.items, key = { _, item -> item.key }) { _, item ->
                                    AppendixCard(
                                        item = item,
                                        thumbnails = thumbnails,
                                        playbackPositionRepository = playbackPositionRepository,
                                        onClick = { play(item) },
                                        onLongClick = { startOver(item) },
                                        modifier = Modifier
                                            .onFocusChanged { if (it.isFocused) focusedKey = item.key }
                                            .let { if (item.key == shown.key) it.focusRequester(initialFocus) else it },
                                    )
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun AppendixCard(
    item: Appendix,
    thumbnails: ThumbnailRepository,
    playbackPositionRepository: PlaybackPositionRepository,
    onClick: () -> Unit,
    onLongClick: () -> Unit,
    modifier: Modifier = Modifier,
) {
    val progress by remember(item.watchId) { playbackPositionRepository.progress(item.watchId) }
        .collectAsState(initial = WatchProgress(0, 0))
    val length = when (item) {
        is Appendix.Online -> item.video.lengthSeconds.toLong()
        is Appendix.OnDrive -> progress.durationMs / 1000
    }
    ShelfCard(
        title = item.title,
        width = 208,
        onClick = onClick,
        onLongClick = onLongClick,
        modifier = modifier,
        overline = length.takeIf { it > 0 }?.let(::formatLength),
        progress = if (progress.positionMs > 0) progress.fraction else 0f,
    ) {
        AppendixPlaceholder()
        when (item) {
            is Appendix.Online -> AsyncImage(
                model = item.video.thumbnailUrl,
                contentDescription = null,
                contentScale = ContentScale.Crop,
                modifier = Modifier.fillMaxSize(),
            )
            is Appendix.OnDrive -> rememberFrame(item.extra.file, thumbnails)?.let { frame ->
                Image(bitmap = frame, contentDescription = null, contentScale = ContentScale.Crop, modifier = Modifier.fillMaxSize())
            }
        }
    }
}

/** Under the art while it loads (or if the TV is offline): the section's tint and camera icon. */
@Composable
private fun AppendixPlaceholder() {
    Box(
        Modifier
            .fillMaxSize()
            .background(Brush.linearGradient(listOf(TileRiver, TileRiver.copy(alpha = 0.6f), MaterialTheme.colorScheme.background))),
    ) {
        Icon(
            painter = painterResource(R.drawable.ic_videocam),
            contentDescription = null,
            tint = MaterialTheme.colorScheme.primary.copy(alpha = 0.22f),
            modifier = Modifier.align(Alignment.CenterEnd).padding(end = 12.dp).size(64.dp),
        )
    }
}

@Composable
private fun AppendixBackdrop(item: Appendix, thumbnails: ThumbnailRepository) {
    val painter: Painter? = when (item) {
        is Appendix.Online -> {
            // The full-HD still where there is one; older uploads only have the small thumbnail.
            val large = rememberAsyncImagePainter("https://i.ytimg.com/vi/${item.video.youtubeId}/maxresdefault.jpg")
            val small = rememberAsyncImagePainter(item.video.thumbnailUrl)
            val state by large.state.collectAsState()
            if (state is AsyncImagePainter.State.Error) small else large
        }
        is Appendix.OnDrive -> rememberFrame(item.extra.file, thumbnails)?.let(::BitmapPainter)
    }
    ImmersiveBackdrop(key = item.key, painter = painter)
}

@Composable
private fun AppendixDetails(item: Appendix, playbackPositionRepository: PlaybackPositionRepository, modifier: Modifier = Modifier) {
    // key(): fresh state per item, so the previous one's resume point never flashes here.
    val progress = key(item.watchId) {
        remember { playbackPositionRepository.progress(item.watchId) }.collectAsState(initial = WatchProgress(0, 0)).value
    }
    val hint = if (progress.positionMs > 0) {
        "OK to resume at ${formatPlaybackTime(progress.positionMs)}  ·  hold OK to start over"
    } else {
        "OK to watch"
    }
    when (item) {
        is Appendix.Online -> DetailsPanel(
            overline = item.where,
            title = item.title,
            meta = "${formatLength(item.video.lengthSeconds.toLong())}  ·  on YouTube, from ${item.video.channel}",
            body = item.about,
            hint = hint,
            modifier = modifier,
        )
        is Appendix.OnDrive -> DetailsPanel(
            overline = listOfNotNull("On the drive", item.extra.group).joinToString("  ·  "),
            title = item.title,
            meta = (listOfNotNull(progress.durationMs.takeIf { it > 0 }?.let { formatLength(it / 1000) }) + item.extra.file.tags.labels)
                .joinToString("  ·  "),
            body = "From the Appendices folder on the USB drive",
            hint = hint,
            modifier = modifier,
        )
    }
}
