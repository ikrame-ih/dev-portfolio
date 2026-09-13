---
tags:
  - portfolio
  - content
---

# 04 — Content & Voice

Copy lives in `web/src/data/locales/en.js` and `es.js`. UI chrome in `web/src/i18n/ui.js`. Image paths in `assets.js`.

Hero: `PROFILE` (overline, headline, heroSubtext, heroFacts). CTAs before facts.

Projects: `PROJECTS` with `lane` (`backend` / `tools` / `apps`), optional `proof` walkthroughs, `demoKind` (`docs` / `package` / `skill`). Case studies use status, role, problem, decision, evidence, limitations.

LinkedIn keeps the recommendation panel plus notes.

Don't hardcode image paths in components. Use `assets.js`.

Guest book strings in `BOW_BOARD`. The faint watermark lines on each page stayed in `GuestbookCanvas.jsx` when I was styling the spread.

CLI is a fake shell — `guestbook --sign` writes to localStorage, separate from visual bows.

Don't hardcode image paths in components. Broke bento thumbnails once that way — use `assets.js`.

Rough voice notes: [[01_Goals_and_Positioning]]
