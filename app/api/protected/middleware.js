import { NextResponse } from 'next/server';
import { verifyToken } from '../../lib/auth';

export async function middleware(request) {
  const token = request.cookies.get('token');
  const user = verifyToken(token);

  if (!user) {
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'],
};
