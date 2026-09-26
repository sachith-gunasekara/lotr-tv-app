package com.example.lotr.ui.player

import android.net.Uri
import androidx.activity.compose.BackHandler
import androidx.annotation.OptIn
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
import androidx.compose.foundation.layout.width
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
import androidx.media3.common.C
import androidx.media3.common.Format
import androidx.media3.common.MediaItem
import androidx.media3.common.PlaybackException
import androidx.media3.common.Player
import androidx.media3.common.TrackSelectionOverride
import androidx.media3.common.Tracks
import androidx.media3.common.util.UnstableApi
import androidx.media3.exoplayer.ExoPlayer
import androidx.media3.ui.compose.PlayerSurface
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.Text
import com.example.lotr.data.PlaybackPositionRepository
import com.example.lotr.ui.components.formatPlaybackTime
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import java.util.Locale

private const val SEEK_STEP_MS = 10_000L
private const val OVERLAY_TIMEOUT_MS = 3_000L

/**
 * Plays a video file full screen, resuming where [id] was left. [markLastWatched] is for films and
 * episodes (the Home banner follows them), not extras.
 */
@OptIn(UnstableApi::class)
@Composable
fun PlayerScreen(
    id: String,
    title: String,
    uri: Uri,
    markLastWatched: Boolean,
    playbackPositionRepository: PlaybackPositionRepository,
    modifier: Modifier = Modifier,
) {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()
    val lifecycleOwner = LocalLifecycleOwner.current
    val exoPlayer = remember {
        ExoPlayer.Builder(context).build().apply {
            // Multi-language releases (e.g. the series) should start in English, whatever the file's default is.
            trackSelectionParameters = trackSelectionParameters.buildUpon().setPreferredAudioLanguage("en").build()
        }
    }

    var isPlaying by remember { mutableStateOf(false) }
    var error by remember { mutableStateOf<PlaybackException?>(null) }
    var positionMs by remember { mutableLongStateOf(0L) }
    var durationMs by remember { mutableLongStateOf(0L) }
    // Bumped on every key press; the overlay shows while paused or briefly after input.
    var interaction by remember { mutableIntStateOf(0) }
    var overlayVisible by remember { mutableStateOf(true) }
    var audioOptions by remember { mutableStateOf(emptyList<AudioOption>()) }
    var audioPickerOpen by remember { mutableStateOf(false) }
    var audioPickerIndex by remember { mutableIntStateOf(0) }

    LaunchedEffect(id, uri) {
        val startPositionMs = playbackPositionRepository.positionMs(id).first()
        exoPlayer.setMediaItem(MediaItem.fromUri(uri))
        exoPlayer.prepare()
        if (startPositionMs > 0) exoPlayer.seekTo(startPositionMs)
        exoPlayer.play()
        // Record it straight away, so Home's banner follows what's playing.
        playbackPositionRepository.saveProgress(id, startPositionMs, durationMs = 0, markLastWatched)
    }

    LaunchedEffect(exoPlayer) {
        while (true) {
            positionMs = exoPlayer.currentPosition
            durationMs = exoPlayer.duration.coerceAtLeast(0)
            delay(500)
        }
    }

    LaunchedEffect(interaction, isPlaying, audioPickerOpen) {
        overlayVisible = true
        if (isPlaying && !audioPickerOpen) {
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

            // The language preference only sees language tags; some releases leave tracks untagged
            // ("und") and only name them, so pick an English-named one by hand - once, so a choice
            // made in the picker isn't undone.
            private var checkedEnglish = false

            override fun onTracksChanged(tracks: Tracks) {
                audioOptions = audioOptions(tracks)
                if (checkedEnglish || audioOptions.isEmpty()) return
                checkedEnglish = true
                if (audioOptions.none { it.selected && it.isEnglish }) {
                    audioOptions.firstOrNull { it.isEnglish }?.let { exoPlayer.selectAudio(it) }
                }
            }
        }
        exoPlayer.addListener(playerListener)

        val lifecycleObserver = LifecycleEventObserver { _, event ->
            if (event == Lifecycle.Event.ON_PAUSE) {
                scope.launch { playbackPositionRepository.saveProgress(id, resumePosition(), exoPlayer.duration.coerceAtLeast(0), markLastWatched) }
            }
        }
        lifecycleOwner.lifecycle.addObserver(lifecycleObserver)

        onDispose {
            lifecycleOwner.lifecycle.removeObserver(lifecycleObserver)
            exoPlayer.removeListener(playerListener)
            // scope is torn down alongside this composable, so the final save can't rely on
            // it outliving this callback; block briefly instead for a single Preferences write.
            runBlocking { playbackPositionRepository.saveProgress(id, resumePosition(), exoPlayer.duration.coerceAtLeast(0), markLastWatched) }
            exoPlayer.release()
        }
    }

    val focusRequester = remember { FocusRequester() }
    LaunchedEffect(Unit) { focusRequester.requestFocus() }

    BackHandler(enabled = audioPickerOpen) { audioPickerOpen = false }

    fun openAudioPicker() {
        if (audioOptions.size < 2) return
        audioPickerIndex = audioOptions.indexOfFirst { it.selected }.coerceAtLeast(0)
        audioPickerOpen = true
    }

    Box(
        modifier = modifier
            .fillMaxSize()
            .background(Color.Black)
            .focusRequester(focusRequester)
            .focusable()
            .onKeyEvent { event ->
                if (event.type != KeyEventType.KeyDown) return@onKeyEvent false
                if (audioPickerOpen) {
                    when (event.key) {
                        Key.DirectionUp -> audioPickerIndex = (audioPickerIndex - 1).coerceAtLeast(0)
                        Key.DirectionDown -> audioPickerIndex = (audioPickerIndex + 1).coerceAtMost(audioOptions.lastIndex)
                        Key.DirectionCenter, Key.Enter, Key.NumPadEnter -> {
                            audioOptions.getOrNull(audioPickerIndex)?.let { exoPlayer.selectAudio(it) }
                            audioPickerOpen = false
                        }
                        Key.MediaAudioTrack -> audioPickerOpen = false
                        Key.DirectionLeft, Key.DirectionRight -> Unit
                        else -> return@onKeyEvent false
                    }
                    interaction++
                    return@onKeyEvent true
                }
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
                    Key.DirectionDown, Key.MediaAudioTrack -> {
                        openAudioPicker()
                        true
                    }
                    Key.DirectionUp -> true // just reveal the overlay
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
            val isDecoderProblem = currentError.errorCode in 4000..4999
            PlayerMessage(
                title = if (isDecoderProblem) "This device can't decode this video" else "This video couldn't be played",
                detail = "${currentError.errorCodeName} · Press Back to return",
                modifier = Modifier.align(Alignment.Center),
            )
        } else if (overlayVisible) {
            PlayerOverlay(
                title = title,
                isPlaying = isPlaying,
                positionMs = positionMs,
                durationMs = durationMs,
                audio = audioOptions.firstOrNull { it.selected }?.label?.takeIf { audioOptions.size > 1 },
                modifier = Modifier.align(Alignment.BottomCenter),
            )
            if (audioPickerOpen) {
                AudioPicker(
                    options = audioOptions,
                    highlighted = audioPickerIndex,
                    modifier = Modifier
                        .align(Alignment.TopEnd)
                        .padding(48.dp),
                )
            }
        }
    }
}

/** One playable audio track of the current video. */
internal data class AudioOption(
    val group: Tracks.Group,
    val trackIndex: Int,
    val label: String,
    val isEnglish: Boolean,
    val selected: Boolean,
)

private fun audioOptions(tracks: Tracks): List<AudioOption> {
    val options = tracks.groups
        .filter { it.type == C.TRACK_TYPE_AUDIO }
        .flatMap { group ->
            (0 until group.length)
                .filter { group.isTrackSupported(it) }
                .map { index ->
                    val format = group.getTrackFormat(index)
                    AudioOption(group, index, audioLabel(format), format.isEnglish(), group.isTrackSelected(index))
                }
        }
    // Same-named tracks (two English mixes, say) get numbered so they can be told apart.
    return options.mapIndexed { i, option ->
        if (options.count { it.label == option.label } > 1) option.copy(label = "${option.label} (${i + 1})") else option
    }
}

private fun Format.isEnglish(): Boolean =
    language?.lowercase()?.let { it == "en" || it.startsWith("en-") || it == "eng" } == true ||
        label?.contains("english", ignoreCase = true) == true

private fun audioLabel(format: Format): String {
    val language = format.language?.takeUnless { it == C.LANGUAGE_UNDETERMINED }
        ?.let { Locale.forLanguageTag(it).getDisplayLanguage(Locale.ENGLISH).takeIf(String::isNotBlank) ?: it }
    val name = format.label?.takeIf { it.isNotBlank() } ?: language ?: "Unknown"
    val channels = when (format.channelCount) {
        1 -> "Mono"
        2 -> "Stereo"
        6 -> "5.1"
        8 -> "7.1"
        else -> null
    }
    return listOfNotNull(name, channels?.takeUnless { name.contains(it, ignoreCase = true) }).joinToString(" · ")
}

private fun Player.selectAudio(option: AudioOption) {
    trackSelectionParameters = trackSelectionParameters.buildUpon()
        .setOverrideForType(TrackSelectionOverride(option.group.mediaTrackGroup, option.trackIndex))
        .build()
}

/** The list of audio tracks, opened with ▼; ▲ ▼ choose, OK picks, Back closes. */
@Composable
private fun AudioPicker(options: List<AudioOption>, highlighted: Int, modifier: Modifier = Modifier) {
    Column(
        modifier = modifier
            .width(360.dp)
            .clip(RoundedCornerShape(12.dp))
            .background(Color.Black.copy(alpha = 0.85f))
            .padding(vertical = 16.dp),
    ) {
        Text(
            text = "Audio",
            color = MaterialTheme.colorScheme.secondary,
            style = MaterialTheme.typography.titleMedium,
            modifier = Modifier.padding(horizontal = 24.dp, vertical = 8.dp),
        )
        options.forEachIndexed { index, option ->
            val isHighlighted = index == highlighted
            Text(
                text = "${if (option.selected) "✓" else "   "}  ${option.label}",
                color = if (isHighlighted) MaterialTheme.colorScheme.primary else Color.White.copy(alpha = 0.8f),
                style = MaterialTheme.typography.bodyLarge,
                modifier = Modifier
                    .fillMaxWidth()
                    .background(if (isHighlighted) Color.White.copy(alpha = 0.08f) else Color.Transparent)
                    .padding(horizontal = 24.dp, vertical = 10.dp),
            )
        }
    }
}

/** Title, progress bar, time and remote hints along the bottom - shared by both players. */
@Composable
internal fun PlayerOverlay(
    title: String,
    isPlaying: Boolean,
    positionMs: Long,
    durationMs: Long,
    modifier: Modifier = Modifier,
    audio: String? = null,
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
                text = "${if (isPlaying) "▶" else "❚❚"}  ${formatPlaybackTime(positionMs)} / ${formatPlaybackTime(durationMs)}" +
                    (audio?.let { "  ·  $it" } ?: ""),
                color = Color.White,
                style = MaterialTheme.typography.bodyLarge,
            )
            Text(
                text = "OK play/pause  ·  ◀ ▶ 10s  ·  " + (if (audio != null) "▼ audio  ·  " else "") + "Back to exit",
                color = Color.White.copy(alpha = 0.6f),
                style = MaterialTheme.typography.bodyMedium,
            )
        }
    }
}

/** A centred message over the black player, e.g. when a video can't be played. */
@Composable
internal fun PlayerMessage(title: String, detail: String, modifier: Modifier = Modifier) {
    Column(modifier = modifier.padding(48.dp), horizontalAlignment = Alignment.CenterHorizontally) {
        Text(
            text = title,
            color = MaterialTheme.colorScheme.primary,
            style = MaterialTheme.typography.headlineSmall,
        )
        Text(
            text = detail,
            color = Color.White.copy(alpha = 0.7f),
            style = MaterialTheme.typography.bodyMedium,
        )
    }
}
