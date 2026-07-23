import { useEffect, useState } from "react";
import { Toaster } from "sonner";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CVSection from "@/components/CVSection";
import ProjectsSection from "@/components/ProjectsSection";
import BentoSection from "@/components/BentoSection";
import BlogSection from "@/components/BlogSection";
import JardinCanvas from "@/components/JardinCanvas";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CLITerminal from "@/components/CLITerminal";
import BowCursor from "@/components/BowCursor";
import { PROFILE } from "@/data/portfolio";
import { scrollToElement } from "@/lib/scroll";

export default function App() {
  const [cliOpen, setCliOpen] = useState(false);

  useEffect(() => {
    // Ctrl/Cmd + ` opens the CLI easter egg — skip when typing in a form field.
    const onKey = (e) => {
      if (cliOpen) return;
      if (["INPUT", "TEXTAREA"].includes(e.target?.tagName)) return;
      if ((e.ctrlKey || e.metaKey) && e.key === "`") {
        e.preventDefault();
        setCliOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cliOpen]);

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
    jobTitle: "Software Developer",
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
        Skip to content
      </a>

      <div id="app-shell">
        <Nav onOpenTerminal={() => setCliOpen(true)} />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <CVSection />
          <ProjectsSection />
          <BentoSection />
          <BlogSection />
          <JardinCanvas />
          <ContactSection />
        </main>
        <Footer onOpenTerminal={() => setCliOpen(true)} />
      </div>

      <CLITerminal open={cliOpen} onClose={() => setCliOpen(false)} />
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
