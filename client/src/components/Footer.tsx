import Image from "next/image";
import { ExternalLink, Instagram } from "lucide-react";

/*
 * Footer — editorial closing section
 * Dark field, reflective manifesto copy, oversized final statement
 */

export default function Footer() {
  const lastUpdated = process.env.NEXT_PUBLIC_LAST_UPDATED ?? "Unavailable";

  return (
    <footer className="text-white" style={{ backgroundColor: "#111111" }}>
      <div className="container py-8 sm:py-10 lg:py-12">
        <div>
          <div className="max-w-xs">
            <p
              className="text-xs uppercase tracking-[0.18em] text-white/45"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Connect
            </p>
            <div className="mt-3 flex flex-col gap-3">
              <a
                href="https://www.instagram.com/shapers.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-white/72 transition-colors duration-200 no-underline hover:text-white"
                style={{ fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}
              >
                <Instagram size={16} />
                Instagram
              </a>
              <a
                href="https://www.seattleshapers.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-white/72 transition-colors duration-200 no-underline hover:text-white"
                style={{ fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}
              >
                <ExternalLink size={16} />
                Seattle Shapers
              </a>
              <a
                href="https://www.globalshapers.org/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-white/72 transition-colors duration-200 no-underline hover:text-white"
                style={{ fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}
              >
                <ExternalLink size={16} />
                Global Shapers
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <p className="text-sm text-white/62">
              Made with ❤ in Seattle
            </p>
            <p className="text-xs text-white/45">
              Last updated: {lastUpdated}
            </p>
          </div>

          <Image
            src="/shapers-logo.png"
            alt="Shapers AI"
            width={768}
            height={768}
            className="h-auto w-full max-w-[88px] self-end sm:max-w-[112px] lg:max-w-[128px]"
            priority
          />
        </div>
      </div>
    </footer>
  );
}
