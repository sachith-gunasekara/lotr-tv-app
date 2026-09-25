#!/usr/bin/env python3
"""
Checks every video in app/src/main/assets/appendices/catalog.json is still on YouTube and
embeddable (the app plays them in an embedded player), and that its recorded length matches.

  python3 tools/appendices/verify_catalog.py          # report
  python3 tools/appendices/verify_catalog.py --fix    # also update lengths that drifted

Uses YouTube's oEmbed endpoint and the public watch page - no API key.
"""
import json, os, re, sys, time, urllib.error, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CATALOG = os.path.join(ROOT, "app/src/main/assets/appendices/catalog.json")
HEADERS = {"User-Agent": "Mozilla/5.0", "Accept-Language": "en"}


def check(video_id):
    try:
        urllib.request.urlopen(f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={video_id}&format=json")
    except urllib.error.HTTPError as e:
        return f"oEmbed {e.code}", None
    page = urllib.request.urlopen(urllib.request.Request(f"https://www.youtube.com/watch?v={video_id}", headers=HEADERS)).read().decode()
    status = re.search(r'"playabilityStatus":\{"status":"(\w+)"', page)
    embed = re.search(r'"playableInEmbed":(true|false)', page)
    length = re.search(r'"lengthSeconds":"(\d+)"', page)
    if not status or status.group(1) != "OK":
        return f"status {status.group(1) if status else '?'}", None
    if not embed or embed.group(1) != "true":
        return "not embeddable", None
    return None, int(length.group(1)) if length else None


def main():
    fix = "--fix" in sys.argv
    catalog = json.load(open(CATALOG, encoding="utf-8"))
    problems = 0
    for category in catalog["categories"]:
        for shelf in category["collections"]:
            for video in shelf["videos"]:
                error, seconds = check(video["youtubeId"])
                where = f'{category["id"]}/{shelf["id"]}: {video["youtubeId"]} "{video["title"]}"'
                if error:
                    problems += 1
                    print(f"BROKEN   {where} - {error}")
                elif seconds and abs(seconds - video["seconds"]) > 2:
                    print(f"LENGTH   {where} - {video['seconds']}s in the file, {seconds}s on YouTube")
                    if fix:
                        video["seconds"] = seconds
                time.sleep(0.2)
    if fix:
        json.dump(catalog, open(CATALOG, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
        open(CATALOG, "a", encoding="utf-8").write("\n")
    total = sum(len(s["videos"]) for c in catalog["categories"] for s in c["collections"])
    print(f"{total} videos, {problems} broken")
    sys.exit(1 if problems else 0)


if __name__ == "__main__":
    main()
