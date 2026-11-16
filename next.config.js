/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static export: the SAME build deploys on Vercel AND Cloudflare Pages.
  // No server functions, no API routes, no adapter lock-in.
  output: "export",
  trailingSlash: true,
  // NOTE: redirects below apply on `next dev` / `next start` only.
  // Static hosts ignore next.config redirects, so the same 301 is ALSO
  // declared in vercel.json (Vercel) and public/_redirects (Cloudflare Pages).
  async redirects() {
    return [
      {
        source: "/hello-world/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hello-world",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
