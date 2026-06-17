import { Atom, Braces, Code2, Database, Globe, LayoutGrid, Layers, Monitor, Server, Sparkles, TestTube2, Wind } from "lucide-react";

export const STACK_ICON_MAP = {
  React: Atom,
  "Next.js": Globe,
  TypeScript: Braces,
  "Tailwind CSS": Wind,
  "Framer Motion": Sparkles,
  "Semantic HTML": Code2,
  "CSS Grid / Flexbox": LayoutGrid,
  "Vitest / Playwright": TestTube2,
  Python: Code2,
  FastAPI: Server,
  PostgreSQL: Database,
  "REST APIs": Layers,
  SQL: Database,
  "Node.js": Server,
};

export const StackIcon = ({ name, className = "w-3 h-3 shrink-0 text-burgundy" }) => {
  const Icon = STACK_ICON_MAP[name] || Monitor;
  return <Icon className={className} strokeWidth={1.25} aria-hidden="true" />;
};
