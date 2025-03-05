const fs = require("fs");
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 输出独立构建,提高部署性能
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "image-nanlan.test.upcdn.net",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // 根据环境配置重写规则
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
