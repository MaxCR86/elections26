#!/usr/bin/env python3
"""Daily poll update for copy.json (stdlib only).

Source: English Wikipedia, "Opinion polling for the 2026 Israeli legislative election",
section "Seat projections / 2026" (wikitext via the MediaWiki API).

Method: each polling company's latest poll from the last 21 days (one vote per company, whichever
outlet published it), plain average per party. Fails safe: any error means no change and exit 0
with a warning.

Usage: python3 scripts/update_polls.py [path/to/copy.json]
"""
import json
import re
import sys
import urllib.parse
import urllib.request
from datetime import date, datetime, timedelta, timezone
from pathlib import Path

PAGE = "Opinion_polling_for_the_2026_Israeli_legislative_election"
SOURCE_URL = f"https://en.wikipedia.org/wiki/{PAGE}"
API_URL = "https://en.wikipedia.org/w/api.php?" + urllib.parse.urlencode(
    {"action": "parse", "page": PAGE, "prop": "wikitext", "format": "json",
     "formatversion": "2", "redirects": "1"})
UA = "elections26-poll-bot/1.0 (https://github.com/MaxCR86/elections26)"

WINDOW_DAYS = 21
LAST_RUN = date(2026, 10, 28)
SKIP = {"אחרים"}      # not a real party, never updated
MIN_MAPPED = 10       # fewer mapped columns than this = table changed shape, bail out

# Wikipedia column (first wikilink target in the header cell) -> Hebrew party name in copy.json
COLUMNS = {
    "Likud": "הליכוד",
    "Together (Israel)": "ביחד",
    "Religious Zionist Party": "הציונות הדתית",   # RZP-Zehut technical bloc
    "Otzma Yehudit": "עוצמה יהודית",
    "Blue and White (political party)": "כחול לבן",
    "Shas": "ש״ס",
    "United Torah Judaism": "יהדות התורה",
    "Yisrael Beiteinu": "ישראל ביתנו",
    "Ra'am": "רע״מ",
    "Joint List": "חד״ש-תע״ל",                   # Hadash-Ta'al runs as the Joint List
    "The Democrats (Israel)": "הדמוקרטים",
    "Yashar (political party)": "ישר!",
    "The Reservists (political party)": "המילואימניקים",  # Reservists-NEP
    "Amcha Yisrael": "וינטר",                     # Ofer Winter's party
}
# header columns that are not parties at all (not reported as unmapped)
META_COLS = {"Fieldwork date", "Polling firm", "Publisher", "Sample size", "Others", "Gov."}

RISK_ANCHORS = [(4, 45), (5, 25), (6, 12), (7, 0)]


def risk_for(seats):
    if seats < RISK_ANCHORS[0][0]:
        return 85
    for (x0, y0), (x1, y1) in zip(RISK_ANCHORS, RISK_ANCHORS[1:]):
        if seats <= x1:
            return round(y0 + (y1 - y0) * (seats - x0) / (x1 - x0))
    return 0


# ---------- wikitext parsing ----------

def split_top(s, sep):
    """Split on sep outside {{ }} and [[ ]]."""
    out, depth, i, start = [], 0, 0, 0
    while i < len(s):
        two = s[i:i + 2]
        if two in ("{{", "[["):
            depth += 1; i += 2; continue
        if two in ("}}", "]]"):
            depth = max(0, depth - 1); i += 2; continue
        if depth == 0 and s.startswith(sep, i):
            out.append(s[start:i]); i += len(sep); start = i; continue
        i += 1
    out.append(s[start:])
    return out


def strip_refs(s):
    s = re.sub(r"<ref[^>/]*/>", "", s)
    s = re.sub(r"<ref[^>]*>.*?</ref>", "", s, flags=re.S)
    return re.sub(r"\{\{efn\|.*", "", s, flags=re.S)  # efn is always the cell's tail


def cell(raw):
    """-> (colspan, content) for one table cell (leading '|' or '!' already removed)."""
    parts = split_top(raw, "|")
    attrs, content = (parts[0], "|".join(parts[1:])) if len(parts) > 1 else ("", raw)
    m = re.search(r'colspan\s*=\s*"?(\d+)', attrs)
    return (int(m.group(1)) if m else 1), strip_refs(content).strip()


def plain(s):
    s = re.sub(r"\[\[(?:[^|\]]*\|)?([^\]]*)\]\]", r"\1", s)
    s = re.sub(r"\{\{small\|(.*?)\}\}", r"\1", s)
    return re.sub(r"<br\s*/?>", " ", s).replace("'''", "").replace("''", "").strip()


def seats_value(s):
    """Seat count from a cell; below threshold, percentages, N/A, blank -> 0."""
    s = plain(s)
    if "%" in s:
        return 0
    m = re.fullmatch(r"(\d+)", s)
    return int(m.group(1)) if m else 0


def poll_date(s):
    m = re.search(r"\{\{Opdrts\|([^}]*)\}\}", s)
    if not m:
        return None
    p = [x.strip() for x in m.group(1).split("|") if x.strip()]
    day, mon, year = p[-3], p[-2], p[-1]
    mon = mon if mon.isdigit() else str(datetime.strptime(mon[:3], "%b").month)
    return date(int(year), int(mon), int(day))


def table_rows(wikitext):
    start = wikitext.index("=== 2026 ===")
    t0 = wikitext.index("{|", start)
    t1 = wikitext.index("\n|}", t0)
    rows, cur = [], []
    for line in wikitext[t0:t1].split("\n")[1:]:
        if line.startswith("|-"):
            if cur:
                rows.append(cur)
            cur = []
        elif line.startswith(("|", "!")) and not line.startswith("|+"):
            for c in split_top(line[1:], "||" if line[0] == "|" else "!!"):
                cur.append(c)
        elif cur and line.strip():
            cur[-1] += "\n" + line  # continuation of a multi-line cell
    if cur:
        rows.append(cur)
    return rows


def parse_polls(wikitext):
    """-> (polls, unmapped). poll = {date, firm, publisher, seats: {hebrew: int}}"""
    rows = table_rows(wikitext)
    header, cols = rows[0], []
    for raw in header:
        span, content = cell(raw)
        link = re.search(r"\[\[([^|\]]+)", content)
        cols += [link.group(1).strip() if link else plain(content)] * span
    unmapped = sorted({c for c in cols if c not in COLUMNS and c not in META_COLS})
    if sum(c in COLUMNS for c in set(cols)) < MIN_MAPPED:
        raise ValueError(f"table shape changed, columns: {cols}")
    polls = []
    for row in rows[2:]:
        if len(row) < len(cols) // 2:
            continue  # event row ("colspan=22 | Deadline for ...")
        values = []
        for raw in row:
            span, content = cell(raw)
            values += [content] + [None] * (span - 1)  # merged cell counts once
        if len(values) < len(cols) - 1:
            continue  # broken row
        d = poll_date(values[0])
        if not d:
            continue
        seats = {}
        for name, v in zip(cols, values):
            if name in COLUMNS and v is not None:
                seats[COLUMNS[name]] = seats.get(COLUMNS[name], 0) + seats_value(v)
        polls.append({"date": d, "firm": plain(values[1]), "publisher": plain(values[2]),
                      "seats": seats})
    return polls, unmapped


# ---------- method ----------

def compute(polls, today):
    """-> (seats {hebrew: number}, used polls)."""
    cutoff = today - timedelta(days=WINDOW_DAYS)
    latest = {}  # one vote per polling company (Kantar polls for Kan and Israel Hayom: one vote)
    for p in polls:
        if cutoff <= p["date"] <= today:
            k = p["firm"].lower()
            if k not in latest or p["date"] > latest[k]["date"]:
                latest[k] = p
    used = sorted(latest.values(), key=lambda p: (p["date"], p["publisher"]), reverse=True)
    if not used:
        return {}, []
    seats = {}
    for name in COLUMNS.values():
        vals = [p["seats"].get(name, 0) for p in used]
        v = round(sum(vals) / len(vals), 1)
        seats[name] = int(v) if v == int(v) else v
    return seats, used


def apply(doc, seats, used, today):
    """Return a new doc (same key order) with seats/risk/lock/polls_meta updated."""
    parties = []
    for p in doc["parties"]:
        q = {}
        for k, v in p.items():
            if k == "range":
                continue
            q[k] = v
            if k == "seats" and "range" in p:
                q["range"] = p["range"]
            if k == "risk" and "lock" not in p:
                q["lock"] = False
        q.setdefault("lock", False)
        if not q["lock"] and q["name"] not in SKIP and q["name"] in seats:
            q["seats"] = seats[q["name"]]
            vals = [u["seats"].get(q["name"], 0) for u in used]   # lowest to highest poll: the game rolls each hit inside this range
            q = {k2: v2 for k2, v2 in q.items() if k2 != "range"}
            q = dict(list(q.items())[:2] + [("range", [min(vals), max(vals)])] + list(q.items())[2:])
            q["risk"] = risk_for(seats[q["name"]])
        parties.append(q)
    old_meta = doc.get("polls_meta", {})
    meta = {"updated": old_meta.get("updated", today.isoformat()),
            "source": SOURCE_URL,
            "polls": [{"pollster": f"{p['firm']} / {p['publisher']}", "date": p["date"].isoformat()}
                      for p in used]}
    new = {}
    for k, v in doc.items():
        if k == "polls_meta":
            continue
        new[k] = parties if k == "parties" else v
        if k == "parties":
            new["polls_meta"] = meta
    if new != doc:
        meta["updated"] = today.isoformat()  # date of the last real change, so no daily churn
    return new


def update_file(path, polls, today):
    """-> (changed, summary)."""
    text = Path(path).read_text(encoding="utf-8")
    doc = json.loads(text)
    seats, used = compute(polls, today)
    if not used:
        return False, f"WARNING: no polls in the last {WINDOW_DAYS} days, no change"
    new = apply(doc, seats, used, today)
    out = json.dumps(new, ensure_ascii=False, indent=2)
    if out == text:
        return False, f"no change ({len(used)} polls)"
    Path(path).write_text(out, encoding="utf-8")
    moved = [f"{p['name']} {o['seats']}->{p['seats']}" for o, p in zip(doc["parties"], new["parties"])
             if o.get("seats") != p.get("seats")]
    return True, (f"updated from {len(used)} polls; "
                  f"changed: {', '.join(moved) or 'meta only'}")


def fetch_wikitext():
    req = urllib.request.Request(API_URL, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)["parse"]["wikitext"]


def main(argv):
    path = argv[1] if len(argv) > 1 else Path(__file__).resolve().parent.parent / "copy.json"
    today = datetime.now(timezone.utc).date()
    if today > LAST_RUN:
        print("election over, nothing to do")
        return 0
    try:
        polls, unmapped = parse_polls(fetch_wikitext())
        changed, summary = update_file(path, polls, today)
    except Exception as e:  # ponytail: fail safe, the site keeps yesterday's numbers
        print(f"WARNING: poll update skipped: {type(e).__name__}: {e}")
        return 0
    print(summary + (f"; unmapped columns: {', '.join(unmapped)}" if unmapped else ""))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
