import { motion, useReducedMotion } from "framer-motion";
import Reveal, { REVEAL_VIEWPORT, revealTransition } from "./Reveal";
import SectionOverline from "./SectionOverline";
import { useContent } from "@/i18n/LocaleContext";

export const BentoSection = () => {
  const reduce = useReducedMotion();
  const { BENTO } = useContent();

  return (
    <section
      id="bento"
      tabIndex={-1}
      data-testid="bento-section"
      className="relative py-16 sm:py-20 md:py-32 bg-bone-200 outline-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="mb-10 md:mb-16 max-w-3xl">
          <SectionOverline>{BENTO.overline}</SectionOverline>
          <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tighter text-ink">
            {BENTO.title}
            <br />
            <em className="not-italic text-burgundy">{BENTO.titleAccent}</em>
          </h2>
          <p className="mt-4 font-mono text-xs text-ink-mute max-w-xl leading-relaxed">
            {BENTO.kicker}
          </p>
        </Reveal>

        <div className="bento-lanes grid grid-cols-1 md:grid-cols-3 md:grid-rows-5 gap-4 md:gap-6 md:auto-rows-[minmax(180px,1fr)]">
          {BENTO.items.map((item, idx) => (
            <motion.div
              key={item.key}
              initial={reduce ? false : { y: 14 }}
              whileInView={reduce ? undefined : { y: 0 }}
              viewport={REVEAL_VIEWPORT}
              transition={revealTransition(idx * 0.06)}
              data-testid={`bento-${item.key}`}
              className={`bento-item bento-item--${item.key} group relative overflow-hidden border border-ink/15 hover:border-burgundy transition-colors duration-500 min-h-[240px] md:min-h-[200px] ${item.span}`}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.imageAlt || item.title}
                  width={1200}
                  height={900}
                  decoding="async"
                  className={`absolute inset-0 w-full h-full object-cover opacity-40 md:opacity-50 group-hover:opacity-[0.62] transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] motion-safe:group-hover:scale-[1.04] ${item.imagePosition || "object-center"}`}
                  loading="lazy"
                />
              ) : (
                <div
                  className={`absolute inset-0 ${
                    item.tone === "burgundy"
                      ? "bg-gradient-to-br from-burgundy/15 via-bone-200 to-bone"
                      : "bg-gradient-to-br from-bone-200 via-bone to-bone-300"
                  }`}
                  aria-hidden="true"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-bone from-25% via-bone/90 to-bone/45 md:from-bone md:via-bone/80 md:to-bone/55 group-hover:via-bone/75 transition-colors duration-500" />
              <div className="relative h-full min-h-[240px] md:min-h-[200px] p-5 sm:p-6 md:p-8 flex flex-col justify-end gap-3 md:gap-4">
                {item.label && (
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-burgundy">
                      {item.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="bento-label-hairline hairline w-8 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] motion-reduce:transition-none motion-reduce:scale-x-0"
                    />
                  </div>
                )}
                <h3 className="font-serif font-light text-2xl md:text-3xl text-ink tracking-tight">
                  {item.title}
                </h3>
                <p className="font-mono text-xs md:text-sm text-ink leading-relaxed max-w-md">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
