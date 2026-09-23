"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm({
  intent = "enquiry",
}: {
  intent?: "enquiry" | "appointment";
}) {
  const [sent, setSent] = useState(false);
  const isAppointment = intent === "appointment";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-white p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
          Request received
        </p>
        <h2 className="mt-3 font-serif text-2xl text-navy">Thank you</h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          Your message has been recorded in this preview. When email is
          connected, it will go to {site.email}. You can also call{" "}
          <a className="font-medium text-navy underline" href={site.phoneHref}>
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  const fieldClass =
    "mt-1.5 w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-navy" htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className={fieldClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-navy" htmlFor="phone">
          Telephone
        </label>
        <input id="phone" name="phone" className={fieldClass} />
      </div>

      {isAppointment ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              className="block text-sm font-medium text-navy"
              htmlFor="consultation"
            >
              Consultation type
            </label>
            <select
              id="consultation"
              name="consultation"
              required
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="triage">15-minute triage — Free</option>
              <option value="30min">30-minute consultation — £40</option>
              <option value="60min">60-minute consultation — £75</option>
            </select>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-navy"
              htmlFor="method"
            >
              Preferred appointment method
            </label>
            <select
              id="method"
              name="method"
              required
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled>
                Select a method
              </option>
              {site.consultationMethods.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : null}

      <div>
        <label
          className="block text-sm font-medium text-navy"
          htmlFor="message"
        >
          {isAppointment ? "What would you like to discuss?" : "Message"}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={fieldClass}
        />
      </div>

      <p className="text-xs leading-6 text-muted">
        By sending this enquiry you consent to us using the information supplied
        to assess and respond, in accordance with our{" "}
        <Link href="/privacy" className="font-medium text-navy underline">
          Privacy Notice
        </Link>
        .
      </p>

      <button
        type="submit"
        className="w-full rounded-xl bg-navy px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-navy-deep sm:w-auto"
      >
        {isAppointment ? "Request appointment" : "Send enquiry"}
      </button>
    </form>
  );
}
