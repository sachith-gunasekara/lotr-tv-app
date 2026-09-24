package com.example.lotr.data.model

/** An episode of The Rings of Power found on disk. */
data class Episode(
    val season: Int,
    val number: Int,
    override val title: String,
    val file: FilmFile,
) : Watchable {
    override val id: String = "rings_of_power_s%02de%02d".format(season, number)

    /** e.g. `S1 · E3`. */
    val code: String get() = "S$season · E$number"
}
