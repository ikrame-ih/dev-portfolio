import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Bow } from "./Bow";
import Reveal, { REVEAL_VIEWPORT, revealTransition } from "./Reveal";
import SectionOverline from "./SectionOverline";
import ProjectLightbox from "./ProjectLightbox";
import {
  EXPERIENCE,
  EDUCATION,
  LANGUAGES,
  PROFILE,
  STACK,
} from "@/data/portfolio";
import { StackIcon } from "@/data/stackIcons";
import { MOTION_EASE, scrollEnter } from "@/lib/motion";

// Shared header pattern used across CV subsections.
const SectionHeader = ({ overline, title, kicker }) => (
  <div className="mb-10 md:mb-16">
    <SectionOverline>{overline}</SectionOverline>
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
    strokeWidth: "1.75",
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

const BrandMark = ({ name, index = 0, reduce }) => (
  <motion.li
    className="stack-mark text-center min-w-0"
    initial={reduce ? false : { opacity: 0, y: 10 }}
    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
    viewport={REVEAL_VIEWPORT}
    transition={revealTransition(Math.min(index * 0.04, 0.35))}
  >
    {/* Hover lift lives in CSS so it never inherits the slow reveal transition. */}
    <span className="stack-mark-lift flex flex-col items-center gap-3">
      <motion.span
        className="stack-mark-icon inline-flex"
        initial={reduce ? false : { scale: 0.88, rotate: -5 }}
        whileInView={
          reduce
            ? undefined
            : { scale: [0.88, 1.1, 1], rotate: [-5, 3, 0] }
        }
        viewport={REVEAL_VIEWPORT}
        transition={{
          duration: 0.55,
          ease: MOTION_EASE,
          delay: Math.min(index * 0.04, 0.35) + 0.05,
        }}
      >
        <StackIcon
          name={name}
          className="w-9 h-9 md:w-10 md:h-10 shrink-0 text-burgundy"
        />
      </motion.span>
      <span className="font-mono text-sm leading-snug tracking-[0.04em] text-ink">
        {name}
      </span>
    </span>
  </motion.li>
);

const BrandGrid = ({ items, cols = "grid-cols-2 sm:grid-cols-3", testId, reduce }) => (
  <ul className={`grid ${cols} gap-x-4 gap-y-7 md:gap-y-8`} data-testid={testId}>
    {items.map((s, i) => (
      <BrandMark key={s} name={s} index={i} reduce={reduce} />
    ))}
  </ul>
);

const DomainPanel = ({ domain, children, testId }) => {
  const reduce = useReducedMotion();

  return (
    <div data-testid={testId} className="relative min-h-0 md:min-h-[260px]">
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute -top-2 right-0 hidden md:block font-serif font-light text-[7rem] leading-none select-none text-[#8F877C]"
        initial={reduce ? false : { opacity: 0, x: 12 }}
        whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
        viewport={REVEAL_VIEWPORT}
        transition={revealTransition(0.08)}
      >
        {domain.index}
      </motion.span>

      {/* Open catalog — top rule only, no filled card (unlike projects / bento). */}
      <div className="relative border-t border-ink/25 pt-5 md:pt-6">
        <div className="flex items-start gap-3 mb-1">
          <DomainGlyph
            id={domain.id}
            className="w-6 h-6 mt-1.5 shrink-0 text-burgundy"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-ink">
                {domain.title}
              </h3>
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-burgundy shrink-0">
                {domain.index}
              </span>
            </div>
            <p className="mt-1.5 font-mono text-xs leading-relaxed text-ink-mute max-w-sm">
              {domain.kicker}
            </p>
          </div>
        </div>

        <div className="mt-5 mb-6 flex items-center gap-3" aria-hidden="true">
          <span className="h-px flex-1 bg-bone-400" />
          <span className="h-1 w-1 rotate-45 bg-burgundy" />
          <span className="h-px w-8 bg-bone-400" />
        </div>

        {children}
      </div>
    </div>
  );
};

const SkillsBlock = () => {
  const reduce = useReducedMotion();

  return (
  <div className="mb-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-14 md:gap-y-16">
      {STACK.domains.map((domain, idx) => (
        <Reveal key={domain.id} delay={0.04 + idx * 0.05}>
          <DomainPanel domain={domain} testId={`stack-${domain.id}`}>
            <div className="space-y-7">
              {domain.groups.map((group) => (
                <div key={group.label}>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink-mute mb-5">
                    {group.label}
                  </p>
                  <BrandGrid
                    items={group.items}
                    reduce={reduce}
                    cols="grid-cols-2 sm:grid-cols-3"
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
                <span className="font-serif text-2xl md:text-[1.75rem] text-ink tracking-tight">
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
  </div>
  );
};

export const CVSection = () => {
  const reduce = useReducedMotion();
  const [proofShot, setProofShot] = useState(null);

  return (
    <section
      id="cv"
      tabIndex={-1}
      data-testid="cv-section"
      className="relative pt-16 md:pt-20 pb-24 md:pb-32 outline-none"
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 md:items-start">
          <Reveal
            delay={0.05}
            className="md:col-span-7"
            data-testid="experience-timeline"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.28em] text-ink-soft mb-8">
              Experience
            </h3>
            <ol className="relative pl-10">
              <motion.span
                aria-hidden="true"
                className="absolute left-0 top-[0.875rem] bottom-3 w-px origin-top bg-bone-400"
                initial={reduce ? false : { scaleY: 0 }}
                whileInView={reduce ? undefined : { scaleY: 1 }}
                viewport={REVEAL_VIEWPORT}
                transition={{ duration: 1.05, ease: MOTION_EASE, delay: 0.08 }}
              />
              {EXPERIENCE.map((exp, idx) => {
                const hasProof = exp.bullets.some(
                  (b) => typeof b === "object" && b.proof?.image,
                );
                return (
                <motion.li
                  key={`${exp.company}-${exp.period}`}
                  {...scrollEnter(reduce, idx * 0.08)}
                  viewport={REVEAL_VIEWPORT}
                  className={`relative last:pb-0 ${hasProof ? "pb-9" : "pb-12"}`}
                >
                  {/* Center on the rail without translateX — Framer scale owns transform */}
                  <motion.div
                    aria-hidden="true"
                    className="absolute top-1.5 -left-10 -ml-[9px] h-[18px] w-[18px]"
                    initial={reduce ? false : { opacity: 0, scale: 0.92 }}
                    whileInView={
                      reduce ? undefined : { opacity: 1, scale: 1 }
                    }
                    viewport={REVEAL_VIEWPORT}
                    transition={revealTransition(idx * 0.08 + 0.12)}
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
                    {exp.bullets.map((b) => {
                      const text = typeof b === "string" ? b : b.text;
                      return <li key={text}>{text}</li>;
                    })}
                  </ul>
                  {exp.bullets
                    .filter((b) => typeof b === "object" && b.proof?.image)
                    .map((b) => {
                      const proof = b.proof;
                      return (
                        <figure key={proof.id} className="mt-3 ml-4">
                          <button
                            type="button"
                            onClick={() => setProofShot(proof)}
                            aria-label={`View ${proof.name}`}
                            data-testid={`experience-proof-${proof.id}`}
                            className="group inline-flex max-w-[13.5rem] text-left outline-none focus-visible:ring-2 focus-visible:ring-burgundy/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
                          >
                            <span className="block overflow-hidden border border-ink/15 bg-bone-200">
                              <img
                                src={proof.image}
                                alt=""
                                className="aspect-[16/10] w-full object-cover object-left opacity-60 grayscale transition-[filter,opacity] duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-focus-visible:opacity-100 group-focus-visible:grayscale-0"
                              />
                            </span>
                          </button>
                        </figure>
                      );
                    })}
                </motion.li>
                );
              })}
            </ol>
          </Reveal>

          <Reveal
            delay={0.12}
            className="md:col-span-5"
            data-testid="education-block"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.28em] text-ink-soft mb-8">
              Education
            </h3>
            <div className="bg-bone-200/60 px-5 py-6 md:px-6 md:py-7">
              <ol className="space-y-10 list-none">
                {EDUCATION.map((ed, idx) => (
                  <motion.li
                    key={`${ed.school}-${ed.degree}`}
                    {...scrollEnter(reduce, idx * 0.07)}
                    viewport={REVEAL_VIEWPORT}
                  >
                    <h4 className="font-serif text-xl md:text-2xl text-ink tracking-tight leading-snug">
                      {ed.degree}
                    </h4>
                    <p className="font-mono text-sm text-ink mt-2">
                      {ed.school}
                    </p>
                    {ed.tags?.length > 0 && (
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {ed.tags.map((tag) => (
                          <li
                            key={tag}
                            className="font-mono text-xs tracking-[0.04em] text-ink border border-ink/20 bg-bone px-2.5 py-1"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft mt-3">
                      {ed.period}
                    </p>
                  </motion.li>
                ))}
              </ol>

              <div className="mt-10 pt-6 border-t border-ink/10">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-mute mb-3">
                  {PROFILE.practiceAside.title}
                </p>
                <p className="font-mono text-sm text-ink-soft leading-relaxed">
                  {PROFILE.practiceAside.text}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <ProjectLightbox
        project={proofShot}
        onClose={() => setProofShot(null)}
      />
    </section>
  );
};

export default CVSection;
