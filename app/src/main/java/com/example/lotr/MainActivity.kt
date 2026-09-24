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
import com.example.lotr.data.Atlas
import com.example.lotr.data.FilmLibrary
import com.example.lotr.data.MapTileRepository
import com.example.lotr.data.MusicRepository
import com.example.lotr.data.PlaybackPositionRepository
import com.example.lotr.data.StorageRepository
import com.example.lotr.data.ThumbnailRepository
import com.example.lotr.data.YouTubeVideo
import com.example.lotr.data.readableName
import com.example.lotr.data.model.Watchable
import com.example.lotr.ui.appendices.AppendicesScreen
import com.example.lotr.ui.home.HomeDestination
import com.example.lotr.ui.library.LibraryScreen
import com.example.lotr.ui.music.MusicScreen
import com.example.lotr.ui.home.HomeScreen
import com.example.lotr.ui.player.PlayerScreen
import com.example.lotr.ui.player.YouTubePlayerScreen
import com.example.lotr.ui.reading.ReaderScreen
import com.example.lotr.ui.reading.ReadingScreen
import com.example.lotr.ui.vault.MapScreen
import com.example.lotr.ui.vault.VaultScreen
import java.io.File
import com.example.lotr.ui.theme.LotrTheme

private sealed interface Screen {
    data object Home : Screen
    data object Library : Screen
    data object Appendices : Screen
    data object Vault : Screen

    /** A map from the atlas, explored freely or along [journeyId]. */
    data class Map(val mapId: String, val journeyId: String? = null) : Screen

    data object Reading : Screen
    data object Music : Screen

    /** A text from the Reading room: [index] on shelf [shelf]. */
    data class Reader(val shelf: Int, val index: Int) : Screen

    /** Pictures from the drive, opened at [index]; [folder] says where they came from. */
    data class Pictures(val files: List<File>, val index: Int, val folder: String) : Screen

    /** A video file; [markLastWatched] for films and episodes, which the Home banner follows. */
    data class Player(val id: String, val title: String, val uri: Uri, val markLastWatched: Boolean) : Screen {
        constructor(watchable: Watchable, uri: Uri) : this(watchable.id, watchable.title, uri, markLastWatched = true)
    }

    data class YouTube(val video: YouTubeVideo) : Screen
}

class MainActivity : ComponentActivity() {
    private val storageRepository by lazy { StorageRepository(applicationContext) }
    private val filmLibrary by lazy { FilmLibrary(storageRepository, lifecycleScope) }
    private val thumbnails by lazy { ThumbnailRepository(applicationContext) }
    private val mapTiles by lazy { MapTileRepository(applicationContext) }
    private val music by lazy { MusicRepository(applicationContext) }

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
                // needed for a small screen graph with no deep links.
                BackHandler(enabled = backStack.size > 1) {
                    saveableStateHolder.removeState(backStack.last().toString())
                    backStack = backStack.dropLast(1)
                }

                val current = backStack.last()
                val push = { screen: Screen -> backStack = backStack + screen }
                // Keeps each screen's rememberSaveable state (e.g. the selected film) while it's
                // covered by a screen pushed on top of it.
                saveableStateHolder.SaveableStateProvider(current.toString()) {
                    when (current) {
                        Screen.Home -> HomeScreen(
                            filmLibrary = filmLibrary,
                            playbackPositionRepository = playbackPositionRepository,
                            thumbnails = thumbnails,
                            onOpen = { destination ->
                                when (destination) {
                                    HomeDestination.Films -> push(Screen.Library)
                                    HomeDestination.Appendices -> push(Screen.Appendices)
                                    HomeDestination.Vault -> push(Screen.Vault)
                                    HomeDestination.Reading -> push(Screen.Reading)
                                    HomeDestination.Music -> push(Screen.Music)
                                }
                            },
                            onPlay = { watchable, uri -> push(Screen.Player(watchable, uri)) },
                        )
                        Screen.Library -> LibraryScreen(
                            storageRepository = storageRepository,
                            filmLibrary = filmLibrary,
                            playbackPositionRepository = playbackPositionRepository,
                            thumbnails = thumbnails,
                            onPlay = { watchable, uri -> push(Screen.Player(watchable, uri)) },
                        )
                        Screen.Appendices -> AppendicesScreen(
                            filmLibrary = filmLibrary,
                            playbackPositionRepository = playbackPositionRepository,
                            thumbnails = thumbnails,
                            onPlayVideo = { push(Screen.YouTube(it)) },
                            onPlayExtra = { push(Screen.Player(it.id, it.title, it.file.uri, markLastWatched = false)) },
                        )
                        Screen.Vault -> VaultScreen(
                            storageRepository = storageRepository,
                            filmLibrary = filmLibrary,
                            tiles = mapTiles,
                            onOpenMap = { push(Screen.Map(it.id)) },
                            onFollowJourney = { push(Screen.Map(Atlas.middleEarth.id, it.id)) },
                            onOpenPicture = { files, index -> push(Screen.Pictures(files, index, folder = "Art")) },
                        )
                        Screen.Reading -> ReadingScreen(
                            storageRepository = storageRepository,
                            filmLibrary = filmLibrary,
                            tiles = mapTiles,
                            onRead = { shelf, index -> push(Screen.Reader(shelf, index)) },
                            onOpenLetter = { files, index -> push(Screen.Pictures(files, index, folder = "Letters")) },
                        )
                        is Screen.Reader -> ReaderScreen(shelfIndex = current.shelf, startIndex = current.index)
                        Screen.Music -> MusicScreen(
                            filmLibrary = filmLibrary,
                            music = music,
                            onPlayOnline = { push(Screen.YouTube(it)) },
                        )
                        is Screen.Map -> {
                            val map = Atlas.map(current.mapId)
                            MapScreen(
                                title = map.title,
                                credit = map.credit,
                                source = remember(map.id) { mapTiles.assetMap(map.assetDir) },
                                places = map.places,
                                journey = current.journeyId?.let(Atlas::journey),
                            )
                        }
                        is Screen.Pictures -> {
                            val file = current.files[current.index]
                            MapScreen(
                                title = readableName(file.nameWithoutExtension),
                                credit = "${current.index + 1} of ${current.files.size}  ·  from the ${current.folder} folder on the USB drive",
                                source = remember(file) { mapTiles.picture(file) },
                                places = emptyList(),
                                journey = null,
                                // Leafing through replaces this screen, so Back still returns to the Vault.
                                onStep = { delta ->
                                    val next = (current.index + delta).mod(current.files.size)
                                    backStack = backStack.dropLast(1) + current.copy(index = next)
                                },
                            )
                        }
                        is Screen.Player -> PlayerScreen(
                            id = current.id,
                            title = current.title,
                            uri = current.uri,
                            markLastWatched = current.markLastWatched,
                            playbackPositionRepository = playbackPositionRepository,
                        )
                        is Screen.YouTube -> YouTubePlayerScreen(
                            video = current.video,
                            playbackPositionRepository = playbackPositionRepository,
                        )
                    }
                }
            }
        }
    }
}
