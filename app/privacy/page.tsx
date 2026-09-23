import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: `Website Privacy Notice for ${site.name}. How we collect and use personal information. Effective 23 September 2026.`,
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

const processingPurposes = [
  {
    purpose: "Respond to enquiries and arrange consultations",
    information: "Identity, contact and enquiry information",
    basis:
      "Steps requested before a contract and our legitimate interests in responding to enquiries",
  },
  {
    purpose: "Assess whether we can accept a matter",
    information: "Identity, matter details, conflict and regulatory information",
    basis:
      "Steps before a contract, legal or regulatory obligations, and legitimate interests",
  },
  {
    purpose: "Provide agreed immigration advice and services",
    information:
      "Case, identity, immigration, family, financial and communication records",
    basis:
      "Performance of our contract, legal obligations and legitimate interests in delivering regulated services",
  },
  {
    purpose: "Manage fees, payments, accounts and tax records",
    information: "Billing, payment and transaction information",
    basis: "Performance of our contract and legal obligations",
  },
  {
    purpose: "Meet IAA, insurance, audit and professional requirements",
    information: "Client files, advice records, complaints and business records",
    basis:
      "Legal or regulatory obligations and legitimate interests in demonstrating compliance",
  },
  {
    purpose: "Protect our systems and website",
    information: "Technical, security and usage information",
    basis:
      "Legitimate interests in security, fraud prevention and service administration",
  },
  {
    purpose: "Send optional news or marketing",
    information: "Name, email and communication preferences",
    basis:
      "Consent or another basis permitted by direct marketing law; every message will include an opt-out",
  },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="LEGAL"
        title="Website Privacy Notice"
        description="This notice explains how Dickson Law Office Ltd collects and uses personal information when people visit our website, contact us, book a consultation, become a client or otherwise deal with us."
      />

      <div className="bg-soft/40 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <article className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_28px_70px_-40px_rgba(10,61,42,0.45)]">
            <div className="flex flex-col gap-3 border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#faf8f4_100%)] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                  Personal information
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
                Please read this notice with our{" "}
                <Link href="/cookie-policy" className="font-medium text-navy underline">
                  Cookie Policy
                </Link>
                ,{" "}
                <Link href="/website-terms" className="font-medium text-navy underline">
                  Website Terms of Use
                </Link>
                ,{" "}
                <Link href="/terms" className="font-medium text-navy underline">
                  Terms of Business
                </Link>{" "}
                and any Client Care Letter issued for a particular matter.
              </p>

              <Section id="who" title="1. Who We Are">
                <p>
                  Dickson Law Office Ltd is a company registered in England and
                  Wales under company number 15171914. We are the controller of
                  the personal information described in this notice. Our
                  registered office is Unit 8A, West Cross Shopping Centre,
                  Oldbury Road, Smethwick, West Midlands, B66 1JG.
                </p>
                <p>
                  We are regulated by the Immigration Advice Authority at Level
                  1 in the categories of Immigration and Asylum and Protection.
                  Our organisation number is F202636259. Dickson Tarnongo is an
                  authorised adviser, number P062830.
                </p>
                <p>
                  Questions about this notice or our use of personal information
                  may be sent to{" "}
                  <a href={`mailto:${site.email}`} className="text-navy underline">
                    {site.email}
                  </a>{" "}
                  or by post to our registered office.
                </p>
              </Section>

              <Section id="when" title="2. When This Notice Applies">
                <p>
                  This notice applies to website visitors, prospective clients,
                  clients, people connected with a client&apos;s matter,
                  suppliers and other people who communicate with us. It should
                  be read with our Cookie Policy, Website Terms of Use, Terms of
                  Business and any Client Care Letter issued for a particular
                  matter.
                </p>
                <p>
                  A Client Care Letter may contain additional privacy information
                  that is specific to a matter. If another organisation controls
                  personal information for its own purposes, its privacy notice
                  will also apply.
                </p>
              </Section>

              <Section id="collect" title="3. Personal Information We Collect">
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Identity information, including names, dates of birth,
                    photographs, signatures and identity document details.
                  </li>
                  <li>
                    Contact information, including postal and email addresses,
                    telephone numbers and preferred contact methods.
                  </li>
                  <li>
                    Immigration and nationality information, including
                    immigration status, Home Office references, travel history
                    and information contained in passports, visas and immigration
                    documents.
                  </li>
                  <li>
                    Family, relationship, accommodation, education and employment
                    information relevant to an enquiry or matter.
                  </li>
                  <li>
                    Financial information, including income, benefits, bank
                    information, invoices, payments and evidence of financial
                    circumstances where relevant.
                  </li>
                  <li>
                    Communications and case records, including emails, letters,
                    call notes, appointment records, documents and advice
                    provided.
                  </li>
                  <li>
                    Technical information, including internet protocol address,
                    browser type, device information, website usage and cookie
                    choices.
                  </li>
                  <li>
                    Information needed to handle complaints, regulatory
                    enquiries, insurance matters or legal claims.
                  </li>
                </ul>
                <div className="rounded-xl border border-amber-300/80 bg-amber-50 px-4 py-3 text-navy">
                  <p className="font-semibold">Important</p>
                  <p className="mt-1">
                    Please do not send passports, bank statements, health records
                    or other sensitive documents through the general website
                    contact form or WhatsApp unless we have asked you to do so
                    and provided an appropriate method.
                  </p>
                </div>
              </Section>

              <Section id="special" title="4. Special Category and Criminal Offence Information">
                <p>
                  Immigration matters may involve special category information,
                  such as health, disability, racial or ethnic origin, religion,
                  political opinions, sexual orientation or biometric information
                  used for identification. They may also involve allegations,
                  cautions or convictions.
                </p>
                <p>
                  We process special category information only when an Article 6
                  lawful basis and an additional condition under Article 9 of the
                  UK GDPR apply. Depending on the matter, the additional
                  condition may be explicit consent or processing necessary for
                  the establishment, exercise or defence of legal claims. We
                  process criminal offence information only where permitted by
                  Article 10 of the UK GDPR and the Data Protection Act 2018. We
                  document the condition used for the relevant processing.
                </p>
              </Section>

              <Section id="sources" title="5. How We Obtain Personal Information">
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Directly from you through our website, email, telephone,
                    WhatsApp, video calls, meetings, forms and documents.
                  </li>
                  <li>
                    From a person acting for you or connected with your matter,
                    such as a family member, sponsor, employer, interpreter or
                    previous adviser.
                  </li>
                  <li>
                    From public authorities and bodies, including the Home
                    Office, UK Visas and Immigration, HM Courts and Tribunals
                    Service and the Immigration Advice Authority, where relevant
                    and lawful.
                  </li>
                  <li>
                    From public registers, professional advisers, service
                    providers and publicly available sources where necessary for
                    our work.
                  </li>
                  <li>
                    Automatically when you use our website, through essential
                    technologies and any optional technologies you have accepted.
                  </li>
                </ul>
                <p>
                  If you give us information about another person, you should
                  ensure that you are permitted to do so and, where appropriate,
                  provide that person with this notice.
                </p>
              </Section>

              <Section id="why" title="6. Why We Use Personal Information">
                <div className="space-y-4">
                  {processingPurposes.map((row) => (
                    <div
                      key={row.purpose}
                      className="rounded-2xl border border-line bg-soft/50 p-4 sm:p-5"
                    >
                      <p className="font-medium text-navy">{row.purpose}</p>
                      <p className="mt-2 text-sm leading-7">
                        <span className="font-medium text-gold-dark">
                          Information normally used:
                        </span>{" "}
                        {row.information}
                      </p>
                      <p className="mt-1 text-sm leading-7">
                        <span className="font-medium text-gold-dark">
                          Main lawful basis:
                        </span>{" "}
                        {row.basis}
                      </p>
                    </div>
                  ))}
                </div>
                <p>
                  Where we rely on legitimate interests, we consider the purpose,
                  necessity and effect on the individual before processing. You
                  may ask for information about that assessment. Where we rely on
                  consent, you may withdraw it at any time. Withdrawal does not
                  affect processing carried out before consent was withdrawn.
                </p>
              </Section>

              <Section id="not-provide" title="7. If You Do Not Provide Information">
                <p>
                  Some information is needed to answer an enquiry, assess a
                  matter, meet regulatory requirements or perform a contract. If
                  required information is not provided, we may be unable to offer
                  a consultation, accept instructions or continue acting. We will
                  explain when providing information is mandatory and the likely
                  consequences of not providing it.
                </p>
              </Section>

              <Section id="sharing" title="8. Sharing Personal Information">
                <p>
                  We share personal information only where necessary and lawful.
                  Recipients may include:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    the Home Office, UK Visas and Immigration and other public
                    authorities relevant to a matter;
                  </li>
                  <li>
                    the Immigration Advice Authority, our professional indemnity
                    insurer and professional advisers;
                  </li>
                  <li>
                    appropriately authorised advisers, solicitors or other
                    specialists where a referral or specialist input is agreed;
                  </li>
                  <li>
                    interpreters, translators, experts, couriers and other
                    providers engaged for a matter;
                  </li>
                  <li>
                    providers of case management, document storage, email, video
                    meeting, accounting, payment, website hosting, security and
                    technical support services;
                  </li>
                  <li>
                    law enforcement bodies, courts, tribunals or regulators where
                    disclosure is required or permitted by law; and
                  </li>
                  <li>
                    a purchaser or successor if our business is reorganised or
                    transferred, subject to appropriate confidentiality and data
                    protection safeguards.
                  </li>
                </ul>
                <p>
                  Service providers acting as processors may use information only
                  on our documented instructions and must protect it. Some
                  recipients, such as the Home Office or IAA, act as separate
                  controllers for their own statutory functions.
                </p>
              </Section>

              <Section id="transfers" title="9. International Transfers">
                <p>
                  Immigration work may require information to be sent to or
                  received from people and organisations outside the United
                  Kingdom. Some technology providers may also process information
                  outside the United Kingdom. Before making a restricted
                  transfer, we use a lawful transfer mechanism, such as UK
                  adequacy regulations, the UK International Data Transfer
                  Agreement or an approved UK Addendum, together with any
                  required risk assessment and supplementary safeguards.
                </p>
              </Section>

              <Section id="retention" title="10. Retention">
                <p>
                  We keep personal information only for as long as needed for the
                  purpose for which it was collected and to meet legal,
                  regulatory, tax, insurance and dispute requirements.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    General enquiries that do not become client matters are
                    normally retained for up to 12 months after the last
                    meaningful contact.
                  </li>
                  <li>
                    Client files and relevant case records are normally retained
                    for at least six years after a matter closes, unless a longer
                    period is reasonably required.
                  </li>
                  <li>
                    Financial and tax records are normally retained for six years
                    or for any longer period required by law.
                  </li>
                  <li>
                    Complaint and regulatory records are retained for a period
                    appropriate to the complaint, regulatory requirements and
                    possible legal claims.
                  </li>
                  <li>
                    Marketing information is retained until consent is withdrawn,
                    an objection is made or the information is no longer needed.
                    Marketing lists are reviewed regularly.
                  </li>
                  <li>
                    Cookie and similar technology retention periods are set out
                    in our Cookie Policy and consent tool.
                  </li>
                </ul>
                <p>
                  When information is no longer required, we securely delete or
                  anonymise it.
                </p>
              </Section>

              <Section id="security" title="11. Security">
                <p>
                  We use organisational and technical measures intended to
                  protect personal information from accidental loss, unauthorised
                  access, alteration or disclosure. Access is restricted to
                  people who need the information for their work and who are
                  subject to confidentiality duties. No internet transmission is
                  completely secure, so sensitive documents should be sent only
                  through a method we have approved.
                </p>
              </Section>

              <Section id="cookies" title="12. Cookies and Website Technologies">
                <p>
                  Our website may use strictly necessary technologies to operate
                  and optional technologies for analytics, embedded content or
                  marketing. We will not use non-exempt technologies before
                  obtaining any consent required by the Privacy and Electronic
                  Communications Regulations. You can accept, reject or change
                  optional choices through the website&apos;s cookie settings.
                  Our{" "}
                  <Link href="/cookie-policy" className="text-navy underline">
                    Cookie Policy
                  </Link>{" "}
                  identifies the technologies used, their providers, purposes and
                  duration.
                </p>
              </Section>

              <Section id="marketing" title="13. Marketing">
                <p>
                  We may send marketing only where permitted by data protection
                  and electronic communications law. You may opt out at any time
                  by using the unsubscribe method in a message or contacting us.
                  Opting out of marketing does not stop service messages about an
                  enquiry or active matter.
                </p>
              </Section>

              <Section id="rights" title="14. Your Rights">
                <p>Depending on the circumstances, you may have the right to:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>ask for access to your personal information;</li>
                  <li>
                    ask us to correct inaccurate or incomplete information;
                  </li>
                  <li>
                    ask us to erase information where there is no lawful reason
                    to keep it;
                  </li>
                  <li>ask us to restrict processing;</li>
                  <li>
                    object to processing based on legitimate interests or to
                    direct marketing;
                  </li>
                  <li>receive certain information in a portable format;</li>
                  <li>
                    withdraw consent where consent is the basis used; and
                  </li>
                  <li>
                    ask for safeguards where a decision with a legal or similarly
                    significant effect is made solely by automated means.
                  </li>
                </ul>
                <p>
                  These rights are not absolute. We may need to keep or withhold
                  information where an exemption or another person&apos;s rights
                  apply. We may ask for information to verify identity before
                  responding. We normally respond without charge and within the
                  time required by law.
                </p>
              </Section>

              <Section id="automated" title="15. Automated Decisions">
                <p>
                  We do not use personal information to make solely automated
                  decisions that produce legal or similarly significant effects.
                  If this changes, we will provide the information and safeguards
                  required by law before the processing begins.
                </p>
              </Section>

              <Section id="children" title="16. Children">
                <p>
                  Our website is not directed at children. We may process
                  information about a child where this is necessary for an
                  immigration enquiry or matter. A parent, guardian or other
                  person providing a child&apos;s information must have an
                  appropriate basis for doing so. We apply additional care to
                  children&apos;s information and collect only what is necessary.
                </p>
              </Section>

              <Section id="complaints" title="17. Complaints and Contact">
                <p>
                  Please contact us first at{" "}
                  <a href={`mailto:${site.email}`} className="text-navy underline">
                    {site.email}
                  </a>{" "}
                  if you have a question, wish to exercise a right or are
                  concerned about our use of personal information.
                </p>
                <p>
                  You may also complain to the Information Commissioner&apos;s
                  Office. Information about making a data protection complaint is
                  available at{" "}
                  <a
                    href="https://ico.org.uk/make-a-complaint/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy underline"
                  >
                    ico.org.uk/make-a-complaint
                  </a>
                  . You may contact the ICO at any time, although it will
                  normally expect you to raise the issue with us first.
                </p>
              </Section>

              <Section id="changes" title="18. Changes to This Notice">
                <p>
                  We may update this notice when our services, technology or
                  legal obligations change. The current version will be published
                  on our website with its effective date. Material changes will
                  be brought to the attention of affected people where
                  appropriate.
                </p>
              </Section>

              <Section id="contact" title="19. Company Contact Details">
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
