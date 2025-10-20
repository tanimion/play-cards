// middleware.js (project root)
import { NextResponse } from 'next/server';

export function middleware(req) {
  // --- Only protect selected environments/hosts (optional) ---
  // Example: protect preview deployments but NOT production
  // if (process.env.VERCEL_ENV === 'production') return NextResponse.next();

  // Skip assets and Next internals (the matcher below also helps)
  const { pathname } = req.nextUrl;
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/robots') ||
    pathname.startsWith('/sitemap')
  ) {
    return NextResponse.next();
  }

  const basicAuth = req.headers.get('authorization');
  const userEnv = process.env.SITE_USER || 'user';
  const passEnv = process.env.SITE_PASSWORD;

  if (!passEnv) {
    // If no password is set in env, let traffic through (or throw).
    return NextResponse.next();
  }

  if (basicAuth) {
    // Authorization: Basic base64(user:pass)
    const authValue = basicAuth.split(' ')[1] || '';
    // atob is available in the edge runtime
    const [user, pwd] = atob(authValue).split(':');

    if (user === userEnv && pwd === passEnv) {
      return NextResponse.next();
    }
  }

  return new NextResponse('Auth required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
  });
}

// Protect the whole site, except asset routes above.
// You can narrow this, e.g. matcher: ['/admin/:path*', '/preview/:path*']
export const config = {
  matcher: ['/(.*)'],
};
