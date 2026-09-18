import MorphingMark from "@/components/MorphingMark";
import { ArrowUpRight } from "lucide-react";
const contactFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeVM9uu-CleZjeE63uXoYMl--LrcQfjw6j1rCIeQSwHtUYX_g/viewform?usp=publish-editor";
export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">
        <div>
          <p className="eyebrow">A small step starts something good</p>
          <h2>
            Let’s make
            <br />
            <em>possible happen.</em>
          </h2>
          <p>
            A business with a challenge? A professional with a little time and a
            lot to offer? There’s a place for you here.
          </p>
          <a
            href={contactFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-light"
          >
            Let’s get started <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </div>
        <MorphingMark />
      </div>
    </section>
  );
}
