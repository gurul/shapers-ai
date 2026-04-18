/*
 * ProjectsSection — Swiss minimalist
 * Community showcase submission CTA for featured projects
 */

import { ArrowUpRight, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";

const projectSubmissionFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScG9KWFWLTd-lMMGFCS8pLGXodeJah9YNRvQB8LMnfxbtudAg/viewform?usp=publish-editor";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 py-12 md:py-16">
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
              What We&apos;ve Built
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-black">
              We&apos;re building out the showcase now. If you&apos;ve helped a
              small business in your community, we&apos;d love to feature the
              project on shapers.ai.
            </p>
          </div>

          <div className="mt-10 grid gap-6 border border-border bg-[#f7f9fc] p-6 md:mt-12 md:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] md:p-8">
            <div>
              <div className="inline-flex items-center gap-2 border border-[#19498a]/20 bg-white px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#19498a]">
                <Upload size={14} />
                Submit a project
              </div>

              <h3
                className="mt-5 text-xl font-bold tracking-tight sm:text-2xl"
                style={{
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  color: "#19498a",
                }}
              >
                Share the work you&apos;re doing for your community
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-black">
                The submission form asks for your email, name, background, the
                small business you helped, the problem they faced, what you
                built for them, and any images or supporting files we can use
                when we showcase the project.
              </p>
            </div>

            <div className="flex flex-col justify-between border border-border bg-white p-6">
              <div>
                <p
                  className="text-sm font-semibold uppercase tracking-[0.16em]"
                  style={{
                    fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                    color: "#19498a",
                  }}
                >
                  What to prepare
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-black">
                  <li>Your role and a short intro about you</li>
                  <li>
                    The business, their challenge, and the work you shipped
                  </li>
                  <li>
                    Photos, screenshots, or files we can display alongside it
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <Button
                  asChild
                  size="lg"
                  className="inline-flex w-full items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide text-white"
                  style={{
                    fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                    backgroundColor: "#19498a",
                  }}
                >
                  <a
                    href={projectSubmissionFormUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open project submission form
                    <ArrowUpRight size={16} />
                  </a>
                </Button>

                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Opens a Google Form in a new tab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
