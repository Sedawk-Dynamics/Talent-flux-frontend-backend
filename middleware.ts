import { NextResponse, type NextRequest } from "next/server"
import { ADMIN_AUTH_COOKIE, verifyAdminToken } from "@/lib/auth"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith("/admin/login")) {
    const token = request.cookies.get(ADMIN_AUTH_COOKIE)?.value
    if (!token) {
      return NextResponse.next()
    }

    const payload = await verifyAdminToken(token)
    if (payload) {
      return NextResponse.redirect(new URL("/admin/jobs", request.url))
    }

    return NextResponse.next()
  }

  const token = request.cookies.get(ADMIN_AUTH_COOKIE)?.value
  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }

  const payload = await verifyAdminToken(token)
  if (!payload) {
    const response = NextResponse.redirect(new URL("/admin/login", request.url))
    response.cookies.delete(ADMIN_AUTH_COOKIE)
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
