package com.example.lotr.ui.theme

import androidx.compose.runtime.Composable
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.darkColorScheme

private val LotrColorScheme = darkColorScheme(
    primary = LotrGold,
    onPrimary = LotrBackground,
    secondary = LotrGoldLight,
    onSecondary = LotrBackground,
    background = LotrBackground,
    onBackground = LotrOnBackground,
    surface = LotrSurface,
    onSurface = LotrOnBackground,
)

@Composable
fun LotrTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = LotrColorScheme,
        content = content,
    )
}
