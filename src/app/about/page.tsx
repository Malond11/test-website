import type { Metadata } from "next";
import { Sparkles, ShieldCheck, Heart, Leaf } from "lucide-react";
import { teamMembers } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about fu's story, mission, and dedicated team of cleaning professionals.",
};

const values = [
  {
    icon: Heart,
    title: "Care",
    description: "We treat every space as if it were our own.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    description: "Fully insured, background-checked, and reliable.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Eco-friendly products and responsible practices.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Our Story */}
      <section className="bg-gradient-to-br from-primary-50 via-warm-50 to-secondary-50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-bold text-warm-900 md:text-5xl">
              Our Story
            </h1>
            <div className="mt-3 h-1 w-16 rounded-full bg-primary-400" />
            <p className="mt-6 text-lg text-warm-800/70">
              fu was founded with a simple belief: everyone deserves a
              clean, comfortable space. What started as a small team of
              passionate cleaners has grown into a trusted service that hundreds
              of families and businesses rely on.
            </p>
            <p className="mt-4 text-lg text-warm-800/70">
              We take pride in our attention to detail, our friendly team, and
              our commitment to using eco-friendly products that are safe for
              your family and pets.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex aspect-square w-full max-w-sm items-center justify-center rounded-3xl bg-gradient-to-br from-primary-100 to-primary-200">
              <Sparkles className="h-20 w-20 text-primary-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-white p-8 text-center shadow-md md:p-12">
            <h2 className="font-display text-2xl font-bold text-warm-900 md:text-3xl">
              Our Mission
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary-400" />
            <p className="mt-6 text-lg text-warm-800/70">
              To deliver exceptional cleaning experiences that bring joy and
              comfort to every home and workplace. We believe a clean space is
              the foundation for a happy, productive life.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do."
          />
          <div className="grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100">
                  <value.icon className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="font-display text-lg font-bold text-warm-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-warm-800/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The friendly faces behind fu."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl border border-warm-100 bg-white p-6 text-center shadow-md"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary-100">
                  <span className="font-display text-2xl font-bold text-primary-600">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-warm-900">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary-600">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-warm-800/70">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <CTABanner />
      </section>
    </>
  );
}
