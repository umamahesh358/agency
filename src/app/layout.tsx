import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Automate SMMA Agency | Digital Dominance Through Automation",
  description:
    "We build high-performance digital systems for Real Estate, Medical, and Fashion brands. Scale faster with precision marketing and automation-driven growth.",
  keywords: [
    "SMMA",
    "social media marketing",
    "digital agency",
    "website design",
    "SEO",
    "real estate marketing",
    "medical marketing",
    "fashion marketing",
  ],
  authors: [{ name: "Automate SMMA Agency" }],
  openGraph: {
    title: "Automate SMMA Agency | Digital Dominance Through Automation",
    description:
      "Cinematic, automation-driven digital experiences for clients who demand dominance.",
    url: "https://automatesmma.com",
    siteName: "Automate SMMA Agency",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automate SMMA Agency",
    description: "Digital Dominance Through Automation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Automate SMMA Agency",
              description:
                "Premium digital marketing agency specializing in Website-as-a-Service, SEO, and Social Media Marketing",
              url: "https://automatesmma.com",
              logo: "https://automatesmma.com/logo.png",
              sameAs: [
                "https://twitter.com/automatesmma",
                "https://linkedin.com/company/automatesmma",
                "https://instagram.com/automatesmma",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-XXX-XXX-XXXX",
                contactType: "sales",
                availableLanguage: "English",
              },
              areaServed: "Worldwide",
              serviceType: [
                "Website Design",
                "SEO",
                "Social Media Marketing",
                "Digital Marketing",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
