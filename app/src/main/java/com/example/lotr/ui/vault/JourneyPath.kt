package com.example.lotr.ui.vault

import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.PathEffect
import androidx.compose.ui.graphics.PathMeasure
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.drawscope.Stroke
import kotlin.math.floor

/** The curve from stop [i] to stop i+1, a Catmull-Rom spline through all the stops. */
private fun segment(points: List<Offset>, i: Int): Path {
    val p0 = points[(i - 1).coerceAtLeast(0)]
    val p1 = points[i]
    val p2 = points[i + 1]
    val p3 = points[(i + 2).coerceAtMost(points.lastIndex)]
    val c1 = p1 + (p2 - p0) / 6f
    val c2 = p2 - (p3 - p1) / 6f
    return Path().apply {
        moveTo(p1.x, p1.y)
        cubicTo(c1.x, c1.y, c2.x, c2.y, p2.x, p2.y)
    }
}

/**
 * A journey's route through [points]: the road still ahead as a faint dotted line, the road
 * travelled - up to [travelled] stops, fractions drawing part of a leg - in solid [color].
 */
fun DrawScope.drawJourney(points: List<Offset>, travelled: Float, color: Color, width: Float) {
    if (points.size < 2) return
    val ahead = Stroke(width = width * 0.6f, cap = StrokeCap.Round, pathEffect = PathEffect.dashPathEffect(floatArrayOf(width * 0.2f, width * 1.6f)))
    val done = Stroke(width = width, cap = StrokeCap.Round)
    val whole = floor(travelled).toInt()
    for (i in 0 until points.lastIndex) {
        val path = segment(points, i)
        drawPath(path, color.copy(alpha = 0.55f), style = ahead)
        when {
            i < whole -> drawPath(path, color, style = done)
            i == whole && travelled > whole -> {
                val measure = PathMeasure().apply { setPath(path, false) }
                val part = Path()
                measure.getSegment(0f, measure.length * (travelled - whole), part, true)
                drawPath(part, color, style = done)
            }
        }
    }
}
