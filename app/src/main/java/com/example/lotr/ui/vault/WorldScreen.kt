package com.example.lotr.ui.vault

import android.annotation.SuppressLint
import android.view.ViewGroup
import android.util.Log
import android.webkit.ConsoleMessage
import android.webkit.JavascriptInterface
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.compose.BackHandler
import androidx.compose.foundation.background
import androidx.compose.foundation.focusable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.input.key.Key
import androidx.compose.ui.input.key.KeyEventType
import androidx.compose.ui.input.key.key
import androidx.compose.ui.input.key.onKeyEvent
import androidx.compose.ui.input.key.type
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.viewinterop.AndroidView
import androidx.webkit.WebViewAssetLoader
import com.example.lotr.data.Atlas
import com.example.lotr.data.Journey
import com.example.lotr.ui.theme.LotrBackground
import org.json.JSONArray
import org.json.JSONObject

/** What the 3D scene last reported: the place in view, the journey stop, whether Back zooms out. */
private data class WorldState(val placeId: String? = null, val stop: Int = 0, val canZoomOut: Boolean = false)

/** Credit for the terrain, shown in the header. */
const val WORLD_CREDIT = "Terrain: the Arda elevation model (Outerra forums, via bburns/Arda)"

/**
 * Middle-earth in 3D: the Arda elevation model as terrain, with landmarks and walking travellers,
 * drawn by three.js in a WebView (assets/world, built by tools/world). The remote's keys are
 * forwarded to the scene as World.key(...); it reports back through a JavaScript interface, and
 * the header and place card are the same native overlays as the flat maps. With [journey], the
 * travellers walk its road stop by stop; without, it's an open world to roam.
 */
@SuppressLint("SetJavaScriptEnabled")
@Composable
fun WorldScreen(journey: Journey?, modifier: Modifier = Modifier) {
    val context = LocalContext.current
    var state by remember { mutableStateOf(WorldState()) }

    val webView = remember {
        // Served from https://appassets.androidplatform.net so the page can fetch its data and read
        // the heightmap's pixels (file:// URLs would block both).
        val assets = WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(context))
            .addPathHandler("/res/", WebViewAssetLoader.ResourcesPathHandler(context))
            .build()
        WebView(context).apply {
            layoutParams = ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
            setBackgroundColor(android.graphics.Color.rgb(14, 11, 8))
            // Keys come from Compose, never the page.
            isFocusable = false
            descendantFocusability = ViewGroup.FOCUS_BLOCK_DESCENDANTS
            settings.javaScriptEnabled = true
            settings.mediaPlaybackRequiresUserGesture = true
            addJavascriptInterface(
                object {
                    @JavascriptInterface
                    fun onState(json: String) {
                        val o = JSONObject(json)
                        post {
                            state = WorldState(
                                placeId = o.optString("place").takeIf { it.isNotEmpty() && it != "null" },
                                stop = o.optInt("stop", 0).coerceAtLeast(0),
                                canZoomOut = o.optBoolean("canZoomOut"),
                            )
                        }
                    }

                    @JavascriptInterface
                    fun onReady() = Unit
                },
                "Android",
            )
            // The scene's console (and any script error) goes to logcat, tagged World.
            webChromeClient = object : WebChromeClient() {
                override fun onConsoleMessage(message: ConsoleMessage): Boolean {
                    Log.println(
                        if (message.messageLevel() == ConsoleMessage.MessageLevel.ERROR) Log.ERROR else Log.DEBUG,
                        "World",
                        "${message.message()} (${message.sourceId().substringAfterLast('/')}:${message.lineNumber()})",
                    )
                    return true
                }
            }
            webViewClient = object : WebViewClient() {
                override fun shouldInterceptRequest(view: WebView, request: WebResourceRequest): WebResourceResponse? =
                    assets.shouldInterceptRequest(request.url)

                override fun onPageFinished(view: WebView, url: String) {
                    view.evaluateJavascript("World.start(${startConfig(journey)})", null)
                }
            }
            loadUrl("https://appassets.androidplatform.net/assets/world/index.html")
        }
    }
    DisposableEffect(webView) {
        onDispose { webView.destroy() }
    }

    fun send(key: String) = webView.evaluateJavascript("World.key('$key')", null)

    // Back pulls the camera out first; once it's as far out as it goes, Back leaves.
    BackHandler(enabled = journey == null && state.canZoomOut) { send("back") }

    val focusRequester = remember { FocusRequester() }
    LaunchedEffect(Unit) { focusRequester.requestFocus() }

    Box(
        modifier
            .fillMaxSize()
            .background(LotrBackground)
            .focusRequester(focusRequester)
            .focusable()
            .onKeyEvent { event ->
                if (event.type != KeyEventType.KeyDown) return@onKeyEvent false
                val key = when (event.key) {
                    Key.DirectionUp -> "up"
                    Key.DirectionDown -> "down"
                    Key.DirectionLeft -> "left"
                    Key.DirectionRight -> "right"
                    Key.DirectionCenter, Key.Enter, Key.NumPadEnter -> "ok"
                    Key.MediaFastForward, Key.ChannelUp -> "ff"
                    Key.MediaRewind, Key.ChannelDown -> "rw"
                    else -> null
                } ?: return@onKeyEvent false
                send(key)
                true
            },
    ) {
        AndroidView(factory = { webView }, modifier = Modifier.fillMaxSize())

        MapHeader(
            title = journey?.title ?: "Middle-earth in 3D",
            credit = if (journey != null) "Journey in 3D  ·  $WORLD_CREDIT" else WORLD_CREDIT,
            hint = if (journey != null) {
                "◀ ▶ walk to the previous / next stop  ·  ▲ ▼ closer / further  ·  OK overview  ·  « » turn"
            } else {
                "◀ ▲ ▼ ▶ travel  ·  OK zoom in  ·  Back zoom out  ·  « » turn"
            },
            modifier = Modifier.align(Alignment.TopStart),
        )
        MapFooter(
            journey = journey,
            stop = state.stop.coerceAtMost((journey?.stops?.size ?: 1) - 1),
            place = if (journey != null) Atlas.place(journey.stops[state.stop.coerceAtMost(journey.stops.lastIndex)].placeId)
            else state.placeId?.let { id -> Atlas.places.firstOrNull { it.id == id } },
            modifier = Modifier.align(Alignment.BottomStart),
        )
    }
}

/** What the scene needs to start: place names, and the journey's stops if there is one. */
private fun startConfig(journey: Journey?): String {
    val names = JSONObject().apply { Atlas.places.forEach { put(it.id, it.name) } }
    return JSONObject().apply {
        put("names", names)
        if (journey != null) {
            put("journey", JSONObject().put("id", journey.id).put("stops", JSONArray(journey.stops.map { it.placeId })))
        }
    }.toString()
}
