import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/logo.png`,
    email: site.email,
    telephone: site.phone,
    areaServed: "GB",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: site.address.county,
      postalCode: site.address.postcode,
      addressCountry: "GB",
    },
    identifier: [
      {
        "@type": "PropertyValue",
        name: "Company Number",
        value: site.companyNumber,
      },
      {
        "@type": "PropertyValue",
        name: "IAA Organisation Number",
        value: site.iaa.organisationNumber,
      },
    ],
    knowsAbout: site.iaa.categories,
    priceRange: "££",
    inLanguage: "en-GB",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
