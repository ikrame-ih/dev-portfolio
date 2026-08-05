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
  siteUrl: "https://ikrame.dev",
  overline: "BACKEND · APIs · POSTGRESQL",
  headlineParts: [
    { text: "Desarrollo software" },
    { text: "pensando tanto en los detalles", accent: true },
    { text: "como en las personas que lo utilizan.", italic: true },
  ],
  heroSubtext:
    "Hola, soy Ikrame Ibn Hayoun — desarrolladora centrada en backend en Málaga. Construyo APIs, modelos de datos y los bordes que fallan con reintentos y tráfico real. También entrego React cuando el producto necesita UI. Abierta a roles remotos o híbridos.",
  heroFacts: [
    { eyebrow: "Disponible para", text: "Remoto · híbrido" },
    { eyebrow: "Trayectoria", text: "DAW · jun. 2026" },
    {
      eyebrow: "Enfoque",
      text: "APIs backend",
      accent: true,
    },
  ],
  tagline:
    "Desarrolladora backend · FastAPI · PostgreSQL · Node · disponible en remoto o híbrido",
  cliAbout: [
    "Hola — soy Ikrame. Desarrolladora backend en Málaga, con debilidad por las interfaces tranquilas cuando toca el lado UI.",
    "Dedico la mayor parte de la energía a APIs, bases de datos y los bordes difíciles: reintentos, precisión monetaria, auth.",
    "Fuera del editor suelo estar metida en un juego con mucha historia, cantando para desconectar, o afinando pequeños detalles estéticos.",
    "Acabo de terminar DAW (jun. 2026). Busco roles backend remotos o híbridos.",
    "Este portfolio también lo construí yo de punta a punta — el código está en GitHub.",
  ],
  cliTldr: [
    "Desarrolladora backend en Málaga — FastAPI, Node, PostgreSQL. También frontend cuando hace falta.",
    "Ahora mismo: ReckonFlow (API de ledger idempotente). Busco roles backend remotos o híbridos.",
  ],
  cliAvail:
    "Disponible en remoto o híbrido. Basada en Málaga (CET). Encantada de hablar cuando quieras.",
  cliNow:
    "Acabo de terminar DAW (jun. 2026) y las prácticas en DATA CONTROL. Centrada en ReckonFlow — abierta a la siguiente oportunidad backend.",
  portraitLink: {
    label: "Salúdame en LinkedIn →",
  },
  practiceAside: {
    title: "De un vistazo",
    text: "Técnico Superior en DAW (jun. 2026) — proyecto final MyPlaythrough con la máxima calificación. Los proyectos backend en GitHub cubren FastAPI, Express, PostgreSQL, tests y CI. Incluido este portfolio, construido de cero.",
  },
};

const LANGUAGES = [
  { lang: "Español", level: "Nativo", code: "ES" },
  { lang: "Inglés", level: "C1", detail: "Avanzado", code: "EN" },
  { lang: "Darija", level: "Nativo", detail: "árabe marroquí", code: "AR" },
];

const STACK = {
  domains: [
    {
      id: "backend",
      index: "01",
      title: "Backend y datos",
      kicker: "APIs, persistencia y los bordes difíciles entre ambos.",
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
          label: "Oficio",
          items: ["HTML semántico", "Accesibilidad"],
        },
      ],
    },
    {
      id: "tooling",
      index: "03",
      title: "Herramientas y entrega",
      kicker:
        "Herramientas para desarrollar, probar y desplegar aplicaciones con confianza.",
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
      "Desarrollé y puse en marcha una plataforma de formación basada en Moodle como proyecto principal de las prácticas: configuración, estructura de contenidos y personalización continua.",
      "Gestioné el día a día de la base de datos de la plataforma (consultas, estructura y conexión con la aplicación).",
      "Personalicé la interfaz mediante CSS y ajustes de diseño para ofrecer una experiencia más coherente que la instalación estándar de Moodle.",
    ],
  },
  {
    company: "EY Global Delivery Services",
    role: "Asistente ejecutiva",
    period: "ene. 2025 — mar. 2026",
    track: "hybrid",
    bullets: [
      {
        text: "Desarrollé una Power App que gestionó de extremo a extremo el sorteo de Navidad del CNS: inscripción y asignación de números en un solo sitio, en lugar de perseguido por correo o Teams.",
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
      "Realicé degustaciones de producto y presentaciones breves en entornos retail con mucho ritmo.",
      "Organicé la logística del stand y el inventario de fin de jornada.",
      "Ver de cerca la operativa en retail inspiró Live Event Radar, mi panel de operaciones en tiempo real para recintos.",
    ],
  },
  {
    company: "Conciencia Fundraising",
    role: "Administrativa de contabilidad y operaciones",
    period: "nov. — dic. 2024",
    track: "biz",
    bullets: [
      "Elaboré informes de donantes y el seguimiento correspondiente vía Drive, Outlook y Evergiving.",
      "Gestioné tareas de RR. HH. en Factorial y el control de costes de viajes y gastos.",
      "Coordiné al equipo en Asana, Notion y Slack; creé vistas de reporting en Looker.",
    ],
  },
  {
    company: "Sylvis Profesional Cosmetic",
    role: "Administrativa",
    period: "ene. — oct. 2024",
    track: "biz",
    bullets: [
      "Concilié cuentas bancarias y registré facturas, incluidas compras de importación.",
      "Seguí costes de vehículos e importación en Excel; gestioné la documentación entrante.",
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
    period: "Inicio: septiembre de 2026",
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
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Alembic", "pytest"],
    href: "https://github.com/ikrame-ih/reckon-flow",
    demo: "https://reckon-flow.onrender.com/docs",
    image: ASSETS.projects.reckonFlow,
    imageAlt: "Swagger UI de ReckonFlow — GET suggestions con una línea bancaria emparejada",
    description:
      "API FastAPI headless para aprobaciones de viaje, ledger de doble entrada inmutable, extracción de recibos con LLM y conciliación bancaria híbrida — para que un POST reintentado no pague dos veces.",
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
    cta: "+6 recomendaciones",
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
  marqueeRare: ["disponible", "Málaga → remoto", "hecho con mimo"],
  section: {
    cvOverline: "01 · trayectoria y habilidades",
    cvTitleBefore: "Experiencia, tecnologías y ",
    cvTitleAccent: "formación.",
    cvKicker:
      "Tecnologías con las que trabajo, idiomas y la experiencia que las respalda.",
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
