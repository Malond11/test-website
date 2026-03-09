import { ShieldCheck, Leaf, ThumbsUp, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    icon: ShieldCheck,
    title: "Trusted Professionals",
    description:
      "Background-checked, trained, and insured team members you can rely on.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description:
      "We use safe, green cleaning products that are gentle on your home and the planet.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description:
      "Not happy? We'll come back and make it right — no questions asked.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Book weekly, bi-weekly, or one-time cleanings that fit your busy life.",
  },
];

export function WhyChooseUs() {
  return (
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        title="Why Choose fu"
        subtitle="We go above and beyond to make your space shine."
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
  );
}
