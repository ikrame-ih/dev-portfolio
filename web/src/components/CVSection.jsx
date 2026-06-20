import { motion } from "framer-motion";
import { Bow } from "./Bow";
import Reveal, { REVEAL_VIEWPORT, revealTransition } from "./Reveal";
import { EXPERIENCE, EDUCATION, LANGUAGES, PROFILE, STACK } from "@/data/portfolio";
import { StackIcon } from "@/data/stackIcons";

const SectionHeader = ({ overline, title, kicker }) => (
  <div className="mb-16">
    <div className="flex items-center gap-3 mb-6">
      <Bow size={14} />
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft">{overline}</span>
    </div>
    <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tighter text-ink max-w-3xl">
      {title}
    </h2>
    {kicker && <p className="mt-4 font-mono text-xs text-ink-mute max-w-xl">{kicker}</p>}
  </div>
);

const TrackBadge = ({ track }) => {
  const map = {
    tech: { label: "tech", cls: "border-burgundy text-burgundy" },
    hybrid: { label: "tech × biz", cls: "border-ink text-ink" },
    biz: { label: "biz / ops", cls: "border-ink/40 text-ink-soft" },
  };
  const m = map[track] || map.tech;
  return (
    <span
      className={`inline-block font-mono text-[9px] uppercase tracking-[0.2em] border ${m.cls} px-2 py-0.5`}
    >
      {m.label}
    </span>
  );
};

export const CVSection = () => {
  return (
    <section id="cv" data-testid="cv-section" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <SectionHeader
            overline="01 · background & skills"
            title={
              <>
                Skills, roles, and <em className="not-italic text-burgundy">education</em>.
              </>
            }
            kicker="Stack, languages, and the roles behind my work as a web developer."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-24">
          <Reveal delay={0.05} className="md:col-span-6 border-l border-burgundy pl-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-burgundy mb-4">
              Frontend craft
            </p>
            <ul
              className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-sm text-ink"
              data-testid="stack-frontend"
            >
              {STACK.frontend.map((s) => (
                <li
                  key={s}
                  className="inline-flex items-center gap-1.5 border border-bone-400 px-2 py-1 hover:border-burgundy transition-colors"
                >
                  <StackIcon name={s} />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-6 border-l border-ink pl-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink mb-4">
              Backend &amp; data
            </p>
            <ul
              className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-sm text-ink"
              data-testid="stack-backend"
            >
              {STACK.backend.map((s) => (
                <li
                  key={s}
                  className="inline-flex items-center gap-1.5 border border-bone-400 px-2 py-1 hover:border-burgundy transition-colors"
                >
                  <StackIcon name={s} />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal
            delay={0.15}
            className="md:col-span-12 border-t border-bone-400 pt-8 md:pt-10"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft mb-4">
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
                  <span className="text-[10px] uppercase tracking-[0.18em] text-ink-mute">
                    {l.detail ? `${l.level} · ${l.detail}` : l.level}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <Reveal delay={0.05} className="md:col-span-7" data-testid="experience-timeline">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft mb-8">
              Experience
            </p>
            <ol className="relative">
              {EXPERIENCE.map((exp, idx) => (
                <motion.li
                  key={`${exp.company}-${exp.period}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={REVEAL_VIEWPORT}
                  transition={revealTransition(idx * 0.08)}
                  className="relative pl-10 pb-12 border-l border-bone-400 last:border-transparent"
                >
                  <div className="absolute -left-[9px] top-1.5">
                    <Bow size={18} />
                  </div>
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <h3 className="font-serif text-xl md:text-2xl text-ink">{exp.role}</h3>
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

          <Reveal delay={0.12} className="md:col-span-5" data-testid="education-block">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft mb-8">
              Education
            </p>
            <ul className="space-y-8">
              {EDUCATION.map((ed, idx) => (
                <motion.li
                  key={`${ed.school}-${ed.degree}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={REVEAL_VIEWPORT}
                  transition={revealTransition(idx * 0.06)}
                  className="border-t border-bone-400 pt-4"
                >
                  <h4 className="font-serif text-lg text-ink">{ed.degree}</h4>
                  <p className="font-mono text-xs text-ink-soft mt-1">{ed.school}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-burgundy mt-2">
                    {ed.period}
                  </p>
                </motion.li>
              ))}
            </ul>

            <div className="mt-12 border border-ink/20 p-6 bg-bone-200">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-burgundy mb-3">
                {PROFILE.practiceAside.title}
              </p>
              <p className="font-mono text-sm text-ink leading-relaxed">
                {PROFILE.practiceAside.text}
              </p>
            </div>

            <button
              type="button"
              data-testid="cv-download-link"
              onClick={() => window.print()}
              className="mt-10 inline-block font-mono text-xs uppercase tracking-[0.18em] bg-burgundy text-[#F5F1EB] px-6 py-3 hover:bg-ink transition-colors"
            >
              Export CV (print) ↓
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
