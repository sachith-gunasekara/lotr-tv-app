package com.example.lotr.ui.components

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.produceState
import androidx.compose.ui.graphics.ImageBitmap
import androidx.compose.ui.graphics.asImageBitmap
import com.example.lotr.data.ThumbnailRepository
import com.example.lotr.data.model.FilmFile

/** A frame from [file] (decoded in the background, cached), or null until it's ready or if it can't be. */
@Composable
fun rememberFrame(file: FilmFile?, thumbnails: ThumbnailRepository): ImageBitmap? {
    val frame by produceState<ImageBitmap?>(null, file) {
        value = file?.let { thumbnails.frame(it)?.asImageBitmap() }
    }
    return frame
}

/** A video length as it reads on a card: `4 min`, `1h 25m`. */
fun formatLength(seconds: Long): String {
    val minutes = ((seconds + 30) / 60).coerceAtLeast(1)
    return if (minutes < 60) "$minutes min" else "${minutes / 60}h ${minutes % 60}m"
}
