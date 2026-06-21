import { motion, useReducedMotion } from "framer-motion";

export const REVEAL_EASE = [0.2, 0.7, 0.2, 1];
export const REVEAL_VIEWPORT = { once: true, margin: "-72px 0px -48px 0px" };

export const revealTransition = (delay = 0) => ({
  duration: 0.85,
  ease: REVEAL_EASE,
  delay,
});

export const Reveal = ({
  children,
  className,
  delay = 0,
  y = 28,
  as = "div",
  ...rest
}) => {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={REVEAL_VIEWPORT}
      transition={revealTransition(delay)}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
