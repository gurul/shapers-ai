/*
 * ProjectsSection — Swiss minimalist
 * Community showcase submission CTA for projects
 */

import { ArrowUpRight, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  APP_SECTION_SURFACE,
  ACCENT_FOREST_GREEN,
  ACCENT_FOREST_GREEN_BORDER,
  ACCENT_FOREST_GREEN_HOVER,
} from "@/const";

const projectSubmissionFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScG9KWFWLTd-lMMGFCS8pLGXodeJah9YNRvQB8LMnfxbtudAg/viewform?usp=publish-editor";

const springrollGithubUrl =
  "https://github.com/shubhkarmanSingh/springroll-receipt-scanner";

const springrollTeam = [
  {
    name: "Rachel Kloepfer",
    photo: "/team-rachel.png",
    imagePosition: "center top",
  },
  {
    name: "Shubhkarman Singh",
    photo: "/team-karman.png",
    imagePosition: "center top",
  },
  {
    name: "Gurucharan Lingamallu",
    photo: "/team-guru.png",
    imagePosition: "center 18%",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 py-12 md:py-16">
      <div className="container">
        <div className="w-full">
          <div className="text-center">
            <h2
              className="font-serif text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl"
              style={{ color: ACCENT_FOREST_GREEN }}
            >
              What We&apos;ve Built
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-black">
              Practical AI projects built with small businesses, local
              operators, and community partners.
            </p>
          </div>

          <div
            className="mt-10 overflow-hidden border border-border bg-white md:mt-12"
            style={{ borderColor: ACCENT_FOREST_GREEN_BORDER }}
          >
            <div className="grid md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
              <div className="relative flex min-h-[300px] items-center justify-center border-b border-border bg-white p-4 md:min-h-[440px] md:border-b-0 md:border-r md:p-6">
                <img
                  src="/springroll-receipt-scanner.png"
                  alt="SpringRoll House receipt scanning project"
                  className="max-h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10">
                <div>
                  <h3
                    className="font-serif text-2xl font-medium tracking-tight sm:text-3xl"
                    style={{ color: ACCENT_FOREST_GREEN }}
                  >
                    SpringRoll House Receipt Scanner
                  </h3>

                  <p className="mt-4 max-w-xl text-base leading-relaxed text-black">
                    An AI receipt pipeline for SpringRoll House Deli that turns
                    phone photos, supplier emails, and CSV exports into clean
                    ingredient purchases, live unit costs, and updated recipe
                    margins in Google Sheets.
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {springrollTeam.map(member => (
                        <img
                          key={member.name}
                          src={member.photo}
                          alt={member.name}
                          title={member.name}
                          className="h-10 w-10 rounded-full border-2 border-white object-cover"
                          style={{ objectPosition: member.imagePosition }}
                        />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Built by the Shapers AI Seattle Team
                    </p>
                  </div>

                  <div className="mt-6 grid gap-3 text-sm leading-relaxed text-black sm:grid-cols-3">
                    <div className="border border-border p-4">
                      <p
                        className="text-xs font-medium uppercase tracking-[0.16em]"
                        style={{ color: ACCENT_FOREST_GREEN }}
                      >
                        Stack
                      </p>
                      <p className="mt-2">Claude Vision, Python, Sheets</p>
                    </div>
                    <div className="border border-border p-4">
                      <p
                        className="text-xs font-medium uppercase tracking-[0.16em]"
                        style={{ color: ACCENT_FOREST_GREEN }}
                      >
                        Flow
                      </p>
                      <p className="mt-2">
                        Scan receipt, map items, update costs
                      </p>
                    </div>
                    <div className="border border-border p-4">
                      <p
                        className="text-xs font-medium uppercase tracking-[0.16em]"
                        style={{ color: ACCENT_FOREST_GREEN }}
                      >
                        Cost
                      </p>
                      <p className="mt-2">$1-3 per 100 receipts</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex">
                  <Button
                    asChild
                    size="lg"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide text-white"
                    style={{ backgroundColor: ACCENT_FOREST_GREEN }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor =
                        ACCENT_FOREST_GREEN_HOVER;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor =
                        ACCENT_FOREST_GREEN;
                    }}
                  >
                    <a
                      href={springrollGithubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on GitHub
                      <Github size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-6 flex flex-col gap-5 border border-border bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
            style={{ backgroundColor: APP_SECTION_SURFACE }}
          >
            <div className="max-w-2xl">
              <p
                className="text-xs font-medium uppercase tracking-[0.18em]"
                style={{ color: ACCENT_FOREST_GREEN }}
              >
                Submit a project
              </p>
              <p className="mt-2 text-sm leading-relaxed text-black sm:text-base">
                Built something useful for a local business? Send the project, a
                short note, and any visuals we can feature.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="inline-flex shrink-0 items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide text-white"
              style={{ backgroundColor: ACCENT_FOREST_GREEN }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor =
                  ACCENT_FOREST_GREEN_HOVER;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = ACCENT_FOREST_GREEN;
              }}
            >
              <a
                href={projectSubmissionFormUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open form
                <ArrowUpRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
