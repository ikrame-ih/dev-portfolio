import { catalogs } from "@/data/portfolio";
import { ASSETS } from "@/data/assets";

const defaultContent = catalogs.en;

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

export const GO_TARGETS = [
  { id: "cv", aliases: ["cv", "skills", "habilidades"] },
  { id: "projects", aliases: ["projects", "proj", "work", "proyectos"] },
  {
    id: "linkedin",
    aliases: ["linkedin", "signals", "blog", "vault"],
  },
  { id: "bento", aliases: ["bento", "interests", "intereses"] },
  { id: "guestbook", aliases: ["guestbook", "guest", "lazos"] },
  { id: "contact", aliases: ["contact", "hi", "contacto"] },
];

/** @param {'sys'|'cmd'|'out'|'title'|'meta'|'ok'|'err'|'menu'|'blank'|'rule'} type */
export const L = (type, text = "", extra = {}) => ({ type, text, ...extra });

export const getMenu = (cli) => [
  { key: "1", cmd: "about", label: cli.menu.about },
  { key: "2", cmd: "stack", label: cli.menu.stack },
  { key: "3", cmd: "proj", label: cli.menu.proj },
  { key: "4", cmd: "cv", label: cli.menu.cv },
  { key: "5", cmd: "links", label: cli.menu.links },
  { key: "6", cmd: "contact", label: cli.menu.contact },
];

/**
 * Full catalog — every command users can run (help is built from this).
 * Keep labels short; aliases are noted in the label when useful.
 */
export const getCommandCatalog = (cli) => [
  { cmd: "help", label: cli.catalog.help },
  { cmd: "about", label: cli.catalog.about },
  { cmd: "tldr", label: cli.catalog.tldr },
  { cmd: "stack", label: cli.catalog.stack },
  { cmd: "proj", label: cli.catalog.proj },
  { cmd: "open <n>", label: cli.catalog.open },
  { cmd: "demo <n>", label: cli.catalog.demo },
  { cmd: "repo <n>", label: cli.catalog.repo },
  { cmd: "cv", label: cli.catalog.cv },
  { cmd: "pdf", label: cli.catalog.pdf },
  { cmd: "links", label: cli.catalog.links },
  { cmd: "gh", label: cli.catalog.gh },
  { cmd: "li", label: cli.catalog.li },
  { cmd: "copy", label: cli.catalog.copy },
  { cmd: "contact", label: cli.catalog.contact },
  { cmd: "avail", label: cli.catalog.avail },
  { cmd: "edu", label: cli.catalog.edu },
  { cmd: "now", label: cli.catalog.now },
  { cmd: "go …", label: cli.catalog.go },
  { cmd: "sign", label: cli.catalog.sign },
  { cmd: "clear", label: cli.catalog.clear },
  { cmd: "exit", label: cli.catalog.exit },
];

export const getHelpLines = (cli) => {
  const menu = getMenu(cli);
  const catalog = getCommandCatalog(cli);
  return [
    L("title", cli.helpTitle),
    L("meta", cli.helpShortcuts),
    L("blank"),
    L("title", cli.helpQuick),
    ...menu.map((m) =>
      L("menu", "", { key: m.key, cmd: m.cmd, label: m.label }),
    ),
    L("blank"),
    L("title", cli.helpFull),
    ...catalog.map((c) =>
      L("menu", "", { key: "·", cmd: c.cmd, label: c.label }),
    ),
    L("blank"),
    L("meta", cli.bannerControls),
  ];
};

export const buildBanner = (cli) => {
  const menu = getMenu(cli);
  return [
    {
      id: "banner-0",
      type: "sys",
      text: cli.bannerWelcome,
      delay: 0.08,
    },
    {
      id: "banner-rule",
      type: "rule",
      text: "",
      delay: 0.18,
    },
    ...menu.map((m, i) => ({
      id: `banner-m-${m.key}`,
      type: "menu",
      key: m.key,
      cmd: m.cmd,
      label: m.label,
      delay: 0.28 + 0.07 * i,
    })),
    {
      id: "banner-tip",
      type: "meta",
      text: cli.bannerTip,
      delay: 0.28 + 0.07 * menu.length + 0.1,
    },
    {
      id: "banner-tip-2",
      type: "meta",
      text: cli.bannerControls,
      delay: 0.28 + 0.07 * menu.length + 0.2,
    },
  ];
};

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
  const map = {
    1: "about",
    2: "stack",
    3: "proj",
    4: "cv",
    5: "links",
    6: "contact",
  };
  return map[raw.trim()] ?? null;
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

export const aboutLines = (content = defaultContent) => {
  const { PROFILE } = content;
  return [
    L("title", `${PROFILE.name} — ${PROFILE.location}`),
    ...(PROFILE.cliAbout ?? [PROFILE.heroSubtext]).map((t) => L("out", t)),
  ];
};

export const tldrLines = (content = defaultContent, cli) => {
  const { PROFILE } = content;
  return [
    L("title", cli?.titleTldr ?? "tl;dr"),
    ...(PROFILE.cliTldr ?? []).map((t) => L("out", t)),
  ];
};

export const availLines = (content = defaultContent, cli) => {
  const { PROFILE } = content;
  return [
    L("title", cli?.titleAvail ?? "availability"),
    L("out", PROFILE.cliAvail ?? PROFILE.workPreference),
  ];
};

export const nowLines = (content = defaultContent, cli) => {
  const { PROFILE } = content;
  return [
    L("title", cli?.titleNow ?? "now"),
    L("out", PROFILE.cliNow ?? PROFILE.tagline),
  ];
};

export const eduLines = (content = defaultContent, cli) => {
  const { EDUCATION } = content;
  const lines = [L("title", cli?.titleEdu ?? "education")];
  EDUCATION.forEach((ed) => {
    lines.push(L("out", ed.degree));
    lines.push(L("meta", `${ed.school} · ${ed.period}`));
  });
  return lines;
};

export const stackLines = (content = defaultContent, cli) => {
  const { STACK, LANGUAGES } = content;
  const langPrefix = cli?.languagesPrefix ?? "Languages";
  return [
    L("title", cli?.titleStack ?? "stack"),
    ...STACK.domains.map((domain) => {
      const skills = domain.groups.flatMap((g) => g.items).join(", ");
      return L("out", `${domain.title}: ${skills}`);
    }),
    L(
      "out",
      `${langPrefix}: ${LANGUAGES.map((l) => `${l.lang} (${l.level})`).join(", ")}`,
    ),
  ];
};

export const projectLines = (content = defaultContent, cli) => {
  const { PROJECTS } = content;
  const lines = [L("title", cli?.titleProjects ?? "projects")];
  PROJECTS.forEach((p, i) => {
    lines.push(L("out", `${i + 1}. ${p.name}`));
    if (p.demo) lines.push(L("meta", `demo  ${p.demo}`));
    if (p.href) lines.push(L("meta", `repo  ${p.href}`));
    if (!p.demo && !p.href)
      lines.push(L("meta", cli?.inProgress ?? "in progress"));
  });
  lines.push(L("blank"));
  lines.push(
    L(
      "meta",
      cli?.projIndexHint ??
        "Numbers above are the project index. Example: open 1 · demo 1 · repo 1",
    ),
  );
  return lines;
};

export const resolveProject = (token, content = defaultContent) => {
  const { PROJECTS } = content;
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

export const openProjectUrl = (
  kind,
  token,
  content = defaultContent,
  cli,
) => {
  if (!token) {
    return [
      L("err", `${cli?.usageN ?? "usage"}: ${kind} <n>`),
      L(
        "meta",
        cli?.usageNMeta ??
          "n is the number from the proj list (1, 2, 3…). Run proj to see them.",
      ),
    ];
  }
  const project = resolveProject(token, content);
  if (!project) {
    return [
      L("err", `${cli?.unknownProject ?? "Unknown project"}: ${token || "?"}`),
      L(
        "meta",
        cli?.runProjFirst ??
          "Run proj first — then use the number shown (e.g. open 2).",
      ),
    ];
  }
  const url =
    kind === "demo"
      ? project.demo
      : kind === "repo"
        ? project.href
        : project.demo || project.href;
  if (!url) {
    if (kind === "open") {
      return [
        L(
          "err",
          `${project.name} ${cli?.noPublicLink ?? "has no public link yet."}`,
        ),
      ];
    }
    return [
      L(
        "err",
        `${project.name} ${cli?.noKindYet ?? "has no"} ${kind}${cli?.yet ?? " yet."}`,
      ),
    ];
  }
  window.open(url, "_blank", "noopener,noreferrer");
  return [
    L("ok", `${cli?.opening ?? "Opening"} ${project.name}…`),
    L("meta", url),
  ];
};

export const linkLines = (content = defaultContent, cli) => {
  const { PROFILE } = content;
  return [
    L("title", cli?.titleLinks ?? "links"),
    L("out", `GitHub    ${PROFILE.github}`),
    L("out", `LinkedIn  ${PROFILE.linkedin}`),
    L("out", `Email     ${PROFILE.email}`),
    L("out", `Site      ${PROFILE.siteUrl}`),
    L("blank"),
    L("meta", cli?.linksTip ?? "tip: gh · li · copy"),
  ];
};

export const openCvPdf = (lang = "en", cli) => {
  const es = String(lang).toLowerCase().startsWith("es");
  const href = es ? ASSETS.cvPdfEs : ASSETS.cvPdf;
  window.open(href, "_blank", "noopener,noreferrer");
  return [
    L(
      "ok",
      es
        ? (cli?.openingCvPdfEs ?? "Opening CV PDF (ES)…")
        : (cli?.openingCvPdf ?? "Opening CV PDF…"),
    ),
    L("meta", href),
  ];
};

export const openExternal = (label, href, cli) => {
  window.open(href, "_blank", "noopener,noreferrer");
  return [
    L("ok", `${cli?.opening ?? "Opening"} ${label}…`),
    L("meta", href),
  ];
};

export const copyEmail = async (content = defaultContent, cli) => {
  const { PROFILE } = content;
  try {
    await navigator.clipboard.writeText(PROFILE.email);
    return [L("ok", `${cli?.copied ?? "Copied"} ${PROFILE.email}`)];
  } catch {
    return [
      L("err", cli?.copyFailed ?? "Couldn't copy automatically."),
      L("meta", PROFILE.email),
    ];
  }
};

export const resolveGoTarget = (token) => {
  if (!token) return null;
  const lower = token.toLowerCase();
  return GO_TARGETS.find((t) => t.aliases.includes(lower))?.id ?? null;
};

export const goHelpLines = (cli) => [
  L("title", cli?.goTitle ?? "go"),
  L("meta", cli?.goUsage ?? "usage: go <section>"),
  ...GO_TARGETS.map((t) =>
    L("menu", "", {
      key: "·",
      cmd: t.aliases[0],
      label: t.aliases.slice(1).join(" · ") || t.id,
    }),
  ),
];
