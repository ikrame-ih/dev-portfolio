import { ASSETS } from "./assets.js";

// Site copy lives here — edit text in this file, not scattered across components.
export const PROFILE = {
  name: "Ikrame I. H.",
  location: "Málaga, ES",
  workPreference: "Available for remote or hybrid opportunities",
  email: "ikihga2223@gmail.com",
  phone: "+34 682 02 76 93",
  github: "https://github.com/ikrame-ih",
  portfolioRepo: "https://github.com/ikrame-ih/dev-portfolio",
  linkedin: "https://www.linkedin.com/in/ikrame-ih/",
  siteUrl: "https://ikrame-ih.vercel.app",
  overline: "SOFTWARE DEVELOPER · FRONTEND · BACKEND",
  headlineParts: [
    { text: "I build software" },
    { text: "with attention to detail", accent: true },
    { text: "and the context behind\u00A0it.", italic: true },
  ],
  heroSubtext:
    "Hi, I'm Ikrame Ibn Hayoun, a software developer based in Málaga, specializing in frontend development while actively building backend solutions. I enjoy turning ideas into intuitive, reliable, and scalable applications.",
  tagline:
    "Software developer · DAW graduate · AI & Big Data specialisation from Sep 2026",
  practiceAside: {
    title: "At a glance",
    text: "Higher Vocational Diploma (DAW, Jun 2026) — final project MyPlaythrough awarded maximum grade. AI & Big Data Specialisation Course from Sep 2026. Side projects on GitHub use component-based layouts, tests, and CI; intern work focused on reusable components and semantic markup.",
  },
};

export const LANGUAGES = [
  { lang: "Spanish", level: "Native", code: "ES" },
  { lang: "English", level: "C1", detail: "Advanced", code: "EN" },
  { lang: "Darija", level: "Native", detail: "Moroccan Arabic", code: "AR" },
];

// Four skill domains — rendered as a 2×2 panel grid in CVSection.
export const STACK = {
  domains: [
    {
      id: "frontend",
      index: "01",
      title: "Frontend",
      kicker: "Interfaces, motion, and everything the eye touches.",
      tone: "burgundy",
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
      id: "backend",
      index: "02",
      title: "Backend & data",
      kicker: "APIs, persistence, and the pipelines between them.",
      tone: "ink",
      groups: [
        {
          label: "APIs & runtime",
          items: [
            "Node.js",
            "Express",
            "Python",
            "FastAPI",
            "REST APIs",
            "JWT",
          ],
        },
        {
          label: "Data",
          items: ["PostgreSQL", "SQL", "dbt", "Dagster"],
        },
      ],
    },
    {
      id: "tooling",
      index: "03",
      title: "Tooling & delivery",
      kicker: "Ship, test, and keep the loop honest.",
      tone: "ink",
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

export const STACK_SKILL_COUNT =
  STACK.domains.reduce(
    (n, d) => n + d.groups.reduce((m, g) => m + g.items.length, 0),
    0,
  ) + LANGUAGES.length;

export const EXPERIENCE = [
  {
    company: "DATA CONTROL",
    role: "Software Developer Intern",
    period: "Mar 2026 — Jun 2026",
    track: "tech",
    bullets: [
      "Developed client websites with reusable components and responsive layouts.",
      "Included accessibility and semantic markup from the start.",
    ],
  },
  {
    company: "EY Global Delivery Services",
    role: "Executive Assistant",
    period: "Feb 2025 — Mar 2026",
    track: "hybrid",
    bullets: [
      "Coordinated executive visits: logistics, agendas, materials, and stakeholder updates.",
      "Created internal Power Apps to streamline event coordination.",
      "Managed travel, expense reports (Concur), Outlook, Teams, and SharePoint.",
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
    period: "Mar — Oct 2024",
    track: "biz",
    bullets: [
      "Reconciled bank accounts and posted invoices, including import purchases.",
      "Tracked vehicle and import costs in Excel; managed incoming documentation.",
    ],
  },
];

// Titles use English + Spanish pathway names + EQF so EU / UK / ES readers align.
export const EDUCATION = [
  {
    school: "IES Zaidín Vergeles",
    degree: "AI & Big Data Specialisation Course",
    detail:
      "Spanish Curso de Especialización · EQF Level 5 · after Higher Vocational Diploma",
    period: "Starting Sep 2026",
  },
  {
    school: "CESUR Este, Málaga",
    degree: "Higher Vocational Diploma in Web Application Development (DAW)",
    detail:
      "Spanish Ciclo Formativo de Grado Superior · EQF Level 5 · HND-equivalent",
    period: "Sep 2024 — Jun 2026",
  },
  {
    school: "I.E.S. Politécnico Jesús Marín",
    degree: "Intermediate Vocational Diploma in Administrative Management",
    detail: "Spanish Ciclo Formativo de Grado Medio · EQF Level 4 · Honours",
    period: "2022 — 2024",
  },
];

export const PROJECTS = [
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
    description:
      "A dashboard for brand activations, built with reusable components and shared Zustand state. Stock events follow one validated path into two synchronized views—a command center and a telemetry map—after I saw updates arrive too late on event floors.",
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
    description:
      "DAW capstone (maximum grade): a full-stack PERN app to track backlog, active play, and completions—with community features, recommendations, threaded discussions, and admin moderation. Built with JWT auth, Docker Compose, and CI.",
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
    description:
      "Local-first Windows widget to plan the day, protect a focus block, and unwind with a clear next step. Compact timer plus expanded studio shell, session history, focus guard, and offline Ask Aiba help—no account, no cloud.",
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
  {
    id: "reconflow",
    name: "ReconFlow",
    subtitle: "Import reconciliation pipeline · backend (in progress)",
    stack: ["Python", "FastAPI", "dbt", "PostgreSQL", "Dagster"],
    href: null,
    demo: null,
    description:
      "Headless FastAPI pipeline with separate ingest, transform, and match stages: bank CSVs and invoice data into a reconciliation mart and an exceptions queue. Based on import reconciliation I did in admin roles.",
    architectureSummary:
      "Bank CSV extracts and invoice webhook JSON land in a raw zone. dbt transforms feed a fuzzy-match and FX stage, which writes a reconciliation mart and an exceptions queue.",
    mermaid: `flowchart TD
  CSV[Bank CSV extracts] --> Raw[(Raw zone)]
  WH[Invoice webhooks JSON] --> Stream[Stream enricher]
  Stream --> Raw
  Raw --> dbt[dbt transforms]
  dbt --> Match[Fuzzy match + FX]
  Match --> Mart[Reconciliation mart]
  Match --> Quar[Exceptions queue]
  classDef accent fill:#4A0E0E,stroke:#1A1A1A,color:#F5F1EB;
  class Stream,dbt,Match accent`,
  },
];

export const BENTO = {
  overline: "03 · interests",
  title: "Things I enjoy",
  titleAccent: "outside of development.",
  kicker: "The part of me that doesn't show up in a linter.",
  items: [
    {
      key: "gaming",
      label: "case file",
      title: "Gaming",
      body: "Ace Attorney is still my #1 series, no matter what else I play. Otherwise it's mostly story-heavy stuff — visual novels, mysteries, long JRPGs, plus a soft spot for Pokémon ever since I was a kid.",
      span: "md:col-span-2 md:row-span-2",
      image: ASSETS.interests.gaming,
      imageAlt: "Phoenix Wright: Ace Attorney — my favourite game",
      imagePosition: "object-top",
    },
    {
      key: "music",
      label: "now playing",
      title: "Music",
      body: "I sing when I need to switch my head off. Voilà is usually on repeat, and I keep different playlists depending on the mood.",
      span: "md:col-span-1 md:row-span-2",
      image: ASSETS.interests.music,
      imageAlt: "Voilà — my favourite group",
      imagePosition: "object-center",
    },
    {
      key: "aesthetics",
      label: "on the shelf",
      title: "Skincare",
      body: "I love learning more about skincare, haircare, and makeup every day — there's always something new to discover.",
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
      body: "I like reading one book at a time, and it's almost always fiction. The last one I finished was Touch of Death by Alice Wilde.",
      span: "md:col-span-1 md:row-span-1",
      image: ASSETS.interests.reading,
      imageAlt: "Touch of Death by Alice Wilde — last book I read",
      imagePosition: "object-center",
    },
    {
      key: "series",
      label: "evening watch",
      title: "Series & anime",
      body: "Anime, a series, or a film on a quiet evening — that's usually how I watch things. Breaking Bad is the last series I finished.",
      span: "md:col-span-2 md:row-span-1",
      image: ASSETS.interests.series,
      imageAlt: "Anime and series — free time watching",
      imagePosition: "object-center",
    },
  ],
};

export const BLOG = {
  name: "Tizza's vault",
  slug: "tizzas-vault",
  avatar: ASSETS.tizzasVaultAvatar,
  avatarCredit: {
    artist: "heartpuff",
    url: "https://www.instagram.com/heart_puff/",
  },
  intro:
    "Notes from my corner of the internet about development, what I'm learning, music, anime, and whatever else catches my interest. It's not really a technical blog, more a place to think aloud, share what I enjoy, and leave room to experiment.",
  comingSoon: true,
  posts: [
    {
      slug: "planning-first",
      title: "Planning first. Yes, I'm one of those people.",
      excerpt:
        "Colour-coded notes, neat folders. Moving from markers to a computer felt like a revelation. Obsidian as a developer felt like the tool I'd been missing.",
      date: "2026-04-02",
      kind: "personal",
    },
    {
      slug: "it-never-really-stops",
      title: "It never really stops",
      excerpt:
        "Tech means constant learning. I stopped chasing everything and focus on getting a bit better each day. Staying curious is enough.",
      date: "2026-03-20",
      kind: "diary",
    },
    {
      slug: "the-fun-part-building-things",
      title: "The fun part: making something real",
      excerpt:
        "Turning an idea into something you can use. Starting from scratch, hitting problems, figuring them out. Messy sometimes, but that's where the good stuff happens.",
      date: "2026-02-10",
      kind: "didactic",
    },
  ],
};

export const BOW_BOARD = {
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
  countLabel: "people were here",
  countLabelSingular: "person was here",
  marginHint: "one bow per person · click or arrows + Enter",
  marginHintSigned: "your bow · click or arrows to move",
};
