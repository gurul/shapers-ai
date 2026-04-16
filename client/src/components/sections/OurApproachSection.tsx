/*
 * OurApproachSection — image left, process list right
 */

import Image from "next/image";

const steps = [
  "A business comes to us (or gets referred) with a problem.",
  "We scope it — what would actually help, what's realistic to build.",
  "A small team of volunteers builds and deploys it.",
  "We hand it over. The business owns it.",
];

export default function OurApproachSection() {
  return (
    <section className="pt-2 pb-6 md:pt-4 md:pb-10">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-[476px_minmax(0,1fr)] lg:gap-12">
          <div className="mx-auto w-full max-w-[280px] lg:max-w-[420px]">
            <Image
              src="/approach-image.png"
              alt="Our approach"
              width={768}
              height={768}
              className="h-auto w-full max-h-[320px] object-contain lg:max-h-none"
            />
          </div>

          <div>
            <h2
              className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              Our approach
            </h2>

            <ol className="mt-8 space-y-4">
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
