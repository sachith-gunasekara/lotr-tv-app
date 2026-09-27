package com.example.lotr.data

import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Test

class PlaceMusicTest {
    @Test
    fun everyPlaceButTheShireHasItsOwnCue() {
        val placeIds = Atlas.places.map { it.id }.toSet()
        assertEquals(placeIds - "hobbiton", PlaceMusic.all.keys)
        assertNull(PlaceMusic.cueFor("hobbiton"))
    }

    @Test
    fun cuesAreDistinctYouTubeIds() {
        val ids = PlaceMusic.all.values.map { it.youtubeId }
        assertEquals(ids.size, ids.toSet().size)
        ids.forEach { assertEquals("bad id $it", 11, it.length) }
    }
}
