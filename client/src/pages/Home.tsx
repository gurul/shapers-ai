/*
 * Home — Single-page scroll layout
 * Swiss International minimalist: black on white, typographic hierarchy,
 * thin horizontal rules between sections, generous whitespace
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
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
        <SectionDivider />
        <MissionSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <TeamSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
