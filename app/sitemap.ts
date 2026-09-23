import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/services",
    "/benefits",
    "/fees",
    "/how-we-work",
    "/faq",
    "/contact",
    "/book-appointment",
    "/privacy",
    "/website-terms",
    "/terms",
    "/cookie-policy",
    "/complaints-policy",
    ...services.map((service) => `/services/${service.slug}`),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/services") ? "monthly" : "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
