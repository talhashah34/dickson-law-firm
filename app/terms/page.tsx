import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Business",
  description: `Terms of Business for immigration advice and services at ${site.name}. Effective 23 September 2026.`,
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
      <div className="mt-4 max-w-none space-y-4 text-[0.975rem] leading-8 text-muted">
        {children}
      </div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        kicker="LEGAL"
        title="Terms of Business"
        description="These terms explain the general basis on which Dickson Law Office Ltd provides regulated immigration advice and services. They apply with the Client Care Letter issued for each accepted matter."
      />

      <div className="bg-soft/40 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <article className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_28px_70px_-40px_rgba(10,61,42,0.45)]">
            <div className="flex flex-col gap-3 border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#faf8f4_100%)] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                  Immigration advice &amp; services
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
                These Terms of Business for Immigration Advice and Services set
                out the general basis on which we provide regulated advice. They
                apply together with the Client Care Letter issued for each
                accepted matter.
              </p>

              <Section id="about" title="1. About These Terms">
                <p>
                  These Terms of Business, the applicable fee information and the
                  individual Client Care Letter form the agreement for an accepted
                  matter. The Client Care Letter identifies the client, instructions,
                  scope of work, adviser, fees and any matter-specific conditions. If
                  there is an inconsistency, the Client Care Letter prevails for that
                  matter, except where doing so would conflict with law or a
                  regulatory requirement.
                </p>
                <p>
                  Website information, a general enquiry, a booking, an initial triage
                  call or a consultation does not by itself require us to accept
                  continuing instructions. We will confirm in writing if we agree to
                  act.
                </p>
              </Section>

        <Section id="regulatory" title="2. Our Business and Regulatory Status">
          <p>
            Dickson Law Office Ltd is registered in England and Wales under
            company number 15171914. Our registered office is Unit 8A, West
            Cross Shopping Centre, Oldbury Road, Smethwick, West Midlands, B66
            1JG.
          </p>
          <p>
            We are regulated by the Immigration Advice Authority at Level 1 in
            the categories of Immigration and Asylum and Protection. Our
            organisation number is F202636259. Dickson Tarnongo is an authorised
            adviser, number P062830.
          </p>
          <p>
            We act only where a matter falls within our regulatory authorisation
            and professional competence. We do not undertake substantive asylum
            work, appeals, tribunal representation, judicial review or other
            work outside our authorised scope. If a matter is or becomes
            unsuitable for us, we will explain this and, where appropriate,
            refer or signpost the client to an appropriately authorised adviser.
          </p>
        </Section>

        <Section id="instructions" title="3. Accepting Instructions">
          <p>
            Before accepting instructions, we may need enough information to
            understand the matter, check for conflicts, confirm identity,
            establish authority to act and assess whether the work is within our
            authorisation and competence. We may decline instructions where
            these checks cannot be completed, a conflict exists, the requested
            work is outside our scope, the relationship of trust has broken down
            or another proper reason applies.
          </p>
          <p>
            We act only for the client identified in the Client Care Letter. We
            do not owe duties to a family member, sponsor, employer or other
            person unless we expressly agree in writing to act for that person.
            Where interests may differ, separate advice may be required.
          </p>
        </Section>

        <Section id="scope" title="4. Scope of Work">
          <p>
            The Client Care Letter states what we will and will not do. Any
            additional work requires our written agreement and may involve a
            further fee. Unless specifically agreed, our work does not include
            tax advice, financial advice, foreign law, reserved legal
            activities, appeal representation or monitoring a person&apos;s
            immigration position after the agreed matter closes.
          </p>
          <p>
            We may revise the scope if the facts change, new information
            emerges, the Home Office raises a new issue or the matter becomes
            more complex. We will inform the client before carrying out
            additional chargeable work.
          </p>
        </Section>

        <Section id="communication" title="5. Adviser and Communication">
          <p>
            The Client Care Letter identifies the person responsible for the
            matter and gives their contact details. Appointments are normally
            required for meetings. We may communicate by post, email, telephone,
            secure video call and, for appointment booking or informal messages,
            WhatsApp.
          </p>
          <p>
            Formal advice, significant case updates and important decisions will
            be confirmed by letter or email. The client must tell us promptly if
            contact details change, check communications regularly and keep
            copies. Electronic communication carries security and delivery
            risks. A client who requires a particular communication method
            should tell us before sending sensitive information.
          </p>
        </Section>

        <Section id="client-duties" title="6. Client Responsibilities">
          <p>The client agrees to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              provide complete, accurate and honest instructions and documents;
            </li>
            <li>
              tell us promptly about changes in circumstances, immigration
              status, address, relationships, employment, finances or other
              relevant matters;
            </li>
            <li>
              forward Home Office and other relevant communications without
              delay;
            </li>
            <li>
              check drafts and factual summaries carefully and identify errors
              before submission;
            </li>
            <li>meet agreed deadlines and attend required appointments;</li>
            <li>pay agreed fees and third-party charges when due; and</li>
            <li>
              not ask us to mislead any person or authority, conceal relevant
              information or submit false evidence.
            </li>
          </ul>
          <p>
            We may stop acting if the client gives information that we
            reasonably believe is false or misleading, refuses to correct a
            misleading position, fails to provide necessary instructions or
            otherwise prevents us from acting lawfully and professionally.
          </p>
        </Section>

        <Section id="advice" title="7. Advice and Decisions">
          <p>
            Our advice is based on the information available, the agreed scope
            and the law and policy reasonably understood at the time.
            Immigration law and Home Office practice can change. We will address
            relevant changes that occur while an accepted matter remains open,
            but we do not provide continuing monitoring after closure unless
            agreed in writing.
          </p>
          <p>
            We cannot guarantee an application, request or decision will succeed
            or be decided within a particular period. Decisions and processing
            times are controlled by the relevant authority. Any view on
            prospects is an assessment, not a promise.
          </p>
        </Section>

        <Section id="fees" title="8. Fees">
          <p>
            We normally charge an agreed fixed fee for the defined work. The
            amount, payment schedule and work included are stated in the Client
            Care Letter. No hourly rate applies unless expressly agreed in
            writing. We are not currently registered for VAT, so VAT is not
            added. If our VAT status changes, we will notify affected clients
            before VAT is charged.
          </p>
          <p>
            A fixed fee applies to the agreed scope and assumptions. If
            instructions change or additional work becomes necessary, we will
            explain the proposed work and fee before proceeding. A client is not
            required to accept additional work, but refusal may mean that we
            cannot continue where the original scope is no longer adequate.
          </p>
        </Section>

        <Section id="third-party" title="9. Third Party Costs">
          <p>
            Home Office application fees, the Immigration Health Surcharge,
            biometric charges, priority service charges, translation and
            interpreting costs, expert fees, courier charges and other
            third-party expenses are not included unless the Client Care Letter
            states otherwise. The client remains responsible for those costs and
            for increases imposed by a third party.
          </p>
          <p>
            We will not incur a material third-party cost without the
            client&apos;s authority, except where the client has already
            authorised a defined category of expense. Third parties may require
            payment in advance and their own terms may apply.
          </p>
        </Section>

        <Section id="payments" title="10. Invoices, Payments and Refunds">
          <p>
            Invoices are payable in accordance with the Client Care Letter or
            invoice. Work may be paused if an agreed payment is overdue,
            provided that doing so is lawful, fair and does not improperly
            prejudice the client. The client remains responsible for deadlines
            unless we have expressly accepted responsibility for them in
            writing.
          </p>
          <p>
            If instructions end after work has begun, we may retain a fair and
            proportionate part of the agreed fee for work properly completed and
            expenses incurred. We will provide a written calculation of any
            balance or refund. Any money held for a client, rather than received
            in settlement of an invoice, will be handled in accordance with
            applicable IAA requirements and the arrangement explained to the
            client.
          </p>
        </Section>

        <Section id="cancellation" title="11. Consumer Cancellation Rights">
          <p>
            Where a consumer enters a service contract at a distance, such as by
            telephone, email, video call or online, or away from our business
            premises, the consumer will normally have 14 days from the day after
            the contract is made to cancel without giving a reason. A
            cancellation may be made by a clear statement using the contact
            details in{" "}
            <a href="#contact" className="text-navy underline">
              section 25
            </a>{" "}
            or the model form at the end of these terms.
          </p>
          <p>
            We will not begin substantive work during the cancellation period
            unless the client expressly requests an early start. If the client
            requests an early start and then cancels, the client must pay a
            proportionate amount for work supplied up to cancellation. If the
            service is fully performed during the cancellation period after the
            client&apos;s express request and acknowledgement that the right to
            cancel will be lost on full performance, the right to cancel ends
            when the service is fully performed.
          </p>
          <p>
            Where a valid cancellation requires a refund, we will make it without
            undue delay and normally within 14 days after being informed of the
            cancellation, using the original payment method unless another method
            is agreed. Statutory rights are not affected.
          </p>
        </Section>

        <Section id="urgent" title="12. Urgent Work">
          <p>
            If a deadline or other urgency requires work during a cancellation
            period, the client must disclose the urgency and may be asked to
            confirm an express request for work to begin. We may decline urgent
            instructions if there is insufficient time to act competently or
            complete required checks. We accept responsibility for a deadline
            only when this is confirmed in writing.
          </p>
        </Section>

        <Section id="documents" title="13. Original Documents">
          <p>
            We take reasonable care of original documents and return them when
            they are no longer required, unless a different arrangement is
            agreed. Clients should retain copies where possible and must not
            send an original document through ordinary post without prior
            agreement. We may copy documents for the client file and regulatory
            recordkeeping.
          </p>
        </Section>

        <Section id="confidentiality" title="14. Confidentiality and Data Protection">
          <p>
            We keep client information confidential subject to legal, regulatory
            and professional duties. Disclosure may be required to provide the
            agreed service, comply with law, respond to the IAA, notify an
            insurer, prevent or report serious wrongdoing, protect legal rights
            or deal with a complaint. The IAA may inspect client files as part
            of its regulatory role.
          </p>
          <p>
            Our Website Privacy Notice and any matter-specific privacy
            information explain how we use personal information. The client must
            provide personal information about another person only where
            permitted and should tell us if confidentiality or safety concerns
            require special handling.
          </p>
        </Section>

        <Section id="referrals" title="15. Referrals, Interpreters and Other Providers">
          <p>
            We may suggest another authorised adviser or service provider where
            this is in the client&apos;s interests. We will explain whether the
            other person acts independently and whether information will be
            shared. We do not pay or accept prohibited referral fees. An
            independent provider is responsible for its own work and fees.
          </p>
          <p>
            If an interpreter, translator, expert or other provider is needed,
            the client may be responsible for the cost. We may refuse to use a
            person whose independence, competence, confidentiality or
            reliability is reasonably in doubt.
          </p>
        </Section>

        <Section id="legal-aid" title="16. Legal Aid">
          <p>
            We do not currently provide services under a Legal Aid Agency
            contract. A person on a low income or receiving benefits may qualify
            for legal aid for certain matters. If legal aid may be relevant, we
            may recommend that the person seeks advice from an authorised legal
            aid provider before instructing us privately.
          </p>
        </Section>

        <Section id="conflicts" title="17. Conflicts of Interest">
          <p>
            We do not act where a conflict of interest prevents us from acting
            properly or where there is a significant risk that duties to one
            client conflict with duties to another. If a conflict arises after
            work begins, we may have to stop acting for one or more clients. We
            will explain the position so far as confidentiality duties permit.
          </p>
        </Section>

        <Section id="ending" title="18. Ending Our Agreement">
          <p>
            The client may end instructions at any time by written notice. We may
            stop acting for a proper reason, including non-payment, loss of
            contact, failure to provide instructions, dishonesty, abusive
            conduct, a conflict, regulatory limits or a breakdown of trust. Where
            practicable, we will give reasonable written notice and explain any
            urgent steps the client should take.
          </p>
          <p>
            When the agreement ends, we will account for fees and money, return
            original documents as appropriate and confirm the status of the
            matter. Ending the agreement does not remove rights or obligations
            that arose before termination.
          </p>
        </Section>

        <Section id="retention" title="19. File Closure and Retention">
          <p>
            We will tell the client when the matter is closed. We normally keep
            the client file and relevant records for at least six years after
            closure to meet regulatory, insurance and legal requirements. After
            the retention period, the file may be securely destroyed without
            further notice unless a longer period is required or another written
            arrangement has been agreed.
          </p>
          <p>
            A client may request copies of documents held on the file, subject
            to data protection law, confidentiality, legal privilege, third-party
            rights and reasonable arrangements for retrieval or copying.
          </p>
        </Section>

        <Section id="complaints" title="20. Complaints">
          <p>
            We aim to provide a high standard of service. A concern should be
            raised as soon as possible with Dickson Tarnongo, Managing Director
            and Head of Advice. A complaint may be made verbally or in writing
            using the contact details in section 25. We will acknowledge a
            complaint within five working days, investigate it fairly and
            communicate the outcome in writing. Our full Complaints Procedure is
            available on request and on our{" "}
            <a href="/complaints-policy" className="text-navy underline">
              Complaints Policy
            </a>{" "}
            page.
          </p>
          <p>
            A client may complain directly to the Immigration Advice Authority
            at any time, whether or not the complaint has first been made to us:
          </p>
          <address className="not-italic leading-7 text-navy">
            Immigration Advice Authority
            <br />
            Complaints Team
            <br />
            IAA
            <br />
            PO Box 567
            <br />
            Dartford
            <br />
            DA1 9XW
            <br />
            Email:{" "}
            <a
              href="mailto:complaints@immigrationadviceauthority.gov.uk"
              className="underline"
            >
              complaints@immigrationadviceauthority.gov.uk
            </a>
            <br />
            Telephone:{" "}
            <a href="tel:03450000046" className="underline">
              0345 000 0046
            </a>
            <br />
            Website:{" "}
            <a
              href="https://www.gov.uk/find-an-immigration-adviser/complain-about-an-adviser"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Complain about an adviser (GOV.UK)
            </a>
          </address>
        </Section>

        <Section id="insurance" title="21. Professional Indemnity Insurance">
          <p>
            We maintain professional indemnity insurance as required for
            regulated immigration advice organisations. The insurance is subject
            to its terms, exclusions and limits. Information reasonably required
            about the cover will be provided where appropriate.
          </p>
        </Section>

        <Section id="liability" title="22. Liability">
          <p>
            We are responsible for providing accepted services with reasonable
            care and skill and in accordance with applicable professional duties.
            Nothing in these terms excludes or restricts liability where doing so
            is prohibited by law, including liability for death or personal
            injury caused by negligence, fraud or fraudulent misrepresentation.
          </p>
          <p>
            We are not responsible for loss caused by incomplete, inaccurate or
            late information supplied by the client or another person; a
            client&apos;s failure to follow advice; changes in law or policy
            after a matter closes; a decision or delay controlled by a public
            authority; or the independent acts of a third party, except to the
            extent that the loss was caused by our breach of duty. Any
            matter-specific and lawful limitation will be stated clearly in the
            Client Care Letter.
          </p>
        </Section>

        <Section id="force-majeure" title="23. Events Outside Reasonable Control">
          <p>
            We are not responsible for delay caused by an event outside our
            reasonable control, such as failure of a government system, serious
            technology outage, transport disruption, industrial action, fire,
            flood, epidemic or other emergency. We will take reasonable steps to
            reduce the effect, keep the client informed and identify any action
            the client should take.
          </p>
        </Section>

        <Section id="general" title="24. General Legal Terms">
          <p>
            If any provision is invalid or unenforceable, the remaining
            provisions continue to apply.
          </p>
          <p>A delay in enforcing a right is not a waiver of that right.</p>
          <p>
            No person other than the client and Dickson Law Office Ltd may
            enforce the agreement under the Contracts (Rights of Third Parties)
            Act 1999, unless the Client Care Letter expressly provides
            otherwise.
          </p>
          <p>
            These terms and the Client Care Letter contain the agreement about
            the accepted work and replace prior discussions about that scope,
            without excluding liability for fraud or rights that cannot lawfully
            be excluded.
          </p>
          <p>
            The agreement and non-contractual disputes are governed by the law of
            England and Wales. The courts of England and Wales have jurisdiction,
            subject to any mandatory rights a consumer has to use the courts
            where the consumer lives.
          </p>
          <p>Nothing in these terms affects statutory consumer rights.</p>
        </Section>

        <Section id="contact" title="25. Contact Details">
          <address className="not-italic leading-7 text-navy">
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

        <section
          id="cancellation-form"
          className="scroll-mt-28 space-y-5 rounded-2xl border border-line bg-soft/80 p-6 sm:p-8"
        >
          <h2 className="font-serif text-2xl font-semibold text-navy">
            Model Cancellation Form
          </h2>
          <p className="text-[0.975rem] leading-8 text-muted">
            Complete and return this form only if you wish to cancel a
            qualifying distance or off-premises service contract.
          </p>
          <p className="text-[0.975rem] leading-8 text-navy">
            To: Dickson Law Office Ltd, Unit 8A, West Cross Shopping Centre,
            Oldbury Road, Smethwick, West Midlands, B66 1JG
            <br />
            Email: {site.email}
          </p>
          <p className="text-[0.975rem] leading-8 text-muted">
            I give notice that I cancel my contract for the following
            immigration advice or service:
          </p>
          <ul className="space-y-4 text-[0.975rem] leading-8 text-navy">
            <li>Service: ________________________________________________</li>
            <li>
              Date the contract was made:
              ________________________________________________
            </li>
            <li>
              Client name: ________________________________________________
            </li>
            <li>
              Client address: ________________________________________________
            </li>
            <li>
              Client reference:
              ________________________________________________
            </li>
            <li>
              Signature if sent on paper:
              ________________________________________________
            </li>
            <li>Date: ________________________________________________</li>
          </ul>
          <p className="text-[0.975rem] leading-8 text-muted">
            You may cancel by any clear statement. Use of this form is optional.
            Keep evidence of when the cancellation was sent.
          </p>
        </section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
