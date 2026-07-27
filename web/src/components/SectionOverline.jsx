import { motion, useReducedMotion } from "framer-motion";
import { Bow } from "./Bow";
import { MOTION_EASE } from "@/lib/motion";
import { REVEAL_VIEWPORT } from "./Reveal";

/**
 * Shared section overline: bow + hairline that draws L→R + mono label.
 */
export const SectionOverline = ({ children, className = "mb-6" }) => {
  const reduce = useReducedMotion();

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Bow size={14} />
      <motion.span
        aria-hidden="true"
        className="hairline hairline--draw w-12 md:w-20 origin-left"
        initial={reduce ? false : { scaleX: 0, opacity: 0.15 }}
        whileInView={reduce ? undefined : { scaleX: 1, opacity: 0.55 }}
        viewport={REVEAL_VIEWPORT}
        transition={{ duration: 0.95, ease: MOTION_EASE, delay: 0.08 }}
      />
      <span className="font-mono text-xs uppercase tracking-[0.28em] text-ink-soft">
        {children}
      </span>
    </div>
  );
};

export default SectionOverline;
