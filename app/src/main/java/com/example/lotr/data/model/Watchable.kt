package com.example.lotr.data.model

/** Something that can be played and resumed: a film or a series episode. */
sealed interface Watchable {
    /** Stable key for resume position and watch history. */
    val id: String
    val title: String
}
