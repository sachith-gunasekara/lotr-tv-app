package com.example.lotr.data

import android.Manifest
import android.content.Context
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Build
import android.os.Environment
import androidx.core.content.ContextCompat
import androidx.datastore.preferences.core.edit
import androidx.datastore.preferences.core.stringPreferencesKey
import com.example.lotr.data.model.Episode
import com.example.lotr.data.model.Film
import com.example.lotr.data.model.FilmFile
import com.example.lotr.data.model.ReleaseTags
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.withContext
import java.io.File

/**
 * What a scan found: film files by film id, series episodes in order, and trailers keyed by film
 * id or [RingsOfPower.SERIES_ID] (any video with "trailer" in its name).
 */
data class LibraryContents(
    val films: Map<String, FilmFile>,
    val episodes: List<Episode>,
    val trailers: Map<String, FilmFile> = emptyMap(),
)

/** A mounted storage volume's root directory, e.g. internal storage or the USB pendrive. */
data class StorageRoot(val label: String, val dir: File)

/**
 * Finds the film files. By default that's the `LOTR` folder at the root of the USB pendrive; a
 * custom folder (persisted) overrides it for testing. Reads files directly with the video-read
 * permission rather than via the SAF picker, since Android TV builds often ship without one.
 */
class StorageRepository(private val context: Context) {

    val readPermission: String =
        if (Build.VERSION.SDK_INT >= 33) Manifest.permission.READ_MEDIA_VIDEO
        else Manifest.permission.READ_EXTERNAL_STORAGE

    fun hasReadPermission(): Boolean =
        ContextCompat.checkSelfPermission(context, readPermission) == PackageManager.PERMISSION_GRANTED

    /** Null means "use the pendrive's LOTR folder". */
    val customFolder: Flow<File?> = context.appDataStore.data.map { prefs ->
        prefs[CUSTOM_FOLDER_KEY]?.let(::File)
    }

    suspend fun setCustomFolder(folder: File?) {
        context.appDataStore.edit { prefs ->
            if (folder == null) prefs.remove(CUSTOM_FOLDER_KEY) else prefs[CUSTOM_FOLDER_KEY] = folder.path
        }
    }

    fun storageRoots(): List<StorageRoot> =
        context.getExternalFilesDirs(null).filterNotNull().map { appDir ->
            val root = File(appDir.path.substringBefore("/Android/data/"))
            val label = if (Environment.isExternalStorageRemovable(appDir)) "USB drive (${root.name})" else "Internal storage"
            StorageRoot(label, root)
        }

    suspend fun findUsbLotrFolder(): File? = withContext(Dispatchers.IO) {
        context.getExternalFilesDirs(null).filterNotNull()
            .filter { Environment.isExternalStorageRemovable(it) }
            .map { File(it.path.substringBefore("/Android/data/")) }
            .firstNotNullOfOrNull { root ->
                root.listFiles()?.firstOrNull { it.isDirectory && it.name.equals(USB_FOLDER_NAME, ignoreCase = true) }
            }
    }

    suspend fun subfolders(dir: File): List<File> = withContext(Dispatchers.IO) {
        dir.listFiles().orEmpty()
            .filter { it.isDirectory && !it.isHidden }
            .sortedBy { it.name.lowercase() }
    }

    /**
     * Searches [folder] and its subfolders (films are usually one folder per film; episodes a
     * folder per season) for each film's file and any Rings of Power episodes.
     */
    suspend fun scanLibrary(folder: File, films: List<Film> = FilmRepository.films): LibraryContents =
        withContext(Dispatchers.IO) {
            val videos = folder.walkTopDown()
                .maxDepth(MAX_SCAN_DEPTH)
                .filter { it.isFile && it.extension.lowercase() in VIDEO_EXTENSIONS }
                .toList()
            val (trailerFiles, titleFiles) = videos.partition { it.name.contains("trailer", ignoreCase = true) }
            val (episodeFiles, filmFiles) = titleFiles.partition {
                RingsOfPower.seasonAndEpisode(it.path, it.name) != null
            }
            val episodes = episodeFiles.map { file ->
                val (season, number) = RingsOfPower.seasonAndEpisode(file.path, file.name)!!
                Episode(
                    season = season,
                    number = number,
                    title = RingsOfPower.episodeTitle(season, number, file.name),
                    file = file.toFilmFile(),
                )
            }.distinctBy { it.id }.sortedWith(compareBy({ it.season }, { it.number }))
            LibraryContents(
                films = films.mapNotNull { film ->
                    filmFiles.firstOrNull { film.matches(it.name) }?.let { film.id to it.toFilmFile() }
                }.toMap(),
                episodes = episodes,
                trailers = trailerFiles.mapNotNull { file ->
                    val key = films.firstOrNull { it.matches(file.name) }?.id
                        ?: RingsOfPower.SERIES_ID.takeIf { RingsOfPower.isSeries(file.path) }
                    key?.let { it to file.toFilmFile() }
                }.toMap(),
            )
        }

    private fun File.toFilmFile() = FilmFile(Uri.fromFile(this), ReleaseTags.parse(name))

    private companion object {
        const val USB_FOLDER_NAME = "LOTR"
        const val MAX_SCAN_DEPTH = 4
        val VIDEO_EXTENSIONS = setOf("mkv", "mp4", "m4v", "mov", "avi", "webm", "ts")
        val CUSTOM_FOLDER_KEY = stringPreferencesKey("custom_folder_path")
    }
}
