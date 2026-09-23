import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { PageHero } from "@/components/PageHero";
import { faqGroups } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about IAA authorisation, consultations, fees, process, refusals and complaints at Dickson Law Office LTD.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        kicker="COMMON QUESTIONS"
        title="Frequently Asked Questions"
        description="Quick answers about our authorisation, consultations, fees, process, refusals and complaints. The answer for an individual matter depends on the facts, current rules and our ability to accept the work."
      />

      <div className="bg-soft/40 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-[0_28px_70px_-40px_rgba(10,61,42,0.45)] sm:p-8 lg:p-10">
            <FaqList groups={faqGroups} />

            <div className="mt-12 rounded-2xl border border-line bg-soft/60 p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
                Still have a question?
              </p>
              <h2 className="mt-3 font-serif text-2xl text-navy">
                Arrange an initial triage or consultation
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                We will listen to your circumstances, explain whether we can
                assist within our authorisation and identify the next practical
                step.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/book-appointment"
                  className="rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-deep"
                >
                  Book an appointment
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl border border-navy/20 px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
