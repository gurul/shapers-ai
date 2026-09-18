import BotanicalSprig from "@/components/BotanicalSprig";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="about-section section-pad">
      <div className="container about-grid">
        <div className="plant-stage about-plant-stage">
          <BotanicalSprig className="plant-right" />
          <BotanicalSprig className="plant-left" />
          <div className="about-image">
            <Image
              src="/philosophy-photo.png"
              alt="Support local business sign"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">02 / Why we’re here</p>
          <h2>
            The next big thing
            <br />
            could be a <em>little thing.</em>
          </h2>
          <p>
            Most AI conversations revolve around billion-dollar infrastructure
            and enterprise software. Meanwhile, the restaurant down the street
            still does inventory on a legal pad.
          </p>
          <p>
            We believe the most valuable technology isn’t always the most
            complex. Sometimes it’s giving someone back a few hours of their
            week—and the confidence to see what’s possible.
          </p>
          <div className="about-signoff">
            Simple, useful software.
            <br />
            <span>Built together. Handed over. Yours to keep.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
