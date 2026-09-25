package com.example.lotr.data

import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Test
import java.io.File

/** Guards the hand-edited catalog file: it must parse, and every entry must be usable. */
class AppendicesCatalogTest {
    private val categories = AppendicesCatalog.parse(File("src/main/assets/${AppendicesCatalog.ASSET}").readText())
    private val videos = categories.flatMap { c -> c.shelves.flatMap { it.videos } }

    @Test
    fun parsesIntoCategoriesOfNonEmptyShelves() {
        assertTrue(categories.isNotEmpty())
        categories.forEach { c ->
            assertTrue("${c.id} has no shelves", c.shelves.isNotEmpty())
            c.shelves.forEach { assertTrue("${it.id} is empty", it.videos.isNotEmpty()) }
        }
    }

    @Test
    fun everyVideoIsListedOnceWithAValidIdAndLength() {
        assertEquals("duplicate videos", videos.size, videos.map { it.youtubeId }.toSet().size)
        videos.forEach { v ->
            assertTrue("bad id ${v.youtubeId}", Regex("[\\w-]{11}").matches(v.youtubeId))
            assertTrue("${v.youtubeId} has no length", v.lengthSeconds > 0)
            assertTrue("${v.youtubeId} has no title", v.title.isNotBlank())
            assertTrue("${v.youtubeId} has no channel", v.channel.isNotBlank())
        }
    }

    @Test
    fun idsAreUniqueAcrossCategoriesAndShelves() {
        val ids = categories.map { it.id } + categories.flatMap { c -> c.shelves.map { it.id } }
        assertEquals(ids.size, ids.toSet().size)
    }
}
