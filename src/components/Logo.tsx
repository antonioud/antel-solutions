import { useId } from "react";

/**
 * Typographic Antel Solutions wordmark (stand-in until the supplied logo files
 * are dropped into /public/brand). The "A" is drawn as a gradient chevron, as in the mockup.
 */
export default function Logo({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  const id = useId();
  const text = tone === "light" ? "text-white" : "text-navy";
  return (
    <span className={`inline-flex flex-col leading-none ${text} ${className}`} aria-label="Antel Solutions" role="img">
      <span className="flex items-end text-[1.6rem] font-semibold tracking-[0.12em]" aria-hidden="true">
        <svg viewBox="0 0 40 36" className="mr-[0.08em] h-[0.74em] w-auto" aria-hidden="true">
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#8cb8f7" />
              <stop offset="1" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <path d="M20 0 L40 36 H31.5 L20 14.8 L8.5 36 H0 Z" fill={`url(#${id})`} />
        </svg>
        NTEL
      </span>
      <span className="mt-[0.35rem] pl-[0.1em] text-[0.56rem] font-medium tracking-[0.62em]" aria-hidden="true">
        SOLUTIONS
      </span>
    </span>
  );
}
