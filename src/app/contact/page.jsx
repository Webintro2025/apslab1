// No "use client" here

// SEO metadata for Contact page
export const metadata = {
  alternates: {
    canonical: "https://apsinstrument.in/contact",
  },
  title: "Contact APS Lab | Medical & Laboratory Equipment Manufacturer in India",
  description: "Contact APS Lab for inquiries, support, and quotes on medical and laboratory equipment. Reach our team for fast assistance and expert advice.",
  keywords: [
    "APS Lab",
    "Contact",
    "Medical Equipment",
    "Laboratory Equipment",
    "Support",
    "Quote",
    "Supplier",
    "Exporter",
    "India",
    "Delhi"
  ],
  openGraph: {
    title: "Contact APS Lab | Medical & Laboratory Equipment Manufacturer in India",
    description: "Contact APS Lab for inquiries, support, and quotes on medical and laboratory equipment. Reach our team for fast assistance and expert advice.",
    url: "https://apsinstrument.in/contact",
    siteName: "APS Lab",
    images: [
      {
        url: "/logo.png",
        width: 400,
        height: 200,
        alt: "APS Lab Logo"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact APS Lab | Medical & Laboratory Equipment Manufacturer in India",
    description: "Contact APS Lab for inquiries, support, and quotes on medical and laboratory equipment. Reach our team for fast assistance and expert advice.",
    site: "@apslab",
    images: [
      {
        url: "/logo.png",
        alt: "APS Lab Logo"
      }
    ]
  }
};

    import ContactPageClient from "./pageClient";

    export default function ContactPage() {
      return <ContactPageClient />;
    }
