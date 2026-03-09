import { Hero } from "@/components/sections/Hero";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <FeaturedServices />
      </section>
      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <WhyChooseUs />
      </section>
      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <Testimonials />
      </section>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <CTABanner />
      </section>
    </>
  );
}
