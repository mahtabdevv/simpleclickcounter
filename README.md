# SimpleClickCounter — Next.js rebuild

Static Next.js (App Router, `output: 'export'`) rebuild of
simpleclickcounter.net. Same build deploys on Vercel and Cloudflare Pages.

## Specs followed

- `../migration-and-ranking-plan-2026-11-13.md` — 16 URLs preserved 1:1,
  `/hello-world/` 301 → `/`, Phases 0–4.
- `../p0-titles-meta-2026-11-13.md` — all 16 titles + meta applied 1:1 in
  `lib/meta.js`. Titles ≤ 60 chars, metas ≤ 160. Copy says “free, no
  sign-up” — “no ads” appears nowhere on the site.
- `../keyword-map-2026-11-16.md` — keyword registry v2 (639 kw). Primaries:
  homepage “click counter”, `/tally-counter/` “tally counter”. The
  `/tally-counter/` page includes a “Tally marks” info section (what tally
  marks are, groups of five, tally chart example) for “tally marks”
  (5,400 vol, KD 1) and “tally chart” (2,100 vol, KD 3). Keywords are kept
  **as is** everywhere — exact wording in titles, headings, anchors and
  copy; no rewording or synonym replacement.
- Quick-win variants woven into homepage copy in exact wording: online
  counter, counter online, counter tool, digital counter, people counting.

## Tools (all client-side, localStorage, no server)

- Click counter: tap, Space/↑/↓ keys, R reset, custom step, goal +
  progress, session stats, sound toggle, CSV export.
- Tally counter: visual tally marks grouped in fives, goal + progress.
- Word counter: live words / characters / sentences / paragraphs /
  reading time, nothing uploaded.
- Countdown timer: h/m/s + presets, start/pause/reset, beep on finish.
- Score counter: 2-player scoreboard, editable names, win history.
- Multi counter: named counters, add / delete / reset each.
- Comparison page (click counter vs tally counter) and embed page
  (copy-paste iframe snippet).

## Build & deploy

```bash
npm install
npm run build   # output in out/
```

Deploy: see [DEPLOY.md](DEPLOY.md) — Vercel and Cloudflare Pages steps,
16/16 preview checklist, DNS cutover checklist. Do NOT deploy from here;
Muffin deploys it himself.

## Not included (by design)

- No GA4 (no ID given). No AdSense — `public/ads.txt` is a comment-only
  placeholder. No backend, no API routes, no form endpoint: the contact
  form opens the visitor’s email app (mailto to
  `contact@simpleclickcounter.net` — verify that mailbox before cutover).
