import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PrincipalCard } from "@/components/PrincipalCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${site.name}: an IAA-regulated immigration practice built on clarity, integrity and careful preparation.`,
};

const clientExpectations = [
  "Clear advice in plain English, with interpretation arrangements considered where reasonably available.",
  "Careful review of forms, evidence and supporting documents.",
  "Fixed fees agreed in writing before substantive work begins, with no hidden extras.",
  "Prompt, practical communication at the stages agreed in the Client Care Letter.",
  "An honest assessment of strengths, weaknesses, costs, risks and realistic next steps.",
  "Confidential and respectful service, including reasonable adjustments for disabled or vulnerable clients.",
  "Professional case preparation without promises or guarantees about a Home Office decision or processing time.",
] as const;

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-line pb-10 last:border-b-0 last:pb-0"
    >
      <h2 className="font-serif text-2xl font-semibold text-navy sm:text-[1.65rem]">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[0.975rem] leading-8 text-muted">
        {children}
      </div>
    </section>
  );
}

export default function AboutPage() {
  const { openingHours, consultationMethods, consultationNote } = site;

  return (
    <>
      <PageHero
        kicker="ABOUT US"
        title="About Dickson Law Office Ltd"
        description="An IAA-regulated immigration practice built on clarity, integrity and careful preparation."
      />

      <div className="bg-soft/40 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <article className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_28px_70px_-40px_rgba(10,61,42,0.45)]">
            <div className="flex flex-col gap-3 border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#faf8f4_100%)] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                  {site.tagline}
                </p>
                <p className="mt-2 font-serif text-xl text-navy sm:text-2xl">
                  Dickson Law Office Ltd
                </p>
              </div>
              <p className="rounded-full border border-gold/30 bg-soft px-4 py-2 text-sm font-medium text-navy">
                IAA Org. No. {site.iaa.organisationNumber}
              </p>
            </div>

            <div className="space-y-10 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <Section id="who-we-are" title="Who we are">
                <p>
                  Dickson Law Office Ltd provides professional UK immigration
                  advice and case preparation for individuals, families,
                  workers, students and businesses. We explain the available
                  options clearly, review evidence carefully and agree our fees
                  in writing before work begins.
                </p>
                <p>
                  Dickson Law Office Ltd is regulated by the Immigration Advice
                  Authority under organisation number{" "}
                  {site.iaa.organisationNumber}. Every enquiry is assessed
                  against our current authorisation and professional competence.
                  We accept work only where we are authorised and able to provide
                  an appropriate service. If a matter falls outside that scope,
                  we explain this promptly and signpost or refer the client to a
                  suitably authorised professional.
                </p>
              </Section>

              <Section id="expectations" title="What clients can expect">
                <ul className="space-y-3">
                  {clientExpectations.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              <Section id="approach" title="Our approach">
                <p>
                  Immigration decisions can affect families, careers and
                  long-term plans. Our role is to make the process easier to
                  understand, identify the evidence that matters and prepare each
                  accepted case with care. We aim to be straightforward about
                  what we can do, what the client needs to do and when another
                  specialist may be required.
                </p>
                <p className="font-medium text-navy">
                  Dickson Law Office Ltd
                  <br />
                  {site.tagline}.
                </p>
              </Section>

              <Section id="leadership" title="Leadership">
                <PrincipalCard showBio />
              </Section>

              <Section id="company" title="Company and regulation">
                <p>
                  {site.legalName} is a private limited company registered in{" "}
                  {site.registeredIn} under company number {site.companyNumber}.
                  Our registered office is:
                </p>
                <address className="not-italic leading-8 text-navy">
                  Dickson Law Office Ltd
                  <br />
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.city}
                  <br />
                  {site.address.county}
                  <br />
                  {site.address.country}
                  <br />
                  {site.address.postcode}
                </address>
                <p>
                  Authorised adviser: {site.principal.name}, adviser number{" "}
                  {site.principal.adviserNumber}, authorised at{" "}
                  {site.iaa.level} in the categories of {site.iaa.categories}.
                </p>
                <p>{site.vatStatus}</p>
                <p>
                  Website content is general information only. For the rules that
                  apply when you use this website, please read our{" "}
                  <Link href="/website-terms" className="text-navy underline">
                    Website Terms of Use
                  </Link>
                  .
                </p>
              </Section>

              <Section id="hours" title="Opening hours and consultations">
                <ul className="space-y-1.5 text-navy">
                  <li>{openingHours.weekdays}</li>
                  <li>{openingHours.saturday}</li>
                  <li>{openingHours.sunday}</li>
                  <li>{openingHours.bankHolidays}</li>
                </ul>
                <p>{openingHours.note}</p>
                <p className="font-medium text-navy">
                  Consultations are available:
                </p>
                <ul className="space-y-2">
                  {consultationMethods.map((method) => (
                    <li key={method} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{method}</span>
                    </li>
                  ))}
                </ul>
                <p>{consultationNote}</p>
              </Section>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-deep"
                >
                  Get in touch
                </Link>
                <Link
                  href="/book-appointment"
                  className="rounded-xl border border-navy/20 px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy"
                >
                  Book an appointment
                </Link>
                <Link
                  href="/services"
                  className="rounded-xl border border-navy/20 px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy"
                >
                  View services
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
