package com.example.lotr.ui.vault

import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.MutatorMutex
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.Stable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableStateMapOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.runtime.snapshotFlow
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.FilterQuality
import androidx.compose.ui.graphics.ImageBitmap
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.layout.onSizeChanged
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.IntSize
import com.example.lotr.data.TilePyramid
import com.example.lotr.data.TileSource
import kotlinx.coroutines.flow.collectLatest
import kotlinx.coroutines.flow.distinctUntilChanged
import kotlin.math.floor
import kotlin.math.ln
import kotlin.math.max
import kotlin.math.min

/**
 * Where the view looks: the centre as fractions (0..1) of the picture, and [zoom] as a multiple of
 * the zoom at which the whole picture just fits (1 = all of it).
 */
@Stable
class MapCamera(centerX: Float = 0.5f, centerY: Float = 0.5f, zoom: Float = 1f) {
    var centerX by mutableFloatStateOf(centerX)
        private set
    var centerY by mutableFloatStateOf(centerY)
        private set
    var zoom by mutableFloatStateOf(zoom)
        private set

    /** Where the camera is heading; moves build on this, so held keys keep going smoothly. */
    var target by mutableStateOf(Triple(centerX, centerY, zoom))
        private set

    /** Set by [ZoomableTiles]: the picture's and the view's size, for clamping and conversions. */
    internal var geometry: Geometry? = null

    private val mutex = MutatorMutex()
    private val progress = Animatable(0f)

    /** Glides to the given centre and zoom (clamped so the picture always fills the view). */
    suspend fun moveTo(x: Float, y: Float, zoom: Float, durationMs: Int = 450) {
        val (cx, cy, z) = clamp(x, y, zoom)
        target = Triple(cx, cy, z)
        val from = Triple(centerX, centerY, this.zoom)
        mutex.mutate {
            progress.snapTo(0f)
            progress.animateTo(1f, tween(durationMs, easing = FastOutSlowInEasing)) {
                centerX = from.first + (cx - from.first) * value
                centerY = from.second + (cy - from.second) * value
                this@MapCamera.zoom = from.third + (z - from.third) * value
            }
        }
    }

    /** Pans by a fraction of the view (e.g. 0.2 = a fifth of the screen). */
    suspend fun panBy(viewFractionX: Float, viewFractionY: Float) {
        val g = geometry ?: return
        val (tx, ty, tz) = target
        val scale = g.fitScale * tz
        moveTo(
            tx + viewFractionX * g.viewWidth / (g.imageWidth * scale),
            ty + viewFractionY * g.viewHeight / (g.imageHeight * scale),
            tz,
            durationMs = 220,
        )
    }

    suspend fun zoomBy(factor: Float, towardsX: Float = target.first, towardsY: Float = target.second) {
        moveTo(towardsX, towardsY, target.third * factor)
    }

    val maxZoom: Float get() = geometry?.maxZoom ?: 1f

    private fun clamp(x: Float, y: Float, zoom: Float): Triple<Float, Float, Float> {
        val g = geometry ?: return Triple(x, y, zoom)
        val z = zoom.coerceIn(1f, g.maxZoom)
        val scale = g.fitScale * z
        fun axis(c: Float, view: Float, image: Float): Float {
            val half = view / 2 / (image * scale)
            return if (half >= 0.5f) 0.5f else c.coerceIn(half, 1 - half)
        }
        return Triple(axis(x, g.viewWidth, g.imageWidth), axis(y, g.viewHeight, g.imageHeight), z)
    }

    internal data class Geometry(val imageWidth: Float, val imageHeight: Float, val viewWidth: Float, val viewHeight: Float) {
        val fitScale = min(viewWidth / imageWidth, viewHeight / imageHeight)

        /**
         * Up to one screen pixel per picture pixel, and no further: the maps are rendered big enough
         * (Middle-earth is 12288 px wide) that the smallest label is readable before that, and going
         * past it would only stretch pixels and blur.
         */
        val maxZoom = max(1f, 1f / fitScale)
    }
}

/** Converts picture fractions to screen positions for overlays drawn over [ZoomableTiles]. */
fun interface MapProjection {
    fun toScreen(x: Float, y: Float): Offset
}

private data class TileKey(val level: Int, val column: Int, val row: Int)

/**
 * Draws a [TileSource] through [camera]: the coarsest level underneath (loaded up front, so
 * nothing ever flashes empty) and sharper tiles for just the visible area on top as they load.
 * [overlay] draws on top, in screen space, via the given projection.
 */
@Composable
fun ZoomableTiles(
    source: TileSource,
    pyramid: TilePyramid,
    camera: MapCamera,
    modifier: Modifier = Modifier,
    overlay: DrawScope.(MapProjection, scale: Float) -> Unit = { _, _ -> },
) {
    var viewSize by remember { mutableStateOf(IntSize.Zero) }
    val tiles = remember(source) { mutableStateMapOf<TileKey, ImageBitmap>() }
    val coarsest = pyramid.levels - 1

    LaunchedEffect(viewSize, pyramid) {
        if (viewSize == IntSize.Zero) return@LaunchedEffect
        camera.geometry = MapCamera.Geometry(pyramid.width.toFloat(), pyramid.height.toFloat(), viewSize.width.toFloat(), viewSize.height.toFloat())
        camera.moveTo(camera.target.first, camera.target.second, camera.target.third, durationMs = 1)
    }

    LaunchedEffect(source, viewSize) {
        if (viewSize == IntSize.Zero) return@LaunchedEffect
        val overview = allTiles(pyramid, coarsest)
        overview.forEach { key -> source.tile(key.level, key.column, key.row)?.let { tiles[key] = it.asImageBitmap() } }
        snapshotFlow { visibleTiles(pyramid, camera, viewSize) }
            .distinctUntilChanged()
            .collectLatest { needed ->
                needed.filterNot(tiles::containsKey).forEach { key ->
                    source.tile(key.level, key.column, key.row)?.let { tiles[key] = it.asImageBitmap() }
                }
                // Only once the sharper tiles are in, drop the ones no longer on screen.
                tiles.keys.retainAll((needed + overview).toSet())
            }
    }

    Canvas(modifier.onSizeChanged { viewSize = it }) {
        if (viewSize == IntSize.Zero) return@Canvas
        val scale = min(size.width / pyramid.width, size.height / pyramid.height) * camera.zoom
        val originX = size.width / 2 - camera.centerX * pyramid.width * scale
        val originY = size.height / 2 - camera.centerY * pyramid.height * scale
        // Coarse first, fine last, so the sharpest available tile wins.
        tiles.entries.sortedByDescending { it.key.level }.forEach { (key, image) ->
            val levelScale = (1 shl key.level) * scale
            val x = originX + key.column * pyramid.tileSize * levelScale
            val y = originY + key.row * pyramid.tileSize * levelScale
            drawImage(
                image = image,
                dstOffset = IntOffset(floor(x).toInt(), floor(y).toInt()),
                // One extra pixel hides hairline seams between neighbouring tiles.
                dstSize = IntSize((image.width * levelScale).toInt() + 1, (image.height * levelScale).toInt() + 1),
                filterQuality = FilterQuality.Medium,
            )
        }
        overlay(MapProjection { fx, fy -> Offset(originX + fx * pyramid.width * scale, originY + fy * pyramid.height * scale) }, scale)
    }
}

private fun allTiles(pyramid: TilePyramid, level: Int): List<TileKey> =
    (0 until pyramid.rows(level)).flatMap { row -> (0 until pyramid.columns(level)).map { TileKey(level, it, row) } }

/** The tiles covering the view at the level matching the current zoom. */
private fun visibleTiles(pyramid: TilePyramid, camera: MapCamera, view: IntSize): List<TileKey> {
    val scale = min(view.width.toFloat() / pyramid.width, view.height.toFloat() / pyramid.height) * camera.zoom
    // The finest level whose pixels are still at least as big as the screen's.
    val level = floor(ln(1 / scale) / ln(2f)).toInt().coerceIn(0, pyramid.levels - 1)
    val span = pyramid.tileSize * (1 shl level) * scale
    val left = view.width / 2 - camera.centerX * pyramid.width * scale
    val top = view.height / 2 - camera.centerY * pyramid.height * scale
    val columns = (floor(-left / span).toInt().coerceAtLeast(0))..(floor((view.width - left) / span).toInt().coerceAtMost(pyramid.columns(level) - 1))
    val rows = (floor(-top / span).toInt().coerceAtLeast(0))..(floor((view.height - top) / span).toInt().coerceAtMost(pyramid.rows(level) - 1))
    return rows.flatMap { row -> columns.map { TileKey(level, it, row) } }
}
