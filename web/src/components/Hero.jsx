import { useEffect, useRef, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
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
  tagline: 1.55,
  ctas: 1.75,
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
            staggerChildren: 0,
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

/** Light parallax without useScroll — that hook measures layout and forces a reflow on load. */
const PortraitFrame = ({ reduce, parallaxOn, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!parallaxOn || reduce) return undefined;
    const el = ref.current;
    if (!el) return undefined;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = Math.min(18, window.scrollY * (18 / 420));
        el.style.transform = `translate3d(0, ${y}px, 0)`;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      el.style.transform = "";
    };
  }, [parallaxOn, reduce]);

  return (
    <figure ref={ref} className={parallaxOn ? "md:will-change-transform" : undefined}>
      {children}
    </figure>
  );
};

export const Hero = () => {
  const reduce = useReducedMotion();
  const { PROFILE } = useContent();
  const ui = useUi();
  const [parallaxOn, setParallaxOn] = useState(false);
  /** Headline paints immediately (LCP). Overline / facts / CTAs still wait on fonts. */
  const [headlineReady, setHeadlineReady] = useState(false);

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
      className="relative flex min-h-0 flex-col pt-24 md:min-h-[100svh] md:pt-28"
    >
      <div className="mx-auto flex min-h-0 w-full max-w-[1240px] flex-1 flex-col justify-center px-5 pb-8 md:px-12 md:pb-6">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start md:items-center">
          <div className="col-span-12 md:col-span-7">
            <m.div
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
              <m.span
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
            </m.div>

            <h1
              data-testid="hero-headline"
              className="font-serif font-light text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.15] tracking-[-0.03em] text-ink text-pretty"
            >
              {PROFILE.headlineParts.map((part, i) => (
                <TextAnimate
                  key={part.text}
                  as="span"
                  by="text"
                  animation="fadeIn"
                  delay={HEADLINE_LINE_DELAY[i] ?? 0}
                  stagger={HEADLINE_WORD_STAGGER}
                  duration={0.38}
                  startOnView={false}
                  play
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

            <div data-testid="hero-positioning" className="mt-8 max-w-[65ch] space-y-4">
              {(Array.isArray(PROFILE.heroSubtext)
                ? PROFILE.heroSubtext
                : [PROFILE.heroSubtext]
              ).map((para) => (
                <p
                  key={para}
                  className="text-base leading-[1.6] text-ink-soft md:text-[1.0625rem]"
                >
                  {para}
                </p>
              ))}
            </div>

            <m.div
              className="hero-cta-row mt-8 grid grid-cols-1 gap-3 sm:mt-9 sm:flex sm:flex-wrap sm:items-center sm:gap-4"
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
              <m.a
                href="#projects"
                data-testid="hero-cta-projects"
                onClick={onHashLinkClick}
                className="btn-tactile min-h-11 inline-flex w-full items-center justify-center font-mono text-xs uppercase tracking-[0.18em] bg-burgundy text-[#F5F1EB] px-6 py-3 hover:bg-ink transition-colors sm:w-auto"
                whileHover={reduce ? undefined : { y: -2, scale: 1.02 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={CTA_SPRING}
              >
                {ui.hero.viewProjects}
              </m.a>
              <CvDownloadMenu reduce={reduce} />
              <m.a
                href="#contact"
                data-testid="hero-cta-contact"
                onClick={onHashLinkClick}
                className="lnk min-h-11 inline-flex items-center justify-center sm:justify-start font-mono text-xs uppercase tracking-[0.18em] text-ink-soft hover:text-burgundy"
                whileHover={reduce ? undefined : { y: -1 }}
                transition={CTA_SPRING}
              >
                {ui.hero.getInTouch}
              </m.a>
            </m.div>

            <m.ul
              data-testid="hero-facts"
              className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:grid-rows-[auto_auto] sm:items-stretch sm:gap-x-0 sm:gap-y-1.5"
              variants={factsContainer(reduce)}
              initial={reduce ? false : "hidden"}
              animate={reduce || headlineReady ? "show" : "hidden"}
            >
              {PROFILE.heroFacts.map((fact, i) => {
                const last = i === PROFILE.heroFacts.length - 1;
                const pad =
                  i === 0
                    ? "sm:pr-7"
                    : last
                      ? "sm:border-l sm:border-ink/15 sm:pl-7"
                      : "sm:border-l sm:border-ink/15 sm:px-7";
                return (
                  <m.li
                    key={fact.eyebrow}
                    variants={factItem(reduce)}
                    className={`flex min-w-0 flex-col gap-1.5 sm:grid sm:grid-rows-subgrid sm:row-span-2 ${pad}`}
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
                      {fact.eyebrow}
                    </span>
                    <span
                      className={`self-start font-serif text-lg leading-snug tracking-tight text-balance md:text-xl ${
                        fact.accent ? "text-burgundy" : "text-ink"
                      }`}
                    >
                      {fact.text}
                    </span>
                  </m.li>
                );
              })}
            </m.ul>
          </div>

          <div className="col-span-12 md:col-span-5 md:pt-2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 z-10 hidden md:block bow-hover-tilt">
                <Bow size={32} />
              </div>
              <PortraitFrame reduce={reduce} parallaxOn={parallaxOn}>
                {/* Composited reveal: overflow:hidden wrapper + translateY on inner div, no clip-path */}
                <div className="hero-photo-frame photo-frame h-[min(42vh,20rem)] w-full overflow-hidden border border-ink/15 bg-bone-300 md:h-auto md:aspect-[3/4] md:max-h-[calc(100svh-20rem)]">
                  <div className="h-full w-full">
                    <picture>
                      <source srcSet={ASSETS.profilePortraitWebp} type="image/webp" />
                      <img
                        data-testid="hero-photo"
                        src={ASSETS.profilePortrait}
                        alt={ui.hero.portraitAlt}
                        width={640}
                        height={735}
                        className="h-full w-full object-cover object-top"
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                      />
                    </picture>
                  </div>
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
              </PortraitFrame>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee stays in the first screen — shrink-0 so the photo yields, not this strip. */}
      <div className="mt-auto w-full shrink-0 pt-2 md:pt-3">
        <div className="mx-auto max-w-[1240px] px-5 pb-3 md:px-12 md:pb-3">
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
