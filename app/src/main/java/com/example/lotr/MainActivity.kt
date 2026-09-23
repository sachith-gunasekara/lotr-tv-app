package com.example.lotr

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import com.example.lotr.ui.home.HomeScreen
import com.example.lotr.ui.theme.LotrTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            LotrTheme {
                // TODO(PR7): replace with a sealed-class nav state machine once Films/Player exist.
                HomeScreen(onOpenFilms = {})
            }
        }
    }
}
