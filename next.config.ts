import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 
};

module.exports = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
    autoPrerender: false, // Disable static route icon
  },
};

export default nextConfig;
