package com.example.lotr.ui.components

import androidx.annotation.DrawableRes
import com.example.lotr.R
import com.example.lotr.data.model.Film

/** Backdrop stills, taken from the films themselves. */
@DrawableRes
fun Film.backdropRes(): Int = when (id) {
    "two_towers" -> R.drawable.backdrop_two_towers
    "return_of_the_king" -> R.drawable.backdrop_return_of_the_king
    else -> R.drawable.backdrop_fellowship
}
