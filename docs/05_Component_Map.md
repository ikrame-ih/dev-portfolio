---
tags:
  - portfolio
  - components
---

# 05 — Component Map

Where to click when something on the page needs changing.

---

## The shell

Everything hangs off `App.jsx`. One `<main>`, sections in order, `cliOpen` state for the terminal. Nav and Footer get `onOpenTerminal`.

`OrnamentDivider` is inline in App — hairline + bow between hero and CV.

---

## Scroll order (matches nav)

Hero → Projects → CV → LinkedIn signals → Interests (bento) → Contact → Guest book.

Backgrounds flip bone / bone-200 between sections. ids for nav: `projects`, `cv`, `linkedin`, `bento`, `guestbook`, `contact`. `#project-<id>` opens a case study. Legacy `#blog` / `#vault` aliases redirect to `#linkedin`.

---

## Files

**Layout:** `Nav.jsx`, `Footer.jsx`, `Bow.jsx`

**Sections:** `Hero.jsx`, `ProjectsSection.jsx` (`ProjectProof.jsx` walkthroughs), `CVSection.jsx`, `LinkedInSection.jsx`, `BentoSection.jsx` (3 + more), `ContactSection.jsx`, `GuestbookCanvas.jsx`

**Overlays:** `CLITerminal.jsx` (T key, nav Terminal), `ArchitectureModal.jsx` + lazy `MermaidDiagram.jsx`, Sonner toasts in App for contact form

**Shared:** `Reveal.jsx` for scroll fade-in

---

## Where data comes from

Text → `portfolio.js`. Don't hunt through jsx for copy.

Images → `assets.js` + files in `public/images/`.

Guest book bows (local) → `storage.js`. Production also hits `/api/bows`.

CLI guestbook messages → `storage.js` too (separate from visual bows).

Stack icons in CV → `stackIcons.jsx`

---

## Rough shape of a section

Most sections: small overline, big serif title, optional accent line, then content. Not enforced by a shared component — I just copied the pattern section to section.

---

## Mermaid

Only loads when someone opens architecture on a project card. `lazy()` in `ArchitectureModal` — bundle would hurt otherwise.

---

[[02_Architecture_and_Stack]] · [[06_Development_Workflow]] · [[12_Current_Project_State]]
