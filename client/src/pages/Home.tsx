/*
 * Home — Single-page scroll layout
 * Nature-inspired editorial layout with local typography and botanical accents.
 */

import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import OurApproachSection from "@/components/sections/OurApproachSection";
import TeamSection from "@/components/sections/TeamSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import { APP_BACKGROUND } from "@/const";

export default function Home() {
  return (
    <div className="motion-surface">
      <div
        className="min-h-screen flex flex-col bg-background"
        style={{ backgroundColor: APP_BACKGROUND }}
      >
        <Navigation />
        <ScrollProgress />

        <main id="main" tabIndex={-1} className="flex-1">
          <HeroSection />
          <WhatWeDoSection />
          <AboutSection />
          <ProjectsSection />
          <OurApproachSection />
          <TeamSection />
          <PartnersSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
