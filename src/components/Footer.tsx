import Link from "next/link";
import { nav, site } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_auto] md:py-20">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs text-[0.95rem] leading-relaxed text-slate">{site.descriptor}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-1 sm:max-w-xs">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center text-[0.95rem] text-white/75 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="eyebrow self-start leading-loose text-sky/80 md:text-right">
          People
          <br />
          Markets
          <br />
          Opportunities
          <br />
          Without borders
        </p>
      </div>
      <div className="border-t border-white/[0.07]">
        <div className="container-x flex flex-col gap-3 py-6 text-sm text-slate sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy" className="inline-flex min-h-11 items-center hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="inline-flex min-h-11 items-center hover:text-white">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
