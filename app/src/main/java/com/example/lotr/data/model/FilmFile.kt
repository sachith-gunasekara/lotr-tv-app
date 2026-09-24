package com.example.lotr.data.model

import android.net.Uri

/** A film's video file as found on disk. */
data class FilmFile(val uri: Uri, val tags: ReleaseTags)
