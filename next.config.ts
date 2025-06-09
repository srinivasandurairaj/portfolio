import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: "dist",
  images: { unoptimized: true },
};

export default nextConfig;
