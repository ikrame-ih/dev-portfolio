/**
 * @file ArchitectureModal.jsx
 * @description Modal dialog that lazily loads and displays a Mermaid architecture 
 * diagram for a selected project, ensuring heavy parsing libraries only load when needed.
 */
import { useRef, lazy, Suspense } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MOTION_EASE } from "@/lib/motion";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { useModalIsolation } from "@/lib/useModalIsolation";
import { useUi } from "@/i18n/LocaleContext";

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
  const summaryId = project ? `arch-summary-${project.id}` : undefined;

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
                  className="font-serif font-light text-2xl text-ink flex flex-wrap items-baseline gap-x-2"
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
              {project.architectureSummary && (
                <p
                  id={summaryId}
                  className="mb-5 font-mono text-sm text-ink leading-relaxed"
                >
                  {project.architectureSummary}
                </p>
              )}

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
                    label={`${project.name} architecture diagram. ${project.architectureSummary || ""}`.trim()}
                  />
                </Suspense>
                <figcaption className="sr-only">
                  Visual flowchart for {project.name}. Text alternative:{" "}
                  {project.architectureSummary || project.description}
                </figcaption>
              </figure>

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
