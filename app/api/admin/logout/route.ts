import { NextResponse } from "next/server"
import { ADMIN_AUTH_COOKIE } from "@/lib/auth"

export async function POST() {
  const response = NextResponse.json({ message: "Logged out" })
  response.cookies.set({
    name: ADMIN_AUTH_COOKIE,
    value: "",
    path: "/",
    maxAge: 0,  
  })
  return response
}
