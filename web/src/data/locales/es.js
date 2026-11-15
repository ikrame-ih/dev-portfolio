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
  overline: "DATA, AI & SOFTWARE ENGINEER, MÁLAGA",
  headlineParts: [
    { text: "Datos, IA y software " },
    { text: "con rigor de ingeniería.", accent: true },
  ],
  heroSubtext: [
    "Soy Ikrame, Data, AI & Software Engineer en Málaga. Aplico rigor de ingeniería a proyectos de datos, IA y software: calidad del dato desde la ingesta, modelos evaluados con métricas reales y software testeado y desplegado con CI/CD.",
    "Desarrollo en Python y SQL, APIs REST, pipelines ETL con Spark y Kafka, machine learning e IA generativa con LLM y agentes, siempre con tests y evals. +3 años de experiencia profesional y proyectos en producción.",
    "Disponible para oportunidades remotas o híbridas.",
  ],
  heroFacts: [
    { eyebrow: "Inglés", text: "C2" },
    { eyebrow: "Ahora", text: "Máster FP en IA y Big Data" },
    { eyebrow: "En PyPI", text: "import-resolve-cli", accent: true },
  ],
  tagline:
    "Data, AI & Software Engineer, Python y SQL, disponible en remoto o híbrido",
  cliAbout: [
    "Hola, soy Ikrame. Trabajo en datos, IA y software desde Málaga. Si me toca la interfaz, priorizo que se lea con claridad.",
    "Casi todo el tiempo lo paso con Python y SQL: pipelines ETL, calidad del dato, APIs con FastAPI y PostgreSQL, y LLM con salida estructurada, tests y evals.",
    "Fuera del código, juegos con mucha historia, canto, o me enredo con detalles de diseño.",
    "Terminé DAW en junio de 2026. Estoy cursando el Máster FP en Inteligencia Artificial y Big Data, a distancia. Busco puestos de datos, IA o backend, en remoto o híbrido.",
    "Este portfolio lo he hecho yo. El código está en GitHub.",
  ],
  cliTldr: [
    "Data, AI & Software Engineer en Málaga. Python, SQL, ETL con Spark y Kafka, machine learning e IA generativa. React cuando el producto lo necesita.",
    "ReckonFlow es el proyecto principal: API de gastos y conciliación bancaria en producción. Validata es un SaaS B2B con Jairo García Antolín, en desarrollo. Busco datos, IA o backend, en remoto o híbrido.",
  ],
  cliAvail:
    "Abierta a remoto o híbrido. Málaga (CET). Puedes escribirme cuando quieras.",
  cliNow:
    "Terminé DAW (jun. 2026) y las prácticas en DATA CONTROL. Curso el Máster FP en IA y Big Data. ReckonFlow está en producción y Validata, en desarrollo. Abierta a puestos de datos, IA o backend.",
  portraitLink: {
    label: "LinkedIn →",
  },
  practiceAside: {
    title: "De un vistazo",
    text: "DAW, junio de 2026, con el proyecto final MyPlaythrough calificado con 10/10. En GitHub hay ETL con controles de calidad, APIs con FastAPI y PostgreSQL, extracción con LLM, evals, tests y CI/CD. Este sitio también está hecho desde cero.",
  },
};

const LANGUAGES = [
  { lang: "Español", level: "Nativo", code: "ES" },
  { lang: "Inglés", level: "C2", code: "EN" },
  { lang: "Darija", level: "Nativo", detail: "árabe marroquí", code: "AR" },
];

// Siete dominios en bandas a ancho completo; los idiomas van debajo en tres placas.
const STACK = {
  domains: [
    {
      id: "data",
      index: "01",
      title: "Datos",
      kicker: "Ingesta, calidad y procesamiento de datos.",
      groups: [
        {
          label: "Procesamiento",
          items: ["ETL", "calidad de datos", "gobierno del dato", "pandas", "NumPy"],
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
          label: "Almacenamiento y análisis",
          items: ["MongoDB y NoSQL", "data warehouse", "Power BI", "R"],
        },
      ],
    },
    {
      id: "ai",
      index: "02",
      title: "IA generativa y machine learning",
      kicker: "LLM con salidas estructuradas, evals y límites claros.",
      groups: [
        {
          label: "IA generativa",
          items: [
            "LLMs",
            "RAG",
            "embeddings",
            "recuperación híbrida",
            "agentes de IA (LangChain, LangGraph.js, tool calling)",
            "prompt engineering",
            "salidas estructuradas",
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
          label: "IA responsable",
          items: ["AI Act", "XAI"],
        },
        {
          label: "Desarrollo asistido por IA",
          items: [
            "OpenAI API y GPT",
            "Codex",
            "Claude",
            "Claude Code",
            "GitHub Copilot",
            "Gemini",
            "Cursor",
            "Grok",
            "Llama, Qwen, DeepSeek y Kimi con Ollama",
            "Orca",
          ],
        },
      ],
    },
    {
      id: "backend",
      index: "03",
      title: "Backend",
      kicker: "APIs, bases de datos y lo que hay entre medias.",
      groups: [
        {
          label: "Lenguajes y APIs",
          items: [
            "Python",
            "SQL",
            "APIs REST",
            "FastAPI",
            "Pydantic",
            "JWT",
            "Celery",
            "microservicios",
            "Node.js",
            "Express",
          ],
        },
        {
          label: "Bases de datos",
          items: ["PostgreSQL", "MySQL", "Redis", "SQLAlchemy", "Alembic"],
        },
        {
          label: "Cliente",
          items: ["React", "TypeScript"],
        },
      ],
    },
    {
      id: "cloud",
      index: "04",
      title: "Cloud y DevOps",
      kicker: "Contenedores, CI y despliegue.",
      groups: [
        {
          label: "Cloud y DevOps",
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
      title: "Prácticas de ingeniería",
      kicker: "Tests, CI y el resto del flujo de entrega.",
      groups: [
        {
          label: "Prácticas de ingeniería",
          items: [
            "pytest",
            "Vitest",
            "Playwright",
            "evals de LLM",
            "CI/CD",
            "ADR",
            "mypy",
            "Ruff",
            "pip-audit",
            "idempotencia",
            "spec-driven development (SDD)",
            "desarrollo asistido por IA con revisión humana del código",
          ],
        },
      ],
    },
    {
      id: "business",
      index: "06",
      title: "Herramientas de negocio",
      kicker: "Automatización y datos para equipos de negocio.",
      groups: [
        {
          label: "Negocio",
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
      title: "Competencias",
      kicker: "Cómo trabajo con el equipo.",
      groups: [
        {
          label: "Competencias",
          items: [
            "comunicación con negocio y cliente",
            "autonomía y ownership de punta a punta",
            "documentación técnica",
            "trabajo en equipo",
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
    period: "mar. 2026 - jun. 2026",
    track: "tech",
    bullets: [
      "Gestioné con SQL la base de datos MySQL de la plataforma: consultas para extraer, filtrar y actualizar datos de usuarios, cursos y matrículas.",
      "Instalé y configuré desde cero una plataforma Moodle: servidor web con PHP, base de datos, cron de tareas programadas, plugins, usuarios y cursos.",
      "Desarrollé aplicaciones internas en DataFlex y Python: lógica de negocio y personalización continua.",
    ],
  },
  {
    company: "EY Global Delivery Services",
    role: "Asistente ejecutiva",
    period: "ene. 2025 - mar. 2026",
    track: "hybrid",
    bullets: [
      {
        text: "Construí una Power App (Power Fx) que gestionó de principio a fin el sorteo de Navidad del departamento de Consulting, con más de 500 personas: inscripción y asignación de números en una sola aplicación, en lugar de correo y Teams.",
        proof: {
          id: "ey-holiday-raffle",
          name: "Sorteo de Navidad de Consulting, Power App",
          image: ASSETS.experience.eyHolidayRaffle,
          imageAlt:
            "Power App de EY para el sorteo de cestas de Navidad de Consulting: reservar número y guardar nombre, correo y asignación.",
        },
      },
      "Coordiné con negocio las visitas de clientes estratégicos en Málaga (agendas, logística y experiencia in situ) en un entorno global de servicios profesionales.",
      "Gestioné y actualicé de forma periódica los datos de cada visita (participantes, gastos y logística) para su seguimiento y control.",
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
    period: "nov. - dic. 2024",
    track: "biz",
    bullets: [
      "Registré donantes, captadores y costes de viaje en Odoo, Factorial y Looker para el control interno de gastos.",
    ],
  },
  {
    company: "Sylvis Profesional Cosmetic",
    role: "Administrativa",
    period: "mar. - oct. 2024",
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
      "Curso de Especialización en Inteligencia Artificial y Big Data (Máster FP)",
    tags: [
      "Máster FP",
      "EQF 5",
      "a distancia",
    ],
    period: "sep. 2026, en curso",
  },
  {
    school: "CESUR Este, Málaga",
    degree: "Técnico Superior en Desarrollo de Aplicaciones Web (CFGS, DAW)",
    tags: [
      "Ciclo formativo de grado superior",
      "EQF 5",
      "Proyecto final con nota máxima (10/10)",
    ],
    period: "sep. 2024 a jun. 2026",
  },
  {
    school: "I.E.S. Politécnico Jesús Marín",
    degree: "Técnico en Gestión Administrativa (CFGM), Matrícula de Honor",
    tags: [
      "Ciclo formativo de grado medio",
      "EQF 4",
      "Matrícula de Honor",
    ],
    period: "sep 2022 a jun 2024",
  },
];

const PROJECTS = [
  {
    id: "reconflow",
    name: "ReckonFlow",
    lane: "backend",
    tier: "flagship",
    status:
      "En producción. API y código públicos. La documentación, en el plan gratuito de Render, puede tardar unos 50 s en arrancar. Las rutas financieras piden API key.",
    role: "Autora",
    subtitle: "API REST de gastos y conciliación bancaria para viajes corporativos",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "PydanticAI", "Groq", "Prometheus", "GitHub Actions"],
    href: "https://github.com/ikrame-ih/reckon-flow",
    demo: "https://reckon-flow.onrender.com/docs",
    demoKind: "docs",
    proof: "reconcile",
    image: ASSETS.projects.reckonFlow,
    imageKind: "screenshot",
    imageCaption: "Documentación interactiva de la API (Scalar). No demuestra la concurrencia.",
    imageAlt: "Documentación de la API de ReckonFlow con una sugerencia de línea bancaria",
    description:
      "API REST de gastos y conciliación bancaria. Ingesta extractos bancarios en CSV con controles de calidad de datos, empareja cada gasto con su movimiento y lo asienta en un ledger de doble entrada de solo inserción. Al confirmar, PostgreSQL bloquea la fila (FOR UPDATE) y Redis guarda claves de idempotencia, así que un reintento no duplica pagos ni asientos.",
    problem:
      "La API concilia gastos de viaje con el banco: empareja cada ticket con su movimiento y lo apunta en un ledger.",
    decision:
      "Al confirmar, Postgres bloquea las filas (FOR UPDATE) para no asentar el mismo pago dos veces. Importes en Decimal. El ledger es de solo inserción. El modelo rellena un esquema cerrado de recibo; el código decide si se asienta.",
    evidence:
      "Los tests cubren el conflicto concurrente, que el libro mayor no se pueda actualizar ni borrar en Postgres, el replay de idempotencia con TTL de 24 h (si Redis cae, la petición sigue) y extra=forbid en la extracción. 132 tests en pytest, umbral de cobertura del 80 % en CI/CD, evals de extracción y de matching en cada ejecución, mypy, Ruff, pip-audit, métricas Prometheus y 7 ADR.",
    limitations:
      "La idempotencia depende de Redis y del TTL. El emparejado usa SQL, RapidFuzz y vectores de tokens hasheados con RRF; no un modelo de embeddings entrenado. Los recibos llegan como texto (u OCR ya pasado a texto), no como imagen.",
    signals: [
      "Ledger de doble entrada de solo inserción",
      "Idempotencia en Redis y FOR UPDATE",
      "El modelo rellena un esquema cerrado y no aprueba ni paga",
      "132 tests y evals en cada CI",
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
    badge: "En desarrollo",
    status: "En desarrollo. Código privado.",
    roleBefore: "Co-desarrollado con ",
    roleLink: {
      href: "https://jagardev.com/",
      label: "Jairo García Antolín",
    },
    roleAfter:
      ". Algunas de mis implementaciones más relevantes han sido: inferir la columna de razón social, cuotas atómicas en Redis, descargas con token HMAC, Stripe Checkout de prueba, lista de espera en base de datos, CI, y dejar la búsqueda solo por denominación corporativa. Jairo diseñó la ingesta BORME, los workers Celery, RapidFuzz y la base de FastAPI.",
    role: "Co-desarrollado con Jairo García Antolín. Algunas de mis implementaciones más relevantes han sido: inferir la columna de razón social, cuotas atómicas en Redis, descargas con token HMAC, Stripe Checkout de prueba, lista de espera en base de datos, CI, y dejar la búsqueda solo por denominación corporativa. Jairo diseñó la ingesta BORME, los workers Celery, RapidFuzz y la base de FastAPI.",
    subtitle: "SaaS B2B de verificación de empresas españolas contra el BORME",
    stack: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "React", "Stripe", "GitHub Actions"],
    href: null,
    demo: null,
    proof: "validata",
    image: ASSETS.projects.validata,
    imageKind: "photo",
    imageCaption: "Mockup de escritorio de la pantalla de subida de Validata. No es un tenant real.",
    imageAlt:
      "Monitor en un escritorio con Validata: busca y valida empresas por razón social, con zona para subir archivos",
    description:
      "Pegas razones sociales o subes un Excel/CSV. Validata localiza cada denominación en el BORME y devuelve el estado registral. Las columnas originales se conservan intactas; solo participa la columna de nombre.",
    problem:
      "El motor busca por razón social. Un archivo sin columna de nombre no entra en el matching.",
    decision:
      "La cuota se reserva en Redis (Lua atómico) antes del worker. El inferenciador elige la columna de razón social. Las descargas van con token HMAC. Si la forma societaria no cuadra (S.L. frente a S.A.), el sistema marca REVISION_SUGERIDA.",
    evidence:
      "Tests de inferencia de columna, de cuota atómica, de descarga firmada y de webhooks Stripe en test.",
    signals: [
      "En desarrollo. Código privado.",
      "Búsqueda por razón social contra BORME",
      "Columnas originales intactas en la exportación",
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
    id: "my-playthrough",
    name: "MyPlaythrough",
    badge: "Proyecto final de DAW",
    lane: "backend",
    tier: "compact",
    status: "Demo y código públicos. Proyecto final con un 10.",
    role: "Autora",
    subtitle: "Gestor de biblioteca de videojuegos con comunidad, proyecto final de DAW (10/10)",
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
    imageAlt: "MyPlaythrough - biblioteca de juegos y comunidad",
    description:
      "Proyecto final de DAW con nota máxima (10/10). Aplicación PERN de punta a punta: API REST en Express con JWT, bcrypt, validación, rate limiting y moderación, modelo relacional en PostgreSQL y cliente React, con 43 tests en Vitest y despliegue en Vercel, Render y Neon.",
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
    id: "malaga-onboarding",
    name: "Málaga Onboarding",
    lane: "backend",
    tier: "compact",
    status: "Publicada y en uso. Código privado. Los agentes de IA solo se ejecutan en local.",
    role: "Autora",
    subtitle: "Guía de llegada para expats del PTA (Parque Tecnológico de Andalucía)",
    stack: ["JavaScript", "Cloudflare Pages", "Vercel"],
    href: null,
    demo: "https://malaga-onboarding.pages.dev/",
    live: true,
    image: ASSETS.projects.malagaOnboarding,
    imageAlt:
      "Mockup de málaga.onboarding en claro y oscuro - escritorio, portátil, tablet y móvil",
    description:
      "Guía para instalarse en Málaga: padrón, NIE, Seguridad Social. El plan de la web sale de un motor determinista con ordenación topológica, sin LLM (0 € de inferencia). En local uso tres flujos de agentes con LangGraph.js y Groq para investigar y verificar el contenido, auditar la UX y analizar necesidades de usuario. La presenté a ESN Málaga (Erasmus Student Network), y su equipo de partners la valoró como útil para estudiantes internacionales.",
    signals: [
      "Plan determinista sin LLM: 0 € de inferencia",
      "Tres flujos de agentes en local con LangGraph.js y Groq",
      "Las fichas de riesgo medio o alto pasan a revisión humana antes de publicarse",
    ],
    architectureSummary:
      "La API pública ordena los pasos con un orden topológico. El flujo local de investigación y verificación es un grafo LangGraph.js de cuatro nodos: researcher (Groq), source finder (DuckDuckGo + Cheerio), fact-checker y editor. Si el riesgo es medio o alto, pasa a revisión humana.",
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
    id: "import-resolve-cli",
    name: "import-resolve-cli",
    lane: "backend",
    tier: "compact",
    status: "Publicado en PyPI. Solo conflictos de bloques de import, no merges arbitrarios.",
    role: "Autora",
    subtitle: "CLI y merge driver de Git que resuelve conflictos de imports en Python",
    demoKind: "package",
    stack: ["Python", "pytest", "mypy", "Ruff", "GitHub Actions"],
    href: "https://github.com/ikrame-ih/import-resolve-cli",
    demo: "https://pypi.org/project/import-resolve-cli/",
    image: ASSETS.projects.importResolve,
    imageAlt:
      "VS Code con un conflicto de imports en Python e import-resolve en dry-run resolviéndolo en la terminal",
    description:
      "CLI y merge driver de Git que resuelve conflictos en bloques de imports de Python. Publicado en PyPI, sin dependencias en runtime, con escritura atómica, validación de sintaxis, 40 tests y CI/CD con workflow de release.",
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
    subtitle: "Skill de agente, localización EN/ES",
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
    id: "live-event-radar",
    name: "Live Event Radar",
    lane: "apps",
    tier: "compact",
    status: "Demo pública. La telemetría es simulada, no es un recinto en vivo.",
    role: "Autora",
    subtitle: "Panel de operaciones en tiempo real para eventos, frontend",
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
    imageAlt: "Live Event Radar - panel de control y telemetría",
    description:
      "Vistas de operaciones de un recinto a partir de un store Zustand: centro de mando en SVG y un mapa Leaflet. El flujo de eventos es simulado.",
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
    subtitle: "Compañero de productividad de escritorio, Electron",
    stack: ["Electron", "React 19", "TypeScript", "Vite", "Vitest"],
    href: "https://github.com/ikrame-ih/aiba-widget",
    demo: null,
    image: ASSETS.projects.aibaWidget,
    imageAlt: "Aiba - widget de foco y planificación en escritorio",
    description:
      "Widget local para Windows: planificar el día, proteger un bloque de concentración y desconectar, sin cuenta ni nube.",
    architectureSummary:
      "La UI en React habla por un puente IPC preload con el proceso principal de Electron. El main guarda JSON local y ejecuta el overlay de foco - sin dependencia en la nube.",
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
      imageAlt: "Phoenix Wright: Ace Attorney - mi saga favorita",
      imagePosition: "object-top",
    },
    {
      key: "music",
      label: "sonando ahora",
      title: "Música",
      body: "Canto cuando necesito despejarme (aunque, en realidad, canto todo el tiempo). Suelo tener a Voilà en bucle, pero cambio de playlist según mi mood.",
      span: "md:col-span-1 md:row-span-2",
      image: ASSETS.interests.music,
      imageAlt: "Voilà - mi grupo favorito",
      imagePosition: "object-center",
    },
    {
      key: "aesthetics",
      label: "en el tocador",
      title: "Cuidado de la piel",
      body: "Me gusta ir aprendiendo skincare, haircare y maquillaje: casi siempre un detalle pequeño cada vez.",
      span: "md:col-span-2 md:row-span-1",
      image: ASSETS.interests.aesthetics,
      imageAlt: "Cuidado de la piel y maquillaje - rutinas personales",
      imagePosition: "object-center",
    },
    {
      key: "training",
      label: "semanal",
      title: "Entrenamiento",
      body: "Tres o cuatro sesiones de gimnasio a la semana cuando puedo. Siempre entreno con auriculares: sin música me cuesta concentrarme.",
      span: "md:col-span-1 md:row-span-1",
      image: ASSETS.interests.training,
      imageAlt: "Entrenamiento - esenciales del gimnasio",
      imagePosition: "object-center",
    },
    {
      key: "reading",
      label: "en la estantería",
      title: "Lectura",
      body: "Elijo un libro y lo leo despacio; casi siempre ficción. El último que terminé fue Touch of Death de Alice Wilde.",
      span: "md:col-span-1 md:row-span-1",
      image: ASSETS.interests.reading,
      imageAlt: "Touch of Death de Alice Wilde - último libro leído",
      imagePosition: "object-center",
    },
    {
      key: "series",
      label: "noche tranquila",
      title: "Series y anime",
      body: "Animes, series o películas: veo de todo cuando me apetece y según el tiempo que tenga. Breaking Bad es la última serie que terminé.",
      span: "md:col-span-2 md:row-span-1",
      image: ASSETS.interests.series,
      imageAlt: "Anime y series - ocio",
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
    "Haz clic en cualquiera de las páginas para dejar tu lazo - o enfoca una página, usa las flechas y pulsa Intro. Uno por persona; puedes moverlo cuando quieras.",
  signedKicker:
    "Ese es tu lazo en la página - haz clic de nuevo, o usa las flechas e Intro, para moverlo.",
  emptyState: "Sé la primera persona en dejar un lazo - clic o teclado.",
  leftWatermark:
    "Para quienes pasaron de los proyectos y se quedaron en los detalles.",
  rightWatermark: "Un pequeño gracias. Tu lazo aquí significa que estuviste.",
  countLabel: "personas dejaron su lazo",
  countLabelSingular: "persona dejó su lazo",
  marginHint: "un lazo por persona, clic o flechas + Intro",
  marginHintSigned: "tu lazo, clic o flechas para moverlo",
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
      "En administración y contabilidad concilié cuentas bancarias, registré gastos y controlé costes. Por eso cuido la calidad del dato, la concurrencia y los reintentos cuando diseño un sistema. Trabajo con spec-driven development y desarrollo asistido por IA, y reviso yo el código antes de integrarlo. Herramientas: OpenAI API y GPT, Codex, Claude, Claude Code, GitHub Copilot, Gemini, Cursor, Grok, LangChain, AWS Bedrock, Vertex AI y Azure OpenAI; Llama, Qwen, DeepSeek y Kimi con Ollama; Orca para orquestar agentes de código; specs en Obsidian.",
    languagesTitle: "Idiomas",
    languagesKicker: "Español, inglés y darija; idiomas en los que me comunico habitualmente.",
    experience: "Experiencia",
    education: "Formación",
    projectsOverline: "Proyectos",
    projectsTitleBefore: "Proyectos que se pueden ",
    projectsTitleAccent: "probar.",
    projectsKicker:
      "Proyectos de datos, IA y software con demo, documentación o código para revisar. Debajo, otros trabajos.",
    pythonLane: "Proyectos principales",
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
          { id: "Sin nombre", name: "Error de archivo", result: "No hay columna de razón social" },
        ],
        footnote:
          "El match usa la caché BORME local. Sin columna de nombre el archivo no entra al motor.",
      },
    },
  },
  tracks: { tech: "tech", hybrid: "tech × negocio", biz: "negocio / ops" },
};

export default catalog;
