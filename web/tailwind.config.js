/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: [
          "\"Fraunces Variable\"",
          "\"Fraunces Fallback\"",
          "Georgia",
          "serif",
        ],
        mono: [
          "\"JetBrains Mono\"",
          "\"JetBrains Mono Fallback\"",
          "ui-monospace",
          "monospace",
        ],
      },
      colors: {
        bone: {
          DEFAULT: "rgb(var(--bone) / <alpha-value>)",
          50: "#FAF7F2",
          100: "rgb(var(--bone-100) / <alpha-value>)",
          200: "rgb(var(--bone-200) / <alpha-value>)",
          300: "rgb(var(--bone-300) / <alpha-value>)",
          400: "rgb(var(--bone-400) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          soft: "rgb(var(--ink-soft) / <alpha-value>)",
          mute: "rgb(var(--ink-mute) / <alpha-value>)",
        },
        burgundy: {
          DEFAULT: "#4A0E0E",
          light: "#6B1D1D",
        },
        cream: "rgb(var(--cream) / <alpha-value>)",
      },
      keyframes: {
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};
