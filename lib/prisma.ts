import { PrismaClient } from "@prisma/client"

/**
 * Single PrismaClient per Node process (dev HMR + warm Vercel serverless invocations).
 * Use a pooled `DATABASE_URL` on Vercel (PostgreSQL) to avoid exhausting connections.
 */
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined }

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  })

globalForPrisma.prisma = prisma
