import { site } from "@/lib/site";

export function OfficeMap({
  variant = "card",
}: {
  variant?: "card" | "embedded";
}) {
  const map = (
    <div
      className={
        variant === "embedded"
          ? "relative h-72 w-full bg-soft sm:h-96"
          : "relative h-72 w-full bg-soft sm:h-96"
      }
    >
      <iframe
        title={`${site.name} registered office map`}
        src={site.address.embed}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );

  if (variant === "embedded") {
    return map;
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_55px_-35px_rgba(10,61,42,0.45)]">
      <div className="border-b border-line px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
          Find us
        </p>
        <h2 className="mt-1 font-serif text-2xl font-semibold text-navy">
          Registered office
        </h2>
        <address className="mt-2 text-sm not-italic leading-6 text-muted">
          {site.legalName}
          <br />
          {site.address.line1}
          <br />
          {site.address.line2}
          <br />
          {site.address.city}, {site.address.county}
          <br />
          {site.address.country}, {site.address.postcode}
        </address>
        <a
          href={site.address.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex text-sm font-semibold text-navy underline decoration-gold underline-offset-4"
        >
          Open in Google Maps
        </a>
      </div>
      {map}
    </div>
  );
}
