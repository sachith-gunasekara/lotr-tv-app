package com.example.lotr.data

import com.example.lotr.data.model.DriveExtra
import com.example.lotr.data.model.Episode
import com.example.lotr.data.model.FilmFile
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.combine
import kotlinx.coroutines.flow.mapLatest
import kotlinx.coroutines.flow.stateIn
import java.io.File

/** Where the library was looked for ([folder] is null if nowhere was found) and what was found. */
data class FilmScan(
    val folder: File?,
    val isCustom: Boolean,
    val files: Map<String, FilmFile>,
    val episodes: List<Episode> = emptyList(),
    val trailers: Map<String, FilmFile> = emptyMap(),
    val extras: List<DriveExtra> = emptyList(),
)

/**
 * The scanned collection (films, Rings of Power episodes and extras), shared by every screen. Rescans when the storage permission is
 * granted, the custom folder changes, or [rescan] is called (e.g. the pendrive was plugged in).
 */
class FilmLibrary(private val storage: StorageRepository, scope: CoroutineScope) {

    private val permissionGranted = MutableStateFlow(storage.hasReadPermission())
    private val rescanRequests = MutableStateFlow(0)

    val hasPermission: StateFlow<Boolean> = permissionGranted

    fun rescan() {
        permissionGranted.value = storage.hasReadPermission()
        rescanRequests.value++
    }

    /** Null while scanning for the first time, or when the permission isn't granted. */
    @OptIn(ExperimentalCoroutinesApi::class)
    val scan: StateFlow<FilmScan?> =
        combine(permissionGranted, storage.customFolder, rescanRequests) { granted, custom, _ -> granted to custom }
            .mapLatest { (granted, custom) ->
                if (!granted) return@mapLatest null
                val folder = custom ?: storage.findUsbLotrFolder()
                val contents = folder?.let { storage.scanLibrary(it) }
                FilmScan(
                    folder = folder,
                    isCustom = custom != null,
                    files = contents?.films.orEmpty(),
                    episodes = contents?.episodes.orEmpty(),
                    trailers = contents?.trailers.orEmpty(),
                    extras = contents?.extras.orEmpty(),
                )
            }
            .stateIn(scope, SharingStarted.Eagerly, null)
}
