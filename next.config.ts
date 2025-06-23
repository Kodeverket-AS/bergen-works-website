import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                pathname: "/images/**",
            },
        ],
    },

    async redirects() {
        return [
            // 🔁 Ny redirect for /2025/05/30/artikkel-slug
            {
                source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug*",
                destination:
                    "https://admin.bergen.works/:year/:month/:day/:slug*",
                permanent: false,
            },
            // Tidligere redirect-regler
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
