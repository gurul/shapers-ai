/*
 * TeamSection — Swiss minimalist
 * Placeholder team member cards with initials circle + LinkedIn button
 */

import { Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  { name: "Team Member", role: "Role", linkedin: "#" },
  { name: "Team Member", role: "Role", linkedin: "#" },
  { name: "Team Member", role: "Role", linkedin: "#" },
  { name: "Team Member", role: "Role", linkedin: "#" },
  { name: "Team Member", role: "Role", linkedin: "#" },
  { name: "Team Member", role: "Role", linkedin: "#" },
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
    <section id="team" className="py-16 md:py-24">
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

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="flex w-full flex-col items-center text-center"
              >
                {/* Avatar circle with initials */}
                <div className="mb-4 flex h-16 w-16 items-center justify-center bg-black/5">
                  <span
                    className="text-sm font-medium text-muted-foreground"
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {getInitials(member.name)}
                  </span>
                </div>

                <p
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  }}
                >
                  {member.name}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {member.role}
                </p>

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
