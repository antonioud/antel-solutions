import { images } from "@/lib/site";
import Button from "../Button";
import Media from "../Media";
import SectionHeader from "../SectionHeader";

export default function AboutSection() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div className="grid lg:min-h-[86svh] lg:grid-cols-2">
        <div className="relative min-h-[52svh] lg:order-2 lg:min-h-0">
          <Media image={images.architecture} sizes="(min-width: 1024px) 50vw, 100vw" parallax={0.1} className="!absolute inset-0" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-navy-950 lg:via-navy-950/20" />
        </div>
        <div className="container-x flex flex-col justify-center py-20 sm:py-28 lg:mr-0 lg:max-w-[660px] lg:py-32">
          <SectionHeader tone="dark" eyebrow="About Antel Solutions" lines={["Built on Trust.", "Driven by Opportunity."]} accent={1}>
            <p>
              With more than three decades of international business development experience and a global network of trusted
              relationships, Antel Solutions helps clients identify, structure and execute opportunities across borders and
              industries.
            </p>
            <p>
              Our value is built on experience, discretion, relationships and the ability to connect the right people at the
              right time.
            </p>
          </SectionHeader>
          <div data-reveal className="mt-10 flex flex-wrap items-end justify-between gap-8">
            <Button href="/about" variant="outline">
              Our Story
            </Button>
            <p className="text-[0.7rem] font-medium uppercase leading-[1.9] tracking-[0.26em] text-sky/85">
              Experience
              <br />
              Relationships
              <br />
              Execution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
