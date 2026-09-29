package com.example.lotr.ui.components

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.platform.LocalContext
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.compose.LocalLifecycleOwner
import androidx.lifecycle.compose.currentStateAsState
import androidx.media3.common.AudioAttributes
import androidx.media3.common.C
import androidx.media3.common.MediaItem
import androidx.media3.common.Player
import androidx.media3.exoplayer.ExoPlayer
import com.example.lotr.data.BundledTrack
import kotlinx.coroutines.NonCancellable
import kotlinx.coroutines.delay
import kotlinx.coroutines.withContext

private const val FADE_IN_MS = 2_500L
private const val FADE_OUT_MS = 800L
private const val TICK_MS = 50L

/**
 * Bundled [tracks] played in turn and looped while [playing], at [volume] times each track's
 * loudness-matched [BundledTrack.gain]: fades in, fades out when [playing] turns false or the app
 * goes to the background, and picks up where it left off next time. Kept composed by the
 * navigation host so moving between screens that all play it doesn't interrupt it.
 */
@Composable
fun BundledBackgroundMusic(tracks: List<BundledTrack>, playing: Boolean, volume: Float) {
    val context = LocalContext.current
    val lifecycleState by LocalLifecycleOwner.current.lifecycle.currentStateAsState()
    val active = playing && lifecycleState.isAtLeast(Lifecycle.State.RESUMED)
    // Where it stopped (track, position), to resume there.
    var resumeAt by remember { mutableStateOf(0 to 0L) }

    LaunchedEffect(active) {
        if (!active) return@LaunchedEffect
        val player = ExoPlayer.Builder(context).build().apply {
            setAudioAttributes(
                AudioAttributes.Builder().setUsage(C.USAGE_MEDIA).setContentType(C.AUDIO_CONTENT_TYPE_MUSIC).build(),
                /* handleAudioFocus = */ true,
            )
            this.volume = 0f
            repeatMode = Player.REPEAT_MODE_ALL
            val (index, position) = resumeAt
            setMediaItems(tracks.map { MediaItem.fromUri(it.uri) }, index, position)
            prepare()
            play()
        }
        val started = System.currentTimeMillis()
        try {
            while (true) {
                val fadeIn = ((System.currentTimeMillis() - started).toFloat() / FADE_IN_MS).coerceAtMost(1f)
                val gain = tracks.getOrNull(player.currentMediaItemIndex)?.gain ?: 1f
                player.volume = volume * gain * fadeIn
                delay(TICK_MS)
            }
        } finally {
            resumeAt = player.currentMediaItemIndex to player.currentPosition
            withContext(NonCancellable) {
                val from = player.volume
                val steps = (FADE_OUT_MS / TICK_MS).toInt()
                for (step in steps downTo 1) {
                    player.volume = from * step / steps
                    delay(TICK_MS)
                }
                player.release()
            }
        }
    }
}
