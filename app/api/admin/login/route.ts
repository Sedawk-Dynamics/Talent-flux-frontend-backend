import { NextResponse } from "next/server"
import { ADMIN_AUTH_COOKIE, createAdminToken, isValidAdminCredentials } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const email = String(body?.email ?? "")
    const password = String(body?.password ?? "")

    if (!isValidAdminCredentials(email, password)) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 })
    }

    const token = await createAdminToken(email)
    const response = NextResponse.json({ message: "Login successful" })

    response.cookies.set({
      name: ADMIN_AUTH_COOKIE,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    })

    return response
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid request payload"
    const status = message.includes("JWT_SECRET") ? 500 : 400
    return NextResponse.json({ message }, { status })
  }
}
