import { webpack } from "next/dist/compiled/webpack/webpack";

/** @type {import('next').NextConfig} */
const nextConfig = {
  future: { webpack5: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/**",
      },
    ],
  },
};
export default nextConfig;
