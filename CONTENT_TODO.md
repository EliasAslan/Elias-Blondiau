# Content TODO: things only Elias can provide

The site is complete and every gap is a labelled placeholder. To fill one,
save the file under `public/` with the exact filename below, then rebuild
and deploy (`npm run build`, push to `main`). No code change needed;
placeholders swap automatically. Keep each file under ~500 KB.

Slot locations are defined in `src/data/media.ts`.

## Personal photos (2)

| # | Save as | Shown on | Ratio / format |
|---|---------|----------|----------------|
| 1 | `public/photos/about-portrait.jpg` | About page, under the intro | 4:3, JPG |
| 2 | `public/photos/beyond.jpg` | Homepage “Beyond Code” preview | 4:3, JPG |

Wanted: real photos of Elias. Do not use stock imagery or AI-generated
portraits and do not present them as Elias.

## Project screenshots (8)

| # | Save as | Shown on | Intended content |
|---|---------|----------|------------------|
| 1 | `public/shots/pfadi-hero-desktop.png` | Pfadi Siders page | Homepage hero (“Gipfelpause”), desktop 1600×900 |
| 2 | `public/shots/pfadi-stufen-mobile.png` | Pfadi Siders page | Stufen overview, mobile 390×844 |
| 3 | `public/shots/cal-session-desktop.png` | Calisthenics app page | Workout session view, desktop 1600×900 |
| 4 | `public/shots/cal-session-mobile.png` | Calisthenics app page | Workout session view, mobile 390×844 |
| 5 | `public/shots/emvs-heute-desktop.png` | EMVS Study Hub page | Dashboard “Heute” view, desktop 1600×900 |
| 6 | `public/shots/emvs-schwachstellen-mobile.png` | EMVS Study Hub page | Schwachstellen view, mobile 390×844 |
| 7 | `public/shots/ben-home-desktop.png` | BEN.SUSTAIN page | BEN.SUSTAIN home view, desktop 1600×900 |
| 8 | `public/shots/ben-workout-mobile.png` | BEN.SUSTAIN page | Guided workout view, mobile 390×844 |

Screenshots must show the actual projects. Never imply unrelated images
are project screenshots.

## Personal details to add (optional)

- Specific calisthenics skills and goals (About page currently keeps this
  general on purpose).
- Books and ideas that influence Elias (About page has a labelled
  placeholder).
- Any apprenticeship milestones worth mentioning. Ongoing status only,
  never present either qualification as completed.

## Project information still needing verification

- Calisthenics app: interface details come from Elias’s own build notes;
  the live demo is client-rendered and could not be inspected externally.
  A documented feature tour would resolve this.
- BEN.SUSTAIN: the exact list of Elias’s own code modifications is still
  undocumented (page says so openly). Upstream feature summaries were
  verified against the openGym README.
- BEN.SUSTAIN fork setup steps are the upstream quick-start steps; fork-
  specific deviations still need verification (page says so openly).
- Pfadi Siders: no public source repository exists; only the live site
  can be reviewed. No usage metrics or testimonials exist — do not invent
  any.

## Already verified (do not re-ask)

- Live demos resolve (Pfadi, FORM calisthenics app, EMVS Study Hub).
- Public sources: `EliasAslan/EMVs-studyHub` (JS, local-first + README);
  `EliasAslan/benOpenGym` (fork of `DuarteSantos8/openGym`, AGPL-3.0).
- EMVS technical facts: localStorage data, `npm start` → localhost:8080,
  Supabase email/password auth is sign-in only, explicitly not cloud sync.
- Official education pages (EMVS Informatiker EFZ, BM TALS) and their URLs.
- Email `e3953s@duck.com` (corroborated by Pfadi webmaster credit).

## Contact information

- Email and GitHub URL verified. LinkedIn URL is pre-existing but could
  never be verified (login wall) — confirm it still points to the right
  profile.
