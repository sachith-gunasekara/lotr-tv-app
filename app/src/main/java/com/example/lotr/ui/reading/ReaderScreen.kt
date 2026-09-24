package com.example.lotr.ui.reading

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.togetherWith
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.focusable
import androidx.compose.foundation.gestures.animateScrollBy
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.input.key.Key
import androidx.compose.ui.input.key.KeyEventType
import androidx.compose.ui.input.key.key
import androidx.compose.ui.input.key.onKeyEvent
import androidx.compose.ui.input.key.type
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.Text
import com.example.lotr.data.FilmRepository
import com.example.lotr.data.Reading
import com.example.lotr.data.ReadingPiece
import com.example.lotr.ui.components.backdropRes
import com.example.lotr.ui.components.lotrBackground
import com.example.lotr.ui.theme.LotrBackground
import kotlinx.coroutines.launch

/**
 * A page of the Reading room: the full text of one piece, like a page of a book. ▲ ▼ scroll,
 * ◀ ▶ turn to the previous or next piece on the same shelf.
 */
@Composable
fun ReaderScreen(shelfIndex: Int, startIndex: Int, modifier: Modifier = Modifier) {
    val shelf = Reading.shelves[shelfIndex]
    var index by rememberSaveable { mutableIntStateOf(startIndex) }
    val scope = rememberCoroutineScope()
    val focusRequester = remember { FocusRequester() }
    LaunchedEffect(Unit) { focusRequester.requestFocus() }
    // One scroll position per page, so the page fading out keeps its own while the next fades in.
    val scrollStates = remember { mutableMapOf<String, LazyListState>() }
    fun scrollOf(piece: ReadingPiece) = scrollStates.getOrPut(piece.id) { LazyListState() }

    AnimatedContent(
        targetState = shelf.pieces[index],
        transitionSpec = { fadeIn(tween(400)) togetherWith fadeOut(tween(250)) },
        label = "page",
        modifier = modifier
            .fillMaxSize()
            .lotrBackground()
            .focusRequester(focusRequester)
            .onKeyEvent { event ->
                if (event.type != KeyEventType.KeyDown) return@onKeyEvent false
                val scroll = scrollOf(shelf.pieces[index])
                when (event.key) {
                    Key.DirectionLeft -> { if (index > 0) index--; true }
                    Key.DirectionRight -> { if (index < shelf.pieces.lastIndex) index++; true }
                    Key.DirectionDown -> { scope.launch { scroll.animateScrollBy(420f) }; true }
                    Key.DirectionUp -> { scope.launch { scroll.animateScrollBy(-420f) }; true }
                    else -> false
                }
            }
            .focusable(),
    ) { piece ->
        Page(piece = piece, position = "${shelf.pieces.indexOf(piece) + 1} of ${shelf.pieces.size}", listState = scrollOf(piece))
    }
}

@Composable
private fun Page(piece: ReadingPiece, position: String, listState: LazyListState, modifier: Modifier = Modifier) {
    val film = FilmRepository.films.firstOrNull { it.id == piece.filmId }
    Box(modifier.fillMaxSize()) {
        // The film still, faint on the right, like an illustration showing through the page.
        if (film != null) {
            Image(
                painter = painterResource(film.backdropRes()),
                contentDescription = null,
                contentScale = ContentScale.Crop,
                alignment = Alignment.CenterEnd,
                modifier = Modifier.fillMaxSize().alpha(0.22f),
            )
            Box(Modifier.fillMaxSize().pageFade())
        }
        // The card's lettering, large and faint in the corner.
        Text(
            text = piece.glyph,
            color = MaterialTheme.colorScheme.primary.copy(alpha = 0.08f),
            style = MaterialTheme.typography.displayLarge.copy(fontSize = if (piece.glyph.length > 4) 150.sp else 220.sp),
            maxLines = 1,
            modifier = Modifier.align(Alignment.TopEnd).padding(top = 12.dp, end = 48.dp),
        )

        Column(Modifier.fillMaxSize().padding(start = 96.dp, end = 96.dp, top = 40.dp)) {
            Row(verticalAlignment = Alignment.CenterVertically, modifier = Modifier.fillMaxWidth()) {
                Text(piece.overline, color = MaterialTheme.colorScheme.primary, style = MaterialTheme.typography.labelLarge, modifier = Modifier.weight(1f))
                Text(
                    text = "$position  ·  ◀ ▶ turn the page  ·  ▲ ▼ read on",
                    color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.6f),
                    style = MaterialTheme.typography.bodySmall,
                )
            }
            Spacer(Modifier.height(6.dp))
            Text(piece.title, color = MaterialTheme.colorScheme.secondary, style = MaterialTheme.typography.displaySmall.copy(fontSize = 40.sp, lineHeight = 50.sp))
            Spacer(Modifier.height(20.dp))
            LazyColumn(
                state = listState,
                verticalArrangement = Arrangement.spacedBy(18.dp),
                contentPadding = PaddingValues(bottom = 96.dp),
                modifier = Modifier.width(1100.dp).weight(1f),
            ) {
                items(piece.passages) { passage ->
                    Column {
                        if (passage.heading != null) {
                            Text(
                                text = passage.heading,
                                color = MaterialTheme.colorScheme.primary,
                                style = MaterialTheme.typography.bodyLarge.copy(fontSize = 28.sp, lineHeight = 36.sp),
                            )
                            Spacer(Modifier.height(4.dp))
                        }
                        Text(
                            text = passage.text,
                            color = MaterialTheme.colorScheme.onBackground.copy(alpha = if (passage.heading != null) 0.8f else 0.95f),
                            style = MaterialTheme.typography.bodyLarge.copy(fontSize = 24.sp, lineHeight = 34.sp),
                        )
                    }
                }
            }
        }
    }
}

/** Fades the still into the page from the left, where the text sits. */
private fun Modifier.pageFade(): Modifier = background(
    Brush.horizontalGradient(0f to LotrBackground, 0.55f to LotrBackground.copy(alpha = 0.85f), 1f to LotrBackground.copy(alpha = 0.2f)),
)
