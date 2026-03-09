import { Check } from "lucide-react";
import { Button } from "./Button";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 ${
        highlighted
          ? "scale-105 border-2 border-primary-400 bg-primary-500 text-white shadow-xl"
          : "border border-warm-100 bg-white shadow-md"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary-400 px-4 py-1 text-sm font-semibold text-warm-900">
          Most Popular
        </span>
      )}
      <h3
        className={`font-display text-xl font-bold ${highlighted ? "text-white" : "text-warm-900"}`}
      >
        {name}
      </h3>
      <p
        className={`mt-1 text-sm ${highlighted ? "text-white/80" : "text-warm-800/60"}`}
      >
        {description}
      </p>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-display text-4xl font-bold">{price}</span>
        <span
          className={`text-sm ${highlighted ? "text-white/70" : "text-warm-800/50"}`}
        >
          /{period}
        </span>
      </div>
      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <Check
              className={`mt-0.5 h-4 w-4 shrink-0 ${highlighted ? "text-secondary-300" : "text-accent"}`}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button
          href="/contact"
          variant={highlighted ? "outline" : "primary"}
          className={`w-full ${highlighted ? "border-white text-white hover:bg-white/10" : ""}`}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
