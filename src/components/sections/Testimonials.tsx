import { testimonials } from "@/lib/data";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        title="What Our Clients Say"
        subtitle="Don't just take our word for it — hear from our happy customers."
      />
      <div className="rounded-3xl bg-warm-100/50 p-6 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}
