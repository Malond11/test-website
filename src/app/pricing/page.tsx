import type { Metadata } from "next";
import { ShieldCheck, Leaf, ThumbsUp, Clock } from "lucide-react";
import { pricingTiers } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "@/components/ui/PricingCard";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Affordable cleaning packages for every budget. Find the right plan for your needs.",
};

const includes = [
  { icon: Leaf, label: "Eco-friendly products" },
  { icon: ShieldCheck, label: "Insured staff" },
  { icon: ThumbsUp, label: "Satisfaction guarantee" },
  { icon: Clock, label: "Flexible scheduling" },
];

const faqs = [
  {
    q: "Can I customize my cleaning plan?",
    a: "Absolutely! Contact us and we'll create a custom plan tailored to your specific needs and budget.",
  },
  {
    q: "Are there discounts for recurring services?",
    a: "Yes! Weekly clients save 15%, bi-weekly clients save 10%, and monthly clients save 5% on every visit.",
  },
  {
    q: "What if I'm not satisfied with the cleaning?",
    a: "We offer a 100% satisfaction guarantee. If you're not happy, we'll come back and re-clean at no extra cost.",
  },
  {
    q: "How long does a typical cleaning take?",
    a: "A basic clean for a standard home takes 2-3 hours. Deep and premium cleans may take 4-6 hours depending on the size of your space.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 via-warm-50 to-secondary-50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Simple, Transparent Pricing"
            subtitle="No hidden fees. Choose the plan that fits your needs."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} {...tier} />
          ))}
        </div>

        {/* All plans include */}
        <div className="mt-16">
          <h3 className="text-center font-display text-lg font-bold text-warm-900">
            All plans include
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {includes.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-full border border-warm-100 bg-white px-4 py-2 text-sm shadow-sm"
              >
                <item.icon className="h-4 w-4 text-accent" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our pricing."
          />
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-warm-100 bg-white p-6 shadow-sm"
              >
                <h4 className="font-display font-bold text-warm-900">
                  {faq.q}
                </h4>
                <p className="mt-2 text-sm text-warm-800/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <CTABanner
          title="Not Sure Which Plan Is Right?"
          subtitle="Contact us for a free estimate tailored to your space."
        />
      </section>
    </>
  );
}
