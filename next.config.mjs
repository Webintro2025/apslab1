/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
