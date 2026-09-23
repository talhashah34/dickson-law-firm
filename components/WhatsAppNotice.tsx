import { site } from "@/lib/site";

type WhatsAppNoticeProps = {
  compact?: boolean;
  id?: string;
};

export function WhatsAppNotice({
  compact = false,
  id = "whatsapp-notice",
}: WhatsAppNoticeProps) {
  const [intro, request, sensitive, usage, response] = site.whatsappNotice;

  return (
    <aside
      id={id}
      className={
        compact
          ? "scroll-mt-28 border-l-2 border-[#25D366] bg-[#25D366]/8 py-5 pl-5 pr-4"
          : "scroll-mt-28 rounded-2xl border border-[#25D366]/30 bg-white p-6 shadow-[0_18px_40px_-32px_rgba(10,61,42,0.35)] sm:p-7"
      }
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">
        WhatsApp &amp; first contact
      </p>
      <div className="mt-4 space-y-3 text-sm leading-7 text-muted">
        <p>{intro}</p>
        <p>{request}</p>
      </div>

      <div className="mt-4 rounded-xl border border-amber-300/80 bg-amber-50 px-4 py-3 text-sm leading-6 text-navy">
        <p className="font-semibold text-navy">Important</p>
        <p className="mt-1">{sensitive}</p>
      </div>

      <div className="mt-4 space-y-3 text-sm leading-7 text-muted">
        <p>{usage}</p>
        <p>{response}</p>
      </div>

      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
      >
        Continue on WhatsApp
      </a>
    </aside>
  );
}
