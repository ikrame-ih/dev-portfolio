import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MermaidDiagram from "./MermaidDiagram";

export const ArchitectureModal = ({ project, onClose }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          data-testid="arch-modal-backdrop"
          className="fixed inset-0 z-[90] bg-ink/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            data-testid="arch-modal"
            className="w-full max-w-3xl bg-bone border border-ink p-6 md:p-8 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="font-serif font-light text-2xl text-ink">
                  {project.name} · Architecture
                </h3>
                <p className="font-mono text-xs text-ink-soft mt-1">
                  Live diagram · rendered with Mermaid.js
                </p>
              </div>
              <button
                type="button"
                data-testid="arch-modal-close"
                onClick={onClose}
                className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft hover:text-burgundy"
              >
                close ✕
              </button>
            </div>
            <div className="border border-bone-400 p-4 bg-bone-100">
              <MermaidDiagram chart={project.mermaid} id={project.id} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ArchitectureModal;
