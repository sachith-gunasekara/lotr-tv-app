package com.example.lotr.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.Text

/**
 * Card art for things without a picture: the section's [tint] with a word, year or initial in
 * large, faint Elvish lettering, sized to fit.
 */
@Composable
fun GlyphPlaceholder(glyph: String, tint: Color, modifier: Modifier = Modifier) {
    Box(
        modifier
            .fillMaxSize()
            .background(Brush.linearGradient(listOf(tint, tint.copy(alpha = 0.6f), MaterialTheme.colorScheme.background))),
    ) {
        Text(
            text = glyph,
            color = MaterialTheme.colorScheme.primary.copy(alpha = 0.24f),
            // An initial large, a year smaller, a word smaller still.
            style = MaterialTheme.typography.displayLarge.copy(
                fontSize = when {
                    glyph.length <= 2 -> 72.sp
                    glyph.length <= 4 -> 50.sp
                    else -> 28.sp
                },
            ),
            maxLines = 1,
            modifier = Modifier.align(Alignment.TopEnd).padding(top = 6.dp, end = 14.dp),
        )
    }
}
