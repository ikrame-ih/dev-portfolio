---
tags:
  - portfolio
  - pipeline
  - content
---

# 10 — Content pipeline

No CMS. Text in `portfolio.js`, image paths in `assets.js`, stack icons in `stackIcons.jsx`.

Components import what they need:

```jsx
import { PROFILE, PROJECTS } from "@/data/portfolio";
import { ASSETS } from "@/data/assets";
```

---

Images: drop in `public/images/`, register in `assets.js`, use `ASSETS.whatever` in jsx. Source copies sometimes live in `references/` (gitignored).

If a card is broken, 404 in network tab — usually path typo.

---

Saved visitor stuff in localStorage via `storage.js`:

- `ik_bows` — visual guest book (dev)
- `ik_guestbook` — CLI messages
- `ik_visitor_id` — local dev id

Prod bows go to Redis through `/api/bows` instead.

`App.jsx` also injects JSON-LD from PROFILE for google-ish structured data.

---

That's the whole pipeline. Edit portfolio.js → hot reload → done.

[[04_Content_and_Voice]] · [[05_Component_Map]]
