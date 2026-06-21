---
tags:
  - portfolio
  - visual
---

# 13 — Visual implementation

CSS I touch when something looks off. Main tokens in [[03_Design_System]].

---

**Grain** — `.grain::before` on app root, fixed, low opacity, multiply. 7%-ish felt right; lower invisible, higher dirty.

**Guest book** — `guestbook-spread`, `guestbook-page`, `guestbook-spine`, `guestbook-page-texture` in index.css. Spine is gradient not 1px line. Ruled lines barely visible.

**Cursor** — bow svg site-wide except inputs. `--cursor-bow` in :root.

**Marquee** — duplicated content in hero for seamless loop.

**Photo frame** — subtle contrast on portrait. Tried css shirt colour, face went orange, gave up.

**Reveal** — scroll fade via framer. Hero does its own thing.

**Footer** — inverted ink strip at bottom.

**CLI** — `.cli-terminal-panel` overrides in index.css, burgundy caret.

**Links** — `.lnk` underline scale on hover.

Print styles exist for CV export but not fully tested.

[[03_Design_System]] · [[08_Errors_and_Solutions#Portrait orange face (shirt filter)]]
