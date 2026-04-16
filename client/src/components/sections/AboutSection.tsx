/*
 * AboutSection — Swiss minimalist
 * Left-aligned text with image
 */

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 pt-12 pb-8 md:pt-16 md:pb-10">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <div className="order-1 flex-1">
            <h2
              className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              The Philosophy
            </h2>

            <div className="mt-8 space-y-7 text-base leading-relaxed text-black md:text-[1.08rem]">
              <p>
                Most AI conversations revolve around billion-dollar infrastructure
                and enterprise SaaS. Meanwhile, the restaurant down the street
                still does inventory on a legal pad, and nobody is building for
                them.
              </p>
              <p>
                We believe the most valuable use of technology isn&apos;t always
                the most complex. Sometimes it&apos;s just about helping a
                business owner see what is possible, giving them back hours of
                their week, and empowering them to own their solutions.
              </p>
            </div>
          </div>

          <div className="order-2 mx-auto w-full max-w-[260px] lg:mx-0 lg:w-[400px] lg:max-w-none">
            <Image
              src="/earthie.png"
              alt="Illustration of the globe"
              width={840}
              height={840}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
