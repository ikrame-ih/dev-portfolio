import { motion, useReducedMotion } from "framer-motion";
import { Bow } from "./Bow";
import { PROFILE } from "@/data/portfolio";
import { ASSETS } from "@/data/assets";

const EASE = [0.2, 0.7, 0.2, 1];
const STEP_DELAY = [0, 0.4, 0.85, 1.2, 1.55];

const heroStep = (step, reduce) => {
  if (reduce) {
    return { initial: false, animate: { opacity: 1, y: 0 } };
  }
  return {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: EASE, delay: STEP_DELAY[step] },
  };
};

export const Hero = () => {
  const reduce = useReducedMotion();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen pt-32 md:pt-40 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-6 md:gap-12 items-start">
        <div className="col-span-12 md:col-span-7 md:pt-12">
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
            className="font-serif font-light text-[2.4rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-ink"
          >
            <motion.span {...heroStep(1, reduce)} className="block">
              I build software
            </motion.span>
            <motion.span {...heroStep(2, reduce)} className="block">
              with{" "}
              <em className="text-burgundy not-italic font-normal">
                care for detail
              </em>
            </motion.span>
            <motion.span
              {...heroStep(3, reduce)}
              className="block font-serif italic font-light text-ink-soft"
            >
              {PROFILE.headlineAccent}
            </motion.span>
          </h1>

          <motion.p
            {...heroStep(4, reduce)}
            data-testid="hero-positioning"
            className="mt-10 max-w-xl text-sm md:text-base text-ink-soft leading-relaxed"
          >
            {PROFILE.positioningParts.map((part, i) =>
              typeof part === "string" ? (
                part
              ) : (
                <span key={i} className="text-burgundy">
                  {part.em}
                </span>
              ),
            )}
          </motion.p>

          <motion.div
            {...heroStep(4, reduce)}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <button
              type="button"
              data-testid="hero-cta-projects"
              onClick={() => scrollTo("projects")}
              className="font-mono text-xs uppercase tracking-[0.18em] bg-burgundy text-[#F5F1EB] px-6 py-3 hover:bg-ink transition-colors"
            >
              View projects →
            </button>
            <button
              type="button"
              data-testid="hero-cta-cv"
              onClick={() => scrollTo("cv")}
              className="font-mono text-xs uppercase tracking-[0.18em] border border-ink px-6 py-3 hover:bg-burgundy hover:text-[#F5F1EB] hover:border-burgundy transition-colors"
            >
              View CV ↓
            </button>
            <button
              type="button"
              data-testid="hero-cta-contact"
              onClick={() => scrollTo("contact")}
              className="lnk font-mono text-xs uppercase tracking-[0.18em] text-ink-soft hover:text-burgundy"
            >
              Get in touch
            </button>
          </motion.div>
        </div>

        <motion.div
          {...heroStep(4, reduce)}
          className="col-span-12 md:col-span-5 md:translate-y-16"
        >
          <div className="relative">
            <div className="absolute -top-6 -left-6 z-10 hidden md:block">
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
              Málaga, ES
            </figcaption>
          </div>
        </motion.div>
      </div>

      <motion.div
        {...heroStep(4, reduce)}
        className="mt-24 md:mt-32 overflow-hidden border-y border-bone-400 py-4 relative"
      >
        <div className="marquee-track flex gap-12 whitespace-nowrap font-serif italic text-2xl md:text-4xl text-ink/80">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>frontend craft</span>
              <Bow size={18} />
              <span>backend logic</span>
              <Bow size={18} />
              <span>business sense</span>
              <Bow size={18} />
              <span>pixel-perfect</span>
              <Bow size={18} />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
