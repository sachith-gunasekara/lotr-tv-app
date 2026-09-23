# LOTR Birthday TV App — Design Plan / PRD

**Project:** Custom Android TV app themed around The Lord of the Rings trilogy, for a birthday gift.
**Platform:** Android TV (Xiaomi Android TV device), local USB pendrive as the media source.
**Status:** Planning only — no code yet. Build session happens later in Android Studio.

---

## 1. Goal & Scope

A kiosk-style Android TV home screen (matching the reference mockup) that plays the 3 LOTR films from a pendrive, plus supplementary "lore" sections (behind-the-scenes via YouTube, maps/artbook viewer, reading material, soundtrack player) to make it feel like a bespoke Middle-earth media console rather than a generic player.

**MVP (must-have for the birthday):**
- Home screen with tile navigation matching the mockup style
- "The Films" section: browse 3 movies, play from USB, resume position
- Reliable USB pendrive detection + folder access on Xiaomi Android TV

**V2 (nice-to-have, can follow after MVP):**
- Appendices (YouTube behind-the-scenes embeds)
- Digital Vault (map/artbook image viewer)
- Reading Material (text/PDF viewer)
- Music & Scores (soundtrack player)
- Immersive extras (ambient screensaver, personal birthday message, themed transitions)

---

## 2. Screens

### 2.1 Home
- Full-bleed background art (rotates between the 3 films or a Middle-earth scene)
- Top bar: Home / Search / Settings icons (Settings can be minimal/hidden for a kiosk build)
- Horizontal row of tiles: **The Films | Appendices | Digital Vault | Reading Material | Music & Scores**
- Focus state = gold glow border (D-pad/remote navigation, not touch)
- Footer: date/time (optional, cosmetic)

### 2.2 The Films
- Grid/row of 3 posters (Fellowship, Two Towers, Return of the King)
- Selecting a poster → detail panel: synopsis, runtime, "Play" / "Resume at HH:MM:SS"
- Play launches the video player screen

### 2.3 Player
- Media3/ExoPlayer-based full screen player
- D-pad controls: play/pause, seek, chapter skip (optional)
- Save playback position on pause/exit → powers "Continue Watching"
- Show audio track info (e.g. Atmos badge) if available in file metadata

### 2.4 Appendices (V2)
- Rows of YouTube thumbnails grouped by topic (Cast, Weta Workshop, Score, Locations)
- Tapping plays the video via an embedded YouTube player (see §5.3)

### 2.5 Digital Vault (V2)
- Gallery of map/artbook images (pinch-zoom not applicable on TV — use D-pad pan/zoom instead)
- Optional: tappable hotspots on a Middle-earth map linking to lore text or a film chapter

### 2.6 Reading Material (V2)
- Simple paginated text/PDF viewer for letters, language notes, quotes

### 2.7 Music & Scores (V2)
- Track list + audio player (Media3) for the soundtrack
- Optional: simple waveform/visualizer, per-track "listen for this theme" notes

### 2.8 Immersive extras (V2/stretch)
- Idle screensaver: after N minutes, fade to looping Middle-earth scenery + score
- Hidden birthday tile/easter egg with a personal video message
- Custom font, ring-glow loading spinner, ember particle transitions
- Optional voice-line easter eggs on certain actions

---

## 3. Tech Stack

| Concern | Choice | Why |
|---|---|---|
| UI framework | **Jetpack Compose for TV** (`androidx.tv:tv-material`, `androidx.tv:tv-foundation`) | Modern, matches Google's own current-gen TV sample; flexible enough for custom kiosk styling |
| Video playback | **Media3 (ExoPlayer)** | Standard for local 4K/HDR/Atmos playback on Android TV |
| USB file access | **Storage Access Framework** (`ACTION_OPEN_DOCUMENT_TREE`) + persisted URI permission | Works across manufacturers without needing broad storage permissions; required on modern Android TV (scoped storage) |
| Image loading | **Coil** | Simple, Compose-friendly |
| YouTube embeds (V2) | WebView + YouTube IFrame Player API, or the `android-youtube-player` library (PierfrancescoSoffritti) | Google's native YouTube Android Player API is deprecated; IFrame-in-WebView is the current recommended approach |
| Local data | Simple local JSON/Kotlin data classes (no backend needed — content is fixed: 3 films + static metadata) | Overkill to use Room for 3 movies |
| PDF/text viewer (V2) | Simple Compose text renderer, or `AndroidPdfViewer` lib if using real PDFs | — |

---

## 4. USB / File Access Plan

- On first launch, prompt the user (via `ACTION_OPEN_DOCUMENT_TREE`) to select the folder on the pendrive containing the 3 movie files.
- Persist the granted URI permission (`takePersistableUriPermission`) so it survives reboots and doesn't need re-granting.
- On subsequent launches, re-resolve the saved tree URI, scan for the 3 expected filenames (or match by pattern, e.g. `*fellowship*`, `*towers*`, `*return*`), and map them to the hardcoded film metadata.
- Feed the resulting `content://` URI directly into Media3 via `MediaItem.fromUri(uri)` — ExoPlayer handles SAF URIs fine as long as read permission was granted correctly.
- **Known gotcha (found during research):** a common ExoPlayer/SAF bug is forgetting `FLAG_GRANT_READ_URI_PERMISSION` + `takePersistableUriPermission` together — without both, playback throws a `SecurityException` even though the picker succeeded. Handle this explicitly.
- **Xiaomi-specific note:** confirm the exact model's USB port version (2.0 vs 3.0) — very high-bitrate 4K remuxes can stutter on USB 2.0.

---

## 5. Reference Resources Found

### 5.1 Starter template / architecture reference
- **`android/tv-samples` (official Google repo)** — https://github.com/android/tv-samples
    - Contains **`JetStreamCompose`**: a Compose-for-TV sample app that already implements a Netflix-style browsing UI with rows/tiles, a detail screen, and **Media3/ExoPlayer integration**. This is the closest existing reference to your mockup's layout and is the recommended starting skeleton to fork/adapt rather than starting from a blank project.
    - Also includes `Leanback` and `LeanbackShowcase` samples if you want the older (non-Compose) approach for comparison.

### 5.2 Local/USB playback reference
- ExoPlayer's own demo app was updated to properly support SAF for local file access — relevant GitHub issue/PR: `google/ExoPlayer#6045` (scoped storage + SAF handling in the official demo app).
- Small focused example of SAF for USB OTG read/write: `android-misc-examples/StorageAccessFrameworkExample` on GitHub.

### 5.3 Full-featured open-source TV app (for UI/UX + code pattern ideas)
- **Jellyfin Android TV** — https://github.com/jellyfin/jellyfin-androidtv
    - A complete, mature open-source Android TV media app (home rows, detail pages, video player, resume/continue-watching, backdrop art). Good to browse for UX patterns and Media3 integration conventions, even though it's server-based rather than local-USB-based.

### 5.4 YouTube embedding (for Appendices, V2)
- **`android-youtube-player`** by PierfrancescoSoffritti — https://github.com/PierfrancescoSoffritti/android-youtube-player — actively maintained wrapper around the IFrame Player API in a WebView; this is Google's currently-recommended approach since the old native YouTube Android Player API is deprecated.

---

## 6. Suggested Build Phases

1. **Fork/adapt JetStreamCompose** as the project skeleton — strip out its network/streaming data layer, replace with hardcoded 3-film metadata.
2. **Build the USB picker + SAF persistence flow**, wire selected file URIs into Media3.
3. **Restyle the UI** to match the mockup (gold/dark theme, custom tile art, fonts).
4. **Add resume-position tracking** (DataStore/SharedPreferences keyed by film).
5. *(V2)* Add Appendices (YouTube), Digital Vault (image gallery), Reading Material, Music player.
6. *(V2/stretch)* Add immersive extras (screensaver, birthday easter egg, transitions).
7. Sideload + test on the actual Xiaomi Android TV device with the real pendrive and real 4K files.

---

## 7. Open Items / Things to Confirm Before Building
- Exact Xiaomi Android TV model (chipset affects 4K HEVC + Atmos passthrough support).
- Exact video file codec/container for the 3 films (H.265/HEVC vs H.264, MKV vs MP4).
- USB port version on the device (2.0 vs 3.0) — affects safe max bitrate.
- Source images/assets for posters, background art, maps (need to be supplied by you — none are downloaded or included here).
- Which YouTube videos to curate for "Appendices" (official channel links, or your own picks).
- Whether "Reading Material" content will be scanned text/PDFs you own, or short custom-written blurbs.
- **Confirm the Xiaomi TV has a document-picker app** (a file manager implementing `DocumentsProvider`, e.g. a pre-installed "Files" app) for the `ACTION_OPEN_DOCUMENT_TREE` flow in §4 to work at all. Found while building: the stock `Television_1080p` emulator image ships with no such app installed, so the picker intent has nothing to resolve to. Real Xiaomi TV units commonly include one, but this needs verifying on the actual device before relying on it for the birthday build — if it's missing, the fallback is either sideloading a minimal file-manager APK or replacing the folder picker with a manual path/volume scan.