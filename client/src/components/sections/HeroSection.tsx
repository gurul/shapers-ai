/*
 * HeroSection — Swiss minimalist
 * Large headline left-aligned with supporting illustration
 */

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="pt-14">
      <div className="container pt-8 pb-10 md:pt-10 md:pb-12">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:gap-12">
          <div>
            {/* Headline */}
            <h1
              className="max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.5rem]"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
            >
              We build tech for organizations that can't afford it yet.
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-black md:mt-8 md:text-lg">
              shapers.ai is a volunteer team of young professionals in tech,
              finance, and consulting helping local organizations implement AI.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-black px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-200 no-underline hover:bg-black/85 md:mt-10"
              style={{ fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}
            >
              Get involved
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="mx-auto w-full max-w-[560px] lg:mx-0">
            <div className="relative mx-auto aspect-[11/10] w-full max-w-[560px]">
              <div className="absolute left-[4%] top-[3%] w-[78%] -rotate-[5deg] transform drop-shadow-[0_24px_40px_rgba(0,0,0,0.16)]">
                <Image
                  src="/hero-storefront.png"
                  alt="Illustration of a small storefront with product signage"
                  width={1152}
                  height={768}
                  className="h-auto w-full"
                  priority
                />
              </div>

              <div className="absolute bottom-[4%] right-[2%] z-10 w-[56%] rotate-[6deg] transform drop-shadow-[0_24px_40px_rgba(0,0,0,0.2)]">
                <Image
                  src="/hero-upcycle-shop.png"
                  alt="Illustration of an upcycled clothing storefront"
                  width={768}
                  height={768}
                  className="h-auto w-full"
                  priority
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
