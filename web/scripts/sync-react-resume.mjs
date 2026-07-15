/**
 * Sync web/public/resume.json (JSON Resume, source of truth) → react-resume.json
 * (Reactive Resume native export). Preserves template, layout, colours, and item IDs.
 *
 * Run after editing resume.json: npm run sync:resume
 */

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "../..");
const JSON_RESUME_PATH = join(ROOT, "web/public/resume.json");
const REACTIVE_RESUME_PATH = join(ROOT, "react-resume.json");

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const formatMonthYear = (iso) => {
  if (!iso) return "";
  const [year, month] = iso.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
};

const formatPeriod = (startDate, endDate) => {
  const start = formatMonthYear(startDate);
  if (!endDate) return `${start} -`;
  if (endDate === startDate) return start;
  return `${start} - ${formatMonthYear(endDate)}`;
};

const bulletsToHtml = (highlights = []) => {
  if (!highlights.length) return "";
  const items = highlights.map((line) => `<li>${line}</li>`).join("");
  return `<ul>${items}</ul>`;
};

const blockToHtml = (summary, highlights = []) => {
  const parts = [];
  if (summary) parts.push(`<p>${summary}</p>`);
  const list = bulletsToHtml(highlights);
  if (list) parts.push(list);
  return parts.join("");
};

const summaryToHtml = (summary) => {
  const chunks = summary
    .split(/(?<=\.)\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
  return chunks.map((part) => `<p>${part}</p>`).join("");
};

const projectToHtml = (description, highlights = []) =>
  blockToHtml(description, highlights);

const EXPERIENCE_IDS = [
  "b2000001-0001-4000-8000-000000000001",
  "b2000001-0001-4000-8000-000000000002",
  "b2000001-0001-4000-8000-000000000003",
  "b2000001-0001-4000-8000-000000000004",
  "b2000001-0001-4000-8000-000000000005",
];

const EDUCATION_IDS = [
  "c3000001-0001-4000-8000-000000000001",
  "c3000001-0001-4000-8000-000000000002",
  "c3000001-0001-4000-8000-000000000003",
];

const PROJECT_IDS = [
  "d4000001-0001-4000-8000-000000000001",
  "d4000001-0001-4000-8000-000000000002",
  "d4000001-0001-4000-8000-000000000003",
];

const SKILL_IDS = [
  "e5000001-0001-4000-8000-000000000001",
  "e5000001-0001-4000-8000-000000000002",
  "e5000001-0001-4000-8000-000000000003",
];

const LANGUAGE_IDS = [
  "f6000001-0001-4000-8000-000000000001",
  "f6000001-0001-4000-8000-000000000002",
  "f6000001-0001-4000-8000-000000000003",
];

const resume = JSON.parse(readFileSync(JSON_RESUME_PATH, "utf8"));
const reactive = JSON.parse(readFileSync(REACTIVE_RESUME_PATH, "utf8"));

const { basics } = resume;
const city = basics.location?.city ?? "Málaga";
const country = basics.location?.countryCode ?? "ES";

reactive.basics.name = basics.name;
reactive.basics.headline = `${basics.label} · Frontend & Backend · ${city}, ${country}`;
reactive.basics.email = basics.email;
reactive.basics.phone = basics.phone;
reactive.basics.location = `${city}, ${country}`;
reactive.basics.website = {
  url: basics.url,
  label: "Portfolio",
};

reactive.summary.content = summaryToHtml(basics.summary);

reactive.sections.experience.items = resume.work.map((job, index) => ({
  id: EXPERIENCE_IDS[index],
  hidden: false,
  company: job.name,
  position: job.position,
  location: job.location ?? "",
  period: formatPeriod(job.startDate, job.endDate),
  website: { url: "", label: "", inlineLink: false },
  description: blockToHtml(job.summary, job.highlights),
  roles: [],
}));

reactive.sections.education.items = resume.education.map((edu, index) => {
  const descriptionParts = [];
  if (edu.summary) descriptionParts.push(edu.summary);
  if (edu.courses?.length) descriptionParts.push(edu.courses.join(". "));
  return {
    id: EDUCATION_IDS[index],
    hidden: false,
    school: edu.institution,
    degree: edu.studyType,
    area: edu.area ?? "",
    grade: edu.score ?? "",
    location: index === 1 ? `${city}, ${country}` : "",
    period: formatPeriod(edu.startDate, edu.endDate),
    website: { url: "", label: "", inlineLink: false },
    description: descriptionParts.join(". "),
  };
});

reactive.sections.projects.items = resume.projects.map((project, index) => ({
  id: PROJECT_IDS[index],
  hidden: false,
  name: project.name,
  period: formatPeriod(project.startDate, project.endDate),
  website: project.url
    ? { url: project.url, label: "GitHub", inlineLink: true }
    : { url: "", label: "", inlineLink: false },
  description: projectToHtml(project.description, project.highlights),
}));

reactive.sections.skills.items = resume.skills.map((skill, index) => ({
  id: SKILL_IDS[index],
  hidden: false,
  icon: "",
  iconColor: "",
  name: skill.name,
  proficiency: skill.level ?? "",
  level: 0,
  keywords: skill.keywords,
}));

reactive.sections.languages.items = resume.languages.map((lang, index) => ({
  id: LANGUAGE_IDS[index],
  hidden: false,
  language: lang.language,
  fluency: lang.fluency,
  level: 0,
}));

const flatKeywords = resume.skills.flatMap((skill) => skill.keywords);
if (reactive.customSections?.[0]?.items?.[0]) {
  reactive.customSections[0].items[0].keywords = [...new Set(flatKeywords)];
}

writeFileSync(REACTIVE_RESUME_PATH, `${JSON.stringify(reactive, null, 2)}\n`, "utf8");
console.log(`Synced ${JSON_RESUME_PATH} → ${REACTIVE_RESUME_PATH}`);
