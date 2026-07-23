import { useEffect, useRef } from "react";
import mermaid from "mermaid";

let initialized = false;

const MERMAID_THEME = {
  startOnLoad: false,
  securityLevel: "strict",
  theme: "base",
  themeVariables: {
    background: "#F5F1EB",
    primaryColor: "#F5F1EB",
    primaryTextColor: "#1A1A1A",
    primaryBorderColor: "#1A1A1A",
    lineColor: "#1A1A1A",
    tertiaryColor: "#EFEAE2",
    fontFamily: "JetBrains Mono, monospace",
    fontSize: "16px",
  },
  flowchart: {
    htmlLabels: true,
    curve: "basis",
    padding: 14,
    nodeSpacing: 40,
    rankSpacing: 50,
    useMaxWidth: false,
  },
};

/** Fit wide vs tall diagrams to a similar readable size in the modal. */
function sizeSvg(svgEl, containerWidth) {
  const vb = svgEl.viewBox?.baseVal;
  if (!vb?.width || !vb?.height) {
    svgEl.style.width = "100%";
    svgEl.style.height = "auto";
    svgEl.style.maxWidth = "100%";
    return;
  }

  const aspect = vb.width / vb.height;
  svgEl.removeAttribute("width");
  svgEl.removeAttribute("height");
  svgEl.setAttribute("preserveAspectRatio", "xMidYMid meet");

  // Wide LR charts: lock a readable height; scroll horizontally if needed.
  if (aspect >= 1.55) {
    const height = 260;
    svgEl.style.height = `${height}px`;
    svgEl.style.width = `${Math.round(height * aspect)}px`;
    svgEl.style.maxWidth = "none";
    return;
  }

  // Tall / balanced: fit to container, cap height so TD charts don't dominate.
  const maxHeight = 340;
  let width = Math.min(containerWidth, vb.width);
  let height = width / aspect;
  if (height > maxHeight) {
    height = maxHeight;
    width = height * aspect;
  }
  svgEl.style.width = `${Math.round(width)}px`;
  svgEl.style.height = `${Math.round(height)}px`;
  svgEl.style.maxWidth = "100%";
}

// Renders a Mermaid flowchart from the string defined in portfolio.js per project.
export const MermaidDiagram = ({ chart, id, label }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!initialized) {
      mermaid.initialize(MERMAID_THEME);
      initialized = true;
    }

    let cancelled = false;
    const render = async () => {
      try {
        const uid = `mmd-${id || Math.random().toString(36).slice(2)}`;
        const { svg } = await mermaid.render(uid, chart);
        if (cancelled || !ref.current) return;
        ref.current.innerHTML = svg;
        const svgEl = ref.current.querySelector("svg");
        if (svgEl) {
          sizeSvg(svgEl, ref.current.clientWidth || 720);
        }
      } catch (e) {
        if (ref.current) {
          ref.current.innerHTML = `<pre class="font-mono text-xs text-burgundy">Mermaid error: ${e.message}</pre>`;
        }
      }
    };
    render();
    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  return (
    <div
      ref={ref}
      className="mermaid w-full overflow-x-auto flex justify-center"
      data-testid={`mermaid-${id}`}
      role="img"
      aria-label={label || "Architecture diagram"}
    />
  );
};

export default MermaidDiagram;
