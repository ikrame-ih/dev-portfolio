import { motion, useReducedMotion } from "framer-motion";
import { Bow } from "./Bow";
import Reveal from "./Reveal";
import TextAnimate from "./ui/TextAnimate";
import { PROFILE } from "@/data/portfolio";
import { ASSETS } from "@/data/assets";
import { heroEnter } from "@/lib/motion";
import { onHashLinkClick } from "@/lib/scroll";

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

export const Hero = () => {
  const reduce = useReducedMotion();

  return (
    <section
      data-testid="hero-section"
      className="relative pt-32 md:pt-40 pb-10 md:pb-12"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-6 md:gap-12 items-start md:items-center">
        <div className="col-span-12 md:col-span-7 md:pt-4">
          <motion.div
            {...heroStep("overline", reduce)}
            className="flex items-center gap-3 mb-8"
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
            className="mt-10 max-w-xl text-sm md:text-base text-ink-soft leading-relaxed"
          >
            {PROFILE.heroSubtext}
          </motion.p>

          <motion.p
            {...heroStep("tagline", reduce)}
            className="mt-6 md:mt-7 font-mono text-xs uppercase tracking-[0.2em] text-ink-mute"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            {...heroStep("ctas", reduce)}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              data-testid="hero-cta-projects"
              onClick={onHashLinkClick}
              className="btn-tactile font-mono text-xs uppercase tracking-[0.18em] bg-burgundy text-[#F5F1EB] px-6 py-3 hover:bg-ink transition-colors"
            >
              View projects →
            </a>
            <a
              href="#cv"
              data-testid="hero-cta-cv"
              onClick={onHashLinkClick}
              className="btn-tactile font-mono text-xs uppercase tracking-[0.18em] border border-ink px-6 py-3 hover:bg-burgundy hover:text-[#F5F1EB] hover:border-burgundy transition-colors"
            >
              View CV ↓
            </a>
            <a
              href="#contact"
              data-testid="hero-cta-contact"
              onClick={onHashLinkClick}
              className="lnk font-mono text-xs uppercase tracking-[0.18em] text-ink-soft hover:text-burgundy"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          {...heroStep("photo", reduce, { y: 12, scale: 0.98 })}
          className="col-span-12 md:col-span-5 md:pt-4"
        >
          <div className="relative">
            <div className="absolute -top-6 -left-6 z-10 hidden md:block bow-hover-tilt">
              <Bow size={32} />
            </div>
            <figure>
              <div className="photo-frame aspect-[3/4] bg-bone-300 border border-ink/15">
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
              </div>
              <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-mute text-right">
                {PROFILE.location}
              </figcaption>
            </figure>
          </div>
        </motion.div>
      </div>

      <Reveal y={12} className="mt-14 md:mt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="relative h-px bg-ink/20">
            <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-bone px-3">
              <Bow size={18} />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Hero;
