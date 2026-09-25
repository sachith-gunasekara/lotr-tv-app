package com.example.lotr.data

/** A named spot on a map; [x] and [y] are fractions (0..1) of the map's width and height. */
data class MapPlace(
    val id: String,
    val name: String,
    val x: Float,
    val y: Float,
    val blurb: String,
    /** Which of the films it appears in, by film id. */
    val seenIn: List<String> = emptyList(),
)

/** One leg of a [Journey]: where, and what happened there. */
data class JourneyStop(val placeId: String, val note: String)

/** A route across the Middle-earth map, stepped through stop by stop. */
data class Journey(
    val id: String,
    val title: String,
    val travellers: String,
    val summary: String,
    val stops: List<JourneyStop>,
)

/**
 * A map in the Vault. Its picture is a tile pyramid in `assets/maps/<[assetDir]>` (see
 * [MapTileRepository]); [credit] is the CC BY-SA attribution shown with it.
 */
data class AtlasMap(
    val id: String,
    val title: String,
    val about: String,
    val assetDir: String,
    val credit: String,
    val places: List<MapPlace> = emptyList(),
)

/**
 * The Vault's maps and journeys. All maps are CC BY-SA 4.0 SVGs from Wikimedia Commons, re-inked in
 * the app's palette and re-lettered in Cormorant Garamond (see third_party/maps/NOTICE.md). Place
 * positions were measured from the Middle-earth map's own town marks and labels.
 */
object Atlas {
    private const val FELLOWSHIP = "fellowship"
    private const val TWO_TOWERS = "two_towers"
    private const val RETURN = "return_of_the_king"

    val places: List<MapPlace> = listOf(
        MapPlace("grey_havens", "The Grey Havens", 0.1701f, 0.2667f,
            "The Elves' harbour on the Gulf of Lhûn, where the last ships sail into the West.", listOf(RETURN)),
        MapPlace("hobbiton", "Hobbiton", 0.2567f, 0.2754f,
            "A quiet village in the Shire, and Bag End beneath the Hill - where Bilbo's ring was left to Frodo.", listOf(FELLOWSHIP, RETURN)),
        MapPlace("bree", "Bree", 0.3254f, 0.2811f,
            "Men and hobbits side by side at the crossing of the great roads, and the Prancing Pony at its heart.", listOf(FELLOWSHIP)),
        MapPlace("weathertop", "Weathertop", 0.3915f, 0.2647f,
            "Amon Sûl, the ruined watchtower of the old kingdom of Arnor, where the Nazgûl found the hobbits.", listOf(FELLOWSHIP)),
        MapPlace("trollshaws", "The Trollshaws", 0.458f, 0.258f,
            "Wooded hills above the Last Bridge, where three trolls once argued over how to cook their dwarves."),
        MapPlace("rivendell", "Rivendell", 0.4837f, 0.2646f,
            "Imladris, Elrond's hidden valley - the Last Homely House east of the Sea.", listOf(FELLOWSHIP, RETURN)),
        MapPlace("high_pass", "The High Pass", 0.5256f, 0.2549f,
            "The road over the Misty Mountains, with the goblins' tunnels below it."),
        MapPlace("carrock", "The Carrock", 0.5492f, 0.2322f,
            "A great rock in the Anduin where the eagles set Bilbo and the dwarves down, near Beorn's house."),
        MapPlace("elvenking", "The Elvenking's Halls", 0.6522f, 0.1886f,
            "Thranduil's caves in northern Mirkwood, home of the Wood-elves - and of Legolas."),
        MapPlace("esgaroth", "Lake-town", 0.6652f, 0.1973f,
            "Esgaroth, built on stilts upon the Long Lake, in the shadow of the Lonely Mountain."),
        MapPlace("erebor", "Erebor", 0.6652f, 0.1669f,
            "The Lonely Mountain, the dwarves' kingdom under the mountain, taken by the dragon Smaug."),
        MapPlace("moria", "Moria", 0.4641f, 0.3886f,
            "Khazad-dûm, the vast dwarf-city beneath the Misty Mountains, dark since the Balrog awoke.", listOf(FELLOWSHIP)),
        MapPlace("lorien", "Lothlórien", 0.515f, 0.425f,
            "The Golden Wood of Galadriel and Celeborn, where the mallorn trees hold the city of Caras Galadhon.", listOf(FELLOWSHIP)),
        MapPlace("dol_guldur", "Dol Guldur", 0.598f, 0.41f,
            "The Necromancer's fortress in southern Mirkwood - Sauron's hiding place long before Mordor."),
        MapPlace("fangorn", "Fangorn Forest", 0.487f, 0.5f,
            "An ancient, tangled forest on the edge of Rohan, home of Treebeard and the Ents.", listOf(TWO_TOWERS)),
        MapPlace("isengard", "Isengard", 0.4398f, 0.5408f,
            "Saruman's stronghold, the ring of stone around the black tower of Orthanc.", listOf(FELLOWSHIP, TWO_TOWERS, RETURN)),
        MapPlace("helms_deep", "Helm's Deep", 0.462f, 0.6f,
            "The Hornburg and its Deeping Wall, Rohan's refuge in the mountains.", listOf(TWO_TOWERS)),
        MapPlace("edoras", "Edoras", 0.4932f, 0.6242f,
            "The capital of Rohan, with the golden hall of Meduseld on its hill.", listOf(TWO_TOWERS, RETURN)),
        MapPlace("erech", "Dunharrow & Erech", 0.4936f, 0.6708f,
            "Where the Paths of the Dead come out of the mountains, at the Stone of Erech.", listOf(RETURN)),
        MapPlace("amon_hen", "Amon Hen", 0.5919f, 0.6042f,
            "The Hill of Seeing above the Falls of Rauros, where the Fellowship was broken.", listOf(FELLOWSHIP, TWO_TOWERS)),
        MapPlace("dead_marshes", "The Dead Marshes", 0.638f, 0.612f,
            "Fens over an ancient battlefield; the faces of the fallen gleam under the water.", listOf(TWO_TOWERS)),
        MapPlace("black_gate", "The Black Gate", 0.6638f, 0.6124f,
            "The Morannon, the great gate barring the way into Mordor.", listOf(TWO_TOWERS, RETURN)),
        MapPlace("minas_tirith", "Minas Tirith", 0.6374f, 0.6996f,
            "The white city of Gondor, built in seven tiers against the mountain.", listOf(RETURN)),
        MapPlace("osgiliath", "Osgiliath", 0.6439f, 0.7029f,
            "Gondor's ruined old capital, fought over on both banks of the Anduin.", listOf(TWO_TOWERS, RETURN)),
        MapPlace("minas_morgul", "Minas Morgul", 0.6642f, 0.6981f,
            "The Witch-king's city, and above it the stair to Cirith Ungol and Shelob's lair.", listOf(RETURN)),
        MapPlace("mount_doom", "Mount Doom", 0.7088f, 0.6636f,
            "Orodruin, the mountain of fire where the One Ring was forged - and the only place it can be destroyed.", listOf(RETURN)),
        MapPlace("barad_dur", "Barad-dûr", 0.7349f, 0.6625f,
            "The Dark Tower, Sauron's fortress, with the Eye at its summit.", listOf(FELLOWSHIP, TWO_TOWERS, RETURN)),
        MapPlace("pelargir", "Pelargir", 0.6358f, 0.781f,
            "Gondor's old port on the Anduin, where the Corsairs of Umbar came ashore.", listOf(RETURN)),
    )

    private val placesById = places.associateBy { it.id }

    fun place(id: String): MapPlace = placesById.getValue(id)

    val journeys: List<Journey> = listOf(
        Journey(
            id = "ring_bearer",
            title = "The Ring-bearer",
            travellers = "Frodo and Sam",
            summary = "From Bag End to the fires of Mount Doom - the long road of the One Ring.",
            stops = listOf(
                JourneyStop("hobbiton", "Gandalf confirms Bilbo's ring is the One Ring, and Frodo leaves the Shire with Sam."),
                JourneyStop("bree", "At the Prancing Pony they meet Strider, as the Black Riders close in."),
                JourneyStop("weathertop", "On the ruined watchtower the Witch-king's blade wounds Frodo."),
                JourneyStop("rivendell", "Elrond's council forms the Fellowship of the Ring."),
                JourneyStop("moria", "Through the Mines of Moria. Gandalf falls with the Balrog at the Bridge of Khazad-dûm."),
                JourneyStop("lorien", "Galadriel's wood: her mirror, her gifts, and her test."),
                JourneyStop("amon_hen", "Boromir falls and the Fellowship breaks. Frodo and Sam go on alone."),
                JourneyStop("dead_marshes", "Gollum leads them through the marshes of the dead."),
                JourneyStop("black_gate", "The Black Gate is shut to them; Gollum knows another way."),
                JourneyStop("osgiliath", "Faramir takes them to Osgiliath, and lets them go."),
                JourneyStop("minas_morgul", "The stairs of Cirith Ungol, and Shelob's lair."),
                JourneyStop("mount_doom", "Sammath Naur, the Crack of Doom. The Ring goes into the fire."),
            ),
        ),
        Journey(
            id = "three_hunters",
            title = "The Three Hunters",
            travellers = "Aragorn, Legolas and Gimli",
            summary = "The chase across Rohan that ends with a king returned.",
            stops = listOf(
                JourneyStop("amon_hen", "They follow the Uruk-hai carrying off Merry and Pippin."),
                JourneyStop("fangorn", "In the forest they meet Gandalf, returned as the White."),
                JourneyStop("edoras", "Théoden is freed from Saruman's hold."),
                JourneyStop("helms_deep", "The Battle of the Hornburg, won at dawn."),
                JourneyStop("isengard", "Saruman's tower, after the Ents' flood."),
                JourneyStop("erech", "Aragorn takes the Paths of the Dead and calls on the oath-breakers."),
                JourneyStop("pelargir", "The Corsairs' fleet is taken with the army of the Dead."),
                JourneyStop("minas_tirith", "The ships come up the Anduin to the Battle of the Pelennor Fields."),
                JourneyStop("black_gate", "The last march, to hold Sauron's eye away from Frodo."),
            ),
        ),
        Journey(
            id = "merry_and_pippin",
            title = "Merry and Pippin",
            travellers = "Meriadoc Brandybuck and Peregrin Took",
            summary = "Two hobbits carried off by orcs, who end up changing the war.",
            stops = listOf(
                JourneyStop("amon_hen", "Taken by the Uruk-hai at the breaking of the Fellowship."),
                JourneyStop("fangorn", "They escape into Fangorn and meet Treebeard."),
                JourneyStop("isengard", "The Ents march on Isengard and drown it."),
                JourneyStop("edoras", "Pippin looks into the palantír; Merry swears himself to Théoden."),
                JourneyStop("minas_tirith", "Pippin lights the beacon; Merry and Éowyn face the Witch-king on the Pelennor."),
            ),
        ),
        Journey(
            id = "there_and_back_again",
            title = "There and Back Again",
            travellers = "Bilbo Baggins",
            summary = "The Hobbit's road, sixty years before - and where the Ring was found.",
            stops = listOf(
                JourneyStop("hobbiton", "Thirteen dwarves and a wizard come to tea."),
                JourneyStop("trollshaws", "Three trolls, and the swords Sting and Glamdring."),
                JourneyStop("rivendell", "Elrond reads the moon-letters on Thorin's map."),
                JourneyStop("high_pass", "Goblin-town - and deep below it, Gollum's riddles and a ring."),
                JourneyStop("carrock", "The eagles set them down; Beorn takes them in."),
                JourneyStop("elvenking", "Prisoners of the Wood-elves, until the barrels."),
                JourneyStop("esgaroth", "Lake-town welcomes them - and then the dragon comes."),
                JourneyStop("erebor", "The Lonely Mountain, Smaug's hoard, and the Battle of Five Armies."),
            ),
        ),
    )

    private const val COMMONS = "CC BY-SA 4.0 · Wikimedia Commons"

    val maps: List<AtlasMap> = listOf(
        AtlasMap(
            id = "middle_earth",
            title = "Middle-earth",
            about = "The whole of the north-west at the end of the Third Age, from the Grey Havens to Mordor. " +
                "Its places are marked - move to one to read about it.",
            assetDir = "maps/middle_earth",
            credit = "Map by k1tesurfen (mapome) · $COMMONS",
            places = places,
        ),
        AtlasMap(
            id = "the_shire",
            title = "The Shire",
            about = "The four Farthings, from Michel Delving in the west to Buckland and the Old Forest.",
            assetDir = "maps/the_shire",
            credit = "Map by Chiswick Chap · $COMMONS",
        ),
        AtlasMap(
            id = "pelennor",
            title = "Battle of the Pelennor Fields",
            about = "How the greatest battle of the age unfolded before Minas Tirith - Mordor's host, the Rohirrim, " +
                "and Aragorn's ships.",
            assetDir = "maps/pelennor",
            credit = "Map by Ian Alexander · $COMMONS",
        ),
        AtlasMap(
            id = "beleriand",
            title = "Beleriand",
            about = "The drowned lands of the First Age, told of in The Silmarillion - Doriath, Gondolin and Nargothrond.",
            assetDir = "maps/beleriand",
            credit = "Map by Chiswick Chap · $COMMONS",
        ),
        AtlasMap(
            id = "numenor",
            title = "Númenor",
            about = "The star-shaped island kingdom of the Second Age, home of Aragorn's forefathers, lost beneath the sea.",
            assetDir = "maps/numenor",
            credit = "Map by Ian Alexander · $COMMONS",
        ),
    )

    val middleEarth: AtlasMap get() = maps.first()

    fun map(id: String): AtlasMap = maps.first { it.id == id }

    fun journey(id: String): Journey = journeys.first { it.id == id }
}
