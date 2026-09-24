package com.example.lotr.data

/**
 * One of Howard Shore's leitmotifs: what to listen for, the official recording where it's heard
 * best ([listen], the "Howard Shore - Topic" upload, checked embeddable), and [keywords] that pick
 * out the tracks on the drive where it appears.
 */
data class ScoreTheme(
    val id: String,
    val name: String,
    val glyph: String,
    val listenFor: String,
    val listen: YouTubeVideo,
    val keywords: List<String>,
    val filmId: String,
) {
    fun isHeardIn(trackTitle: String): Boolean {
        val lower = trackTitle.lowercase()
        return keywords.any { lower.contains(it) }
    }
}

/** The score's great themes, in the order they're met. Notes written for this app. */
object ScoreThemes {
    private const val FELLOWSHIP = "fellowship"
    private const val TWO_TOWERS = "two_towers"
    private const val RETURN = "return_of_the_king"

    private fun track(id: String, title: String, seconds: Int, artist: String = "Howard Shore") =
        YouTubeVideo(id, title, seconds, channel = "$artist - Topic")

    val themes: List<ScoreTheme> = listOf(
        ScoreTheme("shire", "The Shire", "Shire",
            "A tin whistle and a fiddle over warm strings: a folk tune for a people who have never left home. Listen for how it returns, slower and sadder, the further the hobbits travel.",
            track("CL_3mlOPnGI", "Concerning Hobbits", 175),
            listOf("concerning hobbits", "shire", "bilbo", "grey havens"), FELLOWSHIP),
        ScoreTheme("fellowship", "The Fellowship", "Nine",
            "A rising heroic theme in the horns that is only heard in pieces until the Nine set out from Rivendell - and then shatters as they break.",
            track("jpJIdwB0R6g", "The Ring Goes South", 123),
            listOf("ring goes south", "fellowship", "khazad", "amon hen"), FELLOWSHIP),
        ScoreTheme("rivendell", "Rivendell", "Imladris",
            "Rippling harp and a women's choir, as calm as the valley itself: the Elves at rest, and a music older than Men.",
            track("k3PqqcmWYas", "Many Meetings", 185),
            listOf("many meetings", "rivendell", "council", "evenstar", "arwen"), FELLOWSHIP),
        ScoreTheme("lorien", "Lothlórien", "Lórien",
            "Stranger and more ancient than Rivendell, with an Eastern colour and voices singing in Sindarin - including the Lament for Gandalf.",
            track("PuzcCtcIrp0", "Lothlórien", 274),
            listOf("lothlorien", "lothlórien", "lament", "galadriel", "great river"), FELLOWSHIP),
        ScoreTheme("isengard", "Isengard", "5/4",
            "A lurching rhythm in five beats to the bar, with metal struck like anvils: the machines of Saruman, tearing down the trees.",
            track("AUpKHeTB0-4", "The Treason of Isengard", 241),
            listOf("isengard", "saruman", "treason", "orthanc", "uruk"), FELLOWSHIP),
        ScoreTheme("mordor", "Mordor & the Ring", "Nazg",
            "Low brass, a harsh North African reed called the rhaita, and a men's choir chanting in the Black Speech - the Enemy, and the Ring that calls to him.",
            track("mHcnOYSZe1o", "The Black Rider", 168),
            listOf("black rider", "nazgul", "nazgûl", "mordor", "ring-wraith", "ringwraith", "mount doom", "shelob"), FELLOWSHIP),
        ScoreTheme("rohan", "Rohan", "Rohan",
            "A lone Norwegian Hardanger fiddle, then the whole orchestra at a gallop: a proud, weary people who live on horseback.",
            track("ZNx5uPWbBIc", "The Riders of Rohan", 246),
            listOf("rohan", "edoras", "eorlingas", "golden hall", "helm", "theoden", "théoden"), TWO_TOWERS),
        ScoreTheme("gollum", "Gollum", "Sméagol",
            "A thin, wavering line on the cimbalom - pity more than menace. At the end of The Two Towers it becomes a song, sung by Emiliana Torrini.",
            track("yPwZQiYsL4w", "Gollum's Song", 351, artist = "Emiliana Torrini"),
            listOf("gollum", "smeagol", "sméagol", "taming"), TWO_TOWERS),
        ScoreTheme("gondor", "Gondor", "Gondor",
            "Brass fanfares in a minor key: a great kingdom in decline, waiting for its king. When he comes, the same theme finally rings out in full.",
            track("Xx8C0RWUb5A", "Minas Tirith", 217),
            listOf("gondor", "minas tirith", "steward", "beacons", "return of the king", "pelennor"), RETURN),
        ScoreTheme("into_the_west", "Into the West", "West",
            "The song over the end of the journey, by Fran Walsh, Howard Shore and Annie Lennox, who sings it. It won the Academy Award for Best Original Song.",
            track("HvF31-2bVNE", "Into the West", 348, artist = "Annie Lennox"),
            listOf("into the west", "grey havens"), RETURN),
    )
}
