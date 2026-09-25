package com.example.lotr.ui.vault

import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
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
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.ImageBitmap
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.graphics.painter.BitmapPainter
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.dp
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.Text
import com.example.lotr.data.Atlas
import com.example.lotr.data.AtlasMap
import com.example.lotr.data.FilmLibrary
import com.example.lotr.data.Journey
import com.example.lotr.data.MapTileRepository
import com.example.lotr.data.PictureFolder
import com.example.lotr.data.StorageRepository
import com.example.lotr.data.readableName
import com.example.lotr.ui.components.DetailsPanel
import com.example.lotr.ui.components.ImmersiveBackdrop
import com.example.lotr.ui.components.ShelfCard
import com.example.lotr.ui.components.ShelfColumn
import com.example.lotr.ui.components.ShelfRow
import com.example.lotr.ui.components.ShelfTitle
import com.example.lotr.ui.components.lotrBackground
import com.example.lotr.ui.theme.LotrGold
import com.example.lotr.ui.theme.TileMoss
import java.io.File
import kotlin.math.max
import kotlin.math.min

/** One card in the Vault. */
private sealed interface VaultItem {
    val key: String

    data class Map(val map: AtlasMap) : VaultItem {
        override val key get() = "map_${map.id}"
    }

    data class Road(val journey: Journey) : VaultItem {
        override val key get() = "journey_${journey.id}"
    }

    /** Middle-earth in 3D: the open world, or one journey walked through it. */
    data class World(val journey: Journey?) : VaultItem {
        override val key get() = "world_${journey?.id ?: "open"}"
    }

    data class Picture(val file: File, val index: Int) : VaultItem {
        override val key get() = "art_${file.path}"
    }
}

private data class VaultRow(val title: String, val about: String, val items: List<VaultItem>)

/**
 * Maps & artwork: the atlas, the great journeys traced across Middle-earth, and any pictures in an
 * Art folder on the drive. Laid out like The Films and Appendices.
 */
@Composable
fun VaultScreen(
    storageRepository: StorageRepository,
    filmLibrary: FilmLibrary,
    tiles: MapTileRepository,
    onOpenMap: (AtlasMap) -> Unit,
    onFollowJourney: (Journey) -> Unit,
    onOpenWorld: (Journey?) -> Unit,
    onOpenPicture: (List<File>, Int) -> Unit,
    modifier: Modifier = Modifier,
) {
    // Pictures need their own permission; ask once on the way in, and look again when granted.
    var imageGrants by remember { mutableIntStateOf(0) }
    val requestImages = rememberLauncherForActivityResult(ActivityResultContracts.RequestPermission()) { imageGrants++ }
    LaunchedEffect(Unit) {
        if (!storageRepository.hasImagePermission()) requestImages.launch(storageRepository.imagePermission)
    }
    val scan by filmLibrary.scan.collectAsState()
    // Null until the drive has been looked at, so focus isn't placed before the Artwork shelf exists.
    val scanned by produceState<List<File>?>(null, scan?.folder, imageGrants) {
        val folder = scan?.folder
        value = if (folder != null && storageRepository.hasImagePermission()) storageRepository.pictures(folder, PictureFolder.Art) else emptyList()
    }
    val artwork = scanned.orEmpty()

    val rows = remember(artwork) {
        listOfNotNull(
            VaultRow("Maps", "Explore them up close - OK zooms in, Back zooms out", Atlas.maps.map(VaultItem::Map)),
            VaultRow(
                "Middle-earth in 3D",
                "Fly over the land, or walk a journey with the travellers and see what happened at each stop",
                listOf(VaultItem.World(null)) + Atlas.journeys.map { VaultItem.World(it) },
            ),
            VaultRow(
                "Journeys on the Map",
                "The same journeys in 2D - the road traced stop by stop on the painted map",
                Atlas.journeys.map(VaultItem::Road),
            ),
            artwork.takeIf { it.isNotEmpty() }?.let { files ->
                VaultRow("Artwork", "From the Art folder on the USB drive", files.mapIndexed { i, f -> VaultItem.Picture(f, i) })
            },
        )
    }
    val all = rows.flatMap { it.items }

    var focusedKey by rememberSaveable { mutableStateOf<String?>(null) }
    val focused = all.firstOrNull { it.key == focusedKey } ?: all.first()
    val focusedRow = rows.indexOfFirst { row -> row.items.any { it.key == focused.key } }

    Box(modifier.fillMaxSize().lotrBackground()) {
        val backdrop = rememberArt(focused, tiles, forBackdrop = true)
        ImmersiveBackdrop(key = focused.key, painter = backdrop?.let(::BitmapPainter))

        Column(Modifier.fillMaxSize().padding(top = 28.dp)) {
            VaultDetails(focused, Modifier.padding(horizontal = 48.dp))
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
                                modifier = Modifier.padding(start = 16.dp, end = 48.dp),
                            )
                        }
                        val initialIndex = row.items.indexOfFirst { it.key == focused.key }.coerceAtLeast(0)
                        ShelfRow(state = remember { LazyListState(firstVisibleItemIndex = initialIndex) }) {
                            items(row.items, key = { it.key }) { item ->
                                ShelfCard(
                                    title = item.title,
                                    width = 208,
                                    onClick = {
                                        when (item) {
                                            is VaultItem.Map -> onOpenMap(item.map)
                                            is VaultItem.Road -> onFollowJourney(item.journey)
                                            is VaultItem.World -> onOpenWorld(item.journey)
                                            is VaultItem.Picture -> onOpenPicture(artwork, item.index)
                                        }
                                    },
                                    overline = item.overline,
                                    modifier = Modifier
                                        .onFocusChanged { if (it.isFocused) focusedKey = item.key }
                                        .let { if (item.key == focused.key) it.focusRequester(initialFocus) else it },
                                ) {
                                    VaultPlaceholder()
                                    if (item is VaultItem.Road) {
                                        JourneyArt(item.journey, tiles)
                                    } else if (item is VaultItem.World) {
                                        WorldArt(item.journey, tiles)
                                    } else {
                                        rememberArt(item, tiles, forBackdrop = false)?.let {
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
}

private val VaultItem.title: String
    get() = when (this) {
        is VaultItem.Map -> map.title
        is VaultItem.Road -> journey.title
        is VaultItem.World -> journey?.title ?: "Roam Middle-earth"
        is VaultItem.Picture -> readableName(file.nameWithoutExtension)
    }

private val VaultItem.overline: String?
    get() = when (this) {
        is VaultItem.Map -> if (map.places.isNotEmpty()) "${map.places.size} places" else null
        is VaultItem.Road -> "2D map  ·  ${journey.stops.size} stops"
        is VaultItem.World -> if (journey != null) "3D journey  ·  ${journey.stops.size} stops" else "3D  ·  open world"
        is VaultItem.Picture -> null
    }

/** A map's preview, or a picture scaled down to card (or backdrop) size. */
@Composable
private fun rememberArt(item: VaultItem, tiles: MapTileRepository, forBackdrop: Boolean): ImageBitmap? {
    val art by produceState<ImageBitmap?>(null, item.key, forBackdrop) {
        value = when (item) {
            is VaultItem.Map -> tiles.preview(item.map.assetDir)
            is VaultItem.Road -> tiles.preview(Atlas.middleEarth.assetDir)
            is VaultItem.World -> tiles.worldPreview()
            is VaultItem.Picture -> tiles.picture(item.file, maxSide = if (forBackdrop) 1920 else 480).tile(0, 0, 0)
        }?.asImageBitmap()
    }
    return art
}

/** The Middle-earth map framed around a journey, with its road drawn on. */
@Composable
private fun JourneyArt(journey: Journey, tiles: MapTileRepository) {
    val map by produceState<ImageBitmap?>(null) { value = tiles.preview(Atlas.middleEarth.assetDir)?.asImageBitmap() }
    val stops = remember(journey) { journey.stops.map { Atlas.place(it.placeId) } }
    Canvas(Modifier.fillMaxSize()) {
        val image = map ?: return@Canvas
        // Fit the stops' bounding box (with a margin) to the card.
        val minX = stops.minOf { it.x } * image.width
        val maxX = stops.maxOf { it.x } * image.width
        val minY = stops.minOf { it.y } * image.height
        val maxY = stops.maxOf { it.y } * image.height
        val margin = 0.08f * image.width
        val scale = min(size.width / (maxX - minX + 2 * margin), size.height / (maxY - minY + 2 * margin))
            .coerceAtLeast(max(size.width / image.width, size.height / image.height))
        val center = Offset((minX + maxX) / 2, (minY + maxY) / 2)
        val origin = Offset(size.width / 2 - center.x * scale, size.height / 2 - center.y * scale)
        drawImage(
            image = image,
            dstOffset = IntOffset(origin.x.toInt(), origin.y.toInt()),
            dstSize = IntSize((image.width * scale).toInt(), (image.height * scale).toInt()),
        )
        val points = stops.map { Offset(origin.x + it.x * image.width * scale, origin.y + it.y * image.height * scale) }
        drawJourney(points, travelled = points.lastIndex.toFloat(), color = LotrGold, width = 2.5f * density)
    }
}

/** The 3D world's terrain, framed around a journey (or the whole land), its road drawn on. */
@Composable
private fun WorldArt(journey: Journey?, tiles: MapTileRepository) {
    val terrain by produceState<ImageBitmap?>(null) { value = tiles.worldPreview()?.asImageBitmap() }
    val positions by produceState(emptyMap<String, Pair<Float, Float>>()) { value = tiles.worldPlaces() }
    Canvas(Modifier.fillMaxSize()) {
        val image = terrain ?: return@Canvas
        val stops = journey?.stops?.mapNotNull { positions[it.placeId] }.orEmpty()
        val (scale, origin) = if (stops.size > 1) {
            val minX = stops.minOf { it.first } * image.width
            val maxX = stops.maxOf { it.first } * image.width
            val minY = stops.minOf { it.second } * image.height
            val maxY = stops.maxOf { it.second } * image.height
            val margin = 0.06f * image.width
            val s = min(size.width / (maxX - minX + 2 * margin), size.height / (maxY - minY + 2 * margin))
                .coerceAtLeast(max(size.width / image.width, size.height / image.height))
            s to Offset(size.width / 2 - (minX + maxX) / 2 * s, size.height / 2 - (minY + maxY) / 2 * s)
        } else {
            val s = max(size.width / image.width, size.height / image.height)
            s to Offset((size.width - image.width * s) / 2, (size.height - image.height * s) / 2)
        }
        drawImage(image, dstOffset = IntOffset(origin.x.toInt(), origin.y.toInt()), dstSize = IntSize((image.width * scale).toInt(), (image.height * scale).toInt()))
        val points = stops.map { Offset(origin.x + it.first * image.width * scale, origin.y + it.second * image.height * scale) }
        drawJourney(points, travelled = points.lastIndex.toFloat(), color = LotrGold, width = 2.5f * density)
    }
}

/** Under the art while it loads: the Vault tile's moss. */
@Composable
private fun VaultPlaceholder() {
    Box(Modifier.fillMaxSize().background(Brush.linearGradient(listOf(TileMoss, TileMoss.copy(alpha = 0.6f), MaterialTheme.colorScheme.background))))
}

@Composable
private fun VaultDetails(item: VaultItem, modifier: Modifier = Modifier) {
    when (item) {
        is VaultItem.Map -> DetailsPanel(
            overline = "The Vault  ·  Maps",
            title = item.map.title,
            meta = item.map.credit,
            body = item.map.about,
            hint = "OK to explore",
            modifier = modifier,
        )
        is VaultItem.Road -> {
            val first = Atlas.place(item.journey.stops.first().placeId).name
            val last = Atlas.place(item.journey.stops.last().placeId).name
            DetailsPanel(
                overline = "Journeys on the Map (2D)  ·  ${item.journey.travellers}",
                title = item.journey.title,
                meta = "${item.journey.stops.size} stops, from $first to $last",
                body = item.journey.summary,
                hint = "OK to trace the road on the map  ·  the same journey is walkable in 3D above",
                modifier = modifier,
            )
        }
        is VaultItem.World -> {
            val j = item.journey
            DetailsPanel(
                overline = if (j != null) "Journey in 3D  ·  ${j.travellers}" else "Middle-earth in 3D  ·  open world",
                title = j?.title ?: "Roam Middle-earth",
                meta = WORLD_CREDIT,
                body = j?.let { "${it.summary} The company joins and parts as it did in the story, and what happened plays out at each stop." }
                    ?: "The land from the Blue Mountains to Mordor, raised in 3D from an elevation model - mountains, rivers, roads and forests, with the great places standing on it.",
                hint = if (j != null) "OK to set out  ·  ◀ ▶ walk from stop to stop" else "OK to fly in",
                modifier = modifier,
            )
        }
        is VaultItem.Picture -> DetailsPanel(
            overline = "The Vault  ·  Artwork",
            title = item.title,
            meta = item.file.parentFile?.name.orEmpty(),
            body = "From the Art folder on the USB drive",
            hint = "OK to view  ·  ◀ ▶ to leaf through",
            modifier = modifier,
        )
    }
}

