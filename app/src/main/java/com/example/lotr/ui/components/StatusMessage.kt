package com.example.lotr.ui.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.unit.dp
import androidx.tv.material3.MaterialTheme
import androidx.tv.material3.Text

/** A centred message for an empty or blocked screen, with an optional focused action button. */
@Composable
fun StatusMessage(text: String, actionLabel: String? = null, onAction: () -> Unit = {}) {
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
            style = MaterialTheme.typography.bodyLarge,
        )
        if (actionLabel != null) {
            Spacer(Modifier.height(24.dp))
            LotrButton(onClick = onAction, modifier = Modifier.focusRequester(focusRequester)) {
                Text(actionLabel)
            }
        }
    }
}
