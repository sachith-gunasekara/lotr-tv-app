package com.example.lotr.data

import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Test

class RingsOfPowerTest {

    @Test
    fun `recognises episodes by folder or file name`() {
        assertEquals(
            1 to 3,
            RingsOfPower.seasonAndEpisode("/LOTR/The Rings of Power/Season 1/S01E03.mkv", "S01E03.mkv"),
        )
        assertEquals(
            2 to 8,
            RingsOfPower.seasonAndEpisode(
                "/LOTR/The.Lord.of.the.Rings.The.Rings.of.Power.S02E08.2160p.mkv",
                "The.Lord.of.the.Rings.The.Rings.of.Power.S02E08.2160p.mkv",
            ),
        )
    }

    @Test
    fun `ignores films and unrelated series`() {
        assertNull(RingsOfPower.seasonAndEpisode("/LOTR/Fellowship/fellowship.mkv", "fellowship.mkv"))
        assertNull(RingsOfPower.seasonAndEpisode("/LOTR/Other.Show.S01E01.mkv", "Other.Show.S01E01.mkv"))
    }

    @Test
    fun `titles come from the known list, then the filename, then a fallback`() {
        assertEquals("Adar", RingsOfPower.episodeTitle(1, 3, "Rings.of.Power.S01E03.2160p.mkv"))
        assertEquals(
            "The Council of Eregion",
            RingsOfPower.episodeTitle(3, 1, "Rings.of.Power.S03E01.The.Council.of.Eregion.2160p.AMZN.WEB-DL.mkv"),
        )
        assertEquals("Episode 2", RingsOfPower.episodeTitle(3, 2, "Rings.of.Power.S03E02.2160p.mkv"))
    }
}
