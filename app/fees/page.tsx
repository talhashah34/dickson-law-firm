import type { Metadata } from "next";
import Link from "next/link";
import { FeeCards } from "@/components/FeeCards";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Our Fees",
  description:
    "Transparent fixed fee scale for UK immigration consultations, written advice, visa applications and citizenship assistance at Dickson Law Office LTD.",
};

export default function FeesPage() {
  return (
    <>
      <PageHero
        kicker="TRANSPARENT PRICING"
        title="Our Fixed Fee Scale"
        description="Clients should know where they stand from the outset. We confirm the scope of work and the agreed fee in writing before substantive work begins. The table below shows our current legal fees for the listed services."
      />

      <div className="bg-soft/40 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-[0_28px_70px_-40px_rgba(10,61,42,0.45)] sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              Current professional fees
            </p>
            <h2 className="mt-3 font-serif text-3xl text-navy">
              Service, description, fee and notes
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
              Fees shown are indicative for straightforward matters. The fee and
              scope for an accepted matter are confirmed in writing before
              substantive work begins.
            </p>

            <FeeCards />

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/book-appointment"
                className="rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-deep"
              >
                Book a consultation
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-navy/20 px-5 py-3 text-sm font-semibold text-navy transition hover:border-navy"
              >
                Ask about a quotation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
