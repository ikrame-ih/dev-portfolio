import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bow } from "./Bow";
import { PROFILE } from "@/data/portfolio";

const LINKS = [
  { id: "cv", label: "CV" },
  { id: "projects", label: "Projects" },
  { id: "garden", label: "Guest book" },
  { id: "blog", label: "Vault" },
  { id: "contact", label: "Contact" },
];

export const Nav = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      data-testid="main-nav"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-bone/85 backdrop-blur-md border-b border-bone-400" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <button
          type="button"
          data-testid="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
        >
          <Bow size={20} />
          <span className="font-serif text-lg tracking-tight text-ink group-hover:text-burgundy transition-colors">
            {PROFILE.name.split(" ")[0]}
            <span className="text-burgundy">.</span>
          </span>
        </button>

        <div className="flex items-center gap-3 md:gap-8">
          <div className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <button
                key={l.id}
                type="button"
                data-testid={`nav-link-${l.id}`}
                onClick={() => scrollTo(l.id)}
                className="lnk font-mono text-xs uppercase tracking-[0.18em] text-ink-soft hover:text-burgundy"
              >
                {l.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            data-testid="nav-terminal-toggle"
            onClick={onOpenTerminal}
            title="Open terminal guestbook"
            className="font-mono text-xs uppercase tracking-[0.18em] border border-ink/30 px-3 py-1.5 hover:border-burgundy hover:text-burgundy transition-colors"
          >
            Terminal
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
