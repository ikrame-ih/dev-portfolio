import { motion } from "framer-motion";
import { Bow } from "./Bow";
import Reveal, { REVEAL_VIEWPORT, revealTransition } from "./Reveal";
import { BENTO } from "@/data/portfolio";

export const BentoSection = () => {
  return (
    <section id="bento" data-testid="bento-section" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Bow size={14} />
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft">
              {BENTO.overline}
            </span>
          </div>
          <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tighter text-ink">
            {BENTO.title}
            <br />
            <em className="not-italic text-burgundy">{BENTO.titleAccent}</em>
          </h2>
          <p className="mt-4 font-mono text-xs text-ink-mute max-w-xl leading-relaxed">{BENTO.kicker}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 md:gap-6 md:auto-rows-[minmax(200px,1fr)]">
          {BENTO.items.map((item, idx) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={REVEAL_VIEWPORT}
              transition={revealTransition(idx * 0.07)}
              data-testid={`bento-${item.key}`}
              className={`group relative overflow-hidden border border-ink/15 hover:border-burgundy transition-colors duration-500 min-h-[220px] ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.imageAlt || item.title}
                className={`absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-700 scale-[1.02] group-hover:scale-105 ${item.imagePosition || "object-center"}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bone via-bone/80 to-bone/55 group-hover:via-bone/75 transition-colors duration-500" />
              <div className="relative h-full min-h-[220px] p-6 md:p-8 flex flex-col justify-end gap-4">
                <div>
                  <h3 className="font-serif font-light text-2xl md:text-4xl text-ink tracking-tight">
                    {item.title}
                  </h3>
                </div>
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
