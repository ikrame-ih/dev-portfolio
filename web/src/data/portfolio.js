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
  overline: "WEB DEVELOPER · FRONTEND · BACKEND",
  headline: "I build software with attention to detail",
  headlineAccent: "and the context behind it.",
  tagline:
    "Web developer · finishing DAW · AI & Big Data postgraduate starting soon",
  positioning:
    "Hello, I'm Ikrame Ibn Hayoun. I'm a frontend developer based in Málaga, equally comfortable on the backend. Before I wrote code professionally, I worked in admin and executive support (reconciliation, reporting, and coordination across teams). That background helps me understand why software exists, not just how to write it.",
  positioningParts: [
    "Hello, I'm Ikrame Ibn Hayoun. I'm a ",
    { em: "frontend developer" },
    " based in Málaga, ",
    { em: "equally comfortable on the backend" },
    ". Before I wrote code professionally, I worked in admin and executive support (reconciliation, reporting, and coordination across teams). That background helps me understand why software exists, not just how to write it.",
  ],
  practiceAside: {
    title: "At a glance",
    text: "Finishing DAW (Jun 2026). AI & Big Data postgraduate from Sep 2026. Before development: admin and executive support, focused on reconciliation, reporting, and cross-team coordination.",
  },
};

export const LANGUAGES = [
  { lang: "Spanish", level: "Native", code: "ES" },
  { lang: "English", level: "C1", detail: "Advanced", code: "EN" },
  { lang: "Darija", level: "Native", code: "AR" },
];

export const STACK = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "Zustand",
    "Leaflet",
    "Semantic HTML",
    "CSS Grid / Flexbox",
    "Vitest / Playwright",
  ],
  backend: [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "REST APIs",
    "SQL",
    "Node.js",
    "Java",
    "dbt",
    "Dagster",
  ],
};

export const EXPERIENCE = [
  {
    company: "DATA CONTROL",
    role: "Web Developer Intern",
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

export const EDUCATION = [
  {
    school: "Postgraduate programme (ESP)",
    degree: "AI & Big Data",
    period: "Starting Sep 2026",
  },
  {
    school: "CESUR Este, Málaga",
    degree: "Higher Diploma in Web Application Development (DAW)",
    period: "Sep 2024 — Jun 2026",
  },
  {
    school: "I.E.S. Politécnico Jesús Marín",
    degree: "Administrative Management — Honours",
    period: "2022 — 2024",
  },
];

export const PROJECTS = [
  {
    id: "live-event-radar",
    name: "Live Event Radar",
    subtitle: "Real-time venue telemetry · frontend",
    stack: [
      "Next.js",
      "React 19",
      "Zustand",
      "Leaflet",
      "Web Workers",
      "TypeScript",
    ],
    href: "https://github.com/ikrame-ih/live-event-radar",
    demo: "https://live-event-radar.vercel.app",
    description:
      "A dashboard for brand activations: zone stock levels, a venue map, and a live activity feed. I started it after working events where stock updates arrived too late to act on.",
    mermaid: `flowchart LR
  Sim[Mock Event Stream] --> Store[Zustand telemetry-store]
  Store --> CC[Command Center /]
  Store --> Dash[Telemetry /dashboard]
  Store --> Worker[analytics.worker]
  Worker --> Dash
  CC --> SVG[SVG Venue Map]
  Dash --> Map[Leaflet Map]
  classDef accent fill:#4A0E0E,stroke:#1A1A1A,color:#F5F1EB;
  class Store,Worker accent`,
    shows: {
      title: "What it shows",
      bullets: [
        "Real-time UI with maps and an activity feed that stays responsive under load.",
        "Started from a floor-level problem: stock updates that arrived too late to act on.",
        "React 19, TypeScript, Web Workers, Zustand, Leaflet. Live demo available.",
      ],
    },
  },
  {
    id: "reconflow",
    name: "ReconFlow",
    subtitle: "Import reconciliation pipeline · backend (in progress)",
    stack: ["Python", "FastAPI", "dbt", "PostgreSQL", "Dagster"],
    href: null,
    demo: null,
    description:
      "A headless pipeline to match import invoices against bank extracts, based on reconciliation work I did in admin roles. API and CLI only, no UI.",
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
    shows: {
      title: "What it shows",
      bullets: [
        "Headless pipeline: ingest, transforms, fuzzy matching, and an exceptions queue.",
        "Based on import reconciliation I did in admin roles, not a tutorial dataset.",
        "Still in progress: one clear metric (auto-match rate) before adding more.",
      ],
    },
  },
];

export const BENTO = {
  overline: "03 · interests",
  title: "What I unwind with.",
  titleAccent: "When I'm not at the keyboard.",
  kicker:
    "Off-the-clock interests in different sizes, same calm pace. Nothing here needs to match my CV.",
  items: [
    {
      key: "gaming",
      title: "Gaming",
      body: "Story-heavy games mostly: visual novels, mysteries, long JRPGs. Ace Attorney has been my comfort series for years.",
      span: "md:col-span-2 md:row-span-2",
      image: ASSETS.interests.gaming,
      imageAlt: "Phoenix Wright: Ace Attorney — my favourite game",
      imagePosition: "object-top",
    },
    {
      key: "music",
      title: "Music",
      body: "Voilà is usually on repeat. I sing to switch off and keep playlists for different moods.",
      span: "md:col-span-1 md:row-span-2",
      image: ASSETS.interests.music,
      imageAlt: "Voilà — my favourite group",
      imagePosition: "object-center",
    },
    {
      key: "aesthetics",
      title: "Skincare",
      body: "I've kept the same skincare, haircare, and makeup routines for years. I like knowing what works and sticking with it.",
      span: "md:col-span-2 md:row-span-1",
      image: ASSETS.interests.aesthetics,
      imageAlt: "Skincare and makeup — personal routines",
      imagePosition: "object-center",
    },
    {
      key: "training",
      title: "Training",
      body: "Three or four weight sessions a week when I can. Always with headphones on.",
      span: "md:col-span-1 md:row-span-1",
      image: ASSETS.interests.training,
      imageAlt: "Training — gym essentials",
      imagePosition: "object-center",
    },
    {
      key: "reading",
      title: "Reading",
      body: "I usually read one book at a time, mostly fiction. Last finished: Touch of Death by Alice Wilde.",
      span: "md:col-span-1 md:row-span-1",
      image: ASSETS.interests.reading,
      imageAlt: "Touch of Death by Alice Wilde — last book I read",
      imagePosition: "object-center",
    },
    {
      key: "series",
      title: "Series & anime",
      body: "Anime, series, and films on slow evenings. Last finished: Breaking Bad.",
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
    "Click anywhere on either page to leave your bow. One per person, and you can move it anytime.",
  emptyState: "No bows yet. Click a page to leave yours.",
  countLabel: "bows",
  marginHint: "one bow per person · place it anywhere",
};
