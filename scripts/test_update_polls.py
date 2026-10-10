#!/usr/bin/env python3
"""Self-check for update_polls.py. Run: python3 site/scripts/test_update_polls.py"""
import json
import os
import sys
import tempfile
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import update_polls as u

# Columns in the same order as the real Wikipedia table; RZP-Zehut and Reservists-NEP span 2.
HEADER = """=== 2026 ===
{| class="wikitable"
! rowspan="2" | Fieldwork<br />date
! rowspan="2" | Polling firm
! rowspan="2" | Publisher
! rowspan="2" | Sample<br />size
! style="x" | [[Likud]]
! | [[Together (Israel)|Together]]
! colspan="2" | [[Religious Zionist Party|RZP]]-<br/>[[Zehut]]
! | [[Otzma Yehudit|Otzma]]
! | [[Blue and White (political party)|Blue & White]]
! | [[Shas]]
! | [[United Torah Judaism|UTJ]]
! | [[Yisrael Beiteinu]]
! | [[Ra'am]]
! | [[Joint List]]
! | [[The Democrats (Israel)|Dems]]
! | [[Yashar (political party)|Yashar]]
! colspan="2" | [[The Reservists (political party)|Reserv.]]-<br/>[[New Economic Party|NEP]]
! | {{small|[[Amcha Yisrael]]}}
! | [[Haredi Public]]
! rowspan="2" | Others
! | Gov.{{efn|name=x|note}}
|-
! style="background:red" |
|-
| {{Opdrts||6|Oct|2026}}
| colspan="22" |[[Likud]] signs something<ref>{{cite web|title=a|url=b}}</ref>
"""


def row(day, firm, pub, likud, winter="{{small|(2.1%)}}", res="4", together="13"):
    # Likud, Together, RZP(2), Otzma, B&W, Shas, UTJ, YB, Ra'am, JL, Dems, Yashar, Res(2), Amcha, Haredi, Others, Gov
    cells = [f"{{{{Opdrts||{day}|Oct|2026}}}}", f"style=background:x |{firm}",
             f"[[{pub}]]<ref name=r{day}>{{{{cite web|title=t|url=u}}}}</ref>", "500",
             f"style=\"background:#BBCDE4\" |'''{likud}'''", together, "colspan=2|6", "8",
             "{{small|(1.2%)}}", "8", "8", "9", "5", "8", "9", "22", f"colspan=2|{res}", winter,
             "{{N/A}}", "1.0%{{efn|Noam at 0.6%}}", "50"]
    return "|-\n" + "\n".join("|" + c for c in cells) + "\n"


WIKI = (HEADER
        + row(8, "Kantar", "Kan 11", 20, winter="4", together="12")
        + row(7, "Midgam", "HaHadashot 12", 26)          # latest Ch12 poll
        + row(3, "Midgam", "HaHadashot 12", 40)          # older Ch12 poll, ignored
        + row(5, "Direct Polls", "i24NEWS (Israeli TV channel)|i24 News", 23, res="{{small|(3.1%)}}")
        + "|-\n|{{Opdrts|1|2|Sep|2026}}\n|x\n|[[Channel 14 (Israel)|Channel 14]]\n|1\n" + "|9\n" * 18
        + "|}\n")

TODAY = date(2026, 10, 10)
DOC = {"game": {"x": 1},
       "parties": [
           {"name": "הליכוד", "seats": 30, "members": ["n"], "risk": 0},
           {"name": "ישר!", "seats": 20, "members": ["e"], "risk": 0},
           {"name": "וינטר", "seats": 3, "members": ["w"], "risk": 0},
           {"name": "המילואימניקים", "seats": 4, "members": ["h"], "risk": 0},
           {"name": "ש״ס", "seats": 1, "members": ["d"], "risk": 0, "lock": True},
           {"name": "הציונות הדתית", "seats": 1, "members": [], "risk": 99},
           {"name": "אחרים", "seats": 2, "members": [], "risk": 0}],
       "names": {"a": "b"}}

# risk curve
assert [u.risk_for(x) for x in (0, 3.9, 4, 4.5, 5, 5.5, 6, 7, 30)] == [85, 85, 45, 35, 25, 18, 12, 0, 0]

# parsing: event row skipped, out-of-window poll still parsed, merged cells and thresholds
polls, unmapped = u.parse_polls(WIKI)
assert len(polls) == 5, polls
assert unmapped == ["Haredi Public"], unmapped
kan = polls[0]
assert kan["publisher"] == "Kan 11" and kan["date"] == date(2026, 10, 8)
assert kan["seats"]["הציונות הדתית"] == 6 and kan["seats"]["כחול לבן"] == 0 and kan["seats"]["וינטר"] == 4

# method: latest per polling company, 21-day window, plain average
seats, used = u.compute(polls, TODAY)
assert [p["publisher"] for p in used] == ["Kan 11", "HaHadashot 12", "i24 News"], used
assert seats["הליכוד"] == 23                       # 20/26/23 averaged
assert seats["וינטר"] == 1.3                       # 4/0/0 averaged
assert seats["המילואימניקים"] == 2.7                # 4/4/0 averaged
assert seats["ביחד"] == 12.7                       # 12/13/13 averaged, one decimal
assert seats["ישר!"] == 22 and isinstance(seats["ישר!"], int)  # whole numbers stay ints

# file update: locks, אחרים untouched, key order, meta placement, formatting
with tempfile.TemporaryDirectory() as d:
    path = Path(d) / "copy.json"
    path.write_text(json.dumps(DOC, ensure_ascii=False, indent=2), encoding="utf-8")
    changed, summary = u.update_file(path, polls, TODAY)
    assert changed, summary
    text = path.read_text(encoding="utf-8")
    new = json.loads(text)
    assert text == json.dumps(new, ensure_ascii=False, indent=2)
    assert list(new) == ["game", "parties", "polls_meta", "names"], list(new)
    by = {p["name"]: p for p in new["parties"]}
    assert all(list(p) == ["name", "seats", "members", "risk", "lock"] for p in new["parties"])
    assert by["הליכוד"] == {"name": "הליכוד", "seats": 23, "members": ["n"], "risk": 0, "lock": False}
    assert by["וינטר"]["seats"] == 1.3 and by["וינטר"]["risk"] == 85
    assert by["הציונות הדתית"]["seats"] == 6 and by["הציונות הדתית"]["risk"] == 12
    assert by["ש״ס"] == DOC["parties"][4]                      # locked: untouched
    assert by["אחרים"] == {**DOC["parties"][6], "lock": False}  # never updated
    meta = new["polls_meta"]
    assert meta["updated"] == "2026-10-10" and meta["source"] == u.SOURCE_URL
    assert meta["polls"][0] == {"pollster": "Kantar / Kan 11", "date": "2026-10-08"}
    assert "kan_overrides" not in meta

    # same polls next day -> nothing changes, file not rewritten (no daily churn)
    before = os.stat(path).st_mtime_ns
    changed, summary = u.update_file(path, polls, date(2026, 10, 11))
    assert not changed and summary.startswith("no change"), summary
    assert os.stat(path).st_mtime_ns == before and path.read_text(encoding="utf-8") == text

    # no polls in window -> no change
    changed, summary = u.update_file(path, polls, date(2026, 12, 1))
    assert not changed and "WARNING" in summary

# election over -> no-op
u.LAST_RUN = date(2000, 1, 1)
assert u.main(["x", "/nonexistent.json"]) == 0

print("ok: all update_polls checks passed")
