import { useState, useEffect } from "react";
import { motion, useReducedMotion, LayoutGroup } from "framer-motion";
import { Bow } from "./Bow";
import { PROFILE } from "@/data/portfolio";
import { MOTION_EASE, MOTION_DURATION, CTA_SPRING } from "@/lib/motion";
import { onHashLinkClick, scrollToTop } from "@/lib/scroll";
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
    ? {
        initial: false,
        animate: {
          opacity: 1,
          y: 0,
          borderBottomColor: scrolled
            ? "rgba(26, 26, 26, 0.12)"
            : "rgba(26, 26, 26, 0)",
        },
      }
    : {
        initial: { y: -12, opacity: 1, borderBottomColor: "rgba(26, 26, 26, 0)" },
        animate: {
          y: 0,
          opacity: 1,
          borderBottomColor: scrolled
            ? "rgba(26, 26, 26, 0.12)"
            : "rgba(26, 26, 26, 0)",
        },
        transition: { duration: MOTION_DURATION.normal, ease: MOTION_EASE },
      };

  const linkClass = (id) =>
    [
      "relative font-mono text-xs uppercase tracking-[0.18em] whitespace-nowrap transition-colors shrink-0 pb-1",
      active === id
        ? "text-burgundy"
        : "text-ink-soft hover:text-burgundy",
    ].join(" ");

  return (
    <motion.nav
      data-testid="main-nav"
      aria-label="Primary"
      {...navMotion}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,backdrop-filter] duration-500 ${
        scrolled ? "bg-bone/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-3">
        <a
          href="#main-content"
          data-testid="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
            history.pushState(
              null,
              "",
              window.location.pathname + window.location.search,
            );
          }}
          className="flex items-center gap-3 group shrink-0"
        >
          <span className="bow-hover-tilt inline-block" aria-hidden="true">
            <Bow size={20} />
          </span>
          <span className="font-serif text-lg tracking-tight text-ink group-hover:text-burgundy transition-colors">
            {PROFILE.name.split(" ")[0]}
            <span className="text-burgundy">.</span>
          </span>
        </a>

        <div className="flex items-center gap-2 md:gap-8 min-w-0">
          <div className="flex items-center gap-4 md:gap-8 overflow-x-auto max-w-[52vw] sm:max-w-none md:overflow-visible scrollbar-none py-1 -my-1">
            <LayoutGroup id="primary-nav">
              {LINKS.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  data-testid={`nav-link-${l.id}`}
                  onClick={onHashLinkClick}
                  className={linkClass(l.id)}
                  aria-current={active === l.id ? "location" : undefined}
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span
                      layoutId={reduce ? undefined : "nav-underline"}
                      className="absolute left-0 right-0 -bottom-0.5 h-px bg-burgundy"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                </a>
              ))}
            </LayoutGroup>
          </div>
          <motion.button
            type="button"
            data-testid="nav-terminal-toggle"
            onClick={onOpenTerminal}
            title="Open terminal guestbook (Ctrl or ⌘ + `)"
            aria-label="Open terminal guestbook. Shortcut: Control or Command + backtick"
            className="btn-tactile font-mono text-xs uppercase tracking-[0.18em] border border-ink/30 px-3 py-1.5 hover:border-burgundy hover:text-burgundy transition-colors shrink-0"
            whileHover={reduce ? undefined : { y: -1, scale: 1.02 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={CTA_SPRING}
          >
            Terminal
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
