import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { images, pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "/contact",
  "Contact",
  "Start a conversation with Antel Solutions. Tell us what you are looking to build, finance, source, expand or bring to market.",
);

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" lines={["Start a", "Conversation"]} accent={1} image={images.earth} position="70% 50%" compact>
        <p>Tell us what you are looking to build, finance, source, expand or bring to market.</p>
      </PageHero>

      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <aside className="lg:pt-2">
            <p data-reveal className="eyebrow text-corporate">
              How we begin
            </p>
            <p data-reveal className="mt-5 text-2xl font-medium leading-snug tracking-tight text-navy sm:text-[1.7rem]">
              Every opportunity starts with a conversation.
            </p>
            <p data-reveal className="lede mt-6 text-muted">
              Share a little about your objective, the market and the relationships you may need. We review every inquiry
              personally.
            </p>
            <div data-reveal className="mt-10 border-t border-mist pt-6">
              <p className="text-[0.95rem] leading-relaxed text-muted">Initial conversations are handled with discretion.</p>
            </div>
          </aside>
          <div data-reveal>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
