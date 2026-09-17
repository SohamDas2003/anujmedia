import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/logo.png",
        search: "?v=2",
      },
      {
        pathname: "/hero-woman.png",
      },
    ],
  },
};

export default nextConfig;
