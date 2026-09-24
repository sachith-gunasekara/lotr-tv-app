package com.example.lotr.data.model

import kotlin.time.Duration

/**
 * Static metadata for one of the 3 LOTR films. [filenameKeywords] are lowercase substrings
 * used to match this film against a filename found on the USB pendrive.
 */
data class Film(
    override val id: String,
    override val title: String,
    val year: Int,
    val synopsis: String,
    val runtime: Duration,
    val extendedRuntime: Duration,
    val filenameKeywords: List<String>,
    /** Where in the film its backdrop still was taken, so a preview can start on that frame. */
    val backdropAtMs: Long,
) : Watchable {
    fun runtimeFor(tags: ReleaseTags?): Duration = if (tags?.extended == true) extendedRuntime else runtime

    fun matches(filename: String): Boolean {
        val lower = filename.lowercase()
        return filenameKeywords.any { lower.contains(it) }
    }
}
