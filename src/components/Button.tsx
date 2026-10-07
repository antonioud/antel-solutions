import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "link" | "dark";

const styles: Record<Variant, string> = {
  solid: "bg-white text-navy hover:bg-mist px-6 sm:px-7 min-h-12 rounded-full",
  dark: "bg-navy text-white hover:bg-corporate px-6 sm:px-7 min-h-12 rounded-full",
  outline: "border border-white/40 text-white hover:border-white hover:bg-white/5 px-5 min-h-11 rounded-full",
  link: "min-h-11 underline decoration-current/40 underline-offset-[6px] hover:decoration-current",
};

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1 ${className}`} aria-hidden="true">
      <path d="M1 8h13M9 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Button({
  href,
  children,
  variant = "solid",
  arrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 text-[0.95rem] font-medium transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && variant !== "link" && <Arrow />}
    </Link>
  );
}
