/*
 * TeamSection — Swiss minimalist
 * Team roster with initials avatar + LinkedIn link
 */

import Image from "next/image";
import { Linkedin } from "lucide-react";

import { ACCENT_FOREST_GREEN } from "@/const";

interface TeamMember {
  name: string;
  role?: string;
  linkedin?: string;
  photo?: string;
  imagePosition?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Rachel Kloepfer",
    linkedin: "https://www.linkedin.com/in/rachelkloepfer/",
    photo: "/team-rachel.png",
    imagePosition: "center top",
  },
  {
    name: "Shubhkarman Singh",
    linkedin: "https://www.linkedin.com/in/singh-shubhkarman/",
    photo: "/team-karman.png",
    imagePosition: "center top",
  },
  {
    name: "Gurucharan Lingamallu",
    linkedin: "https://www.linkedin.com/in/gurul/",
    photo: "/team-guru.png",
    imagePosition: "center 18%",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function TeamSection() {
  return (
    <section id="team" className="scroll-mt-20 py-12 md:py-16">
      <div className="container">
        <div className="w-full">
          <div className="text-center">
            <h2
              className="font-serif text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl"
              style={{ color: ACCENT_FOREST_GREEN }}
            >
              The Team
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map(member => (
              <div
                key={member.name}
                className="mx-auto flex h-full w-full max-w-[320px] flex-col rounded-[28px] border border-black/5 bg-white p-6 text-left shadow-[0_18px_40px_rgba(0,0,0,0.05)]"
              >
                <div className="mx-auto flex w-full max-w-[220px] flex-1 flex-col items-center text-center">
                  <div className="w-full overflow-hidden rounded-[24px] border border-black/5 bg-black/5">
                    <div className="relative aspect-square w-full">
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          sizes="220px"
                          className="object-cover"
                          style={{ objectPosition: member.imagePosition ?? "center" }}
                        />
                      ) : (
                        <div
                          className="flex h-full w-full items-center justify-center font-serif text-3xl font-medium"
                          style={{ color: ACCENT_FOREST_GREEN }}
                        >
                          {getInitials(member.name)}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-5">
                    <p
                      className="font-serif text-lg font-medium leading-snug"
                      style={{ color: ACCENT_FOREST_GREEN }}
                    >
                      {member.name}
                    </p>
                    {member.role ? (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {member.role}
                      </p>
                    ) : null}
                  </div>

                  {member.linkedin && (
                    <div className="mt-auto pt-6">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-sm font-medium no-underline transition-opacity duration-200 hover:opacity-75"
                        aria-label={`${member.name} LinkedIn`}
                        style={{ color: ACCENT_FOREST_GREEN }}
                      >
                        <Linkedin size={16} />
                        LinkedIn
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
