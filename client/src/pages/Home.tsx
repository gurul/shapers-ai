/*
 * Home — Single-page scroll layout
 * Swiss International minimalist: black on white, typographic hierarchy,
 * generous whitespace between sections
 */

import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import OurApproachSection from "@/components/sections/OurApproachSection";
import TeamSection from "@/components/sections/TeamSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ backgroundColor: "#ffffff" }}>
      <Navigation />
      <ScrollProgress />

      <main className="flex-1">
        <HeroSection />
        <WhatWeDoSection />
        <AboutSection />
        <OurApproachSection />
        <TeamSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
