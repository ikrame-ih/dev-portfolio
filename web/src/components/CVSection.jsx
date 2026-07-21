import { motion, useReducedMotion } from "framer-motion";
import { Bow } from "./Bow";
import Reveal, { REVEAL_VIEWPORT, revealTransition } from "./Reveal";
import {
  EXPERIENCE,
  EDUCATION,
  LANGUAGES,
  PROFILE,
  STACK,
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

const StackChip = ({ name }) => (
  <li className="stack-chip inline-flex items-center gap-1.5 border border-bone-400 px-2 py-1 hover:border-burgundy transition-colors">
    <StackIcon name={name} />
    {name}
  </li>
);

const StackGroupColumn = ({
  title,
  groups,
  titleClass,
  borderClass,
  testId,
}) => (
  <div className={`border-l pl-6 ${borderClass}`}>
    <p
      className={`font-mono text-xs uppercase tracking-[0.28em] mb-5 ${titleClass}`}
    >
      {title}
    </p>
    <div className="space-y-5" data-testid={testId}>
      {groups.map((group) => (
        <div key={group.label}>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink-mute mb-2">
            {group.label}
          </p>
          <ul className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-sm text-ink">
            {group.items.map((s) => (
              <StackChip key={s} name={s} />
            ))}
          </ul>
        </div>
      ))}
    </div>
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-24">
          <Reveal delay={0.05} className="md:col-span-6">
            <StackGroupColumn
              title="Frontend"
              groups={STACK.frontend}
              titleClass="text-burgundy"
              borderClass="border-burgundy"
              testId="stack-frontend"
            />
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-6">
            <StackGroupColumn
              title="Backend & data"
              groups={STACK.backend}
              titleClass="text-ink"
              borderClass="border-ink"
              testId="stack-backend"
            />
          </Reveal>
          <Reveal
            delay={0.12}
            className="md:col-span-12 border-t border-bone-400 pt-8 md:pt-10"
          >
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-ink-soft mb-4">
              Tooling &amp; delivery
            </p>
            <ul
              className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-sm text-ink"
              data-testid="stack-tooling"
            >
              {STACK.tooling.map((s) => (
                <StackChip key={s} name={s} />
              ))}
            </ul>
          </Reveal>
          <Reveal
            delay={0.15}
            className="md:col-span-12 border-t border-bone-400 pt-8 md:pt-10"
          >
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-ink-soft mb-4">
              Languages
            </p>
            <ul
              className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-sm"
              data-testid="languages-list"
            >
              {LANGUAGES.map((l) => (
                <li
                  key={l.code}
                  className="inline-flex items-center gap-2 border border-bone-400 px-3 py-1.5 hover:border-burgundy transition-colors"
                >
                  <span className="text-ink">{l.lang}</span>
                  <span className="text-xs uppercase tracking-[0.18em] text-ink-mute">
                    {l.detail ? `${l.level} · ${l.detail}` : l.level}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

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
