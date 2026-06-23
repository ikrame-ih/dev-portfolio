---
tags:
  - portfolio
  - journal
---

# 07 — Build Journal

Rough timeline. Some backfilled after the fact.

---

Picked cream/burgundy + Fraunces/mono before coding. Moodboard in `app/` maybe, not imported.

Scaffolded with Vite — hero through contact in one push. All copy in portfolio.js from early on.

Rewrote positioning a lot. Added projects from LinkedIn CV.

---

Marquee wasn't animating — missing keyframes + max-content width.

Hero intro staggered because everything appearing at once felt flat.

Dark mode experiment → deleted. Looked bad on cream palette, toggle hidden on mobile anyway.

Centralised images in assets.js after path renames broke bento.

Guest book went from flat canvas → open book. Then margin-only clicks → click anywhere. Coords changed from x to page+mx+y. Bows jumped until stableUnit hash fixed random fallback.

CLI focus was a nightmare — global backtick listener, rAF retries, window Escape capture. See [[08_Errors_and_Solutions]].

---

Jun 2026: Upstash for shared bows, Resend for contact, optimistic UI on bow click, TyingBow animation, nav order tweak (vault before guest book).

Wireframe in excalidraw updated to match what actually shipped. Also learned to run build before push after truncating assets.js broke deploy.

---

Still want: real blog posts, OG tags, custom domain. [[09_Future_Roadmap]]
