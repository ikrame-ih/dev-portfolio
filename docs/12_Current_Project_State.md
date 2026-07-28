---
tags:
  - portfolio
  - current-state
updated: 2026-06-21
---

# 12 — Current project state

Jun 2026. Live at ikrame.dev. Contact + guest book work on Vercel. Blog placeholders.

---

Single page, no router. Nav scrolls to `#cv` `#projects` `#bento` `#blog` `#guestbook` `#contact`. Labels: CV, Projects, Vault, Guest book, Contact + Terminal button.

App order: Hero → CV → Projects → Bento → Vault → Guest book → Contact.

---

Guest book (`GuestbookCanvas.jsx`): two pages, click to place bow, one per visitor, ~7% min distance. `TyingBow` animates latest placement. Prod: `/api/bows` + Upstash key `guestbook:bows`, cookie `ik_visitor`. Local: localStorage.

Wipe test bows: delete Redis key `guestbook:bows`.

---

Contact: POST `/api/contact`, Resend env vars, honeypot + rate limit.

CLI: Ctrl+` or nav Terminal. Separate from visual bows.

---

GitHub dev-portfolio, Vercel root `web/`, these notes in `docs/`.

[[07_Build_Journal]] · [[08_Errors_and_Solutions]]
