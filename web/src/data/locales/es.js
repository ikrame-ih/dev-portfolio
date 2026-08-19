import { ASSETS } from "../assets.js";

const PROFILE = {
  name: "Ikrame Ibn Hayoun",
  location: "Málaga, ES",
  workPreference: "Disponible para oportunidades en remoto o híbridas",
  email: "ikihga2223@gmail.com",
  phone: "+34 682 02 76 93",
  github: "https://github.com/ikrame-ih",
  portfolioRepo: "https://github.com/ikrame-ih/dev-portfolio",
  linkedin: "https://www.linkedin.com/in/ikrame-ih/",
  buyMeACoffee: "https://buymeacoffee.com/ikrame.dev",
  siteUrl: "https://ikrame.dev",
  overline: "PYTHON · FASTAPI · IA APLICADA",
  headlineParts: [
    { text: "APIs en Python" },
    { text: "con criterio de producción", accent: true },
    { text: "e IA que no se sale del esquema.", italic: true },
  ],
  heroSubtext:
    "Hola, soy Ikrame Ibn Hayoun — backend Python en Málaga. FastAPI, PostgreSQL, Redis y tests; IA aplicada donde aporta (extracción LLM estructurada, embeddings). React cuando el producto necesita UI. Abierta a remoto o híbrido.",
  heroFacts: [
    { eyebrow: "Disponible para", text: "Remoto · híbrido" },
    { eyebrow: "Enfoque", text: "Python + IA", accent: true },
    { eyebrow: "Stack", text: "FastAPI · Postgres" },
  ],
  tagline:
    "Backend Python · FastAPI · PostgreSQL · IA aplicada · remoto o híbrido",
  cliAbout: [
    "Hola — soy Ikrame. Backend Python en Málaga: FastAPI, Postgres, y IA en producto (no en un notebook).",
    "ReckonFlow es el ejemplo: ledger idempotente, extracción de recibos con Groq/PydanticAI, conciliación con embeddings.",
    "Fuera del editor suelo estar metida en un juego con mucha historia, cantando para desconectar, o afinando pequeños detalles estéticos.",
    "Busco roles de backend Python / IA aplicada, remoto o híbrido.",
    "Este portfolio también lo construí yo de punta a punta — el código está en GitHub.",
  ],
  cliTldr: [
    "Backend Python · FastAPI · PostgreSQL · LLMs en producto (Groq, extracción estructurada, embeddings).",
    "Ahora: ReckonFlow (API en vivo). Busco backend Python + IA, remoto o híbrido.",
  ],
  cliAvail:
    "Disponible en remoto o híbrido. Basada en Málaga (CET). Encantada de hablar cuando quieras.",
  cliNow:
    "Centrada en ReckonFlow (FastAPI + LLM + Postgres) y en el siguiente rol de backend Python / IA aplicada.",
  portraitLink: {
    label: "Salúdame en LinkedIn →",
  },
  practiceAside: {
    title: "De un vistazo",
    text: "Python backend con IA en producto (ReckonFlow: Groq, Pydantic, embeddings). En EY, una Power App que sustituyó correo y Teams en el sorteo del CNS. Prácticas: plataforma de formación con SQL en uso.",
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
      title: "Backend Python",
      kicker: "APIs REST, persistencia y el contrato OpenAPI — lo que piden casi todas las ofertas.",
      groups: [
        {
          label: "APIs y runtime",
          items: [
            "Python",
            "FastAPI",
            "Pydantic",
            "async/await",
            "REST APIs",
            "OpenAPI",
            "JWT",
          ],
        },
        {
          label: "Datos",
          items: ["PostgreSQL", "SQL", "SQLAlchemy", "Alembic", "Redis"],
        },
      ],
    },
    {
      id: "ai",
      index: "02",
      title: "IA aplicada",
      kicker:
        "En producto: LLMs con salida estructurada. No LangChain de tutorial ni TensorFlow de curso.",
      groups: [
        {
          label: "En entrega (ReckonFlow)",
          items: ["LLMs", "Groq", "PydanticAI", "Embeddings", "Evals"],
        },
      ],
    },
    {
      id: "frontend",
      index: "03",
      title: "Frontend",
      kicker:
        "Cuando el producto necesita UI — no el eje de la candidatura.",
      groups: [
        {
          label: "UI",
          items: ["React", "TypeScript", "Vite", "Tailwind CSS"],
        },
      ],
    },
    {
      id: "tooling",
      index: "04",
      title: "Entrega",
      kicker: "Git, tests, contenedores y CI: el checklist de InfoJobs/LinkedIn.",
      groups: [
        {
          label: "Cadena de trabajo",
          items: [
            "Git",
            "GitHub Actions",
            "pytest",
            "mypy",
            "Ruff",
            "Docker",
            "Linux",
          ],
        },
      ],
    },
  ],
};

const EXPERIENCE = [
  {
    company: "Proyectos propios",
    role: "Backend Python e IA aplicada",
    period: "ago. 2026 — actualidad",
    track: "tech",
    bullets: [
      "ReckonFlow: API FastAPI en vivo (OpenAPI) — ledger idempotente, extracción de recibos con Groq y PydanticAI, conciliación híbrida, pytest y CI.",
      "import-resolve-cli en PyPI: merge driver de Git para conflictos de imports, sin dependencias de runtime.",
      "Publicación de punta a punta: docs, tests, GitHub Actions, Render y el paquete en el índice.",
    ],
  },
  {
    company: "DATA CONTROL",
    role: "Desarrolladora de software en prácticas",
    period: "mar. 2026 — jun. 2026",
    track: "tech",
    bullets: [
      "Puse en marcha una plataforma de formación en Moodle: estructura de contenidos, personalización y el ciclo de cambios posteriores.",
      "Llevé el día a día de la base de datos: consultas SQL, modelo de datos y conexión con la aplicación que usaban formadores y alumnos.",
      "Personalicé la interfaz con CSS para que el uso diario no dependiera del tema por defecto.",
    ],
  },
  {
    company: "EY Global Delivery Services",
    role: "Asistente ejecutiva · herramienta interna",
    period: "ene. 2025 — mar. 2026",
    track: "hybrid",
    bullets: [
      {
        text: "Desarrollé una Power App que gestionó de extremo a extremo el sorteo de Navidad del CNS: inscripción y asignación de números en un solo sitio, en lugar de correo o Teams.",
        proof: {
          id: "ey-holiday-raffle",
          name: "Sorteo de Navidad CNS — Power App",
          image: ASSETS.experience.eyHolidayRaffle,
          imageAlt:
            "Power App de EY para el sorteo de cestas de Navidad del CNS: reservar número y guardar nombre, correo y asignación",
        },
      },
      "Coordiné de principio a fin visitas de clientes en Málaga: agenda, logística y la estancia — jornadas que a menudo condicionaban el avance de un acuerdo.",
      "Operé en un entorno GDS internacional: el día a día de un equipo de servicios profesionales.",
    ],
  },
];

const EDUCATION = [
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
    school: "IES Zaidín Vergeles",
    degree: "Especialización en IA y Big Data",
    tags: [
      "Curso de Especialización",
      "Nivel MECES / EQF 5",
      "Tras ciclo superior",
    ],
    period: "Inicio: septiembre de 2026",
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
    stack: ["Python", "FastAPI", "Pydantic", "PostgreSQL", "Redis", "pytest"],
    href: "https://github.com/ikrame-ih/reckon-flow",
    demo: "https://reckon-flow.onrender.com/docs",
    image: ASSETS.projects.reckonFlow,
    imageAlt: "Swagger UI de ReckonFlow — GET suggestions con una línea bancaria emparejada",
    description:
      "API FastAPI (OpenAPI) para viajes corporativos: aprobaciones, ledger, extracción de recibos con LLM (Groq + PydanticAI, salida estructurada) y conciliación híbrida (SQL + RapidFuzz + embeddings + RRF).",
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
    name: "Import Resolve Cli",
    subtitle: "Herramienta CLI y Git merge driver · paquete Python PyPI",
    stack: ["Python 3.9+", "Git CLI", "Hatchling", "PyPI", "GitHub Actions"],
    href: "https://github.com/ikrame-ih/import-resolve-cli",
    demo: "https://pypi.org/project/import-resolve-cli/",
    image: ASSETS.projects.importResolve,
    imageAlt:
      "VS Code con un conflicto de imports en Python e import-resolve en dry-run resolviéndolo en la terminal",
    description:
      "Herramienta CLI y controlador de fusión para Git que resuelve automáticamente conflictos de merge en bloques de imports de Python. Publicado en PyPI con cero dependencias en runtime.",
    architectureSummary:
      "Analiza marcadores de conflicto de Git en archivos .py, extrae bloques en conflicto, elimina duplicados, ordena imports respetando sintaxis Python e implementa un motor de auto-merge.",
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
    id: "live-event-radar",
    name: "Live Event Radar",
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
      "Aplicación para supervisar en tiempo real la operativa de un recinto mediante un panel de control y un mapa interactivo, inspirada en la necesidad de disponer de información actualizada durante eventos.",
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
  classDef accent fill:#4A0E0E,stroke:#1A1A1A,color:#F5F1EB;
  class API,Auth,DB accent`,
  },
  {
    id: "aiba-widget",
    name: "Aiba",
    subtitle: "Compañero de productividad de escritorio · Electron",
    stack: ["Electron", "React 19", "TypeScript", "Vite", "Vitest"],
    href: "https://github.com/ikrame-ih/aiba-widget",
    demo: null,
    image: ASSETS.projects.aibaWidget,
    imageAlt: "Aiba — widget de foco y planificación en escritorio",
    description:
      "Widget local para Windows: planificar el día, proteger un bloque de concentración y desconectar — sin cuenta ni nube.",
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
  overline: "04 · intereses",
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
      body: "Me encanta aprender cada día sobre skincare, haircare y maquillaje: siempre hay algo que mejorar.",
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
      body: "Me gusta leer y escojo un libro solo para ir leyéndomelo poco a poco; casi siempre es ficción. El último que terminé fue Touch of Death de Alice Wilde.",
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
      body: "He cogido el gusto a viajar — y pronto veré más mundo.",
      span: "md:col-span-3 md:row-span-1",
      image: ASSETS.interests.travelling,
      imageAlt: "Esquina de una ciudad en un viaje reciente",
      imagePosition: "object-center",
    },
  ],
};

const LINKEDIN_SIGNALS = {
  overline: "03 · desde LinkedIn",
  title: "Notas de",
  titleAccent: "LinkedIn.",
  featuredLabel: "Nota destacada",
  posts: [
    {
      slug: "contains-duplicate-fundamentals",
      title: "Programming Fundamentals Series | Episode 2: Contains Duplicate",
      excerpt:
        "Siguiendo el post anterior, continúo esta serie documentando cómo refuerzo fundamentos de programación y resolución de problemas. El tema de hoy es otro clásico: Contains Duplicate.",
      date: "2026-08-05",
      topic: "Algoritmos",
      series: "Fundamentos · Ep. 2",
      href: "https://www.linkedin.com/posts/ikrame-ih_python-softwareengineering-algorithms-share-7490756595665162241-Awub/",
    },
    {
      slug: "two-sum-fundamentals",
      title: "Programming Fundamentals Series | Episode 1: Two Sum",
      excerpt:
        "Empiezo una serie para documentar cómo refuerzo fundamentos de programación y resolución de problemas. El tema de hoy es un clásico de LeetCode: Two Sum.",
      date: "2026-08-04",
      topic: "Algoritmos",
      series: "Fundamentos · Ep. 1",
      href: "https://www.linkedin.com/posts/ikrame-ih_python-softwareengineering-algorithms-activity-7490454995847323650-2Ik9",
    },
    {
      slug: "big-o-cheat-sheet",
      title: "Notación Big O",
      excerpt:
        "La notación Big O aparece mucho al estudiar algoritmos y estructuras de datos, y también en entrevistas técnicas. En Big O, n representa el tamaño de la entrada.",
      date: "2026-08-03",
      topic: "Fundamentos",
      series: null,
      href: "https://www.linkedin.com/posts/ikrame-ih_technology-softwareengineering-programming-share-7489761460697403393-ldOL/",
    },
  ],
  feedback: {
    label: "Feedback profesional",
    initials: ["A", "P", "I", "E", "N", "S"],
    quote:
      "Destaca por su compromiso, responsabilidad y ganas constantes de aprender y crecer. Lo que más valoré fue su capacidad de escuchar, integrar el feedback y buscar siempre maneras de mejorar.",
    attribution: "Assistant Director",
    cta: "+5 recomendaciones",
    href: "https://www.linkedin.com/in/ikrame-ih/details/recommendations/",
  },
};

const BOW_BOARD = {
  overline: "05 · lazos",
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
  marqueeRare: ["Python + IA", "Málaga → remoto", "OpenAPI"],
  section: {
    cvOverline: "01 · trayectoria y habilidades",
    cvTitleBefore: "Experiencia, tecnologías y ",
    cvTitleAccent: "formación.",
    cvKicker:
      "El stack que piden las ofertas de Python backend (y la IA que sí he entregado).",
    languagesTitle: "Idiomas",
    languagesKicker: "Cómo me comunico con la gente — y entre contextos.",
    experience: "Experiencia",
    education: "Formación",
    projectsOverline: "02 · proyectos seleccionados",
    projectsTitleBefore: "Proyectos seleccionados",
    projectsTitleAccent: "con notas de arquitectura.",
    projectsKicker:
      "Cada proyecto enlaza a su repositorio, la demo en vivo si existe, y un diagrama de arquitectura. Haz clic en una captura para ampliarla.",
    inProgress: "En curso",
    comingSoon: "Próximamente",
    howItWorks: "Cómo funciona →",
    github: "GitHub ↗",
    demo: "Demo ↗",
  },
  tracks: { tech: "tech", hybrid: "tech × negocio", biz: "negocio / ops" },
};

export default catalog;
