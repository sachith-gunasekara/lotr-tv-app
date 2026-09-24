package com.example.lotr.data

import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.media.MediaMetadataRetriever
import android.os.Build
import android.util.LruCache
import com.example.lotr.data.model.FilmFile
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import kotlinx.coroutines.withContext
import java.io.File

/**
 * Frames pulled from the video files themselves (e.g. episode thumbnails), cached in memory and
 * on disk. Extraction runs one at a time: decoding several 4K files at once would swamp the TV.
 */
class ThumbnailRepository(private val context: Context) {

    private val memory = LruCache<String, Bitmap>(24)
    private val extractionLock = Mutex()
    private val cacheDir by lazy { File(context.cacheDir, "thumbnails").apply { mkdirs() } }

    /** A representative frame from about [fraction] of the way in, or null if it can't be decoded. */
    suspend fun frame(file: FilmFile, fraction: Float = 0.2f): Bitmap? = withContext(Dispatchers.IO) {
        val source = file.uri.path?.let(::File) ?: return@withContext null
        val key = "${source.path.hashCode()}_${source.length()}_${source.lastModified()}_${(fraction * 100).toInt()}"
        memory.get(key)?.let { return@withContext it }

        val cached = File(cacheDir, "$key.jpg")
        val bitmap = if (cached.exists()) {
            BitmapFactory.decodeFile(cached.path)
        } else {
            extractionLock.withLock { extract(source, fraction) }
                ?.also { bmp -> cached.outputStream().use { bmp.compress(Bitmap.CompressFormat.JPEG, 85, it) } }
        }
        bitmap?.also { memory.put(key, it) }
    }

    private fun extract(source: File, fraction: Float): Bitmap? {
        val retriever = MediaMetadataRetriever()
        return try {
            retriever.setDataSource(source.path)
            val durationMs = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_DURATION)?.toLongOrNull() ?: 0L
            val atUs = (durationMs * fraction).toLong() * 1000
            if (Build.VERSION.SDK_INT >= 27) {
                retriever.getScaledFrameAtTime(atUs, MediaMetadataRetriever.OPTION_CLOSEST_SYNC, 1280, 720)
            } else {
                retriever.getFrameAtTime(atUs, MediaMetadataRetriever.OPTION_CLOSEST_SYNC)
            }
        } catch (e: RuntimeException) {
            null // Undecodable here (e.g. 4K HEVC 10-bit on a device without the decoder).
        } finally {
            retriever.release()
        }
    }
}
