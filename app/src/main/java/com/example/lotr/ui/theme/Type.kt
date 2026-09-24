package com.example.lotr.ui.theme

import androidx.compose.ui.text.font.Font
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontVariation
import androidx.compose.ui.text.font.FontWeight
import androidx.tv.material3.Typography
import com.example.lotr.R

/** Cinzel (SIL OFL, see third_party/cinzel): Trajan-style capitals, used for titles. */
val Cinzel = FontFamily(
    Font(R.font.cinzel, FontWeight.Normal, variationSettings = FontVariation.Settings(FontVariation.weight(400))),
    Font(R.font.cinzel, FontWeight.SemiBold, variationSettings = FontVariation.Settings(FontVariation.weight(600))),
    Font(R.font.cinzel, FontWeight.Bold, variationSettings = FontVariation.Settings(FontVariation.weight(700))),
)

private val base = Typography()

val LotrTypography = Typography(
    displayLarge = base.displayLarge.copy(fontFamily = Cinzel),
    displayMedium = base.displayMedium.copy(fontFamily = Cinzel),
    displaySmall = base.displaySmall.copy(fontFamily = Cinzel),
    headlineLarge = base.headlineLarge.copy(fontFamily = Cinzel),
    headlineMedium = base.headlineMedium.copy(fontFamily = Cinzel),
    headlineSmall = base.headlineSmall.copy(fontFamily = Cinzel),
    titleLarge = base.titleLarge.copy(fontFamily = Cinzel, fontWeight = FontWeight.SemiBold),
    titleMedium = base.titleMedium.copy(fontFamily = Cinzel, fontWeight = FontWeight.SemiBold),
    titleSmall = base.titleSmall.copy(fontFamily = Cinzel, fontWeight = FontWeight.SemiBold),
    bodyLarge = base.bodyLarge,
    bodyMedium = base.bodyMedium,
    bodySmall = base.bodySmall,
    labelLarge = base.labelLarge,
    labelMedium = base.labelMedium,
    labelSmall = base.labelSmall,
)
