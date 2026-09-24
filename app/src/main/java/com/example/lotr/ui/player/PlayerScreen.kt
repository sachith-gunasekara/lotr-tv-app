package com.example.lotr.ui.player

import android.net.Uri
import androidx.compose.foundation.background
import androidx.compose.foundation.focusable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
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
import androidx.compose.ui.draw.clip
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.input.key.Key
import androidx.compose.ui.input.key.KeyEventType
import androidx.compose.ui.input.key.key
import androidx.compose.ui.input.key.onKeyEvent
import androidx.compose.ui.input.key.type
import androidx.compose.ui.platform.LocalContext
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.ui.unit.dp
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleEventObserver
import androidx.lifecycle.compose.LocalLifecycleOwner
import androidx.media3.common.MediaItem
import androidx.media3.common.PlaybackException
import androidx.media3.common.Player
import androidx.media3.exoplayer.ExoPlayer
import androidx.media3.ui.compose.PlayerSurface
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.Text
import com.example.lotr.data.PlaybackPositionRepository
import com.example.lotr.data.model.Film
import com.example.lotr.ui.components.formatPlaybackTime
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking

private const val SEEK_STEP_MS = 10_000L
private const val OVERLAY_TIMEOUT_MS = 3_000L

@Composable
fun PlayerScreen(
    film: Film,
    uri: Uri,
    playbackPositionRepository: PlaybackPositionRepository,
    modifier: Modifier = Modifier,
) {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()
    val lifecycleOwner = LocalLifecycleOwner.current
    val exoPlayer = remember { ExoPlayer.Builder(context).build() }

    var isPlaying by remember { mutableStateOf(false) }
    var error by remember { mutableStateOf<PlaybackException?>(null) }
    var positionMs by remember { mutableLongStateOf(0L) }
    var durationMs by remember { mutableLongStateOf(0L) }
    // Bumped on every key press; the overlay shows while paused or briefly after input.
    var interaction by remember { mutableIntStateOf(0) }
    var overlayVisible by remember { mutableStateOf(true) }

    LaunchedEffect(film.id, uri) {
        val startPositionMs = playbackPositionRepository.positionMs(film.id).first()
        exoPlayer.setMediaItem(MediaItem.fromUri(uri))
        exoPlayer.prepare()
        if (startPositionMs > 0) exoPlayer.seekTo(startPositionMs)
        exoPlayer.play()
    }

    LaunchedEffect(exoPlayer) {
        while (true) {
            positionMs = exoPlayer.currentPosition
            durationMs = exoPlayer.duration.coerceAtLeast(0)
            delay(500)
        }
    }

    LaunchedEffect(interaction, isPlaying) {
        overlayVisible = true
        if (isPlaying) {
            delay(OVERLAY_TIMEOUT_MS)
            overlayVisible = false
        }
    }

    DisposableEffect(lifecycleOwner, exoPlayer) {
        // A finished film should start from the beginning next time, not resume at the credits.
        fun resumePosition() =
            if (exoPlayer.playbackState == Player.STATE_ENDED) 0L else exoPlayer.currentPosition

        val playerListener = object : Player.Listener {
            override fun onIsPlayingChanged(playing: Boolean) {
                isPlaying = playing
            }

            override fun onPlayerError(e: PlaybackException) {
                error = e
            }
        }
        exoPlayer.addListener(playerListener)

        val lifecycleObserver = LifecycleEventObserver { _, event ->
            if (event == Lifecycle.Event.ON_PAUSE) {
                scope.launch { playbackPositionRepository.savePosition(film.id, resumePosition()) }
            }
        }
        lifecycleOwner.lifecycle.addObserver(lifecycleObserver)

        onDispose {
            lifecycleOwner.lifecycle.removeObserver(lifecycleObserver)
            exoPlayer.removeListener(playerListener)
            // scope is torn down alongside this composable, so the final save can't rely on
            // it outliving this callback; block briefly instead for a single Preferences write.
            runBlocking { playbackPositionRepository.savePosition(film.id, resumePosition()) }
            exoPlayer.release()
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
                val handled = when (event.key) {
                    Key.DirectionCenter, Key.Enter, Key.NumPadEnter, Key.MediaPlayPause, Key.Spacebar -> {
                        if (exoPlayer.isPlaying) exoPlayer.pause() else exoPlayer.play()
                        true
                    }
                    Key.MediaPlay -> { exoPlayer.play(); true }
                    Key.MediaPause -> { exoPlayer.pause(); true }
                    Key.DirectionRight, Key.MediaFastForward -> {
                        exoPlayer.seekTo(exoPlayer.currentPosition + SEEK_STEP_MS)
                        true
                    }
                    Key.DirectionLeft, Key.MediaRewind -> {
                        exoPlayer.seekTo((exoPlayer.currentPosition - SEEK_STEP_MS).coerceAtLeast(0))
                        true
                    }
                    Key.DirectionUp, Key.DirectionDown -> true // just reveal the overlay
                    else -> false
                }
                if (handled) {
                    positionMs = exoPlayer.currentPosition
                    interaction++
                }
                handled
            },
    ) {
        PlayerSurface(player = exoPlayer, modifier = Modifier.fillMaxSize())

        val currentError = error
        if (currentError != null) {
            PlaybackErrorMessage(currentError, Modifier.align(Alignment.Center))
        } else if (overlayVisible) {
            PlayerOverlay(
                title = film.title,
                isPlaying = isPlaying,
                positionMs = positionMs,
                durationMs = durationMs,
                modifier = Modifier.align(Alignment.BottomCenter),
            )
        }
    }
}

@Composable
private fun PlayerOverlay(
    title: String,
    isPlaying: Boolean,
    positionMs: Long,
    durationMs: Long,
    modifier: Modifier = Modifier,
) {
    Column(
        modifier = modifier
            .fillMaxWidth()
            .background(Brush.verticalGradient(0f to Color.Transparent, 0.3f to Color.Black.copy(alpha = 0.6f), 1f to Color.Black.copy(alpha = 0.9f)))
            .padding(top = 48.dp)
            .padding(horizontal = 48.dp, vertical = 32.dp),
    ) {
        Text(title, color = MaterialTheme.colorScheme.secondary, style = MaterialTheme.typography.headlineSmall)
        val progress = if (durationMs > 0) (positionMs.toFloat() / durationMs).coerceIn(0f, 1f) else 0f
        Box(
            modifier = Modifier
                .padding(vertical = 12.dp)
                .fillMaxWidth()
                .height(6.dp)
                .clip(RoundedCornerShape(3.dp))
                .background(Color.White.copy(alpha = 0.25f)),
        ) {
            Box(
                Modifier
                    .fillMaxWidth(progress)
                    .height(6.dp)
                    .background(MaterialTheme.colorScheme.primary),
            )
        }
        Row(horizontalArrangement = Arrangement.SpaceBetween, modifier = Modifier.fillMaxWidth()) {
            Text(
                text = "${if (isPlaying) "▶" else "❚❚"}  ${formatPlaybackTime(positionMs)} / ${formatPlaybackTime(durationMs)}",
                color = Color.White,
                style = MaterialTheme.typography.bodyLarge,
            )
            Text(
                text = "OK play/pause  ·  ◀ ▶ 10s  ·  Back to exit",
                color = Color.White.copy(alpha = 0.6f),
                style = MaterialTheme.typography.bodyMedium,
            )
        }
    }
}

@Composable
private fun PlaybackErrorMessage(error: PlaybackException, modifier: Modifier = Modifier) {
    val isDecoderProblem = error.errorCode in 4000..4999
    Column(modifier = modifier.padding(48.dp), horizontalAlignment = Alignment.CenterHorizontally) {
        Text(
            text = if (isDecoderProblem) "This device can't decode this video" else "This video couldn't be played",
            color = MaterialTheme.colorScheme.primary,
            style = MaterialTheme.typography.headlineSmall,
        )
        Text(
            text = "${error.errorCodeName} · Press Back to return",
            color = Color.White.copy(alpha = 0.7f),
            style = MaterialTheme.typography.bodyMedium,
        )
    }
}
