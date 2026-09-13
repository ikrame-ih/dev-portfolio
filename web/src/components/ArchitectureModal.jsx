import { useRef, lazy, Suspense } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MOTION_EASE } from "@/lib/motion";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { useModalIsolation } from "@/lib/useModalIsolation";
import { useContent, useUi } from "@/i18n/LocaleContext";
import { ReconcileWalkthrough, ValidataWalkthrough } from "./ProjectProof";

const MermaidDiagram = lazy(() => import("./MermaidDiagram"));

/** Soft spring — slow settle, no snappy pop. */
const PANEL_SPRING = {
  type: "spring",
  stiffness: 220,
  damping: 30,
  mass: 0.95,
};

const TITLE_SPRING = {
  type: "spring",
  stiffness: 260,
  damping: 34,
  mass: 0.9,
};

export const ArchitectureModal = ({ project, onClose }) => {
  const panelRef = useRef(null);
  const reduce = useReducedMotion();
  const ui = useUi();
  const { section } = useContent();
  const summaryId = project ? `arch-summary-${project.id}` : undefined;
  const walkthrough =
    project?.proof === "reconcile"
      ? section.walkthrough?.reconcile
      : project?.proof === "validata"
        ? section.walkthrough?.validata
        : null;

  useFocusTrap(!!project, panelRef, onClose);
  useModalIsolation(!!project);

  const panelMotion = reduce
    ? { initial: false, animate: { opacity: 1, scale: 1 } }
    : {
        initial: { opacity: 0, scale: 0.96 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.98 },
        transition: PANEL_SPRING,
      };

  const bodyMotion = reduce
    ? { initial: false, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.55, ease: MOTION_EASE, delay: 0.2 },
      };

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.45, ease: MOTION_EASE }}
          data-testid="arch-modal-backdrop"
          data-cursor-on-dark=""
          className="fixed inset-0 z-[90] bg-ink/60 backdrop-blur-[6px] flex items-center justify-center p-4 md:p-10"
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            {...panelMotion}
            onClick={(e) => e.stopPropagation()}
            data-testid="arch-modal"
            data-cursor-on-light=""
            className="w-full max-w-5xl bg-bone border border-ink p-6 md:p-8 max-h-[90vh] overflow-y-auto origin-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="arch-modal-title"
            aria-describedby={summaryId}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="min-w-0">
                <h2
                  id="arch-modal-title"
                  tabIndex={-1}
                  data-initial-focus=""
                  className="font-serif font-light text-2xl text-ink flex flex-wrap items-baseline gap-x-2 outline-none"
                >
                  <motion.span
                    layoutId={
                      reduce ? undefined : `project-title-${project.id}`
                    }
                    className="inline-block"
                    transition={TITLE_SPRING}
                  >
                    {project.name}
                  </motion.span>
                  <span className="text-ink-soft">{ui.modal.howItWorks}</span>
                </h2>
                <p className="font-mono text-xs text-ink-soft mt-1">
                  {ui.modal.liveDiagram}
                </p>
              </div>
              <button
                type="button"
                data-testid="arch-modal-close"
                onClick={onClose}
                aria-label={ui.modal.closeDialog}
                className="btn-tactile font-mono text-xs uppercase tracking-[0.18em] text-ink-soft hover:text-burgundy shrink-0"
              >
                {ui.modal.closeBtn}
              </button>
            </div>

            <motion.div {...bodyMotion}>
              {project.status && (
                <p className="mb-3 font-mono text-xs leading-relaxed text-ink-mute">
                  {project.status}
                </p>
              )}
              {project.role && (
                <p className="mb-4 text-[0.95rem] leading-relaxed text-ink">
                  {project.roleLink ? (
                    <>
                      {project.roleBefore}
                      <a
                        href={project.roleLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lnk"
                      >
                        {project.roleLink.label}
                        <span className="sr-only">{ui.hero.opensNewTab}</span>
                      </a>
                      {project.roleAfter}
                    </>
                  ) : (
                    project.role
                  )}
                </p>
              )}
              {project.problem && (
                <p className="mb-3 text-[0.95rem] leading-relaxed text-ink">
                  {project.problem}
                </p>
              )}
              {project.decision && (
                <p className="mb-3 text-[0.95rem] leading-relaxed text-ink">
                  {project.decision}
                </p>
              )}
              {project.evidence && (
                <p className="mb-3 text-[0.95rem] leading-relaxed text-ink">
                  {project.evidence}
                </p>
              )}
              {project.limitations && (
                <p className="mb-5 text-[0.95rem] leading-relaxed text-ink-soft">
                  {project.limitations}
                </p>
              )}

              {project.proof === "reconcile" && walkthrough ? (
                <div className="mb-6">
                  <ReconcileWalkthrough copy={walkthrough} />
                </div>
              ) : null}
              {project.proof === "validata" && walkthrough ? (
                <div className="mb-6">
                  <ValidataWalkthrough copy={walkthrough} />
                </div>
              ) : null}

              {project.architectureSummary && (
                <p
                  id={summaryId}
                  className="mb-5 font-mono text-sm text-ink leading-relaxed"
                >
                  {project.architectureSummary}
                </p>
              )}

              {project.mermaid ? (
                <figure className="border border-bone-400 p-4 md:p-6 bg-bone-100">
                  <Suspense
                    fallback={
                      <p className="font-mono text-xs text-ink-mute py-8 text-center">
                        {ui.modal.loading}
                      </p>
                    }
                  >
                    <MermaidDiagram
                      chart={project.mermaid}
                      id={project.id}
                      label={`${ui.modal.architectureNamed.replace("{name}", project.name)}${project.architectureSummary ? `. ${project.architectureSummary}` : ""}`}
                    />
                  </Suspense>
                  <figcaption className="sr-only">
                    {ui.modal.flowchartAlt.replace("{name}", project.name)}{" "}
                    {project.architectureSummary || project.description}
                  </figcaption>
                </figure>
              ) : null}

              <p className="mt-5 font-mono text-xs text-ink-soft leading-relaxed border-t border-bone-400 pt-4">
                {project.description}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default ArchitectureModal;
