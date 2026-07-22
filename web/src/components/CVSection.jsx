import { motion, useReducedMotion } from "framer-motion";
import { Bow } from "./Bow";
import Reveal, { REVEAL_VIEWPORT, revealTransition } from "./Reveal";
import {
  EXPERIENCE,
  EDUCATION,
  LANGUAGES,
  PROFILE,
  STACK,
  STACK_SKILL_COUNT,
} from "@/data/portfolio";
import { StackIcon } from "@/data/stackIcons";
import { ASSETS } from "@/data/assets";
import { scrollEnter } from "@/lib/motion";

// Shared header pattern used across CV subsections.
const SectionHeader = ({ overline, title, kicker }) => (
  <div className="mb-16">
    <div className="flex items-center gap-3 mb-6">
      <Bow size={14} />
      <span className="font-mono text-xs uppercase tracking-[0.28em] text-ink-soft">
        {overline}
      </span>
    </div>
    <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tighter text-ink max-w-3xl">
      {title}
    </h2>
    {kicker && (
      <p className="mt-4 font-mono text-xs text-ink-mute max-w-xl">{kicker}</p>
    )}
  </div>
);

// Colour-coded badge so visitors can spot tech vs ops roles at a glance.
const TrackBadge = ({ track }) => {
  const map = {
    tech: { label: "tech", cls: "border-burgundy text-burgundy" },
    hybrid: { label: "tech × biz", cls: "border-ink text-ink" },
    biz: { label: "biz / ops", cls: "border-ink/50 text-ink" },
  };
  const m = map[track] || map.tech;
  return (
    <span
      className={`inline-block font-mono text-xs uppercase tracking-[0.2em] border ${m.cls} px-2 py-0.5`}
    >
      {m.label}
    </span>
  );
};

const DomainGlyph = ({ id, className = "w-5 h-5 text-burgundy" }) => {
  const common = {
    viewBox: "0 0 24 24",
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    focusable: false,
  };

  if (id === "frontend") {
    return (
      <svg {...common}>
        <rect x="3.5" y="5" width="17" height="14" rx="1.5" />
        <path d="M3.5 9h17" />
        <circle cx="6.2" cy="7" r="0.7" fill="currentColor" stroke="none" />
        <circle cx="8.4" cy="7" r="0.7" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (id === "backend") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="6" rx="1" />
        <rect x="4" y="14" width="16" height="6" rx="1" />
        <circle cx="7.5" cy="7" r="0.8" fill="currentColor" stroke="none" />
        <circle cx="7.5" cy="17" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (id === "tooling") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6 6l1.55 1.55M16.45 16.45 18 18M18 6l-1.55 1.55M7.55 16.45 6 18" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M3.8 12h16.4M12 3.8c2.4 2.4 3.6 5.1 3.6 8.2s-1.2 5.8-3.6 8.2c-2.4-2.4-3.6-5.1-3.6-8.2s1.2-5.8 3.6-8.2Z" />
    </svg>
  );
};

const BrandMark = ({ name }) => (
  <li className="stack-mark flex flex-col items-center gap-2.5 text-center min-w-0">
    <StackIcon name={name} className="w-7 h-7 shrink-0 text-burgundy" />
    <span className="font-mono text-[11px] leading-tight tracking-[0.06em] text-ink">
      {name}
    </span>
  </li>
);

const BrandGrid = ({ items, cols = "grid-cols-3", testId }) => (
  <ul className={`grid ${cols} gap-x-3 gap-y-6`} data-testid={testId}>
    {items.map((s) => (
      <BrandMark key={s} name={s} />
    ))}
  </ul>
);

const DomainPanel = ({ domain, children, testId }) => (
  <div data-testid={testId} className="relative min-h-[260px]">
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -top-2 right-0 font-serif font-light text-[5.5rem] md:text-[7rem] leading-none text-ink/[0.05] select-none"
    >
      {domain.index}
    </span>

    {/* Open catalog — top rule only, no filled card (unlike projects / bento). */}
    <div className="relative border-t border-ink/25 pt-5 md:pt-6">
      <div className="flex items-start gap-3 mb-1">
        <DomainGlyph
          id={domain.id}
          className="w-5 h-5 mt-1.5 shrink-0 text-burgundy"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-ink">
              {domain.title}
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-burgundy shrink-0">
              {domain.index}
            </span>
          </div>
          <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-ink-mute max-w-sm">
            {domain.kicker}
          </p>
        </div>
      </div>

      <div className="mt-5 mb-6 flex items-center gap-3" aria-hidden="true">
        <span className="h-px flex-1 bg-bone-400" />
        <span className="h-1 w-1 rotate-45 bg-burgundy/50" />
        <span className="h-px w-8 bg-bone-400" />
      </div>

      {children}
    </div>
  </div>
);

const SkillsBlock = () => (
  <div className="mb-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-14 md:gap-y-16">
      {STACK.domains.map((domain, idx) => (
        <Reveal key={domain.id} delay={0.04 + idx * 0.05}>
          <DomainPanel domain={domain} testId={`stack-${domain.id}`}>
            <div className="space-y-7">
              {domain.groups.map((group) => (
                <div key={group.label}>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink-mute mb-4">
                    {group.label}
                  </p>
                  <BrandGrid
                    items={group.items}
                    cols={
                      domain.id === "tooling"
                        ? "grid-cols-3 sm:grid-cols-3"
                        : "grid-cols-3"
                    }
                  />
                </div>
              ))}
            </div>
          </DomainPanel>
        </Reveal>
      ))}

      <Reveal delay={0.2}>
        <DomainPanel
          domain={{
            id: "languages",
            index: "04",
            title: "Languages",
            kicker: "How I speak with people — and across contexts.",
          }}
          testId="languages-list"
        >
          <ul className="space-y-5">
            {LANGUAGES.map((l) => (
              <li
                key={l.code}
                className="flex flex-wrap items-baseline justify-between gap-2 border-t border-bone-400 pt-4 first:border-0 first:pt-0"
              >
                <span className="font-serif text-xl md:text-2xl text-ink tracking-tight">
                  {l.lang}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
                  {l.detail ? `${l.level} · ${l.detail}` : l.level}
                </span>
              </li>
            ))}
          </ul>
        </DomainPanel>
      </Reveal>
    </div>

    <p className="mt-8 md:mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
      4 domains · {STACK_SKILL_COUNT} skills catalogued
    </p>
  </div>
);

export const CVSection = () => {
  const reduce = useReducedMotion();

  return (
    <section
      id="cv"
      tabIndex={-1}
      data-testid="cv-section"
      className="relative py-24 md:py-32 outline-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <SectionHeader
            overline="01 · background & skills"
            title={
              <>
                Skills, roles, and{" "}
                <em className="not-italic text-burgundy">education</em>.
              </>
            }
            kicker="Skills, languages, and the work behind them."
          />
        </Reveal>

        <SkillsBlock />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <Reveal
            delay={0.05}
            className="md:col-span-7"
            data-testid="experience-timeline"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.28em] text-ink-soft mb-8">
              Experience
            </h3>
            <ol className="relative">
              {EXPERIENCE.map((exp, idx) => (
                <motion.li
                  key={`${exp.company}-${exp.period}`}
                  {...scrollEnter(reduce, idx * 0.08)}
                  viewport={REVEAL_VIEWPORT}
                  className="relative pl-10 pb-12 border-l border-bone-400 last:border-transparent"
                >
                  <motion.div
                    className="absolute -left-[9px] top-1.5"
                    initial={reduce ? false : { opacity: 0, scale: 0.92 }}
                    whileInView={
                      reduce ? undefined : { opacity: 1, scale: 1 }
                    }
                    viewport={REVEAL_VIEWPORT}
                    transition={revealTransition(idx * 0.08 + 0.05)}
                  >
                    <Bow size={18} />
                  </motion.div>
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <h4 className="font-serif text-xl md:text-2xl text-ink">
                      {exp.role}
                    </h4>
                    <TrackBadge track={exp.track} />
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft mb-4">
                    {exp.company} · {exp.period}
                  </p>
                  <ul className="space-y-2 font-mono text-sm text-ink-soft list-disc list-outside ml-4">
                    {exp.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </motion.li>
              ))}
            </ol>
          </Reveal>

          <Reveal
            delay={0.12}
            className="md:col-span-5"
            data-testid="education-block"
          >
            <div className="border border-ink/15 bg-bone-200 p-6 md:p-8 h-full">
              <h3 className="font-mono text-xs uppercase tracking-[0.28em] text-ink-soft mb-8">
                Education
              </h3>
              <ul className="space-y-8">
                {EDUCATION.map((ed, idx) => (
                  <motion.li
                    key={`${ed.school}-${ed.degree}`}
                    {...scrollEnter(reduce, idx * 0.06)}
                    viewport={REVEAL_VIEWPORT}
                    className="border-t border-ink/15 pt-4"
                  >
                    <h4 className="font-serif text-lg text-ink">{ed.degree}</h4>
                    <p className="font-mono text-xs text-ink-soft mt-1">
                      {ed.school}
                    </p>
                    {ed.detail && (
                      <p className="font-mono text-xs text-ink-mute mt-2 leading-relaxed">
                        {ed.detail}
                      </p>
                    )}
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-burgundy mt-2">
                      {ed.period}
                    </p>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12 border border-ink/20 p-6 bg-bone">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-burgundy mb-3">
                  {PROFILE.practiceAside.title}
                </p>
                <p className="font-mono text-sm text-ink leading-relaxed">
                  {PROFILE.practiceAside.text}
                </p>
              </div>

              <a
                href={ASSETS.cvPdf}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="cv-download-link"
                className="mt-10 inline-block font-mono text-xs uppercase tracking-[0.18em] bg-burgundy text-[#F5F1EB] px-6 py-3 hover:bg-ink transition-colors"
              >
                Export CV ↓
                <span className="sr-only">
                  {" "}
                  — opens PDF in a new tab (print or save from there)
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
