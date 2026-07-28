import { ASSETS } from "../assets.js";

// English site copy — edit here (and locales/es.js), not scattered across components.
const PROFILE = {
  name: "Ikrame I. H.",
  location: "Málaga, ES",
  workPreference: "Available for remote or hybrid opportunities",
  email: "ikihga2223@gmail.com",
  phone: "+34 682 02 76 93",
  github: "https://github.com/ikrame-ih",
  portfolioRepo: "https://github.com/ikrame-ih/dev-portfolio",
  linkedin: "https://www.linkedin.com/in/ikrame-ih/",
  siteUrl: "https://ikrame.dev",
  overline: "SOFTWARE DEVELOPER · FRONTEND · BACKEND",
  headlineParts: [
    { text: "I build software" },
    { text: "with attention to detail", accent: true },
    { text: "and the context behind\u00A0it.", italic: true },
  ],
  heroSubtext:
    "Hi, I'm Ikrame Ibn Hayoun, a software developer based in Málaga. I specialize in frontend development while also enjoying building backend solutions. I enjoy turning ideas into intuitive, reliable, and scalable applications. AI has become a natural part of my workflow, and I'm always exploring new ways to apply it.",
  // Compact hero facts — avoid repeating overline role or Málaga (already in copy + photo).
  heroFacts: [
    { eyebrow: "Open to", text: "Remote · hybrid" },
    { eyebrow: "Path", text: "DAW · Jun 2026" },
    { eyebrow: "Focus", text: "AI & Big Data", accent: true },
  ],
  // Flat string for terminal / plain contexts.
  tagline: "DAW graduate · specializing in AI & Big Data · open to remote or hybrid",
  // Friendly blurb for CLI `about` — warm, specific, not a CV tagline dump.
  cliAbout: [
    "Hi — I'm Ikrame. I build software in Málaga, with a soft spot for interfaces that feel calm and considered.",
    "I'm at ease on both sides of a product: the UI people touch, and the APIs and data that hold it up.",
    "Away from the editor I'm usually deep in a story-heavy game, singing to reset my head, or fussing over little aesthetic details.",
    "Just wrapped DAW (Jun 2026). Focusing on AI & Big Data next. Remote or hybrid suits me well.",
    "I also built this portfolio end to end — the code is on GitHub.",
  ],
  // Ultra-short pitch for CLI `tldr`.
  cliTldr: [
    "Software developer in Málaga — frontend first, with solid backend work too.",
    "AI is a natural part of how I build; specializing in AI & Big Data. Looking for remote or hybrid where craft and clarity matter.",
  ],
  cliAvail:
    "Open to remote or hybrid. Based in Málaga (CET). Happy to chat anytime.",
  cliNow:
    "Just finished DAW (Jun 2026) and internship work at DATA CONTROL. AI is already in my day-to-day build loop; focusing on AI & Big Data — actively open to the next role.",
  portraitLink: {
    label: "Say hi on LinkedIn →",
  },
  practiceAside: {
    title: "At a glance",
    text: "Higher Vocational Diploma (DAW, Jun 2026) — final project MyPlaythrough awarded maximum grade. Specializing in AI & Big Data. Side projects on GitHub use component-based layouts, tests, and CI; intern work focused on reusable components and semantic markup. This portfolio included — built from scratch.",
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
      id: "frontend",
      index: "01",
      title: "Frontend",
      kicker: "Interfaces, motion, and everything the eye touches.",
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
      groups: [
        {
          label: "APIs & runtime",
          items: [
            "Node.js",
            "Express",
            "Java",
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
    period: "Feb 2025 — Mar 2026",
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
    period: "Mar — Oct 2024",
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
    degree: "AI & Big Data Specialisation Course",
    tags: [
      "Curso de Especialización",
      "EQF Level 5",
      "After Higher Vocational Diploma",
    ],
    period: "Starting Sep 2026",
  },
  {
    school: "CESUR Este, Málaga",
    degree: "Higher Vocational Diploma in Web Application Development (DAW)",
    tags: [
      "Ciclo Formativo de Grado Superior",
      "EQF Level 5",
      "HND-equivalent",
    ],
    period: "Sep 2024 — Jun 2026",
  },
  {
    school: "I.E.S. Politécnico Jesús Marín",
    degree: "Intermediate Vocational Diploma in Administrative Management",
    tags: ["Ciclo Formativo de Grado Medio", "EQF Level 4", "Honours"],
    period: "2022 — 2024",
  },
];

const PROJECTS = [
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
  {
    id: "reconflow",
    name: "ReconFlow",
    subtitle: "Import reconciliation pipeline · backend (in progress)",
    stack: ["Python", "FastAPI", "dbt", "PostgreSQL", "Dagster"],
    href: null,
    demo: null,
    image: null,
    imageAlt: null,
    description:
      "Headless FastAPI pipeline: bank CSVs and invoices through ingest, transform, and match into a reconciliation mart.",
    architectureSummary:
      "Bank CSV extracts and invoice webhook JSON land in a raw zone. dbt transforms feed a fuzzy-match and FX stage, which writes a reconciliation mart and an exceptions queue.",
    mermaid: `flowchart LR
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
