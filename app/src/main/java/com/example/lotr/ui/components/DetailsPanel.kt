package com.example.lotr.ui.components

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.width
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.Text

/**
 * The top-left details for whatever's focused: a gold [overline], the [title] large, a [meta]
 * line (year, length, ...), a short [body] and a gold [hint] saying what OK does.
 */
@Composable
fun DetailsPanel(
    overline: String,
    title: String,
    meta: String,
    body: String,
    hint: String,
    modifier: Modifier = Modifier,
) {
    Column(modifier.width(820.dp)) {
        Text(
            text = overline,
            color = MaterialTheme.colorScheme.primary,
            style = MaterialTheme.typography.labelLarge,
            maxLines = 1,
            overflow = TextOverflow.Ellipsis,
        )
        Spacer(Modifier.height(4.dp))
        Text(
            text = title,
            color = MaterialTheme.colorScheme.secondary,
            style = MaterialTheme.typography.displaySmall.copy(fontSize = 30.sp, lineHeight = 38.sp),
            maxLines = 1,
            overflow = TextOverflow.Ellipsis,
        )
        Text(
            text = meta,
            color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.75f),
            style = MaterialTheme.typography.bodyMedium,
        )
        Spacer(Modifier.height(4.dp))
        Text(
            text = body,
            color = MaterialTheme.colorScheme.onBackground.copy(alpha = 0.9f),
            style = MaterialTheme.typography.bodyLarge,
            maxLines = 2,
            overflow = TextOverflow.Ellipsis,
        )
        Spacer(Modifier.height(6.dp))
        Text(
            text = hint,
            color = MaterialTheme.colorScheme.primary,
            style = MaterialTheme.typography.labelMedium,
        )
    }
}
