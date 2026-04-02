import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 静的エクスポート（Cloudflare Pages用）
  images: {
    unoptimized: true, // 静的エクスポート時は画像最適化を無効化
  },
  // トレイリングスラッシュを追加（オプション）
  trailingSlash: true,
};

export default nextConfig;
