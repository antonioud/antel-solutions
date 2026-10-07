import Link from "next/link";
import { capabilities } from "@/lib/site";
import { delay } from "@/lib/motion";
import Button from "../Button";
import Media from "../Media";
import SectionHeader from "../SectionHeader";

export default function CapabilityGrid() {
  return (
    <section className="bg-cloud py-24 sm:py-32 lg:py-36">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-20">
          <SectionHeader eyebrow="Our capabilities" lines={["Diverse Expertise.", "Real-World Impact."]} accent={1} />
          <p data-reveal style={delay(160)} className="lede max-w-xl text-muted lg:pb-2">
            We work across a range of industries, connecting opportunities, capital, technology and expertise to support
            international growth and business development.
          </p>
        </div>

        <ul className="mt-14 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-20 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <li key={c.title} data-reveal style={delay((i % 4) * 90)}>
              <Link
                href="/capabilities"
                className="img-hover group relative block aspect-[16/11] overflow-hidden bg-navy sm:aspect-[4/5] lg:aspect-[3/4]"
              >
                <Media image={{ src: c.image.src, alt: "" }} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="!absolute inset-0" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white lg:p-7">
                  <h3 className="text-xl font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-white/75 lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:transition-all lg:duration-700 lg:group-hover:max-h-32 lg:group-hover:opacity-100 lg:group-focus-visible:max-h-32 lg:group-focus-visible:opacity-100">
                    {c.text}
                  </p>
                  <span aria-hidden="true" className="mt-5 block h-px w-10 bg-sky transition-[width] duration-700 group-hover:w-16" />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div data-reveal className="mt-12 flex justify-center">
          <Button href="/capabilities" variant="dark">
            Explore Our Capabilities
          </Button>
        </div>
      </div>
    </section>
  );
}
