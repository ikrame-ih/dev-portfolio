import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal, { REVEAL_VIEWPORT, revealTransition } from "./Reveal";
import SectionOverline from "./SectionOverline";
import ArchitectureModal from "./ArchitectureModal";
import { PROJECTS } from "@/data/portfolio";
import { CTA_SPRING } from "@/lib/motion";
import { Bow } from "./Bow";

export const ProjectsSection = () => {
  const [openProject, setOpenProject] = useState(null);
  const reduce = useReducedMotion();

  return (
    <section
      id="projects"
      tabIndex={-1}
      data-testid="projects-section"
      className="relative py-24 md:py-32 bg-bone-200 outline-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="mb-16 max-w-3xl">
          <SectionOverline>02 · selected work</SectionOverline>
          <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tighter text-ink">
            Selected projects
            <br />
            <em className="not-italic text-burgundy">with architecture notes.</em>
          </h2>
          <p className="mt-4 font-mono text-xs text-ink-mute max-w-xl">
            Each project links to its repo, live demo when available, and an
            architecture diagram.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {PROJECTS.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={REVEAL_VIEWPORT}
              transition={revealTransition(idx * 0.1)}
              data-testid={`project-card-${p.id}`}
              className="group border border-ink/15 bg-bone hover:border-burgundy transition-colors duration-500 p-6 md:p-10 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-burgundy mb-2">
                    Project · 0{idx + 1}
                    {p.badge ? ` · ${p.badge}` : p.href ? "" : " · in progress"}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-ink group-hover:text-burgundy transition-colors duration-500">
                    {p.name}
                  </h3>
                  <p className="font-mono text-xs text-ink-soft mt-1">
                    {p.subtitle}
                  </p>
                </div>
                <span className="bow-hover-tilt inline-block transition-transform duration-500 group-hover:scale-110">
                  <Bow size={28} />
                </span>
              </div>

              <p className="font-mono text-sm text-ink-soft leading-relaxed mb-6">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs uppercase tracking-[0.15em] border border-bone-400 px-2 py-1 text-ink-soft"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-4 pt-4 border-t border-bone-400">
                <motion.button
                  type="button"
                  data-testid={`project-arch-${p.id}`}
                  onClick={() => setOpenProject(p)}
                  className="btn-tactile font-mono text-xs uppercase tracking-[0.18em] bg-burgundy text-[#F5F1EB] px-4 py-2 hover:bg-ink transition-colors"
                  whileHover={reduce ? undefined : { y: -2, scale: 1.02 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                  transition={CTA_SPRING}
                >
                  Architecture →
                </motion.button>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lnk font-mono text-xs uppercase tracking-[0.18em] text-ink-soft"
                  >
                    GitHub ↗
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lnk font-mono text-xs uppercase tracking-[0.18em] text-ink-soft"
                  >
                    Demo ↗
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ArchitectureModal
        project={openProject}
        onClose={() => setOpenProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;
