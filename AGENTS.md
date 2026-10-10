# elections26: election-night party invite (DiMax)

Live at https://elections26.dimaxtlv.com (GitHub Pages, noindex). A Hebrew RTL arcade-game invite: DiMax ident, INSERT VOTE, a threshold scene, character select, a fight, the poster, then victory, CONTINUE? and credits.

## Where things live
- **This repo is the published build.** The source lives on Max's Mac at `~/Documents/Vibe/TempConv/election-invite/`, outside this repo:
  - `final/`: page source, `copy.json`, `admin.html`, images and audio
  - `build_site.py`: builds into this repo
  - `gen_*.py`: fal.ai asset scripts
  - `analytics/`: the Cloudflare stats Worker
- `copy.json`: all text and game settings.
  - Text fields are option sets `[{t, on}]`; each run picks one of the options that are switched on.
  - It also holds the game rules (`game`), seats (`parties`) and the poll job's metadata (`polls_meta`).
  - Edit it from `/admin.html`. The PIN gate is light; saving needs Max's fine-grained GitHub token.
- `scripts/update_polls.py` + `.github/workflows/polls.yml`: the daily poll job (05:00 UTC, until 28.10).
  - Each polling company's latest poll from the last 21 days, plain average.
  - Commits `polls: daily update`.
- **Stats:** a Cloudflare Worker at `elections26-stats.dimaxtlv.workers.dev`, with a D1 table, on Max's personal Cloudflare account.
  - `/e` records events, from the production hostname only.
  - `/count` is public (fights and wins).
  - `/stats` needs the `ADMIN_KEY` secret.

## Commands
- Build and deploy, from the source folder: `python3 build_site.py`, then commit and push this repo.
- Poll job self-check: `python3 scripts/test_update_polls.py`.
- Stats Worker: `python3 analytics/cf.py npx wrangler deploy`. It loads the personal token from `analytics/.env`. Never use the Mac's own wrangler login, which is a business account.

## Rules
- **Copy never blocks.** Write 3 options for every new line, switch all of them on, ship, and let Max edit in the admin.
- **`copy.json` edits:** the live repo copy is the source of truth after any admin save or poll commit. Edit it here, then copy it to `final/`. `build_site.py` pulls it back automatically.
- **Accounts:** never use Blueye or business accounts or credentials.
- **Language:** Hebrew RTL throughout. It's "בחירות 2026", never "round 6" or "מלחמת אזרחים".
- **fal.ai spend:** about $9.70 of the agreed $10 cap so far.
