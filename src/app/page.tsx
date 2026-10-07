import type { Metadata } from "next";
import Hero from "@/components/Hero";
import RelationshipSection from "@/components/sections/RelationshipSection";
import CapabilityGrid from "@/components/sections/CapabilityGrid";
import GlobalPerspective from "@/components/sections/GlobalPerspective";
import NetworkSection from "@/components/sections/NetworkSection";
import ProcessSection from "@/components/sections/ProcessSection";
import AboutSection from "@/components/sections/AboutSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import CTASection from "@/components/sections/CTASection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: site.title },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <RelationshipSection />
      <CapabilityGrid />
      <GlobalPerspective />
      <NetworkSection />
      <ProcessSection />
      <AboutSection />
      <PhilosophySection />
      <CTASection />
    </>
  );
}
