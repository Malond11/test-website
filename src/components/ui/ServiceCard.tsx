import {
  Home,
  Building2,
  Sparkles,
  Truck,
  CalendarCheck,
  HardHat,
  Check,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Sparkles,
  Truck,
  CalendarCheck,
  HardHat,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features?: string[];
  compact?: boolean;
}

export function ServiceCard({
  title,
  description,
  icon,
  features,
  compact = false,
}: ServiceCardProps) {
  const Icon = iconMap[icon] || Sparkles;

  return (
    <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md transition-shadow duration-200 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
        <Icon className="h-6 w-6 text-primary-600" />
      </div>
      <h3 className="font-display text-xl font-bold text-warm-900">{title}</h3>
      <p className="mt-2 text-warm-800/70">{description}</p>
      {!compact && features && features.length > 0 && (
        <ul className="mt-4 space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
