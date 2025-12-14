// No "use client" here

// SEO metadata for About page
export const metadata = {
  alternates: {
    canonical: "https://apsinstrument.in/about",
  },
  title: "About APS Lab | Leading Medical & Laboratory Equipment Manufacturer in India",
  description:
    "Learn about APS Lab, a top manufacturer, supplier, and exporter of medical and laboratory equipment in India. Discover our mission, vision, and commitment to quality in healthcare and research solutions.",
  keywords: [
    "APS Lab",
    "About APS Lab",
    "Medical Equipment Manufacturer",
    "Laboratory Equipment Supplier",
    "Exporter",
    "Healthcare Solutions",
    "Research Equipment",
    "India",
    "Delhi",
    "Quality Medical Devices",
  ],
  openGraph: {
    title: "About APS Lab | Leading Medical & Laboratory Equipment Manufacturer in India",
    description:
      "Learn about APS Lab, a top manufacturer, supplier, and exporter of medical and laboratory equipment in India. Discover our mission, vision, and commitment to quality in healthcare and research solutions.",
    url: "https://apsinstrument.in/about",
    siteName: "APS Lab",
    images: [
      {
        url: "/logo.png",
        width: 400,
        height: 200,
        alt: "APS Lab Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About APS Lab | Leading Medical & Laboratory Equipment Manufacturer in India",
    description:
      "Learn about APS Lab, a top manufacturer, supplier, and exporter of medical and laboratory equipment in India.",
    site: "@apslab",
    images: [
      {
        url: "/logo.png",
        alt: "APS Lab Logo",
      },
    ],
  },
};

import AboutPageClient from "./pageClient";

export default function AboutPage() {
  return <AboutPageClient />;
}
