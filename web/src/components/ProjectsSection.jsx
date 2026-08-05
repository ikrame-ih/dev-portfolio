import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  LayoutGroup,
} from "framer-motion";
import Reveal, { REVEAL_VIEWPORT } from "./Reveal";
import SectionOverline from "./SectionOverline";
import ArchitectureModal from "./ArchitectureModal";
import ProjectLightbox from "./ProjectLightbox";
import { CTA_SPRING, MOTION_EASE, MOTION_DURATION } from "@/lib/motion";
import { Bow } from "./Bow";
import { useContent, useUi } from "@/i18n/LocaleContext";

/** Capture frame is 16:9 — export mockups at 1920×1080. */
export const PROJECT_SHOT_SIZE = { width: 1920, height: 1080, ratio: "16:9" };

const STACK_PREVIEW = 4;

const LIGHTBOX_SPRING = {
  type: "spring",
  stiffness: 260,
  damping: 32,
  mass: 0.85,
};

const stripVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const mediaVariants = {
  hidden: { y: 22 },
  show: {
    y: 0,
    transition: { duration: MOTION_DURATION.reveal, ease: MOTION_EASE },
  },
};

const copyVariants = {
  hidden: { y: 16 },
  show: {
    y: 0,
    transition: { duration: MOTION_DURATION.normal, ease: MOTION_EASE },
  },
};

const shotImageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.03 },
};

const ProjectStrip = ({
  project: p,
  index: idx,
  reduce,
  onOpenArch,
  onOpenShot,
  section,
  opensNewTab,
}) => {
  const stripRef = useRef(null);
  const imageLeft = idx % 2 === 0;
  const stackPreview = p.stack.slice(0, STACK_PREVIEW);

  const { scrollYProgress } = useScroll({
    target: stripRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [10, -10],
  );

  return (
    <motion.article
      ref={stripRef}
      variants={reduce ? undefined : stripVariants}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={REVEAL_VIEWPORT}
      data-testid={`project-card-${p.id}`}
      className="group border-t border-ink/15 pt-10 md:pt-14 first:border-t-0 first:pt-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-center">
        <motion.div
          variants={reduce ? undefined : mediaVariants}
          className={`md:col-span-7 ${imageLeft ? "md:order-1" : "md:order-2"}`}
        >
          {p.image ? (
            <div className="project-shot-frame">
              <span className="project-shot-frame__corner project-shot-frame__corner--tl" aria-hidden />
              <span className="project-shot-frame__corner project-shot-frame__corner--tr" aria-hidden />
              <span className="project-shot-frame__corner project-shot-frame__corner--bl" aria-hidden />
              <span className="project-shot-frame__corner project-shot-frame__corner--br" aria-hidden />
              <motion.button
                type="button"
                data-testid={`project-shot-${p.id}`}
                aria-label={`View ${p.name} preview larger`}
                onClick={() => onOpenShot(p)}
                className="photo-frame project-shot aspect-video w-full bg-bone cursor-[var(--cursor-bow)] text-left"
                initial="rest"
                whileHover={reduce ? undefined : "hover"}
              >
                <motion.img
                  layoutId={reduce ? undefined : `project-shot-${p.id}`}
                  src={p.image}
                  alt={p.imageAlt}
                  width={PROJECT_SHOT_SIZE.width}
                  height={PROJECT_SHOT_SIZE.height}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover will-change-transform pointer-events-none"
                  style={reduce ? undefined : { y: parallaxY }}
                  variants={reduce ? undefined : shotImageVariants}
                  transition={LIGHTBOX_SPRING}
                />
              </motion.button>
            </div>
          ) : (
            <div
              data-testid={`project-shot-pending-${p.id}`}
              className="project-shot-frame project-shot-frame--pending"
              role="img"
              aria-label={`${p.name} preview coming soon`}
            >
              <span className="project-shot-frame__corner project-shot-frame__corner--tl" aria-hidden />
              <span className="project-shot-frame__corner project-shot-frame__corner--tr" aria-hidden />
              <span className="project-shot-frame__corner project-shot-frame__corner--bl" aria-hidden />
              <span className="project-shot-frame__corner project-shot-frame__corner--br" aria-hidden />
              <div className="aspect-video w-full bg-bone-200/60 flex flex-col items-center justify-center gap-4 px-6 text-center">
                <Bow size={28} />
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-ink">
                    {section.inProgress}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.22em] text-ink-mute">
                    {section.comingSoon}
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          variants={reduce ? undefined : copyVariants}
          className={`md:col-span-5 flex flex-col min-w-0 ${
            imageLeft ? "md:order-2" : "md:order-1"
          }`}
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="min-w-0">
              {(p.badge || !p.href) && (
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-burgundy mb-2">
                  {p.badge || "in progress"}
                </p>
              )}
              <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-ink group-hover:text-burgundy transition-colors duration-500">
                <motion.span
                  layoutId={reduce ? undefined : `project-title-${p.id}`}
                  className="inline-block"
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 34,
                    mass: 0.9,
                  }}
                >
                  {p.name}
                </motion.span>
              </h3>
              <p className="font-mono text-xs text-ink-soft mt-1">{p.subtitle}</p>
            </div>
            <span className="bow-hover-tilt inline-block shrink-0 transition-transform duration-500 group-hover:scale-110">
              <Bow size={22} />
            </span>
          </div>

          <p className="font-mono text-sm text-ink-soft leading-relaxed mb-5">
            {p.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {stackPreview.map((s) => (
              <span
                key={s}
                className="font-mono text-xs uppercase tracking-[0.15em] border border-bone-400 px-2 py-1 text-ink-soft"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 pt-4 border-t border-bone-400">
            <motion.button
              type="button"
              data-testid={`project-arch-${p.id}`}
              onClick={() => onOpenArch(p)}
              className="btn-tactile w-full sm:w-auto min-h-11 inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.18em] bg-burgundy text-[#F5F1EB] px-4 py-2 hover:bg-ink transition-colors"
              whileHover={reduce ? undefined : { y: -2, scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={CTA_SPRING}
            >
              {section.howItWorks}
            </motion.button>
            {p.href && (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="lnk min-h-11 inline-flex items-center font-mono text-xs uppercase tracking-[0.18em] text-ink-soft"
              >
                {section.github}
                <span className="sr-only">{opensNewTab}</span>
              </a>
            )}
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="lnk min-h-11 inline-flex items-center font-mono text-xs uppercase tracking-[0.18em] text-ink-soft"
              >
                {section.demo}
                <span className="sr-only">{opensNewTab}</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};

export const ProjectsSection = () => {
  const [openProject, setOpenProject] = useState(null);
  const [lightboxProject, setLightboxProject] = useState(null);
  const reduce = useReducedMotion();
  const { PROJECTS, section } = useContent();
  const ui = useUi();

  return (
    <section
      id="projects"
      tabIndex={-1}
      data-testid="projects-section"
      className="relative py-16 sm:py-20 md:py-32 bg-bone-200 outline-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal className="mb-10 md:mb-16 max-w-3xl">
          <SectionOverline>{section.projectsOverline}</SectionOverline>
          <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tighter text-ink">
            {section.projectsTitleBefore}
            <br />
            <em className="not-italic text-burgundy">
              {section.projectsTitleAccent}
            </em>
          </h2>
          <p className="mt-4 font-mono text-xs text-ink-mute max-w-xl">
            {section.projectsKicker}
          </p>
        </Reveal>

        <LayoutGroup id="projects-layout">
          <div className="flex flex-col gap-14 md:gap-20">
            {PROJECTS.map((p, idx) => (
              <ProjectStrip
                key={p.id}
                project={p}
                index={idx}
                reduce={reduce}
                onOpenArch={setOpenProject}
                onOpenShot={setLightboxProject}
                section={section}
                opensNewTab={ui.hero.opensNewTab}
              />
            ))}
          </div>

          <ArchitectureModal
            project={openProject}
            onClose={() => setOpenProject(null)}
          />
          <ProjectLightbox
            project={lightboxProject}
            onClose={() => setLightboxProject(null)}
          />
        </LayoutGroup>
      </div>
    </section>
  );
};

export default ProjectsSection;
