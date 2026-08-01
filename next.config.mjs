/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The old Google Ads landing route is now the home page; keep live ad
      // links working.
      {
        source: "/mizan-uae-ar",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
