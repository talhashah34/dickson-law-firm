"use client";

import { useState } from "react";
import { faqGroups, faqs, type FaqGroup, type FaqItem } from "@/lib/site";

type FaqListProps = {
  items?: FaqItem[];
  groups?: FaqGroup[];
  limit?: number;
};

export function FaqList({ items, groups, limit }: FaqListProps) {
  const [open, setOpen] = useState<string | null>(null);

  if (groups) {
    return (
      <div className="space-y-10">
        {groups.map((group) => (
          <section key={group.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              {group.title}
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-white shadow-[0_16px_40px_-32px_rgba(10,61,42,0.4)]">
              <div className="divide-y divide-line">
                {group.items.map((item) => {
                  const key = `${group.title}:${item.question}`;
                  const isOpen = open === key;
                  return (
                    <div key={item.question}>
                      <button
                        type="button"
                        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition hover:bg-soft/40 sm:px-6"
                        aria-expanded={isOpen}
                        onClick={() => setOpen(isOpen ? null : key)}
                      >
                        <span className="font-medium leading-7 text-navy">
                          {item.question}
                        </span>
                        <span
                          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-sm text-gold-dark"
                          aria-hidden
                        >
                          {isOpen ? "–" : "+"}
                        </span>
                      </button>
                      {isOpen ? (
                        <p className="border-t border-line bg-soft/30 px-5 py-4 text-sm leading-7 text-muted sm:px-6">
                          {item.answer}
                        </p>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>
    );
  }

  const list = (items ?? faqs).slice(0, limit);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_16px_40px_-32px_rgba(10,61,42,0.4)]">
      <div className="divide-y divide-line">
        {list.map((item) => {
          const isOpen = open === item.question;
          return (
            <div key={item.question}>
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition hover:bg-soft/40 sm:px-6"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : item.question)}
              >
                <span className="font-medium leading-7 text-navy">
                  {item.question}
                </span>
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-sm text-gold-dark"
                  aria-hidden
                >
                  {isOpen ? "–" : "+"}
                </span>
              </button>
              {isOpen ? (
                <p className="border-t border-line bg-soft/30 px-5 py-4 text-sm leading-7 text-muted sm:px-6">
                  {item.answer}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
