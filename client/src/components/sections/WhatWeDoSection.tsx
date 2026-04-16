/*
 * WhatWeDoSection — the "who & what" detail block
 * Image left, text right
 */

import Image from "next/image";

export default function WhatWeDoSection() {
  return (
    <section className="bg-background py-6 md:py-10">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-[476px_minmax(0,1fr)] lg:gap-12">
          <div className="mx-auto w-full max-w-[280px] lg:max-w-[420px]">
            <Image
              src="/about-image.png"
              alt="Shapers AI"
              width={768}
              height={768}
              className="h-auto w-full max-h-[320px] object-contain lg:max-h-none"
            />
          </div>

          <div className="max-w-2xl">
            <div className="space-y-6 text-base leading-relaxed text-black md:text-[1.05rem]">
              <p>
                Small businesses often run analog because modern software is
                built for companies 100x their size. We change that. We pair
                engineers, designers, and strategists with local businesses to
                scope, build, and deploy lightweight tools—like receipt
                scanners, inventory systems, and websites.
              </p>
              <p>Simple, useful software, built fast and handed over.</p>
              <p>
                Led by the Seattle hub of the World Economic Forum&apos;s
                Global Shapers Community, we partner with the Washington Small
                Business Development Center (WSBDC) and the Cities of Seattle
                and Bellevue to find the businesses that need us most.
              </p>
              <p>
                Today, hubs across continents have joined the project, expanding
                our reach globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
