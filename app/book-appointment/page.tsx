import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: `Book an immigration consultation with ${site.name}. In person, by telephone or secure video call. Free 15-minute triage, 30-minute (£40) and 60-minute (£75) options.`,
};

const consultationOptions = [
  {
    label: "15-minute triage",
    price: "Free",
    detail: "Quick scope check",
  },
  {
    label: "30-minute consultation",
    price: "£40",
    detail: "Focused advice",
  },
  {
    label: "60-minute consultation",
    price: "£75",
    detail: "Full discussion",
  },
] as const;

export default function BookPage() {
  const { openingHours, consultationMethods, consultationNote } = site;

  return (
    <>
      <PageHero
        kicker="CONSULTATION"
        title="Book an appointment"
        description="Choose a free 15-minute triage call, a 30-minute consultation (£40), or a 60-minute consultation (£75). All consultations are by prior appointment."
      />

      <div className="border-b border-line bg-soft/50">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-3">
          {consultationOptions.map((option) => (
            <div
              key={option.label}
              className="rounded-2xl border border-line bg-white px-5 py-5 shadow-[0_16px_36px_-30px_rgba(10,61,42,0.4)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
                {option.detail}
              </p>
              <p className="mt-2 font-serif text-xl text-navy">{option.label}</p>
              <p className="mt-3 font-serif text-3xl font-semibold text-navy">
                {option.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:py-20">
        <aside className="space-y-6">
          <div className="border-l-2 border-gold bg-soft/60 py-6 pl-6 pr-5 sm:pl-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
              Opening hours
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-navy">
              <li>{openingHours.weekdays}</li>
              <li className="text-muted">{openingHours.saturday}</li>
              <li className="text-muted">{openingHours.sunday}</li>
              <li className="text-muted">{openingHours.bankHolidays}</li>
            </ul>
            <p className="mt-4 text-sm leading-6 text-muted">
              {openingHours.note}
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-white p-6 shadow-[0_18px_40px_-32px_rgba(10,61,42,0.4)]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
              How we consult
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-navy">
              {consultationMethods.map((method) => (
                <li key={method} className="flex gap-3">
                  <span className="mt-0.5 text-gold" aria-hidden>
                    ◆
                  </span>
                  {method}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-line pt-4 text-sm leading-6 text-muted">
              {consultationNote}
            </p>
          </div>

          <div className="rounded-2xl bg-navy p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Prefer to speak now?
            </p>
            <a
              href={site.phoneHref}
              className="mt-3 block font-serif text-2xl hover:text-gold"
            >
              {site.phone}
            </a>
            <a
              href="/contact#whatsapp-notice"
              className="mt-2 block text-sm text-white/75 hover:text-gold"
            >
              WhatsApp {site.whatsapp}
            </a>
            <Link
              href="/fees"
              className="mt-5 inline-flex text-sm font-medium text-gold hover:underline"
            >
              View consultation fees →
            </Link>
          </div>
        </aside>

        <section className="rounded-2xl border border-line bg-white p-6 shadow-[0_24px_55px_-40px_rgba(10,61,42,0.45)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
            Request a time
          </p>
          <h2 className="mt-3 font-serif text-3xl text-navy">
            Tell us what you need
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Send your details and preferred consultation type. We will confirm
            an appointment in writing.
          </p>
          <div className="mt-8">
            <ContactForm intent="appointment" />
          </div>
        </section>
      </div>
    </>
  );
}
