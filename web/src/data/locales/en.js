import { ASSETS } from "../assets.js";

// English site copy - edit here (and locales/es.js), not scattered across components.
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
  overline: "DATA, AI & SOFTWARE ENGINEER, MÁLAGA",
  headlineParts: [
    { text: "Data, AI and software, " },
    { text: "built with engineering rigor.", accent: true },
  ],
  heroSubtext: [
    "Ikrame Ibn Hayoun, Data, AI & Software Engineer in Málaga. Bringing engineering rigor to data, AI and software projects: data quality from ingestion, models evaluated with real metrics, and software tested and deployed with CI/CD.",
    "Building with Python and SQL, REST APIs, ETL pipelines with Spark and Kafka, machine learning and generative AI with LLMs and agents, always backed by tests and evals. +3 years of professional experience and production projects.",
    "Open to remote or hybrid roles.",
  ],
  heroFacts: [
    { eyebrow: "English", text: "C2" },
    { eyebrow: "Now", text: "Vocational master's in AI and Big Data" },
    { eyebrow: "On PyPI", text: "import-resolve-cli", accent: true },
  ],
  tagline: "Data, AI & Software Engineer, Python and SQL, open to remote or hybrid",
  cliAbout: [
    "Hi, I'm Ikrame. I work on data, AI and software from Málaga. When I build the UI side, I keep it easy to read.",
    "Most of my time goes to Python and SQL: ETL pipelines, data quality, FastAPI and PostgreSQL APIs, and LLMs with structured outputs, tests and evals.",
    "Away from the editor I'm usually deep in a story-heavy game, singing to reset my head, or fussing over little aesthetic details.",
    "Finished DAW in June 2026. Now taking the vocational master's in AI and Big Data, online. Looking for data, AI or backend roles, remote or hybrid.",
    "I also built this portfolio end to end. The code is on GitHub.",
  ],
  cliTldr: [
    "Data, AI & Software Engineer in Málaga. Python, SQL, ETL with Spark and Kafka, machine learning and generative AI. React when a product needs a UI.",
    "ReckonFlow is the main project: an expense and bank reconciliation API in production. Validata is a B2B SaaS with Jairo García Antolín, in development. Looking for data, AI or backend roles, remote or hybrid.",
  ],
  cliAvail:
    "Open to remote or hybrid. Based in Málaga (CET). Happy to chat anytime.",
  cliNow:
    "Finished DAW (Jun 2026) and the DATA CONTROL internship. Taking the vocational master's in AI and Big Data. ReckonFlow is in production; Validata is in development. Open to data, AI or backend roles.",
  portraitLink: {
    label: "Say hi on LinkedIn →",
  },
  practiceAside: {
    title: "At a glance",
    text: "DAW, June 2026, final project MyPlaythrough graded 10/10. GitHub has ETL with data quality checks, FastAPI and PostgreSQL APIs, LLM extraction, evals, tests and CI/CD. This site is built from scratch too.",
  },
};

const LANGUAGES = [
  { lang: "Spanish", level: "Native", code: "ES" },
  { lang: "English", level: "C2", code: "EN" },
  { lang: "Darija", level: "Native", detail: "Moroccan Arabic", code: "AR" },
];

// Seven skill domains, full-width catalog bands in CVSection.
// Languages sit below as three type plates, not a list.
const STACK = {
  domains: [
    {
      id: "data",
      index: "01",
      title: "Data",
      kicker: "Ingestion, data quality and processing.",
      groups: [
        {
          label: "Processing",
          items: ["ETL", "data quality", "data governance", "pandas", "NumPy"],
        },
        {
          label: "Big data",
          items: [
            "Apache Spark (PySpark, Spark Structured Streaming)",
            "Kafka",
            "Hadoop (HDFS, YARN, MapReduce)",
            "Hive",
            "HBase",
          ],
        },
        {
          label: "Storage and analysis",
          items: ["MongoDB and NoSQL", "data warehousing", "Power BI", "R"],
        },
      ],
    },
    {
      id: "ai",
      index: "02",
      title: "Generative AI and ML",
      kicker: "LLMs with structured outputs, evals and clear limits.",
      groups: [
        {
          label: "Generative AI",
          items: [
            "LLMs",
            "RAG",
            "embeddings",
            "hybrid retrieval",
            "AI agents (LangChain, LangGraph.js, tool calling)",
            "prompt engineering",
            "structured outputs",
            "guardrails",
            "PydanticAI",
            "Groq",
          ],
        },
        {
          label: "Machine learning",
          items: [
            "Hugging Face Transformers",
            "spaCy",
            "scikit-learn",
            "TensorFlow",
            "Keras",
            "PyTorch",
          ],
        },
        {
          label: "Responsible AI",
          items: ["AI Act", "XAI"],
        },
        {
          label: "AI-assisted development",
          items: [
            "OpenAI API and GPT",
            "Codex",
            "Claude",
            "Claude Code",
            "GitHub Copilot",
            "Gemini",
            "Cursor",
            "Grok",
            "Llama, Qwen, DeepSeek and Kimi with Ollama",
            "Orca",
          ],
        },
      ],
    },
    {
      id: "backend",
      index: "03",
      title: "Backend",
      kicker: "APIs, databases, and the messy bit between them.",
      groups: [
        {
          label: "Languages and APIs",
          items: [
            "Python",
            "SQL",
            "REST APIs",
            "FastAPI",
            "Pydantic",
            "JWT",
            "Celery",
            "microservices",
            "Node.js",
            "Express",
          ],
        },
        {
          label: "Databases",
          items: ["PostgreSQL", "MySQL", "Redis", "SQLAlchemy", "Alembic"],
        },
        {
          label: "Client",
          items: ["React", "TypeScript"],
        },
      ],
    },
    {
      id: "cloud",
      index: "04",
      title: "Cloud and DevOps",
      kicker: "Containers, CI and deployment.",
      groups: [
        {
          label: "Cloud and DevOps",
          items: [
            "Docker",
            "Docker Compose",
            "GitHub Actions",
            "Prometheus",
            "AWS (Bedrock, Rekognition, Amazon EMR)",
            "Google Cloud (Vertex AI, Cloud Vision)",
            "Azure OpenAI",
            "Render",
            "Neon",
            "Upstash",
            "Vercel",
          ],
        },
      ],
    },
    {
      id: "engineering",
      index: "05",
      title: "Engineering practices",
      kicker: "Tests, CI, and the rest of the delivery loop.",
      groups: [
        {
          label: "Engineering practices",
          items: [
            "pytest",
            "Vitest",
            "Playwright",
            "LLM evals",
            "CI/CD",
            "ADR",
            "mypy",
            "Ruff",
            "pip-audit",
            "idempotency",
            "spec-driven development (SDD)",
            "AI-assisted development with human code review",
          ],
        },
      ],
    },
    {
      id: "business",
      index: "06",
      title: "Business tools",
      kicker: "Automation and data for business teams.",
      groups: [
        {
          label: "Business",
          items: ["Power Apps", "Power Fx", "DataFlex", "Excel", "Odoo", "Looker"],
        },
        {
          label: "Microsoft 365",
          items: [
            "SPFx",
            "Power Automate",
            "Microsoft Lists",
            "Microsoft 365 Migration Tool",
            "PnP PowerShell",
            "Entra ID",
          ],
        },
      ],
    },
    {
      id: "competencies",
      index: "07",
      title: "Competencies",
      kicker: "How I work with a team.",
      groups: [
        {
          label: "Competencies",
          items: [
            "business and client communication",
            "end-to-end autonomy and ownership",
            "technical documentation",
            "teamwork",
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
    period: "Mar 2026 - Jun 2026",
    track: "tech",
    bullets: [
      "Managed the platform's MySQL database with SQL: queries to extract, filter and update user, course and enrolment data.",
      "Installed and configured a Moodle platform from scratch: web server with PHP, database, scheduled-task cron, plugins, users and courses.",
      "Developed internal applications in DataFlex and Python: business logic and ongoing customization.",
    ],
  },
  {
    company: "EY Global Delivery Services",
    role: "Executive Assistant",
    period: "Jan 2025 - Mar 2026",
    track: "hybrid",
    bullets: [
      {
        text: "Built a Power App (Power Fx) that ran the Christmas raffle end to end for the 500+ person Consulting department: registration and number assignment in a single app instead of email and Teams.",
        proof: {
          id: "ey-holiday-raffle",
          name: "Consulting Christmas raffle, Power App",
          image: ASSETS.experience.eyHolidayRaffle,
          imageAlt:
            "EY Power App for the Consulting Christmas hamper raffle: claim a number and store name, email, and assignment.",
        },
      },
      "Coordinated strategic client visits in Málaga with business stakeholders (agendas, logistics and the on-site experience) in a global professional services firm.",
      "Managed and regularly tracked data for each visit (participants, expenses and logistics) for follow-up and cost control.",
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
    period: "Nov - Dec 2024",
    track: "biz",
    bullets: [
      "Recorded donors, fundraisers and travel costs in Odoo, Factorial and Looker for internal expense control.",
    ],
  },
  {
    company: "Sylvis Profesional Cosmetic",
    role: "Administrative Assistant",
    period: "Mar - Oct 2024",
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
      "Specialization Course in Artificial Intelligence and Big Data (vocational master's, Máster FP)",
    tags: [
      "Máster FP",
      "EQF Level 5",
      "online",
    ],
    period: "Sep 2026 to present",
  },
  {
    school: "CESUR Este, Málaga",
    degree: "Higher Vocational Degree in Web Application Development (CFGS, DAW)",
    tags: [
      "Ciclo formativo de grado superior",
      "EQF Level 5",
      "Final project graded 10/10 (top mark)",
    ],
    period: "Sep 2024 to Jun 2026",
  },
  {
    school: "I.E.S. Politécnico Jesús Marín",
    degree:
      "Vocational Diploma in Administrative Management (CFGM), graduated with honours (Matrícula de Honor)",
    tags: [
      "Ciclo formativo de grado medio",
      "EQF Level 4",
      "Matrícula de Honor",
    ],
    period: "Sep 2022 to Jun 2024",
  },
];

const PROJECTS = [
  {
    id: "reconflow",
    name: "ReckonFlow",
    lane: "backend",
    tier: "flagship",
    status: "In production. Public API and source. The docs can take about 50 s to wake on Render's free tier. Finance routes need an API key.",
    role: "Sole author",
    subtitle: "Expense and bank reconciliation REST API for corporate travel",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "PydanticAI", "Groq", "Prometheus", "GitHub Actions"],
    href: "https://github.com/ikrame-ih/reckon-flow",
    demo: "https://reckon-flow.onrender.com/docs",
    demoKind: "docs",
    proof: "reconcile",
    image: ASSETS.projects.reckonFlow,
    imageKind: "screenshot",
    imageCaption: "Interactive API reference (Scalar). Not the concurrency proof.",
    imageAlt: "ReckonFlow API reference showing a matched bank line suggestion",
    description:
      "Expense and bank reconciliation REST API. It ingests bank statement CSVs with data quality checks, matches each expense to its bank line and posts it to an append-only double-entry ledger. On confirm, PostgreSQL locks the row (FOR UPDATE) and Redis stores idempotency keys, so a retry never duplicates payments or entries.",
    problem:
      "The API reconciles corporate travel spend with the bank: it matches each receipt to a bank line and posts it to a ledger.",
    decision:
      "On confirm, Postgres locks the rows (FOR UPDATE) so the same payment cannot post twice. Amounts stay Decimal. The ledger is append-only. The model fills a closed receipt schema; the code decides whether to post it.",
    evidence:
      "pytest coverage includes concurrent confirm conflict, ledger immutability on Postgres, idempotency replay with a 24h Redis TTL (fails open if Redis is down), and extra=forbid on extraction. 132 pytest tests, an 80% coverage gate in CI/CD, extraction and matching evals on every run, mypy, Ruff, pip-audit, Prometheus metrics and 7 ADRs.",
    limitations:
      "Idempotency is bounded by Redis availability and TTL. Matching uses SQL, RapidFuzz, and hashed-token vectors with RRF, not a learned embedding model. Receipts are text or OCR text, not built-in image OCR.",
    signals: [
      "Append-only double-entry ledger",
      "Redis idempotency and FOR UPDATE",
      "The model fills a closed schema and cannot approve or pay",
      "132 tests and evals on every CI run",
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
    badge: "In development",
    status: "In development. Private code.",
    roleBefore: "Co-developed with ",
    roleLink: {
      href: "https://jagardev.com/",
      label: "Jairo García Antolín",
    },
    roleAfter:
      ". Some of the pieces I implemented: company-name column inference, atomic Redis quotas, HMAC download tokens, Stripe test Checkout, a real waitlist, CI, and a search path that only uses corporate names. Jairo designed BORME ingest, Celery workers, RapidFuzz matching, and the FastAPI scaffold.",
    role: "Co-developed with Jairo García Antolín. Some of the pieces I implemented: company-name column inference, atomic Redis quotas, HMAC download tokens, Stripe test Checkout, a real waitlist, CI, and a search path that only uses corporate names. Jairo designed BORME ingest, Celery workers, RapidFuzz matching, and the FastAPI scaffold.",
    subtitle: "B2B SaaS that verifies Spanish companies against the BORME (Official Gazette of the Commercial Registry)",
    stack: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "React", "Stripe", "GitHub Actions"],
    href: null,
    demo: null,
    proof: "validata",
    image: ASSETS.projects.validata,
    imageKind: "photo",
    imageCaption: "Desk mockup of the Validata upload screen. Not a live tenant.",
    imageAlt:
      "Monitor on a desk showing Validata: search and validate companies by business name, with a file upload drop zone",
    description:
      "Paste company names or upload Excel/CSV. Validata looks up each legal name in BORME and returns the filing status. Original columns stay intact; only the name column is searched.",
    problem:
      "The engine searches by company name. A file with no name column never reaches matching.",
    decision:
      "Quota is reserved in Redis (atomic Lua) before the worker. The inferencer picks the company-name column. Downloads use HMAC tokens. If the legal form does not match (S.L. vs S.A.), the system flags REVISION_SUGERIDA.",
    evidence:
      "Tests cover column inference, atomic quota, signed downloads, and Stripe test webhooks.",
    signals: [
      "In development. Private code.",
      "Search by company name against BORME",
      "Original columns intact on export",
      "Co-built with Jairo García Antolín",
    ],
    mermaid: `flowchart LR
  File[Sheet or text] --> API[FastAPI]
  API --> Col[Company-name column]
  API --> Q[Redis quota]
  API --> Celery[Celery]
  Celery --> BORME[BORME match]
  classDef accent fill:#4A0E0E,stroke:#1A1A1A,color:#F5F1EB;
  class API,Col,Q accent`,
  },
  {
    id: "my-playthrough",
    name: "MyPlaythrough",
    badge: "DAW final project",
    lane: "backend",
    tier: "compact",
    status: "Public demo and source. Capstone graded 10/10.",
    role: "Sole author",
    subtitle: "Video game library manager with community features, DAW final project (10/10)",
    stack: [
      "React 18",
      "Vite",
      "Node.js",
      "Express 5",
      "PostgreSQL",
      "JWT",
      "Vitest",
      "Docker Compose",
    ],
    href: "https://github.com/ikrame-ih/my-playthrough",
    demo: "https://my-playthrough.vercel.app/",
    image: ASSETS.projects.myPlaythrough,
    imageAlt: "MyPlaythrough - personal game library and community UI",
    description:
      "DAW final project graded 10/10. PERN application built end to end: Express REST API with JWT, bcrypt, validation, rate limiting and moderation, a relational PostgreSQL model and a React client, with 43 Vitest tests and deployment on Vercel, Render and Neon.",
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
    id: "malaga-onboarding",
    name: "Málaga Onboarding",
    lane: "backend",
    tier: "compact",
    status: "Live and in use. Private code. The AI agents run locally only.",
    role: "Sole author",
    subtitle: "Relocation guide for expats joining the PTA (Andalusia Technology Park)",
    stack: ["JavaScript", "Cloudflare Pages", "Vercel"],
    href: null,
    demo: "https://malaga-onboarding.pages.dev/",
    live: true,
    image: ASSETS.projects.malagaOnboarding,
    imageAlt:
      "Device mockup of málaga.onboarding in light and dark mode - desktop, laptop, tablet, and phone",
    description:
      "Guide to settling in Málaga: padrón, NIE, Social Security. The plan comes from a deterministic engine with a topological sort and no LLM (€0 inference). Three local LangGraph.js + Groq agent workflows handle content research and fact-checking, UX audits and user-needs analysis. Shared with ESN Málaga (Erasmus Student Network), whose partners team described it as useful for international students.",
    signals: [
      "Deterministic plan, no LLM: €0 inference",
      "Three local agent workflows with LangGraph.js and Groq",
      "Medium and high-risk entries go to human review before publishing",
    ],
    architectureSummary:
      "The public API orders steps with a topological sort. The local research and verification flow is a four-node LangGraph.js graph: researcher (Groq), source finder (DuckDuckGo + Cheerio), fact-checker and editor. Medium or high risk goes to human review.",
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
    id: "import-resolve-cli",
    name: "import-resolve-cli",
    lane: "backend",
    tier: "compact",
    status: "Published on PyPI. Import-block conflicts only, not arbitrary merges.",
    role: "Sole author",
    subtitle: "CLI and Git merge driver that resolves Python import conflicts",
    stack: ["Python", "pytest", "mypy", "Ruff", "GitHub Actions"],
    href: "https://github.com/ikrame-ih/import-resolve-cli",
    demo: "https://pypi.org/project/import-resolve-cli/",
    demoKind: "package",
    image: ASSETS.projects.importResolve,
    imageAlt:
      "VS Code with a Python import merge conflict and import-resolve dry-run resolving it in the terminal",
    description:
      "CLI and Git merge driver that resolves conflicts in Python import blocks. Published on PyPI with zero runtime dependencies, atomic writes, syntax validation, 40 tests and a CI/CD release workflow.",
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
    subtitle: "Agent skill, meaning-first EN/ES",
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
    id: "live-event-radar",
    name: "Live Event Radar",
    lane: "apps",
    tier: "compact",
    status: "Public demo. Telemetry is simulated, not a live venue feed.",
    role: "Sole author",
    subtitle: "Real-time venue ops dashboard, frontend",
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
    imageAlt: "Live Event Radar - command center and telemetry dashboard",
    description:
      "Venue ops views derived from one Zustand store: an SVG command center and a Leaflet map. The event stream is mocked.",
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
    subtitle: "Desktop productivity companion, Electron",
    stack: ["Electron", "React 19", "TypeScript", "Vite", "Vitest"],
    href: "https://github.com/ikrame-ih/aiba-widget",
    demo: null,
    image: ASSETS.projects.aibaWidget,
    imageAlt: "Aiba - desktop focus timer and planning widget",
    description:
      "Local Windows widget: plan the day, protect a focus block and wind down, with no account and no cloud.",
    architectureSummary:
      "The React UI talks through an IPC preload bridge to the Electron main process. Main stores local JSON and runs the focus-guard overlay, with no cloud dependency.",
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
      body: "Ace Attorney is still my #1 franchise, no matter what else I play. Beyond that my taste is wide and mood-driven - story-heavy games, visual novels, mysteries, long JRPGs and ARPGs, even shooters, plus a soft spot for Pokémon ever since I was a kid.",
      span: "md:col-span-2 md:row-span-2",
      image: ASSETS.interests.gaming,
      imageAlt: "Phoenix Wright: Ace Attorney - my favorite franchise",
      imagePosition: "object-top",
    },
    {
      key: "music",
      label: "now playing",
      title: "Music",
      body: "I sing when I need to clear my head (though honestly I sing all the time). Voilà is usually on repeat, but I switch playlists with my mood.",
      span: "md:col-span-1 md:row-span-2",
      image: ASSETS.interests.music,
      imageAlt: "Voilà - my favorite group",
      imagePosition: "object-center",
    },
    {
      key: "aesthetics",
      label: "at the vanity",
      title: "Skincare",
      body: "I like picking up new skincare, hair, and makeup tricks - usually one small thing at a time.",
      span: "md:col-span-2 md:row-span-1",
      image: ASSETS.interests.aesthetics,
      imageAlt: "Skincare and makeup - personal routines",
      imagePosition: "object-center",
    },
    {
      key: "training",
      label: "weekly",
      title: "Training",
      body: "Three or four gym sessions a week when I can fit them in. I always train with headphones on - I can't really focus without music.",
      span: "md:col-span-1 md:row-span-1",
      image: ASSETS.interests.training,
      imageAlt: "Training - gym essentials",
      imagePosition: "object-center",
    },
    {
      key: "reading",
      label: "on the shelf",
      title: "Reading",
      body: "I pick one book and read it slowly - almost always fiction. Last finished: Touch of Death by Alice Wilde.",
      span: "md:col-span-1 md:row-span-1",
      image: ASSETS.interests.reading,
      imageAlt: "Touch of Death by Alice Wilde - last book I read",
      imagePosition: "object-center",
    },
    {
      key: "series",
      label: "evening watch",
      title: "Series & anime",
      body: "Anime, series, or films - I watch whatever I'm in the mood for, depending on how much time I have. Breaking Bad is the last series I finished.",
      span: "md:col-span-2 md:row-span-1",
      image: ASSETS.interests.series,
      imageAlt: "Anime and series - free time watching",
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
    "Click either page to leave your bow - or focus a page and use arrow keys, then Enter. One per person; you can move it anytime.",
  signedKicker:
    "That's your bow on the page - click again, or use arrow keys and Enter, to move it.",
  emptyState: "Be the first bow on the page - click or use the keyboard.",
  leftWatermark:
    "For everyone who scrolled past the projects and stayed for the details.",
  rightWatermark: "A small thank-you. Your bow here means you were here.",
  countLabel: "people left their bow",
  countLabelSingular: "person left their bow",
  marginHint: "one bow per person, click or arrows + Enter",
  marginHintSigned: "your bow, click or arrows to move",
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
      "Administrative and accounting work meant reconciling bank accounts, recording expenses and tracking costs. That is why data quality, concurrency and retries come first when I design a system. Working with spec-driven development and AI-assisted coding, with every change reviewed by me before it is merged. Tools: OpenAI API and GPT, Codex, Claude, Claude Code, GitHub Copilot, Gemini, Cursor, Grok, LangChain, AWS Bedrock, Vertex AI and Azure OpenAI; Llama, Qwen, DeepSeek and Kimi with Ollama; Orca to orchestrate coding agents; specs in Obsidian.",
    languagesTitle: "Languages",
    languagesKicker: "Spanish, English, and Darija. The ones I actually use.",
    experience: "Experience",
    education: "Education",
    projectsOverline: "Selected work",
    projectsTitleBefore: "Work you can ",
    projectsTitleAccent: "inspect.",
    projectsKicker:
      "Data, AI and software projects with a demo, docs or code to review. Other work below.",
    pythonLane: "Main projects",
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
        headers: ["Company name", "Status", "What happens"],
        rows: [
          { id: "Mercadona SA", name: "COINCIDENCIA_EXACTA", result: "Found in BORME" },
          { id: "Garcia SL vs SA", name: "REVISION_SUGERIDA", result: "Legal form mismatch" },
          { id: "No name", name: "File error", result: "No company-name column" },
        ],
        footnote:
          "Match uses the local BORME cache. Without a name column the file never reaches the engine.",
      },
    },
  },
  tracks: { tech: "tech", hybrid: "tech × biz", biz: "biz / ops" },
};

export default catalog;
