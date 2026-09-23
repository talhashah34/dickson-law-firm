import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { howWeWork, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "How Dickson Law Office Ltd handles UK immigration enquiries, Client Care Letters, document assessment, application preparation, submission and decisions.",
};

export default function HowWeWorkPage() {
  const { intro, steps, closingTitle, closing } = howWeWork;

  return (
    <>
      <PageHero
        kicker="HOW WE WORK"
        title="How We Work"
        description={intro}
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
                  Clear stages from first enquiry to decision
                </p>
              </div>
              <p className="rounded-full border border-gold/30 bg-soft px-4 py-2 text-sm font-medium text-navy">
                Seven-step process
              </p>
            </div>

            <ol className="space-y-0 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              {steps.map((step, index) => (
                <li
                  key={step.number}
                  className={`scroll-mt-28 border-b border-line py-10 first:pt-0 last:border-b-0 last:pb-0 ${
                    index === 0 ? "" : ""
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                    Step {step.number}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl font-semibold text-navy sm:text-[1.65rem]">
                    {step.title}
                  </h2>
                  <p className="mt-4 text-[0.975rem] leading-8 text-muted">
                    {step.body}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {step.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-[0.975rem] leading-8 text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <div className="border-t border-line px-6 py-10 sm:px-10 lg:px-14">
              <div className="rounded-2xl border border-amber-300/80 bg-amber-50 px-5 py-5 sm:px-6">
                <h2 className="font-serif text-2xl font-semibold text-navy">
                  {closingTitle}
                </h2>
                <p className="mt-3 text-[0.975rem] leading-8 text-navy/85">
                  {closing}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/book-appointment"
                  className="rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-deep"
                >
                  Book an appointment
                </Link>
                <Link
                  href="/fees"
                  className="rounded-xl border border-navy/20 px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy"
                >
                  View our fees
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
