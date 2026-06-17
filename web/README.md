# Ikrame portfolio

Single-page portfolio — Vite, React 19, Tailwind, Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Deploy (Vercel)

- **Root directory:** `web`
- **Build command:** `npm run build`
- **Output:** `dist`

### Guest book (production)

Set these environment variables in Vercel (Upstash Redis):

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

Without them, `/api/bows` falls back gracefully in dev; in production the shared guest book needs Redis.

Copy `.env.example` to `.env.local` for local API testing.

## Content

| What | Where |
| ---- | ----- |
| Copy | `src/data/portfolio.js` |
| Images | `public/images/` (paths in `src/data/assets.js`) |
| Resume data | `public/resume.json` |

## Repo layout (full workspace)

This app lives inside an Obsidian vault folder. Only `web/` is deployed. Private folders (`docs/`, `references/`, `app/`) stay local — see the root `.gitignore`.
