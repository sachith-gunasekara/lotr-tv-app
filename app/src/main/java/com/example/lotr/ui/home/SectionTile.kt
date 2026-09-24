package com.example.lotr.ui.home

import androidx.annotation.DrawableRes
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.tv.material3.Icon
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.Text
import com.example.lotr.ui.components.WarmCard

/** Where a Home tile leads. */
enum class HomeDestination { Films, Appendices, Vault, Reading, Music }

/** A Home tile, leading to [destination]. */
data class Section(
    val title: String,
    val subtitle: String,
    @DrawableRes val icon: Int,
    val tint: Color,
    val destination: HomeDestination,
    @DrawableRes val art: Int? = null,
)

/**
 * A home-screen section: a tinted (or pictured) panel with a large gold watermark icon, title
 * and subtitle bottom-left. Borderless - focus lifts it onto the warm glow like every card.
 */
@Composable
fun SectionTile(section: Section, onClick: () -> Unit, modifier: Modifier = Modifier) {
    val gold = MaterialTheme.colorScheme.primary
    WarmCard(onClick = onClick, modifier = modifier) {
        Box(
            Modifier
                .fillMaxSize()
                .background(
                    Brush.linearGradient(
                        listOf(section.tint, section.tint.copy(alpha = 0.6f), Color.Black),
                        start = Offset.Zero,
                        end = Offset.Infinite,
                    ),
                ),
        )
        if (section.art != null) {
            Image(
                painter = painterResource(section.art),
                contentDescription = null,
                contentScale = ContentScale.Crop,
                modifier = Modifier.fillMaxSize(),
            )
        }
        Box(Modifier.fillMaxSize().background(Brush.verticalGradient(0.25f to Color.Transparent, 1f to Color.Black.copy(alpha = 0.8f))))
        Icon(
            painter = painterResource(section.icon),
            contentDescription = null,
            tint = gold.copy(alpha = if (section.art != null) 0.35f else 0.22f),
            modifier = Modifier
                .align(Alignment.TopEnd)
                .offset(x = 22.dp, y = (-10).dp)
                .size(104.dp),
        )
        Column(Modifier.align(Alignment.BottomStart).padding(horizontal = 14.dp, vertical = 12.dp)) {
            Text(
                text = section.title,
                color = MaterialTheme.colorScheme.secondary,
                style = MaterialTheme.typography.titleMedium.copy(fontSize = 15.sp),
                maxLines = 1,
            )
            Text(
                text = section.subtitle,
                color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.8f),
                style = MaterialTheme.typography.bodySmall,
                maxLines = 1,
            )
        }
    }
}
