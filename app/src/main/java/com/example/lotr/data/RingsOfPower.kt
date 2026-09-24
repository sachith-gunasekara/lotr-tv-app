package com.example.lotr.data

/** Metadata and filename conventions for The Rings of Power episodes on the drive. */
object RingsOfPower {
    const val TITLE = "The Rings of Power"
    const val SYNOPSIS = "Thousands of years before the Fellowship, the great rings are forged in the " +
        "Second Age, and an old shadow stirs again in Middle-earth."

    private val episodeTitles = mapOf(
        1 to listOf(
            "A Shadow of the Past", "Adrift", "Adar", "The Great Wave",
            "Partings", "Udûn", "The Eye", "Alloyed",
        ),
        2 to listOf(
            "Elven Kings Under the Sky", "Where Is He?", "The Eagle and the Sceptre", "Eldest",
            "Halls of Stone", "Where the Stars Are Strange", "Doomed to Die", "Shadow and Flame",
        ),
    )

    private val SERIES_NAME = Regex("""rings.?of.?power""", RegexOption.IGNORE_CASE)
    private val EPISODE_CODE = Regex("""[Ss](\d{1,2})[ ._-]?[Ee](\d{1,3})""")
    private val RELEASE_JUNK = Regex(
        """(\b(2160p|1080p|720p|480p|4K|UHD|HDR\d*|DV|WEB(-?DL|Rip)?|BluRay|AMZN|x26[45]|HEVC|DDP?\d|Atmos)\b|\[).*""",
        RegexOption.IGNORE_CASE,
    )

    /**
     * Season and episode for a file that belongs to the series: its path (folder or name) says
     * "Rings of Power" and its name has an `S01E03`-style code. Null for anything else.
     */
    fun seasonAndEpisode(path: String, fileName: String): Pair<Int, Int>? {
        if (!SERIES_NAME.containsMatchIn(path)) return null
        val match = EPISODE_CODE.find(fileName) ?: return null
        return match.groupValues[1].toInt() to match.groupValues[2].toInt()
    }

    /** Known title, else whatever follows the episode code in the filename, else "Episode N". */
    fun episodeTitle(season: Int, number: Int, fileName: String): String =
        episodeTitles[season]?.getOrNull(number - 1)
            ?: titleFromFileName(fileName)
            ?: "Episode $number"

    private fun titleFromFileName(fileName: String): String? {
        val afterCode = EPISODE_CODE.find(fileName)?.let { fileName.substring(it.range.last + 1) } ?: return null
        return afterCode.substringBeforeLast('.')
            .replace(RELEASE_JUNK, "")
            .replace(Regex("""[._]+"""), " ")
            .trim(' ', '-')
            .takeIf { it.isNotBlank() }
    }
}
