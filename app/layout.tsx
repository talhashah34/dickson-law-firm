import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { CookieBanner } from "@/components/CookieBanner";
import { FloatingCta } from "@/components/FloatingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | UK Immigration Advice & Legal Consultation`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "UK immigration advice",
    "immigration solicitor West Midlands",
    "spouse visa",
    "skilled worker visa",
    "ILR",
    "British citizenship",
    "Dickson Law Office",
  ],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} | UK Immigration Advice`,
    description: site.description,
    images: [
      {
        url: "/logo.png",
        width: 936,
        height: 536,
        alt: `${site.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-full flex-col overflow-x-clip bg-background font-sans text-foreground"
        suppressHydrationWarning
      >
        <JsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-gold focus:px-3 focus:py-2 focus:text-navy"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <div className="relative z-20 bg-background px-0 pb-12 pt-8">
          <FloatingCta />
        </div>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
