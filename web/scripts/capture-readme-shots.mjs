import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "screenshots");
// Force English so README shots match the English docs.
const baseUrl =
  process.env.CAPTURE_BASE_URL || "http://127.0.0.1:4173/?lang=en";

const shots = [
  { name: "hero", selector: '[data-testid="hero-section"]' },
  { name: "projects", selector: "#projects" },
  { name: "cv", selector: "#cv" },
  { name: "interests-vault", selector: "#bento" },
  { name: "guestbook-contact", selector: "#guestbook" },
];

await mkdir(outDir, { recursive: true });

const launchBrowser = async () => {
  const channels = [process.env.PLAYWRIGHT_CHANNEL, "msedge", "chrome"].filter(
    Boolean,
  );
  for (const channel of channels) {
    try {
      return await chromium.launch({ channel });
    } catch {
      /* try next */
    }
  }
  return chromium.launch();
};

const browser = await launchBrowser();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.addInitScript(() => {
  try {
    localStorage.setItem("ik_lang", "en");
  } catch {
    /* ignore */
  }
});

await page.goto(baseUrl, { waitUntil: "load", timeout: 30000 });
await page.locator('[data-testid="hero-headline"]').waitFor({
  state: "visible",
  timeout: 20000,
});
// Hero word cascade + photo unveil finish around ~5.4s; wait past that.
await page.waitForTimeout(6200);
await page.evaluate(async () => {
  const pending = [...document.images].filter((img) => !img.complete);
  await Promise.all(
    pending.map(
      (img) =>
        new Promise((resolve) => {
          const done = () => resolve();
          img.addEventListener("load", done, { once: true });
          img.addEventListener("error", done, { once: true });
          setTimeout(done, 4000);
        }),
    ),
  );
});

for (const shot of shots) {
  const el = page.locator(shot.selector).first();
  await el.waitFor({ state: "attached", timeout: 20000 });
  await el.evaluate((node) => {
    const nav = 64;
    const top = node.getBoundingClientRect().top + window.scrollY - nav;
    window.scrollTo({ top: Math.max(0, top), behavior: "instant" });
  });
  await page.waitForTimeout(800);
  await page.evaluate(async () => {
    const pending = [...document.images].filter((img) => !img.complete);
    await Promise.all(
      pending.map(
        (img) =>
          new Promise((resolve) => {
            const done = () => resolve();
            img.addEventListener("load", done, { once: true });
            img.addEventListener("error", done, { once: true });
            setTimeout(done, 4000);
          }),
      ),
    );
  });
  await page.waitForTimeout(400);
  await page.screenshot({
    path: path.join(outDir, `${shot.name}.png`),
    fullPage: false,
    animations: "disabled",
  });
}

await browser.close();
console.log(`Saved ${shots.length} screenshots to ${outDir}`);
