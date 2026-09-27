package com.example.lotr.data

/**
 * The score behind the Home screen: the trilogy's most stirring cues, as their official "Howard
 * Shore - Topic" uploads (all checked embeddable - `tools/appendices/verify_catalog.py` re-checks
 * them), played in turn and looped. The Home banner's trailers play muted under it.
 */
object HomeMusic {
    private fun cue(id: String, title: String, seconds: Int) =
        YouTubeVideo(id, title, seconds, channel = "Howard Shore - Topic")

    val playlist: List<YouTubeVideo> = listOf(
        cue("w_hnJNnKZz0", "The Lighting of the Beacons", 543),
        cue("HG9NwkLY9sg", "Forth Eorlingas", 196),
        cue("8mQcpTraUDQ", "The Ride of the Rohirrim", 129),
        cue("f44xDz2tW_I", "Khazad-dûm", 480),
        cue("nqZ5yOGH6os", "Andúril - Flame of the West", 208),
        cue("ZTaTo4yyKvo", "The Black Gate Opens", 242),
        cue("4s2gNErMozc", "The Return of the King", 614),
    )
}
