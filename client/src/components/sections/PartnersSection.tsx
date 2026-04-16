import Image from "next/image";

const partners = [
  {
    name: "America's SBDC",
    logo: "/partners-sbdc.png",
    alt: "America's SBDC Small Business Development Centers logo",
  },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="scroll-mt-20 py-12 md:py-16">
      <div className="container">
        <div className="w-full">
          <div className="text-center">
            <h2
              className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                color: "#19498a",
              }}
            >
              Partners
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-black">
              We&apos;re building alongside mission-aligned organizations that
              help small businesses grow.
            </p>
          </div>

          <div className="mx-auto mt-5 grid max-w-3xl grid-cols-1 gap-6 md:mt-6">
            {partners.map(partner => (
              <div key={partner.name} className="flex flex-col items-center px-6 py-0 text-center">
                <div className="flex w-full items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={960}
                    height={960}
                    className="h-auto w-full max-w-[40%] min-w-[160px] object-contain"
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
