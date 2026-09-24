package com.example.lotr.ui.components

import androidx.compose.animation.Crossfade
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.layout.ContentScale
import com.example.lotr.ui.theme.LotrBackground
import com.example.lotr.ui.theme.LotrSunHaze

/**
 * The focused item's art, full-bleed and softened into the page, with a haze of late sunlight.
 * Crossfades whenever [key] changes; a null [painter] leaves just the warm page.
 */
@Composable
fun ImmersiveBackdrop(key: Any, painter: Painter?) {
    Crossfade(targetState = key to painter, animationSpec = tween(700), label = "backdrop") { (_, shown) ->
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
                    .background(Brush.radialGradient(listOf(LotrSunHaze.copy(alpha = 0.16f), Color.Transparent), radius = 1400f, center = Offset(1900f, 0f))),
            )
        }
    }
}
