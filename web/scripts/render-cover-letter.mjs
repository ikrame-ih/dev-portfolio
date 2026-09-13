import { chromium } from "playwright";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const jobs = [
  {
    html: path.join(publicDir, "cover-letter", "es.html"),
    pdf: path.join(publicDir, "Ikrame_Ibn_Hayoun_Cover_Letter_ES.pdf"),
    preview: path.join(publicDir, "cover-letter", "_preview-es.png"),
  },
  {
    html: path.join(publicDir, "cover-letter", "en.html"),
    pdf: path.join(publicDir, "Ikrame_Ibn_Hayoun_Cover_Letter.pdf"),
    preview: path.join(publicDir, "cover-letter", "_preview-en.png"),
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
  await page.emulateMedia({ media: "print" });
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

const previewPy = [
  "import fitz, sys",
  "pdf, out = sys.argv[1], sys.argv[2]",
  "doc = fitz.open(pdf)",
  "page = doc[0]",
  "assert doc.page_count == 1, f'{pdf} has {doc.page_count} pages'",
  "pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)",
  "pix.save(out)",
  "print('preview', out, pix.width, pix.height, 'pages', doc.page_count)",
].join("; ");
for (const job of jobs) {
  const result = spawnSync("python", ["-c", previewPy, job.pdf, job.preview], {
    encoding: "utf8",
  });
  if (result.status !== 0) {
    throw new Error(result.stderr || result.stdout || "pdf preview failed");
  }
  process.stdout.write(result.stdout);
}
