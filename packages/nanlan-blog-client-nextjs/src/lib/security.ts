// import { rateLimit } from '@/lib/rate-limit'

// // API 速率限制
// export const apiLimiter = rateLimit({
//   interval: 60 * 1000, // 1分钟
//   uniqueTokenPerInterval: 500,
//   max: 60 // 每分钟最多60个请求
// })

// CORS配置
export const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || [],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
} 