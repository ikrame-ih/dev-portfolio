import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Bow } from "./Bow";
import { PROFILE } from "@/data/portfolio";
import { MOTION_EASE, MOTION_DURATION } from "@/lib/motion";
import { scrollToElement, scrollToTop } from "@/lib/scroll";
import { useActiveSection } from "@/lib/useActiveSection";

const LINKS = [
  { id: "cv", label: "CV" },
  { id: "projects", label: "Projects" },
  { id: "bento", label: "Interests" },
  { id: "blog", label: "Vault" },
  { id: "garden", label: "Guest book" },
  { id: "contact", label: "Contact" },
];

export const Nav = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navMotion = reduce
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : {
        initial: { y: -12, opacity: 1 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: MOTION_DURATION.normal, ease: MOTION_EASE },
      };

  const linkClass = (id) =>
    [
      "lnk font-mono text-xs uppercase tracking-[0.18em] whitespace-nowrap transition-colors shrink-0",
      active === id
        ? "text-burgundy nav-link-active"
        : "text-ink-soft hover:text-burgundy",
    ].join(" ");

  return (
    <motion.nav
      data-testid="main-nav"
      {...navMotion}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bone/85 backdrop-blur-md border-b border-bone-400"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-3">
        <button
          type="button"
          data-testid="nav-logo"
          onClick={scrollToTop}
          className="flex items-center gap-3 group shrink-0"
        >
          <span className="bow-hover-tilt inline-block">
            <Bow size={20} />
          </span>
          <span className="font-serif text-lg tracking-tight text-ink group-hover:text-burgundy transition-colors">
            {PROFILE.name.split(" ")[0]}
            <span className="text-burgundy">.</span>
          </span>
        </button>

        <div className="flex items-center gap-2 md:gap-8 min-w-0">
          <div className="flex items-center gap-4 md:gap-8 overflow-x-auto max-w-[52vw] sm:max-w-none md:overflow-visible scrollbar-none py-1 -my-1">
            {LINKS.map((l) => (
              <button
                key={l.id}
                type="button"
                data-testid={`nav-link-${l.id}`}
                onClick={() => scrollToElement(l.id)}
                className={linkClass(l.id)}
                aria-current={active === l.id ? "true" : undefined}
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
            className="btn-tactile font-mono text-xs uppercase tracking-[0.18em] border border-ink/30 px-3 py-1.5 hover:border-burgundy hover:text-burgundy transition-colors shrink-0"
          >
            Terminal
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
