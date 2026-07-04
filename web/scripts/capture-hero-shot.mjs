import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, "..", "screenshots", "hero.png");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto("http://127.0.0.1:4173", { waitUntil: "networkidle" });
await page.waitForTimeout(2500);

const hero = page.locator('[data-testid="hero-section"]').first();
await hero.scrollIntoViewIfNeeded();
await page.waitForTimeout(900);
await hero.screenshot({ path: out });

await browser.close();
console.log(`Saved ${out}`);
