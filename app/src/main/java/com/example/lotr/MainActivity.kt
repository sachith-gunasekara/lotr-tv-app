package com.example.lotr

import android.net.Uri
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveableStateHolder
import androidx.compose.runtime.setValue
import androidx.lifecycle.lifecycleScope
import com.example.lotr.data.FilmLibrary
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
    private val storageRepository by lazy { StorageRepository(applicationContext) }
    private val filmLibrary by lazy { FilmLibrary(storageRepository, lifecycleScope) }

    override fun onResume() {
        super.onResume()
        // Picks up a pendrive plugged in (or a permission granted in Settings) while away.
        filmLibrary.rescan()
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            LotrTheme {
                val playbackPositionRepository = remember { PlaybackPositionRepository(applicationContext) }
                val saveableStateHolder = rememberSaveableStateHolder()
                var backStack by remember { mutableStateOf(listOf<Screen>(Screen.Home)) }

                // Kiosk-simple back-stack: the remote's Back button pops one screen until Home,
                // then falls through to the system default (exits the app). No Navigation-Compose
                // needed for a 3-screen graph with no deep links.
                BackHandler(enabled = backStack.size > 1) {
                    saveableStateHolder.removeState(backStack.last().toString())
                    backStack = backStack.dropLast(1)
                }

                val current = backStack.last()
                // Keeps each screen's rememberSaveable state (e.g. the selected film) while it's
                // covered by a screen pushed on top of it.
                saveableStateHolder.SaveableStateProvider(current.toString()) {
                    when (current) {
                        Screen.Home -> HomeScreen(
                            filmLibrary = filmLibrary,
                            playbackPositionRepository = playbackPositionRepository,
                            onOpenFilms = { backStack = backStack + Screen.Films },
                            onPlay = { film, uri -> backStack = backStack + Screen.Player(film, uri) },
                        )
                        Screen.Films -> FilmsScreen(
                            storageRepository = storageRepository,
                            filmLibrary = filmLibrary,
                            playbackPositionRepository = playbackPositionRepository,
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
}
