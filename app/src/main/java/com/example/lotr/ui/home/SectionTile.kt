package com.example.lotr.ui.home

import androidx.annotation.DrawableRes
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.tv.material3.Border
import androidx.tv.material3.Card
import androidx.tv.material3.CardDefaults
import androidx.tv.material3.Glow
import androidx.tv.material3.Icon
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.Text

data class Section(
    val title: String,
    val subtitle: String,
    @DrawableRes val icon: Int,
    val tint: Color,
    val available: Boolean,
)

private val TileShape = RoundedCornerShape(12.dp)

/** A home-screen section card: tinted, engraved-style title, glowing gold edge when focused. */
@Composable
fun SectionTile(section: Section, onClick: () -> Unit, modifier: Modifier = Modifier) {
    val gold = MaterialTheme.colorScheme.primary
    Card(
        onClick = onClick,
        modifier = modifier,
        shape = CardDefaults.shape(TileShape),
        colors = CardDefaults.colors(containerColor = Color.Transparent, focusedContainerColor = Color.Transparent),
        border = CardDefaults.border(
            border = Border(BorderStroke(1.dp, gold.copy(alpha = 0.25f)), shape = TileShape),
            focusedBorder = Border(BorderStroke(2.dp, gold), shape = TileShape),
        ),
        glow = CardDefaults.glow(focusedGlow = Glow(elevationColor = gold.copy(alpha = 0.7f), elevation = 16.dp)),
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .background(Brush.verticalGradient(listOf(section.tint, section.tint.copy(alpha = 0.55f), Color.Black.copy(alpha = 0.6f))))
                .padding(horizontal = 8.dp, vertical = 8.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Top,
        ) {
            Text(
                text = section.title,
                color = MaterialTheme.colorScheme.secondary,
                style = MaterialTheme.typography.titleSmall.copy(fontSize = 15.sp),
                textAlign = TextAlign.Center,
                maxLines = 1,
            )
            Text(
                text = section.subtitle,
                color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.8f),
                style = MaterialTheme.typography.bodySmall,
                textAlign = TextAlign.Center,
                maxLines = 1,
            )
            Spacer(Modifier.height(6.dp))
            Icon(
                painter = painterResource(section.icon),
                contentDescription = null,
                tint = gold.copy(alpha = if (section.available) 1f else 0.6f),
                modifier = Modifier.size(34.dp),
            )
            if (!section.available) {
                Spacer(Modifier.height(2.dp))
                Text(
                    text = "coming soon",
                    color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.5f),
                    style = MaterialTheme.typography.labelSmall.copy(fontSize = 10.sp),
                )
            }
        }
    }
}
