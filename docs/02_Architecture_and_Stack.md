---
tags:
  - portfolio
  - architecture
---

# 02 — Architecture & Stack

Single page React app. Almost everything is static files at build time.

Two serverless routes: `/api/bows` (Upstash, shared guest book) and `/api/contact` (Resend). That's it. CLI guestbook text still localStorage only.

---

Stack: Vite, React 19, Tailwind, Framer Motion, Sonner, Lucide, Mermaid (lazy). Chose Vite over CRA because CRA felt dead. Copy in one `portfolio.js` file because grep.

---

```
web/
  src/components/   one section per file
  src/data/         portfolio.js, assets.js, stackIcons.jsx
  src/lib/          storage, bowUtils, bowsApi
  api/              bows.js, contact.js
  public/images/
```

`docs/` and `references/` in repo / local — not deployed. Vercel root = `web/`.

---

Guest book: prod uses cookie `ik_visitor` + Redis. Localhost uses localStorage (vite dev has no api unless `vercel dev`).

One bow per visitor — cookie not IP (shared IPs are messy).

Mermaid only when you open architecture on a project card.

---

Early ideas I dropped: full MongoDB backend for a portfolio, dark mode toggle, gradient section backgrounds, guest book that only accepted margin clicks.

[[05_Component_Map]] · [[10_Content_Pipeline]] · [[12_Current_Project_State]]
