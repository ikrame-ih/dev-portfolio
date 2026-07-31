/**
 * @file Hero.jsx
 * @description The primary landing section of the portfolio. Features a highly 
 * orchestrated entrance animation sequence and parallax scrolling effects.
 */
import { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Bow } from "./Bow";
import TextAnimate from "./ui/TextAnimate";
import { ASSETS } from "@/data/assets";
import { MOTION_EASE, heroEnter, CTA_SPRING } from "@/lib/motion";
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

export const Hero = () => {
  const reduce = useReducedMotion();
  const { PROFILE } = useContent();
  const ui = useUi();
  const [parallaxOn, setParallaxOn] = useState(false);
  const { scrollY } = useScroll();
  const photoParallax = useTransform(
    scrollY,
    [0, 420],
    [0, reduce || !parallaxOn ? 0 : 18],
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    // Only enable parallax on desktop to prevent janky scrolling on mobile 
    // devices where touch events can conflict with scroll-linked animations.
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
              <motion.span
                aria-hidden="true"
                className="hairline hairline--draw w-16 md:w-24 origin-left"
                initial={reduce ? false : { scaleX: 0, opacity: 0.15 }}
                animate={reduce ? undefined : { scaleX: 1, opacity: 0.55 }}
                transition={{ duration: 0.9, ease: MOTION_EASE, delay: 0.12 }}
              />
              <span
                data-testid="hero-overline"
                className="font-mono text-xs md:text-sm uppercase tracking-[0.14em] md:tracking-[0.22em] text-ink leading-relaxed"
              >
                {PROFILE.overline}
              </span>
            </motion.div>

            <h1
              data-testid="hero-headline"
              className="font-serif font-light text-[2.05rem] leading-[1.12] sm:text-5xl md:text-6xl lg:text-7xl sm:leading-[1.05] tracking-tighter text-ink text-pretty md:text-balance"
            >
              {PROFILE.headlineParts.map((part, i) => (
                <TextAnimate
                  key={part.text}
                  as="span"
                  by="word"
                  animation="fadeIn"
                  delay={HEADLINE_LINE_DELAY[i]}
                  stagger={HEADLINE_WORD_STAGGER}
                  duration={0.38}
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

          <motion.div
            // Opacity stays on — CSS clip-path owns the portrait reveal (Framer fade was hiding it).
            initial={reduce ? false : { opacity: 1, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              reduce
                ? undefined
                : { duration: 0.7, ease: MOTION_EASE, delay: 0.2 }
            }
            className="col-span-12 md:col-span-5 md:pt-2"
          >
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
                <motion.div
                  className="photo-frame aspect-[3/4] bg-bone-300 border border-ink/15 overflow-hidden"
                  initial={
                    reduce
                      ? false
                      : {
                          clipPath:
                            "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                        }
                  }
                  animate={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  }}
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
                      initial={
                        reduce
                          ? false
                          : { scale: 1.08, y: 12 }
                      }
                      animate={{ scale: 1.01, y: 0 }}
                      transition={{
                        duration: 1.35,
                        delay: 0.4,
                        ease: MOTION_EASE,
                      }}
                    />
                  </picture>
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
                    <span className="sr-only">{ui.hero.opensNewTab}</span>
                  </a>
                </figcaption>
              </motion.figure>
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
