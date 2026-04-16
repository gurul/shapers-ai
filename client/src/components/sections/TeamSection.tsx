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
  },
  {
    name: "Shubhkarman Singh",
    linkedin: "https://www.linkedin.com/in/singh-shubhkarman/",
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
    <section id="team" className="py-6 md:py-10">
      <div className="container">
        <div className="w-full">
          <div className="text-center">
            <h2
              className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
            >
              The Team
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map(member => (
              <div
                key={member.name}
                className="flex w-full flex-col items-center text-center"
              >
                {/* Avatar: photo if available, else initials */}
                <div className="mb-4 flex h-64 w-64 items-center justify-center overflow-hidden bg-black/5">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={256}
                      height={256}
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
