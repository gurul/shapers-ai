/*
 * AboutSection — Swiss minimalist
 * Left-aligned text, section number, process steps as a simple list
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
        <span className="section-number">02 — About</span>

        <h2
          className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
          style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
        >
          About shapers.ai
        </h2>

        <div className="mt-8 max-w-2xl space-y-6 text-base md:text-[1.05rem] leading-relaxed text-foreground/85">
          <p>
            Most AI conversations right now are about billion-dollar foundation
            model infrastructure companies and enterprise SaaS. But the
            restaurant down the street still does inventory on a legal pad, and
            nobody's building for them.
          </p>
          <p>
            shapers.ai exists because we think the most interesting use of
            technology isn't always the most complex one. Sometimes it's a
            receipt scanner that saves a restaurant owner four hours a week.
            Sometimes it's a website that actually converts walk-in traffic.
            Sometimes it's just showing a business owner what's possible so they
            stop paying for tools they don't need.
          </p>
          <p>
            We're a project of the WEF Global Shapers Seattle Hub. Global
            Shapers is a worldwide network of ~15,000 young professionals
            organized into city-based hubs, each running community impact
            projects. Our hub chose to focus on what we know: building things.
            The professionals in our network work at the biggest tech companies
            on the planet — and they volunteer their nights and weekends to ship
            real projects for real businesses.
          </p>
          <p>
            We work in partnership with the Washington Small Business
            Development Center (WSBDC) and the Cities of Seattle and Bellevue,
            who help us identify and connect with business owners who would
            benefit most from lightweight tech solutions.
          </p>
        </div>

        {/* Process */}
        <div className="mt-12 max-w-2xl">
          <p
            className="text-sm font-semibold tracking-wide uppercase mb-6"
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em" }}
          >
            Our approach
          </p>
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  className="text-sm font-medium text-muted-foreground mt-0.5 shrink-0"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", minWidth: "1.5rem" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base text-foreground/85 leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-8 max-w-2xl text-base md:text-[1.05rem] leading-relaxed text-foreground/85">
          No retainers, no recurring fees, no strings. We're not a consulting
          firm and we're not a nonprofit trying to scale a platform. We're a
          group of people who like building things and want those things to
          matter.
        </p>
      </div>
    </section>
  );
}
