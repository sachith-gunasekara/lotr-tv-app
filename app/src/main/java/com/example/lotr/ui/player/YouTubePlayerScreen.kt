package com.example.lotr.ui.player

import android.view.ViewGroup
import androidx.compose.foundation.background
import androidx.compose.foundation.focusable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableLongStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.input.key.Key
import androidx.compose.ui.input.key.KeyEventType
import androidx.compose.ui.input.key.key
import androidx.compose.ui.input.key.onKeyEvent
import androidx.compose.ui.input.key.type
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.viewinterop.AndroidView
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleEventObserver
import androidx.lifecycle.compose.LocalLifecycleOwner
import com.example.lotr.data.PlaybackPositionRepository
import com.example.lotr.data.YouTubeVideo
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.PlayerConstants
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.YouTubePlayer
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.listeners.AbstractYouTubePlayerListener
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.options.IFramePlayerOptions
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.views.YouTubePlayerView
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking

private const val SEEK_STEP_S = 10f
private const val OVERLAY_TIMEOUT_MS = 3_000L

/**
 * Plays a YouTube video full screen in the IFrame player (via android-youtube-player), with
 * YouTube's own controls hidden: the remote works exactly as in [PlayerScreen], with the same
 * overlay, and the position is saved like a film's.
 */
@Composable
fun YouTubePlayerScreen(
    video: YouTubeVideo,
    playbackPositionRepository: PlaybackPositionRepository,
    modifier: Modifier = Modifier,
) {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()
    val lifecycleOwner = LocalLifecycleOwner.current

    var player by remember { mutableStateOf<YouTubePlayer?>(null) }
    var isPlaying by remember { mutableStateOf(false) }
    var ended by remember { mutableStateOf(false) }
    var playbackError by remember { mutableStateOf<PlayerConstants.PlayerError?>(null) }
    var positionMs by remember { mutableLongStateOf(0L) }
    var durationMs by remember { mutableLongStateOf(video.lengthSeconds * 1000L) }
    var interaction by remember { mutableIntStateOf(0) }
    var overlayVisible by remember { mutableStateOf(true) }

    val playerView = remember {
        YouTubePlayerView(context).apply {
            enableAutomaticInitialization = false
            // The WebView must never take focus, or it would swallow the remote's keys.
            isFocusable = false
            descendantFocusability = ViewGroup.FOCUS_BLOCK_DESCENDANTS
            layoutParams = ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
        }
    }

    LaunchedEffect(video.youtubeId) {
        val startMs = playbackPositionRepository.positionMs(video.watchId).first()
        val options = IFramePlayerOptions.Builder(context)
            .controls(0)
            .rel(0)
            .ivLoadPolicy(3)
            .build()
        playerView.initialize(
            object : AbstractYouTubePlayerListener() {
                override fun onReady(youTubePlayer: YouTubePlayer) {
                    player = youTubePlayer
                    youTubePlayer.loadVideo(video.youtubeId, startMs / 1000f)
                }

                override fun onStateChange(youTubePlayer: YouTubePlayer, state: PlayerConstants.PlayerState) {
                    isPlaying = state == PlayerConstants.PlayerState.PLAYING
                    ended = state == PlayerConstants.PlayerState.ENDED
                }

                override fun onCurrentSecond(youTubePlayer: YouTubePlayer, second: Float) {
                    positionMs = (second * 1000).toLong()
                }

                override fun onVideoDuration(youTubePlayer: YouTubePlayer, duration: Float) {
                    if (duration > 0) durationMs = (duration * 1000).toLong()
                }

                override fun onError(youTubePlayer: YouTubePlayer, error: PlayerConstants.PlayerError) {
                    playbackError = error
                }
            },
            options,
        )
    }

    LaunchedEffect(interaction, isPlaying) {
        overlayVisible = true
        if (isPlaying) {
            delay(OVERLAY_TIMEOUT_MS)
            overlayVisible = false
        }
    }

    DisposableEffect(lifecycleOwner) {
        // A finished video starts from the beginning next time.
        fun resumePosition() = if (ended) 0L else positionMs

        val observer = LifecycleEventObserver { _, event ->
            if (event == Lifecycle.Event.ON_PAUSE) {
                player?.pause() // the WebView would otherwise keep playing in the background
                scope.launch { playbackPositionRepository.saveProgress(video.watchId, resumePosition(), durationMs, markLastWatched = false) }
            }
        }
        lifecycleOwner.lifecycle.addObserver(observer)
        onDispose {
            lifecycleOwner.lifecycle.removeObserver(observer)
            runBlocking { playbackPositionRepository.saveProgress(video.watchId, resumePosition(), durationMs, markLastWatched = false) }
            playerView.release()
        }
    }

    val focusRequester = remember { FocusRequester() }
    LaunchedEffect(Unit) { focusRequester.requestFocus() }

    Box(
        modifier = modifier
            .fillMaxSize()
            .background(Color.Black)
            .focusRequester(focusRequester)
            .focusable()
            .onKeyEvent { event ->
                if (event.type != KeyEventType.KeyDown) return@onKeyEvent false
                val yt = player
                val handled = when (event.key) {
                    Key.DirectionCenter, Key.Enter, Key.NumPadEnter, Key.MediaPlayPause, Key.Spacebar -> {
                        if (isPlaying) yt?.pause() else yt?.play()
                        true
                    }
                    Key.MediaPlay -> { yt?.play(); true }
                    Key.MediaPause -> { yt?.pause(); true }
                    Key.DirectionRight, Key.MediaFastForward -> {
                        val to = (positionMs / 1000f + SEEK_STEP_S).coerceAtMost(durationMs / 1000f)
                        yt?.seekTo(to)
                        positionMs = (to * 1000).toLong()
                        true
                    }
                    Key.DirectionLeft, Key.MediaRewind -> {
                        val to = (positionMs / 1000f - SEEK_STEP_S).coerceAtLeast(0f)
                        yt?.seekTo(to)
                        positionMs = (to * 1000).toLong()
                        true
                    }
                    Key.DirectionUp, Key.DirectionDown -> true // just reveal the overlay
                    else -> false
                }
                if (handled) interaction++
                handled
            },
    ) {
        AndroidView(factory = { playerView }, modifier = Modifier.fillMaxSize())

        val currentError = playbackError
        if (currentError != null) {
            PlayerMessage(
                title = when (currentError) {
                    PlayerConstants.PlayerError.VIDEO_NOT_FOUND -> "This video is no longer on YouTube"
                    PlayerConstants.PlayerError.VIDEO_NOT_PLAYABLE_IN_EMBEDDED_PLAYER -> "YouTube won't play this video here"
                    else -> "This video couldn't be played"
                },
                detail = "Check the TV is online · Press Back to return",
                modifier = Modifier.align(Alignment.Center),
            )
        } else if (overlayVisible) {
            PlayerOverlay(
                title = video.title,
                isPlaying = isPlaying,
                positionMs = positionMs,
                durationMs = durationMs,
                modifier = Modifier.align(Alignment.BottomCenter),
            )
        }
    }
}
