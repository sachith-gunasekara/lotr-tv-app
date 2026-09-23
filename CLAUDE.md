# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

This is the **LOTR Birthday TV App** — a kiosk-style Android TV app for playing the LOTR trilogy from a USB pendrive, plus supplementary lore sections. Full design/product context lives in `plan.md`; read it before making product decisions. Built incrementally as small, individually-reviewable PRs against `main` in the private GitHub repo `sachith-gunasekara/lotr-tv-app`.

- Package / namespace / applicationId: `com.example.lotr`
- Kotlin code style: `official` (set in `gradle.properties`); Kotlin is AGP 9's **built-in Kotlin** (no `org.jetbrains.kotlin.android` plugin — that's a hard build error under AGP 9) — Kotlin version is set via `libs.versions.toml`'s `kotlin` entry, currently 2.2.10, and doubles as the version for the `org.jetbrains.kotlin.plugin.compose` compiler plugin.
- minSdk 24, targetSdk 37, compileSdk 37 (bumped from 36 — current Compose BOMs require compileSdk 37/Android 17). Java/Kotlin source/target compatibility: 11.
- **UI toolkit: Jetpack Compose for TV** (`androidx.tv:tv-material`, `androidx.tv:tv-foundation`), chosen per `plan.md` §3. No classic Views/XML-layout UI, no `androidx.appcompat`/`material` (views) — those were removed since nothing uses them. `AndroidManifest.xml`'s `Theme.LOTR` only sets the pre-Compose window background; all real UI/theming is in `ui/theme/`.
- **No navigation library** — screen count is small (Home/Films/Player, kiosk-style, no deep links), so navigation is a plain sealed-class state machine rather than Navigation-Compose. Revisit only if the screen graph grows meaningfully.
- **No Coil / image-loading library** — poster and background art are bundled drawable resources (`painterResource`), not loaded dynamically. Add Coil only if a real dynamic-image use case shows up.
- **Playback**: Media3/ExoPlayer (`androidx.media3:media3-exoplayer`, `media3-ui-compose` for the `PlayerSurface` composable), added when the player screen lands.
- **USB access**: Storage Access Framework (`ACTION_OPEN_DOCUMENT_TREE` + `androidx.documentfile`), added when the storage layer lands. Remember: `takePersistableUriPermission` alone isn't enough — ExoPlayer reads also depend on the picker having granted read access; see `plan.md` §4 for the known gotcha.
- **Persistence**: `androidx.datastore:datastore-preferences` for the persisted USB tree URI and per-film resume position. No Room — content is fixed (3 hardcoded films), so a database is overkill.
- No DI framework, no networking library — none needed for this app.

### Source layout (UI/data separation)

Single `:app` module, but packages are split so UI and non-UI code don't mix:

- `com.example.lotr.data` — domain models, repositories (film metadata, storage/SAF, playback position). No Compose imports here.
- `com.example.lotr.ui` — `theme/` (Compose theme/colors), one package per screen (`home/`, `films/`, `player/`), plus shared `components/`. No direct file/URI/DataStore access here — goes through `data` repositories.
- `MainActivity` is the sole `Activity` and TV launcher entry point (`LEANBACK_LAUNCHER` intent filter); it just hosts the Compose tree.

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

- `app/src/main/AndroidManifest.xml` — application manifest; currently declares only backup/data-extraction rules, icon, and theme, with no `<activity>` entries.
- `app/src/main/res/` — standard resource set (launcher icons, `colors.xml`, `strings.xml`, day/night `themes.xml`, backup/data-extraction XML rules).
- `app/src/test/` — JVM unit tests (JUnit 4, run via `testDebugUnitTest`).
- `app/src/androidTest/` — instrumented tests (AndroidX Test + Espresso, run via `connectedDebugAndroidTest`).
- Gradle version catalog lives at `gradle/libs.versions.toml` — add new dependencies/plugins there rather than hardcoding versions in `app/build.gradle.kts`.
- Single-module project (`settings.gradle.kts` includes only `:app`); there is no multi-module structure to navigate.
