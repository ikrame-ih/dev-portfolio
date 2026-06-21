---
tags:
  - portfolio
  - content
---

# 04 — Content & Voice

Everything readable is in `portfolio.js`. Images in `assets.js`.

I edit copy by reading it out loud. LinkedIn voice = delete and start over.

---

## Hero

Overline `WEB DEVELOPER · FRONTEND · BACKEND`. Headline is two lines + accent from `PROFILE`. Positioning paragraph below — I rewrote that like ten times.

Staggered fade on load in `Hero.jsx` (Framer Motion). Reduced motion skips it.

No phone/email in hero — contact section has that.

---

## CV

Basically a CV on the page. Experience newest first. Stack pills with icons from `stackIcons.jsx`.

There's a quote in `PROFILE.practiceQuote` about admin work / tools — connects old job to dev without the "career pivot" cliché.

Print button runs `window.print()`. Still need to test print css properly.

---

## Projects

Live Event Radar + ReconFlow (wip). "What it shows" expandable bit replaced older "build notes" label I didn't like.

Mermaid diagrams in `portfolio.js` strings, modal on click. Heavy lib so it's lazy loaded.

---

## Interests

Real photos, real hobbies. Kicker says no CV tie-in because I kept writing hobbies like they were skills.

Gaming copy mentions Ace Attorney because that's actually what I play.

---

## Tizza's vault

Placeholder blog cards for now. Avatar credit heartpuff. Intro is intentionally casual.

`docs/` ≠ blog source. When I do real posts it'll probably be a `vault-posts/` folder + sync script — see [[09_Future_Roadmap]]. Not figured out yet.

---

## Guest book

Copy in `BOW_BOARD` in portfolio.js. Watermark lines are in `JardinCanvas.jsx` — wrote those while styling the spread, didn't feel like "content" enough for the data file.

Click page → bow. One per visitor. Redis on prod.

---

## CLI

Fake terminal. `guestbook --sign "name" "msg"` saves to localStorage separately from visual bows. Focus bugs took forever — see [[08_Errors_and_Solutions]].

---

## Images

Paths in `assets.js`. Broke bento once renaming files on disk only.

[[01_Goals_and_Positioning]] has the rough "don't write like a ninja" reminders.
