---
tags:
  - portfolio
  - current-state
updated: 2026-08-01
---

# 12 — Current project state

Aug 2026. Live at ikrame.dev. Contact + guest book work on Vercel. LinkedIn signals is an editorial list of own posts with a quiet profile footnote. Reactive Resume JSON at repo root for CV import.

---

## Performance Optimizations (Aug 2026)

Major mobile performance sprint pushed the site from 87 to a 100 lighthouse score:
- **LCP fixes**: Removed opacity delay on hero subtext, pre-rendered hero skeleton in `index.html` for instant paints.
- **Render blocking**: Injected CSS via a custom JS plugin to remove render-blocking stylesheets without bloating the main HTML.
- **Images**: Replaced heavy assets with preloaded WebP portraits.
- **Animations**: Replaced expensive `clip-path` with composited `translateY` animations.
- **A11Y**: Fixed WAVE contrast errors on decorative numbers.

---

Single page, no router. Nav scrolls to `#cv` `#projects` `#linkedin` `#bento` `#guestbook` `#contact`. Labels: CV, Projects, LinkedIn, Guest book, Contact + Terminal button.

App order: Hero → CV → Projects → LinkedIn → Bento → Guest book → Contact.

---

Guest book (`GuestbookCanvas.jsx`): two pages, click to place bow, one per visitor, ~7% min distance. `TyingBow` animates latest placement. Prod: `/api/bows` + Upstash key `guestbook:bows`, cookie `ik_visitor`. Local: localStorage.

Wipe test bows: delete Redis key `guestbook:bows`.

---

Contact: POST `/api/contact`, Resend env vars, honeypot + rate limit.

CLI: Ctrl+` or nav Terminal. Separate from visual bows.

---

GitHub dev-portfolio, Vercel root `web/`, these notes in `docs/`.

[[07_Build_Journal]] · [[08_Errors_and_Solutions]]
