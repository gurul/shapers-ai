import Image from "next/image";
export default function PartnersSection() {
  return (
    <section id="partners" className="partners-section">
      <div className="container partners-inner">
        <div>
          <p className="eyebrow">Stronger together</p>
          <h2>
            Good company.
            <br />
            <em>Shared impact.</em>
          </h2>
        </div>
        <p>
          Led by the Seattle hub of the Global Shapers Community, with
          established partnerships in India, China, and Germany. Together with
          local partners, we help small businesses grow across borders.
        </p>
        <div className="partner-logo">
          <Image
            src="/partners-washington-sbdc.jpg"
            alt="Washington Small Business Development Center"
            width={1200}
            height={692}
            sizes="240px"
            className="h-auto w-full"
          />
        </div>
        <figure className="partnership-map">
          <div className="partnership-map-heading">
            <span>Connected across borders</span>
            <span className="partnership-map-status">
              <span aria-hidden="true" />
              Live &amp; growing
            </span>
          </div>
          <Image
            src="/partnership-map.svg"
            alt="World map highlighting established partnerships in India, China, and Germany, with the Seattle hub marked separately."
            width={1000}
            height={450}
            sizes="(max-width: 767px) 100vw, 1100px"
            className="partnership-map-image"
          />
          <figcaption className="partnership-map-caption">
            <ul aria-label="Established partnership countries">
              <li>India</li>
              <li>China</li>
              <li>Germany</li>
            </ul>
            <p>
              Our network is live. This map is updated as new registrations come
              in.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
