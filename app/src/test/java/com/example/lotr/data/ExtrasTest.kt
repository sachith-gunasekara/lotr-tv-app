package com.example.lotr.data

import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Test
import java.io.File

class ExtrasTest {
    private val root = File("/storage/usb/LOTR")

    @Test
    fun findsTheOutermostExtrasFolder() {
        val file = File(root, "Appendices/Disc 1 - From Book to Vision/Weta.Workshop.mkv")
        assertEquals(File(root, "Appendices"), extrasFolderOf(file, root))
    }

    @Test
    fun recognisesCommonExtrasFolderNames() {
        listOf("Extras", "Bonus Features", "Behind the Scenes", "Behind_The_Scenes", "Featurettes", "Special Features")
            .forEach { name -> assertEquals(name, extrasFolderOf(File(root, "$name/clip.mp4"), root)?.name) }
    }

    @Test
    fun filmsAndTheRootItselfAreNotExtras() {
        assertNull(extrasFolderOf(File(root, "Fellowship (2001)/Fellowship.mkv"), root))
        val extrasRoot = File("/storage/usb/Extras")
        assertNull(extrasFolderOf(File(extrasRoot, "Fellowship.mkv"), extrasRoot))
    }

    @Test
    fun readableNameTurnsSeparatorsIntoSpaces() {
        assertEquals("The Road Goes Ever-On", readableName("The.Road.Goes_Ever-On"))
        assertEquals("01 Intro", readableName("01  Intro "))
    }
}
