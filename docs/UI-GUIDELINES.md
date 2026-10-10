# UI/UX guidelines

Founder-approved 2026-08-05. **These apply to all projects, not just this one** — copy this
file forward. Derived from principles observed in BPMxReuveni (פעם בעכשיו); nothing was
copied from it, and no project should end up looking like another.

Each item was approved individually. Items considered and **not** adopted are listed at the
bottom so nobody re-proposes them.

## Layout & density

1. **The phone is the layout.** One column, ~480px max, centred on wider screens. Not
   "responsive down to mobile" — designed at phone width first and widened up. A layout that
   only works once it has 900px has been designed backwards.

2. **Five type sizes and two weights. Total.** A hard cap, not a guideline. A small kit is
   what makes a page look composed rather than assembled; the alternative is eighteen sizes
   and three families arriving one component at a time. If a new size feels necessary, one of
   the existing five is being used wrong.

3. **One radius scale** — lg / md / sm / pill — applied consistently, and generous enough
   that nothing reads as a cut rectangle.

## Colour & depth

4. **Invert roles once, at the container.** When a region flips its treatment (a dark bar on
   a light page), the container redefines the role variables and everything inside resolves
   automatically. Never restate the inversion per element — that is how a design system rots
   into a pile of overrides.

5. **One shadow language.** A single defined depth treatment across the product. Ad-hoc
   per-component shadows are how a UI stops looking like one thing.

*Note: 4 presupposes named role variables exist. The rejected item below was the stricter
rule that a raw hex in a component is a defect — roles are still the norm, a stray hex is
just not a hanging offence.*

## Words

6. **Show, don't explain.** An image or a visual device does the work prose would. Whatever
   explanation genuinely survives that hides behind a discreet "i" — it does not sit on the
   page. Minimal titles. Helper paragraphs under form fields are a defect, not a courtesy.

7. **Copy is data, not code.** Strings live in one editable place so wording changes without
   a code edit or a deploy. This is real work up front and is worth it: copy is the part of a
   product that changes most and is cheapest to get wrong.

8. **Empty states are never blank.** One short sentence plus the gesture that fills the
   screen. A blank screen is always a bug — including the case where content is still
   streaming in, which is the one that actually ships.

9. **Comments record why, including what was rejected.** Design and code comments capture
   reasoning and abandoned alternatives, so a settled decision is not re-litigated six weeks
   later by someone who cannot see why the obvious approach was avoided.

## Considered and not adopted

- **Density over whitespace** — rejected as a blanket rule. Density is a per-screen judgement,
  not a standing preference.
- **Named roles, never raw hex** — the strict form was rejected. See the note above.
- **Annotate contrast ratios in comments** — rejected as ceremony. Accessibility still holds
  (no colour-only state signals, ≥44px tap targets, nothing hover-only); it just is not
  documented ratio by ratio.

## Tooling — impeccable is mandatory in the design phase

`impeccable` (impeccable.style) is the founder's preferred design tooling and **every
project runs it during its design phase**, not as an optional polish step. It is a check on
these guidelines, not a replacement for them.

Install (also wired into `scripts/setup.sh`, so a fresh sandbox self-heals):

```
npx --yes impeccable@latest install     # or: /plugin marketplace add pbakaus/impeccable
```

Two passes, both required before any UI is called done:

```
node .claude/skills/impeccable/scripts/detect.mjs app lib          # static source scan

CI=1 PUPPETEER_EXECUTABLE_PATH=/opt/pw-browsers/chromium \
  node .claude/skills/impeccable/scripts/detect.mjs --viewport 390x844 \
  http://localhost:3000/ <every other route>                       # live scan
```

**Both matter — they find different things.** On this project the static scan returned zero
findings while the live scan found a WCAG contrast failure on the token carrying every label
and hint in the product. Never report the static pass alone as "clean".

Landmines, paid for once:
- URL scanning needs `puppeteer` as a dev dependency (install with `PUPPETEER_SKIP_DOWNLOAD=1`
  where a Chromium already exists).
- Running as root additionally needs `CI=1` — that is what makes the detector pass
  `--no-sandbox`. Without it the browser exits immediately and the scan looks broken.
- Scan at **390x844**, not the 1280x800 default. A phone-first product audited at desktop
  width is not audited.
