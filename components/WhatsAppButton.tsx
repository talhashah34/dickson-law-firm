"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const sensitive = site.whatsappNotice[2];

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={panelRef} className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {open ? (
        <div className="w-[min(22rem,calc(100vw-2.5rem))] rounded-2xl border border-line bg-white p-5 shadow-[0_24px_55px_-20px_rgba(10,61,42,0.45)]">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">
            Before you message us
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Please share your name, telephone, email, preferred consultation
            method and a brief enquiry.
          </p>
          <div className="mt-3 rounded-xl border border-amber-300/80 bg-amber-50 px-3 py-2.5 text-sm leading-6 text-navy">
            <p className="font-semibold">Do not send sensitive documents</p>
            <p className="mt-1">{sensitive}</p>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#25D366] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
              onClick={() => setOpen(false)}
            >
              Continue on WhatsApp
            </a>
            <a
              href="/contact#whatsapp-notice"
              className="rounded-xl border border-line px-4 py-2.5 text-center text-sm font-medium text-navy transition hover:border-navy/30"
              onClick={() => setOpen(false)}
            >
              Read full notice
            </a>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:bg-[#1ebe57]"
        aria-label={open ? "Close WhatsApp notice" : "Message us on WhatsApp"}
        aria-expanded={open}
      >
        {open ? (
          <span className="text-2xl leading-none" aria-hidden>
            ×
          </span>
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="currentColor"
            aria-hidden
          >
            <path d="M20 11.5A8.5 8.5 0 1 1 9.1 4.3L4 3l1.4 5A8.5 8.5 0 0 1 20 11.5Zm-8.4 3.8 4.5-4.8-1.4-1.3-3.1 3.3-1.5-1.5-1.4 1.4 2.9 2.9Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
