---
tags:
  - portfolio
  - functions
---

# 11 — Key functions reference

grep helper. incomplete.

`normalizeBow` — bowUtils.js. old x/y → page/mx/y. stableUnit not random (bows jumped otherwise)

`handlePageClick` — JardinCanvas. optimistic on prod, saveBow local

`useRemoteBows` — bowsApi. localhost = storage, vercel = api

`storage.js` — getVisitorId, loadAndMigrateBows, saveBow (one per visitor, cap 200), guestbook entries separate

`CLITerminal` — parseQuoted for signed strings, runCommand is just if statements

`Nav scrollTo` — ids must match section ids

[[08_Errors_and_Solutions]]
