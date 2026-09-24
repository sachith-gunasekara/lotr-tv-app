package com.example.lotr.ui.components

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.tv.material3.Border
import androidx.tv.material3.Card
import androidx.tv.material3.CardDefaults
import androidx.tv.material3.Glow
import com.example.lotr.ui.theme.LotrAmberGlow

val WarmCardShape = RoundedCornerShape(14.dp)

/**
 * A borderless card that rests on a soft dark shadow and, when focused, lifts on a warm amber
 * glow - the "late afternoon in the Shire" focus style, instead of outlines.
 */
@Composable
fun WarmCard(
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    onLongClick: (() -> Unit)? = null,
    content: @Composable BoxScope.() -> Unit,
) {
    Card(
        onClick = onClick,
        onLongClick = onLongClick,
        modifier = modifier,
        shape = CardDefaults.shape(WarmCardShape),
        colors = CardDefaults.colors(containerColor = Color.Black, focusedContainerColor = Color.Black),
        scale = CardDefaults.scale(focusedScale = 1.08f),
        // No outlines at all - focus is shown by the lift and the glow.
        border = CardDefaults.border(border = Border.None, focusedBorder = Border.None, pressedBorder = Border.None),
        glow = CardDefaults.glow(
            glow = Glow(elevationColor = Color.Black.copy(alpha = 0.55f), elevation = 10.dp),
            focusedGlow = Glow(elevationColor = LotrAmberGlow, elevation = 26.dp),
        ),
    ) {
        Box(content = content)
    }
}
