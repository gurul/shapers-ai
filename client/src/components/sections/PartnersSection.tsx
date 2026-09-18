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
          Led by the Seattle hub of the Global Shapers Community, with hubs
          across every continent joining in. We work alongside local partners
          who help small businesses grow.
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
      </div>
    </section>
  );
}
