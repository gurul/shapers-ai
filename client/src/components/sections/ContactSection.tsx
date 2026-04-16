import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const intakeFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeVM9uu-CleZjeE63uXoYMl--LrcQfjw6j1rCIeQSwHtUYX_g/viewform?usp=publish-editor";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-12 md:py-16">
      <div className="container">
        <div className="w-full">
          <div className="text-center">
            <h2
              className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                color: "#19498a",
              }}
            >
              Work With Us
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-black">
              Whether you&apos;re a business owner looking for help or a
              professional looking to contribute, this is where it starts.
            </p>
          </div>

          <div className="mx-auto mt-14 flex w-full max-w-2xl flex-col items-center gap-6 text-center">
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Our intake form collects all the details we need to understand
              your project, business, or interest in contributing.
            </p>

            <Button
              asChild
              size="lg"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide text-white"
              style={{
                fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                backgroundColor: "#19498a",
              }}
            >
              <a href={intakeFormUrl} target="_blank" rel="noreferrer">
                Open intake form
                <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
