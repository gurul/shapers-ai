import Image from "next/image";

/*
 * Footer — editorial closing section
 * Dark field, reflective manifesto copy, oversized final statement
 */

const footerLinks = [
  { label: "contact", href: "#contact" },
  { label: "email", href: "mailto:contact@shapers.ai" },
];

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "#111111" }}>
      <div className="container py-10 sm:py-12 lg:py-14">
        <div className="flex flex-col gap-14 lg:gap-20">
          <div className="flex items-center justify-end">
            <div className="flex flex-wrap gap-x-8 gap-y-3 lg:justify-end">
              {footerLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.18em] text-white/50 transition-colors duration-200 hover:text-white"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-start">
            <Image
              src="/shapers-logo.png"
              alt="Shapers AI"
              width={768}
              height={768}
              className="h-auto w-full max-w-[240px] sm:max-w-[300px] lg:max-w-[360px]"
              priority
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
