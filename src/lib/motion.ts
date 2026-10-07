import type { CSSProperties } from "react";

/** Stagger helper for [data-reveal] elements. */
export const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;
