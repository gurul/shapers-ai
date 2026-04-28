import Image from "next/image";

import { ACCENT_FOREST_GREEN } from "@/const";

const partners = [
  {
    name: "Washington SBDC",
    logo: "/partners-washington-sbdc.jpg",
    alt: "Washington Small Business Development Center logo",
  },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="scroll-mt-20 py-8 md:py-10">
      <div className="container">
        <div className="w-full">
          <div className="text-center">
            <h2
              className="font-serif text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl"
              style={{ color: ACCENT_FOREST_GREEN }}
            >
              Partners
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-black">
              We&apos;re building alongside mission-aligned organizations that
              help small businesses grow.
            </p>
          </div>

          <div className="mx-auto mt-7 grid max-w-3xl grid-cols-1 gap-6 md:mt-8">
            {partners.map(partner => (
              <div
                key={partner.name}
                className="flex flex-col items-center text-center"
              >
                <div className="flex w-full items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={1200}
                    height={692}
                    className="h-auto w-full max-w-[320px] object-contain sm:max-w-[420px] md:max-w-[500px]"
                    priority={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
