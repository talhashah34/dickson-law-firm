import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { benefitsPage, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Benefits and Workplace Support",
  description:
    "Practical administrative help, general information and signposting for Universal Credit, Access to Work and related benefits — not specialist welfare-rights advice.",
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

function BulletList({ items }: { items: readonly string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function BenefitsPage() {
  const { intro, sections, howWeCanHelp, importantLimitation } = benefitsPage;

  return (
    <>
      <PageHero
        kicker="BENEFITS & WORKPLACE SUPPORT"
        title="Benefits and Workplace Support"
        description="Practical administrative help, general information and signposting — without unnecessary jargon."
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
                  Administration, information and signposting
                </p>
              </div>
              <p className="rounded-full border border-gold/30 bg-soft px-4 py-2 text-sm font-medium text-navy">
                Not specialist welfare-rights advice
              </p>
            </div>

            <div className="space-y-10 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <Section id="overview" title="What this service covers">
                <p>{intro}</p>
              </Section>

              {sections.map((section) => (
                <Section key={section.id} id={section.id} title={section.title}>
                  <p>{section.intro}</p>
                  <BulletList items={section.bullets} />
                  {section.closing ? <p>{section.closing}</p> : null}
                </Section>
              ))}

              <Section id="how-we-can-help" title="How we can help">
                <BulletList items={howWeCanHelp} />
              </Section>

              <Section id="important-limitation" title="Important limitation">
                <div className="rounded-2xl border border-amber-300/80 bg-amber-50 px-5 py-4 text-navy sm:px-6">
                  <p>{importantLimitation}</p>
                </div>
              </Section>

              <div className="rounded-2xl border border-line bg-soft/60 p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
                  Next step
                </p>
                <h2 className="mt-3 font-serif text-2xl text-navy">
                  Discuss whether we can assist
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                  We will explain the scope of any administrative support,
                  confirm what falls outside our service, and signpost where
                  specialist advice is needed.
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
          </article>
        </div>
      </div>
    </>
  );
}
