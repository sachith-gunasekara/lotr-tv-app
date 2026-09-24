package com.example.lotr.data

/** A block of reading text; a [heading] (e.g. an Elvish phrase) sets it off in gold. */
data class Passage(val text: String, val heading: String? = null)

/**
 * Something to read: a date in the Tale of Years, a character, a language, a saying.
 * [glyph] is the large lettering on its card (a year, an initial, a word); [filmId] picks the
 * film still behind it, if any.
 */
data class ReadingPiece(
    val id: String,
    val title: String,
    val overline: String,
    val glyph: String,
    val summary: String,
    val passages: List<Passage>,
    val filmId: String? = null,
)

data class ReadingShelf(val title: String, val about: String, val pieces: List<ReadingPiece>)

/**
 * The Reading room's texts - all written for this app (the sayings are short quotations, credited
 * to whoever says them). Dates are from the Tale of Years in The Lord of the Rings' Appendix B.
 */
object Reading {
    private const val FELLOWSHIP = "fellowship"
    private const val TWO_TOWERS = "two_towers"
    private const val RETURN = "return_of_the_king"

    private fun year(id: String, year: String, title: String, summary: String, vararg more: String, filmId: String? = null) =
        ReadingPiece(id, title, "The Tale of Years  ·  $year", year.substringAfterLast(' '), summary, (listOf(summary) + more).map(::Passage), filmId)

    private val taleOfYears = ReadingShelf(
        title = "The Tale of Years",
        about = "How the Ring came to Bag End, and how it was unmade",
        pieces = listOf(
            year("forging", "Second Age c. 1600", "The Ring is forged",
                "In the fires of Mount Doom, Sauron secretly forges the One Ring to rule the Rings of Power he helped the Elven-smiths of Eregion to make.",
                "The Elves sense him the moment he puts it on, and take off their own three rings. War follows for centuries."),
            year("last_alliance", "Second Age 3441", "The Last Alliance",
                "Elves and Men under Gil-galad and Elendil besiege Barad-dûr. Sauron is overthrown and Isildur cuts the Ring from his hand.",
                "Elrond and Círdan urge Isildur to cast it into the fire. He keeps it, as a weregild for his father and brother.", filmId = FELLOWSHIP),
            year("gladden_fields", "Third Age 2", "Lost in the Anduin",
                "Orcs ambush Isildur at the Gladden Fields. The Ring slips from his finger as he swims the river, and betrays him to his death.",
                "It lies on the riverbed, forgotten, for almost two and a half thousand years."),
            year("smeagol", "Third Age 2463", "Sméagol's birthday present",
                "Déagol, fishing in the Anduin, finds a golden ring. His friend Sméagol strangles him for it - on his birthday, he says.",
                "Driven out by his own people, Sméagol creeps under the Misty Mountains and becomes Gollum."),
            year("riddles", "Third Age 2941", "Riddles in the dark",
                "Bilbo Baggins, lost beneath the Misty Mountains on the dwarves' quest for Erebor, finds the Ring and wins a game of riddles with Gollum.",
                "That same year the dragon Smaug is slain and the Battle of Five Armies fought. Bilbo comes home with a chest of treasure and a ring he tells no-one about."),
            year("party", "Third Age 3001, 22 September", "An unexpected farewell",
                "At the party for his eleventy-first birthday - and Frodo's thirty-third, for they share a birthday - Bilbo disappears and leaves the Shire, and the Ring passes to Frodo.",
                "22 September is still kept as the hobbits' birthday.", filmId = FELLOWSHIP),
            year("leaving", "3018, 23 September", "Frodo leaves Bag End",
                "Seventeen years later Gandalf returns with the truth: it is the One Ring, and the Enemy is hunting it. Frodo sets out with Sam, Merry and Pippin.",
                "The Black Riders reach Hobbiton the same night.", filmId = FELLOWSHIP),
            year("weathertop", "3018, 6 October", "Weathertop",
                "On Amon Sûl the Nazgûl attack, and the Witch-king wounds Frodo with a Morgul-blade.",
                "Strider leads the hobbits on towards Rivendell, with the shard working its way to Frodo's heart.", filmId = FELLOWSHIP),
            year("council", "3018, 25 October", "The Council of Elrond",
                "In Rivendell, Elves, Dwarves, Men, a wizard and hobbits decide the Ring must be taken into Mordor and destroyed. Frodo offers to carry it.",
                "Nine walkers are chosen against the Nine Riders. They set out on 25 December.", filmId = FELLOWSHIP),
            year("moria", "3019, 15 January", "The Bridge of Khazad-dûm",
                "In Moria the Fellowship is pursued to the bridge by a Balrog. Gandalf holds it, and falls with it into the dark.",
                "He fights it from the deepest water to the mountain's peak, and dies there - and is sent back.", filmId = FELLOWSHIP),
            year("breaking", "3019, 26 February", "The breaking of the Fellowship",
                "At Amon Hen, Boromir tries to take the Ring and then dies defending Merry and Pippin. Frodo and Sam go on to Mordor alone.",
                "Aragorn, Legolas and Gimli follow the orcs carrying the young hobbits west into Rohan.", filmId = TWO_TOWERS),
            year("hornburg", "3019, 3-4 March", "Helm's Deep",
                "Saruman's army breaks the Deeping Wall in the night. At dawn Théoden rides out, Gandalf arrives with Erkenbrand, and the Huorns close in.",
                "The same night the Ents break the dam and flood Isengard.", filmId = TWO_TOWERS),
            year("pelennor", "3019, 15 March", "The Pelennor Fields",
                "Minas Tirith is besieged. The Rohirrim ride in at dawn, Éowyn and Merry slay the Witch-king, and Aragorn comes up the Anduin in the Corsairs' ships.",
                "It is the greatest battle of the age.", filmId = RETURN),
            year("unmaking", "3019, 25 March", "The Ring is unmade",
                "At the Crack of Doom, Frodo cannot give the Ring up. Gollum bites it from his finger and falls with it into the fire. Sauron is gone.",
                "In Gondor, 25 March becomes the first day of the new year.", filmId = RETURN),
            year("crowning", "3019, 1 May", "The King returns",
                "Aragorn is crowned King Elessar before the gates of Minas Tirith, and at midsummer he weds Arwen.", filmId = RETURN),
            year("havens", "3021, 29 September", "The Grey Havens",
                "Frodo, still wounded in ways that do not heal, sails into the West with Bilbo, Gandalf and the last of the great Elves. Sam goes home.",
                "\"Well, I'm back,\" he says.", filmId = RETURN),
        ),
    )

    private fun who(id: String, name: String, kind: String, actor: String, summary: String, vararg more: String, filmId: String? = null) =
        ReadingPiece(id, name, "Who's Who  ·  $kind", name.first().toString(), summary,
            (listOf(summary) + more).map(::Passage) + Passage("Played by $actor in Peter Jackson's films."), filmId)

    private val whosWho = ReadingShelf(
        title = "Who's Who",
        about = "The Fellowship, and those who stood with them or against them",
        pieces = listOf(
            who("frodo", "Frodo Baggins", "Hobbit of the Shire", "Elijah Wood",
                "Bilbo's cousin and heir, who inherits Bag End and the Ring, and carries it to Mount Doom.",
                "Of all the Ring-bearers he resisted it longest - and it cost him the peace of the Shire he saved.", filmId = FELLOWSHIP),
            who("sam", "Samwise Gamgee", "Hobbit of the Shire", "Sean Astin",
                "Bag End's gardener, and Frodo's companion to the very end. When Frodo could not walk, Sam carried him.",
                "He later becomes Mayor of the Shire seven times over.", filmId = RETURN),
            who("gandalf", "Gandalf", "Wizard", "Ian McKellen",
                "Gandalf the Grey, one of the Istari sent to oppose Sauron. He falls in Moria and returns as Gandalf the White.",
                "The Elves called him Mithrandir, the Grey Pilgrim.", filmId = TWO_TOWERS),
            who("aragorn", "Aragorn", "Man of the North", "Viggo Mortensen",
                "Known in Bree as Strider: a Ranger, and Isildur's heir, who becomes King Elessar of Gondor and Arnor.",
                "He carries the shards of Narsil, reforged in Rivendell as Andúril, Flame of the West.", filmId = RETURN),
            who("legolas", "Legolas", "Elf of Mirkwood", "Orlando Bloom",
                "Son of Thranduil the Elvenking, the Fellowship's archer, with sight to see riders leagues away.",
                "His rivalry with Gimli becomes one of the great friendships of Middle-earth.", filmId = TWO_TOWERS),
            who("gimli", "Gimli", "Dwarf of the Lonely Mountain", "John Rhys-Davies",
                "Son of Glóin, who travelled with Bilbo. He walks with the Fellowship for the honour of the Dwarves.",
                "Galadriel gives him three strands of her hair - a gift she once refused to Fëanor himself.", filmId = TWO_TOWERS),
            who("boromir", "Boromir", "Man of Gondor", "Sean Bean",
                "Elder son of Denethor, Steward of Gondor. Tempted by the Ring, he redeems himself defending the hobbits at Amon Hen.",
                filmId = FELLOWSHIP),
            who("merry", "Meriadoc Brandybuck", "Hobbit of Buckland", "Dominic Monaghan",
                "Merry, the planner of the four, who swears himself to Théoden and helps Éowyn slay the Witch-king.", filmId = RETURN),
            who("pippin", "Peregrin Took", "Hobbit of the Shire", "Billy Boyd",
                "Pippin, the youngest of the Fellowship, who becomes a Guard of the Citadel of Minas Tirith.",
                "In the films, he lights the beacon that calls Rohan to Gondor's aid.", filmId = RETURN),
            who("gollum", "Gollum", "Once a hobbit, Sméagol", "Andy Serkis",
                "Kept alive and ruined by the Ring for nearly five hundred years, he guides Frodo into Mordor for his own ends.",
                "Without him, the Ring would never have been destroyed.", filmId = TWO_TOWERS),
            who("galadriel", "Galadriel", "Lady of Lórien", "Cate Blanchett",
                "One of the eldest and greatest of the Elves, keeper of Nenya, one of the Three Rings.",
                "Offered the One Ring by Frodo, she passes the test: \"I will diminish, and go into the West.\"", filmId = FELLOWSHIP),
            who("elrond", "Elrond", "Lord of Rivendell", "Hugo Weaving",
                "Half-elven master of Rivendell, who fought in the Last Alliance, and Arwen's father.", filmId = FELLOWSHIP),
            who("arwen", "Arwen", "Elf of Rivendell", "Liv Tyler",
                "Elrond's daughter, the Evenstar of her people, who chooses a mortal life with Aragorn.", filmId = RETURN),
            who("eowyn", "Éowyn", "Shieldmaiden of Rohan", "Miranda Otto",
                "Théoden's niece, who rides to war in disguise and slays the Witch-king: no living man, as it turned out, could do it.",
                filmId = RETURN),
            who("theoden", "Théoden", "King of Rohan", "Bernard Hill",
                "Freed from Saruman's hold, he leads the Rohirrim at Helm's Deep and the Pelennor Fields, where he falls.", filmId = TWO_TOWERS),
            who("faramir", "Faramir", "Captain of Gondor", "David Wenham",
                "Boromir's younger brother, who finds Frodo in Ithilien - and later marries Éowyn.", filmId = RETURN),
            who("saruman", "Saruman", "Wizard", "Christopher Lee",
                "Head of the Istari, who studied the Enemy's arts too long and came to want the Ring for himself.", filmId = TWO_TOWERS),
            who("sauron", "Sauron", "The Dark Lord", "Alan Howard (voice)",
                "A Maia of great power who poured much of it into the One Ring, and so could never be destroyed while it lasted.", filmId = FELLOWSHIP),
        ),
    )

    private fun tongue(id: String, name: String, speakers: String, glyph: String, summary: String, vararg phrases: Pair<String, String>) =
        ReadingPiece(id, name, "Tongues of Middle-earth  ·  $speakers", glyph, summary,
            listOf(Passage(summary)) + phrases.map { (phrase, meaning) -> Passage(meaning, heading = phrase) })

    private val tongues = ReadingShelf(
        title = "Tongues of Middle-earth",
        about = "Tolkien invented the languages first - the stories, he said, were made to give them a world",
        pieces = listOf(
            tongue("quenya", "Quenya", "High-elven", "Namárië",
                "The ancient tongue of the Elves who went to Valinor, kept in Middle-earth for lore and song - an Elvish Latin. Tolkien built it on Finnish.",
                "Elen síla lúmenn' omentielvo" to "A star shines on the hour of our meeting. Frodo's greeting to the Elves in the Shire.",
                "Namárië" to "Farewell. The name of Galadriel's lament in Lórien.",
                "Aiya Eärendil elenion ancalima!" to "Hail Eärendil, brightest of stars! Cried with the Phial of Galadriel in Shelob's lair.",
                "Et Eärello Endorenna utúlien" to "Out of the Great Sea to Middle-earth I am come. Elendil's words, spoken again by Aragorn at his crowning."),
            tongue("sindarin", "Sindarin", "Grey-elven", "Mellon",
                "The everyday language of the Elves of Middle-earth - of Rivendell, Lórien and Mirkwood. Tolkien modelled its sound on Welsh.",
                "Mellon" to "Friend. The password that opens the Doors of Moria.",
                "Pedo mellon a minno" to "Speak, friend, and enter. Written above the Doors of Durin.",
                "Mae govannen" to "Well met.",
                "Noro lim, Asfaloth!" to "Run swiftly, Asfaloth! The call that carries Frodo to the Ford of Bruinen.",
                "A Elbereth Gilthoniel" to "O Elbereth, Star-kindler. The opening of the Elves' hymn to Varda, queen of the stars."),
            tongue("khuzdul", "Khuzdul", "Dwarvish", "Khazâd",
                "The secret language of the Dwarves, rarely taught to anyone else. Even their own names they keep hidden, and use other names among outsiders.",
                "Baruk Khazâd! Khazâd ai-mênu!" to "Axes of the Dwarves! The Dwarves are upon you! Gimli's battle-cry at Helm's Deep.",
                "Khazad-dûm" to "The Dwarrowdelf, the mansion of the Dwarves: Moria.",
                "Kheled-zâram" to "The Mirrormere, the lake below the Dimrill Stair where Durin first saw his crown of stars."),
            tongue("black_speech", "The Black Speech", "Mordor", "Nazg",
                "Devised by Sauron for all his servants, it never took hold outside Barad-dûr and the Nazgûl. Its words are seldom spoken aloud.",
                "Ash nazg durbatulûk, ash nazg gimbatul, ash nazg thrakatulûk, agh burzum-ishi krimpatul." to
                    "One Ring to rule them all, One Ring to find them, One Ring to bring them all, and in the darkness bind them. The inscription on the Ring, which appears in its fire.",
                "Nazgûl" to "Ring-wraiths. From nazg, ring, and gûl, wraith.",
                "Uruk-hai" to "The great orcs bred in Mordor and Isengard. Uruk means orc; hai, folk."),
            tongue("rohirric", "Rohirric", "The Riders of Rohan", "Hál",
                "Tolkien rendered the speech of Rohan as Old English - so their names, Théoden, Éomer, Edoras, are Anglo-Saxon words.",
                "Westu Théoden hál!" to "Be thou well, Théoden! A greeting to the king in his golden hall, once he is himself again.",
                "Théoden" to "Old English for \"lord of the people\" - a king.",
                "Edoras" to "\"The courts\": the Rohirrim's capital, around the hall of Meduseld."),
        ),
    )

    private fun saying(id: String, speaker: String, quote: String, context: String, filmId: String? = null) =
        ReadingPiece(id, speaker, "Words of Wisdom", speaker.first().toString(), quote, listOf(Passage(context, heading = quote)), filmId)

    private val sayings = ReadingShelf(
        title = "Words of Wisdom",
        about = "Things worth remembering",
        pieces = listOf(
            saying("time_given", "Gandalf", "All we have to decide is what to do with the time that is given us.",
                "To Frodo in Moria, when Frodo wishes the Ring had never come to him.", FELLOWSHIP),
            saying("wander", "Bilbo Baggins", "All that is gold does not glitter, not all those who wander are lost.",
                "The riddle-poem Bilbo wrote about Aragorn, the heir who wandered as a Ranger.", FELLOWSHIP),
            saying("pity", "Gandalf", "Many that live deserve death. And some that die deserve life. Can you give it to them?",
                "When Frodo says it was a pity Bilbo did not kill Gollum. The pity is what saves them all in the end.", FELLOWSHIP),
            saying("good_in_world", "Samwise Gamgee", "There's some good in this world, Mr. Frodo, and it's worth fighting for.",
                "At Osgiliath, when Frodo can no longer see why they go on.", TWO_TOWERS),
            saying("smallest", "Galadriel", "Even the smallest person can change the course of the future.",
                "To Frodo in Lothlórien.", FELLOWSHIP),
            saying("faithless", "Gimli", "Faithless is he that says farewell when the road darkens.",
                "At the Council of Elrond, when Elrond says the Fellowship may turn back if they must.", FELLOWSHIP),
            saying("carry_you", "Samwise Gamgee", "I can't carry it for you, but I can carry you!",
                "On the slopes of Mount Doom.", RETURN),
            saying("road_goes_on", "Bilbo Baggins", "The Road goes ever on and on, down from the door where it began.",
                "Bilbo's walking song, which Frodo sings as he leaves the Shire.", FELLOWSHIP),
            saying("not_weep", "Gandalf", "I will not say: do not weep; for not all tears are an evil.",
                "At the Grey Havens, as Frodo sails.", RETURN),
            saying("bow_to_no_one", "Aragorn", "My friends, you bow to no one.",
                "At his crowning, when the four hobbits kneel to him - and all Gondor kneels to them.", RETURN),
        ),
    )

    val shelves: List<ReadingShelf> = listOf(taleOfYears, whosWho, tongues, sayings)
}
