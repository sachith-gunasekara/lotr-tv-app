package com.example.lotr.data

import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Test

class FilmRepositoryTest {

    @Test
    fun `exposes exactly the 3 LOTR films`() {
        assertEquals(3, FilmRepository.films.size)
    }

    @Test
    fun `findByFilename matches on a keyword substring, case-insensitively`() {
        assertEquals(
            "fellowship",
            FilmRepository.findByFilename("01_The.Fellowship.Of.The.Ring.2001.mkv")?.id,
        )
        assertEquals(
            "two_towers",
            FilmRepository.findByFilename("LOTR_TWO_TOWERS_EXTENDED.mp4")?.id,
        )
        assertEquals(
            "return_of_the_king",
            FilmRepository.findByFilename("return-of-the-king.mkv")?.id,
        )
    }

    @Test
    fun `findByFilename returns null when nothing matches`() {
        assertNull(FilmRepository.findByFilename("home_movie.mp4"))
    }
}
