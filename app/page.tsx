"use client";

import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services-section";
import { WhyUs } from "@/components/why-us";
import { ProcessSection } from "@/components/process-section";
import { Testimonials } from "@/components/testimonials";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Nav />
      <Hero />
      <ServicesSection />
      <WhyUs />
      <ProcessSection />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  );
}
