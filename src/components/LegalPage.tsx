import type { ReactNode } from "react";
import PageHero from "./PageHero";

export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" lines={[title]} compact />
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <div className="max-w-3xl text-[1.05rem] leading-relaxed text-muted [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-navy [&_p]:mt-4">
            <p className="text-sm">Last updated: {updated}</p>
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
