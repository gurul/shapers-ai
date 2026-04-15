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
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24">
      <div className="container">
        <span className="section-number">03 — Team</span>

        <h2
          className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
          style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
        >
          The Team
        </h2>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {teamMembers.map((member, i) => (
            <div key={i} className="flex flex-col items-start">
              {/* Avatar circle with initials */}
              <div className="w-16 h-16 bg-black/5 flex items-center justify-center mb-4">
                <span
                  className="text-sm font-medium text-muted-foreground"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {getInitials(member.name)}
                </span>
              </div>

              <p
                className="text-sm font-semibold"
                style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
              >
                {member.name}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {member.role}
              </p>

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
