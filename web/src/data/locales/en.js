import { ASSETS } from "../assets.js";

// English site copy — edit here (and locales/es.js), not scattered across components.
const PROFILE = {
  name: "Ikrame Ibn Hayoun",
  location: "Málaga, ES",
  workPreference: "Available for remote or hybrid opportunities",
  email: "ikihga2223@gmail.com",
  phone: "+34 682 02 76 93",
  github: "https://github.com/ikrame-ih",
  portfolioRepo: "https://github.com/ikrame-ih/dev-portfolio",
  linkedin: "https://www.linkedin.com/in/ikrame-ih/",
  siteUrl: "https://ikrame.dev",
  overline: "BACKEND DEVELOPER · APIs · POSTGRESQL · ALSO SHIPS FRONTEND",
  headlineParts: [
    { text: "I build software" },
    { text: "with attention to detail", accent: true },
    { text: "and the context behind\u00A0it.", italic: true },
  ],
  heroSubtext:
    "Hi, I'm Ikrame Ibn Hayoun, a backend-focused developer in Málaga. Right now I'm building ReckonFlow — a FastAPI ledger and reconciliation API where a retried POST must never double-pay anyone. I also ship React frontends when the product needs them.",
  // Compact hero facts — avoid repeating overline role or Málaga (already in copy + photo).
  heroFacts: [
    { eyebrow: "Open to", text: "Remote · hybrid" },
    { eyebrow: "Path", text: "DAW · Jun 2026" },
    { eyebrow: "Focus", text: "Backend APIs", accent: true },
  ],
  // Flat string for terminal / plain contexts.
  tagline: "Backend developer · FastAPI · PostgreSQL · Node · open to remote or hybrid",
  // Friendly blurb for CLI `about` — warm, specific, not a CV tagline dump.
  cliAbout: [
    "Hi — I'm Ikrame. Backend developer in Málaga, with a soft spot for calm interfaces when I build the UI side.",
    "I spend most of my energy on APIs, databases, and the hard edges: retries, money precision, auth.",
    "Away from the editor I'm usually deep in a story-heavy game, singing to reset my head, or fussing over little aesthetic details.",
    "Just wrapped DAW (Jun 2026). Looking for remote or hybrid backend roles.",
    "I also built this portfolio end to end — the code is on GitHub.",
  ],
  // Ultra-short pitch for CLI `tldr`.
  cliTldr: [
    "Backend developer in Málaga — FastAPI, Node, PostgreSQL. Ships frontend when needed.",
    "Currently building ReckonFlow (idempotent ledger API). Looking for remote or hybrid backend roles.",
  ],
  cliAvail:
    "Open to remote or hybrid. Based in Málaga (CET). Happy to chat anytime.",
  cliNow:
    "Just finished DAW (Jun 2026) and internship work at DATA CONTROL. Deep on ReckonFlow — actively open to the next backend role.",
  portraitLink: {
    label: "Say hi on LinkedIn →",
  },
  practiceAside: {
    title: "At a glance",
    text: "Higher Vocational Diploma (DAW, Jun 2026) — final project MyPlaythrough awarded maximum grade. Backend projects on GitHub cover FastAPI, Express, PostgreSQL, tests, and CI. This portfolio included — built from scratch.",
  },
};

const LANGUAGES = [
  { lang: "Spanish", level: "Native", code: "ES" },
  { lang: "English", level: "C1", detail: "Advanced", code: "EN" },
  { lang: "Darija", level: "Native", detail: "Moroccan Arabic", code: "AR" },
];

// Four skill domains — rendered as a 2×2 panel grid in CVSection.
const STACK = {
  domains: [
    {
      id: "backend",
      index: "01",
      title: "Backend & data",
      kicker: "APIs, persistence, and the hard edges between them.",
      groups: [
        {
          label: "APIs & runtime",
          items: [
            "Python",
            "FastAPI",
            "Node.js",
            "Express",
            "Java",
            "REST APIs",
            "JWT",
          ],
        },
        {
          label: "Data",
          items: ["PostgreSQL", "SQL", "Redis", "Alembic"],
        },
      ],
    },
    {
      id: "frontend",
      index: "02",
      title: "Frontend",
      kicker: "Interfaces and motion when the product needs them.",
      groups: [
        {
          label: "UI & frameworks",
          items: [
            "React",
            "Next.js",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Framer Motion",
          ],
        },
        {
          label: "State & maps",
          items: ["Zustand", "Leaflet"],
        },
        {
          label: "Craft",
          items: ["Semantic HTML", "Accessibility"],
        },
      ],
    },
    {
      id: "tooling",
      index: "03",
      title: "Tooling & delivery",
      kicker: "Ship, test, and keep the loop honest.",
      groups: [
        {
          label: "Toolchain",
          items: [
            "Git",
            "GitHub Actions",
            "Vitest",
            "Playwright",
            "Docker",
            "Vercel",
          ],
        },
      ],
    },
  ],
};

const EXPERIENCE = [
  {
    company: "DATA CONTROL",
    role: "Software Developer Intern",
    period: "Mar 2026 — Jun 2026",
    track: "tech",
    bullets: [
      "Delivered a Moodle-based learning platform as the core internship project — setup, content structure, and ongoing customization.",
      "Handled day-to-day database work supporting the platform (queries, structure, and keeping data wired to the app).",
      "Owned the look-and-feel pass — CSS and UI tweaks — so the experience felt coherent rather than stock Moodle.",
    ],
  },
  {
    company: "EY Global Delivery Services",
    role: "Executive Assistant",
    period: "Jan 2025 — Mar 2026",
    track: "hybrid",
    bullets: [
      {
        text: "Built a Power App that ran the CNS Christmas raffle end-to-end — registration and number assignment in one place, instead of chasing it over email/Teams.",
        proof: {
          id: "ey-holiday-raffle",
          name: "CNS Christmas raffle — Power App",
          image: ASSETS.experience.eyHolidayRaffle,
          imageAlt:
            "EY Power App for the CNS Christmas hamper raffle — claim a number and store name, email, and assignment",
        },
      },
      "Owned high-stakes client visits in Málaga end-to-end — agendas, logistics, and local experiences — where the day often shaped whether a deal moved forward.",
      "Ran the day-to-day ops stack — travel, Concur, Outlook, Teams, SharePoint, plus the firm's own internal tools — in a global professional-services setting.",
    ],
  },
  {
    company: "EC Azafatas",
    role: "Brand Ambassador",
    period: "Feb 2026",
    track: "biz",
    bullets: [
      "Ran product tastings and short presentations in busy retail settings.",
      "Handled booth logistics and end-of-day inventory updates.",
      "Seeing live retail ops up close inspired Live Event Radar, my real-time venue ops dashboard.",
    ],
  },
  {
    company: "Conciencia Fundraising",
    role: "Accounting & Operations Admin",
    period: "Nov — Dec 2024",
    track: "biz",
    bullets: [
      "Prepared donor reports and follow-up via Drive, Outlook, and Evergiving.",
      "Managed HR tasks in Factorial and tracked travel and expense costs.",
      "Kept team coordination in Asana, Notion, and Slack; created reporting views in Looker.",
    ],
  },
  {
    company: "Sylvis Profesional Cosmetic",
    role: "Admin Assistant",
    period: "Jan — Oct 2024",
    track: "biz",
    bullets: [
      "Reconciled bank accounts and posted invoices, including import purchases.",
      "Tracked vehicle and import costs in Excel; managed incoming documentation.",
    ],
  },
];

// Titles use English + Spanish pathway names + EQF so EU / UK / ES readers align.
const EDUCATION = [
  {
    school: "IES Zaidín Vergeles",
    degree: "Postgraduate Specialization in Artificial Intelligence & Big Data",
    tags: [
      "Curso de Especialización",
      "EQF Level 5",
      "Post-Diploma Specialization",
    ],
    period: "Starting Sep 2026",
  },
  {
    school: "CESUR Este, Málaga",
    degree: "Higher Vocational Degree in Web Application Development (DAW)",
    tags: [
      "Ciclo Formativo de Grado Superior",
      "EQF Level 5",
      "HND Equivalent",
    ],
    period: "Sep 2024 — Jun 2026",
  },
  {
    school: "I.E.S. Politécnico Jesús Marín",
    degree: "Vocational Diploma in Business Administration & Management",
    tags: ["Ciclo Formativo de Grado Medio", "EQF Level 4", "Graduated with Honors"],
    period: "2022 — 2024",
  },
];

const PROJECTS = [
  {
    id: "reconflow",
    name: "ReckonFlow",
    subtitle: "Corporate travel reconciliation API · backend",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Alembic", "pytest"],
    href: "https://github.com/ikrame-ih/reckon-flow",
    demo: "https://reckon-flow.onrender.com/docs",
    image: null,
    imageAlt: null,
    description:
      "Headless FastAPI API for travel approvals, an immutable double-entry ledger, LLM receipt extraction, and hybrid bank reconciliation — built so a retried POST cannot double-pay.",
    architectureSummary:
      "Clients hit idempotency middleware (Redis), then FastAPI routers and services, then PostgreSQL. Receipt uploads return 202 and extract in the background. Matching uses SQL prefilter, RapidFuzz, embeddings, and RRF.",
    mermaid: `flowchart LR
  Client --> Idem[Idempotency Redis]
  Idem --> API[FastAPI routers]
  API --> Svc[Services]
  Svc --> DB[(PostgreSQL)]
  API --> Receipts[202 + background extract]
  Receipts --> LLM[Groq or stub]
  Svc --> Match[SQL + RapidFuzz + RRF]
  classDef accent fill:#4A0E0E,stroke:#1A1A1A,color:#F5F1EB;
  class Idem,Svc,Match accent`,
  },
  {
    id: "live-event-radar",
    name: "Live Event Radar",
    subtitle: "Real-time venue ops dashboard · frontend",
    stack: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Zustand",
      "Leaflet",
      "Vitest",
      "Playwright",
    ],
    href: "https://github.com/ikrame-ih/live-event-radar",
    demo: "https://live-event-radar.vercel.app",
    image: ASSETS.projects.liveEventRadar,
    imageAlt: "Live Event Radar — command center and telemetry dashboard",
    description:
      "A venue ops dashboard where one event stream feeds a command center and a live map—built after watching floor updates arrive too late.",
    architectureSummary:
      "A mock event stream writes into a Zustand telemetry store. Pure derivations from that store feed two synchronized views: the Command Center (SVG venue map) and the Telemetry dashboard (Leaflet map).",
    mermaid: `flowchart LR
  Sim[Mock Event Stream] --> Store[Zustand telemetry-store]
  Store --> Derive[Pure derivations]
  Derive --> CC[Command Center /]
  Derive --> Dash[Telemetry /dashboard]
  CC --> SVG[SVG Venue Map]
  Dash --> Map[Leaflet Map]
  classDef accent fill:#4A0E0E,stroke:#1A1A1A,color:#F5F1EB;
  class Store,Derive accent`,
  },
  {
    id: "my-playthrough",
    name: "MyPlaythrough",
    badge: "DAW final project",
    subtitle: "Personal game library manager · full-stack",
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Vitest",
    ],
    href: "https://github.com/ikrame-ih/my-playthrough",
    demo: "https://my-playthrough.vercel.app/",
    image: ASSETS.projects.myPlaythrough,
    imageAlt: "MyPlaythrough — personal game library and community UI",
    description:
      "DAW capstone (max grade): a PERN app for backlog, play, and completions—with community, recommendations, and admin moderation.",
    architectureSummary:
      "A React SPA talks to an Express REST API. The API handles JWT and bcrypt auth, persists data in PostgreSQL, and proxies Steam/RAWG cover requests.",
    mermaid: `flowchart LR
  SPA[React SPA] --> API[Express REST API]
  API --> Auth[JWT + bcrypt]
  API --> DB[(PostgreSQL)]
  API --> Covers[Steam / RAWG proxy]
  classDef accent fill:#4A0E0E,stroke:#1A1A1A,color:#F5F1EB;
  class API,Auth,DB accent`,
  },
  {
    id: "aiba-widget",
    name: "Aiba",
    subtitle: "Desktop productivity companion · Electron",
    stack: ["Electron", "React 19", "TypeScript", "Vite", "Vitest"],
    href: "https://github.com/ikrame-ih/aiba-widget",
    demo: null,
    image: ASSETS.projects.aibaWidget,
    imageAlt: "Aiba — desktop focus timer and planning widget",
    description:
      "Local-first Windows widget to plan the day, protect a focus block, and unwind—no account, no cloud.",
    architectureSummary:
      "The React UI talks through an IPC preload bridge to the Electron main process. Main stores local JSON and runs the focus-guard overlay—no cloud dependency.",
    mermaid: `flowchart LR
  UI[React UI] --> Bridge[IPC preload]
  Bridge --> Main[Electron main]
  Main --> Store[Local JSON]
  Main --> Guard[Focus guard / overlay]
  classDef accent fill:#4A0E0E,stroke:#1A1A1A,color:#F5F1EB;
  class Main,Store accent`,
  },
];

const BENTO = {
  overline: "03 · interests",
  title: "Things I enjoy",
  titleAccent: "outside of development.",
  kicker: "The part of me that doesn't show up in a linter.",
  items: [
    {
      key: "gaming",
      label: "case file",
      title: "Gaming",
      body: "Ace Attorney is still my #1 franchise, no matter what else I play. Beyond that my taste is wide and mood-driven — story-heavy games, visual novels, mysteries, long JRPGs and ARPGs, even shooters, plus a soft spot for Pokémon ever since I was a kid.",
      span: "md:col-span-2 md:row-span-2",
      image: ASSETS.interests.gaming,
      imageAlt: "Phoenix Wright: Ace Attorney — my favourite franchise",
      imagePosition: "object-top",
    },
    {
      key: "music",
      label: "now playing",
      title: "Music",
      body: "I sing when I need to clear my head (though honestly I sing all the time). Voilà is usually on repeat, but I switch playlists with my mood.",
      span: "md:col-span-1 md:row-span-2",
      image: ASSETS.interests.music,
      imageAlt: "Voilà — my favourite group",
      imagePosition: "object-center",
    },
    {
      key: "aesthetics",
      label: "at the vanity",
      title: "Skincare",
      body: "I love learning more about skincare, haircare, and makeup every day — there's always something to improve.",
      span: "md:col-span-2 md:row-span-1",
      image: ASSETS.interests.aesthetics,
      imageAlt: "Skincare and makeup — personal routines",
      imagePosition: "object-center",
    },
    {
      key: "training",
      label: "weekly",
      title: "Training",
      body: "Three or four gym sessions a week when I can fit them in. I always train with headphones on — I can't really focus without music.",
      span: "md:col-span-1 md:row-span-1",
      image: ASSETS.interests.training,
      imageAlt: "Training — gym essentials",
      imagePosition: "object-center",
    },
    {
      key: "reading",
      label: "on the shelf",
      title: "Reading",
      body: "I like reading, and I pick one book to work through slowly — almost always fiction. The last one I finished was Touch of Death by Alice Wilde.",
      span: "md:col-span-1 md:row-span-1",
      image: ASSETS.interests.reading,
      imageAlt: "Touch of Death by Alice Wilde — last book I read",
      imagePosition: "object-center",
    },
    {
      key: "series",
      label: "evening watch",
      title: "Series & anime",
      body: "Anime, series, or films — I watch whatever I'm in the mood for, depending on how much time I have. Breaking Bad is the last series I finished.",
      span: "md:col-span-2 md:row-span-1",
      image: ASSETS.interests.series,
      imageAlt: "Anime and series — free time watching",
      imagePosition: "object-center",
    },
    {
      key: "travelling",
      label: "boarding soon",
      title: "Travelling",
      body: "I've developed a taste for travelling — and soon I'll see more of the world.",
      span: "md:col-span-3 md:row-span-1",
      image: ASSETS.interests.travelling,
      imageAlt: "City street corner from a recent trip",
      imagePosition: "object-center",
    },
  ],
};

const BLOG = {
  name: "Tizza's vault",
  avatar: ASSETS.tizzasVaultAvatar,
  avatarCredit: {
    artist: "heartpuff",
    url: "https://www.instagram.com/heart_puff/",
  },
  intro:
    "Engineering notes from building ReckonFlow and other projects — short posts about the decisions that actually mattered.",
  comingSoon: false,
  posts: [
    {
      slug: "idempotent-posts-ledger-api",
      title: "Designing idempotent POSTs for a ledger API",
      excerpt:
        "A client posts an expense, times out, and retries. Without an Idempotency-Key, you get two ledger entries. Here's how ReckonFlow claims a Redis key, caches the response, and fails open when Redis is down.",
      date: "2026-08-04",
      kind: "didactic",
      href: "/blog/idempotent-posts-ledger-api.html",
    },
  ],
};

const BOW_BOARD = {
  overline: "05 · guest book",
  title: "Thanks for reading.",
  titleAccent: "Pin a little bow before you go.",
  kicker:
    "Click either page to leave your bow — or focus a page and use arrow keys, then Enter. One per person; you can move it anytime.",
  signedKicker:
    "That's your bow on the page — click again, or use arrow keys and Enter, to move it.",
  emptyState: "Be the first bow on the page — click or use the keyboard.",
  leftWatermark:
    "For everyone who scrolled past the projects and stayed for the details.",
  rightWatermark: "A small thank-you. Your bow here means you were here.",
  countLabel: "people left their bow",
  countLabelSingular: "person left their bow",
  marginHint: "one bow per person · click or arrows + Enter",
  marginHintSigned: "your bow · click or arrows to move",
};


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
