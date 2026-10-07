import { images } from "@/lib/site";
import Button from "../Button";
import Media from "../Media";
import SectionHeader from "../SectionHeader";

export default function GlobalPerspective() {
  return (
    <section className="relative isolate flex min-h-[78svh] items-center overflow-hidden bg-navy-950 py-28 text-white sm:py-36">
      <Media image={images.mountains} sizes="100vw" parallax={0.14} className="!absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(4,17,31,0.92)_0%,rgba(4,17,31,0.7)_45%,rgba(4,17,31,0.25)_100%)]" />
      <div className="container-x">
        <div className="max-w-xl">
          <SectionHeader tone="dark" eyebrow="A global perspective" lines={["Local Insight.", "Global Reach."]} accent={1}>
            <p>
              From emerging markets to established economies, Antel brings decades of international business experience,
              cultural understanding and trusted relationships to each opportunity.
            </p>
          </SectionHeader>
          <div data-reveal className="mt-10">
            <Button href="/network" variant="outline">
              Our Network
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
