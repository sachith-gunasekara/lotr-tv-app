package com.example.lotr.ui.components

/** Formats a playback position as `H:MM:SS`, e.g. `1:02:03`. */
fun formatPlaybackTime(ms: Long): String {
    val totalSeconds = ms.coerceAtLeast(0) / 1000
    return "%d:%02d:%02d".format(totalSeconds / 3600, totalSeconds % 3600 / 60, totalSeconds % 60)
}
