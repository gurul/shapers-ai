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

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-8">
            {partners.map(partner => (
              <div
                key={partner.name}
                className="flex flex-col items-center rounded-sm border border-black/10 bg-white px-6 py-8 text-center shadow-sm"
              >
                <div className="flex min-h-52 w-full items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={960}
                    height={960}
                    className="h-auto w-full max-w-xl object-contain"
                  />
                </div>

                <p
                  className="mt-6 text-sm font-semibold"
                  style={{
                    fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  }}
                >
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
