import PageHero from "@/components/PageHero";
import Media from "@/components/Media";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import { images, pageMeta, type Img } from "@/lib/site";
import { delay } from "@/lib/motion";

export const metadata = pageMeta(
  "/capabilities",
  "Capabilities",
  "International trade, commodities, finance and investment relationships, technology and medical solutions, and commerce and business development: how Antel Solutions connects opportunity across markets.",
);

const groups: { id: string; title: string; intro: string; items: string[]; image: Img; note?: string }[] = [
  {
    id: "trade",
    title: "Trade & Commodities",
    intro:
      "Connecting buyers, suppliers and markets across borders, with long-standing relationships that support sourcing, distribution and market access.",
    items: ["International Trade", "Metals", "Energy", "Commodities", "Sourcing", "Distribution", "Market Access"],
    image: images.tradePort,
  },
  {
    id: "finance",
    title: "Finance & Investment",
    intro:
      "Identifying opportunities and introducing projects and businesses to relevant capital relationships, then supporting the commercial path toward a transaction.",
    items: ["Trade Financing", "Project Financing", "Strategic Capital Relationships", "Investment Opportunities", "Transaction Support"],
    image: images.city,
    note: "Antel facilitates introductions and supports structuring. It does not act as a lender, bank or investment adviser.",
  },
  {
    id: "technology",
    title: "Technology & Medical Solutions",
    intro:
      "Connecting innovators, operators and strategic partners to help advanced technologies and medical solutions reach new markets.",
    items: ["Artificial Intelligence", "Medical Solutions", "Electronics", "Communications", "Technology Partnerships"],
    image: images.aiMedical,
  },
  {
    id: "commerce",
    title: "Commerce & Business Development",
    intro: "Supporting international growth through distribution partnerships, strategic relationships and market development.",
    items: ["E-Commerce", "International Expansion", "Distribution Partnerships", "Strategic Relationships", "Market Development"],
    image: images.ecommerce,
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero eyebrow="Our capabilities" lines={["Diverse Expertise.", "Real-World Impact."]} accent={1} image={images.energy} position="50% 60%">
        <p>
          We work across a range of industries, connecting opportunities, capital, technology and expertise to support
          international growth and business development.
        </p>
      </PageHero>

      <nav aria-label="Capability areas" className="border-b border-mist bg-white">
        <ul className="container-x flex flex-wrap gap-x-8 gap-y-1 py-4">
          {groups.map((g) => (
            <li key={g.id}>
              <a href={`#${g.id}`} className="inline-flex min-h-11 items-center text-[0.95rem] text-muted transition-colors hover:text-navy">
                {g.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {groups.map((g, i) => {
        const flip = i % 2 === 1;
        return (
          <section
            key={g.id}
            id={g.id}
            aria-labelledby={`${g.id}-heading`}
            className={`scroll-mt-24 py-24 sm:py-28 lg:py-36 ${flip ? "bg-cloud" : "bg-white"}`}
          >
            <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
              <div data-reveal="mask" className={flip ? "lg:order-2" : ""}>
                <Media image={g.image} sizes="(min-width: 1024px) 50vw, 100vw" parallax={0.06} className="aspect-[4/3] lg:aspect-[5/6]" />
              </div>
              <div>
                <p data-reveal className="eyebrow text-corporate">
                  {String(i + 1).padStart(2, "0")} / 04
                </p>
                <h2 id={`${g.id}-heading`} data-reveal style={delay(80)} className="display mt-5 text-[2.1rem] text-navy sm:text-5xl">
                  {g.title}
                </h2>
                <p data-reveal style={delay(160)} className="lede mt-6 max-w-xl text-muted">
                  {g.intro}
                </p>
                <ul data-reveal style={delay(220)} className="mt-10 grid border-t border-navy/12 sm:grid-cols-2 sm:gap-x-10">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-center gap-4 border-b border-navy/12 py-4 text-[1.05rem] font-medium text-navy">
                      <span aria-hidden="true" className="h-px w-4 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                {g.note && <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">{g.note}</p>}
              </div>
            </div>
          </section>
        );
      })}

      <ProcessSection tone="dark" />
      <CTASection image={images.communications} />
    </>
  );
}
