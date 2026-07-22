import { useReducedMotion } from "framer-motion";
import { STACK } from "@/data/portfolio";
import { Bow } from "./Bow";

const SKILL_ITEMS = STACK.domains.flatMap((d) =>
  d.groups.flatMap((g) => g.items),
);

const RARE_ITEMS = ["open to work", "málaga → remote", "built with care"];

function buildTickerItems() {
  const out = [];
  let rareIdx = 0;
  SKILL_ITEMS.forEach((name, i) => {
    out.push({ type: "skill", label: name });
    if ((i + 1) % 7 === 0 && rareIdx < RARE_ITEMS.length) {
      out.push({ type: "rare", label: RARE_ITEMS[rareIdx] });
      rareIdx += 1;
    }
  });
  while (rareIdx < RARE_ITEMS.length) {
    out.push({ type: "rare", label: RARE_ITEMS[rareIdx] });
    rareIdx += 1;
  }
  return out;
}

const TICKER_ITEMS = buildTickerItems();

const Separator = ({ index }) => {
  if (index % 4 === 3) {
    return (
      <span
        className="ml-5 inline-flex items-center text-burgundy/55"
        aria-hidden="true"
      >
        <Bow size={10} strokeWidth={1.3} />
      </span>
    );
  }
  return (
    <span className="ml-5 text-burgundy/40" aria-hidden="true">
      ·
    </span>
  );
};

/** Quiet mono ticker — pauses on hover; static when reduced motion. */
export const StackMarquee = ({ className = "" }) => {
  const reduce = useReducedMotion();
  const loop = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      data-testid="stack-marquee"
      className={`marquee-pause overflow-hidden border-t border-ink/10 bg-bone-200/50 ${className}`}
      aria-hidden="true"
    >
      <div
        className={`flex w-max gap-0 py-3 font-mono text-[11px] uppercase tracking-[0.22em] ${
          reduce ? "" : "marquee-track"
        }`}
      >
        {(reduce ? TICKER_ITEMS : loop).map((item, i) => (
          <span
            key={`${item.label}-${i}`}
            className={`inline-flex items-center shrink-0 px-5 ${
              item.type === "rare"
                ? "text-burgundy tracking-[0.18em]"
                : "text-ink-mute"
            }`}
          >
            <span>{item.label}</span>
            <Separator index={i} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default StackMarquee;
