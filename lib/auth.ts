import { jwtVerify, SignJWT } from "jose"

export const ADMIN_AUTH_COOKIE = "talentflux_admin_token"

type AdminJWTPayload = {
  sub: string
  role: "admin" 
  email: string
}

function getJwtSecret() {
  const secret = process.env.JWT_SECRET

  if (!secret || secret.length < 16) {
    throw new Error("JWT_SECRET must be set and at least 16 characters long")
  }

  return new TextEncoder().encode(secret)
}

export async function createAdminToken(email: string) {
  return new SignJWT({ role: "admin", email })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(email)
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(getJwtSecret())
}

export async function verifyAdminToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecret())
    const jwtPayload = payload as Partial<AdminJWTPayload>

    if (jwtPayload.role !== "admin" || !jwtPayload.email || !jwtPayload.sub) {
      return null
    }

    return jwtPayload as AdminJWTPayload
  } catch {
    return null
  }
}

export function isValidAdminCredentials(email: string, password: string) {
  const adminEmail = process.env.ADMIN_EMAIL
  const adminPassword = process.env.ADMIN_PASSWORD

  return Boolean(
    adminEmail &&
      adminPassword &&
      email.toLowerCase().trim() === adminEmail.toLowerCase().trim() &&
      password === adminPassword,
  )
}
