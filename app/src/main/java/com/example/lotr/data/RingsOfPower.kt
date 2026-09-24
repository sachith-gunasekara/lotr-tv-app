package com.example.lotr.data

/** One season of the series: its premiere year, a premise, and what's known of each episode. */
data class SeasonInfo(val number: Int, val year: Int, val premise: String, val episodes: List<EpisodeInfo>)

/** A title and spoiler-light teaser; null where not announced yet. */
data class EpisodeInfo(val title: String?, val teaser: String?)

/**
 * Catalog and filename conventions for The Lord of the Rings: The Rings of Power (Prime Video).
 * Episode order comes from the files on the drive; this supplies titles and teasers.
 *
 * Checked against Wikipedia, September 2026: season 1 (2022) and 2 (2024) have aired; season 3
 * premieres 11 November 2026 (eps 1-4, then 5-6 on the 18th and 7-8 on the 25th) with titles not
 * yet announced - until then, titles come from the filenames.
 */
object RingsOfPower {
    const val SERIES_ID = "rings_of_power"
    const val TITLE = "The Rings of Power"
    const val SYNOPSIS = "Thousands of years before the Fellowship, the great rings are forged in the " +
        "Second Age, and an old shadow stirs again in Middle-earth."

    val seasons: List<SeasonInfo> = listOf(
        SeasonInfo(
            number = 1,
            year = 2022,
            premise = "In a time of peace, Galadriel hunts for an enemy everyone else believes long gone.",
            episodes = listOf(
                EpisodeInfo("A Shadow of the Past", "Galadriel hunts a vanished enemy to the edge of the world, while a Harfoot girl finds a stranger fallen from the sky."),
                EpisodeInfo("Adrift", "Adrift on the open sea, Galadriel meets an unlikely companion; Elrond seeks the help of the Dwarves of Khazad-dûm."),
                EpisodeInfo("Adar", "A shipwreck brings Galadriel to the island kingdom of Númenor, while in the Southlands captives dig for a dark purpose."),
                EpisodeInfo("The Great Wave", "Númenor's queen weighs a vision of ruin, and a secret deep in the Dwarf-mines tests an old friendship."),
                EpisodeInfo("Partings", "Númenor sets sail for Middle-earth, the Harfoots take to the road, and the Southlanders face a hard choice."),
                EpisodeInfo("Udûn", "The people of the Southlands make their stand against the orc host."),
                EpisodeInfo("The Eye", "In the ashes of the Southlands, survivors search for one another as danger closes in on the Harfoots."),
                EpisodeInfo("Alloyed", "The Stranger learns what he may be, and the Elven-smiths turn to a daring new forging."),
            ),
        ),
        SeasonInfo(
            number = 2,
            year = 2024,
            premise = "The rings are forged - and a deceiver finds his way among the Elven-smiths of Eregion.",
            episodes = listOf(
                EpisodeInfo("Elven Kings Under the Sky", "An old enemy returns in a new shape, and the smith Celebrimbor dreams of greater works."),
                EpisodeInfo("Where the Stars Are Strange", "The Stranger and Nori venture into the wild lands of Rhûn, as Elrond and Galadriel ride east."),
                EpisodeInfo("The Eagle and the Sceptre", "Isildur finds unexpected company in the Southlands, and Númenor's throne faces a rival."),
                EpisodeInfo("Eldest", "An ancient dweller of the wilds offers the Stranger guidance, while Galadriel's company is waylaid."),
                EpisodeInfo("Halls of Stone", "A ring's pull grows in Khazad-dûm, and Númenor must choose between two rulers."),
                EpisodeInfo("Where Is He?", "An army marches on Eregion as a long-kept secret begins to unravel."),
                EpisodeInfo("Doomed to Die", "Eregion is besieged, and every loyalty inside its walls is tested."),
                EpisodeInfo("Shadow and Flame", "Old fires wake beneath the mountains, and the Stranger comes into his own."),
            ),
        ),
        SeasonInfo(
            number = 3,
            year = 2026,
            premise = "Five years on, the war between the Elves and the Dark Lord reaches its height.",
            episodes = List(8) { EpisodeInfo(title = null, teaser = null) },
        ),
    )

    fun season(number: Int): SeasonInfo? = seasons.firstOrNull { it.number == number }

    private val SERIES_NAME = Regex("""rings.?of.?power""", RegexOption.IGNORE_CASE)

    // "S01E03", "s1e3", "S01 E03", "S01.Ep03"
    private val SXXEYY = Regex("""\b[Ss](\d{1,2})[ ._-]?[Ee][Pp]?[ ._-]?(\d{1,3})(?!\d)""")

    // "1x03"
    private val NXNN = Regex("""(?<![\dA-Za-z])(\d{1,2})x(\d{2,3})(?!\d)""")

    // A "Season 1" / "S01" folder in the path...
    private val SEASON_FOLDER = Regex("""/(?:Season[ ._-]?|S)(\d{1,2})/""", RegexOption.IGNORE_CASE)

    // ...with the episode in the name: "Episode 03", "Ep 3", "E03", or a leading "03 - Title".
    private val EPISODE_WORD = Regex("""(?<![A-Za-z])(?:Episode|Ep|E)[ ._-]?(\d{1,3})(?!\d)""", RegexOption.IGNORE_CASE)
    private val LEADING_NUMBER = Regex("""^(\d{1,3})(?!\d)(?![ ._-]?[pPkK])""")

    private val RELEASE_JUNK = Regex(
        """(\b(2160p|1080p|720p|480p|4K|UHD|HDR\d*|DV|WEB(-?DL|Rip)?|BluRay|AMZN|x26[45]|HEVC|DDP?\d|Atmos)\b|\[).*""",
        RegexOption.IGNORE_CASE,
    )

    fun isSeries(path: String): Boolean = SERIES_NAME.containsMatchIn(path)

    /**
     * Season and episode for a file belonging to the series (its path mentions "Rings of Power"),
     * from an `S01E03` / `1x03` code in the name, or a `Season 1` folder plus `Episode 3` /
     * leading `03` in the name. Null for anything else.
     */
    fun seasonAndEpisode(path: String, fileName: String): Pair<Int, Int>? {
        if (!isSeries(path)) return null
        episodeCode(fileName)?.let { return it.first to it.second }
        val season = SEASON_FOLDER.find(path.replace('\\', '/'))?.groupValues?.get(1)?.toInt() ?: return null
        val episode = (EPISODE_WORD.find(fileName) ?: LEADING_NUMBER.find(fileName))?.groupValues?.get(1)?.toInt()
            ?: return null
        return season to episode
    }

    /** Known title, else whatever follows the episode number in the filename, else "Episode N". */
    fun episodeTitle(season: Int, number: Int, fileName: String): String =
        season(season)?.episodes?.getOrNull(number - 1)?.title
            ?: titleFromFileName(fileName)
            ?: "Episode $number"

    fun episodeTeaser(season: Int, number: Int): String =
        season(season)?.let { it.episodes.getOrNull(number - 1)?.teaser ?: it.premise } ?: SYNOPSIS

    private fun episodeCode(fileName: String): Triple<Int, Int, IntRange>? =
        (SXXEYY.find(fileName) ?: NXNN.find(fileName))
            ?.let { Triple(it.groupValues[1].toInt(), it.groupValues[2].toInt(), it.range) }

    private fun titleFromFileName(fileName: String): String? {
        val end = episodeCode(fileName)?.third?.last
            ?: EPISODE_WORD.find(fileName)?.range?.last
            ?: LEADING_NUMBER.find(fileName)?.range?.last
            ?: return null
        return fileName.substring(end + 1)
            .substringBeforeLast('.')
            .replace(RELEASE_JUNK, "")
            .replace(Regex("""[._]+"""), " ")
            .trim(' ', '-')
            .takeIf { it.isNotBlank() }
    }
}
