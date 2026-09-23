import Image from "next/image";
import { site } from "@/lib/site";

type PrincipalCardProps = {
  showBio?: boolean;
};

export function PrincipalCard({ showBio = false }: PrincipalCardProps) {
  const { principal, iaa, companyNumber, legalName } = site;

  return (
    <section className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_55px_-35px_rgba(10,61,42,0.5)]">
      <div
        className={
          showBio
            ? "grid items-stretch md:grid-cols-[0.9fr_1.1fr]"
            : "grid items-stretch sm:grid-cols-[0.95fr_1.05fr]"
        }
      >
        <div className="relative aspect-[4/5] min-h-[14rem] overflow-hidden bg-soft sm:aspect-auto sm:min-h-[18rem] md:min-h-0">
          <Image
            src={principal.image}
            alt={`${principal.name}, ${principal.role}`}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover object-top"
            priority={showBio}
          />
        </div>
        <div className="flex flex-col justify-center p-5 sm:p-6 md:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
            Leadership
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-navy sm:text-3xl">
            {principal.name}
          </h2>
          <p className="mt-1 text-sm font-medium text-gold-dark">
            {principal.credentials}
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-navy">
            {principal.roles.map((role) => (
              <li key={role} className="flex gap-2">
                <span className="text-gold" aria-hidden>
                  ◆
                </span>
                {role}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted">
            IAA Adviser No. {principal.adviserNumber}
            <br />
            Firm Org. No. {iaa.organisationNumber}
          </p>
          {showBio ? (
            <p className="mt-4 text-sm leading-7 text-muted">{principal.bio}</p>
          ) : (
            <>
              <div className="my-4 h-px bg-line" />
              <p className="text-sm leading-6 text-muted">
                {legalName}
                <br />
                Company No. {companyNumber}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
