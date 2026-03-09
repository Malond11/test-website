import Link from "next/link";
import { Sparkles, Phone, Mail, MapPin, Clock } from "lucide-react";
import { companyInfo } from "@/lib/data";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Aš Noriu" },
];

export function Footer() {
  return (
    <footer className="bg-warm-800 text-warm-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary-400" />
              <span className="font-display text-lg font-bold text-white">
                fu
              </span>
            </div>
            <p className="mt-3 text-sm text-warm-300">
              Professional cleaning services that make your space sparkle.
              Trusted by hundreds of happy homes and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-300 transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-warm-300">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                {companyInfo.phone}
              </li>
              <li className="flex items-start gap-2 text-sm text-warm-300">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                {companyInfo.email}
              </li>
              <li className="flex items-start gap-2 text-sm text-warm-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                {companyInfo.address}
              </li>
              <li className="flex items-start gap-2 text-sm text-warm-300">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                {companyInfo.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-warm-800/50 pt-6 text-center text-sm text-warm-300">
          &copy; {new Date().getFullYear()} fu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
