package com.example.lotr

import android.net.Uri
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.example.lotr.data.PlaybackPositionRepository
import com.example.lotr.data.StorageRepository
import com.example.lotr.data.model.Film
import com.example.lotr.ui.films.FilmsScreen
import com.example.lotr.ui.home.HomeScreen
import com.example.lotr.ui.player.PlayerScreen
import com.example.lotr.ui.theme.LotrTheme

private sealed interface Screen {
    data object Home : Screen
    data object Films : Screen
    data class Player(val film: Film, val uri: Uri) : Screen
}

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            LotrTheme {
                val storageRepository = remember { StorageRepository(applicationContext) }
                val playbackPositionRepository = remember { PlaybackPositionRepository(applicationContext) }
                var backStack by remember { mutableStateOf(listOf<Screen>(Screen.Home)) }

                // Kiosk-simple back-stack: the remote's Back button pops one screen until Home,
                // then falls through to the system default (exits the app). No Navigation-Compose
                // needed for a 3-screen graph with no deep links.
                BackHandler(enabled = backStack.size > 1) {
                    backStack = backStack.dropLast(1)
                }

                when (val current = backStack.last()) {
                    Screen.Home -> HomeScreen(
                        onOpenFilms = { backStack = backStack + Screen.Films },
                    )
                    Screen.Films -> FilmsScreen(
                        storageRepository = storageRepository,
                        onPlay = { film, uri -> backStack = backStack + Screen.Player(film, uri) },
                    )
                    is Screen.Player -> PlayerScreen(
                        film = current.film,
                        uri = current.uri,
                        playbackPositionRepository = playbackPositionRepository,
                    )
                }
            }
        }
    }
}
