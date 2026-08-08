import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Bow } from "./Bow";
import TextAnimate from "./ui/TextAnimate";
import { ASSETS } from "@/data/assets";
import { MOTION_EASE, CTA_SPRING } from "@/lib/motion";
import { onHashLinkClick } from "@/lib/scroll";
import StackMarquee from "./StackMarquee";
import { useContent, useUi } from "@/i18n/LocaleContext";
import CvDownloadMenu from "./CvDownloadMenu";

// After the headline word cascade finishes (~1.3s), ease the rest in quickly.
const STEP_DELAY = {
  overline: 0,
  subtext: 1.35,
  tagline: 1.55,
  ctas: 1.75,
  photo: 1.4, // unused for entrance — portrait uses CSS unveil; kept for reference
};

const HEADLINE_LINE_DELAY = [0.06, 0.38, 0.7];
const HEADLINE_WORD_STAGGER = 0.07;

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

export const Hero = () => {
  const reduce = useReducedMotion();
  const { PROFILE } = useContent();
  const ui = useUi();
  const [parallaxOn, setParallaxOn] = useState(false);
  /** Headline stays fully hidden until fonts + layout settle — then plays aligned. */
  const [headlineReady, setHeadlineReady] = useState(false);
  const { scrollY } = useScroll();
  const photoParallax = useTransform(
    scrollY,
    [0, 420],
    [0, reduce || !parallaxOn ? 0 : 18],
  );

  useEffect(() => {
    let alive = true;
    const reveal = () => {
      // Two frames after fonts: layout is stacked before any word becomes visible.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (alive) setHeadlineReady(true);
        });
      });
    };

    const run = async () => {
      try {
        if (document.fonts?.ready) await document.fonts.ready;
      } catch {
        /* ignore */
      }
      if (alive) reveal();
    };

    if (reduce) {
      setHeadlineReady(true);
      return undefined;
    }

    run();
    const fallback = window.setTimeout(reveal, 1000);
    return () => {
      alive = false;
      window.clearTimeout(fallback);
    };
  }, [reduce]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    // Defer scroll-linked parallax until after first paint to cut forced reflow / TBT.
    let idleId = 0;
    let timeoutId = 0;
    const enable = () => {
      if (mq.matches) setParallaxOn(true);
    };
    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(enable, { timeout: 1200 });
    } else {
      timeoutId = window.setTimeout(enable, 700);
    }
    const onChange = () => setParallaxOn(mq.matches);
    mq.addEventListener("change", onChange);
    return () => {
      mq.removeEventListener("change", onChange);
      if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section
      data-testid="hero-section"
      className="relative flex min-h-[100dvh] flex-col pt-24 md:pt-28"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-8 md:px-12 md:pb-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start md:items-center">
          <div className="col-span-12 md:col-span-7">
            <motion.div
              className="mb-6 flex items-center gap-3"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={
                reduce || headlineReady
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 8 }
              }
              transition={{
                duration: 0.45,
                ease: MOTION_EASE,
                delay: headlineReady ? STEP_DELAY.overline : 0,
              }}
            >
              <motion.span
                aria-hidden="true"
                className="hairline hairline--draw w-16 origin-left md:w-24"
                initial={reduce ? false : { scaleX: 0, opacity: 0.15 }}
                animate={
                  reduce || headlineReady
                    ? { scaleX: 1, opacity: 0.55 }
                    : { scaleX: 0, opacity: 0.15 }
                }
                transition={{
                  duration: 0.7,
                  ease: MOTION_EASE,
                  delay: headlineReady ? 0.12 : 0,
                }}
              />
              <span
                data-testid="hero-overline"
                className="font-mono text-xs uppercase tracking-[0.14em] text-ink leading-relaxed md:text-sm md:tracking-[0.22em]"
              >
                {PROFILE.overline}
              </span>
            </motion.div>

            <h1
              data-testid="hero-headline"
              className="font-serif font-light text-[2.05rem] leading-[1.12] sm:text-5xl md:text-6xl lg:text-7xl sm:leading-[1.12] tracking-[-0.03em] text-ink text-pretty md:text-balance"
            >
              {PROFILE.headlineParts.map((part, i) => (
                <TextAnimate
                  key={part.text}
                  as="div"
                  by="word"
                  animation="fadeIn"
                  delay={HEADLINE_LINE_DELAY[i]}
                  stagger={HEADLINE_WORD_STAGGER}
                  duration={0.38}
                  startOnView={false}
                  play={headlineReady}
                  className={
                    part.italic
                      ? "font-serif italic font-light text-ink-soft pb-1"
                      : part.accent
                        ? "text-burgundy font-normal"
                        : ""
                  }
                >
                  {part.text}
                </TextAnimate>
              ))}
            </h1>

            <motion.p
              data-testid="hero-positioning"
              className="mt-8 max-w-[65ch] text-sm md:text-base text-ink-soft leading-relaxed"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={
                reduce || headlineReady
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 8 }
              }
              transition={{
                duration: 0.45,
                ease: MOTION_EASE,
                delay: headlineReady ? STEP_DELAY.subtext : 0,
              }}
            >
              {PROFILE.heroSubtext}
            </motion.p>

            {/* Editorial fact row — vertical rules from md only */}
            <motion.ul
              data-testid="hero-facts"
              className="mt-6 grid grid-cols-2 gap-y-5 md:mt-7 md:flex md:flex-wrap"
              variants={factsContainer(reduce)}
              initial={reduce ? false : "hidden"}
              animate={reduce || headlineReady ? "show" : "hidden"}
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
              className="mt-9 grid grid-cols-2 gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:items-center sm:gap-4"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={
                reduce || headlineReady
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 8 }
              }
              transition={{
                duration: 0.45,
                ease: MOTION_EASE,
                delay: headlineReady ? STEP_DELAY.ctas : 0,
              }}
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
                {ui.hero.viewProjects}
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
                {ui.hero.getInTouch}
              </motion.a>
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-5 md:pt-2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 z-10 hidden md:block bow-hover-tilt">
                <Bow size={32} />
              </div>
              <motion.figure
                style={
                  reduce || !parallaxOn ? undefined : { y: photoParallax }
                }
                className="md:will-change-transform"
              >
                {/* Composited reveal: overflow:hidden wrapper + translateY on inner div, no clip-path */}
                <div className="photo-frame aspect-[3/4] bg-bone-300 border border-ink/15 overflow-hidden">
                  <motion.div
                    className="w-full h-full"
                    initial={reduce ? false : { y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 1.35,
                      delay: 0.4,
                      ease: MOTION_EASE,
                    }}
                  >
                    <picture>
                      <source srcSet={ASSETS.profilePortraitWebp} type="image/webp" />
                      <motion.img
                        data-testid="hero-photo"
                        src={ASSETS.profilePortrait}
                        alt={ui.hero.portraitAlt}
                        width={640}
                        height={735}
                        className="w-full h-full object-cover object-top"
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        initial={reduce ? false : { scale: 1.08, y: 12 }}
                        animate={{ scale: 1.01, y: 0 }}
                        transition={{
                          duration: 1.35,
                          delay: 0.4,
                          ease: MOTION_EASE,
                        }}
                      />
                    </picture>
                  </motion.div>
                </div>
                <figcaption className="mt-3 text-right">
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="hero-linkedin"
                    className="lnk font-mono text-xs uppercase tracking-[0.2em] text-ink-mute hover:text-burgundy"
                  >
                    {PROFILE.portraitLink.label}
                    <span className="sr-only">{ui.hero.opensNewTab}</span>
                  </a>
                </figcaption>
              </motion.figure>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee pins to the bottom of the first viewport so CV stays below the fold. */}
      <div className="mt-auto w-full pt-2 md:pt-4">
        <div className="mx-auto max-w-7xl px-6 pb-4 md:px-12 md:pb-5">
          <div className="relative h-px bg-ink/20">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-bone px-3">
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
