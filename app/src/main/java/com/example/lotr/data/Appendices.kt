package com.example.lotr.data

import android.content.Context
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.json.JSONObject

/** A behind-the-scenes video on YouTube. [youtubeId] is the `v=` part of its URL. */
data class YouTubeVideo(
    val youtubeId: String,
    val title: String,
    val lengthSeconds: Int,
    /** The channel it's on, credited in the details panel. */
    val channel: String,
) {
    /** Key for resume position, alongside films and episodes. */
    val watchId: String get() = "yt_$youtubeId"
    val thumbnailUrl: String get() = "https://i.ytimg.com/vi/$youtubeId/hqdefault.jpg"
}

/** A shelf of [videos] with a line saying what they are. */
data class AppendixShelf(val id: String, val title: String, val about: String, val videos: List<YouTubeVideo>)

/** A tab of the Appendices: e.g. "The Music", holding its shelves. */
data class AppendixCategory(val id: String, val title: String, val about: String, val shelves: List<AppendixShelf>)

/**
 * The Appendices catalog lives in one file, `assets/appendices/catalog.json`: categories →
 * collections → videos. Every video in it must be embeddable (checked with YouTube's oEmbed and
 * the watch page's `playableInEmbed`); to add or change one, edit that file - nothing else.
 */
object AppendicesCatalog {
    const val ASSET = "appendices/catalog.json"

    fun parse(json: String): List<AppendixCategory> {
        val categories = JSONObject(json).getJSONArray("categories")
        return (0 until categories.length()).map { c ->
            val category = categories.getJSONObject(c)
            val collections = category.getJSONArray("collections")
            AppendixCategory(
                id = category.getString("id"),
                title = category.getString("title"),
                about = category.optString("about"),
                shelves = (0 until collections.length()).map { s ->
                    val shelf = collections.getJSONObject(s)
                    val videos = shelf.getJSONArray("videos")
                    AppendixShelf(
                        id = shelf.getString("id"),
                        title = shelf.getString("title"),
                        about = shelf.optString("about"),
                        videos = (0 until videos.length()).map { v ->
                            val video = videos.getJSONObject(v)
                            YouTubeVideo(
                                youtubeId = video.getString("youtubeId"),
                                title = video.getString("title"),
                                lengthSeconds = video.getInt("seconds"),
                                channel = video.getString("channel"),
                            )
                        },
                    )
                },
            )
        }
    }
}

/** Reads the Appendices catalog from the app's assets. */
class AppendicesRepository(private val context: Context) {
    suspend fun categories(): List<AppendixCategory> = withContext(Dispatchers.IO) {
        AppendicesCatalog.parse(context.assets.open(AppendicesCatalog.ASSET).bufferedReader().use { it.readText() })
    }
}
