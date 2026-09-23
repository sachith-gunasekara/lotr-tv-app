package com.example.lotr

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import com.example.lotr.data.StorageRepository
import com.example.lotr.ui.films.FilmsScreen
import com.example.lotr.ui.home.HomeScreen
import com.example.lotr.ui.theme.LotrTheme

private enum class Screen { HOME, FILMS }

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            LotrTheme {
                val storageRepository = remember { StorageRepository(applicationContext) }
                var screen by remember { mutableStateOf(Screen.HOME) }

                // TODO(PR7): replace with a sealed-class nav state machine once the Player screen
                // exists and there's a real back-stack (Films -> Player) to manage.
                when (screen) {
                    Screen.HOME -> HomeScreen(onOpenFilms = { screen = Screen.FILMS })
                    Screen.FILMS -> FilmsScreen(
                        storageRepository = storageRepository,
                        onPlay = { _, _ -> },
                    )
                }
            }
        }
    }
}
