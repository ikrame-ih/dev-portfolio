import { memo } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MOTION_EASE } from "@/lib/motion";

const ANIMATIONS = {
  fadeIn: {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: MOTION_EASE },
    },
  },
  blurInUp: {
    hidden: { opacity: 0, filter: "blur(6px)", y: 10 },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        y: { duration: 0.55, ease: MOTION_EASE },
        opacity: { duration: 0.6, ease: MOTION_EASE },
        filter: { duration: 0.55, ease: MOTION_EASE },
      },
    },
  },
  slideUp: {
    hidden: { y: 10, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: MOTION_EASE },
    },
  },
};

function splitSegments(text, by) {
  switch (by) {
    case "character":
      return text.split("");
    case "line":
      return text.split("\n");
    case "text":
      return [text];
    case "word":
    default:
      return text.split(/(\s+)/);
  }
}

/**
 * Magic UI–style Text Animate, adapted for framer-motion + this site's easing.
 * @see https://magicui.design/docs/components/text-animate
 */
function TextAnimateBase({
  children,
  className = "",
  segmentClassName = "",
  delay = 0,
  /** Gap between animated segments (seconds). Prefer this over duration/length. */
  stagger = 0.16,
  as: Component = "p",
  by = "word",
  animation = "blurInUp",
  startOnView = false,
  once = true,
  accessible = true,
  ...props
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[Component] || motion.p;
  const segments = splitSegments(children, by);
  const itemVariants = ANIMATIONS[animation] || ANIMATIONS.fadeIn;

  if (reduce) {
    const Tag = Component;
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    );
  }

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  return (
    <AnimatePresence mode="popLayout">
      <MotionTag
        variants={containerVariants}
        initial="hidden"
        animate={startOnView ? undefined : "show"}
        whileInView={startOnView ? "show" : undefined}
        viewport={startOnView ? { once } : undefined}
        className={`relative whitespace-pre-wrap ${className}`.trim()}
        aria-label={accessible ? children : undefined}
        {...props}
      >
        {accessible && (
          <span
            className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0"
            style={{ clip: "rect(0, 0, 0, 0)" }}
          >
            {children}
          </span>
        )}
        {segments.map((segment, i) => {
          // Spaces stay static so stagger only hits real words/characters.
          if (by === "word" && /^\s+$/.test(segment)) {
            return (
              <span
                key={`${by}-${i}-space`}
                className="whitespace-pre"
                aria-hidden={accessible ? true : undefined}
              >
                {segment}
              </span>
            );
          }

          return (
            <motion.span
              key={`${by}-${i}-${segment}`}
              variants={itemVariants}
              className={`${
                by === "line" ? "block" : "inline-block whitespace-pre"
              } ${segmentClassName}`.trim()}
              aria-hidden={accessible ? true : undefined}
            >
              {segment}
            </motion.span>
          );
        })}
      </MotionTag>
    </AnimatePresence>
  );
}

export const TextAnimate = memo(TextAnimateBase);
export default TextAnimate;
