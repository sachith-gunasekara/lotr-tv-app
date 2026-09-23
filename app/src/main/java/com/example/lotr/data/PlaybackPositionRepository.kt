package com.example.lotr.data

import android.content.Context
import androidx.datastore.preferences.core.edit
import androidx.datastore.preferences.core.longPreferencesKey
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map

/** Per-film resume position, in milliseconds, powering "Resume at HH:MM:SS" on the Films screen. */
class PlaybackPositionRepository(private val context: Context) {

    fun positionMs(filmId: String): Flow<Long> =
        context.appDataStore.data.map { prefs -> prefs[keyFor(filmId)] ?: 0L }

    suspend fun savePosition(filmId: String, positionMs: Long) {
        context.appDataStore.edit { prefs -> prefs[keyFor(filmId)] = positionMs }
    }

    private fun keyFor(filmId: String) = longPreferencesKey("resume_position_$filmId")
}
