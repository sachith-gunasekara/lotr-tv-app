package com.example.lotr.data

/** A behind-the-scenes video on YouTube. [youtubeId] is the `v=` part of its URL. */
data class YouTubeVideo(
    val youtubeId: String,
    val title: String,
    val lengthSeconds: Int,
    /** The channel it's on, credited in the details panel. */
    val channel: String,
) {
    /** Key for resume position, alongside films and episodes. */
    val watchId: String get() = "yt_$youtubeId"
    val thumbnailUrl: String get() = "https://i.ytimg.com/vi/$youtubeId/hqdefault.jpg"
}

/** A shelf of [videos] with a line saying what they are. */
data class AppendixShelf(val title: String, val about: String, val videos: List<YouTubeVideo>)

/**
 * The Appendices: the extended editions' behind-the-scenes documentaries, plus the best of what
 * the cast, crew and composers have put out since. All verified embeddable (oEmbed +
 * `playableInEmbed`) in September 2026. Fan uploads can disappear, so the player handles a
 * missing video gracefully.
 */
object Appendices {
    private const val PAJASEK = "Pajasek99"
    private const val TT_UPLOADER = "thentheres thisguy"

    private fun appendix(id: String, title: String, seconds: Int, channel: String = PAJASEK) =
        YouTubeVideo(id, title, seconds, channel)

    val shelves: List<AppendixShelf> = listOf(
        AppendixShelf(
            title = "The Fellowship of the Ring",
            about = "Extended Edition Appendices - Part One: From Book to Vision, Part Two: From Vision to Reality",
            videos = listOf(
                appendix("Wo30CbcgtE0", "Introduction by Peter Jackson", 78),
                appendix("kZuxBpdrEFo", "J.R.R. Tolkien - Creator of Middle-earth", 1349),
                appendix("fliY-phAWDg", "From Book to Script", 1205),
                appendix("oqVyeAKU12U", "Storyboards and Pre-Viz", 812),
                appendix("gaytoO3tVCE", "Designing Middle-earth", 2474),
                appendix("5XjoyptwUX4", "Weta Workshop", 2584),
                appendix("mdaYOovyneI", "Costume Design", 694),
                appendix("Fu4QRAasGEQ", "New Zealand as Middle-earth", 594),
                appendix("rvhkc6j_c5c", "Introduction by Elijah Wood", 28),
                appendix("werApB4scp4", "The Fellowship of the Cast", 2079),
                appendix("qsTkbf0v8VE", "A Day in the Life of a Hobbit", 787),
                appendix("ONyAUXrtHy8", "Cameras in Middle-earth", 2981),
                appendix("PB8db3PMZ9s", "Scale", 935),
                appendix("uwicllZtJTQ", "Big-atures", 977),
                appendix("6Koa50421Pg", "Weta Digital", 1491),
                appendix("0aj2J7uHbDs", "Editorial - Assembling an Epic", 766),
                appendix("JGo2L6Tq760", "Editorial - Putting It All Together", 616),
                appendix("sn1m48IJtoA", "Digital Grading", 729),
                appendix("s14nq06TnzI", "The Soundscapes of Middle-earth", 756),
                appendix("TxLnRknhNOY", "Music for Middle-earth", 749),
                appendix("mNZVzPdA5fo", "The Road Goes Ever On...", 442),
                appendix("-OGRHMi2RiE", "The Making of The Fellowship of the Ring", 5094),
            ),
        ),
        AppendixShelf(
            title = "The Two Towers",
            about = "Extras from the Extended Edition - Gollum, Helm's Deep and the flooding of Isengard",
            videos = listOf(
                appendix("gOD7alVEZbY", "Introduction", 110, TT_UPLOADER),
                appendix("sQK1hkINII4", "Andy Serkis Animation Reference", 107, TT_UPLOADER),
                appendix("JZ_0CRHUf8g", "Gollum's Stand-in", 200, TT_UPLOADER),
                appendix("qONY_q5sCEA", "Early Helm's Deep Footage", 67, TT_UPLOADER),
                appendix("kVkFK9AOOZM", "Pre-Vis: The Flooding of Isengard", 151),
                appendix("9Jc3_PeGsPs", "The Flooding of Isengard - Animatic to Film", 91, TT_UPLOADER),
                appendix("37bQ8wJmjdM", "Middle-earth Atlas: Gandalf's Journey", 184, TT_UPLOADER),
                appendix("VIshNiQGyC4", "Middle-earth Atlas: Merry and Pippin", 279, TT_UPLOADER),
                appendix("WLglfzN_AIA", "Creating the Music", 239, "Chadwise"),
            ),
        ),
        AppendixShelf(
            title = "The Return of the King",
            about = "Extended Edition Appendices - Part Five: The War of the Ring, Part Six: The Passing of an Age",
            videos = listOf(
                appendix("5xQj6FNkw8k", "Introduction by Peter Jackson", 94),
                appendix("p8fq3rk1CMg", "J.R.R. Tolkien - The Legacy of Middle-earth", 1771),
                appendix("BaApQHPpLQU", "From Book to Script - Forging the Final Chapter", 1504),
                appendix("h-4va7xzB4w", "Designing Middle-earth", 2399),
                appendix("EE-AfGunQmQ", "Big-atures", 1201),
                appendix("lbhmwRpHWek", "Weta Workshop", 2846),
                appendix("1_zIKtEPXos", "Costume Design", 724),
                appendix("9m8qxhy4AF0", "Home of the Horse Lords", 1817),
                appendix("KK49D2wEFjI", "New Zealand as Middle-earth", 969),
                appendix("zKioRbZmpO4", "Introduction by Billy Boyd and Elijah Wood", 100),
                appendix("H4n1r6XNvYI", "Cameras in Middle-earth", 4393),
                appendix("7gHpvMv53yE", "Weta Digital", 2524),
                appendix("Y06HlFbRHxE", "Completing the Trilogy", 1336),
                appendix("2p25zdIiC2w", "Music for Middle-earth", 1323),
                appendix("KG7hGHFSglo", "The Soundscapes of Middle-earth", 1331),
                appendix("6uSGPJJY8_Y", "The End of All Things", 1291),
                appendix("eYk48X2px5Q", "The Passing of an Age", 1513),
                appendix("rN-fZkDm38s", "The Inspiration for \"Into the West\"", 1943),
                appendix("JLZKX7qkKyI", "The Mûmakil Battle", 217),
                appendix("oDZ5ecEWn-E", "The Making of The Return of the King", 6724),
            ),
        ),
        AppendixShelf(
            title = "Storyboards & Pre-Vis",
            about = "Scenes as they were first imagined - drawn, animated and tested before a frame was shot",
            videos = listOf(
                appendix("KK2uFtNOMeU", "Storyboards: The Prologue", 458),
                appendix("ChePyfWiRrs", "Bag End Set Test", 394),
                appendix("GRJgFqRFCQw", "Storyboard to Film: Nazgûl Attack at Bree", 108),
                appendix("kq0_LdUTe0U", "Pre-Vis: Gandalf Rides to Orthanc", 68),
                appendix("bB8LMU14xvs", "Pre-Vis: The Stairs of Khazad-dûm", 139),
                appendix("1W1bx5F9t6Q", "Storyboard to Film: The Bridge of Khazad-dûm", 156),
                appendix("n0wqlgFOMVs", "Storyboards: Orc Pursuit into Lothlórien", 92),
                appendix("3fCN6h54HHI", "Storyboards: Sarn Gebir Rapids Chase", 103),
                appendix("x4GxV1dyrZ8", "Abandoned Concept: Aragorn Battles Sauron", 319),
            ),
        ),
        AppendixShelf(
            title = "The Music",
            about = "Howard Shore's score and its web of themes",
            videos = listOf(
                appendix("elxfUa8BpMI", "Howard Shore on the Themes", 194, "Score: The Podcast"),
                appendix("-Deesm_fadg", "How Howard Shore Created a Masterpiece, Part 1", 663, "Inside the Score"),
                appendix("Ich1P7UFRBg", "How Howard Shore Created a Masterpiece, Part 2", 668, "Inside the Score"),
                appendix("4H9baaSATkA", "How Howard Shore Created a Masterpiece, Part 3", 263, "Inside the Score"),
            ),
        ),
        AppendixShelf(
            title = "Beyond the Films",
            about = "Reunions, anniversaries and the odd easter egg",
            videos = listOf(
                appendix("l_U0S6x_kCs", "One Zoom to Rule Them All - the cast reunites", 3001, "Josh Gad"),
                appendix("9tNvpZYlpN8", "20 Years of Middle-earth", 2407, "Wētā Workshop"),
                appendix("yn21u6j6Ywc", "Peter Jackson on Remastering Middle-earth in 4K", 352, "Warner Bros. Entertainment"),
                appendix("uehDGig-DnA", "Lord of the Rings Gallery", 250),
                appendix("5bkCdRZ9Tew", "Easter Egg: Lord of the Piercing", 210),
                appendix("ebb6CX5mot4", "Easter Egg: Dominic Monaghan Interviews Elijah Wood", 539),
                appendix("jElLSXLh09Y", "Easter Egg: Ben Stiller and Peter Jackson Talk Sequel", 351),
                appendix("zuP9iYhDZSs", "Easter Egg: Gollum's MTV Award", 175),
            ),
        ),
    )
}
