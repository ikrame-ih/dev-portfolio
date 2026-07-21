import { useRef, lazy, Suspense } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MOTION_EASE, MOTION_DURATION } from "@/lib/motion";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { useModalIsolation } from "@/lib/useModalIsolation";

const MermaidDiagram = lazy(() => import("./MermaidDiagram"));

const DiagramFallback = () => (
  <p className="font-mono text-xs text-ink-mute py-8 text-center">
    Loading diagram…
  </p>
);

export const ArchitectureModal = ({ project, onClose }) => {
  const panelRef = useRef(null);
  const reduce = useReducedMotion();
  const summaryId = project ? `arch-summary-${project.id}` : undefined;

  useFocusTrap(!!project, panelRef, onClose);
  useModalIsolation(!!project);

  const panelMotion = reduce
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : {
        initial: { y: 24, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 24, opacity: 0 },
        transition: { duration: MOTION_DURATION.normal, ease: MOTION_EASE },
      };

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: MOTION_DURATION.fast }}
          data-testid="arch-modal-backdrop"
          className="fixed inset-0 z-[90] bg-ink/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            {...panelMotion}
            onClick={(e) => e.stopPropagation()}
            data-testid="arch-modal"
            className="w-full max-w-3xl bg-bone border border-ink p-6 md:p-8 max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="arch-modal-title"
            aria-describedby={summaryId}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h2
                  id="arch-modal-title"
                  className="font-serif font-light text-2xl text-ink"
                >
                  {project.name} · Architecture
                </h2>
                <p className="font-mono text-xs text-ink-soft mt-1">
                  Live diagram · rendered with Mermaid.js
                </p>
              </div>
              <button
                type="button"
                data-testid="arch-modal-close"
                onClick={onClose}
                aria-label="Close architecture dialog"
                className="btn-tactile font-mono text-xs uppercase tracking-[0.18em] text-ink-soft hover:text-burgundy"
              >
                close ✕
              </button>
            </div>

            {project.architectureSummary && (
              <p
                id={summaryId}
                className="mb-5 font-mono text-sm text-ink leading-relaxed"
              >
                {project.architectureSummary}
              </p>
            )}

            <figure className="border border-bone-400 p-4 bg-bone-100">
              <Suspense fallback={<DiagramFallback />}>
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
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default ArchitectureModal;
