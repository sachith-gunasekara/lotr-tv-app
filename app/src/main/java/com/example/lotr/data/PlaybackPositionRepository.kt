package com.example.lotr.data

import android.content.Context
import androidx.datastore.preferences.core.edit
import androidx.datastore.preferences.core.longPreferencesKey
import androidx.datastore.preferences.core.stringPreferencesKey
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map

/** How far into a film or episode the viewer got. */
data class WatchProgress(val positionMs: Long, val durationMs: Long) {
    /** 0..1, or 0 when the duration isn't known yet. */
    val fraction: Float get() = if (durationMs > 0) (positionMs.toFloat() / durationMs).coerceIn(0f, 1f) else 0f
}

/**
 * Watch history, keyed by [com.example.lotr.data.model.Watchable.id]: resume position and
 * duration per title, plus which title was watched last (for the Home banner).
 */
class PlaybackPositionRepository(private val context: Context) {

    fun positionMs(id: String): Flow<Long> = progress(id).map { it.positionMs }

    fun progress(id: String): Flow<WatchProgress> = context.appDataStore.data.map { prefs ->
        WatchProgress(prefs[positionKey(id)] ?: 0L, prefs[durationKey(id)] ?: 0L)
    }

    val lastWatchedId: Flow<String?> = context.appDataStore.data.map { it[LAST_WATCHED_KEY] }

    suspend fun saveProgress(id: String, positionMs: Long, durationMs: Long) {
        context.appDataStore.edit { prefs ->
            prefs[positionKey(id)] = positionMs
            if (durationMs > 0) prefs[durationKey(id)] = durationMs
            prefs[LAST_WATCHED_KEY] = id
        }
    }

    suspend fun resetPosition(id: String) {
        context.appDataStore.edit { it[positionKey(id)] = 0L }
    }

    private fun positionKey(id: String) = longPreferencesKey("resume_position_$id")
    private fun durationKey(id: String) = longPreferencesKey("duration_$id")

    private companion object {
        val LAST_WATCHED_KEY = stringPreferencesKey("last_watched_id")
    }
}
