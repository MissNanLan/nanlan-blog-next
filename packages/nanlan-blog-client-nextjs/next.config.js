const fs = require("fs");
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 输出独立构建,提高部署性能
  output: 'standalone',
  
  // 图片域名白名单
  images: {
    domains: ['example.com', 'cdn.yoursite.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com',
      }
    ],
    // 图片优化配置
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // 启用 SWC 压缩,提升构建性能
  // swcMinify: true,

  // 环境变量配置
  env: {
    API_URL: process.env.API_URL
  },

  // 根据环境配置重写规则
  async rewrites() {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:3001/api/:path*'
        }
      ]
    }
    
    return []  // 生产环境不需要重写规则
  }
}

module.exports = nextConfig
