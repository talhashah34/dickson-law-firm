import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie policy for ${site.name}.`,
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        kicker="LEGAL"
        title="Cookie Policy"
        description="This site uses essential cookies to remember your cookie choice. Analytics cookies are used only if you accept them."
      />
      <article className="mx-auto max-w-3xl space-y-4 px-4 py-16 text-muted sm:px-6">
        <p>
          Essential cookies store whether you accepted or rejected optional
          cookies. They are required for the banner to work.
        </p>
        <p>
          If you accept all cookies, we may later add privacy-friendly analytics.
          You can change your choice by clearing site data in your browser.
        </p>
      </article>
    </>
  );
}
