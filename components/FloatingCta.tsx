import Link from "next/link";
import { site } from "@/lib/site";

export function FloatingCta() {
  return (
    <section className="relative z-20 px-4 sm:px-6">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gold/25 bg-[linear-gradient(135deg,#0a3d2a_0%,#0d4a34_45%,#163d2a_100%)] p-8 text-white shadow-[0_40px_90px_-24px_rgba(6,40,25,0.55)] sm:p-10 lg:p-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
          <div>
            <p className="text-sm font-medium tracking-wide text-gold">
              {site.tagline}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Your Immigration Journey Starts Here
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/75">
              Book a consultation to hear what your next steps look like. The
              conversation is confidential. We outline realistic options and the
              fee before you commit.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/book-appointment"
              className="rounded-xl bg-gold px-5 py-3.5 text-center text-sm font-semibold text-navy transition hover:bg-[#d4b56a]"
            >
              Book a Consultation
            </Link>
            <a
              href={site.phoneHref}
              className="rounded-xl border border-white/25 bg-white/5 px-5 py-3.5 text-center text-sm font-medium text-white transition hover:bg-white/10"
            >
              Call {site.phone}
            </a>
            <Link
              href="/contact"
              className="rounded-xl border border-white/25 bg-white/5 px-5 py-3.5 text-center text-sm font-medium text-white transition hover:bg-white/10"
            >
              Send an enquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
