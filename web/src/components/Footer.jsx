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
      { id: "projects", label: ui.nav.projects },
      { id: "cv", label: ui.footer.cvSkills },
      { id: "linkedin", label: ui.footer.linkedinSection },
      { id: "contact", label: ui.nav.contact },
      { id: "bento", label: ui.nav.interests },
      { id: "guestbook", label: ui.nav.guestbook },
    ],
    [ui],
  );

  return (
    <footer data-testid="footer" className="relative footer-inverse py-10 md:py-12">
      <Reveal y={20}>
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 md:px-12">
          <motion.div {...COL_ENTER(reduce, 0)}>
            <div className="flex items-center gap-3 mb-4">
              <Bow size={22} color="#F5F1EB" />
              <span className="font-serif text-2xl tracking-tight">
                {PROFILE.name}
              </span>
            </div>
            <div className="max-w-xs space-y-3">
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
                </a>
                {ui.footer.listSep}{" "}
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {ui.footer.linkedin}
                </a>
                {ui.footer.orBeforeTip}{" "}
                <a
                  href={PROFILE.buyMeACoffee}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  data-testid="footer-tip"
                  aria-label={ui.footer.tipAria}
                >
                  {ui.footer.tip}
                </a>{" "}
                {ui.footer.tipSuffix}.
              </p>
            </div>
          </motion.div>

          <motion.div {...COL_ENTER(reduce, 0.06)}>
            <p className="font-mono text-xs uppercase tracking-[0.28em] footer-muted mb-4">
              {ui.footer.navigate}
            </p>
            <ul className="footer-nav font-mono text-sm">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={onHashLinkClick}
                    className="footer-nav-link"
                  >
                    <span className="footer-nav-bow" aria-hidden="true">
                      <Bow size={10} color="#F5F1EB" strokeWidth={1.6} />
                    </span>
                    <span className="lnk footer-nav-label">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...COL_ENTER(reduce, 0.1)}>
            <p className="font-mono text-xs uppercase tracking-[0.28em] footer-muted mb-4">
              {ui.footer.contact}
            </p>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <a href={`mailto:${PROFILE.email}`} className="footer-link">
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
          </motion.div>

          <motion.div {...COL_ENTER(reduce, 0.14)}>
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

        <div className="mx-auto mt-10 flex max-w-[1240px] flex-wrap items-center justify-between gap-3 border-t border-[#F5F1EB]/15 px-5 pt-5 md:px-12">
          <p className="font-mono text-xs footer-muted">
            © {year} {PROFILE.name} · Málaga, ES
          </p>
          <p className="flex items-center gap-2 font-mono text-xs footer-muted">
            {ui.footer.builtWithCare}
            <Bow size={12} color="#F5F1EB" />
          </p>
        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
