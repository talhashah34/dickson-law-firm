import Image from "next/image";
import { site } from "@/lib/site";

export function IaaRegulation() {
  const { complaints } = site.iaa;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        <div className="shrink-0 rounded-md bg-white p-2">
          <Image
            src={site.iaa.logo}
            alt="Immigration Advice Authority"
            width={120}
            height={140}
            className="h-auto w-[5.5rem] object-contain"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Regulation
          </p>
          <p className="mt-2 text-sm leading-6 text-white/80">
            {site.iaa.statementFull}
          </p>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          IAA Complaints
        </p>
        <p className="mt-2 text-sm leading-6 text-white/80">
          {complaints.name}
          <br />
          {complaints.team}
          <br />
          {complaints.organisation}
          <br />
          {complaints.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <ul className="mt-3 space-y-1 text-sm text-white/80">
          <li>
            Email:{" "}
            <a
              href={`mailto:${complaints.email}`}
              className="text-gold hover:underline"
            >
              {complaints.email}
            </a>
          </li>
          <li>
            Telephone:{" "}
            <a href={complaints.phoneHref} className="text-gold hover:underline">
              {complaints.phone}
            </a>
          </li>
          <li>
            <a
              href={complaints.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              Complain about an adviser (GOV.UK)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
