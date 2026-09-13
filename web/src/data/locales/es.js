import { ASSETS } from "../assets.js";

const PROFILE = {
  name: "Ikrame Ibn Hayoun",
  location: "Málaga, ES",
  workPreference: "Disponible para oportunidades remotas o híbridas",
  email: "ikihga2223@gmail.com",
  phone: "+34 682 02 76 93",
  github: "https://github.com/ikrame-ih",
  portfolioRepo: "https://github.com/ikrame-ih/dev-portfolio",
  linkedin: "https://www.linkedin.com/in/ikrame-ih/",
  buyMeACoffee: "https://buymeacoffee.com/ikrame.dev",
  siteUrl: "https://ikrame.dev",
  overline: "INGENIERA BACKEND E IA · PYTHON · FASTAPI",
  headlineParts: [
    { text: "El modelo extrae. " },
    { text: "El código decide.", accent: true },
  ],
  heroSubtext: [
    "Soy Ikrame, ingeniera de software backend y de IA aplicada en Málaga. Diseño APIs con Python, FastAPI y PostgreSQL para sistemas que deben mantenerse consistentes ante peticiones concurrentes y reintentos.",
    "Aplico IA con límites claros: el modelo convierte información en datos estructurados; el código valida, aplica las reglas de negocio y toma las decisiones críticas.",
    "Disponible para oportunidades remotas o híbridas.",
  ],
  heroFacts: [
    { eyebrow: "Inglés", text: "C1 Advanced" },
    { eyebrow: "Ahora", text: "Máster de FP en IA y big data" },
    { eyebrow: "En PyPI", text: "import-resolve-cli", accent: true },
  ],
  tagline:
    "Ingeniera backend e IA · Python · FastAPI · disponible en remoto o híbrido",
  cliAbout: [
    "Hola, soy Ikrame. Desarrollo backend en Málaga. Si me toca la interfaz, priorizo que se lea con claridad.",
    "Casi todo el tiempo lo paso con FastAPI, PostgreSQL e IA aplicada: extracción estructurada, matching y tests.",
    "Fuera del código, juegos con mucha historia, canto, o me enredo con detalles de diseño.",
    "Terminé DAW en junio de 2026. Empiezo un máster de FP en inteligencia artificial y big data, online y compatible con jornada completa. Preparo certificaciones cloud. Busco backend o IA, en remoto o híbrido.",
    "Este portfolio lo he hecho yo. El código está en GitHub.",
  ],
  cliTldr: [
    "Backend Python en Málaga. FastAPI, PostgreSQL, IA aplicada. React cuando el producto lo necesita.",
    "ReckonFlow es el principal y ya está hecho: API de ledger, conciliación con bloqueo de fila, extracción estructurada. Validata es un SaaS B2B con Jairo García Antolín, en proceso. Busco backend o IA, remoto o híbrido.",
  ],
  cliAvail:
    "Abierta a remoto o híbrido. Málaga (CET). Puedes escribirme cuando quieras.",
  cliNow:
    "Terminé DAW (jun. 2026) y las prácticas en DATA CONTROL. Empiezo el máster de FP online en IA y big data y preparo certificaciones cloud. ReckonFlow está hecho. Validata está en proceso. Abierta a un puesto de backend o de IA.",
  portraitLink: {
    label: "LinkedIn →",
  },
  practiceAside: {
    title: "De un vistazo",
    text: "DAW, junio de 2026. MyPlaythrough, el proyecto final, con un 10. En GitHub hay backend e IA aplicada: FastAPI, PostgreSQL, extracción con LLM, tests y CI. Este sitio también está hecho desde cero.",
  },
};

const LANGUAGES = [
  { lang: "Español", level: "Nativo", code: "ES" },
  { lang: "Inglés", level: "C1", detail: "Avanzado", code: "EN" },
  { lang: "Darija", level: "Nativo", detail: "árabe marroquí", code: "AR" },
];

// Cuatro dominios en bandas a ancho completo; los idiomas van debajo en tres placas.
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
            "Celery",
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
          pairWithNext: true,
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
            "PydanticAI",
            "Prompt engineering",
            "Structured outputs",
            "Hashed-token vectors",
            "Recuperación híbrida",
            "RRF",
            "Guardrails",
          ],
        },
        {
          label: "Con agentes",
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
          label: "En curso · IA y Big Data",
          items: ["PySpark", "NumPy", "Pandas", "TensorFlow", "PyTorch", "Spark", "Kafka"],
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
    role: "Desarrolladora de software en prácticas",
    period: "mar. 2026 — jun. 2026",
    track: "tech",
    bullets: [
      "Desarrollé aplicaciones internas en entorno DataFlex y en Python: acceso a datos, lógica de negocio y personalización continua.",
      "Creé una plataforma Moodle desde cero: entorno e instalación, estructura de cursos y contenidos, usuarios y roles, base de datos/SQL y theming CSS/UI de punta a punta.",
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
    degree:
      "Máster de FP en inteligencia artificial y big data",
    tags: [
      "Máster de FP",
      "EQF 5",
      "100% online",
    ],
    period: "sep. 2026, en curso",
  },
  {
    school: "CESUR Este, Málaga",
    degree: "Técnico superior en desarrollo de aplicaciones web (DAW)",
    tags: [
      "Ciclo formativo de grado superior",
      "EQF 5",
      "Matrícula de honor (10/10)",
    ],
    period: "sep. 2024 a jun. 2026",
  },
  {
    school: "I.E.S. Politécnico Jesús Marín",
    degree: "Técnico en gestión administrativa",
    tags: [
      "Ciclo formativo de grado medio",
      "EQF 4",
      "Matrícula de honor",
    ],
    period: "2022 a 2024",
  },
];

const PROJECTS = [
  {
    id: "reconflow",
    name: "ReckonFlow",
    lane: "backend",
    tier: "flagship",
    status:
      "Hecho. API y código públicos. La documentación Scalar, en el plan gratuito de Render, puede tardar unos 50 s en arrancar. En producción las rutas financieras piden API key.",
    role: "Autora",
    subtitle: "API de conciliación de viajes corporativos · backend",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "PydanticAI", "RapidFuzz", "pytest"],
    href: "https://github.com/ikrame-ih/reckon-flow",
    demo: "https://reckon-flow.onrender.com/docs",
    demoKind: "docs",
    proof: "reconcile",
    image: ASSETS.projects.reckonFlow,
    imageKind: "screenshot",
    imageCaption: "Documentación interactiva de la API (Scalar). No demuestra la concurrencia.",
    imageAlt: "Documentación de la API de ReckonFlow con una sugerencia de línea bancaria",
    description:
      "API de conciliación de viajes corporativos (FastAPI): empareja gastos (tickets) con movimientos bancarios, los asienta en un libro mayor de solo inserción y confirma el match con FOR UPDATE para que el mismo pago no se asiente dos veces.",
    problem:
      "La API concilia gastos de viaje con el banco: empareja cada ticket con su movimiento y lo apunta en un ledger.",
    decision:
      "Al confirmar, Postgres bloquea las filas (FOR UPDATE) para no asentar el mismo pago dos veces. Importes en Decimal. El ledger es de solo inserción. El modelo rellena un esquema cerrado de recibo; el código decide si se asienta.",
    evidence:
      "Los tests cubren el conflicto concurrente, que el libro mayor no se pueda actualizar ni borrar en Postgres, el replay de idempotencia con TTL de 24 h (si Redis cae, la petición sigue) y extra=forbid en la extracción.",
    limitations:
      "La idempotencia depende de Redis y del TTL. El emparejado usa SQL, RapidFuzz y vectores de tokens hasheados con RRF; no un modelo de embeddings entrenado. Los recibos llegan como texto (u OCR ya pasado a texto), no como imagen.",
    signals: [
      "Bloqueo de fila al confirmar (FOR UPDATE)",
      "Importes en Decimal y libro mayor de solo inserción",
      "Extracción con esquema cerrado; el modelo no aprueba pagos",
      "La documentación puede tardar en arrancar; las rutas financieras van con clave",
    ],
    architectureSummary:
      "La petición pasa por middleware de idempotencia en Redis (SET NX EX, 24 h; si Redis no está, no se bloquea la API), servicios FastAPI y PostgreSQL. La subida de un recibo responde 202 y extrae en segundo plano. El emparejado combina prefiltro SQL, RapidFuzz, vectores hasheados y RRF.",
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
    id: "validata",
    name: "Validata",
    lane: "backend",
    tier: "supporting",
    badge: "En proceso",
    status: "En proceso. Producto de pago, sin repositorio público.",
    roleBefore: "Co-desarrollado con ",
    roleLink: {
      href: "https://jagardev.com/",
      label: "Jairo García Antolín",
    },
    roleAfter:
      ". Algunas de mis implementaciones más relevantes han sido: inferir la columna de razón social (un Excel solo con CIF se rechaza), cuotas atómicas en Redis, descargas con token HMAC, Stripe Checkout de prueba, lista de espera en base de datos, CI, y dejar la búsqueda solo por nombre, sin CIF ni VIES en el camino ejecutable. Jairo diseñó la ingesta BORME, los workers Celery, RapidFuzz y la base de FastAPI.",
    role: "Co-desarrollado con Jairo García Antolín. Algunas de mis implementaciones más relevantes han sido: inferir la columna de razón social (un Excel solo con CIF se rechaza), cuotas atómicas en Redis, descargas con token HMAC, Stripe Checkout de prueba, lista de espera en base de datos, CI, y dejar la búsqueda solo por nombre, sin CIF ni VIES en el camino ejecutable. Jairo diseñó la ingesta BORME, los workers Celery, RapidFuzz y la base de FastAPI.",
    subtitle: "Búsqueda por razón social · BORME · SaaS B2B",
    stack: ["Python", "FastAPI", "Celery", "PostgreSQL", "Redis", "React", "TypeScript", "Stripe"],
    href: null,
    demo: null,
    proof: "validata",
    image: ASSETS.projects.validata,
    imageKind: "photo",
    imageCaption: "Mockup de escritorio de la pantalla de subida de Validata. No es un tenant real.",
    imageAlt:
      "Monitor en un escritorio con Validata: busca y valida empresas por razón social, con zona para subir archivos",
    description:
      "Pegas razones sociales o subes un Excel/CSV. Validata localiza cada denominación en el BORME y devuelve el estado registral. El CIF no entra en la búsqueda: si el archivo solo trae identificadores, se rechaza; si hay nombre y CIF, solo se usa el nombre y el CIF se queda en la hoja de datos originales.",
    problem:
      "El producto busca por razón social, no por CIF. Un archivo solo de identificadores no puede pasar por el motor como si fueran empresas.",
    decision:
      "La cuota se reserva en Redis (Lua atómico) antes del worker. El inferenciador elige la columna de razón social y penaliza CIF/NIF/DNI. Las descargas van con token HMAC. S.L. frente a S.A. queda en REVISION_SUGERIDA.",
    evidence:
      "Tests de inferencia de columna, de un Excel solo-CIF, de cuota atómica, de descarga firmada y de webhooks Stripe en test.",
    signals: [
      "Producto de pago, sin repositorio público",
      "Búsqueda por razón social contra BORME",
      "CIF ignorado en el match, conservado en datos originales",
      "Con Jairo García Antolín",
    ],
    mermaid: `flowchart LR
  File[Hoja o texto] --> API[FastAPI]
  API --> Col[Columna razón social]
  API --> Q[Cuota Redis]
  API --> Celery[Celery]
  Celery --> BORME[Matching BORME]
  classDef accent fill:#4A0E0E,stroke:#1A1A1A,color:#F5F1EB;
  class API,Col,Q accent`,
  },
  {
    id: "import-resolve-cli",
    name: "Import Resolve CLI",
    lane: "tools",
    tier: "compact",
    status: "Publicado en PyPI. Solo conflictos de bloques de import, no merges arbitrarios.",
    role: "Autora",
    subtitle: "Herramienta CLI y Git merge driver · paquete Python PyPI",
    demoKind: "package",
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
    id: "en-es-localization",
    name: "Localización web inglés-español",
    lane: "tools",
    tier: "compact",
    status: "Publicada en skills.sh. Código público.",
    role: "Autora",
    subtitle: "Skill de agente · localización EN/ES",
    stack: ["Python", "en-GB", "en-US", "es-ES", "es-419"],
    href: "https://github.com/ikrame-ih/english-spanish-web-localization",
    demo: "https://www.skills.sh/ikrame-ih/english-spanish-web-localization/english-spanish-web-localization",
    demoKind: "skill",
    image: ASSETS.projects.enEsLocalization,
    imageAlt:
      "Mockup de la skill de localización inglés-español: la página en skills.sh y un par de CTAs en contexto",
    description:
      "Localización por significado entre en-GB, en-US, es-ES y es-419. locale_guard es un script en Python (solo stdlib) que compara dos catálogos JSON: claves, placeholders, etiquetas y encoding.",
    problem:
      "en-GB, en-US, es-ES y es-419 se tratan como si fueran el mismo idioma. Un calco frase a frase cuela registro, ortografía y nombres de instituciones.",
    decision:
      "Cuatro guías de locale, un brief por significado y un locale_guard en Python sobre el catálogo. No hay API de traducción en vivo.",
    evidence:
      "Publicada como skill en skills.sh. El código está en GitHub. locale_guard es Python de la stdlib, con unittest.",
    limitations: "No es traducción jurada.",
    architectureSummary:
      "Un brief elige el locale exacto. El texto se escribe contra esa guía. locale_guard, un script en Python, revisa el catálogo sin red.",
    mermaid: `flowchart LR
  Brief[Brief de locale] --> Guides[en-GB en-US es-ES es-419]
  Guides --> Copy[Texto de destino]
  Copy --> Guard[locale_guard Python]
  classDef accent fill:#4A0E0E,stroke:#1A1A1A,color:#F5F1EB;
  class Guides,Guard accent`,
  },
  {
    id: "malaga-onboarding",
    name: "Málaga Onboarding",
    lane: "apps",
    tier: "compact",
    status: "Checklist pública. El CLI de operador es local.",
    role: "Autora",
    subtitle: "Lista para instalarse en Málaga · web + LangGraph",
    stack: ["JavaScript", "LangGraph.js", "Groq", "Cheerio", "Cloudflare"],
    href: null,
    demo: "https://malaga-onboarding.pages.dev/",
    live: true,
    image: ASSETS.projects.malagaOnboarding,
    imageAlt:
      "Mockup de málaga.onboarding en claro y oscuro — escritorio, portátil, tablet y móvil",
    description:
      "Lista para instalarse en Málaga: padrón, NIE, Seguridad Social. El plan que ves en la web es un orden topológico: no hay LLM en lo que usa la persona. Un CLI local con LangGraph.js revisa las fichas.",
    signals: [
      "Lo que usa la persona es un grafo — 0€ de inferencia",
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
    lane: "apps",
    tier: "compact",
    status: "Demo y código públicos. Proyecto final con un 10.",
    role: "Autora",
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
  classDef accent fill:#4A0E0E,stroke:#1A1A1A,color:#F5F1EB;
  class API,Auth,DB accent`,
  },
  {
    id: "live-event-radar",
    name: "Live Event Radar",
    lane: "apps",
    tier: "compact",
    status: "Demo pública. La telemetría es simulada, no es un recinto en vivo.",
    role: "Autora",
    subtitle: "Panel de operaciones en tiempo real para eventos · frontend",
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
    imageAlt: "Live Event Radar — panel de control y telemetría",
    description:
      "Un panel de recinto: un flujo de eventos alimenta el centro de mando y el mapa. Lo hice después de ver que la información del recinto llegaba tarde.",
    architectureSummary:
      "Un flujo de eventos simulado escribe en un store de telemetría Zustand. Derivaciones puras alimentan dos vistas sincronizadas: el centro de mando (mapa SVG del recinto) y el panel de telemetría (mapa Leaflet).",
    mermaid: `flowchart LR
  Sim[Flujo de eventos simulado] --> Store[Zustand telemetry-store]
  Store --> Derive[Derivaciones puras]
  Derive --> CC[Centro de mando /]
  Derive --> Dash[Telemetría /dashboard]
  CC --> SVG[Mapa SVG del recinto]
  Dash --> Map[Mapa Leaflet]
  classDef accent fill:#4A0E0E,stroke:#1A1A1A,color:#F5F1EB;
  class Store,Derive accent`,
  },
  {
    id: "aiba-widget",
    name: "Aiba",
    lane: "apps",
    tier: "compact",
    status: "Widget local para Windows. Sin tienda ni sincronización en la nube.",
    role: "Autora",
    subtitle: "Compañero de productividad de escritorio · Electron",
    stack: ["Electron", "React 19", "TypeScript", "Vite", "Vitest"],
    href: "https://github.com/ikrame-ih/aiba-widget",
    demo: null,
    image: ASSETS.projects.aibaWidget,
    imageAlt: "Aiba — widget de foco y planificación en escritorio",
    description:
      "Widget local para Windows: planificar el día, proteger un bloque de concentración y desconectar, sin cuenta ni nube.",
    architectureSummary:
      "La UI en React habla por un puente IPC preload con el proceso principal de Electron. El main guarda JSON local y ejecuta el overlay de foco — sin dependencia en la nube.",
    mermaid: `flowchart LR
  UI[UI React] --> Bridge[IPC preload]
  Bridge --> Main[Electron main]
  Main --> Store[JSON local]
  Main --> Guard[Overlay de foco]
  classDef accent fill:#4A0E0E,stroke:#1A1A1A,color:#F5F1EB;
  class Main,Store accent`,
  },
];

const BENTO = {
  overline: "Intereses",
  title: "Cosas que disfruto",
  titleAccent: "fuera del desarrollo.",
  kicker: "Un vistazo a lo que hago cuando cierro el editor.",
  items: [
    {
      key: "gaming",
      label: "caso abierto",
      title: "Videojuegos",
      body: "Ace Attorney sigue siendo mi saga número uno, pase lo que pase. Más allá de eso, mi gusto es amplio y depende del momento: juegos con historia, novelas visuales, misterios, JRPG y ARPG largos, incluso shooters, y un cariño especial por Pokémon desde pequeña.",
      span: "md:col-span-2 md:row-span-2",
      image: ASSETS.interests.gaming,
      imageAlt: "Phoenix Wright: Ace Attorney — mi saga favorita",
      imagePosition: "object-top",
    },
    {
      key: "music",
      label: "sonando ahora",
      title: "Música",
      body: "Canto cuando necesito despejarme (aunque, en realidad, canto todo el tiempo). Suelo tener a Voilà en bucle, pero cambio de playlist según mi mood.",
      span: "md:col-span-1 md:row-span-2",
      image: ASSETS.interests.music,
      imageAlt: "Voilà — mi grupo favorito",
      imagePosition: "object-center",
    },
    {
      key: "aesthetics",
      label: "en el tocador",
      title: "Cuidado de la piel",
      body: "Me gusta ir aprendiendo skincare, haircare y maquillaje: casi siempre un detalle pequeño cada vez.",
      span: "md:col-span-2 md:row-span-1",
      image: ASSETS.interests.aesthetics,
      imageAlt: "Cuidado de la piel y maquillaje — rutinas personales",
      imagePosition: "object-center",
    },
    {
      key: "training",
      label: "semanal",
      title: "Entrenamiento",
      body: "Tres o cuatro sesiones de gimnasio a la semana cuando puedo. Siempre entreno con auriculares: sin música me cuesta concentrarme.",
      span: "md:col-span-1 md:row-span-1",
      image: ASSETS.interests.training,
      imageAlt: "Entrenamiento — esenciales del gimnasio",
      imagePosition: "object-center",
    },
    {
      key: "reading",
      label: "en la estantería",
      title: "Lectura",
      body: "Elijo un libro y lo leo despacio; casi siempre ficción. El último que terminé fue Touch of Death de Alice Wilde.",
      span: "md:col-span-1 md:row-span-1",
      image: ASSETS.interests.reading,
      imageAlt: "Touch of Death de Alice Wilde — último libro leído",
      imagePosition: "object-center",
    },
    {
      key: "series",
      label: "noche tranquila",
      title: "Series y anime",
      body: "Animes, series o películas: veo de todo cuando me apetece y según el tiempo que tenga. Breaking Bad es la última serie que terminé.",
      span: "md:col-span-2 md:row-span-1",
      image: ASSETS.interests.series,
      imageAlt: "Anime y series — ocio",
      imagePosition: "object-center",
    },
    {
      key: "travelling",
      label: "embarque próximo",
      title: "Viajar",
      body: "He cogido el gusto a viajar, y pronto veré más mundo.",
      span: "md:col-span-3 md:row-span-1",
      image: ASSETS.interests.travelling,
      imageAlt: "Esquina de una ciudad en un viaje reciente",
      imagePosition: "object-center",
    },
  ],
};

const LINKEDIN_SIGNALS = {
  overline: "Desde LinkedIn",
  title: "Notas de",
  titleAccent: "LinkedIn.",
  featuredLabel: "Nota destacada",
  posts: [
    {
      slug: "grok-bot-openclaw-instinct",
      title: "Grok Bot vs Open Claw vs Instinct - Which one fits you?",
      excerpt:
        "Llevo tiempo leyendo sobre agentes de IA personales, así que comparé tres que salen mucho: OpenClaw, Instinct y Grok Bot. Los he usado los tres, y también miré lo que cuenta la gente en X y Reddit, reseñas y análisis.",
      date: "2026-09-08",
      href: "https://www.linkedin.com/posts/ikrame-ih_grok-bot-vs-open-claw-vs-instinct-which-activity-7503148582032699392-_6Q9",
      image: ASSETS.linkedin.agentsCompare,
      imageAlt:
        "Primera diapositiva del carrusel de LinkedIn: Which one fits you?",
    },
    {
      slug: "reasoning-effort-dial",
      title: "Reasoning effort is a dial",
      excerpt:
        "Algunos modelos de lenguaje no van directos a la respuesta. Primero escriben un borrador privado de su razonamiento. Ese borrador son tokens, las mismas piezas de texto que el modelo genera siempre. A ese borrador le llamamos reasoning.",
      date: "2026-09-04",
      href: "https://www.linkedin.com/posts/ikrame-ih_reasoning-effort-is-a-dial-llms-activity-7501615098176847872-xFtR",
      image: ASSETS.linkedin.reasoningEffort,
      imageAlt:
        "Primera diapositiva del carrusel de LinkedIn: Reasoning effort is a dial",
    },
    {
      slug: "reckonflow-llm-authority",
      title: "AI + Backend Architecture - ReckonFlow",
      excerpt:
        "Una decisión de arquitectura en ReckonFlow: el LLM no tiene autoridad sobre el estado de negocio. Los LLM sirven para interpretar entrada sin estructura.",
      date: "2026-08-18",
      href: "https://www.linkedin.com/posts/ikrame-ih_ai-backend-architecture-reckonflow-activity-7495453949236387840-jPDy",
      image: ASSETS.linkedin.reckonFlowArchitecture,
      imageAlt:
        "Primera diapositiva del carrusel de LinkedIn sobre la arquitectura de ReckonFlow",
    },
  ],
  feedback: {
    label: "Feedback profesional",
    cta: "+4 recomendaciones",
    href: "https://www.linkedin.com/in/ikrame-ih/details/recommendations/",
    items: [
      {
        lang: "es",
        role: "Financial Crime Manager",
        quote:
          "Ikrame es una gran profesional, dedicada, resolutiva y capaz de desempeñar distintas tareas complejas a la vez, cumpliendo los deadlines establecidos y siempre con una actitud proactiva.",
      },
      {
        lang: "es",
        role: "Assistant Director",
        quote:
          "Trabajar con Ikrame fue una gran experiencia. Destaca por su compromiso, responsabilidad y ganas constantes de aprender y crecer. Lo que más valoré fue su capacidad de escuchar, integrar el feedback y buscar siempre maneras de mejorar. Su actitud positiva y su dedicación la convierten en una profesional y compañera excelente.",
      },
      {
        lang: "es",
        role: "Senior Executive Assistant",
        quote:
          "Ikrame es una compañera muy responsable, siempre dispuesta a ayudar y a responder. No duda en echar una mano y en proponer si aparece cualquier cosa. Ha sido un placer trabajar con Ikrame.",
      },
      {
        lang: "es",
        role: "HR Recruiter",
        quote:
          "Tuve el placer de trabajar codo a codo con Ikrame. Demostró profesionalidad, dedicación y un compromiso claro con un trabajo bien hecho. Su criterio, fiabilidad y forma de colaborar la convirtieron en una compañera de peso entre equipos.",
      },
    ],
  },
};

const BOW_BOARD = {
  overline: "Lazos",
  title: "Gracias por llegar hasta aquí.",
  titleAccent: "Deja un lazo antes de irte.",
  kicker:
    "Haz clic en cualquiera de las páginas para dejar tu lazo — o enfoca una página, usa las flechas y pulsa Intro. Uno por persona; puedes moverlo cuando quieras.",
  signedKicker:
    "Ese es tu lazo en la página — haz clic de nuevo, o usa las flechas e Intro, para moverlo.",
  emptyState: "Sé la primera persona en dejar un lazo — clic o teclado.",
  leftWatermark:
    "Para quienes pasaron de los proyectos y se quedaron en los detalles.",
  rightWatermark: "Un pequeño gracias. Tu lazo aquí significa que estuviste.",
  countLabel: "personas dejaron su lazo",
  countLabelSingular: "persona dejó su lazo",
  marginHint: "un lazo por persona · clic o flechas + Intro",
  marginHintSigned: "tu lazo · clic o flechas para moverlo",
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
  marqueeRare: ["disponible", "Málaga → remoto", "hecho con mimo"],
  section: {
    cvOverline: "CV y habilidades",
    cvTitleBefore: "Roles, habilidades y ",
    cvTitleAccent: "estudio.",
    cvKicker:
      "Anteriormente trabajé en conciliaciones, gastos y en el día a día de quien usa esas herramientas. Por eso diseño APIs pensando en la concurrencia, los reintentos y los datos a medias.",
    languagesTitle: "Idiomas",
    languagesKicker: "Español, inglés y darija; idiomas en los que me comunico habitualmente.",
    experience: "Experiencia",
    education: "Formación",
    projectsOverline: "Proyectos",
    projectsTitleBefore: "Proyectos que se pueden ",
    projectsTitleAccent: "probar.",
    projectsKicker:
      "Proyectos en Python, herramientas publicadas, y otros proyectos como builder apasionada.",
    pythonLane: "Backends en Python",
    toolsLane: "Herramientas publicadas",
    appsLane: "Otros trabajos",
    inProgress: "En curso",
    comingSoon: "Próximamente",
    shotPending: "Falta la captura",
    howItWorks: "Leer el caso",
    github: "Ver código",
    demo: "Demo",
    live: "Abrir producto",
    viewPackage: "Ver paquete",
    viewSkill: "Ver skill",
    apiReference: "Docs de la API",
    privateNote: "Producto privado",
    walkthrough: {
      reconcile: {
        kicker: "Si confirman a la vez",
        steps: [
          "Dos personas eligen el mismo movimiento bancario.",
          "La primera confirma. PostgreSQL bloquea la fila (FOR UPDATE) y queda emparejado.",
          "La segunda choca. No se escribe otro asiento.",
        ],
        footnote:
          "La idempotencia usa Redis (TTL 24 h). Si Redis cae, la petición sigue.",
      },
      validata: {
        kicker: "Qué hace cada fila",
        headers: ["Razón social", "Estado", "Qué pasa"],
        rows: [
          { id: "Mercadona SA", name: "COINCIDENCIA_EXACTA", result: "Sale en el BORME" },
          { id: "Garcia SL vs SA", name: "REVISION_SUGERIDA", result: "Forma societaria distinta" },
          { id: "Solo CIF", name: "Error de archivo", result: "No hay columna de nombre" },
        ],
        footnote:
          "El match usa la caché BORME local. Un Excel solo con CIF ni siquiera entra al motor.",
      },
    },
  },
  tracks: { tech: "tech", hybrid: "tech × negocio", biz: "negocio / ops" },
};

export default catalog;
