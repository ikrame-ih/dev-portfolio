---
tags:
  - portfolio
  - workflow
---

# 06 — Development Workflow

How I run and ship this. Written for future-me after forgetting the Vercel root directory again.

---

## Setup

Node 18+, npm, git. Nothing global to install.

```powershell
cd web
npm install
npm run dev
```

→ http://localhost:5173

Build: `npm run build` → `dist/`. Preview prod locally: `npm run preview`.

---

## Repo layout (the bit I forget)

Deployable app is **`web/`**. Vercel root directory = `web`, not the repo root.

`docs/` — these notes, in git, not on the site.

`references/` — source images, gitignored. Copy into `web/public/images/` when ready.

`app/` — old moodboard stuff, gitignored.

---

## Editing copy

Almost everything the visitor reads is in `web/src/data/locales/en.js` and `es.js` (re-exported via `portfolio.js`). Hero text, jobs, projects, guest book strings, LinkedIn signals, etc. Save and Vite hot-reloads.

### Updating LinkedIn notes (max 3)

There is no automatic LinkedIn sync. Keep `LINKEDIN_SIGNALS.posts` curated:

1. Copy the public URL of the LinkedIn post.
2. Add a faithful title and excerpt in both `en.js` and `es.js` under `LINKEDIN_SIGNALS.posts` (newest first).
3. Keep at most three entries; remove the oldest when adding a fourth.
4. Run `npm run build` before publishing.

Reactive Resume CVs live at repo root: `react-resume.json` (EN) and `react-resume.es.json` (ES). Import those into Reactive Resume when the site copy changes.

---

## Editing images

1. Put source in `references/` if you want a backup
2. Copy to `web/public/images/…`
3. Add path to `assets.js` if it's new
4. Component imports `ASSETS`, never a raw string path

Broken thumbnails usually mean filename mismatch or forgot step 3. Run `npm run build` after touching `assets.js` — a half-finished export will fail on Vercel.

---

## HMR quirks

Jsx and tailwind classes update instantly. Config changes (`tailwind.config.js`, `vite.config.js`) need restart. New files in `public/` sometimes need F5.

---

## Deploy (Vercel)

1. Push repo to GitHub
2. Vercel → import project → **root directory `web`**
3. Env vars (Production + Preview):
   - `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` — guest book
   - `RESEND_API_KEY` + `CONTACT_TO_EMAIL` — contact form
   - optional `CONTACT_FROM_EMAIL`
4. Deploy, test guest book + contact on the live url

Push to `main` redeploys automatically. Failed build = old version stays live.

Guest book on localhost uses localStorage — no `/api` unless you run `vercel dev`.

Without Upstash on Vercel, prod guest book shows unavailable. Without Resend, contact form errors but mailto still works.

Custom domain: Vercel settings when I get around to it.

---

## Before I push (informal)

Run build, click through preview, drop a test bow, open terminal, check mobile width. Not a formal checklist — just what I usually do when something broke last time.

---

## When things break

**Styles stuck after token change** — restart dev server.

**Image 404** — check `public/images` + `assets.js` path.

**Module not found** — `@/` is `./src/` in vite config.

**CLI won't type** — see [[08_Errors_and_Solutions#CLI couldn't type]] (focus hell).

**Tailwind class missing** — don't build class names with template strings; jit won't see them.

Local api testing: copy `.env.example` → `.env`, use `vercel dev` (plain `npm run dev` has no api routes).

---

[[05_Component_Map]] · [[08_Errors_and_Solutions]] · [[12_Current_Project_State]]
