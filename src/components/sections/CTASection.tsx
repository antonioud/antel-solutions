import { images, type Img } from "@/lib/site";
import Button from "../Button";
import Media from "../Media";
import SectionHeader from "../SectionHeader";

export default function CTASection({
  image = images.city,
  eyebrow = "Let's talk",
  lines = ["Ready to Explore", "What's Possible?"],
  text = "Whether you are looking to enter a new market, secure financing, source products or technology, identify strategic partners or explore an investment opportunity, we are here to start the conversation.",
}: {
  image?: Img;
  eyebrow?: string;
  lines?: string[];
  text?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-28 text-white sm:py-36 lg:py-44">
      <Media image={image} sizes="100vw" parallax={0.12} className="!absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(4,17,31,0.72)_0%,rgba(4,17,31,0.88)_70%)]" />
      <div className="container-x flex flex-col items-center text-center">
        <SectionHeader tone="dark" eyebrow={eyebrow} lines={lines} accent={1} className="max-w-3xl [&_.lede]:mx-auto">
          <p className="mx-auto max-w-2xl">{text}</p>
        </SectionHeader>
        <div data-reveal className="mt-11">
          <Button href="/contact">Start a Conversation</Button>
        </div>
      </div>
    </section>
  );
}
