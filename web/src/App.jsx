import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import "./App.css";

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
import Reveal from "@/components/Reveal";
import { Bow } from "@/components/Bow";
import { PROFILE } from "@/data/portfolio";

const OrnamentDivider = () => (
  <Reveal y={12}>
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="relative h-px bg-ink/20 my-0">
        <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-bone px-3">
          <Bow size={18} />
        </div>
      </div>
    </div>
  </Reveal>
);

export default function App() {
  const [cliOpen, setCliOpen] = useState(false);

  useEffect(() => {
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

  const schema = {
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
    jobTitle: "Web Developer",
    description: PROFILE.positioning,
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

      <Nav onOpenTerminal={() => setCliOpen(true)} />
      <main>
        <Hero />
        <OrnamentDivider />
        <CVSection />
        <ProjectsSection />
        <BentoSection />
        <BlogSection />
        <JardinCanvas />
        <ContactSection />
      </main>
      <Footer onOpenTerminal={() => setCliOpen(true)} />
      <CLITerminal open={cliOpen} onClose={() => setCliOpen(false)} />
      <Toaster
        theme="light"
        toastOptions={{
          style: {
            background: "#F5F1EB",
            color: "#1A1A1A",
            border: "1px solid #4A0E0E",
            borderRadius: 0,
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 12,
          },
        }}
      />
    </div>
  );
}
