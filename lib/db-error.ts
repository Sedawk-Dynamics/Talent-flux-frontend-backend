/**
 * Safe message for UI when Prisma/database calls fail (avoid leaking internals in production).
 */
export function getPublicDatabaseErrorMessage(error: unknown): string {
  if (process.env.NODE_ENV === "development" && error instanceof Error) {
    return error.message
  }
  return "Could not connect to the database. On Vercel, set DATABASE_URL to a PostgreSQL URL (use your host’s pooled/serverless connection string, e.g. Supabase pooler or Neon)."
}
