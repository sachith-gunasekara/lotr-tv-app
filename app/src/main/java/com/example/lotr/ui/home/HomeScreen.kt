package com.example.lotr.ui.home

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
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

private data class HomeTile(val label: String, val enabled: Boolean)

private val homeTiles = listOf(
    HomeTile("The Films", enabled = true),
    HomeTile("Appendices", enabled = false),
    HomeTile("Digital Vault", enabled = false),
    HomeTile("Reading Material", enabled = false),
    HomeTile("Music & Scores", enabled = false),
)

@Composable
fun HomeScreen(onOpenFilms: () -> Unit, modifier: Modifier = Modifier) {
    val firstTileFocusRequester = remember { FocusRequester() }

    Box(
        modifier = modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background),
    ) {
        Column(
            modifier = Modifier
                .align(Alignment.CenterStart)
                .padding(start = 48.dp),
        ) {
            Text(
                text = "The Lord of the Rings",
                style = MaterialTheme.typography.displaySmall,
                color = MaterialTheme.colorScheme.primary,
            )
            Spacer(Modifier.height(32.dp))
            LazyRow(
                modifier = Modifier.focusRestorer(firstTileFocusRequester),
                contentPadding = PaddingValues(end = 48.dp),
                horizontalArrangement = Arrangement.spacedBy(24.dp),
            ) {
                itemsIndexed(homeTiles) { index, tile ->
                    HomeTileCard(
                        tile = tile,
                        modifier = if (index == 0) {
                            Modifier.focusRequester(firstTileFocusRequester)
                        } else {
                            Modifier
                        },
                        onClick = { if (tile.label == "The Films") onOpenFilms() },
                    )
                }
            }
        }
    }
}

@Composable
private fun HomeTileCard(tile: HomeTile, modifier: Modifier = Modifier, onClick: () -> Unit) {
    Card(
        onClick = onClick,
        modifier = modifier.size(width = 220.dp, height = 130.dp),
        colors = CardDefaults.colors(
            containerColor = MaterialTheme.colorScheme.surface,
            focusedContainerColor = MaterialTheme.colorScheme.surface,
        ),
        border = CardDefaults.border(
            focusedBorder = Border(
                border = BorderStroke(width = 3.dp, color = MaterialTheme.colorScheme.primary),
            ),
        ),
    ) {
        Box(Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
            Text(
                text = if (tile.enabled) tile.label else "${tile.label}\n(coming soon)",
                color = MaterialTheme.colorScheme.onSurface.let {
                    if (tile.enabled) it else it.copy(alpha = 0.4f)
                },
                style = MaterialTheme.typography.titleMedium,
            )
        }
    }
}
