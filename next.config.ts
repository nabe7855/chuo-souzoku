import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // ✅ これでNext.jsの画像最適化を無効化
  },
  reactStrictMode: true, // ついでに推奨設定
};

export default nextConfig;
