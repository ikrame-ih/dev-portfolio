import { ASSETS } from "./assets.js";

export const PROFILE = {
  name: "Ikrame I. H.",
  location: "Málaga, ES",
  email: "ikihga2223@gmail.com",
  phone: "+34 682 02 76 93",
  github: "https://github.com/ikrame-ih",
  overline: "WEB DEVELOPER · FRONTEND · BACKEND",
  headline: "I build software with care for detail",
  headlineAccent: "and the context behind it.",
  tagline: "Web developer · finishing DAW · AI & Big Data postgraduate starting soon",
  positioning:
    "Hello, I'm Ikrame Ibn Hayoun. I'm a frontend developer based in Málaga, equally comfortable on the backend. My experience in executive support gave me a deep understanding of business logic before I ever wrote code professionally. That perspective carries through in everything I build — practical tools shaped by real workflows.",
  positioningParts: [
    "Hello, I'm Ikrame Ibn Hayoun. I'm a ",
    { em: "frontend developer" },
    " based in Málaga, ",
    { em: "equally comfortable on the backend" },
    ". My experience in executive support gave me a deep understanding of business logic before I ever wrote code professionally. That perspective carries through in everything I build — practical tools shaped by real workflows.",
  ],
  practiceQuote:
    "Good tools respect the person using them. I picked that up coordinating visits and reconciling accounts long before I touched React.",
};

export const LANGUAGES = [
  { lang: "Spanish", level: "Native", code: "ES" },
  { lang: "English", level: "C1 · Advanced", code: "EN" },
  { lang: "Darija", level: "Native", code: "AR" },
];

export const STACK = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Semantic HTML",
    "CSS Grid / Flexbox",
    "Vitest / Playwright",
  ],
  backend: ["Python", "FastAPI", "PostgreSQL", "REST APIs", "SQL", "Node.js"],
};

export const EXPERIENCE = [
  {
    company: "DATA CONTROL",
    role: "Web Developer Intern",
    period: "Mar 2026 — Present",
    track: "tech",
    bullets: [
      "Building client websites: layout, reusable components, and responsive pages.",
      "Keeping accessibility and semantic markup in scope from the start.",
    ],
  },
  {
    company: "EY Global Delivery Services",
    role: "Executive Assistant",
    period: "Feb 2025 — Mar 2026",
    track: "hybrid",
    bullets: [
      "Coordinated executive visits: logistics, agendas, materials, and stakeholder updates.",
      "Built internal Power Apps to streamline event workflows.",
      "Travel planning, expense reports (Concur), Outlook, Teams, SharePoint.",
    ],
  },
  {
    company: "EC Azafatas",
    role: "Brand Ambassador",
    period: "Feb 2026",
    track: "biz",
    bullets: [
      "Product tastings and short presentations in busy retail environments.",
      "Handled day-to-day booth logistics and end-of-day inventory updates.",
    ],
  },
  {
    company: "Conciencia Fundraising",
    role: "Accounting & Operations Admin",
    period: "Nov — Dec 2024",
    track: "biz",
    bullets: [
      "Donor reporting and follow-up via Drive, Outlook, and Evergiving.",
      "HR tasks in Factorial; cost tracking for travel and expenses.",
      "Team workflows in Asana, Notion, and Slack; reporting views in Looker.",
    ],
  },
  {
    company: "Sylvis Profesional Cosmetic",
    role: "Admin Assistant",
    period: "Mar — Oct 2024",
    track: "biz",
    bullets: [
      "Bank reconciliation and invoice posting, including import purchases.",
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
    stack: ["Next.js", "React 19", "Zustand", "Leaflet", "Web Workers", "TypeScript"],
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
        "Frontend craft: real-time UI, maps, and a bounded activity feed that stays responsive.",
        "Product sense: built from a floor-level problem (late stock updates), not from a framework choice.",
        "Stack depth: React 19, TypeScript, Web Workers, Zustand, Leaflet — live demo available.",
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
      "A headless pipeline to match import invoices against bank extracts — based on reconciliation work I did in admin roles. API and CLI only, no UI.",
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
        "Backend focus: ingest, transforms, fuzzy matching, and an exceptions queue — no UI layer.",
        "Business logic: import reconciliation inspired by real admin work, not a tutorial dataset.",
        "In progress: scope kept to one clear metric (auto-match rate) before adding features.",
      ],
    },
  },
];

export const BENTO = {
  overline: "03 · interests",
  title: "What I unwind with.",
  titleAccent: "Alongside the day job.",
  kicker: "Gaming, music, training, reading — the usual recharge list. No tie-in to my CV required.",
  items: [
    {
      key: "gaming",
      title: "Gaming",
      body:
        "Mostly story-heavy games — visual novels, mysteries, long JRPGs. Ace Attorney is my comfort pick.",
      span: "md:col-span-2 md:row-span-2",
      image: ASSETS.interests.gaming,
      imageAlt: "Phoenix Wright: Ace Attorney — my favourite game",
      imagePosition: "object-top",
    },
    {
      key: "music",
      title: "Music & singing",
      body:
        "Voilà on repeat, singing when I need to switch off, playlists for every mood. Music makes everything better — coding, commuting, the whole lot.",
      span: "md:col-span-1 md:row-span-2",
      image: ASSETS.interests.music,
      imageAlt: "Voilà — my favourite group",
      imagePosition: "object-center",
    },
    {
      key: "training",
      title: "Training",
      body: "Three or four sessions a week when I can — mostly weights, always with headphones on.",
      span: "md:col-span-1 md:row-span-1",
      image: ASSETS.interests.training,
      imageAlt: "Training — gym essentials",
      imagePosition: "object-center",
    },
    {
      key: "reading",
      title: "Reading",
      body:
        "Last finished: Touch of Death by Alice Wilde. I take my time — one book at a time, usually fiction.",
      span: "md:col-span-1 md:row-span-1",
      image: ASSETS.interests.reading,
      imageAlt: "Touch of Death by Alice Wilde — last book I read",
      imagePosition: "object-center",
    },
    {
      key: "series",
      title: "Series & anime",
      body:
        "In my free time I catch up on anime, series, and films — whatever pulls me in. Last finished: Breaking Bad.",
      span: "md:col-span-1 md:row-span-1",
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
    "Stuff from my corner of the internet — dev, things I'm learning, music, anime, whatever. Half personal, half hoping you can learn something from me too.",
  syncNote:
    "More soon — posts written in my vault, published here",
  posts: [
    {
      slug: "planning-first",
      title: "Planning first. Yes, I'm one of those people.",
      excerpt:
        "Colour-coded notes, neat folders — moving from markers to a computer felt like a revelation. Obsidian as a developer felt like the tool I'd been missing.",
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
      title: "The fun part: building things",
      excerpt:
        "Turning an idea into something real. Building from scratch, hitting problems, figuring them out — messy sometimes, but that's where the good stuff happens.",
      date: "2026-02-10",
      kind: "didactic",
    },
  ],
};

export const BOW_BOARD = {
  overline: "05 · guest book",
  title: "Sign the page.",
  titleAccent: "If you made it this far.",
  kicker:
    "Thanks for reading. Click anywhere on either page to leave one bow — your signature on the shared book. Click again to move it.",
  emptyState: "No signatures yet. Click a page to leave your bow.",
  countLabel: "signatures",
  marginHint: "one signature each · pick any spot",
};
