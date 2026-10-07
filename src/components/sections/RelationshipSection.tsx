import { images } from "@/lib/site";
import Button from "../Button";
import Media from "../Media";
import SectionHeader from "../SectionHeader";

export default function RelationshipSection() {
  return (
    <section className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="max-w-xl">
          <SectionHeader eyebrow="Our approach" lines={["Relationships", "Drive Results"]} accent={1}>
            <p>
              For more than three decades, Antel Solutions has built and maintained trusted international relationships
              across private enterprise, investors, operators and strategic partners.
            </p>
            <p>We connect the right people, ideas, resources and capital to help create real opportunities.</p>
          </SectionHeader>
          <div data-reveal className="mt-10">
            <Button href="/about" variant="dark">
              Learn More
            </Button>
          </div>
        </div>
        <div data-reveal="mask">
          <Media
            image={images.relationships}
            sizes="(min-width: 1024px) 55vw, 100vw"
            parallax={0.06}
            className="aspect-[4/3] lg:aspect-[5/6]"
          />
        </div>
      </div>
    </section>
  );
}
