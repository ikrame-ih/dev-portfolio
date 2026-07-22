import {
  PROFILE,
  PROJECTS,
  STACK,
  LANGUAGES,
  EDUCATION,
} from "@/data/portfolio";
import { ASSETS } from "@/data/assets";

const CLI_HISTORY_KEY = "cli-cmd-history-v1";
const CLI_HISTORY_MAX = 40;

/**
 * Useful recruiter commands — short to type.
 * Numbers 1–6 jump without typing the name.
 */
export const CLI_COMMANDS = [
  "help",
  "cmds",
  "commands",
  "about",
  "tldr",
  "stack",
  "proj",
  "projects",
  "open",
  "demo",
  "repo",
  "cv",
  "pdf",
  "links",
  "gh",
  "li",
  "copy",
  "contact",
  "avail",
  "edu",
  "now",
  "go",
  "sign",
  "clear",
  "reset",
  "cls",
  "exit",
];

export const MENU = [
  { key: "1", cmd: "about", label: "who I am" },
  { key: "2", cmd: "stack", label: "skills" },
  { key: "3", cmd: "proj", label: "list projects" },
  { key: "4", cmd: "cv", label: "jump to CV" },
  { key: "5", cmd: "links", label: "GitHub · LinkedIn · email" },
  { key: "6", cmd: "contact", label: "contact form" },
];

export const GO_TARGETS = [
  { id: "cv", aliases: ["cv", "skills"] },
  { id: "projects", aliases: ["projects", "proj", "work"] },
  { id: "bento", aliases: ["bento", "interests"] },
  { id: "blog", aliases: ["blog", "vault"] },
  { id: "garden", aliases: ["garden", "guestbook", "guest"] },
  { id: "contact", aliases: ["contact", "hi"] },
];

/** @param {'sys'|'cmd'|'out'|'title'|'meta'|'ok'|'err'|'menu'|'blank'|'rule'} type */
export const L = (type, text = "", extra = {}) => ({ type, text, ...extra });

/**
 * Full catalog — every command users can run (help is built from this).
 * Keep labels short; aliases are noted in the label when useful.
 */
export const COMMAND_CATALOG = [
  { cmd: "help", label: "show this full list (also: cmds · ?)" },
  { cmd: "about", label: "who I am" },
  { cmd: "tldr", label: "10-second pitch" },
  { cmd: "stack", label: "skills catalog" },
  { cmd: "proj", label: "list projects (numbered)" },
  { cmd: "open <n>", label: "open project n from that list" },
  { cmd: "demo <n>", label: "open live demo for project n" },
  { cmd: "repo <n>", label: "open GitHub repo for project n" },
  { cmd: "cv", label: "jump to CV section" },
  { cmd: "pdf", label: "open CV PDF" },
  { cmd: "links", label: "GitHub · LinkedIn · email · site" },
  { cmd: "gh", label: "open GitHub" },
  { cmd: "li", label: "open LinkedIn" },
  { cmd: "copy", label: "copy email to clipboard" },
  { cmd: "contact", label: "jump to contact form" },
  { cmd: "avail", label: "availability" },
  { cmd: "edu", label: "education" },
  { cmd: "now", label: "what I'm up to" },
  { cmd: "go …", label: "cv · projects · bento · blog · garden · contact" },
  { cmd: "sign", label: 'guestbook: sign "name" "msg"' },
  { cmd: "clear", label: "wipe the screen (alias: reset · cls)" },
  { cmd: "exit", label: "close terminal (Esc)" },
];

export const HELP_LINES = [
  L("title", "all commands"),
  L("meta", "Shortcuts 1–6 jump faster — everything else is below."),
  L("blank"),
  L("title", "quick"),
  ...MENU.map((m) =>
    L("menu", "", { key: m.key, cmd: m.cmd, label: m.label }),
  ),
  L("blank"),
  L("title", "full list"),
  ...COMMAND_CATALOG.map((c) =>
    L("menu", "", { key: "·", cmd: c.cmd, label: c.label }),
  ),
  L("blank"),
  L("meta", "Tab autocompletes · ↑↓ history · Esc closes"),
];

export const buildBanner = () => [
  {
    id: "banner-0",
    type: "sys",
    text: "welcome — press 1–6, or type help for every command.",
    delay: 0,
  },
  {
    id: "banner-rule",
    type: "rule",
    text: "",
    delay: 0.04,
  },
  ...MENU.map((m, i) => ({
    id: `banner-m-${m.key}`,
    type: "menu",
    key: m.key,
    cmd: m.cmd,
    label: m.label,
    delay: 0.06 + 0.02 * i,
  })),
  {
    id: "banner-tip",
    type: "meta",
    text: "type help (or cmds) to list every command",
    delay: 0.24,
  },
  {
    id: "banner-tip-2",
    type: "meta",
    text: "Tab autocompletes · ↑↓ history · Esc closes",
    delay: 0.26,
  },
];

export const echoPrompt = () => "ikrame@portfolio:~$";

export const loadCliHistory = () => {
  try {
    const raw = sessionStorage.getItem(CLI_HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
};

export const saveCliHistory = (history) => {
  try {
    sessionStorage.setItem(
      CLI_HISTORY_KEY,
      JSON.stringify(history.slice(0, CLI_HISTORY_MAX)),
    );
  } catch {
    /* ignore quota / private mode */
  }
};

export const editDistance = (a, b) => {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i += 1) dp[i][0] = i;
  for (let j = 0; j <= n; j += 1) dp[0][j] = j;
  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost,
      );
    }
  }
  return dp[m][n];
};

export const resolveShortcut = (raw) => {
  const token = raw.trim().toLowerCase();
  const hit = MENU.find((m) => m.key === token);
  return hit ? hit.cmd : null;
};

/** Map aliases to canonical commands. */
export const canonicalize = (head) => {
  const map = {
    cmds: "help",
    commands: "help",
    ls: "help",
    reset: "clear",
    cls: "clear",
    projects: "proj",
    skills: "stack",
    social: "links",
    resume: "pdf",
    hi: "contact",
    mail: "contact",
    guestbook: "sign",
    github: "gh",
    linkedin: "li",
    email: "copy",
    tl: "tldr",
    "tl;dr": "tldr",
    availability: "avail",
    education: "edu",
    status: "now",
  };
  return map[head] || head;
};

export const suggestCommand = (raw) => {
  const token = raw.trim().split(/\s+/)[0]?.toLowerCase() ?? "";
  if (!token || /^\d+$/.test(token)) return null;
  let best = null;
  let bestDist = Infinity;
  for (const cmd of CLI_COMMANDS) {
    if (cmd.startsWith(token) && cmd !== token) return cmd;
    const d = editDistance(token, cmd);
    if (d < bestDist) {
      bestDist = d;
      best = cmd;
    }
  }
  return bestDist <= 2 ? best : null;
};

export const completeCommand = (raw) => {
  const trimmed = raw.trimStart();
  if (!trimmed || trimmed.includes(" ")) {
    return { matches: [], completed: raw };
  }
  const lower = trimmed.toLowerCase();
  const matches = CLI_COMMANDS.filter((c) => c.startsWith(lower));
  if (matches.length === 1) return { matches, completed: matches[0] };
  if (matches.length > 1) {
    let prefix = matches[0];
    for (const m of matches.slice(1)) {
      let i = 0;
      while (i < prefix.length && i < m.length && prefix[i] === m[i]) i += 1;
      prefix = prefix.slice(0, i);
    }
    return { matches, completed: prefix || raw };
  }
  return { matches: [], completed: raw };
};

export const aboutLines = () => [
  L("title", `${PROFILE.name} — ${PROFILE.location}`),
  ...(PROFILE.cliAbout ?? [PROFILE.heroSubtext]).map((t) => L("out", t)),
];

export const tldrLines = () => [
  L("title", "tl;dr"),
  ...(PROFILE.cliTldr ?? []).map((t) => L("out", t)),
];

export const availLines = () => [
  L("title", "availability"),
  L("out", PROFILE.cliAvail ?? PROFILE.workPreference),
];

export const nowLines = () => [
  L("title", "now"),
  L("out", PROFILE.cliNow ?? PROFILE.tagline),
];

export const eduLines = () => {
  const lines = [L("title", "education")];
  EDUCATION.forEach((ed) => {
    lines.push(L("out", ed.degree));
    lines.push(L("meta", `${ed.school} · ${ed.period}`));
  });
  return lines;
};

export const stackLines = () => [
  L("title", "stack"),
  ...STACK.domains.map((domain) => {
    const skills = domain.groups.flatMap((g) => g.items).join(", ");
    return L("out", `${domain.title}: ${skills}`);
  }),
  L(
    "out",
    `Languages: ${LANGUAGES.map((l) => `${l.lang} (${l.level})`).join(", ")}`,
  ),
];

export const projectLines = () => {
  const lines = [L("title", "projects")];
  PROJECTS.forEach((p, i) => {
    lines.push(L("out", `${i + 1}. ${p.name}`));
    if (p.demo) lines.push(L("meta", `demo  ${p.demo}`));
    if (p.href) lines.push(L("meta", `repo  ${p.href}`));
    if (!p.demo && !p.href) lines.push(L("meta", "in progress"));
  });
  lines.push(L("blank"));
  lines.push(
    L(
      "meta",
      "Numbers above are the project index. Example: open 1 · demo 1 · repo 1",
    ),
  );
  return lines;
};

export const resolveProject = (token) => {
  if (!token) return null;
  const asNum = Number.parseInt(token, 10);
  if (!Number.isNaN(asNum) && asNum >= 1 && asNum <= PROJECTS.length) {
    return PROJECTS[asNum - 1];
  }
  const lower = token.toLowerCase();
  return (
    PROJECTS.find(
      (p) => p.id === lower || p.name.toLowerCase() === lower,
    ) ?? null
  );
};

export const openProjectUrl = (kind, token) => {
  if (!token) {
    return [
      L("err", `usage: ${kind} <n>`),
      L(
        "meta",
        "n is the number from the proj list (1, 2, 3…). Run proj to see them.",
      ),
    ];
  }
  const project = resolveProject(token);
  if (!project) {
    return [
      L("err", `Unknown project: ${token || "?"}`),
      L("meta", "Run proj first — then use the number shown (e.g. open 2)."),
    ];
  }
  const url =
    kind === "demo"
      ? project.demo
      : kind === "repo"
        ? project.href
        : project.demo || project.href;
  if (!url) {
    return [
      L("err", `${project.name} has no ${kind === "open" ? "public link" : kind} yet.`),
    ];
  }
  window.open(url, "_blank", "noopener,noreferrer");
  return [L("ok", `Opening ${project.name}…`), L("meta", url)];
};

export const linkLines = () => [
  L("title", "links"),
  L("out", `GitHub    ${PROFILE.github}`),
  L("out", `LinkedIn  ${PROFILE.linkedin}`),
  L("out", `Email     ${PROFILE.email}`),
  L("out", `Site      ${PROFILE.siteUrl}`),
  L("blank"),
  L("meta", "tip: gh · li · copy"),
];

export const openCvPdf = () => {
  window.open(ASSETS.cvPdf, "_blank", "noopener,noreferrer");
  return [L("ok", "Opening CV PDF…"), L("meta", ASSETS.cvPdf)];
};

export const openExternal = (label, href) => {
  window.open(href, "_blank", "noopener,noreferrer");
  return [L("ok", `Opening ${label}…`), L("meta", href)];
};

export const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(PROFILE.email);
    return [L("ok", `Copied ${PROFILE.email}`)];
  } catch {
    return [
      L("err", "Couldn't copy automatically."),
      L("meta", PROFILE.email),
    ];
  }
};

export const resolveGoTarget = (token) => {
  if (!token) return null;
  const lower = token.toLowerCase();
  return GO_TARGETS.find((t) => t.aliases.includes(lower))?.id ?? null;
};

export const goHelpLines = () => [
  L("title", "go"),
  L("meta", "usage: go <section>"),
  ...GO_TARGETS.map((t) =>
    L("menu", "", {
      key: "·",
      cmd: t.aliases[0],
      label: t.aliases.slice(1).join(" · ") || t.id,
    }),
  ),
];
