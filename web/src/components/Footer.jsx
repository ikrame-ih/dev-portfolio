import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Bow } from "./Bow";
import Reveal, { REVEAL_VIEWPORT, revealTransition } from "./Reveal";
import { onHashLinkClick } from "@/lib/scroll";
import { CTA_SPRING } from "@/lib/motion";
import { useContent, useUi } from "@/i18n/LocaleContext";

const COL_ENTER = (reduce, delay) =>
  reduce
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: REVEAL_VIEWPORT,
        transition: revealTransition(delay),
      };

export const Footer = ({ onOpenTerminal }) => {
  const year = new Date().getFullYear();
  const reduce = useReducedMotion();
  const { PROFILE } = useContent();
  const ui = useUi();

  const navLinks = useMemo(
    () => [
      { id: "cv", label: ui.footer.cvSkills, index: "01" },
      { id: "projects", label: ui.nav.projects, index: "02" },
      { id: "linkedin", label: ui.footer.linkedinSection, index: "03" },
      { id: "bento", label: ui.nav.interests, index: "04" },
      { id: "guestbook", label: ui.nav.guestbook, index: "05" },
      { id: "contact", label: ui.nav.contact, index: "06" },
    ],
    [ui],
  );

  return (
    <footer data-testid="footer" className="relative footer-inverse py-16">
      <Reveal y={20}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10">
          <motion.div className="md:col-span-5" {...COL_ENTER(reduce, 0)}>
            <div className="flex items-center gap-3 mb-4">
              <Bow size={22} color="#F5F1EB" />
              <span className="font-serif text-2xl tracking-tight">
                {PROFILE.name}
              </span>
            </div>
            <div className="max-w-sm space-y-3">
              <p className="font-mono text-xs footer-muted leading-relaxed">
                {ui.footer.designed}
              </p>
              <p className="font-mono text-xs footer-muted leading-relaxed">
                {ui.footer.seePrefix}{" "}
                <a
                  href={PROFILE.portfolioRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {ui.footer.source}
                </a>{" "}
                {ui.footer.or}{" "}
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {ui.footer.linkedin}
                </a>
                .
              </p>
            </div>
          </motion.div>

          <motion.div className="md:col-span-3" {...COL_ENTER(reduce, 0.08)}>
            <p className="font-mono text-xs uppercase tracking-[0.28em] footer-muted mb-4">
              {ui.footer.navigate}
            </p>
            <ul className="footer-nav font-mono text-sm">
              {navLinks.map(({ id, label, index }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={onHashLinkClick}
                    className="footer-nav-link"
                  >
                    <span className="footer-nav-bow" aria-hidden="true">
                      <Bow size={10} color="#F5F1EB" strokeWidth={1.6} />
                    </span>
                    <span className="footer-nav-index">{index}</span>
                    <span className="lnk footer-nav-label">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="md:col-span-4" {...COL_ENTER(reduce, 0.14)}>
            <p className="font-mono text-xs uppercase tracking-[0.28em] footer-muted mb-3">
              {ui.footer.terminal}
            </p>
            <p className="font-mono text-sm leading-relaxed footer-muted">
              {ui.footer.terminalBlurb}
            </p>
            <motion.button
              type="button"
              data-testid="footer-terminal-open"
              onClick={onOpenTerminal}
              className="btn-tactile mt-4 inline-flex items-center min-h-11 font-mono text-xs uppercase tracking-[0.18em] border border-[#F5F1EB]/40 px-4 py-2 hover:bg-[#F5F1EB] hover:text-[#1A1A1A] transition-colors"
              whileHover={reduce ? undefined : { y: -2, scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={CTA_SPRING}
            >
              {ui.footer.openTerminal}
            </motion.button>
            <p className="mt-3 font-mono text-xs footer-muted">
              {ui.footer.pressKey} <kbd className="footer-muted">T</kbd>
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-6 border-t border-[#F5F1EB]/15 flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] footer-muted mb-3">
              {ui.footer.contact}
            </p>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="footer-link"
                >
                  {PROFILE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
                  className="footer-link"
                >
                  {PROFILE.phone}
                </a>
              </li>
            </ul>
          </div>
          <div className="font-mono text-xs footer-muted space-y-2 text-left sm:text-right">
            <p>
              © {year} {PROFILE.name} · Málaga, ES
            </p>
            <p className="flex items-center gap-2 sm:justify-end">
              {ui.footer.builtWithCare}
              <Bow size={12} color="#F5F1EB" />
            </p>
          </div>
        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
