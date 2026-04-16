/*
 * ProjectsSection — Swiss minimalist
 * Coming soon state with a subtle loading indicator
 */

import { Loader2 } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 py-12 md:py-16">
      <div className="container">
        <div className="w-full">
          <div className="text-center">
            <h2
              className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
            >
              What We&apos;ve Built
            </h2>
          </div>

          <div className="mt-14 flex min-h-96 w-full flex-col items-center justify-center border border-border py-20">
            <Loader2 size={20} className="animate-spin text-muted-foreground" />
            <p className="mt-4 text-sm text-muted-foreground">Coming soon</p>
          </div>
        </div>
      </div>
    </section>
  );
}
