package com.example.lotr.data

import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.util.LruCache
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.json.JSONObject
import java.io.File

/**
 * A picture too big to decode whole, cut into a pyramid of [tileSize] tiles: level 0 is full
 * size, each level after it half the one before, and the last fits in a single tile.
 */
data class TilePyramid(val width: Int, val height: Int, val tileSize: Int, val levels: Int) {
    fun columns(level: Int) = ceilDiv(width shr level, tileSize)
    fun rows(level: Int) = ceilDiv(height shr level, tileSize)

    private fun ceilDiv(a: Int, b: Int) = (a + b - 1) / b
}

/** Where a zoomable picture's tiles come from: a map in the assets, or a photo on the drive. */
interface TileSource {
    val key: String
    suspend fun pyramid(): TilePyramid?
    suspend fun tile(level: Int, column: Int, row: Int): Bitmap?
}

/**
 * Loads the Vault's pictures tile by tile, keeping recently drawn tiles in memory - the
 * Middle-earth map alone is 6144 x 4608, far too big to decode in one go on a TV.
 */
class MapTileRepository(private val context: Context) {

    // Sized in kilobytes: room for a screenful of full-resolution tiles plus the overviews.
    private val memory = object : LruCache<String, Bitmap>(64 * 1024) {
        override fun sizeOf(key: String, value: Bitmap) = value.byteCount / 1024
    }

    /** A map's tile pyramid under `assets/<dir>`, as written by the map build (meta.json + level/col_row.webp). */
    fun assetMap(dir: String): TileSource = object : TileSource {
        override val key = dir

        override suspend fun pyramid(): TilePyramid? = withContext(Dispatchers.IO) {
            runCatching {
                val json = JSONObject(context.assets.open("$dir/meta.json").bufferedReader().use { it.readText() })
                TilePyramid(json.getInt("width"), json.getInt("height"), json.getInt("tileSize"), json.getInt("levels"))
            }.getOrNull()
        }

        override suspend fun tile(level: Int, column: Int, row: Int): Bitmap? = cached("$dir/$level/${column}_$row") {
            context.assets.open("$dir/$level/${column}_$row.webp").use(BitmapFactory::decodeStream)
        }
    }

    /** A map's small whole-map picture (`preview.webp`), for cards and backdrops. */
    suspend fun preview(dir: String): Bitmap? = cached("$dir/preview") {
        context.assets.open("$dir/preview.webp").use(BitmapFactory::decodeStream)
    }

    /** The 3D world's terrain, small (assets/world/preview.jpg), for cards. */
    suspend fun worldPreview(): Bitmap? = cached("world/preview") {
        context.assets.open("world/preview.jpg").use(BitmapFactory::decodeStream)
    }

    /** Where the Atlas places are on the 3D world's terrain, as fractions (assets/world/places.json). */
    suspend fun worldPlaces(): Map<String, Pair<Float, Float>> = withContext(Dispatchers.IO) {
        runCatching {
            val places = JSONObject(context.assets.open("world/places.json").bufferedReader().use { it.readText() }).getJSONObject("places")
            places.keys().asSequence().associateWith { id ->
                val uv = places.getJSONArray(id)
                uv.getDouble(0).toFloat() to uv.getDouble(1).toFloat()
            }
        }.getOrDefault(emptyMap())
    }

    /**
     * A photo from the drive as a one-tile pyramid, decoded no bigger than [maxSide] - plenty to
     * zoom into on a TV without holding a 40-megapixel scan in memory.
     */
    fun picture(file: File, maxSide: Int = 3840): TileSource = object : TileSource {
        override val key = "${file.path}@$maxSide"
        private var size: Pair<Int, Int>? = null

        private fun bounds(): Pair<Int, Int>? = size ?: run {
            val options = BitmapFactory.Options().apply { inJustDecodeBounds = true }
            BitmapFactory.decodeFile(file.path, options)
            (options.outWidth to options.outHeight).takeIf { it.first > 0 && it.second > 0 }?.also { size = it }
        }

        private fun sampleSize(): Int {
            val (w, h) = bounds() ?: return 1
            var sample = 1
            while (maxOf(w, h) / (sample * 2) >= maxSide) sample *= 2
            return sample
        }

        override suspend fun pyramid(): TilePyramid? = withContext(Dispatchers.IO) {
            val (w, h) = bounds() ?: return@withContext null
            val sample = sampleSize()
            val side = maxOf(w, h) / sample
            TilePyramid(w / sample, h / sample, tileSize = side, levels = 1)
        }

        override suspend fun tile(level: Int, column: Int, row: Int): Bitmap? = cached(key) {
            BitmapFactory.decodeFile(file.path, BitmapFactory.Options().apply { inSampleSize = sampleSize() })
        }
    }

    private suspend fun cached(key: String, load: () -> Bitmap?): Bitmap? = withContext(Dispatchers.IO) {
        memory.get(key) ?: runCatching(load).getOrNull()?.also { memory.put(key, it) }
    }
}
