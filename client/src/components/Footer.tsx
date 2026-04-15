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
    <footer className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.09),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_45%)]" />

      <div className="container relative py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-14 lg:gap-20">
          <div className="flex items-center justify-end">
            <div className="flex flex-wrap gap-x-8 gap-y-3 lg:justify-end">
              {footerLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.18em] text-white/58 transition-colors duration-200 hover:text-white"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2 text-sm text-white/42">
              <p>A project of the WEF Global Shapers Seattle Hub</p>
              <p>&copy; {new Date().getFullYear()} shapers.ai</p>
            </div>

            <p
              className="max-w-[10ch] text-[clamp(4rem,13vw,11rem)] leading-none font-semibold tracking-tight text-white lowercase lg:max-w-none lg:text-right"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
            >
              for small business
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
