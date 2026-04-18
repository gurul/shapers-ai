import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  ACCENT_FOREST_GREEN,
  ACCENT_FOREST_GREEN_HOVER,
} from "@/const";

const contactFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeVM9uu-CleZjeE63uXoYMl--LrcQfjw6j1rCIeQSwHtUYX_g/viewform?usp=publish-editor";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-12 md:py-16">
      <div className="container">
        <div className="w-full">
          <div className="text-center">
            <h2
              className="font-serif text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl"
              style={{ color: ACCENT_FOREST_GREEN }}
            >
              Work With Us
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-black">
              Whether you&apos;re a business owner looking for help or a
              professional looking to contribute, this is where it starts.
            </p>
          </div>

          <div className="mx-auto mt-8 flex w-full max-w-2xl flex-col items-center gap-6 text-center md:mt-10">
            <Button
              asChild
              size="lg"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide text-white"
              style={{ backgroundColor: ACCENT_FOREST_GREEN }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = ACCENT_FOREST_GREEN_HOVER;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = ACCENT_FOREST_GREEN;
              }}
            >
              <a href={contactFormUrl} target="_blank" rel="noreferrer">
                Get started
                <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
