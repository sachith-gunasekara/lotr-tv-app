package com.example.lotr.data

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertNull
import org.junit.Assert.assertTrue
import org.junit.Test
import java.io.File

class MusicTest {
    private val root = File("/storage/usb/LOTR")

    @Test
    fun tracksAreFoundUnderMusicFolders() {
        val file = File(root, "Music/The Fellowship of the Ring/01 The Prophecy.flac")
        assertEquals(File(root, "Music"), musicFolderOf(file, root))
        assertEquals("Soundtrack", musicFolderOf(File(root, "Soundtrack/x.mp3"), root)?.name)
        assertNull(musicFolderOf(File(root, "Musicals/x.mp3"), root))
    }

    @Test
    fun trackNumbersComeOffTheFrontOfNames() {
        assertEquals(3 to "The Bridge of Khazad-dûm", splitTrackName("03 - The Bridge of Khazad-dûm"))
        assertEquals(12 to "Many Meetings", splitTrackName("12. Many Meetings"))
        assertEquals(null to "Concerning Hobbits", splitTrackName("Concerning Hobbits"))
    }

    @Test
    fun themesAreMatchedToTrackTitles() {
        val shire = ScoreThemes.themes.first { it.id == "shire" }
        assertTrue(shire.isHeardIn("Concerning Hobbits"))
        assertFalse(shire.isHeardIn("The Riders of Rohan"))
        assertTrue(ScoreThemes.themes.first { it.id == "rohan" }.isHeardIn("The Riders of Rohan"))
    }
}
