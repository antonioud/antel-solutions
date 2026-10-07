import { delay } from "@/lib/motion";
import MapTexture from "./MapTexture";

export default function PhilosophySection() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-28 sm:py-36 lg:py-48" aria-labelledby="philosophy-heading">
      <MapTexture />
      <div className="container-x text-center">
        <p data-reveal className="eyebrow text-corporate">
          Our philosophy
        </p>
        <h2
          id="philosophy-heading"
          data-reveal
          style={delay(80)}
          className="display mx-auto mt-8 max-w-[20ch] text-[2.1rem] text-navy sm:text-5xl lg:text-[3.9rem]"
        >
          International business is ultimately built on trust.
        </h2>
        <span data-reveal style={delay(160)} aria-hidden="true" className="mx-auto mt-10 block h-px w-16 bg-accent" />
        <p data-reveal style={delay(200)} className="lede mx-auto mt-10 max-w-2xl text-muted">
          Relationships developed over decades create access, understanding and opportunity that cannot be reproduced through
          databases or introductions alone.
        </p>
      </div>
    </section>
  );
}
