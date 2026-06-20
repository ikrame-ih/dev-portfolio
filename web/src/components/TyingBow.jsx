import { motion, useReducedMotion } from "framer-motion";

const VIEW = "0 0 64 64";

const LEFT_LOOP =
  "M32 32 C 22 18, 8 18, 8 28 C 8 38, 22 40, 32 32 Z";
const RIGHT_LOOP =
  "M32 32 C 42 18, 56 18, 56 28 C 56 38, 42 40, 32 32 Z";
const LEFT_TAIL = "M30 34 L 26 50";
const RIGHT_TAIL = "M34 34 L 38 50";

const draw = (delay, duration = 0.34) => ({
  pathLength: {
    duration,
    delay,
    ease: [0.45, 0.05, 0.2, 1],
  },
  opacity: { duration: 0.08, delay },
});

/** Bow that draws itself loop-by-loop — guest book signatures. */
export const TyingBow = ({
  size = 24,
  color = "#4A0E0E",
  strokeWidth = 1.25,
  className = "",
  style = {},
  tie = true,
}) => {
  const reduceMotion = useReducedMotion();

  if (!tie || reduceMotion) {
    return (
      <svg
        className={className}
        style={style}
        width={size}
        height={size}
        viewBox={VIEW}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d={LEFT_LOOP} stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
        <path d={RIGHT_LOOP} stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
        <circle cx="32" cy="32" r="2.5" stroke={color} strokeWidth={strokeWidth} />
        <path d={LEFT_TAIL} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
        <path d={RIGHT_TAIL} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <motion.svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox={VIEW}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      initial={{ scale: 0.72, opacity: 0.6 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        scale: { type: "spring", stiffness: 520, damping: 24, delay: 0.55 },
        opacity: { duration: 0.12 },
      }}
    >
      <motion.circle
        cx="32"
        cy="32"
        r="2.5"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{ transformOrigin: "32px 32px" }}
        transition={{ duration: 0.16, ease: [0.34, 1.4, 0.64, 1] }}
      />
      <motion.path
        d={LEFT_LOOP}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={draw(0.06, 0.36)}
      />
      <motion.path
        d={RIGHT_LOOP}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={draw(0.22, 0.36)}
      />
      <motion.path
        d={LEFT_TAIL}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={draw(0.48, 0.22)}
      />
      <motion.path
        d={RIGHT_TAIL}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={draw(0.56, 0.22)}
      />
    </motion.svg>
  );
};

export default TyingBow;
