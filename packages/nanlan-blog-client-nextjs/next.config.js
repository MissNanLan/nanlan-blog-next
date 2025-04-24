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
    // 默认使用环境变量中的 API 地址，如果没有则使用固定地址
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    return [
      {
        source: "/api/:path*",
        destination: `${apiBaseUrl}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
