import {
  Atom,
  Braces,
  Code2,
  Database,
  Globe,
  LayoutGrid,
  Layers,
  Map,
  Server,
  Sparkles,
  TestTube2,
  Wind,
  Zap,
} from "lucide-react";

export const STACK_ICON_MAP = {
  React: Atom,
  "Next.js": Globe,
  TypeScript: Braces,
  Vite: Zap,
  "Tailwind CSS": Wind,
  "Framer Motion": Sparkles,
  Zustand: Layers,
  Leaflet: Map,
  "Semantic HTML": Code2,
  "CSS Grid / Flexbox": LayoutGrid,
  "Vitest / Playwright": TestTube2,
  Python: Code2,
  FastAPI: Server,
  PostgreSQL: Database,
  "REST APIs": Layers,
  SQL: Database,
  "Node.js": Server,
  Java: Code2,
  dbt: Database,
  Dagster: Layers,
};

export const StackIcon = ({
  name,
  className = "w-3 h-3 shrink-0 text-burgundy",
}) => {
  const Icon = STACK_ICON_MAP[name] || Monitor;
  return <Icon className={className} strokeWidth={1.25} aria-hidden="true" />;
};
