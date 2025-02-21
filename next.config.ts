import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cras-next-js.vercel.app',
      },
    ],
  },
};

export default nextConfig;
