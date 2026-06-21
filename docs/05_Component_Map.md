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

Hero → CV → Projects → Interests (bento) → Vault (blog) → Guest book → Contact.

Backgrounds flip bone / bone-200 between sections. ids for nav: `cv`, `projects`, `bento`, `blog`, `garden`, `contact`.

---

## Files

**Layout:** `Nav.jsx`, `Footer.jsx`, `Bow.jsx`

**Sections:** `Hero.jsx`, `CVSection.jsx`, `ProjectsSection.jsx`, `BentoSection.jsx`, `BlogSection.jsx`, `JardinCanvas.jsx`, `ContactSection.jsx`

**Overlays:** `CLITerminal.jsx` (Terminal btn, Ctrl+`), `ArchitectureModal.jsx` + lazy `MermaidDiagram.jsx` (project cards), Sonner toasts in App for contact form

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
