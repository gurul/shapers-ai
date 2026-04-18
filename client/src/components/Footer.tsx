import Image from "next/image";
import { ExternalLink, Instagram } from "lucide-react";

/*
 * Footer — editorial closing section
 * Dark field, reflective manifesto copy, oversized final statement
 */

export default function Footer() {
  const lastUpdated = process.env.NEXT_PUBLIC_LAST_UPDATED ?? "Unavailable";

  return (
    <footer className="text-foreground">
      <div className="container py-8 sm:py-10 lg:py-12">
        <div>
          <div className="max-w-xs">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/45">
              Connect
            </p>
            <div className="mt-3 flex flex-col gap-3">
              <a
                href="https://www.instagram.com/shapers.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-foreground/72 transition-colors duration-200 no-underline hover:text-foreground"
              >
                <Instagram size={16} />
                Instagram
              </a>
              <a
                href="https://www.seattleshapers.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-foreground/72 transition-colors duration-200 no-underline hover:text-foreground"
              >
                <ExternalLink size={16} />
                Seattle Shapers
              </a>
              <a
                href="https://www.globalshapers.org/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-foreground/72 transition-colors duration-200 no-underline hover:text-foreground"
              >
                <ExternalLink size={16} />
                Global Shapers
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <p className="text-sm text-foreground/62">
              Made with ❤ in Seattle
            </p>
            <p className="text-xs text-foreground/45">
              Last updated: {lastUpdated}
            </p>
          </div>

          <Image
            src="/footer-global-shapers.png"
            alt="Global Shapers"
            width={1080}
            height={1080}
            className="h-auto w-full max-w-[88px] self-end sm:max-w-[112px] lg:max-w-[128px]"
            priority
          />
        </div>
      </div>
    </footer>
  );
}
