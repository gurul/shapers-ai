/*
 * MissionSection — the three explanatory paragraphs from the Home content
 * Swiss minimalist: left-aligned, generous whitespace
 */

import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[476px_minmax(0,1fr)] lg:gap-16">
          <div className="mx-auto w-full max-w-[320px] lg:max-w-[476px]">
            <Image
              src="/philosophy-globalization-cuate.png"
              alt="Illustration representing global collaboration"
              width={2000}
              height={2000}
              className="h-auto w-full"
            />
          </div>

          <div className="max-w-2xl md:ml-auto md:text-right">
            <div className="space-y-6 text-base leading-relaxed text-black md:text-[1.05rem]">
              <p>
                Small businesses often run analog because the tools that could
                help them are built for companies 100x their size. We change
                that.
              </p>
              <p>
                We pair engineers, designers, and strategists with local
                businesses to scope, build, and deploy lightweight tools like
                receipt scanners, inventory systems, customer workflows, and
                websites. Simple, useful software, built fast and handed over.
              </p>
              <p>
                The initiative is led by the Seattle hub of the World Economic
                Forum&apos;s Global Shapers Community, a network of young
                professionals under 30 active in 500+ cities worldwide. We work
                at the intersection of tech, finance, and civic infrastructure,
                and partner locally with the Washington Small Business
                Development Center (WSBDC) to identify businesses that need us
                most.
              </p>
              <p>
                Hubs across every continent have joined the project, expanding
                our reach across languages, geographies, and communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
