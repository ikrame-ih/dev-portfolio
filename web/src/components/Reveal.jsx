import { motion, useReducedMotion } from "framer-motion";
import {
  MOTION_DURATION,
  motionTransition,
  scrollEnter,
} from "@/lib/motion";

export const REVEAL_VIEWPORT = { once: true, margin: "-72px 0px -48px 0px" };

export const revealTransition = (delay = 0) =>
  motionTransition(delay, MOTION_DURATION.reveal);

export const Reveal = ({
  children,
  className,
  delay = 0,
  y = 14,
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
      {...scrollEnter(reduce, delay, { y })}
      viewport={REVEAL_VIEWPORT}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
