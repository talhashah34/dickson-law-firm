import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { services, servicesScope } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Level 1 UK immigration services including consultations, visitor and student visas, Graduate route, family applications and basic British citizenship.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="SERVICES"
        title="Practice areas"
        description="We accept instructions only after an initial assessment, and only where the matter falls within our IAA Level 1 authorisation."
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="border border-line bg-white p-6 transition hover:border-gold"
            >
              <p className="text-xs uppercase tracking-wide text-gold-dark">
                {service.category}
              </p>
              <h2 className="mt-2 font-serif text-2xl text-navy">
                {service.title}
              </h2>
              <p className="mt-2 text-sm text-muted">{service.summary}</p>
            </Link>
          ))}
        </div>
        <p className="mt-12 max-w-3xl border-l-2 border-gold pl-5 text-sm leading-7 text-muted">
          {servicesScope}
        </p>
      </div>
    </>
  );
}
