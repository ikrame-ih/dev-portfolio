import { motion, useReducedMotion } from "framer-motion";
import { Bow } from "./Bow";
import { PROFILE } from "@/data/portfolio";
import { ASSETS } from "@/data/assets";
import { fadeUp } from "@/lib/motion";
import { scrollToElement } from "@/lib/scroll";

const STEP_DELAY = [0, 0.4, 0.85, 1.2, 1.55, 1.7];

const heroStep = (step, reduce) => fadeUp(reduce, STEP_DELAY[step], 10);

export const Hero = () => {
  const reduce = useReducedMotion();

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen pt-32 md:pt-40 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-6 md:gap-12 items-start md:items-center">
        <div className="col-span-12 md:col-span-7 md:pt-4">
          <motion.div
            {...heroStep(0, reduce)}
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
              <motion.span
                key={part.text}
                {...heroStep(i + 1, reduce)}
                className={`block ${
                  part.italic
                    ? "font-serif italic font-light text-ink-soft"
                    : ""
                }`}
              >
                {part.accent ? (
                  <em className="text-burgundy not-italic font-normal">
                    {part.text}
                  </em>
                ) : (
                  part.text
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            {...heroStep(4, reduce)}
            data-testid="hero-positioning"
            className="mt-10 max-w-xl text-sm md:text-base text-ink-soft leading-relaxed"
          >
            {PROFILE.heroSubtext}
          </motion.p>

          <motion.p
            {...heroStep(4, reduce)}
            className="mt-6 md:mt-7 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            {...heroStep(4, reduce)}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <button
              type="button"
              data-testid="hero-cta-projects"
              onClick={() => scrollToElement("projects")}
              className="btn-tactile font-mono text-xs uppercase tracking-[0.18em] bg-burgundy text-[#F5F1EB] px-6 py-3 hover:bg-ink transition-colors"
            >
              View projects →
            </button>
            <button
              type="button"
              data-testid="hero-cta-cv"
              onClick={() => scrollToElement("cv")}
              className="btn-tactile font-mono text-xs uppercase tracking-[0.18em] border border-ink px-6 py-3 hover:bg-burgundy hover:text-[#F5F1EB] hover:border-burgundy transition-colors"
            >
              View CV ↓
            </button>
            <button
              type="button"
              data-testid="hero-cta-contact"
              onClick={() => scrollToElement("contact")}
              className="lnk font-mono text-xs uppercase tracking-[0.18em] text-ink-soft hover:text-burgundy"
            >
              Get in touch
            </button>
          </motion.div>
        </div>

        <motion.div
          {...heroStep(4, reduce)}
          className="col-span-12 md:col-span-5 md:pt-4"
        >
          <div className="relative">
            <div className="absolute -top-6 -left-6 z-10 hidden md:block bow-hover-tilt">
              <Bow size={32} />
            </div>
            <figure className="photo-frame aspect-[3/4] bg-bone-300 border border-ink/15">
              <img
                data-testid="hero-photo"
                src={ASSETS.profilePortrait}
                alt="Ikrame I. H. — portrait"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </figure>
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute text-right">
              {PROFILE.location}
            </figcaption>
          </div>
        </motion.div>
      </div>

      <motion.div
        {...heroStep(5, reduce)}
        className="mt-24 md:mt-32 border-y border-bone-400 py-5 md:py-6"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
            {PROFILE.heroCredentials.map((line, i) => (
              <div
                key={line}
                className={`flex items-center gap-3 min-w-0 ${
                  i > 0 ? "md:border-l md:border-bone-400 md:pl-8" : ""
                }`}
              >
                <Bow size={12} className="shrink-0 hidden sm:block" />
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.22em] text-ink-soft leading-relaxed">
                  {line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
