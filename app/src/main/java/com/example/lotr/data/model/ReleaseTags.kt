package com.example.lotr.data.model

/** What a film file's name says about its release, e.g. `…EXTENDED.2160p…AAC5.1…`. */
data class ReleaseTags(
    val extended: Boolean,
    val resolution: String?,
    val hdr: Boolean,
    val audio: String?,
) {
    /** Human-readable badges, e.g. `[Extended Edition, 4K, 5.1 surround]`. */
    val labels: List<String>
        get() = listOfNotNull("Extended Edition".takeIf { extended }, resolution, "HDR".takeIf { hdr }, audio)

    companion object {
        private val UHD = Regex("""2160p|\b4K\b|\bUHD\b""", RegexOption.IGNORE_CASE)
        private val FULL_HD = Regex("""1080p""", RegexOption.IGNORE_CASE)
        private val HD = Regex("""720p""", RegexOption.IGNORE_CASE)
        private val HDR = Regex("""\bHDR(10\+?)?\b|DOLBY.?VISION|\bDV\b""", RegexOption.IGNORE_CASE)
        private val ATMOS = Regex("""ATMOS""", RegexOption.IGNORE_CASE)
        private val CHANNELS = Regex("""([57])\.1""")

        fun parse(fileName: String): ReleaseTags {
            val channels = CHANNELS.find(fileName)?.value
            return ReleaseTags(
                extended = fileName.contains("EXTENDED", ignoreCase = true),
                resolution = when {
                    UHD.containsMatchIn(fileName) -> "4K"
                    FULL_HD.containsMatchIn(fileName) -> "1080p"
                    HD.containsMatchIn(fileName) -> "720p"
                    else -> null
                },
                hdr = HDR.containsMatchIn(fileName),
                audio = when {
                    ATMOS.containsMatchIn(fileName) -> listOfNotNull("Dolby Atmos", channels).joinToString(" ")
                    channels != null -> "$channels surround"
                    else -> null
                },
            )
        }
    }
}
