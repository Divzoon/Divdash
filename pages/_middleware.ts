import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    // This logic is only applied to /about
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // This logic is only applied to /dashboard
  }
}