import { services } from "@/lib/data";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function FeaturedServices() {
  return (
    <div>
      <SectionHeading
        title="Our Services"
        subtitle="From everyday tidying to deep cleaning, we've got you covered."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 3).map((service) => (
          <ServiceCard key={service.id} {...service} compact />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="/services" variant="outline">
          View All Services
        </Button>
      </div>
    </div>
  );
}
