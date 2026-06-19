# dev-portfolio

My personal portfolio — single-page site built with React, Vite, and Tailwind. Cream paper aesthetic, CV & projects up front, interests, **Tizza's vault** teaser, interactive guest book, and a hidden CLI.

[![Live on Vercel](https://img.shields.io/badge/Live-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://ikrame-ih.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-dev--portfolio-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ikrame-ih/dev-portfolio)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)

---

## Preview

### Hero

Staged intro on load — overline, headline, positioning, portrait.

![Hero section](web/screenshots/hero.png)

### CV & projects

Background, stack pills, selected work cards with architecture diagrams.

![CV and projects](web/screenshots/cv-projects.png)

### Interests & vault

Bento grid with hobby imagery and **Tizza's vault** (coming soon overlay).

![Interests and vault](web/screenshots/interests-vault.png)

### Guest book

Shared signature spread — click anywhere on either page to leave a bow.

![Guest book](web/screenshots/guestbook-contact.png)

---

## Features

| Section | Highlights |
| ------- | ---------- |
| **Hero** | Staged Framer Motion intro (~2s), portrait, scrolling marquee |
| **CV** | Experience, education, languages, stack pills with icons |
| **Projects** | Cards + Mermaid architecture modals (lazy-loaded) |
| **Interests** | Bento grid with hobby imagery |
| **Vault** | Tizza's vault teaser — full blog coming at tizzasvault.blog |
| **Guest book** | Click-to-sign bow spread, shared via Upstash Redis in production |
| **CLI** | Hidden terminal (`Terminal` nav · `` Ctrl+` ``) |
| **Contact** | Form → Resend API → your inbox |

---

## Quick start

```bash
cd web
npm install
cp .env.example .env   # fill in keys for guest book + contact (optional locally)
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

```bash
npm run build    # production build → dist/
npm run preview  # serve dist locally
```

---

## Production environment (Vercel)

Root directory: **`web/`**

| Variable | Used by |
| -------- | ------- |
| `UPSTASH_REDIS_REST_URL` | Guest book (`/api/bows`) — **both Upstash vars required** |
| `UPSTASH_REDIS_REST_TOKEN` | Guest book — set in **Production and Preview** |
| `RESEND_API_KEY` | Contact form (`/api/contact`) |
| `CONTACT_TO_EMAIL` | Your inbox for form submissions |
| `CONTACT_FROM_EMAIL` | Optional verified sender in Resend |

**Guest book:** add both Upstash variables to the same environments in Vercel, then redeploy. Until then, production shows “temporarily unavailable” instead of a fake local book.

**Contact:** honeypot, field length limits, minimum fill time, and rate limiting (5/hour per IP via Upstash when Redis is configured). Without Resend, the form shows a clear error and visitors can still email you directly.

---

## Content

| What | Where |
| ---- | ----- |
| Copy | `web/src/data/portfolio.js` |
| Images | `web/public/images/` · registry in `web/src/data/assets.js` |
| Resume (JSON) | `web/public/resume.json` |
| Guest book API | `web/api/bows.js` |
| Contact API | `web/api/contact.js` |

---

## Repo layout

The deployable app is in `web/`. Private folders (`docs/`, `references/`, `app/`) stay local — see `.gitignore`.

| Path | Deployed? |
| ---- | --------- |
| `web/` | Yes |
| `docs/`, `references/`, `app/` | No — gitignored |

---

## Regenerate screenshots

```bash
cd web
npm run build && npm run preview -- --port 4173
npx playwright@1.49.1 install chromium
npm run capture:readme
```

---

## License

Private portfolio project — all rights reserved unless stated otherwise.
