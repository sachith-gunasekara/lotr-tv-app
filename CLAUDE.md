# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

This is a freshly generated Android Studio project (single `:app` module, no custom code yet). The manifest declares no activities and there is no launcher `Activity` — running the app currently produces an application with no entry point. Treat any existing files under `app/src/main/java` as template boilerplate to build on, not established architecture.

- Package / namespace / applicationId: `com.example.lotr`
- Kotlin code style: `official` (set in `gradle.properties`)
- minSdk 24, targetSdk 36, compileSdk 36
- Java/Kotlin source/target compatibility: 11
- No Compose, no navigation library, no DI framework, no networking/persistence libraries are set up yet — only `androidx.appcompat`, `androidx.core-ktx`, and `material` are declared in `app/build.gradle.kts`. Confirm with the user before introducing a UI toolkit or architecture pattern (Views+XML vs. Compose, MVVM, etc.) since none has been chosen.

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
