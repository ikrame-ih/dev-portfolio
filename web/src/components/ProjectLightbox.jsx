import { useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MOTION_EASE } from "@/lib/motion";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { useModalIsolation } from "@/lib/useModalIsolation";

const LIGHTBOX_SPRING = {
  type: "spring",
  stiffness: 260,
  damping: 32,
  mass: 0.85,
};

/**
 * Fullscreen project shot — shared-element expand via layoutId (Framer pattern).
 */
export const ProjectLightbox = ({ project, onClose }) => {
  const panelRef = useRef(null);
  const reduce = useReducedMotion();
  const open = Boolean(project);

  useFocusTrap(open, panelRef, onClose);
  useModalIsolation(open);

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          key={`lightbox-bg-${project.id}`}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.4, ease: MOTION_EASE }}
          data-testid="project-lightbox"
          data-cursor-on-dark=""
          className="fixed inset-0 z-[95] flex items-center justify-center p-4 md:p-10 bg-ink/75 backdrop-blur-md"
          onClick={onClose}
        >
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} preview`}
            className="relative w-full max-w-5xl outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              data-testid="project-lightbox-close"
              onClick={onClose}
              aria-label="Close preview"
              className="btn-tactile absolute -top-1 right-0 z-10 min-h-11 px-3 font-mono text-xs uppercase tracking-[0.18em] text-[#F5F1EB] hover:text-white md:-top-12 md:right-0"
            >
              close ✕
            </button>

            <motion.img
              layoutId={reduce ? undefined : `project-shot-${project.id}`}
              src={project.image}
              alt={project.imageAlt}
              data-cursor-on-light=""
              className="w-full h-auto max-h-[82vh] object-contain bg-bone border border-[#F5F1EB]/20"
              transition={LIGHTBOX_SPRING}
            />
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-[#F5F1EB] text-center">
              {project.name}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default ProjectLightbox;
