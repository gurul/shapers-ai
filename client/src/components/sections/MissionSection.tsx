/*
 * MissionSection — the three explanatory paragraphs from the Home content
 * Swiss minimalist: left-aligned, generous whitespace
 */

export default function MissionSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl md:ml-auto md:text-right">
          <div className="space-y-6 text-base leading-relaxed text-foreground/85 md:text-[1.05rem]">
            <p>
              Small businesses are often running analog, not because they want
              to, but because the tools that could help them are built for
              companies 100x their size. We change that.
            </p>
            <p>
              We pair teams of engineers, designers, and strategists with local
              businesses to scope, build, and deploy lightweight tech solutions
              like receipt scanners, inventory tools, customer workflows, and
              websites. Simple, useful software, built fast, and handed over.
            </p>
            <p>
              This initiative is spearheaded by the Seattle hub of the World
              Economic Forum&apos;s Global Shapers Community, a network of young
              professionals under 30 doing community-driven work in 500+ cities
              worldwide. Our chapter sits at the overlap of tech, finance, and
              civic infrastructure, and we partner locally with the Washington
              Small Business Development Center (WSBDC) to identify businesses
              that need us most.
            </p>
            <p>
              Hubs across continents have joined the project, making our efforts
              accessible irrespective of language, geography, reach, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
