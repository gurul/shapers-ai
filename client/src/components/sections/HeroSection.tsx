/*
 * HeroSection — Swiss minimalist
 * Large headline left-aligned, generous whitespace, no imagery
 */

import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="pt-14">
      <div className="container pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-32">
        {/* Headline */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight max-w-3xl"
          style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
        >
          We build tech for small businesses that can't afford it yet.
        </h1>

        {/* Subheadline */}
        <p className="mt-6 md:mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          shapers.ai is a team of young professionals in tech, finance, and
          consulting volunteering their skills to help small businesses across
          the globe implement AI.
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 mt-8 md:mt-10 px-6 py-3 bg-black text-white text-sm font-medium tracking-wide hover:bg-black/85 transition-colors duration-200 no-underline"
          style={{ fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}
        >
          Get involved
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
