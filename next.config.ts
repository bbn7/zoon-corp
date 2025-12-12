
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  basePath: '/zoon-corp',
  assetPrefix: '/zoon-corp',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
