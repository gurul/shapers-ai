/*
 * ProjectsSection — Swiss minimalist
 * Coming soon state with a subtle loading indicator
 */

import { Loader2 } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container">
        <span className="section-number">04 — Projects</span>

        <h2
          className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
          style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
        >
          What We've Built
        </h2>

        <div className="mt-10 py-16 flex flex-col items-center justify-center border border-border">
          <Loader2 size={20} className="animate-spin text-muted-foreground" />
          <p className="mt-4 text-sm text-muted-foreground">
            Coming soon
          </p>
        </div>
      </div>
    </section>
  );
}
