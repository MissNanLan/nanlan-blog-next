import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 添加缓存控制
  const response = NextResponse.next()
  
  // 静态资源缓存
  if (request.nextUrl.pathname.startsWith('/_next/static')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }
  
  // API 响应缓存
  if (request.nextUrl.pathname.startsWith('/api')) {
    response.headers.set('Cache-Control', 's-maxage=60, stale-while-revalidate')
  }

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|favicon.ico).*)',
    '/api/:path*',
  ],
} 