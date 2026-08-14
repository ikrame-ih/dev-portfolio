import { useEffect, useState, lazy, Suspense, useCallback } from "react";
import { Toaster } from "sonner";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import { scrollToElement } from "@/lib/scroll";
import { useContent, useUi } from "@/i18n/LocaleContext";

const CVSection = lazy(() => import("@/components/CVSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const LinkedInSection = lazy(() => import("@/components/LinkedInSection"));
const BentoSection = lazy(() => import("@/components/BentoSection"));
const GuestbookCanvas = lazy(() => import("@/components/GuestbookCanvas"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));
const CLITerminal = lazy(() => import("@/components/CLITerminal"));
const BowCursor = lazy(() => import("@/components/BowCursor"));

const HASH_ALIASES = {
  blog: "linkedin",
  vault: "linkedin",
};

/** Mounts below-the-fold sections; signals when the chunk tree is ready. */
function BelowFold({ onReady }) {
  useEffect(() => {
    onReady();
  }, [onReady]);

  return (
    <>
      <CVSection />
      <ProjectsSection />
      <LinkedInSection />
      <BentoSection />
      <GuestbookCanvas />
      <ContactSection />
    </>
  );
}

export default function App() {
  const [cliOpen, setCliOpen] = useState(false);
  const [belowReady, setBelowReady] = useState(false);
  const [cursorOn, setCursorOn] = useState(false);
  const { PROFILE } = useContent();
  const ui = useUi();
  const markBelowReady = useCallback(() => {
    setBelowReady(true);
    window.requestAnimationFrame(() => {
      window.dispatchEvent(new Event("resize"));
    });
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return undefined;
    let idleId = 0;
    let timeoutId = 0;
    const start = () => setCursorOn(true);
    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(start, { timeout: 2500 });
    } else {
      timeoutId = window.setTimeout(start, 800);
    }
    return () => {
      if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const typingTarget = (el) => {
      if (!(el instanceof Element)) return false;
      return Boolean(
        el.closest(
          'input, textarea, select, [contenteditable="true"], [role="textbox"]',
        ),
      );
    };

    const onKey = (e) => {
      if (e.repeat || e.ctrlKey || e.metaKey) return;
      if (typingTarget(e.target)) return;
      // Physical T key — reliable across ES/EN layouts (e.key alone can be flaky).
      if (e.code !== "KeyT") return;
      e.preventDefault();
      setCliOpen((open) => !open);
    };

    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, []);

  useEffect(() => {
    const goHash = () => {
      let id = window.location.hash.slice(1);
      if (HASH_ALIASES[id]) {
        id = HASH_ALIASES[id];
        const url = `${window.location.pathname}${window.location.search}#${id}`;
        window.history.replaceState(null, "", url);
      }
      if (id && id !== "main-content" && belowReady) scrollToElement(id);
    };
    if (window.location.hash) {
      window.requestAnimationFrame(goHash);
    }
    window.addEventListener("hashchange", goHash);
    return () => window.removeEventListener("hashchange", goHash);
  }, [belowReady]);

  const schema = {
    // Structured data for search engines — description mirrors PROFILE.heroSubtext.
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    email: `mailto:${PROFILE.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Málaga",
      addressCountry: "ES",
    },
    jobTitle: ui.jobTitle,
    description: PROFILE.heroSubtext,
    knowsLanguage: ["en", "es", "ar"],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    url: PROFILE.siteUrl,
    sameAs: [PROFILE.github, PROFILE.linkedin],
  };

  return (
    <div className="App grain relative bg-bone min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <a href="#main-content" className="skip-link">
        {ui.skip}
      </a>

      <div id="app-shell">
        <Nav onOpenTerminal={() => setCliOpen(true)} />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <Suspense
            fallback={<div className="min-h-[70vh]" aria-hidden="true" />}
          >
            <BelowFold onReady={markBelowReady} />
          </Suspense>
        </main>
        {belowReady ? (
          <Suspense fallback={null}>
            <Footer onOpenTerminal={() => setCliOpen(true)} />
          </Suspense>
        ) : null}
      </div>

      {cliOpen ? (
        <Suspense fallback={null}>
          <CLITerminal open onClose={() => setCliOpen(false)} />
        </Suspense>
      ) : null}
      {cursorOn ? (
        <Suspense fallback={null}>
          <BowCursor />
        </Suspense>
      ) : null}
      <Toaster
        theme="light"
        toastOptions={{
          style: {
            background: "#F5F1EB",
            color: "#1A1A1A",
            border: "1px solid #4A0E0E",
            borderRadius: 0,
            fontFamily: "JetBrainsMono, ui-monospace, monospace",
            fontSize: 12,
          },
        }}
      />
    </div>
  );
}
