import { processSteps } from "@/lib/site";
import { delay } from "@/lib/motion";
import SectionHeader from "../SectionHeader";

export default function ProcessSection({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <section className={`py-24 sm:py-32 lg:py-36 ${dark ? "bg-navy text-white" : "bg-cloud"}`}>
      <div className="container-x">
        <SectionHeader tone={tone} eyebrow="How we work" lines={["From introduction", "toward execution."]} accent={1} className="max-w-2xl" />
        <ol className="mt-14 grid gap-px lg:mt-20 lg:grid-cols-4 lg:gap-10">
          {processSteps.map((step, i) => (
            <li
              key={step.n}
              data-reveal
              style={delay(i * 110)}
              className={`border-t py-8 lg:py-10 ${dark ? "border-white/15" : "border-navy/15"}`}
            >
              <span className={`text-sm font-semibold tracking-[0.2em] ${dark ? "text-sky" : "text-accent"}`}>{step.n}</span>
              <h3 className={`mt-4 text-2xl font-semibold tracking-tight ${dark ? "text-white" : "text-navy"}`}>{step.title}</h3>
              <p className={`mt-3 text-base leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
