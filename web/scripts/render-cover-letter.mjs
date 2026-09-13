import { chromium } from "playwright";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const jobs = [
  {
    html: path.join(publicDir, "cover-letter", "es.html"),
    pdf: path.join(publicDir, "Ikrame_Ibn_Hayoun_Cover_Letter_ES.pdf"),
  },
  {
    html: path.join(publicDir, "cover-letter", "en.html"),
    pdf: path.join(publicDir, "Ikrame_Ibn_Hayoun_Cover_Letter.pdf"),
  },
];

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

for (const job of jobs) {
  const page = await browser.newPage();
  await page.goto(pathToFileURL(job.html).href, { waitUntil: "networkidle" });
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
  await page.addStyleTag({
    content: `.toolbar { display: none !important; }`,
  });
  await page.pdf({
    path: job.pdf,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });
  await page.close();
  console.log("wrote", job.pdf);
}

await browser.close();
