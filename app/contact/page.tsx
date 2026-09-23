import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { OfficeMap } from "@/components/OfficeMap";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${site.name} in Smethwick for confidential UK immigration advice by phone, WhatsApp, email or appointment.`,
};

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

function InfoTable({
  rows,
}: {
  rows: { label: string; value: React.ReactNode }[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line">
      <table className="w-full text-left text-sm">
        <tbody className="divide-y divide-line">
          {rows.map((row) => (
            <tr
              key={row.label}
              className="block border-b border-line bg-white last:border-b-0 even:bg-soft/40 sm:table-row sm:border-0"
            >
              <th
                scope="row"
                className="block w-full px-4 pt-3.5 pb-1 font-semibold text-navy sm:table-cell sm:w-[38%] sm:border-t sm:border-line sm:px-5 sm:py-3.5 sm:align-top"
              >
                {row.label}
              </th>
              <td className="block w-full px-4 pb-3.5 pt-0 leading-7 text-muted sm:table-cell sm:border-t sm:border-line sm:px-5 sm:py-3.5 sm:align-top">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ContactPage() {
  const {
    openingHours,
    consultationMethods,
    consultationNote,
    consultationFees,
    contactIntro,
    contactImportant,
    contactScopeNote,
    iaaBadgeNote,
  } = site;

  return (
    <>
      <PageHero
        kicker="CONTACT US"
        title="Contact Dickson Law Office Ltd"
        description={contactIntro}
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
                  Clear and confidential first contact
                </p>
              </div>
              <p className="rounded-full border border-gold/30 bg-soft px-4 py-2 text-sm font-medium text-navy">
                IAA Org. No. {site.iaa.organisationNumber}
              </p>
            </div>

            <div className="space-y-10 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <Section
                id="regulation"
                title="IAA-Regulated Immigration Advice"
              >
                <p>{site.iaa.statement}</p>

                <InfoTable
                  rows={[
                    {
                      label: "Organisation",
                      value: site.legalName,
                    },
                    {
                      label: "IAA organisation number",
                      value: site.iaa.organisationNumber,
                    },
                    {
                      label: "Authorised adviser",
                      value: site.principal.name,
                    },
                    {
                      label: "Adviser number",
                      value: site.principal.adviserNumber,
                    },
                    {
                      label: "Authorisation level",
                      value: site.iaa.level,
                    },
                    {
                      label: "Authorised categories",
                      value: site.iaa.categoriesTable,
                    },
                  ]}
                />

                <div className="flex flex-col gap-5 rounded-2xl border border-line bg-soft/50 p-5 sm:flex-row sm:items-center sm:p-6">
                  <div className="shrink-0 rounded-xl bg-white p-3">
                    <Image
                      src={site.iaa.logo}
                      alt="Immigration Advice Authority"
                      width={96}
                      height={112}
                      className="h-auto w-20 object-contain"
                    />
                  </div>
                  <div className="space-y-3 text-sm leading-7">
                    <p>{iaaBadgeNote}</p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={site.iaa.registerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-navy underline decoration-gold/50 underline-offset-4 hover:decoration-gold"
                      >
                        Check the IAA register
                      </a>
                      <a
                        href={site.iaa.badgeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-navy underline decoration-gold/50 underline-offset-4 hover:decoration-gold"
                      >
                        Official IAA digital badge
                      </a>
                    </div>
                  </div>
                </div>

                <p>{contactScopeNote}</p>
              </Section>

              <Section id="hours" title="Opening Hours">
                <InfoTable
                  rows={[
                    {
                      label: "Monday to Friday",
                      value: "9:00am–5:00pm",
                    },
                    {
                      label: "Saturday",
                      value: "10:00am–2:00pm, by appointment only",
                    },
                    {
                      label: "Sunday",
                      value: "Closed",
                    },
                    {
                      label: "Public holidays",
                      value: "Closed",
                    },
                  ]}
                />
                <p>{openingHours.note}</p>
              </Section>

              <Section id="appointments" title="Appointment Options">
                <ul className="space-y-3">
                  {consultationMethods.map((method) => (
                    <li key={method} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{method}</span>
                    </li>
                  ))}
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{consultationNote}</span>
                  </li>
                </ul>
              </Section>

              <Section id="consultation-fees" title="Consultation Fees">
                <InfoTable
                  rows={consultationFees.map((item) => ({
                    label: item.name,
                    value: (
                      <span className="font-medium text-navy">{item.fee}</span>
                    ),
                  }))}
                />
              </Section>

              <Section id="enquiry" title="Send Us an Enquiry">
                <div className="rounded-2xl border border-line bg-soft/40 p-5 sm:p-6">
                  <ContactForm />
                </div>
              </Section>

              <Section
                id="important"
                title="Important Information Before You Contact Us"
              >
                <ul className="space-y-3">
                  {contactImportant.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              <Section id="get-started" title="Ready to Get Started?">
                <p>
                  Call or WhatsApp{" "}
                  <a
                    className="font-medium text-navy hover:underline"
                    href={site.phoneHref}
                  >
                    {site.phone}
                  </a>
                  , email{" "}
                  <a
                    className="font-medium text-navy hover:underline"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                  , or use the form above to request an appointment.
                </p>
                <p className="font-medium text-navy">{site.tagline}.</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/book-appointment"
                    className="rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-deep"
                  >
                    Book an appointment
                  </Link>
                  <a
                    href={site.phoneHref}
                    className="rounded-xl border border-navy/20 px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy"
                  >
                    Call us
                  </a>
                </div>
              </Section>

              <section id="map" className="scroll-mt-28">
                <h2 className="font-serif text-2xl font-semibold text-navy sm:text-[1.65rem]">
                  Find the office
                </h2>
                <div className="mt-4 overflow-hidden rounded-2xl border border-line">
                  <OfficeMap variant="embedded" />
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
