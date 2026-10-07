import type { ReactNode } from "react";
import type { Img } from "@/lib/site";
import { delay } from "@/lib/motion";
import Media from "./Media";

/** Cinematic inner-page hero. Always dark, so the transparent header reads correctly. */
export default function PageHero({
  eyebrow,
  lines,
  accent,
  image,
  children,
  position,
  compact = false,
}: {
  eyebrow: string;
  lines: string[];
  accent?: number;
  image?: Img;
  children?: ReactNode;
  position?: string;
  compact?: boolean;
}) {
  return (
    <section
      className={`relative isolate flex items-end overflow-hidden bg-navy-950 text-white ${
        compact ? "min-h-[46svh] pb-14 pt-36 sm:pb-16" : "min-h-[72svh] pb-16 pt-36 sm:pb-24 lg:min-h-[78svh]"
      }`}
    >
      {image && (
        <>
          <div className="hero-settle absolute inset-0 -z-10">
            <Media image={image} sizes="100vw" priority parallax={0.08} position={position} className="!absolute inset-0" />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(4,17,31,0.55)_0%,rgba(4,17,31,0.35)_40%,rgba(4,17,31,0.92)_100%)] lg:bg-[linear-gradient(95deg,rgba(4,17,31,0.92)_0%,rgba(4,17,31,0.65)_45%,rgba(4,17,31,0.25)_100%)]"
          />
        </>
      )}
      <div className="container-x">
        <div className="max-w-3xl">
          <p data-reveal className="eyebrow text-sky">
            {eyebrow}
          </p>
          <h1 data-reveal style={delay(100)} className="display mt-6 text-[2.6rem] sm:text-6xl lg:text-[4.4rem]">
            {lines.map((line, i) => (
              <span key={i} className={`block ${i === accent ? "text-sky" : ""}`}>
                {line}
              </span>
            ))}
          </h1>
          {children && (
            <div data-reveal style={delay(200)} className="lede mt-7 max-w-2xl text-white/80">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
