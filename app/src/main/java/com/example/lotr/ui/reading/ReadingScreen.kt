package com.example.lotr.ui.reading

import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.foundation.lazy.items
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.produceState
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.runtime.withFrameNanos
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.focus.onFocusChanged
import androidx.compose.ui.graphics.ImageBitmap
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.Text
import com.example.lotr.data.FilmLibrary
import com.example.lotr.data.FilmRepository
import com.example.lotr.data.MapTileRepository
import com.example.lotr.data.PictureFolder
import com.example.lotr.data.Reading
import com.example.lotr.data.ReadingPiece
import com.example.lotr.data.StorageRepository
import com.example.lotr.data.readableName
import com.example.lotr.ui.components.DetailsPanel
import com.example.lotr.ui.components.GlyphPlaceholder
import com.example.lotr.ui.components.ImmersiveBackdrop
import com.example.lotr.ui.components.ShelfCard
import com.example.lotr.ui.components.ShelfColumn
import com.example.lotr.ui.components.ShelfRow
import com.example.lotr.ui.components.ShelfTitle
import com.example.lotr.ui.components.backdropRes
import com.example.lotr.ui.components.lotrBackground
import com.example.lotr.ui.theme.TileEmber
import java.io.File

/** One card in the Reading room: a letter from the drive, or one of the bundled texts. */
private sealed interface ReadingItem {
    val key: String

    data class Letter(val file: File, val index: Int) : ReadingItem {
        override val key get() = "letter_${file.path}"
    }

    data class Text(val piece: ReadingPiece, val shelf: Int, val index: Int) : ReadingItem {
        override val key get() = piece.id
    }
}

private data class ReadingRow(val title: String, val about: String, val items: List<ReadingItem>)

/**
 * Letters & languages: any letters on the drive first, then the Tale of Years, Who's Who, the
 * tongues of Middle-earth and some sayings. Laid out like the other sections.
 */
@Composable
fun ReadingScreen(
    storageRepository: StorageRepository,
    filmLibrary: FilmLibrary,
    tiles: MapTileRepository,
    onRead: (shelf: Int, index: Int) -> Unit,
    onOpenLetter: (List<File>, Int) -> Unit,
    modifier: Modifier = Modifier,
) {
    // Letters are pictures (scans or photos), so they need the pictures permission.
    var imageGrants by remember { mutableIntStateOf(0) }
    val requestImages = rememberLauncherForActivityResult(ActivityResultContracts.RequestPermission()) { imageGrants++ }
    LaunchedEffect(Unit) {
        if (!storageRepository.hasImagePermission()) requestImages.launch(storageRepository.imagePermission)
    }
    val scan by filmLibrary.scan.collectAsState()
    // Null until the drive has been looked at, so focus isn't placed before the Letters shelf exists.
    val scanned by produceState<List<File>?>(null, scan?.folder, imageGrants) {
        val folder = scan?.folder
        value = if (folder != null && storageRepository.hasImagePermission()) storageRepository.pictures(folder, PictureFolder.Letters) else emptyList()
    }
    val letters = scanned.orEmpty()

    val rows = remember(letters) {
        listOfNotNull(
            letters.takeIf { it.isNotEmpty() }?.let { files ->
                ReadingRow("Letters", "From the Letters folder on the USB drive", files.mapIndexed { i, f -> ReadingItem.Letter(f, i) })
            },
        ) + Reading.shelves.mapIndexed { s, shelf ->
            ReadingRow(shelf.title, shelf.about, shelf.pieces.mapIndexed { i, piece -> ReadingItem.Text(piece, s, i) })
        }
    }
    val all = rows.flatMap { it.items }

    var focusedKey by rememberSaveable { mutableStateOf<String?>(null) }
    val focused = all.firstOrNull { it.key == focusedKey } ?: all.first()
    val focusedRow = rows.indexOfFirst { row -> row.items.any { it.key == focused.key } }

    Box(modifier.fillMaxSize().lotrBackground()) {
        ImmersiveBackdrop(key = focused.key, painter = rememberBackdrop(focused))

        Column(Modifier.fillMaxSize().padding(top = 28.dp)) {
            ReadingDetails(focused, Modifier.padding(horizontal = 48.dp))
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
                                ShelfCard(
                                    title = item.cardTitle,
                                    width = 208,
                                    onClick = {
                                        when (item) {
                                            is ReadingItem.Letter -> onOpenLetter(letters, item.index)
                                            is ReadingItem.Text -> onRead(item.shelf, item.index)
                                        }
                                    },
                                    overline = (item as? ReadingItem.Text)?.piece?.cardOverline,
                                    modifier = Modifier
                                        .onFocusChanged { if (it.isFocused) focusedKey = item.key }
                                        .let { if (item.key == focused.key) it.focusRequester(initialFocus) else it },
                                ) {
                                    when (item) {
                                        is ReadingItem.Letter -> {
                                            GlyphPlaceholder(glyph = "", tint = TileEmber)
                                            rememberLetter(item.file, tiles, maxSide = 480)?.let {
                                                Image(it, contentDescription = null, contentScale = ContentScale.Crop, modifier = Modifier.fillMaxSize())
                                            }
                                        }
                                        is ReadingItem.Text -> GlyphPlaceholder(glyph = item.piece.glyph, tint = TileEmber)
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

private val ReadingItem.cardTitle: String
    get() = when (this) {
        is ReadingItem.Letter -> readableName(file.nameWithoutExtension)
        is ReadingItem.Text -> piece.title
    }

/** The small gold line on a card: the date for the Tale of Years, nothing otherwise. */
private val ReadingPiece.cardOverline: String?
    get() = overline.substringAfter("The Tale of Years  ·  ", missingDelimiterValue = "").ifEmpty { null }

@Composable
private fun rememberLetter(file: File, tiles: MapTileRepository, maxSide: Int): ImageBitmap? {
    val image by produceState<ImageBitmap?>(null, file, maxSide) {
        value = tiles.picture(file, maxSide).tile(0, 0, 0)?.asImageBitmap()
    }
    return image
}

@Composable
private fun rememberBackdrop(item: ReadingItem): Painter? = when (item) {
    // A letter is mostly bright paper: behind the page it would glare, so letters keep the plain page.
    is ReadingItem.Letter -> null
    is ReadingItem.Text -> FilmRepository.films.firstOrNull { it.id == item.piece.filmId }?.let { painterResource(it.backdropRes()) }
}

@Composable
private fun ReadingDetails(item: ReadingItem, modifier: Modifier = Modifier) {
    when (item) {
        is ReadingItem.Letter -> DetailsPanel(
            overline = "Reading  ·  Letters",
            title = readableName(item.file.nameWithoutExtension),
            meta = item.file.parentFile?.name.orEmpty(),
            body = "From the Letters folder on the USB drive",
            hint = "OK to read  ·  ◀ ▶ to leaf through",
            modifier = modifier,
        )
        is ReadingItem.Text -> DetailsPanel(
            overline = item.piece.overline,
            title = item.piece.title,
            meta = "",
            body = item.piece.summary,
            hint = "OK to read",
            modifier = modifier,
        )
    }
}
