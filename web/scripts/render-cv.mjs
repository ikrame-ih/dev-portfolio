import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, "..", "..");
const publicDir = path.join(__dirname, "..", "public");
const cvDir = path.join(publicDir, "cv");

const jobs = [
  {
    json: path.join(repoRoot, "react-resume.json"),
    html: path.join(cvDir, "en.html"),
    pdf: path.join(publicDir, "Ikrame_Ibn_Hayoun_CV.pdf"),
    altHref: "./es.html",
    altLabel: "Español",
  },
  {
    json: path.join(repoRoot, "react-resume.es.json"),
    html: path.join(cvDir, "es.html"),
    pdf: path.join(publicDir, "Ikrame_Ibn_Hayoun_CV_ES.pdf"),
    altHref: "./en.html",
    altLabel: "English",
  },
];

const visible = (items = []) => items.filter((item) => !item.hidden);

const stripEmpty = (html = "") => html.replace(/^\s+|\s+$/g, "");

const buildHtml = (data, { altHref, altLabel }) => {
  const { basics, summary, sections } = data;
  const contact = [
    basics.email,
    basics.phone,
    basics.location,
    basics.website?.url
      ? `<a href="${basics.website.url}">${basics.website.label || basics.website.url}</a>`
      : "",
  ]
    .filter(Boolean)
    .join(" · ");

  const skills = visible(sections.skills.items)
    .map(
      (s) =>
        `<p class="skill"><strong>${s.name}.</strong> ${(s.keywords || []).join(", ")}</p>`,
    )
    .join("\n");

  const projects = visible(sections.projects.items)
    .map((p) => {
      const link = p.website?.url
        ? `<a href="${p.website.url}">${p.website.label || p.website.url}</a>`
        : "";
      return `<article class="item">
        <div class="item-head"><strong>${p.name}</strong><span class="meta">${p.period || ""}</span></div>
        ${link ? `<div class="sub">${link}</div>` : ""}
        ${stripEmpty(p.description)}
      </article>`;
    })
    .join("\n");

  const experience = visible(sections.experience.items)
    .map(
      (e) => `<article class="item">
        <div class="item-head"><strong>${e.company}</strong><span class="meta">${e.location || ""}</span></div>
        <div class="sub"><span>${e.position}</span><span>${e.period || ""}</span></div>
        ${stripEmpty(e.description)}
      </article>`,
    )
    .join("\n");

  const education = visible(sections.education.items)
    .map((ed) => {
      const grade = [ed.degree, ed.grade].filter(Boolean).join(" · ");
      return `<article class="item">
        <div class="item-head"><strong>${ed.school}</strong><span class="meta">${ed.period || ""}</span></div>
        <div class="sub"><span>${ed.area}${grade ? ` · ${grade}` : ""}</span><span>${ed.location || ""}</span></div>
        ${stripEmpty(ed.description)}
      </article>`;
    })
    .join("\n");

  const languages = visible(sections.languages.items)
    .map((l) => `<li><strong>${l.language}</strong> — ${l.fluency}</li>`)
    .join("\n");

  const profiles = visible(sections.profiles.items)
    .map((p) => {
      const href = p.website?.url || "";
      const label = p.website?.label || p.username || p.network;
      return `<li>${p.network}: ${href ? `<a href="${href}">${label}</a>` : label}</li>`;
    })
    .join("\n");

  return `<!DOCTYPE html>
<html lang="${data.metadata?.page?.locale === "en-US" ? "en" : "es"}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${basics.name} — CV</title>
    <link rel="stylesheet" href="./cv.css" />
  </head>
  <body>
    <div class="toolbar">
      <p>Hiring CV — print or <strong>Save PDF</strong>.</p>
      <div>
        <a href="${altHref}">${altLabel}</a>
        <button type="button" onclick="window.print()">Save PDF</button>
      </div>
    </div>
    <article class="page">
      <h1>${basics.name}</h1>
      <p class="headline">${basics.headline}</p>
      <p class="contact">${contact}</p>

      <h2>${summary.title}</h2>
      <div class="summary">${summary.content}</div>

      <h2>${sections.skills.title}</h2>
      ${skills}

      <h2>${sections.projects.title}</h2>
      ${projects}

      <h2>${sections.experience.title}</h2>
      ${experience}

      <h2>${sections.education.title}</h2>
      ${education}

      <h2>${sections.languages.title}</h2>
      <ul class="langs">${languages}</ul>

      <h2>${sections.profiles.title}</h2>
      <ul class="langs">${profiles}</ul>
    </article>
  </body>
</html>
`;
};

fs.mkdirSync(cvDir, { recursive: true });

for (const job of jobs) {
  const data = JSON.parse(fs.readFileSync(job.json, "utf8"));
  fs.writeFileSync(job.html, buildHtml(data, job), "utf8");
  console.log("wrote", job.html);
}

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
