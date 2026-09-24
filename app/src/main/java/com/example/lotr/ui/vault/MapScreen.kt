package com.example.lotr.ui.vault

import androidx.activity.compose.BackHandler
import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.togetherWith
import androidx.compose.foundation.background
import androidx.compose.foundation.focusable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.produceState
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.input.key.Key
import androidx.compose.ui.input.key.KeyEventType
import androidx.compose.ui.input.key.key
import androidx.compose.ui.input.key.onKeyEvent
import androidx.compose.ui.input.key.type
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.Text
import com.example.lotr.data.Atlas
import com.example.lotr.data.FilmRepository
import com.example.lotr.data.Journey
import com.example.lotr.data.MapPlace
import com.example.lotr.data.TilePyramid
import com.example.lotr.data.TileSource
import com.example.lotr.ui.components.lotrBackground
import com.example.lotr.ui.theme.LotrAmberGlow
import com.example.lotr.ui.theme.LotrBackground
import com.example.lotr.ui.theme.LotrGold
import com.example.lotr.ui.theme.LotrGoldLight
import kotlinx.coroutines.launch
import kotlin.math.hypot

private const val PAN_STEP = 0.2f
private const val ZOOM_STEP = 1.75f

/** How close to the reticle (in dp) a place must be to be picked out. */
private const val PICK_RADIUS_DP = 56f

/** How far a journey zooms in on each stop, as a multiple of the whole-map view. */
private const val JOURNEY_ZOOM = 2.6f

/**
 * A map, full screen. Explore freely - ◀ ▲ ▼ ▶ pan, OK zooms in (onto the marked place under the
 * reticle), Back zooms out and then leaves - or, given a [journey], step along it stop by stop
 * with ◀ ▶ while its route draws itself in.
 */
@Composable
fun MapScreen(
    title: String,
    credit: String,
    source: TileSource,
    places: List<MapPlace>,
    journey: Journey?,
    modifier: Modifier = Modifier,
    /** For pictures from the drive: ◀ ▶ at the whole-picture view go to the previous / next one. */
    onStep: ((Int) -> Unit)? = null,
) {
    val pyramid by produceState<TilePyramid?>(null, source) { value = source.pyramid() }
    val camera = remember(source) { MapCamera() }
    val scope = rememberCoroutineScope()
    val density = LocalDensity.current

    // Journeys: which stop we're at, and how much of the road is drawn (animates between stops).
    var stop by rememberSaveable(journey?.id) { mutableIntStateOf(0) }
    val travelled = remember(journey?.id) { Animatable(0f) }
    val stopPlaces = remember(journey) { journey?.stops?.map { Atlas.place(it.placeId) }.orEmpty() }

    LaunchedEffect(journey, stop, pyramid) {
        if (journey == null || pyramid == null) return@LaunchedEffect
        val place = stopPlaces[stop]
        launch { travelled.animateTo(stop.toFloat(), tween(if (stop == 0) 1 else 1400)) }
        camera.moveTo(place.x, place.y, JOURNEY_ZOOM, durationMs = if (stop == 0) 1 else 1400)
    }

    // Free exploring: the marked place nearest the middle of the screen, if it's close enough.
    val picked by remember(places, pyramid) {
        derivedStateOf {
            // Read the camera first, so this is recomputed whenever it moves.
            val cx = camera.centerX
            val cy = camera.centerY
            val zoom = camera.zoom
            val p = pyramid ?: return@derivedStateOf null
            val geometry = camera.geometry ?: return@derivedStateOf null
            val scale = geometry.fitScale * zoom
            val radius = with(density) { PICK_RADIUS_DP.dp.toPx() }
            places
                .map { it to hypot((it.x - cx) * p.width * scale, (it.y - cy) * p.height * scale) }
                .filter { it.second < radius }
                .minByOrNull { it.second }?.first
        }
    }

    // Back zooms out first; at the whole map it falls through and leaves the screen.
    BackHandler(enabled = journey == null && camera.target.third > 1.01f) {
        scope.launch { camera.zoomBy(1 / ZOOM_STEP) }
    }

    val focusRequester = remember { FocusRequester() }
    LaunchedEffect(Unit) { focusRequester.requestFocus() }

    Box(
        modifier
            .fillMaxSize()
            .lotrBackground()
            .focusRequester(focusRequester)
            .focusable()
            .onKeyEvent { event ->
                if (event.type != KeyEventType.KeyDown) return@onKeyEvent false
                if (journey != null) {
                    when (event.key) {
                        Key.DirectionRight, Key.MediaFastForward -> { if (stop < journey.stops.lastIndex) stop++; true }
                        Key.DirectionLeft, Key.MediaRewind -> { if (stop > 0) stop--; true }
                        else -> event.key == Key.DirectionUp || event.key == Key.DirectionDown
                    }
                } else {
                    val atWhole = camera.target.third <= 1.01f
                    when (event.key) {
                        Key.DirectionLeft -> {
                            if (atWhole && onStep != null) onStep(-1) else scope.launch { camera.panBy(-PAN_STEP, 0f) }
                            true
                        }
                        Key.DirectionRight -> {
                            if (atWhole && onStep != null) onStep(1) else scope.launch { camera.panBy(PAN_STEP, 0f) }
                            true
                        }
                        Key.DirectionUp -> { scope.launch { camera.panBy(0f, -PAN_STEP) }; true }
                        Key.DirectionDown -> { scope.launch { camera.panBy(0f, PAN_STEP) }; true }
                        Key.DirectionCenter, Key.Enter, Key.NumPadEnter, Key.MediaFastForward, Key.ChannelUp -> {
                            val place = picked
                            scope.launch {
                                if (place != null) camera.zoomBy(ZOOM_STEP, place.x, place.y) else camera.zoomBy(ZOOM_STEP)
                            }
                            true
                        }
                        Key.MediaRewind, Key.ChannelDown -> { scope.launch { camera.zoomBy(1 / ZOOM_STEP) }; true }
                        else -> false
                    }
                }
            },
    ) {
        val p = pyramid
        if (p != null) {
            ZoomableTiles(source, p, camera, Modifier.fillMaxSize()) { projection, _ ->
                val unit = density.density
                if (journey != null) {
                    drawJourney(stopPlaces.map { projection.toScreen(it.x, it.y) }, travelled.value, LotrGold, width = 4 * unit)
                    stopPlaces.forEachIndexed { i, place -> drawPin(projection.toScreen(place.x, place.y), unit, current = i == stop, visited = i <= stop) }
                } else {
                    places.forEach { place -> drawPin(projection.toScreen(place.x, place.y), unit, current = place == picked, visited = true) }
                    if (places.isNotEmpty()) drawReticle(Offset(size.width / 2, size.height / 2), unit)
                }
            }
        }

        MapHeader(
            title = title,
            credit = credit,
            hint = when {
                journey != null -> "◀ ▶ previous / next stop  ·  Back to leave"
                onStep != null -> "◀ ▶ previous / next  ·  OK zoom in  ·  Back zoom out"
                else -> "◀ ▲ ▼ ▶ move  ·  OK zoom in  ·  Back zoom out"
            },
            modifier = Modifier.align(Alignment.TopStart),
        )
        MapFooter(
            journey = journey,
            stop = stop,
            place = if (journey != null) stopPlaces.getOrNull(stop) else picked,
            modifier = Modifier.align(Alignment.BottomStart),
        )
    }
}

/** A gold map pin; the [current] one is larger, on a warm glow. */
private fun androidx.compose.ui.graphics.drawscope.DrawScope.drawPin(at: Offset, unit: Float, current: Boolean, visited: Boolean) {
    if (current) {
        drawCircle(LotrAmberGlow.copy(alpha = 0.35f), radius = 18 * unit, center = at)
        drawCircle(LotrBackground, radius = 9 * unit, center = at)
        drawCircle(LotrGoldLight, radius = 7 * unit, center = at)
    } else {
        drawCircle(LotrBackground, radius = 6 * unit, center = at)
        drawCircle(if (visited) LotrGold else LotrGold.copy(alpha = 0.45f), radius = 4.5f * unit, center = at)
    }
}

/** A faint ring in the middle of the screen: whatever's under it is what OK zooms into. */
private fun androidx.compose.ui.graphics.drawscope.DrawScope.drawReticle(at: Offset, unit: Float) {
    drawCircle(LotrGoldLight.copy(alpha = 0.5f), radius = 22 * unit, center = at, style = Stroke(width = 1.5f * unit))
    drawCircle(LotrGoldLight.copy(alpha = 0.6f), radius = 2 * unit, center = at)
}

@Composable
private fun MapHeader(title: String, credit: String, hint: String, modifier: Modifier = Modifier) {
    Row(
        modifier
            .fillMaxWidth()
            .background(Brush.verticalGradient(0f to LotrBackground.copy(alpha = 0.95f), 0.6f to LotrBackground.copy(alpha = 0.7f), 1f to Color.Transparent))
            .padding(start = 48.dp, end = 48.dp, top = 24.dp, bottom = 40.dp),
    ) {
        Column(Modifier.weight(1f)) {
            Text(title, color = MaterialTheme.colorScheme.secondary, style = MaterialTheme.typography.headlineSmall)
            Text(credit, color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.7f), style = MaterialTheme.typography.bodySmall)
        }
        Text(hint, color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.6f), style = MaterialTheme.typography.bodySmall)
    }
}

@Composable
private fun MapFooter(journey: Journey?, stop: Int, place: MapPlace?, modifier: Modifier = Modifier) {
    Box(
        modifier
            .fillMaxWidth()
            .background(Brush.verticalGradient(0f to Color.Transparent, 0.45f to LotrBackground.copy(alpha = 0.8f), 1f to LotrBackground.copy(alpha = 0.97f)))
            .padding(start = 48.dp, end = 48.dp, top = 64.dp, bottom = 28.dp),
    ) {
        AnimatedContent(
            targetState = place,
            transitionSpec = { fadeIn(tween(300)) togetherWith fadeOut(tween(200)) },
            label = "place",
            modifier = Modifier.width(1000.dp),
        ) { shown ->
            Column {
                if (shown != null) {
                    Text(
                        text = if (journey != null) {
                            "${journey.title}  ·  stop ${stop + 1} of ${journey.stops.size}"
                        } else {
                            seenIn(shown) ?: "Middle-earth"
                        },
                        color = MaterialTheme.colorScheme.primary,
                        style = MaterialTheme.typography.labelLarge,
                    )
                    Text(shown.name, color = MaterialTheme.colorScheme.secondary, style = MaterialTheme.typography.headlineSmall)
                    Spacer(Modifier.height(2.dp))
                    Text(
                        text = if (journey != null) journey.stops[stop].note else shown.blurb,
                        color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.9f),
                        style = MaterialTheme.typography.bodyLarge,
                        maxLines = 2,
                        overflow = TextOverflow.Ellipsis,
                    )
                }
            }
        }
    }
}

/** e.g. "Seen in The Fellowship of the Ring & The Two Towers". */
private fun seenIn(place: MapPlace): String? {
    val titles = FilmRepository.films.filter { it.id in place.seenIn }.map { it.title }
    if (titles.isEmpty()) return null
    return "Seen in " + if (titles.size == 1) titles.single() else titles.dropLast(1).joinToString(", ") + " & " + titles.last()
}
