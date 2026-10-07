import PageHero from "@/components/PageHero";
import Media from "@/components/Media";
import MapTexture from "@/components/sections/MapTexture";
import PhilosophySection from "@/components/sections/PhilosophySection";
import CTASection from "@/components/sections/CTASection";
import { images, pageMeta } from "@/lib/site";
import { delay } from "@/lib/motion";

export const metadata = pageMeta(
  "/network",
  "Our Network",
  "Antel Solutions' international network has been developed through more than 30 years of business relationships across industries and markets.",
);

const pillars = [
  {
    title: "Trusted Relationships",
    text: "Our network is made up of people we know and have worked with directly. Trust is earned over years of conduct, not claimed in a single meeting.",
  },
  {
    title: "Cross-Border Experience",
    text: "Decades of working across markets, cultures and business practices inform how we approach each opportunity and each introduction.",
  },
  {
    title: "Access to Opportunity",
    text: "Long-standing relationships often open conversations that are difficult to begin any other way, and bring opportunities to the table earlier.",
  },
  {
    title: "Long-Term Partnerships",
    text: "We value relationships measured in decades. Many connections began as a single introduction and grew into enduring partnerships.",
  },
  {
    title: "Strategic Connections",
    text: "The right introduction, at the right time, between parties whose objectives genuinely align, is often what moves an opportunity forward.",
  },
];

export default function NetworkPage() {
  return (
    <>
      <PageHero eyebrow="Our network" lines={["A Network Built", "Over Decades"]} accent={1} image={images.network}>
        <p>
          Antel Solutions&apos; international network has been developed through more than 30 years of business relationships
          across industries and markets.
        </p>
      </PageHero>

      <section className="relative isolate overflow-hidden bg-white py-24 sm:py-32 lg:py-40">
        <MapTexture />
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12">
            <h2 data-reveal className="display text-[2.1rem] text-navy sm:text-5xl lg:col-span-7">
              Markets evolve. <span className="text-accent">Trusted relationships endure.</span>
            </h2>
            <p data-reveal style={delay(120)} className="lede text-muted lg:col-span-4 lg:col-start-9 lg:self-end">
              Successful international business often comes down to knowing who to call, who to trust and how to bring the right
              parties together.
            </p>
          </div>

          <ol className="mt-16 lg:mt-24">
            {pillars.map((p, i) => (
              <li key={p.title} data-reveal className="grid gap-4 border-t border-navy/12 py-10 lg:grid-cols-12 lg:gap-8 lg:py-12">
                <span className="text-sm font-semibold tracking-[0.2em] text-accent lg:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-2xl font-semibold tracking-tight text-navy sm:text-[1.75rem] lg:col-span-5">{p.title}</h3>
                <p className="text-base leading-relaxed text-muted sm:text-lg lg:col-span-5 lg:col-start-8">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative isolate flex min-h-[70svh] items-center overflow-hidden bg-navy-950 py-28 text-white">
        <Media image={images.mountains} sizes="100vw" parallax={0.14} className="!absolute inset-0 -z-10" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy-950/60" />
        <div className="container-x text-center">
          <p data-reveal className="display mx-auto max-w-[22ch] text-[2rem] sm:text-5xl lg:text-[3.6rem]">
            Knowing who to call, who to trust, and <span className="text-sky">how to bring the right parties together.</span>
          </p>
        </div>
      </section>

      <PhilosophySection />
      <CTASection image={images.boardroom} />
    </>
  );
}
