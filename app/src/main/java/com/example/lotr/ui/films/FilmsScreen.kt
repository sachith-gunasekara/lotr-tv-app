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
import androidx.compose.runtime.collectAsState
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
import androidx.tv.material3.Button
import androidx.tv.material3.Card
import androidx.tv.material3.CardDefaults
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.Text
import com.example.lotr.data.FilmRepository
import com.example.lotr.data.StorageRepository
import com.example.lotr.data.model.Film
import kotlinx.coroutines.launch

@Composable
fun FilmsScreen(
    storageRepository: StorageRepository,
    onPlay: (Film, Uri) -> Unit,
    modifier: Modifier = Modifier,
) {
    val treeUri by storageRepository.treeUri.collectAsState(initial = null)
    var filmUris by remember { mutableStateOf<Map<String, Uri>>(emptyMap()) }
    var selectedFilm by remember { mutableStateOf(FilmRepository.films.first()) }
    val scope = rememberCoroutineScope()

    LaunchedEffect(treeUri) {
        filmUris = storageRepository.findFilmUris()
    }

    val pickFolder = rememberLauncherForActivityResult(ActivityResultContracts.OpenDocumentTree()) { uri ->
        if (uri != null) {
            scope.launch { storageRepository.persistTreeUri(uri) }
        }
    }

    Box(
        modifier = modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background)
            .padding(48.dp),
    ) {
        if (treeUri == null) {
            NoUsbFolderSelected(onSelectFolder = { pickFolder.launch(null) })
        } else {
            Row(horizontalArrangement = Arrangement.spacedBy(48.dp)) {
                FilmPosterList(
                    films = FilmRepository.films,
                    selectedFilm = selectedFilm,
                    onSelect = { selectedFilm = it },
                )
                FilmDetail(
                    film = selectedFilm,
                    playableUri = filmUris[selectedFilm.id],
                    onPlay = onPlay,
                )
            }
        }
    }
}

@Composable
private fun NoUsbFolderSelected(onSelectFolder: () -> Unit) {
    val focusRequester = remember { FocusRequester() }
    LaunchedEffect(Unit) { focusRequester.requestFocus() }

    Column(
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Text(
            text = "Insert the USB pendrive and select its folder to browse the films.",
            color = MaterialTheme.colorScheme.onBackground,
            style = MaterialTheme.typography.titleMedium,
        )
        Spacer(Modifier.height(24.dp))
        Button(onClick = onSelectFolder, modifier = Modifier.focusRequester(focusRequester)) {
            Text("Select USB folder")
        }
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
        Button(
            onClick = { playableUri?.let { onPlay(film, it) } },
            enabled = playableUri != null,
        ) {
            Text(if (playableUri != null) "Play" else "Not found on USB drive")
        }
    }
}
