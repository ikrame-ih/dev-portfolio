import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bow } from "./Bow";
import Reveal, { REVEAL_VIEWPORT, revealTransition } from "./Reveal";
import ArchitectureModal from "./ArchitectureModal";
import { PROJECTS } from "@/data/portfolio";

export const ProjectsSection = () => {
  const [openProject, setOpenProject] = useState(null);
  const [expanded, setExpanded] = useState({});

  return (
    <section id="projects" data-testid="projects-section" className="relative py-24 md:py-32 bg-bone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Bow size={14} />
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-soft">
              02 · selected work
            </span>
          </div>
          <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tighter text-ink">
            Projects I have built
            <br />
            <em className="not-italic text-burgundy">and what I learned.</em>
          </h2>
          <p className="mt-4 font-mono text-xs text-ink-mute max-w-xl">
            Architecture diagrams and a quick read on what each project shows — how I think, not just
            what I shipped.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {PROJECTS.map((p, idx) => {
            const isExpanded = expanded[p.id];
            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={REVEAL_VIEWPORT}
                transition={revealTransition(idx * 0.1)}
                data-testid={`project-card-${p.id}`}
                className="border border-ink/15 bg-bone hover:border-burgundy transition-colors duration-500 p-6 md:p-10 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-burgundy mb-2">
                      Project · 0{idx + 1}
                      {p.href ? "" : " · in progress"}
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-ink">{p.name}</h3>
                    <p className="font-mono text-xs text-ink-soft mt-1">{p.subtitle}</p>
                  </div>
                  <Bow size={28} />
                </div>

                <p className="font-mono text-sm text-ink-soft leading-relaxed mb-6">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] uppercase tracking-[0.15em] border border-bone-400 px-2 py-1 text-ink-soft"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-4 pt-4 border-t border-bone-400">
                  <button
                    type="button"
                    data-testid={`project-arch-${p.id}`}
                    onClick={() => setOpenProject(p)}
                    className="font-mono text-xs uppercase tracking-[0.18em] bg-burgundy text-[#F5F1EB] px-4 py-2 hover:bg-ink transition-colors"
                  >
                    View architecture →
                  </button>
                  <button
                    type="button"
                    data-testid={`project-shows-toggle-${p.id}`}
                    onClick={() => setExpanded((prev) => ({ ...prev, [p.id]: !prev[p.id] }))}
                    className="lnk font-mono text-xs uppercase tracking-[0.18em] text-ink"
                  >
                    {isExpanded ? "Close summary" : "What it shows ↓"}
                  </button>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lnk font-mono text-xs uppercase tracking-[0.18em] text-ink-soft"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lnk font-mono text-xs uppercase tracking-[0.18em] text-ink-soft"
                    >
                      Live demo ↗
                    </a>
                  )}
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      data-testid={`project-shows-${p.id}`}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 border border-burgundy/30 p-5 font-mono text-xs space-y-3">
                        <p className="text-burgundy uppercase tracking-[0.2em]">{p.shows.title}</p>
                        <ul className="space-y-3 text-ink-soft leading-relaxed list-disc list-outside ml-4">
                          {p.shows.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>

      <ArchitectureModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
};

export default ProjectsSection;
