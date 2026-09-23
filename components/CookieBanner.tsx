"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Choice = "all" | "essential" | null;

export function CookieBanner() {
  const [choice, setChoice] = useState<Choice>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("dlf-cookie-choice") as Choice;
    setChoice(stored);
    setReady(true);
  }, []);

  if (!ready || choice) {
    return null;
  }

  function save(next: Exclude<Choice, null>) {
    window.localStorage.setItem("dlf-cookie-choice", next);
    setChoice(next);
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="mx-auto max-w-3xl border border-line bg-white p-5 shadow-xl">
        <h2 className="font-serif text-xl text-navy">We value your privacy</h2>
        <p className="mt-2 text-sm text-muted">
          We use essential cookies to run this site. Optional cookies are only
          used if you accept them. Read our{" "}
          <Link href="/privacy" className="text-navy underline">
            Privacy Notice
          </Link>{" "}
          and{" "}
          <Link href="/cookie-policy" className="text-navy underline">
            Cookie Policy
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => save("all")}
            className="rounded-md bg-navy px-4 py-2 text-sm font-medium text-white"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={() => save("essential")}
            className="rounded-md border border-navy px-4 py-2 text-sm text-navy"
          >
            Reject Non-Essential
          </button>
        </div>
      </div>
    </div>
  );
}
