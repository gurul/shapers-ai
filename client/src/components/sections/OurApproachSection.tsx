import BotanicalSprig from "@/components/BotanicalSprig";
import Image from "next/image";
const steps = [
  {
    title: "Start with a conversation",
    text: "Tell us what’s getting in the way. A business can come to us directly or through a referral.",
  },
  {
    title: "Find the useful thing",
    text: "Together, we scope what would actually help and what’s realistic to build.",
  },
  {
    title: "Build it together",
    text: "A small team of volunteers builds and deploys a tool that fits your day-to-day.",
  },
  {
    title: "Make it yours",
    text: "We hand it over. Your business owns the solution, and what comes next.",
  },
];
export default function OurApproachSection() {
  return (
    <section id="approach" className="section-pad approach-section">
      <div className="container approach-grid">
        <div>
          <p className="eyebrow">04 / How it works</p>
          <h2>
            A little expertise.
            <br />
            <em>A lot of possibility.</em>
          </h2>
          <div className="plant-stage approach-plant-stage">
            <BotanicalSprig className="plant-right" />
            <BotanicalSprig className="plant-left" />
            <div className="approach-image">
              <Image
                src="/approach-photo.png"
                alt="A small business owner in a colorful storefront"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <ol className="steps">
          {steps.map((step, i) => (
            <li key={step.title}>
              <span className="step-number">0{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
