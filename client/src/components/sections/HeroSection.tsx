/*
 * HeroSection — Swiss minimalist
 * Large headline left-aligned with supporting illustration
 */

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import {
  ACCENT_FOREST_GREEN,
  ACCENT_FOREST_GREEN_HOVER,
} from "@/const";

export default function HeroSection() {
  return (
    <section id="home" className="scroll-mt-20 pt-14">
      <div className="container flex min-h-[calc(100svh-3.5rem)] items-center pt-8 pb-10 md:pt-10 md:pb-12">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,560px)] lg:gap-16">
          <div>
            {/* Headline */}
            <h1
              className="font-serif text-3xl font-medium leading-[1.05] tracking-tight sm:text-4xl md:text-[2.9rem] lg:text-[3.2rem]"
              style={{ color: ACCENT_FOREST_GREEN }}
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
              style={{ backgroundColor: ACCENT_FOREST_GREEN }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = ACCENT_FOREST_GREEN_HOVER;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = ACCENT_FOREST_GREEN;
              }}
            >
              Get involved
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="mx-auto w-full max-w-[640px] lg:mx-0 lg:justify-self-end">
            <div className="mx-auto w-full max-w-[560px] overflow-hidden rounded-[32px] border border-black/5 drop-shadow-[0_24px_40px_rgba(0,0,0,0.14)]">
              <div className="relative aspect-[5/4] w-full">
                <Image
                  src="/hero-photo.png"
                  alt="Two small business team members smiling inside their shop"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover object-center"
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
