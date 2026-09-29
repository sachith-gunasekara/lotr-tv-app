package com.example.lotr.data

/** The quiet Shire music behind the Vault and Reading. */
object ShireMusic {
    /**
     * The playlist, in order - it goes from calm to upbeat (by tempo), then loops. Gains are
     * loudness-matched (EBU R128) to the OST, the quietest at -21.9 LUFS:
     * gain = 10^((-21.9 - track LUFS) / 20).
     */
    val order = listOf(
        // The first 5:25 of "The Shire - Music from the Soundtrack" (Visual Escape), faded out at
        // the cut - the full 2 h mix is far too big to bundle.
        BundledTrack("shire_ost.m4a", gain = 1f),
        BundledTrack("shire_dream.m4a", gain = 0.43f), // 92 BPM
        BundledTrack("merry_birthday.m4a", gain = 0.43f), // 99 BPM
        BundledTrack("merry_birthday_2.m4a", gain = 0.40f), // 103 BPM
        BundledTrack("birthday_in_the_shire.m4a", gain = 0.38f), // 129 BPM
        BundledTrack("welcome_to_the_shire_house.m4a", gain = 0.41f), // house music, 136 BPM - always last
    )
}
