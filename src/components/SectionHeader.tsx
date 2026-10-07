import type { ReactNode } from "react";
import { delay } from "@/lib/motion";

/**
 * Eyebrow + headline + optional copy. `tone` controls colours for light or dark sections.
 * Headline lines are passed as an array; set `accent` to the index rendered in accent blue.
 */
export default function SectionHeader({
  eyebrow,
  lines,
  accent,
  as: Tag = "h2",
  tone = "light",
  size = "lg",
  children,
  className = "",
}: {
  eyebrow?: string;
  lines: string[];
  accent?: number;
  as?: "h1" | "h2";
  tone?: "light" | "dark";
  size?: "md" | "lg" | "xl";
  children?: ReactNode;
  className?: string;
}) {
  const dark = tone === "dark";
  const sizes = {
    md: "text-[2rem] sm:text-[2.5rem] lg:text-[2.9rem]",
    lg: "text-[2.25rem] sm:text-5xl lg:text-[3.6rem]",
    xl: "text-[2.6rem] sm:text-6xl lg:text-[4.6rem]",
  };
  return (
    <div className={className}>
      {eyebrow && (
        <p data-reveal className={`eyebrow mb-5 sm:mb-6 ${dark ? "text-sky" : "text-corporate"}`}>
          {eyebrow}
        </p>
      )}
      <Tag data-reveal style={delay(80)} className={`display ${sizes[size]} ${dark ? "text-white" : "text-navy"}`}>
        {lines.map((line, i) => (
          <span key={i} className={`block ${i === accent ? (dark ? "text-sky" : "text-accent") : ""}`}>
            {line}
          </span>
        ))}
      </Tag>
      {children && (
        <div data-reveal style={delay(160)} className={`lede mt-6 space-y-4 sm:mt-8 ${dark ? "text-white/75" : "text-muted"}`}>
          {children}
        </div>
      )}
    </div>
  );
}
