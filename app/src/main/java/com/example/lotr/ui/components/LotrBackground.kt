package com.example.lotr.ui.components

import androidx.compose.foundation.background
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import com.example.lotr.ui.theme.LotrBackground
import com.example.lotr.ui.theme.LotrBackgroundTop
import com.example.lotr.ui.theme.LotrGold

/** Warm umber wash with a faint candle-glow at the top, shared by the full-screen pages. */
fun Modifier.lotrBackground(): Modifier = this
    .background(Brush.verticalGradient(listOf(LotrBackgroundTop, LotrBackground)))
    .background(Brush.radialGradient(listOf(LotrGold.copy(alpha = 0.07f), LotrGold.copy(alpha = 0f))))
