import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma"
import { ADMIN_AUTH_COOKIE, verifyAdminToken } from "@/lib/auth"
export const dynamic = "force-dynamic"
export const runtime = "nodejs"
async function requireAdmin() {
  const cookieStore = await cookies()
  const token = cookieStore.get(ADMIN_AUTH_COOKIE)?.value
  if (!token) redirect("/admin/login")
  const admin = await verifyAdminToken(token)
  if (!admin) redirect("/admin/login")
}

export default async function AdminApplicationsPage() {
  await requireAdmin()

  const applications = await prisma.application.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      job: {
        select: { title: true, company: true, location: true },
      },
    },
  })

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-28 pb-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Admin Panel - <span className="text-primary">Applications</span>
          </h1>
          <p className="text-muted-foreground mb-6">Review all submitted applications in one place.</p>
          <Button asChild variant="outline">
            <a href="/admin/jobs">Back to Jobs</a>
          </Button>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-4">
            {applications.map((application) => (
              <Card key={application.id}>
                <CardHeader>
                  <CardTitle className="text-xl">{application.name}</CardTitle>
                  <CardDescription>
                    {application.email} · {application.phone}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">Job:</span> {application.job.title} ({application.job.company})
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span> {application.job.location}
                  </p>
                  {application.resumeLink ? (
                    <p>
                      <span className="font-semibold">Resume:</span>{" "}
                      <a className="text-primary underline" href={application.resumeLink} target="_blank" rel="noreferrer">
                        Open resume link
                      </a>
                    </p>
                  ) : null}
                  {application.coverLetter ? (
                    <p>
                      <span className="font-semibold">Cover Letter:</span> {application.coverLetter}
                    </p>
                  ) : null}
                </CardContent>
              </Card>
            ))}
            {applications.length === 0 ? (
              <Card>
                <CardContent className="py-10 text-center text-muted-foreground">
                  No applications submitted yet.
                </CardContent>
              </Card>
            ) : null}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
