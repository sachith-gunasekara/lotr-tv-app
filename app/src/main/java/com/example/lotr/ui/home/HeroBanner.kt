package com.example.lotr.ui.home

import android.net.Uri
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.produceState
import androidx.compose.runtime.remember
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
import androidx.media3.common.MediaItem
import androidx.media3.common.PlaybackException
import androidx.media3.common.Player
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
import com.example.lotr.ui.theme.LotrBackground
import kotlinx.coroutines.delay

private const val PREVIEW_DELAY_MS = 5_000L
private const val AMBIENT_LOOP_MS = 45_000L
private val TextShadow = Shadow(color = Color.Black.copy(alpha = 0.7f), offset = Offset(2f, 3f), blurRadius = 8f)

/**
 * What the banner plays after resting a few seconds: a trailer from the drive (with sound), else a
 * muted loop of the title itself - for films, starting on the very frame the still came from, so
 * the picture simply comes alive.
 */
private data class Preview(val uri: Uri, val startMs: Long?, val withSound: Boolean, val loops: Boolean)

/** The last-watched film or episode, large, with its still that turns into a trailer. */
@Composable
fun HeroBanner(
    watchable: Watchable,
    file: FilmFile?,
    trailer: FilmFile?,
    progress: WatchProgress,
    thumbnails: ThumbnailRepository,
    onActivate: () -> Unit,
    modifier: Modifier = Modifier,
) {
    val preview = when {
        trailer != null -> Preview(trailer.uri, startMs = 0, withSound = true, loops = false)
        file != null -> Preview(file.uri, startMs = (watchable as? Film)?.backdropAtMs, withSound = false, loops = true)
        else -> null
    }
    var previewStarted by remember(watchable.id) { mutableStateOf(false) }
    var videoShowing by remember(watchable.id) { mutableStateOf(false) }
    LaunchedEffect(watchable.id, preview) {
        if (preview == null) return@LaunchedEffect
        delay(PREVIEW_DELAY_MS)
        previewStarted = true
    }
    val videoAlpha by animateFloatAsState(if (videoShowing) 1f else 0f, tween(1200), label = "video")
    val detailsAlpha by animateFloatAsState(if (videoShowing) 0f else 1f, tween(800), label = "details")

    WarmCard(onClick = onActivate, modifier = modifier) {
        HeroStill(watchable, file, thumbnails)
        if (previewStarted && preview != null) {
            AmbientPreview(
                preview = preview,
                onFirstFrame = { videoShowing = true },
                onFinished = { videoShowing = false; previewStarted = false },
                modifier = Modifier.fillMaxSize().alpha(videoAlpha),
            )
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
            }
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

@Composable
private fun AmbientPreview(
    preview: Preview,
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
    )
}
