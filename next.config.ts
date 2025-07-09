import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "admin.bergen.works",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/nyheter/:slug*",
        destination: "https://admin.bergen.works/nyheter/:slug*",
        permanent: false,
      },
      {
        source: "/artikler/:slug*",
        destination: "https://admin.bergen.works/artikler/:slug*",
        permanent: false,
      },
      {
        source: "/blogg/:slug*",
        destination: "https://admin.bergen.works/blogg/:slug*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
