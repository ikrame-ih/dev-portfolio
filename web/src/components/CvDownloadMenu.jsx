import { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ASSETS } from "@/data/assets";
import { CTA_SPRING } from "@/lib/motion";
import { useUi } from "@/i18n/LocaleContext";

const CvDownloadMenu = ({ reduce }) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const menuId = useId();
  const ui = useUi();

  const downloads = [
    {
      id: "en",
      label: ui.hero.english,
      href: ASSETS.cvPdf,
      testId: "hero-cta-cv-en",
    },
    {
      id: "es",
      label: ui.hero.spanish,
      href: ASSETS.cvPdfEs,
      testId: "hero-cta-cv-es",
    },
  ];

  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      
      if (["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const items = Array.from(rootRef.current?.querySelectorAll('[role="menuitem"]') || []);
        if (!items.length) return;
        
        const index = items.indexOf(document.activeElement);
        let nextIndex = 0;
        
        if (e.key === "ArrowDown") {
          nextIndex = index < items.length - 1 ? index + 1 : 0;
        } else if (e.key === "ArrowUp") {
          nextIndex = index > 0 ? index - 1 : items.length - 1;
        } else if (e.key === "Home") {
          nextIndex = 0;
        } else if (e.key === "End") {
          nextIndex = items.length - 1;
        }
        
        items[nextIndex]?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <motion.div
      ref={rootRef}
      data-testid="hero-cta-cv"
      className="relative"
      whileHover={reduce || open ? undefined : { y: -2, scale: 1.02 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={CTA_SPRING}
    >
      <button
        type="button"
        data-testid="hero-cta-cv-toggle"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className={`btn-tactile min-h-11 inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.18em] border px-6 py-3 transition-colors ${
          open
            ? "border-burgundy bg-burgundy text-[#F5F1EB]"
            : "border-ink hover:bg-burgundy hover:text-[#F5F1EB] hover:border-burgundy"
        }`}
      >
        {ui.hero.downloadCv}
        <svg
          aria-hidden="true"
          viewBox="0 0 12 12"
          className={`h-2.5 w-2.5 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M2.5 4.5 L6 8 L9.5 4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <div
          id={menuId}
          role="menu"
          aria-label={ui.hero.cvLang}
          className="absolute left-0 top-full z-20 mt-2 min-w-full border border-ink/20 bg-bone shadow-[0_8px_24px_rgba(26,26,26,0.08)]"
        >
          {downloads.map((item) => (
            <a
              key={item.id}
              role="menuitem"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={item.testId}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-ink hover:bg-burgundy hover:text-[#F5F1EB] transition-colors"
            >
              {item.label}
              <span className="sr-only">{ui.hero.pdfNewTab}</span>
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default CvDownloadMenu;
