export const DomainGlyph = ({ id, className = "w-5 h-5 text-burgundy" }) => {
  const common = {
    viewBox: "0 0 24 24",
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    focusable: false,
  };

  if (id === "frontend") {
    return (
      <svg {...common}>
        <rect x="3.5" y="5" width="17" height="14" rx="1.5" />
        <path d="M3.5 9h17" />
        <circle cx="6.2" cy="7" r="0.7" fill="currentColor" stroke="none" />
        <circle cx="8.4" cy="7" r="0.7" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (id === "backend") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="6" rx="1" />
        <rect x="4" y="14" width="16" height="6" rx="1" />
        <circle cx="7.5" cy="7" r="0.8" fill="currentColor" stroke="none" />
        <circle cx="7.5" cy="17" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (id === "ai") {
    return (
      <svg {...common}>
        {/* Node graph — reads as ML / distributed data at small sizes */}
        <circle cx="12" cy="5.2" r="1.9" />
        <circle cx="5.2" cy="16.5" r="1.9" />
        <circle cx="18.8" cy="16.5" r="1.9" />
        <circle cx="12" cy="12" r="1.55" fill="currentColor" stroke="none" />
        <path d="M12 7.1v3.1M10.7 13.1 6.6 15.4M13.3 13.1l4.1 2.3" />
      </svg>
    );
  }
  if (id === "tooling") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6 6l1.55 1.55M16.45 16.45 18 18M18 6l-1.55 1.55M7.55 16.45 6 18" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M3.8 12h16.4M12 3.8c2.4 2.4 3.6 5.1 3.6 8.2s-1.2 5.8-3.6 8.2c-2.4-2.4-3.6-5.1-3.6-8.2s1.2-5.8 3.6-8.2Z" />
    </svg>
  );
};
