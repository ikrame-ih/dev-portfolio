import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  LayoutGroup,
} from "framer-motion";
import Reveal, { REVEAL_VIEWPORT } from "./Reveal";
import SectionOverline from "./SectionOverline";
import ArchitectureModal from "./ArchitectureModal";
import ProjectLightbox from "./ProjectLightbox";
import { CTA_SPRING, MOTION_EASE, MOTION_DURATION } from "@/lib/motion";
import { Bow } from "./Bow";
import { useContent, useUi } from "@/i18n/LocaleContext";
import {
  projectHash,
  projectIdFromHash,
  setLocationHash,
} from "@/lib/projectHash";

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

const demoLabel = (p, section) => {
  if (p.demoKind === "docs") return section.apiReference;
  if (p.demoKind === "package") return section.viewPackage;
  if (p.demoKind === "skill") return section.viewSkill;
  if (p.live) return section.live;
  return section.demo;
};

const ctaClass = {
  primary:
    "btn-tactile w-full sm:w-auto min-h-11 inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.18em] bg-burgundy text-[#F5F1EB] px-4 py-2 hover:bg-ink transition-colors",
  outline:
    "btn-tactile w-full sm:w-auto min-h-11 inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.18em] border border-ink/30 px-4 py-2 text-ink hover:border-burgundy hover:text-burgundy transition-colors",
  text: "lnk min-h-11 inline-flex items-center font-mono text-xs uppercase tracking-[0.18em] text-ink-soft",
};

const ProjectLinks = ({ p, reduce, onOpenArch, section, opensNewTab }) => (
  <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 pt-5">
    <motion.button
      type="button"
      data-testid={`project-arch-${p.id}`}
      onClick={(e) => onOpenArch(p, e.currentTarget)}
      className={ctaClass.primary}
      whileHover={reduce ? undefined : { y: -2, scale: 1.02 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={CTA_SPRING}
    >
      {section.howItWorks}
    </motion.button>
    {p.demo && (
      <a
        href={p.demo}
        target="_blank"
        rel="noopener noreferrer"
        className={ctaClass.outline}
      >
        {demoLabel(p, section)}
        <span className="sr-only">{opensNewTab}</span>
      </a>
    )}
    {p.href ? (
      <a
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        className={ctaClass.text}
      >
        {section.github}
        <span className="sr-only">{opensNewTab}</span>
      </a>
    ) : !p.demo && !p.badge ? (
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
        {section.privateNote}
      </span>
    ) : null}
  </div>
);

const shotMediaClass = "aspect-video w-full";

const ProjectShot = ({
  p,
  reduce,
  onOpenShot,
  viewPreview,
  previewComingSoon,
  section,
  parallaxOn,
  parallaxY,
}) => {
  if (!p.image) {
    const published = Boolean(p.href || p.demo);
    const pendingHeading =
      p.badge || (published ? section.shotPending : section.inProgress);
    return (
      <div
        data-testid={`project-shot-pending-${p.id}`}
        className="project-shot-frame project-shot-frame--pending"
        role="img"
        aria-label={previewComingSoon.replace("{name}", p.name)}
      >
        <span className="project-shot-frame__corner project-shot-frame__corner--tl" aria-hidden />
        <span className="project-shot-frame__corner project-shot-frame__corner--tr" aria-hidden />
        <span className="project-shot-frame__corner project-shot-frame__corner--bl" aria-hidden />
        <span className="project-shot-frame__corner project-shot-frame__corner--br" aria-hidden />
        <div
          className={`${shotMediaClass} bg-bone-200/60 flex flex-col items-center justify-center gap-4 px-6 text-center`}
        >
          <Bow size={28} />
          <div>
            <p className="font-serif text-2xl md:text-3xl tracking-tight text-ink">
              {pendingHeading}
            </p>
            {!p.badge && !published ? (
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.22em] text-ink-mute">
                {section.comingSoon}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-shot-frame">
      <span className="project-shot-frame__corner project-shot-frame__corner--tl" aria-hidden />
      <span className="project-shot-frame__corner project-shot-frame__corner--tr" aria-hidden />
      <span className="project-shot-frame__corner project-shot-frame__corner--bl" aria-hidden />
      <span className="project-shot-frame__corner project-shot-frame__corner--br" aria-hidden />
      <motion.button
        type="button"
        data-testid={`project-shot-${p.id}`}
        aria-label={viewPreview.replace("{name}", p.name)}
        onClick={() => onOpenShot(p)}
        className={`photo-frame project-shot ${shotMediaClass} bg-bone cursor-[var(--cursor-bow)] text-left`}
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
          className={`h-full w-full object-cover pointer-events-none ${
            parallaxOn ? "will-change-transform" : ""
          }`}
          style={reduce || !parallaxOn ? undefined : { y: parallaxY }}
          variants={reduce ? undefined : shotImageVariants}
          transition={LIGHTBOX_SPRING}
        />
      </motion.button>
    </div>
  );
};

const ProjectStrip = ({
  project: p,
  reduce,
  onOpenArch,
  onOpenShot,
  section,
  opensNewTab,
  viewPreview,
  previewComingSoon,
  mediaOnLeft = false,
}) => {
  const stackPreview = p.stack.slice(0, STACK_PREVIEW);

  return (
    <motion.article
      id={`project-${p.id}`}
      variants={reduce ? undefined : stripVariants}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={REVEAL_VIEWPORT}
      data-testid={`project-card-${p.id}`}
      className="group border-t border-ink/15 pt-8 md:pt-12 first:border-t-0 first:pt-0"
    >
      <div className="grid items-center gap-6 md:grid-cols-12 md:gap-x-10 lg:gap-x-12">
      <motion.div
        variants={reduce ? undefined : mediaVariants}
        className={`min-w-0 md:col-span-7 ${
          mediaOnLeft ? "md:order-1" : "md:order-2"
        }`}
      >
        <ProjectShot
          p={p}
          reduce={reduce}
          onOpenShot={onOpenShot}
          viewPreview={viewPreview}
          previewComingSoon={previewComingSoon}
          section={section}
          parallaxOn={false}
          parallaxY={0}
        />
      </motion.div>

      <motion.div
        variants={reduce ? undefined : copyVariants}
        className={`min-w-0 md:col-span-5 ${
          mediaOnLeft ? "md:order-2" : "md:order-1"
        }`}
      >
        {(p.badge || (!p.href && !p.demo)) && (
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-burgundy">
            {p.badge || section.inProgress}
          </p>
        )}
        <h4 className="font-serif text-2xl tracking-tight text-ink transition-colors duration-500 group-hover:text-burgundy md:text-[1.75rem] md:leading-tight">
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
        </h4>
        <p className="mt-1 font-mono text-xs text-ink-soft">{p.subtitle}</p>
        <p className="mt-3 text-[0.95rem] leading-[1.55] text-ink-soft">
          {p.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stackPreview.map((s) => (
            <span
              key={s}
              className="border border-bone-400 px-2 py-1 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft"
            >
              {s}
            </span>
          ))}
        </div>
        <ProjectLinks
          p={p}
          reduce={reduce}
          onOpenArch={onOpenArch}
          section={section}
          opensNewTab={opensNewTab}
        />
      </motion.div>
      </div>
    </motion.article>
  );
};

const LaneBlock = ({ id, label, className = "", children }) => (
  <div className={className} aria-labelledby={id}>
    <h3
      id={id}
      className="mb-8 font-mono text-xs uppercase tracking-[0.22em] text-ink-mute"
    >
      {label}
    </h3>
    {children}
  </div>
);

const CompactProject = ({
  project: p,
  reduce,
  onOpenArch,
  onOpenShot,
  section,
  opensNewTab,
  viewPreview,
  previewComingSoon,
}) => (
  <article
    id={`project-${p.id}`}
    data-testid={`project-card-${p.id}`}
    className="flex flex-col"
  >
    <ProjectShot
      p={p}
      reduce={reduce}
      onOpenShot={onOpenShot}
      viewPreview={viewPreview}
      previewComingSoon={previewComingSoon}
      section={section}
      parallaxOn={false}
      parallaxY={0}
    />
    <div className="flex flex-1 flex-col border border-t-0 border-ink/15 p-5 md:p-6">
      {(p.badge || (!p.href && !p.demo)) && (
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-burgundy">
          {p.badge || section.inProgress}
        </p>
      )}
      <h4 className="font-serif text-xl tracking-tight text-ink md:text-2xl">
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
      </h4>
      <p className="mt-1 font-mono text-xs text-ink-soft">{p.subtitle}</p>
      <p className="mt-3 flex-1 text-[0.95rem] leading-[1.55] text-ink-soft">
        {p.description}
      </p>
      {p.stack?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack.slice(0, STACK_PREVIEW).map((s) => (
            <span
              key={s}
              className="border border-bone-400 px-2 py-1 font-mono text-xs uppercase tracking-[0.15em] text-ink-soft"
            >
              {s}
            </span>
          ))}
        </div>
      ) : null}
      <ProjectLinks
        p={p}
        reduce={reduce}
        onOpenArch={onOpenArch}
        section={section}
        opensNewTab={opensNewTab}
      />
    </div>
  </article>
);

export const ProjectsSection = () => {
  const [openProject, setOpenProject] = useState(null);
  const [lightboxProject, setLightboxProject] = useState(null);
  const reduce = useReducedMotion();
  const { PROJECTS, section } = useContent();
  const ui = useUi();
  const lastTriggerRef = useRef(null);

  const openArch = (p, trigger) => {
    lastTriggerRef.current = trigger || document.activeElement;
    setOpenProject(p);
    setLocationHash(projectHash(p.id));
  };

  const closeArch = () => {
    setOpenProject(null);
    if (projectIdFromHash(window.location.hash)) {
      setLocationHash("projects");
    }
    const trigger = lastTriggerRef.current;
    if (trigger instanceof HTMLElement && document.contains(trigger)) {
      trigger.focus();
    }
  };

  useEffect(() => {
    const onOpen = (event) => {
      const id = event.detail?.id;
      const found = PROJECTS.find((p) => p.id === id);
      if (found) setOpenProject(found);
    };
    window.addEventListener("ik:open-project", onOpen);
    return () => window.removeEventListener("ik:open-project", onOpen);
  }, [PROJECTS]);

  const backends = PROJECTS.filter((p) => p.lane === "backend");
  const tools = PROJECTS.filter((p) => p.lane === "tools");
  const apps = PROJECTS.filter((p) => p.lane === "apps" || !p.lane);

  const compactProps = {
    reduce,
    onOpenArch: openArch,
    onOpenShot: setLightboxProject,
    section,
    opensNewTab: ui.hero.opensNewTab,
    viewPreview: ui.viewPreview,
    previewComingSoon: ui.previewComingSoon,
  };

  return (
    <section
      id="projects"
      tabIndex={-1}
      data-testid="projects-section"
      className="relative py-16 sm:py-20 md:py-32 bg-bone-200 outline-none"
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-12">
        <Reveal className="mb-10 md:mb-16 max-w-3xl">
          <SectionOverline>{section.projectsOverline}</SectionOverline>
          <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tighter text-ink">
            {section.projectsTitleBefore}
            <br />
            <em className="not-italic text-burgundy">
              {section.projectsTitleAccent}
            </em>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-[1.6] text-ink-mute">
            {section.projectsKicker}
          </p>
        </Reveal>

        <LayoutGroup id="projects-layout">
          {backends.length ? (
            <LaneBlock id="lane-backends" label={section.pythonLane}>
              <div className="flex flex-col gap-10 md:gap-14">
                {backends.map((p, i) => (
                  <ProjectStrip
                    key={p.id}
                    project={p}
                    mediaOnLeft={i % 2 === 1}
                    {...compactProps}
                  />
                ))}
              </div>
            </LaneBlock>
          ) : null}

          {tools.length ? (
            <LaneBlock
              id="lane-tools"
              label={section.toolsLane}
              className="mt-16 md:mt-20"
            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {tools.map((p) => (
                  <CompactProject key={p.id} project={p} {...compactProps} />
                ))}
              </div>
            </LaneBlock>
          ) : null}

          {apps.length ? (
            <LaneBlock
              id="lane-apps"
              label={section.appsLane}
              className="mt-16 md:mt-20"
            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {apps.map((p) => (
                  <CompactProject key={p.id} project={p} {...compactProps} />
                ))}
              </div>
            </LaneBlock>
          ) : null}

          <ArchitectureModal project={openProject} onClose={closeArch} />
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
