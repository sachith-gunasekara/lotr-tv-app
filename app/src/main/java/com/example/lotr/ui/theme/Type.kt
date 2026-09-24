package com.example.lotr.ui.theme

import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.Font
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontVariation
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp
import androidx.tv.material3.Typography
import com.example.lotr.R

/**
 * Aniron: the films' credits lettering (personal-use font, see third_party/aniron). Its lowercase
 * letters are the small capitals seen in the credits, so keep text in normal case - don't
 * `uppercase()` it.
 */
val Aniron = FontFamily(
    Font(R.font.aniron, FontWeight.Normal),
    Font(R.font.aniron_bold, FontWeight.Bold),
)

/** Cormorant Garamond (SIL OFL): an old-style storybook serif for longer reading text. */
val Cormorant = FontFamily(
    Font(R.font.cormorant_garamond, FontWeight.Medium, variationSettings = FontVariation.Settings(FontVariation.weight(500))),
    Font(R.font.cormorant_garamond, FontWeight.SemiBold, variationSettings = FontVariation.Settings(FontVariation.weight(600))),
)

private val base = Typography()

private fun TextStyle.elvish() = copy(fontFamily = Aniron, fontWeight = FontWeight.Normal, letterSpacing = 0.5.sp)

// Cormorant runs small for its point size; nudge it up so it reads from the sofa.
private fun TextStyle.storybook(size: Int) =
    copy(fontFamily = Cormorant, fontWeight = FontWeight.SemiBold, fontSize = size.sp, lineHeight = (size * 1.35).sp)

val LotrTypography = Typography(
    displayLarge = base.displayLarge.elvish(),
    displayMedium = base.displayMedium.elvish(),
    displaySmall = base.displaySmall.elvish(),
    headlineLarge = base.headlineLarge.elvish(),
    headlineMedium = base.headlineMedium.elvish(),
    headlineSmall = base.headlineSmall.elvish(),
    titleLarge = base.titleLarge.elvish(),
    titleMedium = base.titleMedium.elvish(),
    titleSmall = base.titleSmall.elvish(),
    bodyLarge = base.bodyLarge.storybook(20),
    bodyMedium = base.bodyMedium.storybook(18),
    bodySmall = base.bodySmall.storybook(15),
    labelLarge = base.labelLarge.elvish(),
    labelMedium = base.labelMedium.elvish(),
    labelSmall = base.labelSmall.elvish(),
)
