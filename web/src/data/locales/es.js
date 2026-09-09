import { ASSETS } from "../assets.js";

const PROFILE = {
  name: "Ikrame Ibn Hayoun",
  location: "Málaga, ES",
  workPreference: "Abierta a roles en remoto o híbridos",
  email: "ikihga2223@gmail.com",
  phone: "+34 682 02 76 93",
  github: "https://github.com/ikrame-ih",
  portfolioRepo: "https://github.com/ikrame-ih/dev-portfolio",
  linkedin: "https://www.linkedin.com/in/ikrame-ih/",
  buyMeACoffee: "https://buymeacoffee.com/ikrame.dev",
  siteUrl: "https://ikrame.dev",
  overline: "PYTHON BACKEND · IA · FASTAPI",
  headlineParts: [
    { text: "Desarrollo software" },
    { text: "pensando en el detalle", accent: true },
    { text: "y en quien lo usa.", italic: true },
  ],
  heroSubtext:
    "Hola, soy Ikrame Ibn Hayoun — desarrolladora backend en Málaga. Escribo APIs que no se rompen si una petición se reintenta, y meto IA en ese mismo camino: extracción LLM estructurada, embeddings, recuperación híbrida. Trabajo con agentes, skills reutilizables y elijo el modelo según el coste. Abierta a roles remotos o híbridos de backend e IA.",
  heroFacts: [
    { eyebrow: "Disponible para", text: "Remoto · híbrido" },
    { eyebrow: "Trayectoria", text: "IA y Big Data · en curso" },
    {
      eyebrow: "Enfoque",
      text: "Backend · IA",
      accent: true,
    },
  ],
  tagline:
    "Backend Python · FastAPI · IA · disponible en remoto o híbrido",
  cliAbout: [
    "Hola — soy Ikrame. Desarrolladora backend en Málaga, con debilidad por las interfaces tranquilas cuando toca el lado UI.",
    "Dedico la mayor parte de la energía a FastAPI, PostgreSQL e IA en el camino de producción: extracción estructurada, embeddings, retrieval.",
    "Fuera del editor suelo estar metida en un juego con mucha historia, cantando para desconectar, o afinando pequeños detalles estéticos.",
    "Acabo de terminar DAW (jun. 2026). Busco roles backend e IA remotos o híbridos.",
    "Este portfolio también lo construí yo de punta a punta — el código está en GitHub.",
  ],
  cliTldr: [
    "Backend Python en Málaga — FastAPI, PostgreSQL, IA. También React cuando el producto lo pide.",
    "Ahora mismo: ReckonFlow (API de ledger + extracción LLM) y la guía de onboarding de Málaga. Busco roles backend e IA remotos o híbridos.",
  ],
  cliAvail:
    "Disponible en remoto o híbrido. Basada en Málaga (CET). Encantada de hablar cuando quieras.",
  cliNow:
    "Acabo de terminar DAW (jun. 2026) y las prácticas en DATA CONTROL. ReckonFlow y la guía de onboarding de Málaga — abierta a la siguiente oportunidad backend o de IA.",
  portraitLink: {
    label: "Salúdame en LinkedIn →",
  },
  practiceAside: {
    title: "De un vistazo",
    text: "DAW, jun. 2026. El proyecto final, MyPlaythrough, con la máxima calificación. Backend e IA aplicada en GitHub: FastAPI, PostgreSQL, extracción LLM, embeddings, tests y CI. Este portfolio también, construido de cero.",
  },
};

const LANGUAGES = [
  { lang: "Español", level: "Nativo", code: "ES" },
  { lang: "Inglés", level: "C1", detail: "Avanzado", code: "EN" },
  { lang: "Darija", level: "Nativo", detail: "árabe marroquí", code: "AR" },
];

// Cuatro dominios en grid 2×2; los idiomas van debajo a ancho completo.
const STACK = {
  domains: [
    {
      id: "backend",
      index: "01",
      title: "Backend y datos",
      kicker: "APIs, bases de datos y lo que hay entre medias.",
      groups: [
        {
          label: "APIs y runtime",
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
          label: "Datos",
          items: ["PostgreSQL", "SQL", "Redis", "Alembic"],
        },
      ],
    },
    {
      id: "frontend",
      index: "02",
      title: "Frontend",
      kicker:
        "Interfaces y movimiento cuando el producto lo necesita.",
      groups: [
        {
          label: "UI y frameworks",
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
          label: "Estado y mapas",
          items: ["Zustand", "Leaflet"],
        },
        {
          label: "Calidad",
          items: ["HTML semántico", "Accesibilidad"],
        },
      ],
    },
    {
      id: "ai",
      index: "03",
      title: "IA",
      kicker: "En las APIs, y con agentes: prompts, skills, routing, contexto.",
      groups: [
        {
          label: "En producto",
          items: [
            "LLMs",
            "Prompt engineering",
            "Structured outputs",
            "Embeddings",
            "Recuperación híbrida",
            "RRF",
            "Guardrails",
          ],
        },
        {
          label: "Con agentes",
          pairWithNext: true,
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
          label: "A partir de sep. 2026",
          items: ["NumPy", "Pandas", "TensorFlow", "PyTorch", "Spark", "Kafka"],
        },
      ],
    },
    {
      id: "tooling",
      index: "04",
      title: "Herramientas y entrega",
      kicker: "Tests, CI y el resto del flujo de entrega.",
      groups: [
        {
          label: "Cadena de trabajo",
          items: [
            "Git",
            "GitHub Actions",
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
    role: "Desarrolladora de software en prácticas",
    period: "mar. 2026 — jun. 2026",
    track: "tech",
    bullets: [
      "Desarrollo de aplicaciones internas en entorno DataFlex y en Python: acceso a datos, lógica de negocio y personalización continua.",
      "Creación de una plataforma Moodle desde cero: entorno e instalación, estructura de cursos y contenidos, usuarios y roles, base de datos/SQL y theming CSS/UI de punta a punta.",
    ],
  },
  {
    company: "EY Global Delivery Services",
    role: "Asistente ejecutiva",
    period: "ene. 2025 — mar. 2026",
    track: "hybrid",
    bullets: [
      {
        text: "Desarrollé una Power App (Power Fx) que gestionó de extremo a extremo el sorteo de Navidad del CNS: inscripción y asignación de números en un solo sitio, en lugar de perseguirlo por correo o Teams.",
        proof: {
          id: "ey-holiday-raffle",
          name: "Sorteo de Navidad CNS — Power App",
          image: ASSETS.experience.eyHolidayRaffle,
          imageAlt:
            "Power App de EY para el sorteo de cestas de Navidad del CNS: reservar número y guardar nombre, correo y asignación",
        },
      },
      "Coordiné de principio a fin visitas de clientes estratégicos en Málaga, gestionando agendas, logística y la experiencia durante la estancia — jornadas que a menudo condicionaban el avance de un acuerdo.",
      "Llevé el día a día operativo — viajes, Concur, Outlook, Teams, SharePoint y las herramientas internas de la firma — en un entorno global de servicios profesionales.",
    ],
  },
  {
    company: "EC Azafatas",
    role: "Embajadora de marca",
    period: "feb. 2026",
    track: "biz",
    bullets: [
      "Catas de producto y logística de stand en retail de alta afluencia, incluido el inventario de fin de jornada para la agencia.",
    ],
  },
  {
    company: "Conciencia Fundraising",
    role: "Asistente administrativa y contable",
    period: "nov. — dic. 2024",
    track: "biz",
    bullets: [
      "Seguimiento de donantes y captadores en Drive, Outlook, Evergiving, Factorial, Odoo y Looker; registro de costes de viaje y gastos para control interno.",
    ],
  },
  {
    company: "Sylvis Profesional Cosmetic",
    role: "Administrativa",
    period: "mar. — oct. 2024",
    track: "biz",
    bullets: [
      "Conciliación bancaria, contabilización de facturas (empresa e importaciones) y control de costes de vehículos e importación en Excel.",
    ],
  },
];

const EDUCATION = [
  {
    school: "IES Zaidín Vergeles",
    degree: "Especialización en IA y Big Data",
    tags: [
      "Curso de Especialización",
      "Nivel MECES / EQF 5",
      "Tras ciclo superior",
    ],
    period: "sep. 2026 — en curso",
  },
  {
    school: "CESUR Este, Málaga",
    degree: "Técnico Superior en Desarrollo de Aplicaciones Web (DAW)",
    tags: [
      "Ciclo Formativo de Grado Superior",
      "Nivel MECES / EQF 5",
      "Equivalente HND",
    ],
    period: "sep. 2024 — jun. 2026",
  },
  {
    school: "I.E.S. Politécnico Jesús Marín",
    degree: "Técnico en Gestión Administrativa",
    tags: ["Ciclo Formativo de Grado Medio", "Nivel MECES / EQF 4", "Matrícula de honor"],
    period: "2022 — 2024",
  },
];

const PROJECTS = [
  {
    id: "reconflow",
    name: "ReckonFlow",
    subtitle: "API de conciliación de viajes corporativos · backend",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "LLMs", "Embeddings", "pytest"],
    href: "https://github.com/ikrame-ih/reckon-flow",
    demo: "https://reckon-flow.onrender.com/docs",
    image: ASSETS.projects.reckonFlow,
    imageAlt: "Swagger UI de ReckonFlow — GET suggestions con una línea bancaria emparejada",
    description:
      "API FastAPI headless para aprobaciones de viaje, ledger de doble entrada inmutable, extracción de recibos con LLM y conciliación bancaria híbrida — para que un POST reintentado no pague dos veces.",
    signals: [
      "Escrituras idempotentes, dinero Decimal, bloqueos de fila al conciliar",
      "Extracción LLM estructurada con schema como guardrail (prompt injection)",
      "Matching híbrido: prefiltro SQL + RapidFuzz + embeddings + RRF (estilo RAG)",
      "Límite: Render free puede tardar ~50s en despertar; embeddings a veces stub",
    ],
    architectureSummary:
      "Los clientes pasan por middleware de idempotencia (Redis), routers FastAPI y servicios, hasta PostgreSQL. Las subidas de recibos responden 202 y extraen en segundo plano. El matching usa prefiltro SQL, RapidFuzz, embeddings y RRF.",
    mermaid: `flowchart LR
  Client --> Idem[Idempotencia Redis]
  Idem --> API[Routers FastAPI]
  API --> Svc[Servicios]
  Svc --> DB[(PostgreSQL)]
  API --> Receipts[202 + extracción en background]
  Receipts --> LLM[Groq o stub]
  Svc --> Match[SQL + RapidFuzz + RRF]
  classDef accent fill:#4A0E0E,stroke:#1A1A1A,color:#F5F1EB;
  class Idem,Svc,Match accent`,
  },
  {
    id: "import-resolve-cli",
    name: "Import Resolve CLI",
    subtitle: "Herramienta CLI y Git merge driver · paquete Python PyPI",
    stack: ["Python 3.9+", "Git CLI", "Hatchling", "PyPI", "GitHub Actions"],
    href: "https://github.com/ikrame-ih/import-resolve-cli",
    demo: "https://pypi.org/project/import-resolve-cli/",
    image: ASSETS.projects.importResolve,
    imageAlt:
      "VS Code con un conflicto de imports en Python e import-resolve en dry-run resolviéndolo en la terminal",
    description:
      "CLI y merge driver de Git que resuelve conflictos de merge en bloques de imports de Python. Publicado en PyPI, sin dependencias en runtime.",
    architectureSummary:
      "Lee los marcadores de conflicto de Git en archivos .py, extrae los imports en conflicto, elimina duplicados, los ordena según PEP 8 y puede usarse como merge driver automático.",
    mermaid: `flowchart LR
  Git[Git Merge Conflict] --> CLI[import-resolve-cli]
  CLI --> Parse[Parse conflicto .py]
  Parse --> Dedupe[Deduplicar + ordenar imports]
  Dedupe --> Write[Resolución limpia sin marcadores]
  CLI --> Driver[Modo Auto Merge Driver .git/config]
  classDef accent fill:#4A0E0E,stroke:#1A1A1A,color:#F5F1EB;
  class CLI,Parse,Dedupe accent`,
  },
  {
    id: "malaga-onboarding",
    name: "Málaga Onboarding",
    subtitle: "Checklist de llegada para expats · web + LangGraph",
    stack: ["JavaScript", "LangGraph.js", "Groq", "Cheerio", "Cloudflare"],
    href: null,
    demo: "https://malaga-onboarding.pages.dev/",
    image: ASSETS.projects.malagaOnboarding,
    imageAlt:
      "Mockup de málaga.onboarding en claro y oscuro — escritorio, portátil, tablet y móvil",
    description:
      "Checklist para instalarte en Málaga: padrón, NIE y Seguridad Social. El plan personalizado se genera mediante una ordenación topológica, sin LLM en el recorrido del usuario. Una CLI local de LangGraph.js comprueba las fichas informativas.",
    signals: [
      "El camino del usuario es un grafo — 0€ de inferencia",
      "CLI de operador: LangGraph.js, GraphState tipado, Groq",
      "Si una afirmación es ambigua, pasa a HUMAN_REVIEW_REQUIRED",
    ],
    architectureSummary:
      "La API pública ordena los pasos con un orden topológico. El CLI de operador es un grafo LangGraph.js de cuatro nodos: researcher (Groq), source finder (DuckDuckGo + Cheerio), fact-checker, editor. Si el riesgo es medio o alto, corta a revisión humana.",
    mermaid: `flowchart LR
  UI[Checklist UI] --> Plan[Plan API]
  Plan --> Sort[Topological sort]
  Op[Operator CLI] --> LG[LangGraph.js]
  LG --> R[Researcher Groq]
  LG --> S[Fuentes + Cheerio]
  LG --> F[Fact checker]
  F --> H{riesgo?}
  H -->|alto| Human[HUMAN_REVIEW]
  classDef accent fill:#4A0E0E,stroke:#1A1A1A,color:#F5F1EB;
  class Plan,LG,F accent`,
  },
  {
    id: "my-playthrough",
    name: "MyPlaythrough",
    badge: "Proyecto final de DAW",
    subtitle: "Gestor personal de biblioteca de juegos · full-stack",
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
    imageAlt: "MyPlaythrough — biblioteca de juegos y comunidad",
    description:
      "Proyecto final de DAW (máxima calificación): aplicación PERN para backlog, partidas y completados, con comunidad, recomendaciones y moderación.",
    architectureSummary:
      "Una SPA en React habla con una API REST en Express. La API gestiona autenticación JWT y bcrypt, persiste en PostgreSQL y hace de proxy para portadas de Steam/RAWG.",
    mermaid: `flowchart LR
  SPA[SPA React] --> API[API REST Express]
  API --> Auth[JWT + bcrypt]
  API --> DB[(PostgreSQL)]
  API --> Covers[Proxy Steam / RAWG]
