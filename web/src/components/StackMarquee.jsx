import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";
import { Bow } from "./Bow";
import { useContent } from "@/i18n/LocaleContext";

function buildTickerItems(skillItems, rareItems) {
  const out = [];
  let rareIdx = 0;
  skillItems.forEach((name, i) => {
    out.push({ type: "skill", label: name });
    if ((i + 1) % 7 === 0 && rareIdx < rareItems.length) {
      out.push({ type: "rare", label: rareItems[rareIdx] });
      rareIdx += 1;
    }
  });
  while (rareIdx < rareItems.length) {
    out.push({ type: "rare", label: rareItems[rareIdx] });
    rareIdx += 1;
  }
  return out;
}

const Separator = ({ index }) => {
  if (index % 4 === 3) {
    return (
      <span
        className="ml-5 inline-flex items-center text-burgundy"
        aria-hidden="true"
      >
        <Bow size={10} strokeWidth={1.3} />
      </span>
    );
  }
  return (
    <span className="ml-5 text-ink-mute" aria-hidden="true">
      ·
    </span>
  );
};

/** Quiet mono ticker — pauses on hover; static when reduced motion is preferred. */
export const StackMarquee = ({ className = "" }) => {
  const reduce = useReducedMotion();
  const { STACK, marqueeRare } = useContent();
  const shouldAnimate = !reduce;

  const tickerItems = useMemo(() => {
    const skillItems = STACK.domains.flatMap((d) =>
      d.groups.flatMap((g) => g.items),
    );
    return buildTickerItems(skillItems, marqueeRare ?? []);
  }, [STACK, marqueeRare]);

  const loop = [...tickerItems, ...tickerItems];

  return (
    <div
      data-testid="stack-marquee"
      className={`marquee-pause overflow-hidden border-t border-ink/10 bg-bone-200/50 ${className}`}
      aria-hidden="true"
    >
      <div
        className={`flex w-max gap-0 py-3 font-mono text-xs uppercase tracking-[0.22em] ${
          shouldAnimate ? "marquee-track" : ""
        }`}
      >
        {(shouldAnimate ? loop : tickerItems).map((item, i) => (
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
