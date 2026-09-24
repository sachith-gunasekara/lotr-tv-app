package com.example.lotr.data

import android.Manifest
import android.content.Context
import android.content.pm.PackageManager
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.media.MediaMetadataRetriever
import android.net.Uri
import android.os.Build
import android.util.LruCache
import androidx.core.content.ContextCompat
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import java.io.File

/** A track from the drive; [album] is its tag, or else the folder it's in. */
data class MusicTrack(
    val title: String,
    val artist: String?,
    val album: String,
    val trackNumber: Int?,
    val durationMs: Long,
    val file: File,
) {
    val uri: Uri get() = Uri.fromFile(file)
}

/** An album's tracks, in order. */
data class MusicAlbum(val title: String, val tracks: List<MusicTrack>)

/**
 * The soundtrack on the drive: audio files under a "Music"/"Soundtrack"/"Scores" folder, read with
 * their tags (title, album, track number) and cover art.
 */
class MusicRepository(private val context: Context) {

    val audioPermission: String =
        if (Build.VERSION.SDK_INT >= 33) Manifest.permission.READ_MEDIA_AUDIO
        else Manifest.permission.READ_EXTERNAL_STORAGE

    fun hasAudioPermission(): Boolean =
        ContextCompat.checkSelfPermission(context, audioPermission) == PackageManager.PERMISSION_GRANTED

    private val covers = object : LruCache<String, Bitmap>(24 * 1024) {
        override fun sizeOf(key: String, value: Bitmap) = value.byteCount / 1024
    }

    suspend fun albums(folder: File): List<MusicAlbum> = withContext(Dispatchers.IO) {
        folder.walkTopDown()
            .maxDepth(MAX_DEPTH)
            .filter { it.isFile && it.extension.lowercase() in AUDIO_EXTENSIONS && musicFolderOf(it, folder) != null }
            .map(::read)
            .groupBy { it.album }
            .map { (album, tracks) -> MusicAlbum(album, tracks.sortedWith(compareBy({ it.trackNumber ?: Int.MAX_VALUE }, { it.file.name.lowercase() }))) }
            .sortedBy { it.title.lowercase() }
    }

    /** The track's embedded cover art, scaled down, or null if it has none. */
    suspend fun cover(track: MusicTrack, maxSide: Int = 720): Bitmap? = withContext(Dispatchers.IO) {
        val key = "${track.album}@$maxSide"
        covers.get(key)?.let { return@withContext it }
        val bytes = retrieve(track.file) { it.embeddedPicture } ?: return@withContext null
        val bounds = BitmapFactory.Options().apply { inJustDecodeBounds = true }
        BitmapFactory.decodeByteArray(bytes, 0, bytes.size, bounds)
        var sample = 1
        while (maxOf(bounds.outWidth, bounds.outHeight) / (sample * 2) >= maxSide) sample *= 2
        BitmapFactory.decodeByteArray(bytes, 0, bytes.size, BitmapFactory.Options().apply { inSampleSize = sample })
            ?.also { covers.put(key, it) }
    }

    private fun read(file: File): MusicTrack {
        val tags = retrieve(file) { r ->
            listOf(
                MediaMetadataRetriever.METADATA_KEY_TITLE,
                MediaMetadataRetriever.METADATA_KEY_ARTIST,
                MediaMetadataRetriever.METADATA_KEY_ALBUM,
                MediaMetadataRetriever.METADATA_KEY_CD_TRACK_NUMBER,
                MediaMetadataRetriever.METADATA_KEY_DURATION,
            ).associateWith { r.extractMetadata(it) }
        }.orEmpty()
        val (numberFromName, titleFromName) = splitTrackName(file.nameWithoutExtension)
        return MusicTrack(
            title = tags[MediaMetadataRetriever.METADATA_KEY_TITLE]?.takeIf { it.isNotBlank() } ?: titleFromName,
            artist = tags[MediaMetadataRetriever.METADATA_KEY_ARTIST]?.takeIf { it.isNotBlank() },
            album = tags[MediaMetadataRetriever.METADATA_KEY_ALBUM]?.takeIf { it.isNotBlank() }
                ?: readableName(file.parentFile?.name.orEmpty()),
            // Tags write "3/17" as often as "3".
            trackNumber = tags[MediaMetadataRetriever.METADATA_KEY_CD_TRACK_NUMBER]?.substringBefore('/')?.trim()?.toIntOrNull() ?: numberFromName,
            durationMs = tags[MediaMetadataRetriever.METADATA_KEY_DURATION]?.toLongOrNull() ?: 0L,
            file = file,
        )
    }

    private fun <T> retrieve(file: File, block: (MediaMetadataRetriever) -> T): T? {
        val retriever = MediaMetadataRetriever()
        return try {
            retriever.setDataSource(file.path)
            block(retriever)
        } catch (e: RuntimeException) {
            null // Unreadable or untagged; fall back to the file name.
        } finally {
            retriever.release()
        }
    }

    private companion object {
        const val MAX_DEPTH = 5
        val AUDIO_EXTENSIONS = setOf("mp3", "flac", "m4a", "aac", "ogg", "opus", "wav")
    }
}

private val MUSIC_FOLDER = Regex("^(music|soundtrack|soundtracks|score|scores|ost|audio)$", RegexOption.IGNORE_CASE)

/** The outermost "Music"/"Soundtrack"/... folder [file] is in, below [root]; null if none. */
internal fun musicFolderOf(file: File, root: File): File? =
    generateSequence(file.parentFile) { it.parentFile }
        .takeWhile { it != root }
        .lastOrNull { MUSIC_FOLDER.matches(it.name.trim()) }

/** `03 - The Bridge of Khazad-dûm` -> (3, "The Bridge of Khazad-dûm"). */
internal fun splitTrackName(name: String): Pair<Int?, String> {
    val match = Regex("""^\s*(\d{1,3})\s*[-._)]?\s+(.+)$""").find(name)
    return if (match != null) match.groupValues[1].toInt() to readableName(match.groupValues[2])
    else null to readableName(name)
}
