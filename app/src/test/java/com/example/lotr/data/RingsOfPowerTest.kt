package com.example.lotr.data

import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Test

class RingsOfPowerTest {

    private fun parse(path: String) = RingsOfPower.seasonAndEpisode(path, path.substringAfterLast('/'))

    @Test
    fun `recognises the common episode naming styles`() {
        assertEquals(1 to 3, parse("/LOTR/The Rings of Power/Season 1/S01E03.mkv"))
        assertEquals(2 to 8, parse("/LOTR/The.Lord.of.the.Rings.The.Rings.of.Power.S02E08.2160p.AMZN.WEB-DL.mkv"))
        assertEquals(1 to 3, parse("/LOTR/Rings of Power/rings.of.power.s1e3.mkv"))
        assertEquals(1 to 3, parse("/LOTR/Rings of Power/Rings of Power S01 E03.mkv"))
        assertEquals(2 to 5, parse("/LOTR/Rings of Power/Rings of Power 2x05.mkv"))
        assertEquals(1 to 3, parse("/LOTR/The Rings of Power/Season 1/Episode 03.mkv"))
        assertEquals(3 to 4, parse("/LOTR/The Rings of Power/Season 3/04 - The Fourth.mkv"))
        assertEquals(2 to 1, parse("/LOTR/Rings of Power/S02/E01.mp4"))
    }

    @Test
    fun `resolution and codec numbers are not mistaken for episodes`() {
        assertEquals(1 to 3, parse("/LOTR/Rings of Power/Season 1/Episode 3 2160p x265.mkv"))
        assertNull(parse("/LOTR/Rings of Power/Season 1/2160p.x265.mkv"))
    }

    @Test
    fun `ignores films and unrelated series`() {
        assertNull(parse("/LOTR/Fellowship/fellowship.mkv"))
        assertNull(parse("/LOTR/Other.Show.S01E01.mkv"))
    }

    @Test
    fun `episodes order numerically by season then episode`() {
        val files = listOf(
            "/LOTR/Rings of Power/S02E01.mkv",
            "/LOTR/Rings of Power/S01E10.mkv",
            "/LOTR/Rings of Power/S01E02.mkv",
            "/LOTR/Rings of Power/S01E09.mkv",
        )
        val ordered = files.mapNotNull(::parse).sortedWith(compareBy({ it.first }, { it.second }))
        assertEquals(listOf(1 to 2, 1 to 9, 1 to 10, 2 to 1), ordered)
    }

    @Test
    fun `season two titles are in broadcast order`() {
        assertEquals("Where the Stars Are Strange", RingsOfPower.episodeTitle(2, 2, "S02E02.mkv"))
        assertEquals("Where Is He?", RingsOfPower.episodeTitle(2, 6, "S02E06.mkv"))
        assertEquals("Shadow and Flame", RingsOfPower.episodeTitle(2, 8, "S02E08.mkv"))
    }

    @Test
    fun `unannounced season three titles come from the filename, else a fallback`() {
        assertEquals(
            "The Council of Eregion",
            RingsOfPower.episodeTitle(3, 1, "Rings.of.Power.S03E01.The.Council.of.Eregion.2160p.AMZN.WEB-DL.mkv"),
        )
        assertEquals("The Fourth", RingsOfPower.episodeTitle(3, 4, "04 - The Fourth.mkv"))
        assertEquals("Episode 2", RingsOfPower.episodeTitle(3, 2, "Rings.of.Power.S03E02.2160p.mkv"))
    }

    @Test
    fun `teasers fall back to the season premise`() {
        assertEquals(RingsOfPower.season(3)!!.premise, RingsOfPower.episodeTeaser(3, 1))
    }

    @Test
    fun `lists every catalog episode, with files where found, plus extras beyond the catalog`() {
        val found = mapOf((1 to 3) to "s1e3.mkv", (4 to 1) to "s4e1.mkv")
        val list = RingsOfPower.withCatalog(found)

        assertEquals(8 + 8 + 8 + 1, list.size)
        assertEquals(Triple(1, 1, null), list.first())
        assertEquals(Triple(1, 3, "s1e3.mkv"), list[2])
        assertEquals(Triple(4, 1, "s4e1.mkv"), list.last())
        assertEquals(list.sortedWith(compareBy({ it.first }, { it.second })), list)
    }

    @Test
    fun `unaired season three episodes carry their release dates`() {
        assertEquals("11 Nov 2026", RingsOfPower.arrives(3, 1))
        assertEquals("18 Nov 2026", RingsOfPower.arrives(3, 6))
        assertEquals("25 Nov 2026", RingsOfPower.arrives(3, 8))
        assertNull(RingsOfPower.arrives(1, 1))
    }
}
