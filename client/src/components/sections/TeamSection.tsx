import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
const teamMembers = [
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
export default function TeamSection() {
  return (
    <section id="team" className="section-pad team-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">05 / The people behind it</p>
            <h2>
              Different skills.
              <br />
              <em>Shared purpose.</em>
            </h2>
          </div>
          <p className="section-intro">
            We’re a volunteer team of young professionals in tech, finance, and
            consulting, making time for the communities we call home.
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map(member => (
            <article className="team-card" key={member.name}>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on LinkedIn`}
              >
                <div className="team-photo">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: member.imagePosition }}
                  />
                </div>
                <div className="team-card-caption">
                  <div>
                    <h3>{member.name}</h3>
                    <p>Seattle hub · Global Shapers</p>
                  </div>
                  <span className="team-arrow">
                    <ArrowUpRight size={21} aria-hidden="true" />
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
