---
tags:
  - portfolio
  - content
---

# 04 — Content & Voice

All readable text lives in `portfolio.js`. Image paths in `assets.js`. I read copy out loud when editing — if it sounds like LinkedIn I rewrite it.

Hero uses `PROFILE` (overline, headline, positioningParts). Staggered intro in `Hero.jsx`. No contact details in hero.

CV section is basically the page CV — experience, stack pills with `stackIcons`, practice quote about admin work. Print via `window.print()` (css still needs a proper pass).

Projects: Live Event Radar + ReconFlow wip. Mermaid chart strings in portfolio.js, loaded in a modal.

Interests bento — real hobby photos and copy. The kicker literally says hobbies aren't CV skills because I kept doing that by accident.

LinkedIn signals section (`LINKEDIN_SIGNALS` in locales): up to three own posts as an editorial list, plus one quiet footnote linking to the LinkedIn profile. No recommendation panel, no blog CMS. Static article at `/blog/...` may remain for old links.

Guest book strings in `BOW_BOARD`. The faint watermark lines on each page stayed in `GuestbookCanvas.jsx` when I was styling the spread.

CLI is a fake shell — `guestbook --sign` writes to localStorage, separate from visual bows.

Don't hardcode image paths in components. Broke bento thumbnails once that way — use `assets.js`.

Rough voice notes: [[01_Goals_and_Positioning]]
