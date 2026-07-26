---
tags:
  - portfolio
  - design-system
---

# 03 — Design System

Cream + burgundy + ink. I wrote this because I kept adding random greys and it stopped looking like the same site.

---

## Colours

Main ones I actually use:

- **ink** `#1A1A1A` — text, borders
- **ink-soft** / **ink-mute** — secondary text
- **burgundy** `#4A0E0E` — buttons, bows, selection, accents
- **bone** `#F5F1EB` — page background
- **bone-200** `#EFEAE2` — every other section (subtle stripe, not a new colour)

CTA text on burgundy buttons is `#F5F1EB` (sometimes called cream in the config — same value as bone).

Vars live in `index.css` as RGB triplets so Tailwind opacity works (`bg-bone/80`). Full list in that file + `tailwind.config.js`. I always forget why they're not hex — it's the `/ <alpha-value>` thing in Tailwind.

---

## Fonts

**Fraunces** for big headings. **JetBrains Mono** for everything else — body, nav, forms, CLI. The mix is intentional: book-ish titles, dev-ish UI.

Overlines are tiny mono uppercase with wide tracking. Section titles are light Fraunces.

---

## Texture & motion

**Grain** on the app root — `.grain::before`, low opacity, multiply. Makes bone feel like paper.

**Bow cursor** site-wide except text inputs. Small svg in `/public/images/cursor-bow.svg`.

**Reveal.jsx** — sections fade in on scroll. Hero does its own staged intro in `Hero.jsx` instead.

**Marquee** under hero — `@keyframes marquee` in css. Took a while to get `width: max-content` right.

**Portrait** — light contrast/saturation tweak. I tried recolouring the shirt in css once; face went orange. Gave up, left the photo alone.

Easing everywhere is roughly `[0.2, 0.7, 0.2, 1]` — no bounce.

---

## Patterns I repeat

Hairline dividers (half px, low opacity). Bow svg as ornament between hero and CV. Sections alternate bone / bone-200. Burgundy buttons, sharp corners. Footer is inverted ink background — feels like end of the page.

Links use `.lnk` with underline animating in from the left.

Guest book is an open spread — two pages, spine in the middle, `guestbook-*` classes in `index.css`. Click anywhere on a page to place a bow. Watermark text is hardcoded in `GuestbookCanvas.jsx` at low opacity.

---

## Things I stopped doing

Gradients on section backgrounds — fought the grain. Heavy shadows except on the book spread. Rounded buttons. Random extra colours. Dark mode (tried it, looked wrong, deleted). Pure white/black — bone and ink instead.

Don't use `cursor: pointer` on buttons — breaks the bow cursor.

---

More css detail: [[13_Visual_Implementation]] · copy tone: [[04_Content_and_Voice]]
