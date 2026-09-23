import Link from "next/link";
import { IaaRegulation } from "@/components/IaaRegulation";
import { Logo } from "@/components/Logo";
import { services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative z-0 border-t border-white/10 bg-navy-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo variant="footer" />
          <p className="mt-4 text-sm text-white/70">{site.shortDescription}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-gold">
            Services
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-gold"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-gold">
            Quick Links
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/about" className="hover:text-gold">
                About
              </Link>
            </li>
            <li>
              <Link href="/benefits" className="hover:text-gold">
                Benefits
              </Link>
            </li>
            <li>
              <Link href="/how-we-work" className="hover:text-gold">
                How We Work
              </Link>
            </li>
            <li>
              <Link href="/fees" className="hover:text-gold">
                Our Fees
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-gold">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/book-appointment" className="hover:text-gold">
                Book a Consultation
              </Link>
            </li>
            <li>
              <Link href="/complaints-policy" className="hover:text-gold">
                Complaints Policy
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-gold">
                Privacy Notice
              </Link>
            </li>
            <li>
              <Link href="/website-terms" className="hover:text-gold">
                Website Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gold">
                Terms of Business
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:text-gold">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-gold">
            Contact
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <a href={site.phoneHref} className="hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li>
              <a href="/contact#whatsapp-notice" className="hover:text-gold">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.address.maps} className="hover:text-gold">
                <span className="block">{site.address.line1}</span>
                <span className="block">{site.address.line2}</span>
                <span className="block">
                  {site.address.city}, {site.address.county}
                </span>
                <span className="block">{site.address.postcode}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <IaaRegulation />
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/55 sm:px-6">
        © 2026 {site.legalName}, Company No. {site.companyNumber}, registered
        in {site.registeredIn}.
      </div>
    </footer>
  );
}
