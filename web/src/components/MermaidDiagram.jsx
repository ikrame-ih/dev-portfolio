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
    // Larger base type — SVG was rendering at 13px then shrinking with the modal.
    fontSize: "18px",
  },
  flowchart: {
    htmlLabels: true,
    curve: "basis",
    padding: 18,
    nodeSpacing: 55,
    rankSpacing: 70,
    useMaxWidth: true,
  },
};

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
          svgEl.removeAttribute("height");
          svgEl.style.width = "100%";
          svgEl.style.height = "auto";
          svgEl.style.maxWidth = "100%";
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
      className="mermaid w-full overflow-x-auto"
      data-testid={`mermaid-${id}`}
      role="img"
      aria-label={label || "Architecture diagram"}
    />
  );
};

export default MermaidDiagram;
