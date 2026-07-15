import { motion, useReducedMotion } from "framer-motion";
import {
  MOTION_EASE,
  MOTION_DURATION,
  motionTransition,
} from "@/lib/motion";

export const REVEAL_EASE = MOTION_EASE;
export const REVEAL_VIEWPORT = { once: true, margin: "-72px 0px -48px 0px" };

export const revealTransition = (delay = 0) =>
  motionTransition(delay, MOTION_DURATION.reveal);

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
      initial={reduce ? false : { opacity: 1, y }}
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
