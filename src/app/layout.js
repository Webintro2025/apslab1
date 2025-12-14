import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "APS Lab | Medical & Laboratory Equipment Manufacturer, Supplier, Exporter",
  description: "APS Lab is a leading manufacturer, supplier, and exporter of medical and laboratory equipment in India. We provide high-quality products including deep freezers, autoclaves, hospital furniture, OT lights, and more. Serving Delhi, Lucknow, Kolkata, Hyderabad, Chennai, and all major cities.",
  keywords: [
    "APS Lab",
    "Medical Equipment",
    "Laboratory Equipment",
    "Manufacturer",
    "Supplier",
    "Exporter",
    "Deep Freezer",
    "Autoclave",
    "Hospital Furniture",
    "OT Light",
    "India",
    "Delhi",
    "Lucknow",
    "Kolkata",
    "Hyderabad",
    "Chennai"
    
  ],
      verification: {
      google: "Eij2LGHNtOVNDiwbT0avpsQ1gG5V1nDBmiXQiQb_qZs", // ← Yeh line important hai
    },  
  authors: [{ name: "APS Lab", url: "https://apslab.in" }],
  openGraph: {
    title: "APS Lab | Medical & Laboratory Equipment Manufacturer, Supplier, Exporter",
    description: "APS Lab is a leading manufacturer, supplier, and exporter of medical and laboratory equipment in India. We provide high-quality products including deep freezers, autoclaves, hospital furniture, OT lights, and more.",
    url: "https://apsinstrument.in/",
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
    title: "APS Lab | Medical & Laboratory Equipment Manufacturer, Supplier, Exporter",
    description: "APS Lab is a leading manufacturer, supplier, and exporter of medical and laboratory equipment in India.",
    site: "@apslab",
    images: [
      {
        url: "/logo.png",
        alt: "APS Lab Logo"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-papm6p6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <FloatingIcons />
        <Footer />
      </body>
    </html>
  );
}
