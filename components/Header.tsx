"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { nav, services, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[#faf8f4]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:gap-4 sm:px-6">
        <Link
          href="/"
          aria-label={`${site.name} — Home`}
          className="min-w-0 shrink"
        >
          <Logo variant="header" />
        </Link>

        <nav
          className="hidden items-center gap-5 xl:flex xl:gap-6"
          aria-label="Primary"
        >
          {nav.map((item) =>
            "children" in item && item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-navy hover:text-gold-dark"
                >
                  {item.label}
                </Link>
                {servicesOpen ? (
                  <div className="absolute left-0 top-full w-72 rounded-md border border-line bg-white p-2 shadow-lg">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block rounded-md px-3 py-2 text-sm text-navy hover:bg-soft"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-navy hover:text-gold-dark"
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="/book-appointment"
            className="rounded-md bg-navy px-4 py-2 text-sm font-medium text-white hover:bg-navy-deep"
          >
            Book Appointment
          </Link>
        </nav>

        <button
          type="button"
          className="shrink-0 rounded-md border border-navy/20 px-3 py-2 text-sm text-navy xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="max-h-[min(80vh,32rem)] overflow-y-auto border-t border-line bg-[#faf8f4] px-4 py-4 xl:hidden"
        >
          <div className="flex flex-col gap-1">
            {nav.map((item) =>
              "children" in item && item.children ? (
                <div key={item.href} className="border-b border-line/70 pb-2">
                  <div className="flex items-center justify-between gap-2">
                    <Link
                      href={item.href}
                      className="py-2.5 text-base font-medium text-navy"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className="rounded-md px-2 py-1 text-sm text-gold-dark"
                      aria-expanded={mobileServicesOpen}
                      onClick={() =>
                        setMobileServicesOpen((value) => !value)
                      }
                    >
                      {mobileServicesOpen ? "Hide" : "Show"}
                    </button>
                  </div>
                  {mobileServicesOpen ? (
                    <div className="mb-2 ml-2 flex flex-col border-l border-line pl-3">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="py-2 text-sm text-muted hover:text-navy"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-line/70 py-2.5 text-base font-medium text-navy"
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              href="/book-appointment"
              className="mt-3 rounded-md bg-navy px-4 py-3 text-center text-sm font-medium text-white"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
