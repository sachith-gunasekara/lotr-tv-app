package com.example.lotr.data

/** A background music track bundled in `assets/music/`, played at [gain] times its player's volume. */
data class BundledTrack(val asset: String, val gain: Float = 1f) {
    /** For ExoPlayer, which reads `asset:///` URIs directly. */
    val uri: String get() = "asset:///music/$asset"
}
