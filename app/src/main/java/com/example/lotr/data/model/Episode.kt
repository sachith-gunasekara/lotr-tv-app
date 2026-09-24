package com.example.lotr.data.model

/**
 * An episode of The Rings of Power. Every known episode is listed; [file] is null when it isn't on
 * the drive, and [arrives] is set for episodes that haven't aired yet.
 */
data class Episode(
    val season: Int,
    val number: Int,
    override val title: String,
    val file: FilmFile?,
    val arrives: String? = null,
) : Watchable {
    override val id: String = "rings_of_power_s%02de%02d".format(season, number)

    /** e.g. `S1 · E3`. */
    val code: String get() = "S$season · E$number"
}
