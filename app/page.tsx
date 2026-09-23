import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { FeeCards } from "@/components/FeeCards";
import { PrincipalCard } from "@/components/PrincipalCard";
import { processSteps, promises, services, servicesScope, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-[linear-gradient(165deg,#faf8f4_0%,#f3efe6_55%,#e8efe9_100%)]">
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-40 w-40 rounded-full bg-gold/10 blur-2xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
          <div>
            <p className="flex items-center gap-3 text-sm font-medium tracking-wide text-gold-dark">
              <span className="h-px w-8 bg-gold" aria-hidden />
              {site.tagline}
              <span className="h-px w-8 bg-gold" aria-hidden />
            </p>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
              {site.shortDescription}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">
              Clear, practical guidance and careful case preparation for
              individuals, families and businesses across the United Kingdom.
              Fixed fees are agreed in writing before any work begins.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-navy-deep"
              >
                Contact Us
              </Link>
              <Link
                href="/book-appointment"
                className="rounded-xl border border-navy/25 bg-white/80 px-5 py-3 text-sm font-semibold text-navy hover:border-navy"
              >
                Book an Appointment
              </Link>
              <a
                href="/contact#whatsapp-notice"
                className="rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border border-line bg-white/95 p-6 shadow-[0_24px_60px_-28px_rgba(10,61,42,0.4)] backdrop-blur">
            <div className="border-b border-gold/40 pb-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-gold-dark">
                BOOK A CONSULTATION
              </p>
              <h2 className="mt-2 font-serif text-3xl text-navy">
                Speak with us
              </h2>
              <p className="mt-2 text-sm text-muted">
                Honest advice for your immigration matter, with a clear next
                step.
              </p>
            </div>
            <div className="mt-5 space-y-3">
              <a
                href={site.phoneHref}
                className="block rounded-xl border border-line bg-soft/60 px-4 py-3 transition hover:border-gold/50"
              >
                <span className="block text-xs text-muted">Call / WhatsApp</span>
                <span className="font-semibold text-navy">{site.phone}</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="block rounded-xl border border-line bg-soft/60 px-4 py-3 transition hover:border-gold/50"
              >
                <span className="block text-xs text-muted">Email</span>
                <span className="font-semibold text-navy">{site.email}</span>
              </a>
            </div>
            <div className="mt-5 rounded-xl bg-navy px-4 py-4 text-white">
              <p className="text-xs uppercase tracking-wide text-white/60">
                Consultations from
              </p>
              <p className="mt-1 font-serif text-2xl">
                Free{" "}
                <span className="text-sm font-sans text-white/70">
                  15-min triage
                </span>
              </p>
              <p className="mt-2 text-sm text-white/75">
                30 min £40 · 60 min £75
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-gold-dark">
          <span className="h-px w-6 bg-gold" aria-hidden />
          WHO WE ARE
        </p>
        <div className="mt-3 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-navy sm:text-4xl">
              A West Midlands Immigration Practice
            </h2>
            <p className="mt-4 text-muted">
              {site.name} provides regulated UK immigration advice and services.
              We work with individuals, families, workers and businesses who want
              careful preparation rather than rushed filing. Fixed fees are
              agreed in writing before any work begins.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {promises.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-navy">
                  <span className="mt-0.5 text-gold">◆</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-white"
              >
                Read About the Firm
              </Link>
              <Link
                href="/how-we-work"
                className="rounded-md border border-navy px-5 py-2.5 text-sm text-navy"
              >
                How We Work →
              </Link>
            </div>
          </div>
          <PrincipalCard />
        </div>
      </section>

      <section className="border-y border-line bg-soft py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-gold-dark">
            <span className="h-px w-6 bg-gold" aria-hidden />
            WHAT WE DO
          </p>
          <h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Practice areas within our IAA Level 1 authorisation. All services are
            subject to an initial assessment.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-[0_16px_36px_-28px_rgba(10,61,42,0.4)] transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_48px_-24px_rgba(10,61,42,0.35)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold transition group-hover:scale-x-100" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
                  {service.category}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {service.summary}
                </p>
                <p className="mt-5 text-sm font-semibold text-navy group-hover:text-gold-dark">
                  Learn more →
                </p>
              </Link>
            ))}
          </div>
          <p className="mt-10 max-w-3xl border-l-2 border-gold pl-5 text-sm leading-7 text-muted">
            {servicesScope}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-gold-dark">
          <span className="h-px w-6 bg-gold" aria-hidden />
          HOW WE WORK
        </p>
        <h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">
          Clear, Careful and Easy to Follow
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          UK immigration matters can be stressful. Our process helps clients
          understand the available options, prepare applications carefully and
          know what will happen at each stage.
        </p>
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-line bg-white p-6 shadow-[0_16px_36px_-28px_rgba(10,61,42,0.35)]"
            >
              <p className="inline-flex rounded-full bg-soft px-3 py-1 text-xs font-semibold tracking-[0.14em] text-gold-dark">
                STEP {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
        <Link
          href="/how-we-work"
          className="mt-8 inline-flex text-sm font-semibold text-navy hover:text-gold-dark"
        >
          See the full process →
        </Link>
      </section>

      <section className="border-y border-line bg-soft py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
            Transparent Fixed Fees
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            You should know where you stand from the outset. We agree fees in
            writing before work begins.
          </p>
          <FeeCards showCta limit={5} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <h2 className="font-serif text-3xl font-semibold text-navy sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 mb-8 max-w-2xl text-muted">
          Quick answers before you book: timescales, fees, refusals and when
          professional advice is appropriate.
        </p>
        <FaqList limit={6} />
        <Link
          href="/faq"
          className="mt-8 inline-flex text-sm font-semibold text-navy hover:text-gold-dark"
        >
          View all FAQs →
        </Link>
      </section>
    </>
  );
}
