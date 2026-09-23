import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { getService, services, servicesScope, site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return { title: "Service" };
  }
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        kicker={service.category}
        title={service.title}
        description={service.summary}
      />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-lg leading-8 text-navy">{service.body}</p>
        <p className="mt-6 text-muted">
          Fees are agreed in writing after we understand the facts. Start with a{" "}
          {site.consultationFee} consultation if you are unsure whether this
          matter is within our scope.
        </p>
        <p className="mt-8 border-l-2 border-gold pl-5 text-sm leading-7 text-muted">
          {servicesScope}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/book-appointment"
            className="rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-white"
          >
            Book a consultation
          </Link>
          <Link
            href="/services"
            className="rounded-md border border-navy px-5 py-2.5 text-sm text-navy"
          >
            All services
          </Link>
        </div>
      </article>
    </>
  );
}
