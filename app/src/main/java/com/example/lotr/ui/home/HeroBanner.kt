package com.example.lotr.ui.home

import android.net.Uri
import android.view.ViewGroup
import androidx.annotation.OptIn
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.requiredSize
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.produceState
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.clip
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ImageBitmap
import androidx.compose.ui.graphics.Shadow
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleEventObserver
import androidx.lifecycle.compose.LocalLifecycleOwner
import androidx.media3.common.MediaItem
import androidx.media3.common.PlaybackException
import androidx.media3.common.Player
import androidx.media3.common.util.UnstableApi
import androidx.media3.exoplayer.ExoPlayer
import androidx.media3.ui.compose.ContentFrame
import androidx.media3.ui.compose.SURFACE_TYPE_TEXTURE_VIEW
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.Text
import com.example.lotr.data.RingsOfPower
import com.example.lotr.data.ThumbnailRepository
import com.example.lotr.data.WatchProgress
import com.example.lotr.data.model.Episode
import com.example.lotr.data.model.Film
import com.example.lotr.data.model.FilmFile
import com.example.lotr.data.model.Watchable
import com.example.lotr.ui.components.WarmCard
import com.example.lotr.ui.components.backdropRes
import com.example.lotr.ui.components.formatPlaybackTime
import com.example.lotr.ui.library.EpisodePlaceholder
import com.example.lotr.ui.theme.LotrBackground
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.PlayerConstants
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.YouTubePlayer
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.listeners.AbstractYouTubePlayerListener
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.options.IFramePlayerOptions
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.views.YouTubePlayerView
import kotlinx.coroutines.delay

private const val PREVIEW_DELAY_MS = 5_000L
private const val AMBIENT_LOOP_MS = 45_000L
private val TextShadow = Shadow(color = Color.Black.copy(alpha = 0.7f), offset = Offset(2f, 3f), blurRadius = 8f)

// Generous: a cold WebView fetching the IFrame API can take over 10 s.
private const val YOUTUBE_START_TIMEOUT_MS = 20_000L

/**
 * What the banner plays after resting a few seconds: a trailer from the drive (with sound), else
 * the official trailer from YouTube, else (offline, say) a muted loop of the title itself - for
 * films, starting on the very frame the still came from, so the picture simply comes alive.
 */
private sealed interface Preview {
    data class File(val uri: Uri, val startMs: Long?, val withSound: Boolean, val loops: Boolean) : Preview
    data class YouTube(val youtubeId: String) : Preview
}

/** The last-watched film or episode, large, with its still that turns into a trailer. */
@Composable
fun HeroBanner(
    watchable: Watchable,
    file: FilmFile?,
    trailer: FilmFile?,
    youTubeTrailerId: String?,
    progress: WatchProgress,
    thumbnails: ThumbnailRepository,
    onActivate: () -> Unit,
    modifier: Modifier = Modifier,
) {
    var youTubeFailed by remember(watchable.id) { mutableStateOf(false) }
    val preview = when {
        trailer != null -> Preview.File(trailer.uri, startMs = 0, withSound = true, loops = false)
        youTubeTrailerId != null && !youTubeFailed -> Preview.YouTube(youTubeTrailerId)
        file != null -> Preview.File(file.uri, startMs = (watchable as? Film)?.backdropAtMs, withSound = false, loops = true)
        else -> null
    }
    var previewStarted by remember(watchable.id, preview) { mutableStateOf(false) }
    var videoShowing by remember(watchable.id, preview) { mutableStateOf(false) }
    LaunchedEffect(watchable.id, preview) {
        if (preview == null) return@LaunchedEffect
        delay(PREVIEW_DELAY_MS)
        previewStarted = true
    }
    val videoAlpha by animateFloatAsState(if (videoShowing) 1f else 0f, tween(1200), label = "video")
    val detailsAlpha by animateFloatAsState(if (videoShowing) 0f else 1f, tween(800), label = "details")

    WarmCard(onClick = onActivate, modifier = modifier) {
        HeroStill(watchable, file, thumbnails)
        if (previewStarted) {
            val onFirstFrame = { videoShowing = true }
            val onFinished = { videoShowing = false; previewStarted = false }
            val previewModifier = Modifier.fillMaxSize().alpha(videoAlpha)
            when (preview) {
                is Preview.File -> AmbientPreview(preview, onFirstFrame, onFinished, previewModifier)
                is Preview.YouTube -> YouTubePreview(
                    youtubeId = preview.youtubeId,
                    onFirstFrame = onFirstFrame,
                    onFinished = onFinished,
                    // Offline or refused: the title's own muted loop takes over.
                    onFailed = { videoShowing = false; youTubeFailed = true },
                    modifier = previewModifier,
                )
                null -> Unit
            }
        }
        Box(
            Modifier
                .fillMaxSize()
                .background(
                    Brush.horizontalGradient(
                        0f to LotrBackground.copy(alpha = 0.92f - 0.35f * videoAlpha),
                        0.45f to LotrBackground.copy(alpha = 0.55f - 0.35f * videoAlpha),
                        0.75f to Color.Transparent,
                    ),
                ),
        )
        Box(Modifier.fillMaxSize().background(Brush.verticalGradient(0.6f to Color.Transparent, 1f to LotrBackground.copy(alpha = 0.75f))))

        Column(
            modifier = Modifier
                .align(Alignment.CenterStart)
                .padding(start = 44.dp)
                .width(520.dp),
        ) {
            Text(
                text = when {
                    progress.positionMs > 0 && watchable is Episode -> "Continue the series"
                    progress.positionMs > 0 -> "Continue watching"
                    else -> "Begin the journey"
                },
                color = MaterialTheme.colorScheme.primary,
                style = MaterialTheme.typography.labelLarge,
            )
            if (watchable is Episode) {
                Text(
                    text = "${RingsOfPower.TITLE}  ·  ${watchable.code}",
                    color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.8f),
                    style = MaterialTheme.typography.bodyMedium.copy(shadow = TextShadow),
                )
            }
            Spacer(Modifier.height(4.dp))
            Text(
                text = watchable.title,
                color = MaterialTheme.colorScheme.secondary,
                style = MaterialTheme.typography.displaySmall.copy(fontSize = 34.sp, lineHeight = 40.sp, shadow = TextShadow),
                maxLines = 2,
                overflow = TextOverflow.Ellipsis,
            )
            Column(Modifier.alpha(detailsAlpha)) {
                val details = when (watchable) {
                    is Film -> listOf(watchable.year.toString(), watchable.runtimeFor(file?.tags).toString())
                    is Episode -> emptyList()
                } + file?.tags?.labels.orEmpty()
                if (details.isNotEmpty()) {
                    Text(
                        text = details.joinToString("  ·  "),
                        color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.75f),
                        style = MaterialTheme.typography.bodyMedium.copy(shadow = TextShadow),
                    )
                }
                Spacer(Modifier.height(6.dp))
                Text(
                    text = when (watchable) {
                        is Film -> watchable.synopsis
                        is Episode -> RingsOfPower.episodeTeaser(watchable.season, watchable.number)
                    },
                    color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.9f),
                    style = MaterialTheme.typography.bodyLarge.copy(shadow = TextShadow),
                    maxLines = 2,
                    overflow = TextOverflow.Ellipsis,
                )
            }
            Spacer(Modifier.height(16.dp))
            ResumeChip(file != null, progress)
        }
    }
}

@Composable
private fun HeroStill(watchable: Watchable, file: FilmFile?, thumbnails: ThumbnailRepository) {
    when (watchable) {
        is Film -> Image(
            painter = painterResource(watchable.backdropRes()),
            contentDescription = null,
            contentScale = ContentScale.Crop,
            alignment = Alignment.CenterEnd,
            modifier = Modifier.fillMaxSize(),
        )
        is Episode -> {
            // The library's (usually cached) smaller frame first, then the full-HD one.
            val frame by produceState<ImageBitmap?>(null, file) {
                if (file == null) return@produceState
                thumbnails.frame(file)?.let { value = it.asImageBitmap() }
                thumbnails.frame(file, maxWidth = 1920)?.let { value = it.asImageBitmap() }
            }
            frame?.let {
                Image(bitmap = it, contentDescription = null, contentScale = ContentScale.Crop, modifier = Modifier.fillMaxSize())
            } ?: EpisodePlaceholder(watchable)
        }
    }
}

@Composable
private fun ResumeChip(playable: Boolean, progress: WatchProgress) {
    val gold = MaterialTheme.colorScheme.primary
    Column(Modifier.width(260.dp)) {
        Text(
            text = when {
                !playable -> "Not found  ·  OK to choose a folder"
                progress.positionMs > 0 -> "▶  Resume at ${formatPlaybackTime(progress.positionMs)}"
                else -> "▶  Play"
            },
            color = if (playable) MaterialTheme.colorScheme.onPrimary else gold,
            style = MaterialTheme.typography.titleSmall,
            maxLines = 1,
            modifier = Modifier
                .clip(RoundedCornerShape(50))
                .background(if (playable) Brush.verticalGradient(listOf(Color(0xFFEFD27A), gold)) else Brush.linearGradient(listOf(Color.Black.copy(alpha = 0.4f), Color.Black.copy(alpha = 0.4f))))
                .padding(horizontal = 22.dp, vertical = 10.dp),
        )
        if (playable && progress.fraction > 0f) {
            Spacer(Modifier.height(10.dp))
            Box(Modifier.fillMaxWidth().height(3.dp).clip(RoundedCornerShape(2.dp)).background(Color.White.copy(alpha = 0.25f))) {
                Box(Modifier.fillMaxHeight().fillMaxWidth(progress.fraction).background(gold))
            }
        }
    }
}

@OptIn(UnstableApi::class)
@Composable
private fun AmbientPreview(
    preview: Preview.File,
    onFirstFrame: () -> Unit,
    onFinished: () -> Unit,
    modifier: Modifier = Modifier,
) {
    val context = LocalContext.current
    val player = remember(preview) {
        ExoPlayer.Builder(context).build().apply {
            volume = if (preview.withSound) 0.6f else 0f
            setMediaItem(MediaItem.fromUri(preview.uri))
            prepare()
        }
    }
    var startMs by remember(preview) { mutableStateOf<Long?>(null) }

    DisposableEffect(player) {
        val listener = object : Player.Listener {
            override fun onPlaybackStateChanged(state: Int) {
                if (state == Player.STATE_READY && startMs == null) {
                    // Start where the still was taken, if the file is that long (a short
                    // test cut may not be); otherwise a fifth of the way in.
                    val duration = player.duration.coerceAtLeast(0)
                    val wanted = preview.startMs ?: (duration / 5)
                    val start = if (wanted < duration) wanted else duration / 5
                    startMs = start
                    player.seekTo(start)
                    player.play()
                }
                if (state == Player.STATE_ENDED) onFinished()
            }

            override fun onRenderedFirstFrame() = onFirstFrame()
            override fun onPlayerError(error: PlaybackException) = onFinished()
        }
        player.addListener(listener)
        onDispose {
            player.removeListener(listener)
            player.release()
        }
    }

    if (preview.loops) {
        LaunchedEffect(player) {
            while (true) {
                delay(1_000)
                val start = startMs ?: continue
                if (player.currentPosition > start + AMBIENT_LOOP_MS) player.seekTo(start)
            }
        }
    }

    ContentFrame(
        player = player,
        modifier = modifier,
        // TextureView, not SurfaceView, so the video respects the card's rounded clip and fades.
        surfaceType = SURFACE_TYPE_TEXTURE_VIEW,
        contentScale = ContentScale.Crop,
        // No black shutter before the first frame: the still underneath stays visible until
        // real video arrives (or forever, if this device can't decode the file).
        shutter = {},
    )
}

/**
 * The trailer from YouTube in the IFrame player, YouTube's controls hidden. The WebView never
 * takes focus (the banner keeps the remote), and pauses with the app. No network means the
 * player never gets going, so [onFailed] also fires if nothing plays within a few seconds.
 */
@Composable
private fun YouTubePreview(
    youtubeId: String,
    onFirstFrame: () -> Unit,
    onFinished: () -> Unit,
    onFailed: () -> Unit,
    modifier: Modifier = Modifier,
) {
    val context = LocalContext.current
    val lifecycleOwner = LocalLifecycleOwner.current
    // The player's listener outlives recompositions, so it calls the latest callbacks.
    val currentOnFirstFrame by rememberUpdatedState(onFirstFrame)
    val currentOnFinished by rememberUpdatedState(onFinished)
    val currentOnFailed by rememberUpdatedState(onFailed)
    var playing by remember(youtubeId) { mutableStateOf(false) }
    var player by remember(youtubeId) { mutableStateOf<YouTubePlayer?>(null) }
    val playerView = remember(youtubeId) {
        YouTubePlayerView(context).apply {
            enableAutomaticInitialization = false
            isFocusable = false
            descendantFocusability = ViewGroup.FOCUS_BLOCK_DESCENDANTS
            layoutParams = ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
        }
    }

    LaunchedEffect(youtubeId) {
        val options = IFramePlayerOptions.Builder(context).controls(0).rel(0).ivLoadPolicy(3).build()
        playerView.initialize(
            object : AbstractYouTubePlayerListener() {
                override fun onReady(youTubePlayer: YouTubePlayer) {
                    player = youTubePlayer
                    youTubePlayer.setVolume(60)
                    youTubePlayer.loadVideo(youtubeId, 0f)
                }

                override fun onStateChange(youTubePlayer: YouTubePlayer, state: PlayerConstants.PlayerState) {
                    when (state) {
                        PlayerConstants.PlayerState.PLAYING -> if (!playing) { playing = true; currentOnFirstFrame() }
                        PlayerConstants.PlayerState.ENDED -> currentOnFinished()
                        else -> Unit
                    }
                }

                override fun onError(youTubePlayer: YouTubePlayer, error: PlayerConstants.PlayerError) = currentOnFailed()
            },
            options,
        )
        delay(YOUTUBE_START_TIMEOUT_MS)
        if (!playing) currentOnFailed()
    }

    DisposableEffect(lifecycleOwner, player) {
        val observer = LifecycleEventObserver { _, event ->
            // The WebView would otherwise keep playing behind other apps.
            when (event) {
                Lifecycle.Event.ON_PAUSE -> player?.pause()
                Lifecycle.Event.ON_RESUME -> if (playing) player?.play()
                else -> Unit
            }
        }
        lifecycleOwner.lifecycle.addObserver(observer)
        onDispose { lifecycleOwner.lifecycle.removeObserver(observer) }
    }
    DisposableEffect(playerView) {
        onDispose { playerView.release() }
    }

    // YouTube fits the video inside the view with black bars; a 16:9 view covering the card,
    // clipped by it, crops like the drive previews' ContentScale.Crop.
    BoxWithConstraints(modifier, contentAlignment = Alignment.Center) {
        val width = maxOf(maxWidth, maxHeight * 16f / 9f)
        AndroidView(factory = { playerView }, modifier = Modifier.requiredSize(width, width * 9f / 16f))
    }
}
