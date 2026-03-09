import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export function TestimonialCard({
  name,
  role,
  quote,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-sm">
      <Quote className="mb-3 h-8 w-8 text-primary-200" />
      <p className="italic text-warm-800/80">&ldquo;{quote}&rdquo;</p>
      <div
        className="mt-4 flex gap-0.5"
        aria-label={`Rated ${rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-secondary-400 text-secondary-400" : "text-warm-200"}`}
          />
        ))}
      </div>
      <div className="mt-3">
        <p className="font-semibold text-warm-900">{name}</p>
        <p className="text-sm text-warm-800/60">{role}</p>
      </div>
    </div>
  );
}
