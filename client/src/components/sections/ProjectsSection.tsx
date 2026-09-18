import Image from "next/image";
import { ArrowUpRight, Github, MapPin } from "lucide-react";

const projectSubmissionFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScG9KWFWLTd-lMMGFCS8pLGXodeJah9YNRvQB8LMnfxbtudAg/viewform?usp=publish-editor";
const springrollGithubUrl =
  "https://github.com/shubhkarmanSingh/springroll-receipt-scanner";
const springrollAddress =
  "Spring Roll House Deli, 1221 South Main St #104, Seattle, WA 98144";
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
    <section id="projects" className="section-pad">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / Our work in the world</p>
            <h2>
              Real tools.
              <br />
              <em>Real local impact.</em>
            </h2>
          </div>
          <p className="section-intro">
            Practical projects, built alongside the people who use them. Here’s
            what that looks like.
          </p>
        </div>
        <article className="project-card">
          <div className="project-visual">
            <div className="project-visual-label">
              <span className="status-dot" /> Built in Seattle
              <span>Featured project / 01</span>
            </div>
            <div className="project-screenshot">
              <Image
                src="/springroll-receipt-scanner.png"
                alt="Two people at SpringRoll House Deli"
                width={1200}
                height={1200}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full"
              />
            </div>
            <p className="project-visual-footer">
              Less paperwork. More room for what matters.
            </p>
          </div>
          <div className="project-copy">
            <span className="tag">AI & automation</span>
            <h3>
              Good food.
              <br />
              <em>Smarter bookkeeping.</em>
            </h3>
            <p className="project-name">SpringRoll House Receipt Scanner</p>
            <p>
              An AI receipt pipeline that turns phone photos, supplier emails,
              and CSV exports into clean ingredient purchases, live unit costs,
              and updated recipe margins in Google Sheets.
            </p>
            <dl className="project-details">
              <div>
                <dt>Built with</dt>
                <dd>Claude Vision · Python · Sheets</dd>
              </div>
              <div>
                <dt>Running cost</dt>
                <dd>$1–3 per 100 receipts</dd>
              </div>
            </dl>
            <div className="project-team">
              <div className="avatar-stack">
                {springrollTeam.map(member => (
                  <Image
                    key={member.name}
                    src={member.photo}
                    alt={member.name}
                    title={member.name}
                    width={36}
                    height={36}
                    style={{ objectPosition: member.imagePosition }}
                  />
                ))}
              </div>
              <span>Built by our Seattle team</span>
            </div>
            <div className="project-links">
              <a
                href={springrollGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Explore the project <Github size={17} aria-hidden="true" />
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(springrollAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="location-link"
              >
                <MapPin size={14} aria-hidden="true" /> Seattle, WA
              </a>
            </div>
          </div>
        </article>
        <div className="project-submit">
          <p>
            Built something that makes a difference?{" "}
            <span>We’d love to see it.</span>
          </p>
          <a
            href={projectSubmissionFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Share your project <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
