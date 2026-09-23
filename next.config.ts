import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "koderspedia.com",
      },
    ],
  },
};

export default nextConfig;
