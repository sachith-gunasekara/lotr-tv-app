package com.example.lotr.ui.home

import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.togetherWith
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.focus.onFocusChanged
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shadow
import androidx.compose.ui.input.key.Key
import androidx.compose.ui.input.key.KeyEventType
import androidx.compose.ui.input.key.key
import androidx.compose.ui.input.key.onPreviewKeyEvent
import androidx.compose.ui.input.key.type
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.tv.material3.Carousel
import androidx.tv.material3.CarouselDefaults
import androidx.tv.material3.CarouselState
import androidx.tv.material3.ExperimentalTvMaterial3Api
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.Text
import com.example.lotr.data.PlaybackPositionRepository
import com.example.lotr.data.model.Film
import com.example.lotr.data.model.FilmFile
import com.example.lotr.ui.components.backdropRes
import com.example.lotr.ui.components.formatPlaybackTime
import com.example.lotr.ui.theme.LotrBackground

private val HeroShape = RoundedCornerShape(16.dp)
private val TextShadow = Shadow(color = Color.Black.copy(alpha = 0.6f), offset = Offset(2f, 3f), blurRadius = 6f)

/**
 * Featured-film banner, after JetStream's FeaturedMoviesCarousel: the carousel holds focus, ◀ ▶
 * switch films, OK plays (or resumes) the one shown.
 */
@OptIn(ExperimentalTvMaterial3Api::class)
@Composable
fun HeroCarousel(
    films: List<Film>,
    files: Map<String, FilmFile>,
    playbackPositionRepository: PlaybackPositionRepository,
    onActivate: (Film) -> Unit,
    modifier: Modifier = Modifier,
) {
    val carouselState = remember { CarouselState() }
    var focused by remember { mutableStateOf(false) }
    val gold = MaterialTheme.colorScheme.primary

    Carousel(
        itemCount = films.size,
        carouselState = carouselState,
        autoScrollDurationMillis = 8_000,
        modifier = modifier
            .shadow(if (focused) 28.dp else 0.dp, HeroShape, ambientColor = gold, spotColor = gold)
            .border(2.dp, gold.copy(alpha = if (focused) 1f else 0.15f), HeroShape)
            .clip(HeroShape)
            .onFocusChanged { focused = it.hasFocus }
            .onPreviewKeyEvent { event ->
                val isSelect = event.key == Key.DirectionCenter || event.key == Key.Enter || event.key == Key.NumPadEnter
                if (!isSelect) return@onPreviewKeyEvent false
                // Act on key-up so the release doesn't land on the next screen's focused item.
                if (event.type == KeyEventType.KeyUp) onActivate(films[carouselState.activeItemIndex])
                true
            },
        contentTransformStartToEnd = fadeIn(tween(900)).togetherWith(fadeOut(tween(900))),
        contentTransformEndToStart = fadeIn(tween(900)).togetherWith(fadeOut(tween(900))),
        carouselIndicator = {
            CarouselDefaults.IndicatorRow(
                itemCount = films.size,
                activeItemIndex = carouselState.activeItemIndex,
                modifier = Modifier
                    .align(Alignment.BottomEnd)
                    .padding(20.dp),
            )
        },
    ) { index ->
        val film = films[index]
        val file = files[film.id]
        val resumeAtMs by playbackPositionRepository.positionMs(film.id).collectAsState(initial = 0L)
        HeroSlide(film, file, resumeAtMs, focused)
    }
}

@Composable
private fun HeroSlide(film: Film, file: FilmFile?, resumeAtMs: Long, focused: Boolean) {
    Box(Modifier.fillMaxSize()) {
        Image(
            painter = painterResource(film.backdropRes()),
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
                        0f to LotrBackground.copy(alpha = 0.95f),
                        0.4f to LotrBackground.copy(alpha = 0.65f),
                        0.7f to Color.Transparent,
                    ),
                ),
        )
        Box(
            Modifier
                .fillMaxSize()
                .background(Brush.verticalGradient(0.55f to Color.Transparent, 1f to LotrBackground.copy(alpha = 0.8f))),
        )
        Column(
            modifier = Modifier
                .align(Alignment.CenterStart)
                .padding(start = 40.dp)
                .width(500.dp),
        ) {
            val details = listOfNotNull(film.year.toString(), film.runtimeFor(file?.tags).toString(), "Extended Edition".takeIf { file?.tags?.extended == true })
            Text(
                text = details.joinToString("  ·  "),
                color = MaterialTheme.colorScheme.primary,
                style = MaterialTheme.typography.labelMedium.copy(letterSpacing = 2.sp),
            )
            Spacer(Modifier.height(6.dp))
            Text(
                text = film.title,
                color = MaterialTheme.colorScheme.secondary,
                style = MaterialTheme.typography.displaySmall.copy(fontSize = 26.sp, lineHeight = 32.sp, shadow = TextShadow),
                maxLines = 2,
            )
            Spacer(Modifier.height(8.dp))
            Text(
                text = film.synopsis,
                color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.85f),
                style = MaterialTheme.typography.bodyMedium.copy(shadow = TextShadow),
                maxLines = 2,
                overflow = TextOverflow.Ellipsis,
            )
            Spacer(Modifier.height(16.dp))
            ActionChip(
                text = when {
                    file == null -> "Not found  ·  OK to choose a folder"
                    resumeAtMs > 0 -> "▶  Resume at ${formatPlaybackTime(resumeAtMs)}"
                    else -> "▶  Play"
                },
                highlighted = focused && file != null,
            )
            val badges = file?.tags?.labels.orEmpty().filterNot { it == "Extended Edition" }
            if (badges.isNotEmpty()) {
                Spacer(Modifier.height(10.dp))
                Text(
                    text = badges.joinToString("  ·  "),
                    color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.7f),
                    style = MaterialTheme.typography.labelMedium,
                )
            }
        }
    }
}

/** Looks like a button; the carousel itself handles OK, so this isn't separately focusable. */
@Composable
private fun ActionChip(text: String, highlighted: Boolean) {
    val gold = MaterialTheme.colorScheme.primary
    val shape = RoundedCornerShape(8.dp)
    Text(
        text = text,
        color = if (highlighted) MaterialTheme.colorScheme.onPrimary else gold,
        style = MaterialTheme.typography.titleSmall,
        modifier = Modifier
            .clip(shape)
            .background(if (highlighted) Brush.verticalGradient(listOf(Color(0xFFE9C766), gold)) else Brush.linearGradient(listOf(Color.Transparent, Color.Transparent)))
            .border(1.5.dp, gold, shape)
            .padding(horizontal = 18.dp, vertical = 9.dp),
    )
}
