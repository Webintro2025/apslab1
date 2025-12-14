// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();

  // Sab pages ke liye SEO-friendly X-Robots-Tag
  res.headers.set(
    "X-Robots-Tag",
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  );

  return res;
}

// Middleware matcher sab pages pe apply hoga
export const config = {
  matcher: "/:path*", // root aur sub-pages sab ke liye
};
