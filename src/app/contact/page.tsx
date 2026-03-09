import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { companyInfo } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Aš Noriu",
  description:
    "Get in touch with fu. Request a free quote for your cleaning needs today.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 via-warm-50 to-secondary-50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Aš Noriu"
            subtitle="Have a question or ready to book? We'd love to hear from you."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <ContactForm />

          <div className="space-y-6">
            {/* Contact info */}
            <div className="rounded-2xl border border-warm-100 bg-white p-6 shadow-md">
              <h3 className="font-display text-lg font-bold text-warm-900">
                Contact Information
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" />
                  <div>
                    <p className="text-sm font-semibold text-warm-900">Phone</p>
                    <p className="text-sm text-warm-800/70">
                      {companyInfo.phone}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" />
                  <div>
                    <p className="text-sm font-semibold text-warm-900">Email</p>
                    <p className="text-sm text-warm-800/70">
                      {companyInfo.email}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" />
                  <div>
                    <p className="text-sm font-semibold text-warm-900">
                      Address
                    </p>
                    <p className="text-sm text-warm-800/70">
                      {companyInfo.address}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" />
                  <div>
                    <p className="text-sm font-semibold text-warm-900">
                      Business Hours
                    </p>
                    <p className="text-sm text-warm-800/70">
                      {companyInfo.hours}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="flex aspect-video items-center justify-center rounded-2xl bg-warm-200">
              <div className="text-center">
                <MapPin className="mx-auto h-10 w-10 text-warm-800/30" />
                <p className="mt-2 text-sm text-warm-800/40">Map coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
