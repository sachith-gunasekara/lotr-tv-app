package com.example.lotr.data

import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Test
import java.io.File

class ShireMusicTest {
    private val assets = File("src/main/assets/music")

    @Test
    fun everyTrackIsBundled() {
        ShireMusic.order.forEach { assertTrue("missing ${it.asset}", File(assets, it.asset).isFile) }
    }

    @Test
    fun startsWithTheOstAndEndsWithTheHouseMusic() {
        assertEquals("shire_ost.m4a", ShireMusic.order.first().asset)
        assertEquals("welcome_to_the_shire_house.m4a", ShireMusic.order.last().asset)
        assertTrue(ShireMusic.order.all { it.gain in 0f..1f })
    }
}
