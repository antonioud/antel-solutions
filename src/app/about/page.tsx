import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Media from "@/components/Media";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import { images, leadership, pageMeta } from "@/lib/site";
import { delay } from "@/lib/motion";

export const metadata = pageMeta(
  "/about",
  "About",
  "Antel Solutions is an international consulting and business development firm built on more than 30 years of trusted relationships across industries and markets.",
);

const principles = [
  { title: "Experience", text: "More than three decades of international business development across industries, markets and economic cycles." },
  { title: "Trust", text: "Relationships earned over time through direct dealings, consistent conduct and doing what we say we will do." },
  { title: "International Business Development", text: "Helping organisations recognise and develop opportunities beyond their home markets." },
  { title: "Discretion", text: "Conversations handled with care. Introductions made thoughtfully, and only where they make sense for both sides." },
  { title: "Long-Term Relationships", text: "We value partnerships measured in decades, not single transactions." },
  { title: "Opportunity Identification", text: "Recognising where markets, capital, capability and timing can meet." },
  { title: "Strategic Partnerships", text: "Bringing together parties whose objectives genuinely align, so that partnerships have a foundation to last." },
  { title: "International Execution", text: "Remaining engaged as opportunities move from first conversation toward execution." },
];

const connects = ["Businesses", "Investors", "Capital", "Buyers", "Suppliers", "Technology", "Operators", "Strategic partners", "International opportunities"];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Antel Solutions" lines={["30+ Years of", "International Relationships"]} accent={1} image={images.boardroom}>
        <p>
          An international consulting and business development firm whose defining advantage is a network of trusted
          relationships developed over more than three decades.
        </p>
      </PageHero>

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div data-reveal="mask" className="order-2 lg:order-1">
            <Media image={images.architecture} sizes="(min-width: 1024px) 50vw, 100vw" parallax={0.06} className="aspect-[4/3] lg:aspect-[4/5]" />
          </div>
          <SectionHeader eyebrow="Who we are" lines={["A boutique firm", "with a long reach."]} accent={1} className="order-1 lg:order-2">
            <p>
              Antel Solutions advises on and facilitates opportunities in international trade, finance, technology,
              commodities, investment and business development.
            </p>
            <p>
              Our work rests on relationships built over more than 30 years: direct business relationships, long-term
              partnerships and real-world experience across borders and industries.
            </p>
            <p>
              We work deliberately and discreetly. Our role is to understand what a client is trying to achieve, identify the
              right opportunity, connect the right parties and remain engaged as that opportunity moves toward execution.
            </p>
          </SectionHeader>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-navy py-24 text-white sm:py-32 lg:py-36">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeader tone="dark" eyebrow="What we connect" lines={["The right parties,", "at the right time."]} accent={1}>
            <p>Across industries and global markets, Antel helps bring together:</p>
          </SectionHeader>
          <ul className="grid content-end gap-x-10 sm:grid-cols-2">
            {connects.map((item, i) => (
              <li
                key={item}
                data-reveal
                style={delay((i % 2) * 80)}
                className="flex items-baseline gap-5 border-b border-white/12 py-5 text-xl font-medium tracking-tight sm:text-2xl"
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-sky">{String(i + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cloud py-24 sm:py-32 lg:py-36">
        <div className="container-x">
          <SectionHeader eyebrow="What defines us" lines={["Experience. Relationships.", "Access. Execution."]} accent={1} className="max-w-3xl" />
          <dl className="mt-14 grid gap-x-16 sm:grid-cols-2 lg:mt-20">
            {principles.map((p, i) => (
              <div key={p.title} data-reveal style={delay((i % 2) * 90)} className="border-t border-navy/15 py-8">
                <dt className="text-xl font-semibold tracking-tight text-navy">{p.title}</dt>
                <dd className="mt-3 text-base leading-relaxed text-muted">{p.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {leadership.length > 0 && (
        <section className="bg-white py-24 sm:py-32" aria-labelledby="leadership-heading">
          <div className="container-x">
            <p className="eyebrow text-corporate">Leadership</p>
            <h2 id="leadership-heading" className="display mt-5 text-4xl text-navy sm:text-5xl">
              The people behind the relationships.
            </h2>
            <ul className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {leadership.map((person) => (
                <li key={person.name}>
                  {person.image && (
                    <div className="grade relative aspect-[4/5] overflow-hidden bg-cloud">
                      <Image src={person.image.src} alt={person.image.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                    </div>
                  )}
                  <h3 className="mt-6 text-xl font-semibold text-navy">{person.name}</h3>
                  <p className="eyebrow mt-2 text-corporate">{person.role}</p>
                  <p className="mt-4 text-base leading-relaxed text-muted">{person.bio}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <ProcessSection />
      <CTASection image={images.city} />
    </>
  );
}
