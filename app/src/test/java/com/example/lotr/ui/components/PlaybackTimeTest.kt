package com.example.lotr.ui.components

import org.junit.Assert.assertEquals
import org.junit.Test

class PlaybackTimeTest {

    @Test
    fun `formats hours, minutes and seconds`() {
        assertEquals("1:02:03", formatPlaybackTime((3600 + 2 * 60 + 3) * 1000L))
    }

    @Test
    fun `zero and negative positions format as zero`() {
        assertEquals("0:00:00", formatPlaybackTime(0))
        assertEquals("0:00:00", formatPlaybackTime(-5_000))
    }
}
