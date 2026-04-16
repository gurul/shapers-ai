/*
 * WhatWeDoSection — the "who & what" detail block
 * Image left, text right
 */

import Image from "next/image";

export default function WhatWeDoSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[476px_minmax(0,1fr)] lg:gap-16">
          <div className="order-2 mx-auto w-full max-w-[320px] lg:order-1 lg:max-w-[440px]">
            <Image
              src="/about-image.png"
              alt="Shapers AI"
              width={768}
              height={768}
              className="h-auto w-full max-h-[320px] object-contain lg:max-h-none"
            />
          </div>

          <div className="order-1 max-w-2xl lg:order-2">
            <h2
              className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              What we do
            </h2>

            <div className="mt-8 space-y-7 text-base leading-relaxed text-black md:text-[1.08rem]">
              <p>
                Small businesses often run analog because modern software is
                built for companies 100x their size. We change that. We pair
                engineers, designers, and strategists with local businesses to
                scope, build, and deploy lightweight tools—like receipt
                scanners, inventory systems, and websites.
              </p>
              <p>Simple, useful software, built fast and handed over.</p>
              <p>
                The project is led by the Seattle hub of the World Economic
                Forum&apos;s Global Shapers Community. Global Shapers is a
                worldwide network of roughly 15,000 young professionals
                organized into city-based hubs running community impact
                projects.
              </p>
              <p>
                Today, <strong>hubs across every continent</strong> have joined
                the project, expanding our reach globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
