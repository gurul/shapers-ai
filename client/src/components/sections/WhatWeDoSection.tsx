import { ArrowUpRight, Code2, ReceiptText, Workflow } from "lucide-react";

const services = [
  {
    icon: ReceiptText,
    title: "Make the everyday easier",
    text: "Receipt scanners and inventory tools that turn paperwork into useful information.",
  },
  {
    icon: Workflow,
    title: "Give time back",
    text: "Simple workflows that take repetitive tasks off a business owner’s plate.",
  },
  {
    icon: Code2,
    title: "Build something that fits",
    text: "Websites and lightweight software shaped around the way a business actually works.",
  },
];

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="section-pad">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / What we do</p>
            <h2>
              Small business.
              <br />
              <em>Purpose-built tools.</em>
            </h2>
          </div>
          <p className="section-intro">
            Modern software is often built for companies 100 times their size.
            We pair local businesses with engineers, designers, and strategists
            to change that.
          </p>
        </div>
        <div className="services-grid">
          {services.map(({ icon: Icon, title, text }, i) => (
            <article className="service" key={title}>
              <div className="service-top">
                <Icon size={26} strokeWidth={1.4} aria-hidden="true" />
                <span>0{i + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <a href="#contact" className="text-link section-link">
          Have a challenge in mind? Let’s talk{" "}
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
