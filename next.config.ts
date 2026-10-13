import type { NextConfig } from "next";

const longCache = [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }];

const nextConfig: NextConfig = {
  trailingSlash: true,
  compress: true,
  experimental: {
    inlineCss: true,
  },
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [480, 640, 828, 1080, 1280, 1920],
    imageSizes: [64, 128, 256, 384],
  },
  async headers() {
    return [
      { source: "/new/:path*", headers: longCache },
      { source: "/rooms/:file(.+\\.(?:jpg|jpeg|png|webp|avif))", headers: longCache },
      { source: "/events/:path*", headers: longCache },
      { source: "/wedding/:path*", headers: longCache },
      { source: "/vectors/:path*", headers: longCache },
      { source: "/:file(.+\\.(?:jpg|jpeg|png|webp|avif|svg|ico))", headers: longCache },
    ];
  },
};

export default nextConfig;
