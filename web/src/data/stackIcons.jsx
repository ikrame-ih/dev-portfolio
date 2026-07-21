import {
  Accessibility,
  Atom,
  Braces,
  Cloud,
  Code2,
  Container,
  Database,
  GitBranch,
  Globe,
  KeyRound,
  Layers,
  Map,
  Monitor,
  Server,
  Sparkles,
  TestTube2,
  Wind,
  Workflow,
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
  Accessibility: Accessibility,
  "Node.js": Server,
  Express: Server,
  Python: Code2,
  FastAPI: Server,
  "REST APIs": Layers,
  JWT: KeyRound,
  PostgreSQL: Database,
  SQL: Database,
  dbt: Database,
  Dagster: Layers,
  Git: GitBranch,
  "GitHub Actions": Workflow,
  Vitest: TestTube2,
  Playwright: TestTube2,
  Docker: Container,
  Vercel: Cloud,
};

export const StackIcon = ({
  name,
  className = "w-3 h-3 shrink-0 text-burgundy",
}) => {
  const Icon = STACK_ICON_MAP[name] || Monitor;
  return <Icon className={className} strokeWidth={1.25} aria-hidden="true" />;
};
