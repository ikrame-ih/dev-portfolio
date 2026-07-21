import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "screenshots");
const baseUrl = "http://127.0.0.1:4173";

const shots = [
  { name: "hero", selector: '[data-testid="hero-section"]' },
  { name: "cv-projects", selector: "#projects" },
  { name: "interests-vault", selector: "#blog" },
  { name: "guestbook-contact", selector: "#garden" },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto(baseUrl, { waitUntil: "networkidle" });
// Hero cascade + Text Animate finishes around ~5.4s; wait past that.
await page.waitForTimeout(6000);

for (const shot of shots) {
  const el = page.locator(shot.selector).first();
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1100);
  await page.screenshot({ path: path.join(outDir, `${shot.name}.png`), fullPage: false });
}

await browser.close();
console.log(`Saved ${shots.length} screenshots to ${outDir}`);
