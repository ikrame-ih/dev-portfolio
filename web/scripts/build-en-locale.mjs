import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../src/data");
const src = path.join(root, "portfolio.js");
const destDir = path.join(root, "locales");
const dest = path.join(destDir, "en.js");

fs.mkdirSync(destDir, { recursive: true });
let s = fs.readFileSync(src, "utf8");
s = s.replace(/^export const /gm, "const ");
s += `

const catalog = {
  PROFILE,
  LANGUAGES,
  STACK,
  EXPERIENCE,
  EDUCATION,
  PROJECTS,
  BENTO,
  BLOG,
  BOW_BOARD,
  marqueeRare: ["open to work", "málaga → remote", "built with care"],
  section: {
    cvOverline: "01 · background & skills",
    cvTitleBefore: "Skills, roles, and ",
    cvTitleAccent: "education.",
    cvKicker: "Skills, languages, and the work behind them.",
    languagesTitle: "Languages",
    languagesKicker: "How I speak with people — and across contexts.",
    experience: "Experience",
    education: "Education",
    projectsOverline: "02 · selected work",
    projectsTitleBefore: "Selected projects",
    projectsTitleAccent: "with architecture notes.",
    projectsKicker:
      "Each project links to its repo, live demo when available, and an architecture diagram. Click a capture to enlarge it.",
    inProgress: "In progress",
    comingSoon: "Coming soon",
    howItWorks: "How it works →",
    github: "GitHub ↗",
    demo: "Demo ↗",
  },
  tracks: { tech: "tech", hybrid: "tech × biz", biz: "biz / ops" },
};

export default catalog;
`;
fs.writeFileSync(dest, s);
console.log("wrote", dest, fs.statSync(dest).size);
