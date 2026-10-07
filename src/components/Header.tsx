"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/lib/site";
import Logo from "./Logo";
import { Arrow } from "./Button";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ${
        solid ? "border-b border-white/[0.06] bg-navy-950/80 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <div className={`container-x flex items-center justify-between transition-[height] duration-500 ${scrolled ? "h-[72px]" : "h-[84px] lg:h-[96px]"}`}>
        <Link href="/" className="relative z-10 -m-2 p-2" aria-label="Antel Solutions, home">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative py-2 text-[0.9rem] transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-sky after:transition-transform after:duration-500 ${
                    isActive(item.href) ? "text-white after:scale-x-100" : "text-white/75 after:scale-x-0 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="group hidden items-center gap-3 rounded-full border border-white/35 px-5 py-2.5 text-[0.88rem] font-medium text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-navy lg:inline-flex"
        >
          Start a Conversation <Arrow />
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="relative z-10 -mr-2 flex h-12 w-12 items-center justify-center text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-3 w-6" aria-hidden="true">
            <span className={`absolute left-0 h-px w-6 bg-current transition-transform duration-500 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-px w-6 bg-current transition-transform duration-500 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[72px] h-[calc(100dvh-72px)] overflow-y-auto bg-navy-950 lg:hidden"
      >
        <nav aria-label="Mobile" className="container-x flex min-h-full flex-col justify-between pb-10 pt-8">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block py-3 text-[1.75rem] font-medium tracking-tight ${isActive(item.href) ? "text-white" : "text-white/70"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="eyebrow text-sky">Global relationships. Real opportunities.</p>
            <Link href="/contact" className="group mt-6 inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 font-medium text-navy">
              Start a Conversation <Arrow />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
