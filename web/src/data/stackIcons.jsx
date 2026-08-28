// Brand marks via Simple Icons (official monochrome paths) + a few custom glyphs
// for tools that aren't in the set. currentColor keeps burgundy/ink theming.

import {
  siReact,
  siNextdotjs,
  siTypescript,
  siVite,
  siTailwindcss,
  siFramer,
  siLeaflet,
  siNodedotjs,
  siExpress,
  siPython,
  siFastapi,
  siPostgresql,
  siGit,
  siGithubactions,
  siVitest,
  siDocker,
  siVercel,
  siJsonwebtokens,
  siHtml5,
  siElectron,
  siRedis,
  siNumpy,
  siPandas,
  siTensorflow,
  siKeras,
  siPytorch,
  siApachespark,
  siApacheflink,
  siApachekafka,
  siKubernetes,
  siObsidian,
} from "simple-icons";

const Svg = ({ children, className, viewBox = "0 0 24 24", style }) => (
  <svg
    viewBox={viewBox}
    className={className}
    style={style}
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

const BrandPath = ({ path, className }) => (
  <Svg className={className} style={{ overflow: "visible" }}>
    {/* Inset slightly so edge-hugging marks (Vitest, etc.) don't clip */}
    <g transform="translate(1.4 1.4) scale(0.883)">
      <path d={path} />
    </g>
  </Svg>
);

// Clean custom marks only when Simple Icons has no entry.
const CUSTOM = {
  Zustand: (p) => (
    <Svg {...p}>
      {/* Simplified bear face — readable at 28px */}
      <path d="M7.2 5.4c-1.7 0-3 1.35-3 3.05 0 .85.35 1.6.9 2.15C4.4 11.4 4 12.55 4 13.8c0 3.1 2.9 5.5 8 5.5s8-2.4 8-5.5c0-1.25-.4-2.4-1.1-3.2.55-.55.9-1.3.9-2.15 0-1.7-1.3-3.05-3-3.05-1.05 0-1.95.5-2.5 1.25-.7-.2-1.45-.3-2.3-.3s-1.6.1-2.3.3c-.55-.75-1.45-1.25-2.5-1.25Zm0 1.6c.75 0 1.35.55 1.35 1.25S7.95 9.5 7.2 9.5s-1.35-.55-1.35-1.25S6.45 7 7.2 7Zm9.6 0c.75 0 1.35.55 1.35 1.25S17.55 9.5 16.8 9.5 15.45 8.95 15.45 8.25 16.05 7 16.8 7ZM9.1 12.2c.55 0 1 .55 1 1.2s-.45 1.2-1 1.2-1-.55-1-1.2.45-1.2 1-1.2Zm5.8 0c.55 0 1 .55 1 1.2s-.45 1.2-1 1.2-1-.55-1-1.2.45-1.2 1-1.2Zm-5.15 3.35h4.5c0 1.05-1 1.9-2.25 1.9s-2.25-.85-2.25-1.9Z" />
    </Svg>
  ),
  Accessibility: (p) => (
    <Svg {...p}>
      <circle cx="12" cy="4.5" r="2" />
      <path d="M12 8.2c-3.6 0-6.5 1.05-6.5 1.05l.7 1.85S8.4 10.4 12 10.4s5.8.7 5.8.7l.7-1.85S15.6 8.2 12 8.2Zm-2.15 3.5v8.1h1.85v-5.2h.6v5.2h1.85v-8.1h-4.3Z" />
    </Svg>
  ),
  Accesibilidad: (p) => (
    <Svg {...p}>
      <circle cx="12" cy="4.5" r="2" />
      <path d="M12 8.2c-3.6 0-6.5 1.05-6.5 1.05l.7 1.85S8.4 10.4 12 10.4s5.8.7 5.8.7l.7-1.85S15.6 8.2 12 8.2Zm-2.15 3.5v8.1h1.85v-5.2h.6v5.2h1.85v-8.1h-4.3Z" />
    </Svg>
  ),
  "REST APIs": (p) => (
    <Svg {...p}>
      {/* Linked nodes — reads as API/network at a glance */}
      <circle cx="6" cy="12" r="2.4" />
      <circle cx="18" cy="6.5" r="2.4" />
      <circle cx="18" cy="17.5" r="2.4" />
      <path
        d="M8.2 11.2 15.6 7.4M8.2 12.8 15.6 16.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  ),
  SQL: (p) => (
    <Svg {...p}>
      <ellipse
        cx="12"
        cy="6.2"
        rx="7"
        ry="2.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5 6.2v8.2c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8V6.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5 10.4c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </Svg>
  ),
  Playwright: (p) => (
    <Svg {...p}>
      {/* Playwright masks — geometric, not the busy official glyph */}
      <path d="M3.8 7.2 12 3.5l8.2 3.7v7.2c0 3.55-3.35 6.55-8.2 7.85-4.85-1.3-8.2-4.3-8.2-7.85V7.2Zm1.9 1.35v5.85c0 2.35 2.15 4.45 6.3 5.45 4.15-1 6.3-3.1 6.3-5.45V8.55L12 6.1 5.7 8.55Zm2.7 2.15 1.35-.5 2.85 4.45 2.95-1.75.95 1.25-4.15 2.5-3.95-5.95Z" />
    </Svg>
  ),
  // Simple Icons has no plain Java mark in this set — cup glyph reads clearly at small sizes.
  Java: (p) => (
    <Svg {...p}>
      <path d="M12.4 2.4c-.9 1.55.15 2.55 1.1 3.45.95.9 1.7 1.85 1.7 3.2 0 2.45-2.05 3.55-2.05 3.55s2.95-1.55 2.95-4.05c0-1.75-.95-2.85-1.95-3.8-.85-.8-1.35-1.55-1.75-2.35Z" />
      <path d="M10.2 9.1c-.55 1.1.2 1.9.85 2.5.7.65 1.2 1.3 1.2 2.25 0 1.55-1.35 2.35-1.35 2.35s2.05-1 2.05-2.7c0-1.25-.7-2-1.4-2.65-.55-.5-.95-1.05-1.35-1.75Z" />
      <path
        d="M6.2 17.2c1.1.55 2.45.95 4.05 1.1v1.55c-2.35-.2-4.2-.8-5.55-1.65.45-.4.95-.7 1.5-1Zm11.6 0c.55.3 1.05.6 1.5 1-1.35.85-3.2 1.45-5.55 1.65v-1.55c1.6-.15 2.95-.55 4.05-1.1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M7.4 15.35c1.55.7 3.35 1.1 5.35 1.1s3.8-.4 5.35-1.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </Svg>
  ),
  // No SageMaker mark in Simple Icons — cube + node reads as managed ML.
  SageMaker: (p) => (
    <Svg {...p}>
      <path
        d="M5 8.2 12 4.5l7 3.7v7.6L12 19.5l-7-3.7V8.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path
        d="M12 4.5v7.2M5 8.2l7 3.5 7-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11.7" r="1.35" />
    </Svg>
  ),
  // Concepts below have no Simple Icons mark — geometric metaphors at stamp size.
  LLMs: (p) => (
    <Svg {...p}>
      <rect
        x="3.8"
        y="6.2"
        width="16.4"
        height="11.6"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
      />
      <circle cx="8.2" cy="12" r="1.25" />
      <circle cx="12" cy="9.4" r="1.25" />
      <circle cx="12" cy="14.6" r="1.25" />
      <circle cx="15.8" cy="12" r="1.25" />
      <path
        d="M9.35 11.2 10.85 10.05M9.35 12.8 10.85 13.95M13.15 10.05 14.65 11.2M13.15 13.95 14.65 12.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </Svg>
  ),
  "Prompt engineering": (p) => (
    <Svg {...p}>
      <rect
        x="3.6"
        y="5.2"
        width="16.8"
        height="13.6"
        rx="1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
      />
      <path
        d="M7.1 10.4 9.2 12 7.1 13.6M11.4 13.6h5.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  "Structured outputs": (p) => (
    <Svg {...p}>
      <path
        d="M8.4 5.2c-2.15 0-2.9 1.35-2.9 2.7 0 1.05-.85 1.4-.85 1.4s.85.35.85 1.4c0 1.35.75 2.7 2.9 2.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
      <path
        d="M15.6 5.2c2.15 0 2.9 1.35 2.9 2.7 0 1.05.85 1.4.85 1.4s-.85.35-.85 1.4c0 1.35-.75 2.7-2.9 2.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
      <path
        d="M9.4 9.1h5.2M9.4 12.5h3.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
    </Svg>
  ),
  Embeddings: (p) => (
    <Svg {...p}>
      <path
        d="M4.4 19.2h15.4M4.4 19.2V4.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
      <path
        d="M4.4 19.2 10.2 13.6M4.4 19.2 15.6 9.4M4.4 19.2 17.4 15.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <circle cx="10.2" cy="13.6" r="1.35" />
      <circle cx="15.6" cy="9.4" r="1.35" />
      <circle cx="17.4" cy="15.2" r="1.35" />
    </Svg>
  ),
  "Hybrid retrieval": (p) => (
    <Svg {...p}>
      <circle
        cx="9.1"
        cy="12"
        r="5.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
      />
      <circle
        cx="14.9"
        cy="12"
        r="5.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
      />
      <circle cx="12" cy="12" r="1.15" />
    </Svg>
  ),
  RRF: (p) => (
    <Svg {...p}>
      <circle cx="5.4" cy="6.8" r="1.2" />
      <circle cx="5.4" cy="12" r="1.2" />
      <circle cx="5.4" cy="17.2" r="1.2" />
      <circle cx="18.6" cy="6.8" r="1.2" />
      <circle cx="18.6" cy="12" r="1.2" />
      <circle cx="18.6" cy="17.2" r="1.2" />
      <circle cx="12" cy="9.4" r="1.45" />
      <circle cx="12" cy="14.6" r="1.45" />
      <path
        d="M6.7 7.4 10.6 9M6.7 12 10.6 14.2M17.3 7.4 13.4 9M17.3 12 13.4 14.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </Svg>
  ),
  Guardrails: (p) => (
    <Svg {...p}>
      <path
        d="M5.2 5.2v13.6M18.8 5.2v13.6M5.2 8.4h13.6M5.2 15.6h13.6M8.4 8.4v7.2M12 8.4v7.2M15.6 8.4v7.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
    </Svg>
  ),
  LangGraph: (p) => (
    <Svg {...p}>
      <circle
        cx="6.2"
        cy="12"
        r="2.15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
      />
      <circle
        cx="12"
        cy="6.2"
        r="2.15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
      />
      <circle
        cx="12"
        cy="17.8"
        r="2.15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
      />
      <circle
        cx="17.8"
        cy="12"
        r="2.15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
      />
      <path
        d="M8.3 11.2 10 7.9M8.3 12.8 10 16.1M13.9 7.9 15.7 10.8M13.9 16.1 15.7 13.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </Svg>
  ),
  "Context engineering": (p) => (
    <Svg {...p}>
      <path
        d="M4.6 7.2h14.8M4.6 12h11M4.6 16.8h13.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
      <rect
        x="7.4"
        y="5"
        width="8.4"
        height="14"
        rx="1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
      />
    </Svg>
  ),
  "LLM routing": (p) => (
    <Svg {...p}>
      <circle
        cx="5.8"
        cy="12"
        r="2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
      />
      <circle
        cx="18.2"
        cy="5.8"
        r="1.85"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
      />
      <circle
        cx="18.2"
        cy="12"
        r="1.85"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
      />
      <circle
        cx="18.2"
        cy="18.2"
        r="1.85"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
      />
      <path
        d="M8.1 12h3.1M11.2 12 16.3 6.4M11.2 12h5.1M11.2 12 16.3 17.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  "Agent skills": (p) => (
    <Svg {...p}>
      <rect
        x="5.2"
        y="4.4"
        width="13.6"
        height="15.2"
        rx="1.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
      />
      <path
        d="M8.2 11h7.6M8.2 14.2h7.6M8.2 17.2h4.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
      <path d="M12 6.1 12.55 7.45 14.05 7.7 12.9 8.7 13.2 10.2 12 9.45 10.8 10.2 11.1 8.7 9.95 7.7 11.45 7.45Z" />
    </Svg>
  ),
  "Git worktrees": (p) => (
    <Svg {...p}>
      <circle
        cx="12"
        cy="4.8"
        r="1.85"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
      />
      <path
        d="M12 6.7v3M6.6 9.7h10.8M6.6 9.7v2.2M17.4 9.7v2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
      <rect
        x="3.4"
        y="12.6"
        width="6.4"
        height="7.2"
        rx="1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
      />
      <path
        d="M3.4 14.6h6.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
      />
      <rect
        x="14.2"
        y="12.6"
        width="6.4"
        height="7.2"
        rx="1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
      />
      <path
        d="M14.2 14.6h6.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
      />
    </Svg>
  ),
  // Data Access DataFlex has no Simple Icons entry — offset plates read as
  // sliding data records (the "flex") at stamp size.
  DataFlex: (p) => (
    <Svg {...p}>
      <path
        d="M4.4 7.6 8.1 4.6h11.5L15.9 7.6H4.4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path
        d="M4.4 12.2 8.1 9.2h11.5L15.9 12.2H4.4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path
        d="M4.4 16.8 8.1 13.8h11.5L15.9 16.8H4.4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  // Simple Icons dropped Power Fx in later sets — keep the official chevron stack.
  "Power Fx": ({ className }) => (
    <BrandPath
      path="M7.579 23.47H1.092A1.099 1.099 0 0 1 0 22.377c0-.198.054-.392.155-.561l2.575-4.291a4.377 4.377 0 0 0 0-4.497l-1.544-2.572a6.556 6.556 0 0 1-.934-3.372C.252 3.489 3.21.53 6.805.53h11.84c.849 0 1.374.926.937 1.654l-2.639 4.4h-.301a.498.498 0 0 0-.429.242l-.391.651-.072-.12a1.59 1.59 0 0 0-1.365-.773H8.74c-1.239 0-2.004 1.35-1.367 2.411l2.575 4.291a3.87 3.87 0 0 1 0 3.981l-2.575 4.292a1.592 1.592 0 0 0 .206 1.911Zm7.742-.53c-.197.329-.553.53-.936.53H8.739a1.097 1.097 0 0 1-1.092-1.092c0-.198.054-.393.156-.562l2.574-4.292a4.375 4.375 0 0 0 0-4.496l-2.574-4.29a1.092 1.092 0 0 1 .936-1.654h5.646c.383 0 .739.201.936.53l2.574 4.29a6.562 6.562 0 0 1 0 6.745l-2.574 4.291Zm.793-.349 2.21-3.685a7.06 7.06 0 0 0 0-7.259l-2.21-3.684.528-.879h6.264c.849 0 1.374.926.937 1.654l-2.576 4.29-.018.032-.039.066-.018.033-.024.045-.012.021-.017.033-.01.018a4.381 4.381 0 0 0-.407 2.819l.003.016c.012.063.026.127.041.189l.007.026.009.036.007.029.023.084.009.029.004.015c.019.063.039.126.061.189l.027.076.013.035c.078.206.172.408.282.603l.024.042.035.06 2.576 4.292c.102.169.155.364.155.562 0 .599-.493 1.092-1.092 1.092H17.26c-.384 0-.739-.201-.937-.53l-.209-.349Z"
      className={className}
    />
  ),
};

const FROM_SIMPLE = {
  React: siReact,
  "Next.js": siNextdotjs,
  TypeScript: siTypescript,
  Vite: siVite,
  "Tailwind CSS": siTailwindcss,
  "Framer Motion": siFramer,
  Leaflet: siLeaflet,
  "Node.js": siNodedotjs,
  Express: siExpress,
  Python: siPython,
  FastAPI: siFastapi,
  PostgreSQL: siPostgresql,
  Git: siGit,
  "GitHub Actions": siGithubactions,
  Vitest: siVitest,
  Docker: siDocker,
  Vercel: siVercel,
  JWT: siJsonwebtokens,
  "Semantic HTML": siHtml5,
  "HTML semántico": siHtml5,
  Electron: siElectron,
  Redis: siRedis,
  NumPy: siNumpy,
  Pandas: siPandas,
  TensorFlow: siTensorflow,
  Keras: siKeras,
  PyTorch: siPytorch,
  Spark: siApachespark,
  Flink: siApacheflink,
  Kafka: siApachekafka,
  Kubernetes: siKubernetes,
  Obsidian: siObsidian,
};

const ALIASES = {
  "Recuperación híbrida": "Hybrid retrieval",
};

const Fallback = (p) => (
  <Svg {...p}>
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.4" />
  </Svg>
);

export const StackIcon = ({
  name,
  className = "w-4 h-4 shrink-0 text-burgundy",
}) => {
  const key = ALIASES[name] ?? name;
  const Custom = CUSTOM[key];
  if (Custom) return <Custom className={className} />;
  const brand = FROM_SIMPLE[key];
  if (brand) return <BrandPath path={brand.path} className={className} />;
  return <Fallback className={className} />;
};
