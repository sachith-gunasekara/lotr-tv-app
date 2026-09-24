package com.example.lotr.ui.films

import androidx.activity.compose.BackHandler
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.produceState
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.runtime.withFrameNanos
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.unit.dp
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.Text
import com.example.lotr.data.StorageRoot
import com.example.lotr.ui.components.LotrButton
import java.io.File

/**
 * D-pad folder picker over the mounted storage volumes. Starts at the volume list; Back goes up a
 * level, and cancels from the volume list.
 */
@Composable
fun FolderBrowser(
    roots: List<StorageRoot>,
    listSubfolders: suspend (File) -> List<File>,
    onChoose: (File) -> Unit,
    onCancel: () -> Unit,
) {
    var current by remember { mutableStateOf<File?>(null) }
    val subfolders by produceState(emptyList<File>(), current) {
        value = current?.let { listSubfolders(it) }.orEmpty()
    }
    val isRoot = { dir: File -> roots.any { it.dir == dir } }
    val goUp = { current = current?.takeUnless(isRoot)?.parentFile }

    BackHandler { if (current == null) onCancel() else goUp() }

    val firstItemFocus = remember { FocusRequester() }
    LaunchedEffect(current) {
        // The new level's rows are composed lazily; wait a frame so the requester is attached.
        withFrameNanos { }
        firstItemFocus.requestFocus()
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background)
            .padding(48.dp),
    ) {
        Text(
            text = "Choose a folder",
            color = MaterialTheme.colorScheme.primary,
            style = MaterialTheme.typography.headlineMedium,
        )
        Text(
            text = current?.path ?: "Select a storage volume",
            color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.7f),
            style = MaterialTheme.typography.bodyMedium,
        )
        Spacer(Modifier.height(24.dp))
        LazyColumn(verticalArrangement = Arrangement.spacedBy(8.dp)) {
            val dir = current
            if (dir == null) {
                items(roots) { root ->
                    FolderRow(
                        label = root.label,
                        modifier = if (root == roots.first()) Modifier.focusRequester(firstItemFocus) else Modifier,
                        onClick = { current = root.dir },
                    )
                }
            } else {
                item {
                    FolderRow(
                        label = "✓ Use this folder",
                        modifier = Modifier.focusRequester(firstItemFocus),
                        onClick = { onChoose(dir) },
                    )
                }
                item { FolderRow(label = "↑ Up", onClick = goUp) }
                items(subfolders) { folder ->
                    FolderRow(label = "📁 ${folder.name}", onClick = { current = folder })
                }
            }
        }
    }
}

@Composable
private fun FolderRow(label: String, onClick: () -> Unit, modifier: Modifier = Modifier) {
    LotrButton(onClick = onClick, modifier = modifier.width(720.dp)) {
        Text(label, maxLines = 1)
    }
}
