/*
 * OurApproachSection — image left, process list right
 */

import Image from "next/image";

import { ACCENT_FOREST_GREEN } from "@/const";

const steps = [
  "A business comes to us (or gets referred) with a problem.",
  "We scope it — what would actually help, what's realistic to build.",
  "A small team of volunteers builds and deploys it.",
  "We hand it over. The business owns it.",
];

export default function OurApproachSection() {
  return (
    <section className="pt-8 pb-12 md:pt-10 md:pb-16">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[476px_minmax(0,1fr)] lg:gap-16">
          <div className="order-2 mx-auto w-full max-w-[196px] lg:order-1 lg:max-w-[294px]">
            <Image
              src="/approach-photo.png"
              alt="A small business owner standing in a colorful storefront"
              width={1080}
              height={1080}
              className="h-auto w-full rounded-[28px] max-h-[320px] object-contain lg:max-h-none"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2
              className="text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl"
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                color: ACCENT_FOREST_GREEN,
              }}
            >
              Our approach
            </h2>

            <ol className="mt-8 space-y-6">
              {steps.map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span
                    className="mt-0.5 shrink-0 text-sm font-medium text-muted-foreground"
                    style={{ minWidth: "1.5rem" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base leading-relaxed text-black">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
