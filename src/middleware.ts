import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(req: NextRequest) {
  const referer = req.headers.get('referer');

  if (referer) {
    console.log('Usuário veio de:', referer);
  } else {
    console.log('Usuário acessou diretamente ou não há referer.');
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
