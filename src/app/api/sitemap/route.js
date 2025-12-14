
import { NextResponse } from "next/server";
import { locations } from "../../../marketplace";

export async function GET() {
  const baseUrl = "https://apsinstrument.in";


  // URLs generate karenge
  const urls = [
    baseUrl,                // Home page
    `${baseUrl}/about`,
    `${baseUrl}/contact`,
    ...locations.map(loc => `${baseUrl}/in/${encodeURIComponent(loc)}`) // Dynamic PG pages
  ];

  // XML format me convert
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        url => `
      <url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
      )
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
