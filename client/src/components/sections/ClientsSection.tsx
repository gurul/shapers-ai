import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";

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
export default function ClientsSection() {
  return (
    <section id="clients" className="section-pad">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / Who we work with</p>
            <h2>
              Real businesses.
              <br />
              <em>Real local impact.</em>
            </h2>
          </div>
          <p className="section-intro">
            We work alongside local businesses to make everyday work a little
            easier. Here’s who we’ve helped.
          </p>
        </div>
        <article className="project-card">
          <div className="project-visual">
            <div className="project-visual-label">
              <span className="status-dot" /> Seattle, WA
              <span>Featured client / 01</span>
            </div>
            <div className="project-photo-pair">
              <div className="project-screenshot">
                <Image
                  src="/springroll-receipt-scanner.png"
                  alt="Two people at SpringRoll House Deli"
                  width={1199}
                  height={1312}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
              <div className="project-screenshot">
                <Image
                  src="/springroll-storefront.png"
                  alt="The SpringRoll House Deli counter, menu board and sauces"
                  width={750}
                  height={1000}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
            </div>
          </div>
          <div className="project-copy">
            <span className="tag">Client · AI enablement</span>
            <h3>
              SpringRoll House
            </h3>
            <p>
              A neighborhood deli in Seattle. We assisted their team with AI
              enablement, so bookkeeping and ingredient costs take less time
              and more of the day goes to good food.
            </p>
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
              <span>Supported by our Seattle team</span>
            </div>
            <div className="project-links">
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
            Run a local business? <span>We’d love to help.</span>
          </p>
          <a href="#contact" className="text-link">
            Let’s build together <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
