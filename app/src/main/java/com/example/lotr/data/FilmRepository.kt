package com.example.lotr.data

import com.example.lotr.data.model.Film
import kotlin.time.Duration.Companion.minutes

object FilmRepository {
    val films: List<Film> = listOf(
        Film(
            id = "fellowship",
            title = "The Fellowship of the Ring",
            year = 2001,
            synopsis = "A hobbit and eight companions set out from the Shire to destroy the " +
                "One Ring in the fires of Mount Doom before the Dark Lord Sauron can reclaim it.",
            runtime = 178.minutes,
            extendedRuntime = 228.minutes,
            filenameKeywords = listOf("fellowship"),
            backdropAtMs = 660_000L,
        ),
        Film(
            id = "two_towers",
            title = "The Two Towers",
            year = 2002,
            synopsis = "As the Fellowship scatters, Frodo and Sam press on toward Mordor while " +
                "Rohan and Isengard are drawn into open war.",
            runtime = 179.minutes,
            extendedRuntime = 235.minutes,
            filenameKeywords = listOf("towers", "two_towers", "two-towers"),
            backdropAtMs = 4_800_000L,
        ),
        Film(
            id = "return_of_the_king",
            title = "The Return of the King",
            year = 2003,
            synopsis = "Gondor makes its final stand against Mordor as Frodo and Sam near Mount " +
                "Doom and the fate of Middle-earth is decided.",
            runtime = 201.minutes,
            extendedRuntime = 263.minutes,
            filenameKeywords = listOf("return"),
            backdropAtMs = 2_960_000L,
        ),
    )

    fun findByFilename(filename: String): Film? = films.firstOrNull { it.matches(filename) }
}
