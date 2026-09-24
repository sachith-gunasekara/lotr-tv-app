# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

This is the **LOTR Birthday TV App** — a kiosk-style Android TV app for playing the LOTR trilogy from a USB pendrive, plus supplementary lore sections. Full design/product context lives in `plan.md`; read it before making product decisions. Built incrementally as small, individually-reviewable PRs against `main` in the private GitHub repo `sachith-gunasekara/lotr-tv-app`.

- Package / namespace / applicationId: `com.example.lotr`
- Kotlin code style: `official` (set in `gradle.properties`); Kotlin is AGP 9's **built-in Kotlin** (no `org.jetbrains.kotlin.android` plugin — that's a hard build error under AGP 9) — Kotlin version is set via `libs.versions.toml`'s `kotlin` entry, currently 2.2.10, and doubles as the version for the `org.jetbrains.kotlin.plugin.compose` compiler plugin.
- minSdk 24, targetSdk 37, compileSdk 37 (bumped from 36 — current Compose BOMs require compileSdk 37/Android 17). Java/Kotlin source/target compatibility: 11.
- **UI toolkit: Jetpack Compose for TV** (`androidx.tv:tv-material`, `androidx.tv:tv-foundation`), chosen per `plan.md` §3. No classic Views/XML-layout UI, no `androidx.appcompat`/`material` (views) — those were removed since nothing uses them. `AndroidManifest.xml`'s `Theme.LOTR` only sets the pre-Compose window background; all real UI/theming is in `ui/theme/`.
- **No navigation library** — screen count is small (Home/Films/Player, kiosk-style, no deep links), so navigation is a plain sealed-class state machine rather than Navigation-Compose. Revisit only if the screen graph grows meaningfully.
- **Images**: film art is bundled — `res/drawable-nodpi/backdrop_*.jpg` are stills extracted from the owner's own film files (VLC scene filter), used for the Home hero and Films backdrops. **Coil** (`coil-compose` + `coil-network-okhttp`) loads only the remote YouTube thumbnails in Appendices; it's pinned at 3.3.0 because later Coil releases need Kotlin stdlib 2.3+/2.4 and the project compiles with Kotlin 2.2.
- **Appendices**: a curated YouTube catalog (`data/Appendices.kt`, each video checked embeddable) played in-app by `YouTubePlayerScreen` — `android-youtube-player` (IFrame API in a WebView) with YouTube's controls hidden, driven by the same remote keys and `PlayerOverlay` as the film player; resume positions are saved under `yt_<id>` without becoming the Home banner's last-watched title (`saveProgress(markLastWatched = false)`). Videos under an `Appendices`/`Extras`/`Bonus`/… folder on the drive are extras, never matched as films. The app needs `INTERNET` for this only.
- **The Vault** (`ui/vault/`): maps are tile pyramids in `assets/maps/<id>/` (512 px WebP tiles, `meta.json`, `preview.webp`), built by `tools/maps/build_maps.py` from CC BY-SA SVGs (`third_party/maps/NOTICE.md`) — re-inked in the palette, never hand-edited. `ZoomableTiles` + `MapCamera` draw only visible tiles at the matching level over the coarsest one (no image library; `MapTileRepository` decodes with `BitmapFactory` into an LruCache). `MapScreen` is D-pad driven: arrows pan, OK zooms in (onto the place under the reticle), Back zooms out then leaves; with a `Journey` it steps stop to stop instead. Place coordinates in `Atlas.kt` are fractions of the Middle-earth map, measured from its own town marks/labels. Drive pictures (`Art`/`Artwork`/`Gallery` folder, `READ_MEDIA_IMAGES`) open in the same viewer as one-tile sources.
- **Reading** (`ui/reading/`): bundled original texts in `data/Reading.kt` (Tale of Years, Who's Who, Tongues, sayings) shown on the usual shelves; cards are ember placeholders with a large Aniron glyph (year/initial/word), and `ReaderScreen` is a book-like page (▲ ▼ scroll, ◀ ▶ turn). Letters on the drive must be **pictures** (`Letters` folder, `PictureFolder.Letters`) — with only `READ_MEDIA_*` permissions Android hides `.txt`/PDF files on shared/USB storage — and open in the Vault's zoomable viewer.
- **Look & feel**: warm "candlelit console" — umber backgrounds (`Modifier.lotrBackground()`), parchment text, burnished gold focus with glow. Titles/labels use **Aniron** (`res/font/aniron*.ttf`), a replica of the films' credits lettering — **personal-use-only license** (`third_party/aniron/NOTICE.md`); swap it out before any public/commercial release. Its lowercase letters are the credits' small capitals, so never `uppercase()` text. Body text uses **Cormorant Garamond** (SIL OFL, `third_party/cormorant-garamond/`); tile icons are **Material Symbols** vectors (`res/drawable/ic_*.xml`, Apache 2.0 — `third_party/material-symbols/`). The owner's mockup is inspiration for the spirit, not a spec to copy literally.
- **Cards**: `WarmCard` — no borders ever; rest on a soft dark shadow, lift (scale) onto a warm amber glow when focused. Episode art comes from `ThumbnailRepository` (a frame decoded from the file, cached on disk).
- **Shared section layout** (`ui/components/`): every browsing screen is built from the same parts — `ImmersiveBackdrop` (focused item's art, full-bleed), `DetailsPanel` (overline / title / meta / body / gold hint), `ShelfTitle` + `ShelfRow` of `ShelfCard`s, `ShelfColumn` when there are more shelves than fit (pins the focused shelf to the top), and `StatusMessage` for empty/blocked states. New sections should reuse these rather than restyle.
- **Home banner**: features the last-watched title (`lastWatchedId`; film or episode). After 5 s at rest it crossfades into a preview: a trailer from the drive (any video with "trailer" in its name — matched to a film by its keywords, or to the series by "Rings of Power"; trailers are excluded from film/episode matching) with sound, else a muted loop of the title itself starting at `Film.backdropAtMs`, the frame the still was taken from. Video in cards must use `ContentFrame(surfaceType = SURFACE_TYPE_TEXTURE_VIEW)` — a SurfaceView ignores Compose clipping and alpha.
- **Focus on TV**: every screen requests initial focus explicitly (after `withFrameNanos {}` when the target is in a lazy list), since only a cold window gets automatic first focus. tv-material3's `Carousel` manages its own focus, so route D-pad moves out of it with key handlers, not `focusProperties`.
- **Playback**: Media3/ExoPlayer (`androidx.media3:media3-exoplayer`, `media3-ui-compose` for the `PlayerSurface` composable), added when the player screen lands.
- **USB access**: direct file reads with the video-read permission (`READ_MEDIA_VIDEO`, or `READ_EXTERNAL_STORAGE` on API ≤32; `READ_MEDIA_IMAGES` too, asked on entering the Vault), not the SAF picker — Android TV builds often ship without a document-picker app (the stock TV emulator has none). By default `StorageRepository` looks for a `LOTR` folder at the root of the first removable volume (the pendrive) and scans it plus subfolders (films are typically one folder per film); a custom folder chosen in the in-app `FolderBrowser` overrides it and is persisted. To test the pendrive path on the emulator: `adb shell sm set-virtual-disk true`, then `sm partition <disk> public`.
- **Persistence**: `androidx.datastore:datastore-preferences` for the custom-folder path and per-film resume position. No Room — content is fixed (3 hardcoded films), so a database is overkill.
- No DI framework, and no networking code of our own — OkHttp is there only as Coil's image fetcher, and the YouTube player talks to YouTube itself.

### Source layout (UI/data separation)

Single `:app` module, but packages are split so UI and non-UI code don't mix:

- `com.example.lotr.data` — domain models (incl. `ReleaseTags` parsed from filenames), repositories (film metadata, storage, playback position), and `FilmLibrary` — the shared, auto-rescanning film scan both Home and Films read. No Compose imports here.
- `com.example.lotr.ui` — `theme/` (Compose theme/colors), one package per screen (`home/`, `library/`, `appendices/`, `vault/`, `reading/`, `player/`), plus shared `components/`. No direct file/URI/DataStore access here — goes through `data` repositories.
- `MainActivity` is the sole `Activity` and TV launcher entry point (`LEANBACK_LAUNCHER` intent filter); it just hosts the Compose tree.

## Workflow

One feature per PR against `main`. GitHub Actions (`.github/workflows/ci.yml`) runs `assembleDebug testDebugUnitTest lintDebug` on every PR; merge (squash) only when it's green and the change has been checked on the TV emulator.

## Common commands

Run all commands from the repository root using the Gradle wrapper.

```bash
# Build debug APK
./gradlew assembleDebug

# Build and install debug APK on a connected device/emulator
./gradlew installDebug

# Run local (JVM) unit tests — app/src/test
./gradlew testDebugUnitTest

# Run a single local unit test class
./gradlew testDebugUnitTest --tests "com.example.lotr.ExampleUnitTest"

# Run a single local unit test method
./gradlew testDebugUnitTest --tests "com.example.lotr.ExampleUnitTest.addition_isCorrect"

# Run instrumented tests — app/src/androidTest (requires connected device/emulator)
./gradlew connectedDebugAndroidTest

# Lint
./gradlew lint

# Full build (compiles, runs unit tests and lint)
./gradlew build

# Clean build outputs
./gradlew clean
```

## Architecture

- `app/src/main/AndroidManifest.xml` — declares `MainActivity` (TV launcher), the video-read permissions, and `leanback` feature.
- `app/src/main/res/` — standard resource set (launcher icons, `colors.xml`, `strings.xml`, `themes.xml`, backup/data-extraction XML rules).
- `app/src/test/` — JVM unit tests (JUnit 4, run via `testDebugUnitTest`).
- `app/src/androidTest/` — instrumented tests (AndroidX Test + Espresso, run via `connectedDebugAndroidTest`).
- Gradle version catalog lives at `gradle/libs.versions.toml` — add new dependencies/plugins there rather than hardcoding versions in `app/build.gradle.kts`.
- Single-module project (`settings.gradle.kts` includes only `:app`); there is no multi-module structure to navigate.
