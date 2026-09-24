package com.example.lotr.ui.films

import android.net.Uri
import androidx.compose.animation.Crossfade
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.tv.material3.Glow
import com.example.lotr.data.FilmLibrary
import com.example.lotr.data.FilmScan
import com.example.lotr.data.model.FilmFile
import com.example.lotr.ui.components.backdropRes
import com.example.lotr.ui.components.lotrBackground
import com.example.lotr.ui.theme.LotrBackground
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.runtime.withFrameNanos
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.focus.focusRestorer
import androidx.compose.ui.unit.dp
import androidx.tv.material3.Border
import androidx.tv.material3.Card
import androidx.tv.material3.CardDefaults
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.Text
import com.example.lotr.data.FilmRepository
import com.example.lotr.data.PlaybackPositionRepository
import com.example.lotr.data.StorageRepository
import com.example.lotr.data.model.Film
import com.example.lotr.ui.components.LotrButton
import com.example.lotr.ui.components.formatPlaybackTime
import kotlinx.coroutines.launch

@Composable
fun FilmsScreen(
    storageRepository: StorageRepository,
    filmLibrary: FilmLibrary,
    playbackPositionRepository: PlaybackPositionRepository,
    onPlay: (Film, Uri) -> Unit,
    modifier: Modifier = Modifier,
) {
    val hasPermission by filmLibrary.hasPermission.collectAsState()
    val scan by filmLibrary.scan.collectAsState()
    val requestPermission = rememberLauncherForActivityResult(ActivityResultContracts.RequestPermission()) {
        filmLibrary.rescan()
    }
    LaunchedEffect(Unit) {
        if (!hasPermission) requestPermission.launch(storageRepository.readPermission)
    }

    var browsing by remember { mutableStateOf(false) }
    val scope = rememberCoroutineScope()
    if (browsing) {
        FolderBrowser(
            roots = remember { storageRepository.storageRoots() },
            listSubfolders = storageRepository::subfolders,
            onChoose = { folder ->
                scope.launch { storageRepository.setCustomFolder(folder) }
                browsing = false
            },
            onCancel = { browsing = false },
        )
        return
    }

    // Saveable (and MainActivity keeps each screen's saveable state) so returning from the
    // player lands back on the film that was playing.
    var selectedFilmId by rememberSaveable { mutableStateOf(FilmRepository.films.first().id) }
    val selectedFilm = FilmRepository.films.first { it.id == selectedFilmId }
    Box(modifier = modifier.fillMaxSize().lotrBackground()) {
        val current = scan
        if (current?.folder != null) SelectedFilmBackdrop(selectedFilm)
        Box(Modifier.fillMaxSize().padding(horizontal = 48.dp, vertical = 32.dp)) {
            when {
                !hasPermission -> StatusMessage(
                    text = "Allow access to storage so the films can be found on the USB drive.",
                    actionLabel = "Allow access",
                    onAction = { requestPermission.launch(storageRepository.readPermission) },
                )
                current == null -> StatusMessage(text = "Looking for the films…")
                current.folder == null -> StatusMessage(
                    text = "Insert the USB pendrive with a LOTR folder on it, or choose a folder.",
                    actionLabel = "Choose a folder",
                    onAction = { browsing = true },
                )
                else -> Column {
                    Row(horizontalArrangement = Arrangement.spacedBy(40.dp), modifier = Modifier.weight(1f)) {
                        FilmPosterList(
                            films = FilmRepository.films,
                            selectedFilm = selectedFilm,
                            onSelect = { selectedFilmId = it.id },
                        )
                        val resumeAtMs by playbackPositionRepository.positionMs(selectedFilm.id)
                            .collectAsState(initial = 0L)
                        FilmDetail(
                            film = selectedFilm,
                            file = current.files[selectedFilm.id],
                            resumeAtMs = resumeAtMs,
                            onPlay = onPlay,
                            onStartOver = { film, uri ->
                                scope.launch {
                                    playbackPositionRepository.savePosition(film.id, 0)
                                    onPlay(film, uri)
                                }
                            },
                        )
                    }
                    SourceBar(
                        scan = current,
                        onChooseFolder = { browsing = true },
                        onUseUsb = { scope.launch { storageRepository.setCustomFolder(null) } },
                    )
                }
            }
        }
    }
}

/** The selected film's still, dimmed behind the page, fading in when the selection changes. */
@Composable
private fun SelectedFilmBackdrop(film: Film) {
    Crossfade(targetState = film, animationSpec = tween(600), label = "backdrop") { shown ->
        Box(Modifier.fillMaxSize()) {
            Image(
                painter = painterResource(shown.backdropRes()),
                contentDescription = null,
                contentScale = ContentScale.Crop,
                alignment = Alignment.CenterEnd,
                modifier = Modifier.fillMaxSize(),
            )
            Box(
                Modifier
                    .fillMaxSize()
                    .background(
                        Brush.horizontalGradient(
                            0f to LotrBackground,
                            0.35f to LotrBackground.copy(alpha = 0.9f),
                            1f to LotrBackground.copy(alpha = 0.45f),
                        ),
                    ),
            )
        }
    }
}

@Composable
private fun StatusMessage(text: String, actionLabel: String? = null, onAction: () -> Unit = {}) {
    val focusRequester = remember { FocusRequester() }
    if (actionLabel != null) LaunchedEffect(Unit) { focusRequester.requestFocus() }

    Column(
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Text(
            text = text,
            color = MaterialTheme.colorScheme.onBackground,
            style = MaterialTheme.typography.titleMedium,
        )
        if (actionLabel != null) {
            Spacer(Modifier.height(24.dp))
            LotrButton(onClick = onAction, modifier = Modifier.focusRequester(focusRequester)) {
                Text(actionLabel)
            }
        }
    }
}

@Composable
private fun SourceBar(scan: FilmScan, onChooseFolder: () -> Unit, onUseUsb: () -> Unit) {
    Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(16.dp)) {
        Text(
            text = "${if (scan.isCustom) "Custom folder" else "USB drive"}: ${scan.folder?.path}",
            color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.7f),
            style = MaterialTheme.typography.bodySmall,
            maxLines = 1,
            modifier = Modifier.weight(1f, fill = false),
        )
        LotrButton(onClick = onChooseFolder) { Text("Choose folder") }
        if (scan.isCustom) LotrButton(onClick = onUseUsb) { Text("Use USB drive") }
    }
}

@Composable
private fun FilmPosterList(films: List<Film>, selectedFilm: Film, onSelect: (Film) -> Unit) {
    // Focus starts on the selected film, so coming back from the player lands where you left off.
    val selectedItemFocusRequester = remember { FocusRequester() }
    LaunchedEffect(Unit) {
        withFrameNanos { }
        selectedItemFocusRequester.requestFocus()
    }
    val gold = MaterialTheme.colorScheme.primary
    val shape = RoundedCornerShape(12.dp)

    LazyColumn(
        modifier = Modifier.focusRestorer(selectedItemFocusRequester),
        verticalArrangement = Arrangement.spacedBy(16.dp),
        contentPadding = PaddingValues(8.dp),
    ) {
        items(films) { film ->
            val isSelected = film.id == selectedFilm.id
            Card(
                onClick = { onSelect(film) },
                modifier = Modifier
                    .size(width = 240.dp, height = 110.dp)
                    .let { if (isSelected) it.focusRequester(selectedItemFocusRequester) else it },
                shape = CardDefaults.shape(shape),
                border = CardDefaults.border(
                    border = Border(BorderStroke(if (isSelected) 2.dp else 1.dp, gold.copy(alpha = if (isSelected) 0.9f else 0.25f)), shape = shape),
                    focusedBorder = Border(BorderStroke(3.dp, gold), shape = shape),
                ),
                glow = CardDefaults.glow(focusedGlow = Glow(elevationColor = gold.copy(alpha = 0.6f), elevation = 14.dp)),
            ) {
                Box(Modifier.fillMaxSize()) {
                    Image(
                        painter = painterResource(film.backdropRes()),
                        contentDescription = null,
                        contentScale = ContentScale.Crop,
                        modifier = Modifier.fillMaxSize(),
                    )
                    Box(Modifier.fillMaxSize().background(Brush.verticalGradient(0.3f to Color.Transparent, 1f to Color.Black.copy(alpha = 0.85f))))
                    Text(
                        text = film.title,
                        color = MaterialTheme.colorScheme.secondary,
                        style = MaterialTheme.typography.titleSmall,
                        maxLines = 1,
                        modifier = Modifier.align(Alignment.BottomStart).padding(10.dp),
                    )
                }
            }
        }
    }
}

@Composable
private fun FilmDetail(
    film: Film,
    file: FilmFile?,
    resumeAtMs: Long,
    onPlay: (Film, Uri) -> Unit,
    onStartOver: (Film, Uri) -> Unit,
) {
    val playableUri = file?.uri
    Column(modifier = Modifier.width(520.dp).padding(top = 8.dp)) {
        Text(
            text = film.title,
            color = MaterialTheme.colorScheme.secondary,
            style = MaterialTheme.typography.headlineMedium,
        )
        Spacer(Modifier.height(8.dp))
        Text(
            text = listOfNotNull(film.year.toString(), film.runtimeFor(file?.tags).toString())
                .plus(file?.tags?.labels.orEmpty())
                .joinToString("  ·  "),
            color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.7f),
            style = MaterialTheme.typography.bodyMedium,
        )
        Spacer(Modifier.height(16.dp))
        Text(
            text = film.synopsis,
            color = MaterialTheme.colorScheme.onBackground,
            style = MaterialTheme.typography.bodyLarge,
        )
        Spacer(Modifier.height(24.dp))
        Row(horizontalArrangement = Arrangement.spacedBy(16.dp)) {
            LotrButton(
                onClick = { playableUri?.let { onPlay(film, it) } },
                enabled = playableUri != null,
            ) {
                Text(
                    when {
                        playableUri == null -> "Not found in this folder"
                        resumeAtMs > 0 -> "▶  Resume at ${formatPlaybackTime(resumeAtMs)}"
                        else -> "▶  Play"
                    },
                )
            }
            if (playableUri != null && resumeAtMs > 0) {
                LotrButton(onClick = { onStartOver(film, playableUri) }) { Text("Start over") }
            }
        }
    }
}
