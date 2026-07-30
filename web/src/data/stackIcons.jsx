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
  dbt: (p) => (
    <Svg {...p}>
      {/* dbt hexagon mark */}
      <path d="M12 1.8 3.6 6.6v10.8L12 22.2l8.4-4.8V6.6L12 1.8Zm0 2.2 6.4 3.65v7.5L12 18.8l-6.4-3.65v-7.5L12 4Zm0 3.4-3.2 5.5h6.4L12 7.4Zm0 2.5 1.35 2.35h-2.7L12 9.9Z" />
    </Svg>
  ),
  Dagster: (p) => (
    <Svg {...p}>
      <path d="M12 2.2 4.2 6.7v10.6L12 21.8l7.8-4.5V6.7L12 2.2Zm0 2.35 5.55 3.2v.1L12 11.05 6.45 7.85 12 4.55Zm-6.05 4.85 5.35 3.1v6.15l-5.35-3.1V9.4Zm6.75 9.25v-6.15l5.35-3.1v6.15l-5.35 3.1Z" />
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
  const Custom = CUSTOM[name];
  if (Custom) return <Custom className={className} />;
  const brand = FROM_SIMPLE[name];
  if (brand) return <BrandPath path={brand.path} className={className} />;
  return <Fallback className={className} />;
};
