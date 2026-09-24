package com.example.lotr.data.model

/**
 * A behind-the-scenes video from the drive (anything under an "Appendices", "Extras", "Bonus",
 * "Behind the scenes" or "Featurettes" folder). [group] is the folder it sits in, if that's
 * below the extras folder itself - e.g. "Disc 1 - From Book to Vision".
 */
data class DriveExtra(val title: String, val group: String?, val file: FilmFile) {
    val id: String get() = "extra_${file.uri.path.hashCode()}"
}
