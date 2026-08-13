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
  { name: "cv-projects", selector: "#projects" },
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

await page.goto(baseUrl, { waitUntil: "networkidle" });
await page.locator('[data-testid="hero-headline"]').waitFor({ state: "visible" });
await page.locator("#bento").waitFor({ state: "attached" });
// Hero word cascade + photo unveil finish around ~5.4s; wait past that.
await page.waitForTimeout(6200);

for (const shot of shots) {
  const el = page.locator(shot.selector).first();
  await el.waitFor({ state: "attached" });
  await el.evaluate((node) => {
    const nav = 64;
    const top = node.getBoundingClientRect().top + window.scrollY - nav;
    window.scrollTo({ top: Math.max(0, top), behavior: "instant" });
  });
  await page.waitForTimeout(1200);
  await page.screenshot({
    path: path.join(outDir, `${shot.name}.png`),
    fullPage: false,
    animations: "disabled",
  });
}

await browser.close();
console.log(`Saved ${shots.length} screenshots to ${outDir}`);
