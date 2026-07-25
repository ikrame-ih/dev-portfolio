import { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Bow } from "./Bow";
import TextAnimate from "./ui/TextAnimate";
import { PROFILE } from "@/data/portfolio";
import { ASSETS } from "@/data/assets";
import { MOTION_EASE, heroEnter, CTA_SPRING } from "@/lib/motion";
import { onHashLinkClick } from "@/lib/scroll";
import StackMarquee from "./StackMarquee";

// After the headline word cascade finishes (~1.3s), ease the rest in quickly.
const STEP_DELAY = {
  overline: 0,
  subtext: 1.35,
  tagline: 1.55,
  ctas: 1.75,
  photo: 1.4,
};

const HEADLINE_LINE_DELAY = [0.06, 0.38, 0.7];
const HEADLINE_WORD_STAGGER = 0.07;

const heroStep = (key, reduce, opts) =>
  heroEnter(reduce, STEP_DELAY[key], {
    duration: 0.45,
    ...opts,
  });

const factsContainer = (reduce) =>
  reduce
    ? undefined
    : {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: STEP_DELAY.tagline,
          },
        },
      };

const factItem = (reduce) =>
  reduce
    ? undefined
    : {
        hidden: { opacity: 0, y: 8 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: MOTION_EASE },
        },
      };

const CV_DOWNLOADS = [
  {
    id: "en",
    label: "English",
    href: ASSETS.cvPdf,
    testId: "hero-cta-cv-en",
  },
  {
    id: "es",
    label: "Español",
    href: ASSETS.cvPdfEs,
    testId: "hero-cta-cv-es",
  },
];

const CvDownloadMenu = ({ reduce }) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
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
        Download CV
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
          aria-label="Download CV language"
          className="absolute left-0 top-full z-20 mt-2 min-w-full border border-ink/20 bg-bone shadow-[0_8px_24px_rgba(26,26,26,0.08)]"
        >
          {CV_DOWNLOADS.map((item) => (
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
              <span className="sr-only"> PDF, opens in a new tab</span>
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export const Hero = () => {
  const reduce = useReducedMotion();
  const [parallaxOn, setParallaxOn] = useState(false);
  const { scrollY } = useScroll();
  const photoParallax = useTransform(
    scrollY,
    [0, 420],
    [0, reduce || !parallaxOn ? 0 : 18],
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setParallaxOn(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <section
      data-testid="hero-section"
      className="relative pt-24 md:pt-28"
    >
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 pb-8 md:pb-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start md:items-center">
          <div className="col-span-12 md:col-span-7">
            <motion.div
              {...heroStep("overline", reduce)}
              className="flex items-center gap-3 mb-6"
            >
              <span className="hairline w-16" />
              <span
                data-testid="hero-overline"
                className="font-mono text-xs md:text-sm uppercase tracking-[0.22em] text-ink leading-relaxed"
              >
                {PROFILE.overline}
              </span>
            </motion.div>

            <h1
              data-testid="hero-headline"
              className="font-serif font-light text-[2.4rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-ink text-balance"
            >
              {PROFILE.headlineParts.map((part, i) => (
                <TextAnimate
                  key={part.text}
                  as="span"
                  by="word"
                  animation="blurInUp"
                  delay={HEADLINE_LINE_DELAY[i]}
                  stagger={HEADLINE_WORD_STAGGER}
                  duration={0.32}
                  startOnView={false}
                  className={`block ${
                    part.italic
                      ? "font-serif italic font-light text-ink-soft"
                      : part.accent
                        ? "text-burgundy font-normal"
                        : ""
                  }`}
                >
                  {part.text}
                </TextAnimate>
              ))}
            </h1>

            <motion.p
              {...heroStep("subtext", reduce)}
              data-testid="hero-positioning"
              className="mt-8 max-w-xl text-sm md:text-base text-ink-soft leading-relaxed"
            >
              {PROFILE.heroSubtext}
            </motion.p>

            {/* Editorial fact row — vertical rules from md only */}
            <motion.ul
              data-testid="hero-facts"
              className="mt-6 grid grid-cols-2 gap-y-5 md:mt-7 md:flex md:flex-wrap"
              variants={factsContainer(reduce)}
              initial={reduce ? false : "hidden"}
              animate={reduce ? undefined : "show"}
            >
              {PROFILE.heroFacts.map((fact, i) => (
                <motion.li
                  key={fact.eyebrow}
                  variants={factItem(reduce)}
                  className={`flex flex-col gap-1 pr-6 md:pr-8 ${
                    i === 2 ? "col-span-2 md:col-auto" : ""
                  } ${
                    i > 0 ? "md:pl-8 md:border-l md:border-ink/15" : ""
                  }`}
                >
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-ink-mute">
                    {fact.eyebrow}
                  </span>
                  <span
                    className={
                      fact.accent
                        ? "font-serif text-lg md:text-xl tracking-tight text-burgundy"
                        : "font-serif text-lg md:text-xl tracking-tight text-ink"
                    }
                  >
                    {fact.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              {...heroStep("ctas", reduce)}
              className="mt-9 grid grid-cols-2 gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:items-center sm:gap-4"
            >
              <motion.a
                href="#projects"
                data-testid="hero-cta-projects"
                onClick={onHashLinkClick}
                className="btn-tactile min-h-11 inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.18em] bg-burgundy text-[#F5F1EB] px-6 py-3 hover:bg-ink transition-colors"
                whileHover={reduce ? undefined : { y: -2, scale: 1.02 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={CTA_SPRING}
              >
                View projects →
              </motion.a>
              <CvDownloadMenu reduce={reduce} />
              <motion.a
                href="#contact"
                data-testid="hero-cta-contact"
                onClick={onHashLinkClick}
                className="col-span-2 sm:col-auto lnk min-h-11 inline-flex items-center justify-center sm:justify-start font-mono text-xs uppercase tracking-[0.18em] text-ink-soft hover:text-burgundy"
                whileHover={reduce ? undefined : { y: -1 }}
                transition={CTA_SPRING}
              >
                Get in touch
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            {...heroStep("photo", reduce, { y: 12, scale: 0.98 })}
            className="col-span-12 md:col-span-5 md:pt-2"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 z-10 hidden md:block bow-hover-tilt">
                <Bow size={32} />
              </div>
              <figure>
                <motion.div
                  style={
                    reduce || !parallaxOn ? undefined : { y: photoParallax }
                  }
                  className="photo-frame aspect-[3/4] bg-bone-300 border border-ink/15 md:will-change-transform"
                >
                  <img
                    data-testid="hero-photo"
                    src={ASSETS.profilePortrait}
                    alt="Ikrame I. H. — portrait"
                    width={640}
                    height={735}
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </motion.div>
                <figcaption className="mt-3 text-right">
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="hero-linkedin"
                    className="lnk font-mono text-xs uppercase tracking-[0.2em] text-ink-mute hover:text-burgundy"
                  >
                    {PROFILE.portraitLink.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </figcaption>
              </figure>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-2 md:mt-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-4 md:pb-5">
          <div className="relative h-px bg-ink/20">
            <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-bone px-3">
              <Bow size={18} />
            </div>
          </div>
        </div>
        <StackMarquee />
      </div>
    </section>
  );
};

export default Hero;
