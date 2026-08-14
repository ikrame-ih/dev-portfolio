import { useState, useEffect, useId, useMemo, useRef } from "react";
import { m, useReducedMotion, AnimatePresence } from "framer-motion";
import { Bow } from "./Bow";
import { MOTION_EASE, MOTION_DURATION, CTA_SPRING } from "@/lib/motion";
import { onHashLinkClick, scrollToTop, navigateToHash } from "@/lib/scroll";
import { useActiveSection } from "@/lib/useActiveSection";
import { useContent, useLocale, useUi } from "@/i18n/LocaleContext";
import { useFocusTrap } from "@/lib/useFocusTrap";

export const Nav = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { active, lock } = useActiveSection();
  const reduce = useReducedMotion();
  const menuId = useId();
  const { PROFILE } = useContent();
  const { lang, setLang } = useLocale();
  const ui = useUi();
  const containerRef = useRef(null);

  useFocusTrap(menuOpen, containerRef, () => setMenuOpen(false));

  const allLinks = useMemo(
    () => [
      { id: "cv", label: ui.nav.cv },
      { id: "projects", label: ui.nav.projects },
      { id: "linkedin", label: ui.nav.linkedin },
      { id: "bento", label: ui.nav.interests },
      { id: "guestbook", label: ui.nav.guestbook },
      { id: "contact", label: ui.nav.contact },
    ],
    [ui],
  );

  const desktopLinks = allLinks;
  const mobileLinks = allLinks;

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const prevBody = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    // Lock scrolling on both body and html to prevent mobile browsers from 
    // scrolling the underlying page when interacting with the open menu.
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

    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    setMenuOpen(false);

    const target =
      !id || id === "main-content" || id === "top" ? "" : id;
    if (target) lock(target);
    navigateToHash(target, { behavior: "auto" });
  };

  const onDesktopNavClick = (e) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;
    const id = href.slice(1);
    if (id) lock(id);
    onHashLinkClick(e);
  };

  const LangToggle = ({ className = "" }) => (
    <div
      className={`inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.18em] ${className}`}
      role="group"
      aria-label={ui.nav.lang}
    >
      <button
        type="button"
        data-testid="nav-lang-en"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`btn-tactile min-h-11 px-1.5 transition-colors ${
          lang === "en" ? "text-burgundy" : "text-ink-mute hover:text-burgundy"
        }`}
      >
        {ui.nav.langEn}
      </button>
      <span className="text-ink-mute/50" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        data-testid="nav-lang-es"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={`btn-tactile min-h-11 px-1.5 transition-colors ${
          lang === "es" ? "text-burgundy" : "text-ink-mute hover:text-burgundy"
        }`}
      >
        {ui.nav.langEs}
      </button>
    </div>
  );

  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <m.button
            key="nav-mobile-backdrop"
            type="button"
            data-testid="nav-mobile-backdrop"
            aria-label={ui.nav.closeMenu}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: MOTION_DURATION.fast, ease: MOTION_EASE }}
            className="fixed inset-0 z-40 md:hidden bg-ink/25 backdrop-blur-[2px]"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <m.nav
        ref={containerRef}
        data-testid="main-nav"
        aria-label={ui.nav.primary}
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
            lock(null);
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

        <div className="hidden md:flex items-center gap-6 lg:gap-8 min-w-0">
          {desktopLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              data-testid={`nav-link-${l.id}`}
              onClick={onDesktopNavClick}
              className={`${linkClass(l.id)} min-h-11 pb-1`}
              aria-current={active === l.id ? "location" : undefined}
            >
              {l.label}
              <span
                aria-hidden="true"
                className={`absolute left-0 right-0 -bottom-0.5 h-px origin-left bg-burgundy transition-transform duration-300 ease-out ${
                  active === l.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
          <LangToggle />
          <m.button
            type="button"
            data-testid="nav-terminal-toggle"
            onClick={onOpenTerminal}
            title={`${ui.nav.terminal} (T)`}
            aria-label={ui.nav.openTerminal}
            className="btn-tactile min-h-11 font-mono text-xs uppercase tracking-[0.18em] border border-ink/30 px-3 py-1.5 hover:border-burgundy hover:text-burgundy transition-colors shrink-0"
            whileHover={reduce ? undefined : { y: -1, scale: 1.02 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={CTA_SPRING}
          >
            {ui.nav.terminal}
          </m.button>
        </div>

        <button
          type="button"
          data-testid="nav-menu-toggle"
          className="md:hidden btn-tactile min-h-11 min-w-11 inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.18em] text-ink hover:text-burgundy transition-colors"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? ui.nav.close : ui.nav.menu}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <m.div
            id={menuId}
            data-testid="nav-mobile-panel"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: MOTION_DURATION.fast, ease: MOTION_EASE }}
            className="md:hidden overflow-hidden border-t border-ink/10 bg-bone"
          >
            <ul className="max-w-7xl mx-auto px-6 py-3 flex flex-col">
              {mobileLinks.map((l) => (
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
              <li className="pt-2 mt-1 border-t border-ink/10 flex items-center justify-between gap-3">
                <LangToggle />
                <button
                  type="button"
                  data-testid="nav-mobile-terminal"
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenTerminal();
                  }}
                  className="btn-tactile min-h-11 flex items-center font-mono text-xs uppercase tracking-[0.18em] text-ink-soft hover:text-burgundy transition-colors"
                >
                  {ui.nav.terminal}
                </button>
              </li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
      </m.nav>
    </>
  );
};

export default Nav;
