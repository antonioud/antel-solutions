import { delay } from "@/lib/motion";
import Button from "../Button";
import MapTexture from "./MapTexture";

export default function NetworkSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-24 sm:py-32 lg:py-44" aria-labelledby="network-heading">
      <MapTexture />
      <div className="container-x">
        <p data-reveal className="eyebrow text-corporate">
          The Antel network
        </p>
        <h2
          id="network-heading"
          data-reveal
          style={delay(80)}
          className="display mt-6 max-w-[17ch] text-[2.25rem] text-navy sm:text-5xl lg:text-[4.1rem]"
        >
          Three decades of relationships <span className="text-accent">cannot be replicated overnight.</span>
        </h2>

        <div className="mt-14 grid gap-10 border-t border-mist pt-12 lg:mt-20 lg:grid-cols-12 lg:gap-16 lg:pt-16">
          <p data-reveal className="text-2xl font-medium leading-snug tracking-tight text-navy sm:text-[1.75rem] lg:col-span-5">
            Markets evolve. Technologies change. Opportunities move quickly. Trusted relationships endure.
          </p>
          <div data-reveal style={delay(120)} className="lede space-y-5 text-muted lg:col-span-6 lg:col-start-7">
            <p>
              For more than 30 years, Antel Solutions has developed an international network built through direct business
              relationships, long-term partnerships and real-world experience.
            </p>
            <p>
              Successful international business often comes down to knowing who to call, who to trust and how to bring the
              right parties together.
            </p>
            <p className="font-medium text-navy">That network is at the center of Antel Solutions.</p>
            <div className="pt-4">
              <Button href="/network" variant="dark">
                Our Network
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
