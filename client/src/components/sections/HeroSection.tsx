import BotanicalSprig from "@/components/BotanicalSprig";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Asterisk } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> People first. Technology for good.
            </p>
            <h1>
              Big possibilities.
              <br />
              For small
              <br />
              <em>businesses.</em>
            </h1>
            <p className="hero-description">
              We build practical AI tools for the businesses that power our
              communities. Volunteer expertise. Real collaboration. Technology
              you can make your own.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button">
                Let’s build together{" "}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href="#projects" className="text-link">
                Explore our work <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="plant-stage hero-plant-stage">
              <BotanicalSprig className="plant-right" />
              <BotanicalSprig className="plant-left" />
              <div className="hero-image">
                <Image
                  src="/hero-photo.png"
                  alt="Two small business team members smiling inside their shop"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="hero-note">
              <Asterisk size={40} strokeWidth={1.3} aria-hidden="true" />
              <p>
                Local businesses.
                <br />
                <em>Lasting impact.</em>
              </p>
            </div>
            <p className="image-caption">
              <span>Built around people, always.</span>
              <span>01 / Community</span>
            </p>
          </div>
        </div>
        <div className="hero-footnote">
          <p>
            An initiative of the <strong>Global Shapers Community</strong>
          </p>
          <a href="#what-we-do">
            Rooted in Seattle. Connected globally.{" "}
            <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
