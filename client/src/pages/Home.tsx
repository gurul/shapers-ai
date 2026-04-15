/*
 * Home — Single-page scroll layout
 * Swiss International minimalist: black on white, typographic hierarchy,
 * generous whitespace between sections
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <HeroSection />
        <MissionSection />
        <AboutSection />
        <TeamSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
