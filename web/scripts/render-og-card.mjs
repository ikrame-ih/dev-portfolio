import { chromium } from "playwright";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, "og-card.html");
const outPath = path.join(__dirname, "..", "public", "images", "og-card.jpg");

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
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
await page.evaluate(async () => {
  await document.fonts.ready;
  await Promise.all(
    [...document.images].map((img) =>
      img.complete
        ? null
        : new Promise((resolve) => {
            img.addEventListener("load", resolve, { once: true });
            img.addEventListener("error", resolve, { once: true });
          }),
    ),
  );
});
const png = await page.screenshot({ type: "png", clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();

let quality = 82;
let jpeg = await sharp(png).jpeg({ quality, mozjpeg: true }).toBuffer();
while (jpeg.length > 300 * 1024 && quality > 55) {
  quality -= 4;
  jpeg = await sharp(png).jpeg({ quality, mozjpeg: true }).toBuffer();
}
await sharp(jpeg).toFile(outPath);
const meta = await sharp(outPath).metadata();
console.log(
  "wrote",
  outPath,
  `${meta.width}x${meta.height}`,
  `${(jpeg.length / 1024).toFixed(1)} KB`,
  `q=${quality}`,
);
