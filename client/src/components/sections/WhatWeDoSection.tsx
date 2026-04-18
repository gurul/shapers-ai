/*
 * WhatWeDoSection — the "who & what" detail block
 * Image left, text right
 */

import Image from "next/image";

import { ACCENT_FOREST_GREEN, APP_BACKGROUND } from "@/const";

export default function WhatWeDoSection() {
  return (
    <section
      className="bg-background py-12 md:py-16"
      style={{ backgroundColor: APP_BACKGROUND }}
    >
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[476px_minmax(0,1fr)] lg:gap-16">
          <div className="order-2 w-full lg:order-1 lg:max-w-[440px]">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[28px] lg:aspect-auto">
              <Image
                src="/what-photo.png"
                alt="Amazon Spheres in Seattle"
                width={1080}
                height={1080}
                className="h-full w-full object-cover lg:h-auto lg:rounded-[28px]"
              />
            </div>
          </div>

          <div className="order-1 max-w-2xl lg:order-2">
            <h2
              className="font-serif text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl"
              style={{ color: ACCENT_FOREST_GREEN }}
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
