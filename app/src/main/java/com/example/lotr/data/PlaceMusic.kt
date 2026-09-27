package com.example.lotr.data

/**
 * The score heard at each place on the Middle-earth map, in the 2D and 3D maps alike: the cue from
 * the films where the story is there, as its official "Howard Shore - Topic" upload (all checked
 * embeddable - `tools/appendices/verify_catalog.py` re-checks them). Hobbiton has none: the Shire
 * keeps the bundled [ShireMusic], which also plays while offline.
 */
object PlaceMusic {
    private fun cue(id: String, title: String, seconds: Int) =
        YouTubeVideo(id, title, seconds, channel = "Howard Shore - Topic")

    private val cues: Map<String, YouTubeVideo> = mapOf(
        "grey_havens" to cue("eYo4jbBPRT0", "The Grey Havens", 359),
        "bree" to cue("vf7rb6IMXko", "At the Sign of the Prancing Pony", 194),
        "weathertop" to cue("FcuwAp7Reg8", "A Knife in the Dark", 214),
        "trollshaws" to cue("b4IQHUElGws", "Roast Mutton", 243),
        "rivendell" to cue("k3PqqcmWYas", "Many Meetings", 185),
        "high_pass" to cue("AdEhcMzkEYE", "Riddles in the Dark", 322),
        "carrock" to cue("Nfq24uCvIzk", "Out of the Frying-Pan", 355),
        "elvenking" to cue("ucaezfO78NM", "The Woodland Realm", 267),
        "esgaroth" to cue("0xXSnaEB0rs", "Thrice Welcome", 213),
        "erebor" to cue("hDaVmXxqiy8", "Smaug", 390),
        "moria" to cue("f44xDz2tW_I", "Khazad-dûm", 480),
        "lorien" to cue("PuzcCtcIrp0", "Lothlórien", 274),
        "dol_guldur" to cue("OerzPzRFtJQ", "Beyond the Forest", 326),
        "fangorn" to cue("ZAfIvtlvOUU", "Treebeard", 164),
        "isengard" to cue("AUpKHeTB0-4", "The Treason of Isengard", 241),
        "helms_deep" to cue("99kB9REDqJk", "Helm's Deep", 233),
        "edoras" to cue("ZNx5uPWbBIc", "The Riders of Rohan", 246),
        "erech" to cue("49_fQAG-hCI", "Andúril", 155),
        "amon_hen" to cue("vKgaMsMHAH8", "Amon Hen", 302),
        "dead_marshes" to cue("Tg-sYK0Hjbg", "The Passage of the Marshes", 166),
        "black_gate" to cue("__81psSFafU", "The Black Gate Is Closed", 198),
        "minas_tirith" to cue("Xx8C0RWUb5A", "Minas Tirith", 217),
        "osgiliath" to cue("AOpsPVthV5I", "Samwise the Brave", 226),
        "minas_morgul" to cue("_rmc4DQTE8E", "Minas Morgul", 118),
        "mount_doom" to cue("XSfx4l07MV0", "The Crack of Doom", 242),
        "barad_dur" to cue("a1oJyHrhDlU", "The Prophecy", 235),
        "pelargir" to cue("eSfYQ_mJ7S0", "The Fields of the Pelennor", 206),
    )

    /** The cue for [placeId], or null where the Shire music plays. */
    fun cueFor(placeId: String): YouTubeVideo? = cues[placeId]

    /** Every cue, for the tests. */
    val all: Map<String, YouTubeVideo> get() = cues
}
