---
tags:
  - portfolio
  - errors
---

# 08 — Errors & Solutions

Things that wasted my time. Search here first.

---

**Dark mode** — toggle barely worked, cream palette looked wrong inverted. Removed entirely.

**Marquee static** — needed `@keyframes marquee` AND `width: max-content` on track. Both.

**Orange face** — tried css shirt recolour with blend modes. Tinted skin too. Reverted, use normal photo.

**CLI can't type** — backtick listener closed terminal while open; focus not landing on input. Fixed with cliOpen guard, stopPropagation, rAF+timeout focus retries, window Escape listener. Ugly but works.

**Broken bento images** — renamed files, forgot to update paths. Now assets.js registry.

**Bows jumping** — normalizeBow used Math.random for missing mx/y. Every save reshuffled. stableUnit from id + migrate once on load.

**Bows in a column** — only stored y, x fixed in margin. Added mx+y click anywhere.

**Guest book looked cheap** — hard borders, flat white. gradient spine, bone bg, guestbook-* css classes.

**Duplicate bows prod** — client localStorage visitor id ≠ server cookie. API now returns visitorId, client uses that.

**Guest book unavailable on Vercel** — missing Upstash env vars or wrong token format. Both vars in Production, redeploy.

**Resend testing limit** — CONTACT_TO_EMAIL must match Resend account until domain verified.

**Vercel build failed (assets.js)** — file got truncated to an empty `ASSETS = {` during an edit. `npm run build` locally before push catches this.

---

When stuck: console first, React devtools, check portfolio.js value, git stash to bisect.

[[07_Build_Journal]] · [[06_Development_Workflow]]
