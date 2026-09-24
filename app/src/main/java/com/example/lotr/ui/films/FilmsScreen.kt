package com.example.lotr.ui.films

import android.net.Uri
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
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
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
import com.example.lotr.data.StorageRepository
import com.example.lotr.data.model.Film
import com.example.lotr.ui.components.LotrButton
import kotlinx.coroutines.flow.collectLatest
import kotlinx.coroutines.launch
import java.io.File

/** Result of looking for the films: where we looked ([folder] is null if nowhere) and what matched. */
private data class FilmScan(val folder: File?, val isCustom: Boolean, val filmUris: Map<String, Uri>)

@Composable
fun FilmsScreen(
    storageRepository: StorageRepository,
    onPlay: (Film, Uri) -> Unit,
    modifier: Modifier = Modifier,
) {
    var hasPermission by remember { mutableStateOf(storageRepository.hasReadPermission()) }
    val requestPermission = rememberLauncherForActivityResult(ActivityResultContracts.RequestPermission()) {
        hasPermission = it
    }
    LaunchedEffect(Unit) {
        if (!hasPermission) requestPermission.launch(storageRepository.readPermission)
    }

    var scan by remember { mutableStateOf<FilmScan?>(null) }
    LaunchedEffect(hasPermission) {
        if (!hasPermission) return@LaunchedEffect
        storageRepository.customFolder.collectLatest { custom ->
            val folder = custom ?: storageRepository.findUsbLotrFolder()
            scan = FilmScan(
                folder = folder,
                isCustom = custom != null,
                filmUris = folder?.let { storageRepository.findFilmUris(it) }.orEmpty(),
            )
        }
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

    var selectedFilm by remember { mutableStateOf(FilmRepository.films.first()) }
    Box(
        modifier = modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background)
            .padding(48.dp),
    ) {
        val current = scan
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
                Row(horizontalArrangement = Arrangement.spacedBy(48.dp), modifier = Modifier.weight(1f)) {
                    FilmPosterList(
                        films = FilmRepository.films,
                        selectedFilm = selectedFilm,
                        onSelect = { selectedFilm = it },
                    )
                    FilmDetail(
                        film = selectedFilm,
                        playableUri = current.filmUris[selectedFilm.id],
                        onPlay = onPlay,
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
    val firstItemFocusRequester = remember { FocusRequester() }
    LaunchedEffect(Unit) { firstItemFocusRequester.requestFocus() }

    LazyColumn(
        modifier = Modifier.focusRestorer(firstItemFocusRequester),
        verticalArrangement = Arrangement.spacedBy(16.dp),
    ) {
        itemsIndexed(films) { index, film ->
            val isSelected = film.id == selectedFilm.id
            Card(
                onClick = { onSelect(film) },
                modifier = Modifier
                    .size(width = 220.dp, height = 130.dp)
                    .let { if (index == 0) it.focusRequester(firstItemFocusRequester) else it },
                colors = CardDefaults.colors(
                    containerColor = if (isSelected) {
                        MaterialTheme.colorScheme.surface
                    } else {
                        MaterialTheme.colorScheme.background
                    },
                    focusedContainerColor = MaterialTheme.colorScheme.surface,
                ),
                border = CardDefaults.border(
                    border = if (isSelected) {
                        Border(border = BorderStroke(width = 2.dp, color = MaterialTheme.colorScheme.primary))
                    } else {
                        Border.None
                    },
                    focusedBorder = Border(
                        border = BorderStroke(width = 3.dp, color = MaterialTheme.colorScheme.primary),
                    ),
                ),
            ) {
                Box(Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                    Text(
                        text = film.title,
                        color = MaterialTheme.colorScheme.onSurface,
                        style = MaterialTheme.typography.titleMedium,
                    )
                }
            }
        }
    }
}

@Composable
private fun FilmDetail(film: Film, playableUri: Uri?, onPlay: (Film, Uri) -> Unit) {
    Column(modifier = Modifier.width(480.dp)) {
        Text(
            text = film.title,
            color = MaterialTheme.colorScheme.primary,
            style = MaterialTheme.typography.headlineMedium,
        )
        Spacer(Modifier.height(8.dp))
        Text(
            text = film.runtime.toString(),
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
        LotrButton(
            onClick = { playableUri?.let { onPlay(film, it) } },
            enabled = playableUri != null,
        ) {
            Text(if (playableUri != null) "Play" else "Not found in this folder")
        }
    }
}
