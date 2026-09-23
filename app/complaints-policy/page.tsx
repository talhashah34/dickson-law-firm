import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Complaints Policy",
  description: `How to raise a complaint with ${site.name} and with the Immigration Advice Authority.`,
};

export default function ComplaintsPage() {
  const route = site.complaintsRoute;
  const { complaints } = site.iaa;

  return (
    <>
      <PageHero
        kicker="LEGAL"
        title="Complaints Policy"
        description="We aim to provide a high standard of immigration advice and client care. This page explains how to raise a concern with us and with the Immigration Advice Authority."
      />

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20">
        <section>
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-gold-dark">
            <span className="h-px w-6 bg-gold" aria-hidden />
            COMPLAINTS ROUTE
          </p>
          <h2 className="mt-3 font-serif text-3xl text-navy">
            How to raise a complaint with us
          </h2>
          <p className="mt-3 max-w-2xl text-muted leading-7">
            Complaints should initially be addressed to the Managing Director
            and Head of Advice.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="border-l-2 border-gold bg-soft/60 py-6 pl-6 pr-5 sm:pl-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
                Address your complaint to
              </p>
              <p className="mt-3 font-serif text-2xl text-navy">
                {route.addressee}
              </p>
              <p className="mt-1 text-sm font-medium text-gold-dark">
                {route.role}
              </p>
              <address className="mt-5 not-italic text-sm leading-7 text-navy">
                {route.firm}
                <br />
                {route.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <dl className="mt-6 space-y-3 border-t border-line pt-5 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-gold-dark">
                    Telephone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={route.phoneHref}
                      className="font-medium text-navy hover:text-gold-dark"
                    >
                      {route.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-gold-dark">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${route.email}`}
                      className="font-medium text-navy hover:text-gold-dark"
                    >
                      {route.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
                  Step 01
                </p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {route.intro}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
                  Step 02
                </p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {route.process}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
                  Step 03
                </p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {route.iaaRight}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-line pt-16 lg:mt-20 lg:pt-20">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-gold-dark">
            <span className="h-px w-6 bg-gold" aria-hidden />
            IMMIGRATION ADVICE AUTHORITY
          </p>
          <h2 className="mt-3 font-serif text-3xl text-navy">IAA complaints</h2>
          <p className="mt-3 max-w-2xl text-muted leading-7">
            You may contact the Immigration Advice Authority Complaints Team at
            any time.
          </p>

          <div className="mt-8 grid gap-8 border border-line bg-white p-6 shadow-[0_24px_55px_-40px_rgba(10,61,42,0.45)] sm:p-8 md:grid-cols-[1.1fr_0.9fr]">
            <address className="not-italic">
              <p className="font-serif text-xl text-navy">{complaints.name}</p>
              <p className="mt-1 text-sm text-gold-dark">
                {complaints.team} · {complaints.organisation}
              </p>
              <p className="mt-4 text-sm leading-7 text-navy">
                {complaints.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </address>

            <dl className="space-y-4 text-sm md:border-l md:border-line md:pl-8">
              <div>
                <dt className="text-xs uppercase tracking-wide text-gold-dark">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${complaints.email}`}
                    className="font-medium text-navy break-all hover:text-gold-dark"
                  >
                    {complaints.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-gold-dark">
                  Telephone
                </dt>
                <dd className="mt-1">
                  <a
                    href={complaints.phoneHref}
                    className="font-medium text-navy hover:text-gold-dark"
                  >
                    {complaints.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-gold-dark">
                  Website
                </dt>
                <dd className="mt-1">
                  <a
                    href={complaints.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-navy hover:text-gold-dark"
                  >
                    Complain about an adviser (GOV.UK) →
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </>
  );
}
