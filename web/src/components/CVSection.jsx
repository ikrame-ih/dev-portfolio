import {
  motion,
  useReducedMotion,
} from "framer-motion";
import { useState } from "react";
import { Bow } from "./Bow";
import Reveal, { REVEAL_VIEWPORT, revealTransition } from "./Reveal";
import SectionOverline from "./SectionOverline";
import ProjectLightbox from "./ProjectLightbox";
import { StackIcon } from "@/data/stackIcons";
import { MOTION_EASE, scrollEnter } from "@/lib/motion";
import { useContent, useUi } from "@/i18n/LocaleContext";
import { DomainGlyph } from "./icons/DomainGlyph";

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
const TrackBadge = ({ track, tracks }) => {
  const map = {
    tech: { label: tracks.tech, cls: "border-burgundy text-burgundy" },
    hybrid: { label: tracks.hybrid, cls: "border-ink text-ink" },
    biz: { label: tracks.biz, cls: "border-ink/50 text-ink" },
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

const BrandMark = ({ name, index = 0, reduce }) => (
  <motion.li
    className="stack-mark w-[5.25rem] shrink-0 text-center sm:w-[5.75rem]"
    initial={reduce ? false : { y: 8 }}
    whileInView={reduce ? undefined : { y: 0 }}
    viewport={REVEAL_VIEWPORT}
    transition={revealTransition(Math.min(index * 0.03, 0.28))}
  >
    <span className="stack-mark-lift flex flex-col items-center gap-2.5">
      <motion.span
        className="stack-mark-icon inline-flex"
        initial={reduce ? false : { scale: 0.88, rotate: -5 }}
        whileInView={
          reduce ? undefined : { scale: [0.88, 1.08, 1], rotate: [-5, 3, 0] }
        }
        viewport={REVEAL_VIEWPORT}
        transition={{
          duration: 0.5,
          ease: MOTION_EASE,
          delay: Math.min(index * 0.03, 0.28) + 0.04,
        }}
      >
        <StackIcon
          name={name}
          className="h-7 w-7 shrink-0 text-burgundy md:h-8 md:w-8"
        />
      </motion.span>
      <span className="font-mono text-xs leading-snug tracking-[0.03em] text-ink">
        {name}
      </span>
    </span>
  </motion.li>
);

const BrandGrid = ({ items, testId, reduce }) => (
  <ul
    className="flex flex-wrap gap-x-5 gap-y-7 md:gap-x-7 md:gap-y-8"
    data-testid={testId}
  >
    {items.map((s, i) => (
      <BrandMark key={s} name={s} index={i} reduce={reduce} />
    ))}
  </ul>
);

// Full-width catalog row. Height follows the icon cloud, never a stretched 2×2 cell.
const SkillBand = ({ domain, children, testId }) => {
  const showIndex = /^\d+$/.test(String(domain.index ?? ""));

  return (
    <div data-testid={testId} className="border-t border-ink/25 pt-6 md:pt-8">
      <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-[minmax(0,15.5rem)_minmax(0,1fr)] md:gap-x-10 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-x-14">
        <div className="flex items-start gap-3 md:sticky md:top-24">
          <DomainGlyph
            id={domain.id}
            className="mt-1.5 h-6 w-6 shrink-0 text-burgundy"
          />
          <div className="min-w-0">
            {showIndex && (
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.28em] text-burgundy">
                {domain.index}
              </p>
            )}
            <h3 className="font-serif text-2xl tracking-tight text-ink md:text-3xl">
              {domain.title}
            </h3>
            <p className="mt-1.5 max-w-[16rem] font-mono text-xs leading-relaxed text-ink-mute">
              {domain.kicker}
            </p>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

const SkillGroup = ({ group, reduce }) => (
  <div>
    <p className="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-ink-mute">
      {group.label}
    </p>
    <BrandGrid items={group.items} reduce={reduce} />
  </div>
);

const layoutSkillGroups = (groups) => {
  const rows = [];
  for (let i = 0; i < groups.length; i += 1) {
    if (groups[i].pairWithNext && groups[i + 1]) {
      rows.push([groups[i], groups[i + 1]]);
      i += 1;
    } else {
      rows.push([groups[i]]);
    }
  }
  return rows;
};

const LanguagePlates = ({ languages, title, kicker }) => (
  <div data-testid="languages-list" className="border-t border-ink/25 pt-6 md:pt-8">
    <div className="grid grid-cols-1 items-start gap-7 md:grid-cols-[minmax(0,15.5rem)_minmax(0,1fr)] md:gap-x-10 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-x-14">
      <div className="flex items-start gap-3 md:sticky md:top-24">
        <DomainGlyph
          id="languages"
          className="mt-1.5 h-6 w-6 shrink-0 text-burgundy"
        />
        <div className="min-w-0">
          <h3 className="font-serif text-2xl tracking-tight text-ink md:text-3xl">
            {title}
          </h3>
          <p className="mt-1.5 max-w-[16rem] font-mono text-xs leading-relaxed text-ink-mute">
            {kicker}
          </p>
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-x-8">
        {languages.map((l) => (
          <li
            key={l.code}
            className="relative overflow-hidden border-t border-ink/15 pt-5"
          >
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-burgundy">
              {l.code}
            </p>
            <p className="mt-3 font-serif text-2xl tracking-tight text-ink md:text-[1.75rem]">
              {l.lang}
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.22em] text-ink">
              {l.level}
            </p>
            {l.detail ? (
              <p className="mt-1.5 font-mono text-xs leading-relaxed text-ink-mute">
                {l.detail}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const SkillsBlock = () => {
  const reduce = useReducedMotion();
  const { STACK, LANGUAGES, section } = useContent();

  return (
  <div className="mb-24 space-y-12 md:space-y-16">
    <div className="space-y-12 md:space-y-16">
      {STACK.domains.map((domain, idx) => (
        <Reveal key={domain.id} delay={0.04 + idx * 0.04}>
          <SkillBand domain={domain} testId={`stack-${domain.id}`}>
            <div className="space-y-9 md:space-y-11">
              {layoutSkillGroups(domain.groups).map((row) => {
                const paired = row.length === 2;
                return (
                  <div
                    key={row.map((g) => g.label).join("|")}
                    className={
                      paired
                        ? "grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-x-8"
                        : undefined
                    }
                  >
                    {row.map((group) => (
                      <SkillGroup
                        key={group.label}
                        group={group}
                        reduce={reduce}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          </SkillBand>
        </Reveal>
      ))}
    </div>

    <Reveal delay={0.22}>
      <LanguagePlates
        languages={LANGUAGES}
        title={section.languagesTitle}
        kicker={section.languagesKicker}
      />
    </Reveal>
  </div>
  );
};

export const CVSection = () => {
  const reduce = useReducedMotion();
  const [proofShot, setProofShot] = useState(null);
  const { EXPERIENCE, EDUCATION, PROFILE, section, tracks } = useContent();
  const ui = useUi();

  return (
    <section
      id="cv"
      tabIndex={-1}
      data-testid="cv-section"
      className="relative pt-16 md:pt-20 pb-24 md:pb-32 outline-none"
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-12">
        <Reveal>
          <SectionHeader
            overline={section.cvOverline}
            title={
              <>
                {section.cvTitleBefore}
                <em className="not-italic text-burgundy">
                  {section.cvTitleAccent}
                </em>
              </>
            }
            kicker={section.cvKicker}
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
              {section.experience}
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
                    <TrackBadge track={exp.track} tracks={tracks} />
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
                            aria-label={ui.viewProof.replace("{name}", proof.name)}
                            data-testid={`experience-proof-${proof.id}`}
                            className="group inline-flex max-w-[13.5rem] text-left outline-none focus-visible:ring-2 focus-visible:ring-burgundy/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
                          >
                            <span className="block overflow-hidden border border-ink/15 bg-bone-200">
                              <img
                                src={proof.image}
                                alt=""
                                loading="lazy"
                                decoding="async"
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
              {section.education}
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
