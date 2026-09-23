package com.example.lotr.data

import android.content.Context
import android.content.Intent
import android.net.Uri
import androidx.core.net.toUri
import androidx.datastore.preferences.core.edit
import androidx.datastore.preferences.core.stringPreferencesKey
import androidx.documentfile.provider.DocumentFile
import com.example.lotr.data.model.Film
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.flow.map

/**
 * Wraps the Storage Access Framework folder the user picked on the USB pendrive: persists the
 * granted tree [Uri] across launches and resolves it back to film-matched content Uris.
 */
class StorageRepository(private val context: Context) {

    val treeUri: Flow<Uri?> = context.appDataStore.data.map { prefs ->
        prefs[TREE_URI_KEY]?.toUri()
    }

    /** Call with the Uri returned by an `OpenDocumentTree` picker launch. */
    suspend fun persistTreeUri(uri: Uri) {
        context.contentResolver.takePersistableUriPermission(uri, Intent.FLAG_GRANT_READ_URI_PERMISSION)
        context.appDataStore.edit { prefs -> prefs[TREE_URI_KEY] = uri.toString() }
    }

    fun hasReadAccess(uri: Uri): Boolean =
        context.contentResolver.persistedUriPermissions.any { it.uri == uri && it.isReadPermission }

    /** Scans the picked folder's direct children and maps each matched [Film.id] to its file Uri. */
    suspend fun findFilmUris(films: List<Film> = FilmRepository.films): Map<String, Uri> {
        val uri = treeUri.first() ?: return emptyMap()
        if (!hasReadAccess(uri)) return emptyMap()
        val children = DocumentFile.fromTreeUri(context, uri)?.listFiles().orEmpty()
        return buildMap {
            for (film in films) {
                val match = children.firstOrNull { doc -> doc.isFile && doc.name?.let(film::matches) == true }
                if (match != null) put(film.id, match.uri)
            }
        }
    }

    private companion object {
        val TREE_URI_KEY = stringPreferencesKey("usb_tree_uri")
    }
}
