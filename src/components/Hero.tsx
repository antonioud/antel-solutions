import Image from "next/image";
import { images } from "@/lib/site";
import { delay } from "@/lib/motion";
import Button from "./Button";

const stats = [
  { value: "30+", label: "Years of Experience" },
  { value: "Global", label: "Network & Relationships" },
  { value: "Real", label: "Opportunities" },
];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[88svh] flex-col overflow-hidden bg-navy-950 text-white md:min-h-[100svh]">
      {/* Photography: right-weighted on desktop, full-bleed on mobile */}
      <div className="absolute inset-0 -z-10 md:left-[28%]">
        <div data-parallax="0.08" className="absolute inset-x-0 -top-[6%] h-[112%]">
          <div className="hero-settle absolute inset-0">
            <Image
              src={images.earth.src}
              alt={images.earth.alt}
              fill
              priority
              quality={82}
              sizes="(min-width: 768px) 72vw, 100vw"
              className="object-cover object-[60%_50%] saturate-[0.9]"
            />
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#04111f_0%,#04111f_26%,rgba(4,17,31,0.82)_42%,rgba(4,17,31,0.25)_70%,rgba(4,17,31,0.15)_100%)] max-md:bg-[linear-gradient(180deg,rgba(4,17,31,0.55)_0%,rgba(4,17,31,0.78)_45%,#04111f_100%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-navy-950 to-transparent" />

      <div className="container-x flex flex-1 flex-col justify-center pb-8 pt-32 md:pt-36">
        <div className="max-w-[44rem]">
          <p data-reveal className="eyebrow text-white/80">
            Global relationships. Real opportunities.
          </p>
          <h1 data-reveal style={delay(100)} className="display mt-6 text-[2.6rem] sm:text-[3.6rem] lg:text-[4.1rem] xl:text-[4.4rem]">
            <span className="block">Connecting</span>
            <span className="block">Markets.</span>
            <span className="block text-sky lg:whitespace-nowrap">Creating Possibilities.</span>
          </h1>
          <p data-reveal style={delay(200)} className="lede mt-7 max-w-[34rem] text-white/80">
            Antel Solutions is an international consulting and business development firm built on more than 30 years of
            trusted relationships, helping businesses, investors and strategic partners identify, structure and execute
            opportunities across global markets.
          </p>
          <div data-reveal style={delay(300)} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href="/contact">Start a Conversation</Button>
            <Button href="/capabilities" variant="link" className="text-white">
              Explore Our Capabilities
            </Button>
          </div>
        </div>
      </div>

      <div className="container-x pb-10 md:pb-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <dl data-reveal style={delay(400)} className="grid grid-cols-3 md:flex md:divide-x md:divide-white/20">
            {stats.map((s) => (
              <div key={s.value} className="flex flex-col-reverse justify-end pr-3 md:px-10 md:first:pl-0">
                <dt className="mt-1 text-[0.8rem] leading-snug text-white/70 sm:text-[0.95rem]">{s.label}</dt>
                <dd className="text-[1.6rem] font-semibold tracking-tight sm:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
          <p
            data-reveal
            style={delay(500)}
            className="hidden text-right text-[0.7rem] font-medium uppercase leading-[1.9] tracking-[0.26em] text-sky/85 md:block"
          >
            People
            <br />
            Markets
            <br />
            Opportunities
            <br />
            Without borders
          </p>
        </div>
      </div>
    </section>
  );
}
