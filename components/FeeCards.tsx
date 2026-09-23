import Link from "next/link";
import { feePackages, site } from "@/lib/site";

type FeeCardsProps = {
  showCta?: boolean;
  /** Show only the first N fees (used on the homepage teaser). */
  limit?: number;
};

export function FeeCards({ showCta = false, limit }: FeeCardsProps) {
  const packages = limit ? feePackages.slice(0, limit) : feePackages;
  const detailed = !limit;

  return (
    <>
      {detailed ? (
        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_55px_-40px_rgba(10,61,42,0.45)]">
          <div className="hidden grid-cols-[1.2fr_1.6fr_0.55fr_1.4fr] gap-4 border-b border-line bg-soft/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark lg:grid">
            <span>Service</span>
            <span>Description</span>
            <span>Fee</span>
            <span>Notes</span>
          </div>
          <ul className="divide-y divide-line">
            {packages.map((pack) => (
              <li
                key={pack.title}
                className="grid gap-3 px-5 py-5 sm:px-6 lg:grid-cols-[1.2fr_1.6fr_0.55fr_1.4fr] lg:gap-4 lg:py-6"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark lg:hidden">
                    Service
                  </p>
                  <p className="mt-1 font-medium text-navy lg:mt-0">
                    {pack.title}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark lg:hidden">
                    Description
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted lg:mt-0">
                    {pack.description}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark lg:hidden">
                    Fee
                  </p>
                  <p className="mt-1 font-serif text-2xl font-semibold text-navy lg:mt-0 lg:text-xl">
                    {pack.price}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark lg:hidden">
                    Notes
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted lg:mt-0">
                    {pack.notes}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_55px_-40px_rgba(10,61,42,0.45)]">
          <ul className="divide-y divide-line">
            {packages.map((pack) => (
              <li
                key={pack.title}
                className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:px-7 sm:py-5"
              >
                <div>
                  <p className="font-medium text-navy">{pack.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    {pack.description}
                  </p>
                </div>
                <p className="shrink-0 font-serif text-2xl font-semibold text-navy sm:text-right">
                  {pack.price}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {detailed ? (
        <div className="mt-8 space-y-4">
          <div className="rounded-2xl border border-line bg-soft/60 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
              Important fee information
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              {site.feesDisclaimer}
            </p>
          </div>
          <p className="text-sm leading-7 text-muted">{site.feesClosingNote}</p>
        </div>
      ) : null}

      {showCta ? (
        <Link
          href="/fees"
          className="mt-8 inline-flex rounded-xl border border-navy/20 px-5 py-2.5 text-sm font-medium text-navy transition hover:border-navy"
        >
          View full fee scale →
        </Link>
      ) : null}
    </>
  );
}
