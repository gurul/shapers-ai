/*
 * AboutSection — Swiss minimalist
 * Left-aligned text, process steps as a simple list
 */

export default function AboutSection() {
  const steps = [
    "A business comes to us (or gets referred) with a problem.",
    "We scope it — what would actually help, what's realistic to build.",
    "A small team of volunteers builds and deploys it.",
    "We hand it over. The business owns it.",
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl">
          <h2
            className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            About shapers.ai
          </h2>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/85 md:text-[1.05rem]">
            <p>
              Most AI conversations right now are about billion-dollar
              foundation model infrastructure companies and enterprise SaaS. But
              the restaurant down the street still does inventory on a legal
              pad, and nobody&apos;s building for them.
            </p>
            <p>
              shapers.ai exists because we think the most interesting use of
              technology isn&apos;t always the most complex one. Sometimes
              it&apos;s a receipt scanner that saves a restaurant owner four
              hours a week. Sometimes it&apos;s a website that actually converts
              walk-in traffic. Sometimes it&apos;s just showing a business owner
              what&apos;s possible so they stop paying for tools they don&apos;t
              need.
            </p>
            <p>
              We&apos;re a project of the WEF Global Shapers Seattle Hub. Global
              Shapers is a worldwide network of ~15,000 young professionals
              organized into city-based hubs, each running community impact
              projects. Our hub chose to focus on what we know: building things.
              The professionals in our network work at the biggest tech
              companies on the planet and they volunteer their nights and
              weekends to ship real projects for real businesses.
            </p>
            <p>
              We work in partnership with the Washington Small Business
              Development Center (WSBDC) and the Cities of Seattle and Bellevue,
              who help us identify and connect with business owners who would
              benefit most from lightweight tech solutions.
            </p>
          </div>

          {/* Process */}
          <div className="mt-12">
            <p
              className="mb-6 text-sm font-semibold uppercase tracking-wide"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
              }}
            >
              Our approach
            </p>
            <ol className="space-y-4">
              {steps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span
                    className="mt-0.5 shrink-0 text-sm font-medium text-muted-foreground"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      minWidth: "1.5rem",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base leading-relaxed text-foreground/85">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-8 text-base leading-relaxed text-foreground/85 md:text-[1.05rem]">
            No retainers, no recurring fees, no strings. We&apos;re not a
            consulting firm and we&apos;re not a nonprofit trying to scale a
            platform. We&apos;re a group of people who like building things and
            want those things to matter.
          </p>
        </div>
      </div>
    </section>
  );
}
