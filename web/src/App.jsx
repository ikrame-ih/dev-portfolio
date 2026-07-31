import { useEffect, useState } from "react";
import { Toaster } from "sonner";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BowCursor from "@/components/BowCursor";
import { scrollToElement } from "@/lib/scroll";
import { useContent, useUi } from "@/i18n/LocaleContext";
import { lazy, Suspense } from "react";

const CVSection = lazy(() => import("@/components/CVSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const BentoSection = lazy(() => import("@/components/BentoSection"));
const BlogSection = lazy(() => import("@/components/BlogSection"));
const GuestbookCanvas = lazy(() => import("@/components/GuestbookCanvas"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));
const CLITerminal = lazy(() => import("@/components/CLITerminal"));

export default function App() {
  const [cliOpen, setCliOpen] = useState(false);
  const { PROFILE } = useContent();
  const ui = useUi();

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
      const id = window.location.hash.slice(1);
      if (id && id !== "main-content") scrollToElement(id);
    };
    // Deep links / refresh with hash — wait a tick for layout.
    if (window.location.hash) {
      window.requestAnimationFrame(goHash);
    }
    window.addEventListener("hashchange", goHash);
    return () => window.removeEventListener("hashchange", goHash);
  }, []);

  const schema = {
    // Structured data for search engines — description mirrors PROFILE.heroSubtext.
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    email: `mailto:${PROFILE.email}`,
    telephone: PROFILE.phone,
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
          <Suspense fallback={null}>
            <CVSection />
            <ProjectsSection />
            <BentoSection />
            <BlogSection />
            <GuestbookCanvas />
            <ContactSection />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer onOpenTerminal={() => setCliOpen(true)} />
        </Suspense>
      </div>

      <Suspense fallback={null}>
        <CLITerminal open={cliOpen} onClose={() => setCliOpen(false)} />
      </Suspense>
      <BowCursor />
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
