---
tags:
  - portfolio
  - pipeline
  - content
---

# 10 — Content pipeline

No CMS. Text in `web/src/data/locales/{en,es}.js`, UI in `web/src/i18n/ui.js`, image paths in `assets.js`, stack icons in `stackIcons.jsx`.

Components import through `useContent()` / `useUi()`.

---

Images: drop in `public/images/`, register in `assets.js`, use `ASSETS.whatever` in jsx.

Project deep links: `#project-<id>` (see `web/src/lib/projectHash.js`).

`App.jsx` injects JSON-LD from PROFILE.

Edit a locale file → hot reload.

- `ik_bows` — visual guest book (dev)
- `ik_guestbook` — CLI messages
- `ik_visitor_id` — local dev id

Prod bows go to Redis through `/api/bows` instead.

`App.jsx` also injects JSON-LD from PROFILE for google-ish structured data.

---

That's the whole pipeline. Edit portfolio.js → hot reload → done.

[[04_Content_and_Voice]] · [[05_Component_Map]]
