import type { Metadata } from "next";
import { services } from "@/lib/data";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional residential, commercial, deep cleaning and more. Find the perfect cleaning service for your needs.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 via-warm-50 to-secondary-50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Our Cleaning Services"
            subtitle="Whatever your space needs, we have a cleaning solution tailored for you."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <CTABanner />
      </section>
    </>
  );
}
