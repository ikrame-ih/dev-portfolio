import { useState, useEffect, useId } from "react";
import { motion, useReducedMotion, LayoutGroup, AnimatePresence } from "framer-motion";
import { Bow } from "./Bow";
import { PROFILE, BLOG } from "@/data/portfolio";
import { MOTION_EASE, MOTION_DURATION, CTA_SPRING } from "@/lib/motion";
import { onHashLinkClick, scrollToTop, navigateToHash } from "@/lib/scroll";
import { useActiveSection } from "@/lib/useActiveSection";

const ALL_LINKS = [
  { id: "cv", label: "CV" },
  { id: "projects", label: "Projects" },
  { id: "bento", label: "Interests" },
  { id: "blog", label: "Vault" },
  { id: "garden", label: "Guest book" },
  { id: "contact", label: "Contact" },
];

/** Hide Vault from primary nav while unpublished; footer still links to it. */
const DESKTOP_LINKS = ALL_LINKS;
const MOBILE_LINKS = BLOG.comingSoon
  ? ALL_LINKS.filter((l) => l.id !== "blog")
  : ALL_LINKS;

export const Nav = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();
  const reduce = useReducedMotion();
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const prevBody = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflow = prevHtml;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const showBarFill = scrolled || menuOpen;

  const navMotion = reduce
    ? {
        initial: false,
        animate: {
          opacity: 1,
          y: 0,
          borderBottomColor: showBarFill
            ? "rgba(26, 26, 26, 0.12)"
            : "rgba(26, 26, 26, 0)",
        },
      }
    : {
        initial: { y: -12, opacity: 1, borderBottomColor: "rgba(26, 26, 26, 0)" },
        animate: {
          y: 0,
          opacity: 1,
          borderBottomColor: showBarFill
            ? "rgba(26, 26, 26, 0.12)"
            : "rgba(26, 26, 26, 0)",
        },
        transition: { duration: MOTION_DURATION.normal, ease: MOTION_EASE },
      };

  const linkClass = (id) =>
    [
      "relative flex items-center font-mono text-xs uppercase tracking-[0.18em] whitespace-nowrap transition-colors shrink-0",
      active === id
        ? "text-burgundy"
        : "text-ink-soft hover:text-burgundy",
    ].join(" ");

  const closeAndNavigate = (e) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;
    e.preventDefault();

    const id = href.slice(1);

    // Unlock + scroll in the same tap turn. Deferred scrollTo is ignored on many
    // mobile browsers once the user-activation window closes.
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    setMenuOpen(false);

    const target =
      !id || id === "main-content" || id === "top" ? "" : id;
    // auto: smooth + drawer teardown fights on iOS/Android WebViews.
    navigateToHash(target, { behavior: "auto" });
  };

  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <motion.button
            key="nav-mobile-backdrop"
            type="button"
            data-testid="nav-mobile-backdrop"
            aria-label="Close menu"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: MOTION_DURATION.fast, ease: MOTION_EASE }}
            className="fixed inset-0 z-40 md:hidden bg-ink/25 backdrop-blur-[2px]"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.nav
        data-testid="main-nav"
        aria-label="Primary"
        {...navMotion}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,backdrop-filter] duration-500 ${
          menuOpen
            ? "bg-bone"
            : scrolled
              ? "bg-bone/95 md:bg-bone/85 md:backdrop-blur-md"
              : "bg-transparent"
        }`}
      >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-3">
        <a
          href="#main-content"
          data-testid="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            scrollToTop();
            history.pushState(
              null,
              "",
              window.location.pathname + window.location.search,
            );
          }}
          className="flex items-center gap-3 group shrink-0 min-h-11"
        >
          <span className="bow-hover-tilt inline-block" aria-hidden="true">
            <Bow size={20} />
          </span>
          <span className="font-serif text-lg tracking-tight text-ink group-hover:text-burgundy transition-colors">
            {PROFILE.name.split(" ")[0]}
            <span className="text-burgundy">.</span>
          </span>
        </a>

        {/* Desktop links + terminal */}
        <div className="hidden md:flex items-center gap-8 min-w-0">
          <LayoutGroup id="primary-nav">
            {DESKTOP_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                data-testid={`nav-link-${l.id}`}
                onClick={onHashLinkClick}
                className={`${linkClass(l.id)} min-h-11 pb-1`}
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
          <motion.button
            type="button"
            data-testid="nav-terminal-toggle"
            onClick={onOpenTerminal}
            title="Open terminal guestbook (Ctrl or ⌘ + `)"
            aria-label="Open terminal guestbook. Shortcut: Control or Command + backtick"
            className="btn-tactile min-h-11 font-mono text-xs uppercase tracking-[0.18em] border border-ink/30 px-3 py-1.5 hover:border-burgundy hover:text-burgundy transition-colors shrink-0"
            whileHover={reduce ? undefined : { y: -1, scale: 1.02 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={CTA_SPRING}
          >
            Terminal
          </motion.button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          data-testid="nav-menu-toggle"
          className="md:hidden btn-tactile min-h-11 min-w-11 inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.18em] text-ink hover:text-burgundy transition-colors"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id={menuId}
            data-testid="nav-mobile-panel"
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: MOTION_DURATION.fast, ease: MOTION_EASE }}
            className="md:hidden overflow-hidden border-t border-ink/10 bg-bone"
          >
            <ul className="max-w-7xl mx-auto px-6 py-3 flex flex-col">
              {MOBILE_LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    data-testid={`nav-mobile-link-${l.id}`}
                    onClick={closeAndNavigate}
                    className={`${linkClass(l.id)} min-h-11 w-full`}
                    aria-current={active === l.id ? "location" : undefined}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 mt-1 border-t border-ink/10">
                <button
                  type="button"
                  data-testid="nav-mobile-terminal"
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenTerminal();
                  }}
                  className="btn-tactile min-h-11 w-full flex items-center font-mono text-xs uppercase tracking-[0.18em] text-ink-soft hover:text-burgundy transition-colors"
                >
                  Terminal
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Nav;
