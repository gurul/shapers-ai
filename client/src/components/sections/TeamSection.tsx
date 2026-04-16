/*
 * TeamSection — Swiss minimalist
 * Team roster with initials avatar + LinkedIn link
 */

import Image from "next/image";
import { Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role?: string;
  linkedin?: string;
  photo?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Rachel Kloepfer",
    linkedin: "https://www.linkedin.com/in/rachelkloepfer/",
    photo: "/headshot-rachel.png",
  },
  {
    name: "Shubhkarman Singh",
    linkedin: "https://www.linkedin.com/in/singh-shubhkarman/",
    photo: "/headshot-shubhkarman.png",
  },
  {
    name: "Gurucharan Lingamallu",
    linkedin: "https://www.linkedin.com/in/gurul/",
    photo: "/headshot-guru.png",
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
              className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                color: "#19498a",
              }}
            >
              The Team
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map(member => (
              <div
                key={member.name}
                className="flex w-full flex-col items-center text-center"
              >
                {/* Avatar: photo if available, else initials */}
                <div className="mb-5 flex h-72 w-72 items-center justify-center overflow-hidden bg-black/5">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={288}
                      height={288}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span
                      className="text-sm font-medium text-muted-foreground"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {getInitials(member.name)}
                    </span>
                  )}
                </div>

                <p
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  }}
                >
                  {member.name}
                </p>
                {member.role ? (
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {member.role}
                  </p>
                ) : null}

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
