# The Lord of the Rings — TV

A private, kiosk-style Android TV app for watching *The Lord of the Rings* trilogy and
*The Rings of Power* from a USB pendrive. Built as a birthday gift.

## Install on the TV

Download `lotr-tv-<version>.apk` from the [Releases](../../releases) page, then either:

- **Over the network (adb):** enable *Developer options → USB/Network debugging* on the TV, then
  `adb connect <tv-ip>` and `adb install -r lotr-tv-<version>.apk`.
- **From a USB stick:** copy the APK onto the stick, open it with a file manager app on the TV,
  and allow *Install unknown apps* for that file manager when asked.

The app appears on the TV's home screen as **LOTR**. On first launch it asks to access videos on
the device — allow it, so it can read the pendrive.

## Pendrive layout

Put everything in a `LOTR` folder at the root of the pendrive. Folder and file names are flexible;
films are recognised by name (*fellowship*, *towers*, *return*), episodes by an episode code.

```
LOTR/
├── The Fellowship of the Ring (2001) …/…Fellowship…EXTENDED.2160p….mkv
├── The Two Towers (2002) …/…Two.Towers….mkv
├── The Return of the King (2003) …/…Return.Of.The.King….mkv
├── The Rings of Power/
│   ├── Season 1/…Rings.of.Power.S01E01….mkv      (also: 1x01, "Episode 01", "01 - Title")
│   └── Season 2/…
├── Trailers/                                        (optional)
│   ├── Fellowship of the Ring trailer.mp4           played on the Home banner, with sound
│   └── The Rings of Power trailer.mp4
└── Appendices/                                      (optional; also "Extras", "Bonus", …)
    └── Disc 1 - From Book to Vision/…mkv            shown first in Appendices
```

**Appendices** also streams the extended editions' behind-the-scenes documentaries from YouTube,
so the TV needs to be online for those.

Without trailers, the Home banner plays a silent loop of the film itself. To test with files
somewhere else, use **The Films → Change folder**.

## Building

Android Studio (AGP 9, compileSdk 37). `./gradlew assembleDebug` for a debug build.

Release builds are signed only if a git-ignored `keystore.properties` exists at the repo root:

```properties
storeFile=/absolute/path/to/lotr-release.jks
storePassword=…
keyAlias=lotr
keyPassword=…
```

then `./gradlew assembleRelease` → `app/build/outputs/apk/release/app-release.apk`.
**Keep the keystore and its passwords backed up** — a new version must be signed with the same
key to install over the old one (otherwise the app has to be uninstalled first, losing resume
positions).

See `CLAUDE.md` for architecture and conventions, and `third_party/` for font and icon licenses
(note: the Aniron font is personal-use only).
