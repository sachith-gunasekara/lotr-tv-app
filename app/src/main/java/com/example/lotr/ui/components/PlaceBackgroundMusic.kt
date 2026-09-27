package com.example.lotr.ui.components

import android.view.ViewGroup
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.runtime.setValue
import androidx.compose.runtime.snapshotFlow
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.viewinterop.AndroidView
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.compose.LocalLifecycleOwner
import androidx.lifecycle.compose.currentStateAsState
import com.example.lotr.data.YouTubeVideo
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.PlayerConstants
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.YouTubePlayer
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.listeners.AbstractYouTubePlayerListener
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.options.IFramePlayerOptions
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.views.YouTubePlayerView
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.withTimeoutOrNull

/** YouTube's volume (0-100); about as loud as the quiet Shire music. */
private const val VOLUME = 35
private const val FADE_IN_MS = 2_500L
private const val FADE_OUT_MS = 1_200L
private const val TICK_MS = 50L

/** Without network the player never gets going; give up and let the Shire music play on. */
private const val START_TIMEOUT_MS = 20_000L

/**
 * A place's score cue from YouTube, quietly behind a map: crossfades to [video] when it changes,
 * loops it, fades out when it turns null or the app pauses, and picks each cue up where it left
 * off. [onPlaying] says when it's audible (the Shire music stays off meanwhile); [onFailed] when a
 * cue won't play (offline, or no longer embeddable). The player is laid out full size - compose it
 * underneath an opaque screen - and never takes focus.
 */
@Composable
fun PlaceBackgroundMusic(
    video: YouTubeVideo?,
    onPlaying: (Boolean) -> Unit,
    onFailed: (YouTubeVideo) -> Unit,
    modifier: Modifier = Modifier,
) {
    val context = LocalContext.current
    val lifecycleState by LocalLifecycleOwner.current.lifecycle.currentStateAsState()
    val active = lifecycleState.isAtLeast(Lifecycle.State.RESUMED)
    val currentOnPlaying by rememberUpdatedState(onPlaying)
    val currentOnFailed by rememberUpdatedState(onFailed)

    var player by remember { mutableStateOf<YouTubePlayer?>(null) }
    var state by remember { mutableStateOf(PlayerConstants.PlayerState.UNKNOWN) }
    var failed by remember { mutableStateOf(false) }
    // What's loaded, where it's got to, and how loud it is now (the player can't be asked).
    val progress = remember { mutableMapOf<String, Float>() }
    var loadedId by remember { mutableStateOf<String?>(null) }
    var second by remember { mutableFloatStateOf(0f) }
    var volume by remember { mutableIntStateOf(0) }
    // The listener's parameters shadow the state above.
    val setState = { s: PlayerConstants.PlayerState -> state = s }
    val setSecond = { s: Float -> second = s }
    val setFailed = { failed = true }

    val playerView = remember {
        YouTubePlayerView(context).apply {
            enableAutomaticInitialization = false
            isFocusable = false
            descendantFocusability = ViewGroup.FOCUS_BLOCK_DESCENDANTS
            layoutParams = ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
            initialize(
                object : AbstractYouTubePlayerListener() {
                    override fun onReady(youTubePlayer: YouTubePlayer) {
                        youTubePlayer.setVolume(0)
                        player = youTubePlayer
                    }

                    override fun onStateChange(youTubePlayer: YouTubePlayer, state: PlayerConstants.PlayerState) {
                        // Each cue loops until the place changes.
                        if (state == PlayerConstants.PlayerState.ENDED) {
                            youTubePlayer.seekTo(0f)
                            youTubePlayer.play()
                        }
                        setState(state)
                    }

                    override fun onCurrentSecond(youTubePlayer: YouTubePlayer, second: Float) {
                        setSecond(second)
                    }

                    override fun onError(youTubePlayer: YouTubePlayer, error: PlayerConstants.PlayerError) {
                        setFailed()
                    }
                },
                IFramePlayerOptions.Builder(context).controls(0).rel(0).ivLoadPolicy(3).build(),
            )
        }
    }

    LaunchedEffect(player, video, active) {
        val p = player ?: return@LaunchedEffect
        val target = video?.takeIf { active }
        if (target == null) currentOnPlaying(false)
        if (target?.youtubeId == loadedId && state == PlayerConstants.PlayerState.PLAYING) {
            fade(volume, VOLUME, FADE_IN_MS) { volume = it; p.setVolume(it) }
            return@LaunchedEffect
        }
        // Out with the old cue...
        fade(volume, 0, FADE_OUT_MS) { volume = it; p.setVolume(it) }
        loadedId?.let { progress[it] = second }
        p.pause()
        if (target == null) return@LaunchedEffect
        // ...and in with the new, where it was left.
        state = PlayerConstants.PlayerState.UNKNOWN
        failed = false
        loadedId = target.youtubeId
        second = progress[target.youtubeId] ?: 0f
        p.loadVideo(target.youtubeId, second)
        val started = withTimeoutOrNull(START_TIMEOUT_MS) {
            snapshotFlow { state == PlayerConstants.PlayerState.PLAYING || failed }.first { it }
            !failed
        } ?: false
        if (!started) {
            p.pause()
            loadedId = null
            currentOnPlaying(false)
            currentOnFailed(target)
            return@LaunchedEffect
        }
        currentOnPlaying(true)
        fade(0, VOLUME, FADE_IN_MS) { volume = it; p.setVolume(it) }
    }

    DisposableEffect(playerView) {
        onDispose {
            currentOnPlaying(false)
            playerView.release()
        }
    }

    AndroidView(factory = { playerView }, modifier = modifier)
}

/** Steps the volume from [from] to [to] over [durationMs]. */
private suspend fun fade(from: Int, to: Int, durationMs: Long, set: (Int) -> Unit) {
    if (from == to) return
    val steps = (durationMs / TICK_MS).toInt()
    for (step in 1..steps) {
        set(from + (to - from) * step / steps)
        delay(TICK_MS)
    }
}
