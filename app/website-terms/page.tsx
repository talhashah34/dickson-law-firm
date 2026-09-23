import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website Terms of Use",
  description: `Website Terms of Use for ${site.name}. Effective 23 September 2026.`,
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

export default function WebsiteTermsPage() {
  return (
    <>
      <PageHero
        kicker="LEGAL"
        title="Website Terms of Use"
        description="These terms govern access to and use of the Dickson Law Office Ltd website. They explain the status of website information, permitted use and the legal information visitors need before relying on or contacting us through the website."
      />

      <div className="bg-soft/40 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <article className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_28px_70px_-40px_rgba(10,61,42,0.45)]">
            <div className="flex flex-col gap-3 border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#faf8f4_100%)] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                  Website access &amp; use
                </p>
                <p className="mt-2 font-serif text-xl text-navy sm:text-2xl">
                  Dickson Law Office Ltd
                </p>
              </div>
              <p className="rounded-full border border-gold/30 bg-soft px-4 py-2 text-sm font-medium text-navy">
                Effective date: 23 September 2026
              </p>
            </div>

            <div className="space-y-10 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <p className="max-w-3xl text-base leading-8 text-muted">
                These Website Terms of Use apply when you browse or contact us
                through this site. Separate{" "}
                <Link href="/terms" className="font-medium text-navy underline">
                  Terms of Business
                </Link>{" "}
                and a Client Care Letter apply if we agree to provide
                immigration advice or services.
              </p>

              <Section id="about" title="1. About Us">
                <p>
                  This website is operated by Dickson Law Office Ltd, a company
                  registered in England and Wales under company number 15171914.
                  Our registered office is Unit 8A, West Cross Shopping Centre,
                  Oldbury Road, Smethwick, West Midlands, B66 1JG.
                </p>
                <p>
                  We are regulated by the Immigration Advice Authority at Level
                  1 in the categories of Immigration and Asylum and Protection.
                  Our IAA organisation number is F202636259. Our authorised
                  adviser is Dickson Tarnongo, adviser number P062830.
                </p>
              </Section>

              <Section id="acceptance" title="2. Acceptance of These Terms">
                <p>
                  By using this website, you agree to these terms. If you do not
                  agree, please do not use the website. Our{" "}
                  <Link href="/privacy" className="text-navy underline">
                    Website Privacy Notice
                  </Link>{" "}
                  and{" "}
                  <Link href="/cookie-policy" className="text-navy underline">
                    Cookie Policy
                  </Link>{" "}
                  also apply. Separate Terms of Business and an individual Client
                  Care Letter apply if we agree to provide immigration advice or
                  services.
                </p>
              </Section>

              <Section id="general-info" title="3. General Information Only">
                <p>
                  Website content is provided for general information. It is not
                  immigration advice, legal advice or a substitute for advice
                  based on a person&apos;s circumstances. Immigration law,
                  policy, fees and procedures can change, and website content may
                  not reflect a change immediately.
                </p>
                <p>
                  You should obtain advice before acting or deciding not to act
                  on information found on this website. We do not guarantee that
                  general information applies to a particular case or that an
                  application will succeed.
                </p>
              </Section>

              <Section id="no-relationship" title="4. No Adviser-Client Relationship">
                <p>
                  Visiting the website, submitting a form, sending a message,
                  booking an appointment or attending an initial triage call does
                  not create an adviser-client relationship. We act only after
                  completing any necessary checks, confirming that a matter is
                  within our authorisation and competence, accepting the
                  instructions and issuing written client-care terms.
                </p>
                <p>
                  Do not rely on a website submission as confirmation that we
                  will act or that a deadline is protected. If a matter is
                  urgent, state the deadline clearly and obtain written
                  confirmation that we have accepted responsibility for it.
                </p>
              </Section>

              <Section id="scope" title="5. Regulatory Scope">
                <p>
                  We provide only services that fall within our IAA authorisation
                  and professional competence. A service description on the
                  website remains subject to an assessment of the facts. We may
                  decline a matter or refer or signpost a person to an
                  appropriately authorised adviser where the work is outside our
                  scope.
                </p>
              </Section>

              <Section id="fees" title="6. Fees and Third Party Charges">
                <p>
                  Website fees are indicative fixed fees for straightforward
                  matters unless stated otherwise. The fee and scope for a matter
                  will be confirmed in writing before substantive work begins.
                  Home Office fees, the Immigration Health Surcharge, biometric
                  fees, priority fees and other third-party costs are separate
                  unless expressly included in writing. We are not currently
                  registered for VAT.
                </p>
              </Section>

              <Section id="permitted-use" title="7. Permitted Use">
                <p>
                  You may use this website for lawful personal or business
                  information purposes. You must not:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    use the website unlawfully, fraudulently or in a way that
                    infringes another person&apos;s rights;
                  </li>
                  <li>
                    attempt to gain unauthorised access to the website, server,
                    accounts, systems or data;
                  </li>
                  <li>
                    introduce malware, harmful code, excessive automated requests
                    or other material intended to damage or disrupt the website;
                  </li>
                  <li>
                    scrape, copy or commercially exploit website content except
                    where permitted by law or our written consent;
                  </li>
                  <li>
                    submit false, misleading, abusive, defamatory or unlawful
                    material; or
                  </li>
                  <li>
                    impersonate another person or misrepresent authority to act
                    for someone else.
                  </li>
                </ul>
                <p>
                  We may restrict or suspend access where reasonably necessary to
                  protect the website, users, our systems or legal rights.
                </p>
              </Section>

              <Section id="ip" title="8. Intellectual Property">
                <p>
                  Unless otherwise stated, the website and its original text,
                  layout, branding and other content belong to us or are used
                  under licence. You may print or download a reasonable extract
                  for personal, non-commercial reference. You must not alter it,
                  remove ownership notices, present it as professional advice or
                  reproduce it commercially without written permission.
                </p>
                <p>
                  The Immigration Advice Authority name, logo and digital badge
                  belong to or are controlled by their respective rights holders.
                  Their display does not transfer any intellectual property
                  rights.
                </p>
              </Section>

              <Section id="submissions" title="9. Information You Submit">
                <p>
                  Information submitted through the website must be accurate to
                  the best of your knowledge. Do not send sensitive documents
                  through the general contact form or WhatsApp unless we request
                  them and provide an approved method. Our Website Privacy Notice
                  explains how we handle personal information.
                </p>
              </Section>

              <Section id="links" title="10. External Links and Services">
                <p>
                  The website may link to government pages, regulators or other
                  third-party services. Links are provided for convenience and do
                  not amount to endorsement. We do not control third-party
                  content, availability, security or privacy practices. The third
                  party&apos;s terms and privacy notice apply when you use its
                  service.
                </p>
              </Section>

              <Section id="availability" title="11. Website Availability and Security">
                <p>
                  We take reasonable steps to operate and secure the website, but
                  we do not guarantee uninterrupted availability, error-free
                  content or freedom from every harmful component. We may change,
                  suspend or withdraw any part of the website for maintenance,
                  security, legal or business reasons. You are responsible for
                  using current security software and protecting your own devices
                  and accounts.
                </p>
              </Section>

              <Section id="liability" title="12. Liability">
                <p>
                  Nothing in these terms excludes or limits liability where
                  exclusion or limitation is prohibited by law, including
                  liability for death or personal injury caused by negligence,
                  fraud or fraudulent misrepresentation.
                </p>
                <p>
                  Subject to that rule, we are not responsible for loss caused by
                  reliance on general website information without an
                  adviser-client relationship, loss caused by a user&apos;s
                  breach of these terms, or the acts, omissions, content or
                  availability of a third-party service. If you use the website
                  for business purposes, we are not liable for loss of profit,
                  revenue, business, opportunity, anticipated saving, goodwill or
                  indirect or consequential loss arising solely from website use,
                  to the extent permitted by law.
                </p>
                <p>
                  These website limitations do not govern liability for regulated
                  work that we have formally accepted. That work is governed by
                  the applicable Client Care Letter, Terms of Business and law.
                </p>
              </Section>

              <Section id="privacy" title="13. Privacy and Cookies">
                <p>
                  Our{" "}
                  <Link href="/privacy" className="text-navy underline">
                    Website Privacy Notice
                  </Link>{" "}
                  explains how we use personal information. Our{" "}
                  <Link href="/cookie-policy" className="text-navy underline">
                    Cookie Policy
                  </Link>{" "}
                  explains the technologies used by the website. Non-exempt
                  cookies or similar technologies will be used only after any
                  consent required by law. Cookie choices can be changed through
                  the website&apos;s settings.
                </p>
              </Section>

              <Section id="changes" title="14. Changes to the Website and These Terms">
                <p>
                  We may update the website and these terms to reflect changes in
                  our services, technology, regulation or law. The current terms
                  will state their effective date. Continued use after an update
                  means the updated terms apply from the date of use, but changes
                  will not retrospectively alter a client contract already agreed
                  in writing.
                </p>
              </Section>

              <Section id="law" title="15. Governing Law and Courts">
                <p>
                  These terms and any non-contractual dispute connected with
                  website use are governed by the law of England and Wales. The
                  courts of England and Wales have jurisdiction. If you are a
                  consumer living elsewhere in the United Kingdom, you may also
                  have the right to bring proceedings in the part of the United
                  Kingdom where you live. Mandatory consumer rights are not
                  affected.
                </p>
              </Section>

              <Section id="contact" title="16. Contact">
                <address className="not-italic leading-8 text-navy">
                  Dickson Law Office Ltd
                  <br />
                  Unit 8A, West Cross Shopping Centre
                  <br />
                  Oldbury Road
                  <br />
                  Smethwick
                  <br />
                  West Midlands
                  <br />
                  B66 1JG
                  <br />
                  Email:{" "}
                  <a href={`mailto:${site.email}`} className="underline">
                    {site.email}
                  </a>
                  <br />
                  Telephone:{" "}
                  <a href={site.phoneHref} className="underline">
                    {site.phone}
                  </a>
                  <br />
                  Website:{" "}
                  <a href={site.url} className="underline">
                    {site.url}
                  </a>
                </address>
              </Section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
