package com.example.lotr.ui.components

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.gestures.BringIntoViewSpec
import androidx.compose.foundation.gestures.LocalBringIntoViewSpec
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyListScope
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.compositionLocalOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.focus.onFocusChanged
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.Text

/**
 * Scrolls a focused card to the top of the shelf column, leaving [leadPx] above it for its
 * shelf's title.
 */
@OptIn(ExperimentalFoundationApi::class)
private class PinToTop(private val leadPx: Float) : BringIntoViewSpec {
    override fun calculateScrollDistance(offset: Float, size: Float, containerSize: Float): Float = offset - leadPx
}

/** A shelf title's height plus the gap above a card, kept visible above the focused shelf. */
private val SHELF_TITLE_ROOM = 44.dp

@OptIn(ExperimentalFoundationApi::class)
private val LocalRowBringIntoViewSpec = compositionLocalOf<BringIntoViewSpec?> { null }

/**
 * A vertical stack of shelves for when there are more than fit on screen. The focused shelf
 * always moves up to the top, so the one above is never left half-hidden under the details.
 * Put [ShelfRow]s in it.
 */
@OptIn(ExperimentalFoundationApi::class)
@Composable
fun ShelfColumn(state: LazyListState, modifier: Modifier = Modifier, content: LazyListScope.() -> Unit) {
    val rowSpec = LocalBringIntoViewSpec.current
    val lead = with(LocalDensity.current) { SHELF_TITLE_ROOM.toPx() }
    val pinToTop = remember(lead) { PinToTop(lead) }
    CompositionLocalProvider(LocalBringIntoViewSpec provides pinToTop, LocalRowBringIntoViewSpec provides rowSpec) {
        LazyColumn(state = state, contentPadding = PaddingValues(bottom = 32.dp), modifier = modifier, content = content)
    }
}

/** A horizontal shelf of cards, with room around them for the focus lift and glow. */
@OptIn(ExperimentalFoundationApi::class)
@Composable
fun ShelfRow(
    state: LazyListState,
    modifier: Modifier = Modifier,
    verticalAlignment: Alignment.Vertical = Alignment.Top,
    content: LazyListScope.() -> Unit,
) {
    // Inside a ShelfColumn, rows scroll the usual way rather than pinning cards to the left edge.
    val spec = LocalRowBringIntoViewSpec.current ?: LocalBringIntoViewSpec.current
    CompositionLocalProvider(LocalBringIntoViewSpec provides spec) {
        LazyRow(
            state = state,
            horizontalArrangement = Arrangement.spacedBy(20.dp),
            contentPadding = PaddingValues(horizontal = 48.dp, vertical = 10.dp),
            verticalAlignment = verticalAlignment,
            modifier = modifier,
            content = content,
        )
    }
}

/** A shelf's heading, in line with the shelf's first card. */
@Composable
fun ShelfTitle(text: String, modifier: Modifier = Modifier) {
    Text(
        text = text,
        color = MaterialTheme.colorScheme.secondary,
        style = MaterialTheme.typography.titleMedium,
        modifier = modifier.padding(start = 48.dp),
    )
}

/**
 * A 16:9 card on a shelf: [art] fills it, with the [title] (and an optional [overline]) at the
 * bottom-left over a shadow that lifts when focused. [progress] (0..1) draws a gold bar along the
 * bottom edge; [dimmed] cards are ones that can't be played right now.
 */
@Composable
fun ShelfCard(
    title: String,
    width: Int,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    onLongClick: (() -> Unit)? = null,
    overline: String? = null,
    titleLines: Int = 2,
    progress: Float = 0f,
    dimmed: Boolean = false,
    art: @Composable BoxScope.() -> Unit,
) {
    var focused by remember { mutableStateOf(false) }
    WarmCard(
        onClick = onClick,
        onLongClick = onLongClick,
        modifier = modifier
            .size(width = width.dp, height = (width * 9 / 16).dp)
            .onFocusChanged { focused = it.isFocused }
            .alpha(if (dimmed) 0.45f else 1f),
    ) {
        art()
        // Resting cards sit slightly back in shadow; the focused one comes into the light.
        Box(
            Modifier
                .fillMaxSize()
                .background(
                    Brush.verticalGradient(
                        0.35f to Color.Black.copy(alpha = if (focused) 0f else 0.25f),
                        1f to Color.Black.copy(alpha = 0.85f),
                    ),
                ),
        )
        Column(Modifier.align(Alignment.BottomStart).padding(horizontal = 12.dp, vertical = 10.dp)) {
            if (overline != null) {
                Text(
                    text = overline,
                    color = MaterialTheme.colorScheme.primary,
                    style = MaterialTheme.typography.labelSmall,
                )
            }
            Text(
                text = title,
                color = MaterialTheme.colorScheme.secondary,
                style = MaterialTheme.typography.titleSmall.copy(fontSize = 12.sp, lineHeight = 15.sp),
                maxLines = titleLines,
                overflow = TextOverflow.Ellipsis,
            )
        }
        if (progress > 0f) {
            Box(Modifier.align(Alignment.BottomStart).fillMaxWidth().height(3.dp).background(Color.White.copy(alpha = 0.2f))) {
                Box(Modifier.fillMaxHeight().fillMaxWidth(progress).background(MaterialTheme.colorScheme.primary))
            }
        }
    }
}
