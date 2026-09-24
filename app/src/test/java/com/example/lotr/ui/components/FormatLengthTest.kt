package com.example.lotr.ui.components

import org.junit.Assert.assertEquals
import org.junit.Test

class FormatLengthTest {
    @Test
    fun roundsToMinutesAndNeverShowsZero() {
        assertEquals("1 min", formatLength(12))
        assertEquals("43 min", formatLength(2584))
        assertEquals("1h 25m", formatLength(5094))
    }
}
