import { Bow } from "./Bow";
import Reveal from "./Reveal";
import { PROFILE } from "@/data/portfolio";

export const Footer = ({ onOpenTerminal }) => {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="footer" className="relative footer-inverse py-16">
      <Reveal y={20}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <Bow size={22} color="#F5F1EB" />
            <span className="font-serif text-2xl tracking-tight">{PROFILE.name}</span>
          </div>
          <p className="font-mono text-xs footer-muted max-w-sm leading-relaxed">
            Designed and built by me — layout, words, and code.
          </p>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="lnk inline-block mt-4 font-mono text-xs uppercase tracking-[0.18em] text-[#F5F1EB]"
          >
            GitHub ↗
          </a>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] footer-muted mb-3">Navigate</p>
          <ul className="space-y-2 font-mono text-sm">
            {[
              ["cv", "CV & skills"],
              ["projects", "Projects"],
              ["garden", "Guest book"],
              ["blog", "Tizza's vault"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="lnk text-[#F5F1EB] hover:opacity-80">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] footer-muted mb-3">
            Terminal
          </p>
          <p className="font-mono text-sm leading-relaxed footer-muted">
            Open it from the nav to leave a short note, or jump straight to CV or contact.
          </p>
          <button
            type="button"
            data-testid="footer-terminal-open"
            onClick={onOpenTerminal}
            className="mt-4 inline-block font-mono text-xs uppercase tracking-[0.18em] border border-[#F5F1EB]/40 px-4 py-2 hover:bg-[#F5F1EB] hover:text-[#1A1A1A] transition-colors"
          >
            Open terminal →
          </button>
          <p className="mt-3 font-mono text-[10px] footer-muted opacity-70">
            or use the Terminal button above
          </p>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] footer-muted">
            <a href="/resume.json" className="lnk text-[#F5F1EB]/80 hover:text-[#F5F1EB]">
              resume.json
            </a>
            <span className="mx-2">·</span>
            schema.org
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-6 border-t border-[#F5F1EB]/15 flex flex-wrap items-center justify-between gap-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] footer-muted space-y-1">
          <p>
            © {year} {PROFILE.name} · Málaga, ES
          </p>
          <p>
            <a href={`mailto:${PROFILE.email}`} className="lnk hover:text-[#F5F1EB]">
              {PROFILE.email}
            </a>
            <span className="mx-2">·</span>
            {PROFILE.phone}
          </p>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] footer-muted">
          built with care
        </p>
      </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
