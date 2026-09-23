package com.example.lotr.ui.player

import android.net.Uri
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleEventObserver
import androidx.lifecycle.compose.LocalLifecycleOwner
import androidx.media3.common.MediaItem
import androidx.media3.exoplayer.ExoPlayer
import androidx.media3.ui.compose.PlayerSurface
import com.example.lotr.data.PlaybackPositionRepository
import com.example.lotr.data.model.Film
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking

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

    LaunchedEffect(film.id, uri) {
        val startPositionMs = playbackPositionRepository.positionMs(film.id).first()
        exoPlayer.setMediaItem(MediaItem.fromUri(uri))
        exoPlayer.prepare()
        if (startPositionMs > 0) exoPlayer.seekTo(startPositionMs)
        exoPlayer.play()
    }

    DisposableEffect(lifecycleOwner, exoPlayer) {
        val observer = LifecycleEventObserver { _, event ->
            if (event == Lifecycle.Event.ON_PAUSE) {
                scope.launch { playbackPositionRepository.savePosition(film.id, exoPlayer.currentPosition) }
            }
        }
        lifecycleOwner.lifecycle.addObserver(observer)

        onDispose {
            lifecycleOwner.lifecycle.removeObserver(observer)
            // scope is torn down alongside this composable, so the final save can't rely on
            // it outliving this callback; block briefly instead for a single Preferences write.
            runBlocking { playbackPositionRepository.savePosition(film.id, exoPlayer.currentPosition) }
            exoPlayer.release()
        }
    }

    PlayerSurface(player = exoPlayer, modifier = modifier.fillMaxSize())
}
