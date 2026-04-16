/*
 * HeroSection — Swiss minimalist
 * Large headline left-aligned with supporting illustration
 */

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="scroll-mt-20 pt-14">
      <div className="container flex min-h-[calc(100svh-3.5rem)] items-center pt-8 pb-10 md:pt-10 md:pb-12">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,640px)] lg:gap-14">
          <div>
            {/* Headline */}
            <h1
              className="max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.5rem]"
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                color: "#19498a",
              }}
            >
              Building technology for the businesses that power our
              communities
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-black md:mt-8 md:text-lg">
              shapers.ai is a volunteer team of young professionals in tech,
              finance, and consulting helping local organizations implement AI.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-200 no-underline md:mt-10"
              style={{
                fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                backgroundColor: "#19498a",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = "#143b70";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = "#19498a";
              }}
            >
              Get involved
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="mx-auto w-full max-w-[640px] lg:mx-0">
            <div className="mx-auto w-full max-w-[560px] drop-shadow-[0_24px_40px_rgba(0,0,0,0.16)]">
              <Image
                src="/hero-cake-shop-cuate.png"
                alt="Illustration of a cake shop storefront"
                width={2000}
                height={2000}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
