package com.example.lotr.data

/**
 * One track of the quiet Shire music behind the Vault and Reading: a file bundled in
 * `assets/music/`, played at [gain] times the base volume.
 */
data class ShireTrack(val asset: String, val gain: Float = 1f) {
    /** For ExoPlayer, which reads `asset:///` URIs directly. */
    val uri: String get() = "asset:///music/$asset"
}

object ShireMusic {
    /**
     * The playlist, in order - it goes from calm to upbeat (by tempo), then loops. Gains are
     * loudness-matched (EBU R128) to the OST, the quietest at -21.9 LUFS:
     * gain = 10^((-21.9 - track LUFS) / 20).
     */
    val order = listOf(
        // The first 5:25 of "The Shire - Music from the Soundtrack" (Visual Escape), faded out at
        // the cut - the full 2 h mix is far too big to bundle.
        ShireTrack("shire_ost.m4a", gain = 1f),
        ShireTrack("shire_dream.m4a", gain = 0.43f), // 92 BPM
        ShireTrack("merry_birthday.m4a", gain = 0.43f), // 99 BPM
        ShireTrack("merry_birthday_2.m4a", gain = 0.40f), // 103 BPM
        ShireTrack("birthday_in_the_shire.m4a", gain = 0.38f), // 129 BPM
        ShireTrack("welcome_to_the_shire_house.m4a", gain = 0.41f), // house music, 136 BPM - always last
    )
}
