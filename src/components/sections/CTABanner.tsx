import { Button } from "@/components/ui/Button";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export function CTABanner({
  title = "Ready for a Sparkling Clean Space?",
  subtitle = "Book your first cleaning today and get 20% off!",
}: CTABannerProps) {
  return (
    <div className="rounded-2xl bg-primary-500 p-8 text-center text-white md:p-12">
      <h2 className="font-display text-2xl font-bold md:text-3xl">{title}</h2>
      <p className="mt-3 text-white/80">{subtitle}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Button
          href="/contact"
          variant="outline"
          className="border-white text-white hover:bg-white/10"
        >
          Get a Free Quote
        </Button>
        <Button
          href="/contact"
          variant="secondary"
        >
          Call Us Now
        </Button>
      </div>
    </div>
  );
}
