import { ASSETS } from "../assets.js";

const PROFILE = {
  name: "Ikrame I. H.",
  location: "Málaga, ES",
  workPreference: "Disponible para oportunidades en remoto o híbridas",
  email: "ikihga2223@gmail.com",
  phone: "+34 682 02 76 93",
  github: "https://github.com/ikrame-ih",
  portfolioRepo: "https://github.com/ikrame-ih/dev-portfolio",
  linkedin: "https://www.linkedin.com/in/ikrame-ih/",
  siteUrl: "https://ikrame.dev",
  overline: "DESARROLLADORA DE SOFTWARE · FRONTEND · BACKEND",
  headlineParts: [
    { text: "Desarrollo software" },
    { text: "pensando tanto en los detalles", accent: true },
    { text: "como en las personas que lo utilizan.", italic: true },
  ],
  heroSubtext:
    "Hola, soy Ikrame Ibn Hayoun, desarrolladora de software en Málaga. Mi especialidad es el desarrollo frontend, aunque también disfruto construyendo soluciones backend. Me gusta convertir ideas en aplicaciones intuitivas, fiables y escalables. La IA forma parte de mi trabajo diario y siempre estoy explorando nuevas formas de aplicarla.",
  heroFacts: [
    { eyebrow: "Disponible para", text: "Remoto · híbrido" },
    { eyebrow: "Trayectoria", text: "DAW · jun. 2026" },
    {
      eyebrow: "Enfoque",
      text: "IA y Big Data",
      accent: true,
    },
  ],
  tagline:
    "Graduada en DAW · especializándome en IA y Big Data · disponible en remoto o híbrido",
  cliAbout: [
    "Hola — soy Ikrame. Desarrollo software en Málaga, con debilidad por las interfaces tranquilas y cuidadas.",
    "Me desenvuelvo bien en ambos lados de un producto: la interfaz que la gente toca y las APIs y datos que lo sostienen.",
    "Fuera del editor suelo estar metida en un juego con mucha historia, cantando para desconectar, o afinando pequeños detalles estéticos.",
    "Acabo de terminar DAW (jun. 2026). Enfoque en IA y Big Data. Remoto o híbrido me encaja bien.",
    "Este portfolio también lo construí yo de punta a punta — el código está en GitHub.",
  ],
  cliTldr: [
    "Desarrolladora de software en Málaga — especialidad frontend, también backend.",
    "La IA forma parte de mi día a día; me especializo en IA y Big Data. Busco roles remotos o híbridos donde importen el oficio y la claridad.",
  ],
  cliAvail:
    "Disponible en remoto o híbrido. Basada en Málaga (CET). Encantada de hablar cuando quieras.",
  cliNow:
    "Acabo de terminar DAW (jun. 2026) y las prácticas en DATA CONTROL. La IA ya forma parte de mi día a día; enfoque en IA y Big Data — abierta a la siguiente oportunidad.",
  portraitLink: {
    label: "Salúdame en LinkedIn →",
  },
  practiceAside: {
    title: "De un vistazo",
    text: "Técnico Superior en DAW (jun. 2026) — proyecto final MyPlaythrough con la máxima calificación. Especializándome en IA y Big Data. Los proyectos en GitHub usan layouts basados en componentes, tests y CI; en las prácticas me centré en componentes reutilizables y marcado semántico. Incluido este portfolio, construido de cero.",
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
      id: "frontend",
      index: "01",
      title: "Frontend",
      kicker:
        "Interfaces, animaciones y todo aquello con lo que interactúa el usuario.",
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
      id: "backend",
      index: "02",
      title: "Backend y datos",
      kicker:
        "APIs, bases de datos y los procesos que conectan toda la aplicación.",
      groups: [
        {
          label: "APIs y runtime",
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
          label: "Datos",
          items: ["PostgreSQL", "SQL", "dbt", "Dagster"],
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
    role: "Executive Assistant",
    period: "feb. 2025 — mar. 2026",
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
    role: "Brand Ambassador",
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
    period: "mar. — oct. 2024",
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
  {
    id: "reconflow",
    name: "ReconFlow",
    subtitle: "Pipeline de conciliación de importaciones · backend (en curso)",
    stack: ["Python", "FastAPI", "dbt", "PostgreSQL", "Dagster"],
    href: null,
    demo: null,
    image: null,
    imageAlt: null,
    description:
      "Pipeline FastAPI sin interfaz: CSV bancarios y facturas pasan por ingesta, transformación y cruce hasta un mart de conciliación.",
    architectureSummary:
      "Extractos CSV y webhooks de facturas llegan a una zona raw. Transformaciones dbt alimentan un cruce difuso y FX, que escribe el mart de conciliación y una cola de excepciones.",
    mermaid: `flowchart LR
  CSV[Extractos CSV] --> Raw[(Zona raw)]
  WH[Webhooks de facturas] --> Stream[Enriquecedor]
  Stream --> Raw
  Raw --> dbt[Transformaciones dbt]
  dbt --> Match[Cruce difuso + FX]
  Match --> Mart[Mart de conciliación]
  Match --> Quar[Cola de excepciones]
  classDef accent fill:#4A0E0E,stroke:#1A1A1A,color:#F5F1EB;
  class Stream,dbt,Match accent`,
  },
];

const BENTO = {
  overline: "03 · intereses",
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

const BLOG = {
  name: "El vault de Tizza",
  avatar: ASSETS.tizzasVaultAvatar,
  avatarCredit: {
    artist: "heartpuff",
    url: "https://www.instagram.com/heart_puff/",
  },
  intro:
    "Notas desde mi rincón de internet sobre desarrollo, lo que estoy aprendiendo, música, anime y lo que se cruce. No es un blog técnico: es un sitio para pensar en voz alta, compartir lo que me gusta y dejar espacio para experimentar.",
  comingSoon: true,
  posts: [
    {
      slug: "planning-first",
      title: "Primero planificar. Sí, soy de esas.",
      excerpt:
        "Notas de colores, carpetas ordenadas. Pasar de los rotuladores al ordenador fue una revelación. Obsidian como desarrolladora se sintió como la herramienta que me faltaba.",
      date: "2026-04-02",
      kind: "personal",
    },
    {
      slug: "it-never-really-stops",
      title: "Nunca para del todo",
      excerpt:
        "La tecnología implica aprender sin parar. Dejé de perseguirlo todo y me centro en mejorar un poco cada día. Mantener la curiosidad basta.",
      date: "2026-03-20",
      kind: "diary",
    },
    {
      slug: "the-fun-part-building-things",
      title: "La parte divertida: hacer algo de verdad",
      excerpt:
        "Convertir una idea en algo que se pueda usar. Empezar de cero, chocar con problemas, resolverlos. A veces es un lío, pero ahí está lo bueno.",
      date: "2026-02-10",
      kind: "didactic",
    },
  ],
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
  BLOG,
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
