# Deploy — SimpleClickCounter Next.js rebuild

Static Next.js export (`output: 'export'`). The **same build** deploys on
Vercel **and** on Cloudflare Pages — no server, no API routes, no adapter.
Pick either host; do not deploy to both with the domain attached (DNS can only
point at one).

## Option A — Vercel (recommended if you already use it for Palworld)

1. Push this folder to a GitHub repo (e.g. `simpleclickcounter-site`), or
   use `vercel` CLI: `npm i -g vercel && vercel` from this folder.
2. In Vercel: **Add New → Project → Import** the repo.
   - Framework Preset: **Next.js** (auto-detected).
   - Build Command: `npm run build` (default).
   - Output Directory: `out` — Vercel detects this automatically for
     `output: 'export'`. Do **not** set it to anything else.
   - Install Command: `npm install` (default).
   - No environment variables needed.
3. Deploy. Vercel gives you a preview URL like
   `simpleclickcounter-site.vercel.app`.
4. **Verify the preview 16/16 before touching DNS** (checklist below).
5. Add the domain: Project → Settings → Domains → add
   `simpleclickcounter.net` (and `www.simpleclickcounter.net` if you use it).
   Vercel shows the DNS records to add.
6. The `/hello-world/` → `/` 301 is already in `vercel.json`.

## Option B — Cloudflare Pages

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Project settings:
   - Framework preset: **Next.js (Static HTML Export)** — if that preset is
     not listed, choose **None / Static** and set the values below manually.
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: `/` (or the repo subfolder, if you put the site in one).
   - No environment variables needed.
4. Deploy. Cloudflare gives you a `*.pages.dev` preview URL.
5. **Verify the preview 16/16 before touching DNS** (checklist below).
6. Add the domain: Pages project → Custom domains → add
   `simpleclickcounter.net`. Cloudflare shows the DNS records to add.
7. The `/hello-world/` → `/` 301 is already in `public/_redirects`
   (Cloudflare Pages reads this file automatically).

## Preview verification — 16/16 (do this BEFORE the DNS cutover)

Open every URL on the preview domain and confirm it returns 200 with the
right title in the tab / `<head>`:

- `/` — “Free Click Counter Online – No Sign-Up”
- `/tally-counter/` — “Free Tally Counter Online – Tally Marks”
- `/word-counter/` — “Free Word Counter Online – Words & Characters”
- `/countdown-timer/` — “Free Countdown Timer Online – Set Any Timer”
- `/score-counter/` — “Free Score Counter – 2-Player Scoreboard”
- `/multi-counter/` — “Free Multi Counter – Count Several Things”
- `/click-counter-vs-tally-counter/` — “Click Counter vs Tally Counter – Which to Use?”
- `/counter-embed/` — “Embed a Click Counter on Your Website – Free”
- `/about/` — “About Simple Click Counter – Free Tools”
- `/contact/` — “Contact Simple Click Counter”
- `/privacy-policy/` — “Privacy Policy | Simple Click Counter”
- `/terms-of-service/` — “Terms of Service | Simple Click Counter”
- `/disclaimer/` — “Disclaimer | Simple Click Counter”
- `/cookie-policy/` — “Cookie Policy | Simple Click Counter”
- `/gdpr-compliance/` — “GDPR Compliance | Simple Click Counter”
- `/dmca/` — “DMCA | Simple Click Counter”

Plus:
- `/sitemap.xml` lists all 16 URLs; `/robots.txt` loads.
- `/hello-world/` redirects (301) to `/`.
- Click every tool on mobile width: counter taps, tally marks appear,
  word counter counts live, timer starts, scoreboard adds points,
  multi counter adds a named counter.
- Confirm no page says “no ads” anywhere (AdSense decision still open).

## DNS cutover checklist (only after the preview passes 16/16)

1. **Keep WordPress on Hostinger live** until this step is done.
2. At your registrar / Hostinger DNS, point the domain at the new host
   (Vercel or Cloudflare — the records the host showed you in step 5/6).
   Do NOT delete the WordPress hosting yet.
3. Wait for DNS to propagate, then open `https://simpleclickcounter.net/`
   and re-run the 16/16 check on the live domain.
4. In Google Search Console: resubmit `sitemap.xml`, request indexing for
   `/` and `/tally-counter/` first, then the rest. Monitor for 7 days.
5. Only then, cancel / downgrade the Hostinger WordPress plan if you want —
   keep DNS where the registrar says it belongs.
6. Before cutover, note: the contact form now opens a mailto to
   `employeesxfinity@gmail.com` (changed 16 Nov 2026 at Muffin's word;
   was `contact@simpleclickcounter.net`, which was never verified). No
   mailbox to confirm — it is his Gmail. If the address ever changes,
   update it in `components/ContactForm.jsx`.

## Rebuilds

- Content/code change → `git push` (or `vercel --prod` / Cloudflare
  auto-deploy on push). Both hosts rebuild automatically from the repo.
- Local build check: `npm install && npm run build` — output goes to `out/`.
