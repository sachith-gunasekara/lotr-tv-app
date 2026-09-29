package com.example.lotr.data

/**
 * The score behind the Home screen: the trilogy's most stirring cues from Howard Shore's
 * soundtrack albums, bundled in `assets/music/` so they start the moment the app opens (and play
 * offline), in turn and looped. The Home banner's trailers play muted under it.
 */
object HomeMusic {
    val playlist = listOf(
        BundledTrack("home_lighting_of_the_beacons.mp3"),
        BundledTrack("home_forth_eorlingas.mp3"),
        BundledTrack("home_ride_of_the_rohirrim.mp3"),
        BundledTrack("home_khazad_dum.mp3"),
        BundledTrack("home_anduril.mp3"),
        BundledTrack("home_black_gate_opens.mp3"),
        BundledTrack("home_return_of_the_king.mp3"),
    )
}
