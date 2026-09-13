import { ASSETS } from "../assets.js";

// English site copy — edit here (and locales/es.js), not scattered across components.
const PROFILE = {
  name: "Ikrame Ibn Hayoun",
  location: "Málaga, ES",
  workPreference: "Open to remote or hybrid roles",
  email: "ikihga2223@gmail.com",
  phone: "+34 682 02 76 93",
  github: "https://github.com/ikrame-ih",
  portfolioRepo: "https://github.com/ikrame-ih/dev-portfolio",
  linkedin: "https://www.linkedin.com/in/ikrame-ih/",
  buyMeACoffee: "https://buymeacoffee.com/ikrame.dev",
  siteUrl: "https://ikrame.dev",
  overline: "PYTHON BACKEND · APPLIED AI · FASTAPI",
  headlineParts: [
    { text: "I build Python backends where AI extracts and " },
    { text: "code decides.", accent: true },
  ],
  heroSubtext:
    "I'm Ikrame, a backend developer in Málaga. I work in FastAPI and PostgreSQL on paths that have to stay correct when two people act at once, or a request is retried. Open to remote or hybrid roles.",
  heroFacts: [
    { eyebrow: "English", text: "C1 Advanced" },
    { eyebrow: "Now", text: "Vocational AI specialization" },
    { eyebrow: "On PyPI", text: "import-resolve-cli", accent: true },
  ],
  tagline: "Python backend · FastAPI · applied AI · open to remote or hybrid",
  cliAbout: [
    "Hi. I'm Ikrame. Backend developer in Málaga, with a soft spot for calm interfaces when I build the UI side.",
    "Most of my energy goes to FastAPI, PostgreSQL, and applied AI on production paths: structured extraction, matching, tests.",
    "Away from the editor I'm usually deep in a story-heavy game, singing to reset my head, or fussing over little aesthetic details.",
    "Finished DAW (Jun 2026). Starting a vocational specialization in AI and big data, online and compatible with full-time work. Preparing official cloud certifications. Looking for remote or hybrid backend and AI roles.",
    "I also built this portfolio end to end. The code is on GitHub.",
  ],
  cliTldr: [
    "Python backend in Málaga. FastAPI, PostgreSQL, applied AI. Ships React when a product needs a UI.",
    "ReckonFlow is the flagship, and it's shipped (ledger API, locked reconcile, structured extraction). Validata is B2B SaaS with Jairo García Antolín, in progress. Looking for remote or hybrid backend and AI roles.",
  ],
  cliAvail:
    "Open to remote or hybrid. Based in Málaga (CET). Happy to chat anytime.",
  cliNow:
    "Finished DAW (Jun 2026) and the DATA CONTROL internship. Starting an online vocational specialization in AI and big data, and preparing cloud certifications. ReckonFlow is done. Validata is in progress. Open to a backend or AI role.",
  portraitLink: {
    label: "Say hi on LinkedIn →",
  },
  practiceAside: {
    title: "At a glance",
    text: "DAW, Jun 2026. Final project MyPlaythrough got the maximum grade. Backend and applied AI on GitHub: FastAPI, PostgreSQL, LLM extraction, embeddings, tests, and CI. This portfolio too — built from scratch.",
  },
};

const LANGUAGES = [
  { lang: "Spanish", level: "Native", code: "ES" },
  { lang: "English", level: "C1", detail: "Advanced", code: "EN" },
  { lang: "Darija", level: "Native", detail: "Moroccan Arabic", code: "AR" },
];

// Four skill domains — full-width catalog bands in CVSection.
// Languages sit below as three type plates, not a list.
const STACK = {
  domains: [
    {
      id: "backend",
      index: "01",
      title: "Backend & data",
      kicker: "APIs, databases, and the messy bit between them.",
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
            "Celery",
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
          pairWithNext: true,
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
          pairWithNext: true,
          items: ["Zustand", "Leaflet"],
        },
        {
          label: "Craft",
          items: ["Semantic HTML", "Accessibility"],
        },
      ],
    },
    {
      id: "ai",
      index: "03",
      title: "AI",
      kicker: "In APIs, and with agents: prompts, skills, routing, context.",
      groups: [
        {
          label: "In product",
          items: [
            "LLMs",
            "PydanticAI",
            "Prompt engineering",
            "Structured outputs",
            "Hashed-token vectors",
            "Hybrid retrieval",
            "RRF",
            "Guardrails",
          ],
        },
        {
          label: "With agents",
          items: [
            "LangGraph",
            "Context engineering",
            "LLM routing",
            "Agent skills",
            "Git worktrees",
            "Spec-driven development",
          ],
        },
        {
          label: "In progress · AI & Big Data",
          items: ["PySpark", "NumPy", "Pandas", "TensorFlow", "PyTorch", "Spark", "Kafka"],
        },
      ],
    },
    {
      id: "tooling",
      index: "04",
      title: "Tooling & delivery",
      kicker: "Tests, CI, and the rest of the delivery loop.",
      groups: [
        {
          label: "Toolchain",
          items: [
            "Git",
            "GitHub Actions",
            "pytest",
            "Vitest",
            "Playwright",
            "Docker",
            "Vercel",
            "DataFlex",
            "Obsidian",
            "Power Fx",
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
      "Developed internal applications in a DataFlex environment and in Python: data access, business logic, and ongoing customization.",
      "Built a Moodle learning platform from scratch: environment and install, course and content structure, users and roles, SQL/database, and CSS/UI theming end to end.",
    ],
  },
  {
    company: "EY Global Delivery Services",
    role: "Executive Assistant",
    period: "Jan 2025 — Mar 2026",
    track: "hybrid",
    bullets: [
      {
        text: "Built a Power App (Power Fx) that ran the CNS Christmas raffle end-to-end — registration and number assignment in one place, instead of chasing it over email or Teams.",
        proof: {
          id: "ey-holiday-raffle",
          name: "CNS Christmas raffle — Power App",
          image: ASSETS.experience.eyHolidayRaffle,
          imageAlt:
            "EY Power App for the CNS Christmas hamper raffle — claim a number and store name, email, and assignment",
        },
      },
      "Coordinated strategic client visits in Málaga end to end: agendas, logistics, and the on-site experience — days that often shaped whether a deal moved forward.",
      "Ran day-to-day ops — travel, Concur, Outlook, Teams, SharePoint, and the firm's internal tools — in a global professional-services setting.",
    ],
  },
  {
    company: "EC Azafatas",
    role: "Brand Ambassador",
    period: "Feb 2026",
    track: "biz",
    bullets: [
      "Ran product tastings and stand logistics in high-traffic retail, including end-of-day inventory for the agency.",
    ],
  },
  {
    company: "Conciencia Fundraising",
    role: "Accounting & Administrative Assistant",
    period: "Nov — Dec 2024",
    track: "biz",
    bullets: [
      "Tracked donors and fundraisers in Drive, Outlook, Evergiving, Factorial, Odoo, and Looker; recorded travel and expense costs for internal cost control.",
    ],
  },
  {
    company: "Sylvis Profesional Cosmetic",
    role: "Administrative Assistant",
    period: "Mar — Oct 2024",
    track: "biz",
    bullets: [
      "Reconciled bank accounts, posted company and import invoices, and tracked vehicle and import costs in Excel.",
    ],
  },
];

// Titles use English + Spanish pathway names + EQF so EU / UK / ES readers align.
const EDUCATION = [
  {
    school: "IES Zaidín Vergeles",
    degree:
      "Vocational specialization in artificial intelligence and big data",
    tags: [
      "Máster de FP",
      "EQF Level 5",
      "100% online",
    ],
    period: "Sep 2026 to present",
  },
  {
    school: "CESUR Este, Málaga",
    degree: "Higher vocational degree in web application development (DAW)",
    tags: [
      "Ciclo formativo de grado superior",
      "EQF Level 5",
      "Matrícula de Honor (10/10)",
    ],
    period: "Sep 2024 to Jun 2026",
  },
  {
    school: "I.E.S. Politécnico Jesús Marín",
    degree: "Vocational diploma in business administration and management",
    tags: [
      "Ciclo formativo de grado medio",
      "EQF Level 4",
      "Matrícula de Honor",
    ],
    period: "2022 to 2024",
  },
];

const PROJECTS = [
  {
    id: "reconflow",
    name: "ReckonFlow",
    lane: "backend",
    tier: "flagship",
    status: "Shipped. Public API and source. Scalar docs can take about 50s to wake on the free Render tier. Finance routes need an API key in production.",
    role: "Sole author",
    subtitle: "Corporate travel reconciliation API · backend",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "PydanticAI", "RapidFuzz", "pytest"],
    href: "https://github.com/ikrame-ih/reckon-flow",
    demo: "https://reckon-flow.onrender.com/docs",
    demoKind: "docs",
    proof: "reconcile",
    image: ASSETS.projects.reckonFlow,
    imageKind: "screenshot",
    imageCaption: "Interactive API reference (Scalar). Not the concurrency proof.",
    imageAlt: "ReckonFlow API reference showing a matched bank line suggestion",
    description:
      "FastAPI API for corporate travel reconciliation: it matches expense receipts to bank lines, posts an append-only ledger, and confirms with FOR UPDATE so the same payment cannot be settled twice.",
    problem:
      "The API reconciles corporate travel spend with the bank: it matches each receipt to a bank line and posts it to a ledger.",
    decision:
      "On confirm, Postgres locks the rows (FOR UPDATE) so the same payment cannot post twice. Amounts stay Decimal. The ledger is append-only. The model fills a closed receipt schema; the code decides whether to post it.",
    evidence:
      "pytest coverage includes concurrent confirm conflict, ledger immutability on Postgres, idempotency replay with a 24h Redis TTL (fails open if Redis is down), and extra=forbid on extraction.",
    limitations:
      "Idempotency is bounded by Redis availability and TTL. Matching uses SQL, RapidFuzz, and hashed-token vectors with RRF, not a learned embedding model. Receipts are text or OCR text, not built-in image OCR.",
    signals: [
      "Row locks on reconcile confirm (Postgres FOR UPDATE)",
      "Decimal money and append-only ledger triggers",
      "Closed-schema extraction; the model does not approve payouts",
      "Docs may cold-start; production finance routes are keyed",
    ],
    architectureSummary:
      "Clients hit Redis idempotency middleware (SET NX EX, 24h, fail-open), then FastAPI services and PostgreSQL. Receipt uploads return 202 and extract in the background. Matching is SQL prefilter, RapidFuzz, hashed-token vectors, and RRF.",
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
    id: "validata",
    name: "Validata",
    lane: "backend",
    tier: "supporting",
    badge: "In progress",
    status: "In progress. Paid product, no public repository.",
    roleBefore: "Co-developed with ",
    roleLink: {
      href: "https://jagardev.com/",
      label: "Jairo García Antolín",
    },
    roleAfter:
      ". I led quotas, DNI/NIE masking, signed downloads, VIES tri-state (unavailable stays null), Stripe test Checkout, waitlist, CI, and the React UX. Jairo originated BOE ingest, Celery workers, RapidFuzz matching, and the FastAPI/VIES scaffold.",
    role: "Co-developed with Jairo García Antolín. I led quotas, DNI/NIE masking, signed downloads, VIES tri-state (unavailable stays null), Stripe test Checkout, waitlist, CI, and the React UX. Jairo originated BOE ingest, Celery workers, RapidFuzz matching, and the FastAPI/VIES scaffold.",
    subtitle: "Batch CIF validation · B2B SaaS",
    stack: ["Python", "FastAPI", "Celery", "PostgreSQL", "Redis", "React", "TypeScript", "Stripe"],
    href: null,
    demo: null,
    proof: "validata",
    image: null,
    imageKind: "illustration",
    imageCaption: "Synthetic walkthrough of verified behavior, not a live tenant.",
    imageAlt: "Synthetic Validata rows: matched company, skipped VIES, discarded personal ID",
    description:
      "Upload a spreadsheet of Spanish company IDs. The pipeline returns structured validation and enrichment: local BOE/BORME name match, optional VIES, and GDPR masking for DNI/NIE.",
    problem:
      "Ops teams need batch CIF checks without treating a timeout as 'not registered', and without shipping personal DNI/NIE into enrichment.",
    decision:
      "Quota before the worker, redact personal IDs in API responses, lock downloads behind signed tokens, and keep skipped/unavailable VIES as null.",
    evidence:
      "Committed tests cover VIES null-vs-false, soft-launch quota/redaction/download auth, waitlist persistence, and Stripe test Checkout webhooks.",
    signals: [
      "Paid product, no public repository",
      "VIES tri-state: true / false / null",
      "Guest quotas, DNI/NIE masking, signed downloads",
      "Co-built with Jairo García Antolín",
    ],
    mermaid: `flowchart LR
  File[Spreadsheet] --> API[FastAPI]
  API --> Q[Quota]
  API --> GDPR[DNI filter]
  API --> Celery[Celery]
  Celery --> BOE[BOE name match]
  Celery --> VIES[VIES optional]
  classDef accent fill:#4A0E0E,stroke:#1A1A1A,color:#F5F1EB;
  class API,Q,GDPR accent`,
  },
  {
    id: "import-resolve-cli",
    name: "Import Resolve CLI",
    lane: "tools",
    tier: "compact",
    status: "Published on PyPI. Import-block conflicts only, not arbitrary merges.",
    role: "Sole author",
    subtitle: "CLI developer tool and Git merge driver · PyPI",
    stack: ["Python 3.9+", "ast", "Hatchling", "PyPI", "GitHub Actions"],
    href: "https://github.com/ikrame-ih/import-resolve-cli",
    demo: "https://pypi.org/project/import-resolve-cli/",
    demoKind: "package",
    image: ASSETS.projects.importResolve,
    imageAlt:
      "VS Code with a Python import merge conflict and import-resolve dry-run resolving it in the terminal",
    description:
      "Zero-dependency CLI and Git merge driver. It parses conflicted Python import blocks with ast, then dedupes and sorts them.",
    architectureSummary:
      "Parses Git conflict markers in .py files, extracts the conflicted import blocks, deduplicates and sorts them to PEP 8, and can run as an automated Git merge driver.",
    mermaid: `flowchart LR
  Git[Git Merge Conflict] --> CLI[import-resolve-cli]
  CLI --> Parse[Parse .py Conflict Markers]
  Parse --> Dedupe[Deduplicate & Sort Imports]
  Dedupe --> Write[Clean Code File]
  CLI --> Driver[Auto Merge Driver Mode]
  classDef accent fill:#4A0E0E,stroke:#1A1A1A,color:#F5F1EB;
  class CLI,Parse,Dedupe accent`,
  },
  {
    id: "en-es-localization",
    name: "English-Spanish web localization",
    lane: "tools",
    tier: "compact",
    status: "Published on skills.sh. Source is public.",
    role: "Sole author",
    subtitle: "Agent skill · meaning-first EN/ES",
    stack: ["Python", "en-GB", "en-US", "es-ES", "es-419"],
    href: "https://github.com/ikrame-ih/english-spanish-web-localization",
    demo: "https://www.skills.sh/ikrame-ih/english-spanish-web-localization/english-spanish-web-localization",
    demoKind: "skill",
    image: ASSETS.projects.enEsLocalization,
    imageAlt:
      "Mockup of the English-Spanish localization skill: the skills.sh page and a context-aware CTA pair",
    description:
      "Meaning-first localization among en-GB, en-US, es-ES, and es-419. locale_guard is a Python script (stdlib only) that diffs two JSON catalogs for missing keys, placeholder drift, tags, and encoding.",
    problem:
      "en-GB, en-US, es-ES, and es-419 get treated as one language. Sentence-level swaps leak register, spelling, and institutional terms.",
    decision:
      "Four locale guides, a meaning-first brief, and a Python locale_guard on catalogs. No live translation API.",
    evidence:
      "Published as a skill on skills.sh. Source is on GitHub. locale_guard is Python stdlib plus unittest.",
    limitations: "Not certified translation.",
    architectureSummary:
      "A brief picks the exact locale. Copy is written against that guide. locale_guard, a Python script, checks the catalog offline.",
    mermaid: `flowchart LR
  Brief[Locale brief] --> Guides[en-GB en-US es-ES es-419]
  Guides --> Copy[Target copy]
  Copy --> Guard[locale_guard Python]
  classDef accent fill:#4A0E0E,stroke:#1A1A1A,color:#F5F1EB;
  class Guides,Guard accent`,
  },
  {
    id: "malaga-onboarding",
    name: "Málaga Onboarding",
    lane: "apps",
    tier: "compact",
    status: "Public checklist. Operator CLI is local.",
    role: "Sole author",
    subtitle: "Expat relocation checklist · web + LangGraph",
    stack: ["JavaScript", "LangGraph.js", "Groq", "Cheerio", "Cloudflare"],
    href: null,
    demo: "https://malaga-onboarding.pages.dev/",
    live: true,
    image: ASSETS.projects.malagaOnboarding,
    imageAlt:
      "Device mockup of málaga.onboarding in light and dark mode — desktop, laptop, tablet, and phone",
    description:
      "Landing checklist for Málaga (padrón, NIE, Social Security). The public plan is a topological sort, so the user path does not call an LLM. A local LangGraph.js CLI checks fact sheets and can stop on HUMAN_REVIEW_REQUIRED.",
    signals: [
      "User path is a graph sort — 0€ LLM inference",
      "Operator CLI: LangGraph.js, typed GraphState, Groq",
      "Ambiguous claims go to HUMAN_REVIEW_REQUIRED",
    ],
    architectureSummary:
      "The public API orders steps with a topological sort. The operator CLI is a four-node LangGraph.js graph: researcher (Groq), source finder (DuckDuckGo + Cheerio), fact-checker, editor. Medium or high risk cuts to human review.",
    mermaid: `flowchart LR
  UI[Checklist UI] --> Plan[Plan API]
  Plan --> Sort[Topological sort]
  Op[Operator CLI] --> LG[LangGraph.js]
  LG --> R[Researcher Groq]
  LG --> S[Sources + Cheerio]
  LG --> F[Fact checker]
  F --> H{risk?}
  H -->|high| Human[HUMAN_REVIEW]
  classDef accent fill:#4A0E0E,stroke:#1A1A1A,color:#F5F1EB;
  class Plan,LG,F accent`,
  },
  {
    id: "my-playthrough",
    name: "MyPlaythrough",
    badge: "DAW final project",
    lane: "apps",
    tier: "compact",
    status: "Public demo and source. Capstone graded 10/10.",
    role: "Sole author",
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
      "DAW capstone (10/10): PERN app for backlog, community, and moderation. JWT, bcrypt, Steam/RAWG proxy, Docker Compose, Vitest on client and server.",
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
    id: "live-event-radar",
    name: "Live Event Radar",
    lane: "apps",
    tier: "compact",
    status: "Public demo. Telemetry is simulated, not a live venue feed.",
    role: "Sole author",
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
      "Venue ops views derived from one Zustand store: SVG command center and a Leaflet map. The event stream is mocked.",
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
    id: "aiba-widget",
    name: "Aiba",
    lane: "apps",
    tier: "compact",
    status: "Local Windows widget. No installer store listing, no cloud sync.",
    role: "Sole author",
    subtitle: "Desktop productivity companion · Electron",
    stack: ["Electron", "React 19", "TypeScript", "Vite", "Vitest"],
    href: "https://github.com/ikrame-ih/aiba-widget",
    demo: null,
    image: ASSETS.projects.aibaWidget,
    imageAlt: "Aiba — desktop focus timer and planning widget",
    description:
      "Local Windows focus widget: plan the day, guard a block, unwind. Electron, React, IPC preload. No account.",
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
  overline: "Interests",
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
      imageAlt: "Phoenix Wright: Ace Attorney — my favorite franchise",
      imagePosition: "object-top",
    },
    {
      key: "music",
      label: "now playing",
      title: "Music",
      body: "I sing when I need to clear my head (though honestly I sing all the time). Voilà is usually on repeat, but I switch playlists with my mood.",
      span: "md:col-span-1 md:row-span-2",
      image: ASSETS.interests.music,
      imageAlt: "Voilà — my favorite group",
      imagePosition: "object-center",
    },
    {
      key: "aesthetics",
      label: "at the vanity",
      title: "Skincare",
      body: "I like picking up new skincare, hair, and makeup tricks — usually one small thing at a time.",
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
      body: "I pick one book and read it slowly — almost always fiction. Last finished: Touch of Death by Alice Wilde.",
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
      title: "Traveling",
      body: "I like traveling, and I want to see more of the world.",
      span: "md:col-span-3 md:row-span-1",
      image: ASSETS.interests.travelling,
      imageAlt: "City street corner from a recent trip",
      imagePosition: "object-center",
    },
  ],
};

const LINKEDIN_SIGNALS = {
  overline: "From LinkedIn",
  title: "Notes from",
  titleAccent: "LinkedIn.",
  featuredLabel: "Featured post",
  posts: [
    {
      slug: "grok-bot-openclaw-instinct",
      title: "Grok Bot vs Open Claw vs Instinct - Which one fits you?",
      excerpt:
        "I've been reading a lot about personal AI agents lately, so I compared three that keep coming up: OpenClaw, Instinct, and Grok Bot. I've used all three, and also looked at what users share on X and Reddit, reviews, and deep dives.",
      date: "2026-09-08",
      href: "https://www.linkedin.com/posts/ikrame-ih_grok-bot-vs-open-claw-vs-instinct-which-activity-7503148582032699392-_6Q9",
      image: ASSETS.linkedin.agentsCompare,
      imageAlt:
        "First slide of the LinkedIn carousel: Which one fits you?",
    },
    {
      slug: "reasoning-effort-dial",
      title: "Reasoning effort is a dial",
      excerpt:
        "Some language models do not jump straight to an answer. First they write a private draft of their thinking. That draft is made of tokens, the same small pieces of text the model always generates. We call that draft the reasoning.",
      date: "2026-09-04",
      href: "https://www.linkedin.com/posts/ikrame-ih_reasoning-effort-is-a-dial-llms-activity-7501615098176847872-xFtR",
      image: ASSETS.linkedin.reasoningEffort,
      imageAlt:
        "First slide of the LinkedIn carousel: Reasoning effort is a dial",
    },
    {
      slug: "reckonflow-llm-authority",
      title: "AI + Backend Architecture - ReckonFlow",
      excerpt:
        "One architectural decision I made while building ReckonFlow: I don't give the LLM authority over business state. LLMs are useful for interpreting unstructured input.",
      date: "2026-08-18",
      href: "https://www.linkedin.com/posts/ikrame-ih_ai-backend-architecture-reckonflow-activity-7495453949236387840-jPDy",
      image: ASSETS.linkedin.reckonFlowArchitecture,
      imageAlt:
        "First slide of the LinkedIn carousel on ReckonFlow: the LLM interprets, the application decides",
    },
  ],
  feedback: {
    label: "Professional feedback",
    cta: "+4 recommendations",
    href: "https://www.linkedin.com/in/ikrame-ih/details/recommendations/",
    items: [
      {
        lang: "en",
        role: "Financial Crime Manager",
        quote:
          "Ikrame is a great professional, dedicated, decisive, and able to handle several complex tasks at once, meeting the deadlines that were set, always with a proactive attitude.",
      },
      {
        lang: "en",
        role: "Assistant Director",
        quote:
          "Working with Ikrame was a great experience. She stands out for her commitment, responsibility, and constant desire to learn and grow. What I appreciated most was her ability to listen, take feedback on board, and continuously look for ways to improve. Her positive mindset and dedication make her a fantastic professional and teammate.",
      },
      {
        lang: "en",
        role: "Senior Executive Assistant",
        quote:
          "Ikrame is a very responsible colleague, always helpful and responsive. She's always eager to help and suggest if anything come up. It's been a pleasure working with Ikrame.",
      },
      {
        lang: "en",
        role: "HR Recruiter",
        quote:
          "I had the pleasure of working closely with Ikrame, she consistently demonstrated professionalism, dedication, and a strong commitment to delivering high-quality results. Her expertise, reliability, and collaborative approach made her a valued partner across teams.",
      },
    ],
  },
};

const BOW_BOARD = {
  overline: "Guest book",
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
  LINKEDIN_SIGNALS,
  BOW_BOARD,
  marqueeRare: ["open to work", "málaga → remote", "built with care"],
  section: {
    cvOverline: "Resume & skills",
    cvTitleBefore: "Roles, skills, and ",
    cvTitleAccent: "study.",
    cvKicker:
      "I spent years on reconciliations, expenses, and the people who use the tools. That is why I care about concurrent updates, retries, and what the system should do when something is uncertain.",
    languagesTitle: "Languages",
    languagesKicker: "Spanish, English, and Darija. The ones I actually use.",
    experience: "Experience",
    education: "Education",
    projectsOverline: "Selected work",
    projectsTitleBefore: "Work you can ",
    projectsTitleAccent: "inspect.",
    projectsKicker:
      "Python projects, published tools, and other work as a hands-on builder.",
    pythonLane: "Python backends",
    toolsLane: "Published tools",
    appsLane: "Other work",
    inProgress: "In progress",
    comingSoon: "Coming soon",
    shotPending: "Screenshot pending",
    howItWorks: "Read case study",
    github: "View source",
    demo: "Demo",
    live: "Open product",
    viewPackage: "View package",
    viewSkill: "View skill",
    apiReference: "API docs",
    privateNote: "Private product",
    walkthrough: {
      reconcile: {
        kicker: "If two people confirm at once",
        steps: [
          "Both pick the same bank line.",
          "The first confirm locks the row (FOR UPDATE) and matches it.",
          "The second hits a conflict. No second ledger post.",
        ],
        footnote:
          "Idempotency uses Redis (24h TTL). If Redis is down, the request still goes through.",
      },
      validata: {
        kicker: "What each row does",
        headers: ["CIF", "Company", "What happens"],
        rows: [
          { id: "B12345678", name: "Acme Iberia SL", result: "Found in BOE" },
          { id: "A87654321", name: "Norte Logística SA", result: "VIES not called" },
          { id: "12345678Z", name: "DNI", result: "Dropped (GDPR)" },
        ],
        footnote:
          "BOE match uses the local cache. Skipped VIES stays null.",
      },
    },
  },
  tracks: { tech: "tech", hybrid: "tech × biz", biz: "biz / ops" },
};

export default catalog;
