import { useEffect, useRef } from "react";
import mermaid from "mermaid";

let initialized = false;

// Renders a Mermaid flowchart from the string defined in portfolio.js per project.
export const MermaidDiagram = ({ chart, id }) => {
  const ref = useRef(null);

  useEffect(() => {
    // Mermaid only needs to be configured once — theme colours match the site palette.
    if (!initialized) {
      mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        themeVariables: {
          background: "#F5F1EB",
          primaryColor: "#F5F1EB",
          primaryTextColor: "#1A1A1A",
          primaryBorderColor: "#1A1A1A",
          lineColor: "#1A1A1A",
          tertiaryColor: "#EFEAE2",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "13px",
        },
      });
      initialized = true;
    }

    let cancelled = false;
    const render = async () => {
      try {
        const uid = `mmd-${id || Math.random().toString(36).slice(2)}`;
        const { svg } = await mermaid.render(uid, chart);
        if (!cancelled && ref.current) ref.current.innerHTML = svg;
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
    />
  );
};

export default MermaidDiagram;
