import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const W = 1280;
const H = 720;
const out = path.join("D:", "dev-portfolio", "web", "public", "images", "projects", "reckon-flow.png");

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2 });

await page.goto("https://reckon-flow.onrender.com/docs", { waitUntil: "domcontentloaded", timeout: 90000 });
await page.waitForSelector(".opblock", { timeout: 60000 });

const tag = page.locator(".opblock-tag").filter({ hasText: /reconciliation/i }).first();
if ((await tag.getAttribute("data-is-open")) !== "true") await tag.click();

const op = page.locator(".opblock").filter({
  hasText: "/api/v1/reconciliation/expenses/{expense_id}/suggestions",
}).first();
await op.click();
await op.getByRole("button", { name: /try it out/i }).click();
await op.locator('input[placeholder="expense_id"]').fill("1");
const lim = op.locator('input[placeholder="limit"]');
if (await lim.count()) await lim.fill("5");
await op.getByRole("button", { name: /^execute$/i }).click();
await op.locator(".live-responses-table").filter({ hasText: "CARD HOTEL" }).waitFor({ timeout: 45000 });

await page.evaluate(() => {
  const keep = document.querySelector(".opblock.is-open");
  document.querySelectorAll(".topbar, .information-container, .scheme-container, .opblock-tag-section")
    .forEach((el) => { if (!keep || !el.contains(keep)) el.remove(); });
  keep?.parentElement?.querySelectorAll(".opblock:not(.is-open)").forEach((el) => el.remove());

  const body = keep?.querySelector(".opblock-body");
  if (body) {
    // Keep only live response; drop params / curl / request URL / execute
    [...body.children].forEach((child) => {
      if (child.querySelector?.(".live-responses-table")) return;
      child.remove();
    });
    // Also strip curl blocks that sit above the live table inside responses-inner
    body.querySelectorAll("h4, .curl-command, .request-url").forEach((el) => {
      const block = el.closest("div");
      if (block && !block.querySelector(".live-responses-table")) block.remove();
    });
    body.querySelectorAll("div").forEach((div) => {
      const t = (div.textContent || "").trim();
      if ((t.startsWith("Curl") || t.startsWith("Request URL")) && !div.querySelector(".live-responses-table")) {
        div.remove();
      }
    });
  }

  const code = keep?.querySelector(".live-responses-table .microlight");
  if (code) {
    code.style.maxHeight = "400px";
    code.style.overflow = "hidden";
    code.style.fontSize = "12px";
    code.style.lineHeight = "1.3";
  }
  document.body.style.cssText = "margin:0;background:#eee";
  document.querySelector(".swagger-ui")?.style.setProperty("padding", "16px 20px");
});

await op.locator(".opblock-summary").scrollIntoViewIfNeeded();
fs.mkdirSync(path.dirname(out), { recursive: true });
await page.screenshot({ path: out, type: "png" });
console.log("ok", out);
await browser.close();
