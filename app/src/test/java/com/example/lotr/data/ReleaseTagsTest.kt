package com.example.lotr.data

import com.example.lotr.data.model.ReleaseTags
import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Test

class ReleaseTagsTest {

    @Test
    fun `parses the tags from the real collection's file names`() {
        val tags = ReleaseTags.parse(
            "The.Lord.Of.The.Rings.The.Fellowship.Of.The.Ring.2001.EXTENDED.2160p.4K.BluRay.x265.10bit.AAC5.1-[YTS.MX].mkv",
        )
        assertEquals(listOf("Extended Edition", "4K", "5.1 surround"), tags.labels)
    }

    @Test
    fun `recognises Atmos, HDR and theatrical 1080p`() {
        val tags = ReleaseTags.parse("Return.of.the.King.1080p.HDR10.TrueHD.Atmos.7.1.mkv")
        assertEquals(listOf("1080p", "HDR", "Dolby Atmos 7.1"), tags.labels)
        assertFalse(tags.extended)
    }

    @Test
    fun `plain names produce no badges`() {
        assertEquals(emptyList<String>(), ReleaseTags.parse("fellowship.mp4").labels)
    }
}
