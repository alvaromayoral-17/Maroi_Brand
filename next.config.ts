import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next only serves the qualities listed here; without this the 90 we ask
    // for on photography is rejected and everything falls back to 75.
    qualities: [75, 90],
  },
};

export default nextConfig;
