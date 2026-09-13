---
tags:
  - portfolio
  - current-state
updated: 2026-09-13
---

# 12 — Current project state

Sep 2026. Live at ikrame.dev. Contact + guest book on Vercel. LinkedIn keeps the recommendation panel plus notes. Reactive Resume JSON at repo root.

Single page. Nav primary: `#projects` `#cv` `#linkedin` `#contact`. Mobile also `#bento` `#guestbook`. Hash `#project-<id>` opens the architecture modal.

App order: Hero → Projects → CV → LinkedIn → Bento → Contact → Guestbook.

Projects: three lanes. Python backends (ReckonFlow, Validata) as 16:9 editorial strips. Published tools (import-resolve-cli, english-spanish-web-localization) as a two-up row. Other work in a 2-col grid. Case study modal includes status, role, problem, decision, evidence, limitations.

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

App order: Hero → Projects → CV → LinkedIn → Bento → Contact → Guestbook.

---

Guest book (`GuestbookCanvas.jsx`): two pages, click to place bow, one per visitor, ~7% min distance. `TyingBow` animates latest placement. Prod: `/api/bows` + Upstash key `guestbook:bows`, cookie `ik_visitor`. Local: localStorage.

Wipe test bows: delete Redis key `guestbook:bows`.

---

Contact: POST `/api/contact`, Resend env vars, honeypot + rate limit.

CLI: Ctrl+` or nav Terminal. Separate from visual bows.

---

GitHub dev-portfolio, Vercel root `web/`, these notes in `docs/`.

[[07_Build_Journal]] · [[08_Errors_and_Solutions]]
