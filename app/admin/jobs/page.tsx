import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { Eye, EyeOff, Trash2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { prisma } from "@/lib/prisma"
import { ADMIN_AUTH_COOKIE, verifyAdminToken } from "@/lib/auth"
import { getPublicDatabaseErrorMessage } from "@/lib/db-error"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

const ACTION_DB_ERROR_PATH = "/admin/jobs?err=save"

async function requireAdmin() {
  const cookieStore = await cookies()
  const token = cookieStore.get(ADMIN_AUTH_COOKIE)?.value
  if (!token) {
    redirect("/admin/login")
  }
  const admin = await verifyAdminToken(token)
  if (!admin) {
    redirect("/admin/login")
  }
  return admin
}

async function createJob(formData: FormData) {
  "use server"
  await requireAdmin()

  try {
    await prisma.job.create({
      data: {
        title: String(formData.get("title") ?? ""),
        company: String(formData.get("company") ?? ""),
        location: String(formData.get("location") ?? ""),
        salary: String(formData.get("salary") ?? ""),
        type: String(formData.get("type") ?? "Full-time"),
        description: String(formData.get("description") ?? ""),
        published: false,
      },
    })
  } catch {
    redirect(ACTION_DB_ERROR_PATH)
  }

  revalidatePath("/admin/jobs")
  revalidatePath("/job-seekers")
}

async function updateJob(formData: FormData) {
  "use server"
  await requireAdmin()

  const id = String(formData.get("id") ?? "")
  if (!id) return

  try {
    await prisma.job.update({
      where: { id },
      data: {
        title: String(formData.get("title") ?? ""),
        company: String(formData.get("company") ?? ""),
        location: String(formData.get("location") ?? ""),
        salary: String(formData.get("salary") ?? ""),
        type: String(formData.get("type") ?? "Full-time"),
        description: String(formData.get("description") ?? ""),
      },
    })
  } catch {
    redirect(ACTION_DB_ERROR_PATH)
  }

  revalidatePath("/admin/jobs")
  revalidatePath("/job-seekers")
}

async function deleteJob(formData: FormData) {
  "use server"
  await requireAdmin()

  const id = String(formData.get("id") ?? "")
  if (!id) return

  try {
    await prisma.job.delete({ where: { id } })
  } catch {
    redirect(ACTION_DB_ERROR_PATH)
  }

  revalidatePath("/admin/jobs")
  revalidatePath("/job-seekers")
}

async function togglePublish(formData: FormData) {
  "use server"
  await requireAdmin()

  const id = String(formData.get("id") ?? "")
  if (!id) return

  try {
    const job = await prisma.job.findUnique({ where: { id }, select: { published: true } })
    if (!job) return

    await prisma.job.update({
      where: { id },
      data: { published: !job.published },
    })
  } catch {
    redirect(ACTION_DB_ERROR_PATH)
  }

  revalidatePath("/admin/jobs")
  revalidatePath("/job-seekers")
}

async function logout() {
  "use server"
  const cookieStore = await cookies()
  cookieStore.delete(ADMIN_AUTH_COOKIE)
  redirect("/admin/login")
}

type PageProps = {
  searchParams: Promise<{ err?: string }>
}

export default async function AdminJobsPage({ searchParams }: PageProps) {
  await requireAdmin()

  const params = await searchParams
  const saveFailed = params.err === "save"

  let jobs: Awaited<ReturnType<typeof prisma.job.findMany>> = []
  let loadError: string | null = null

  try {
    jobs = await prisma.job.findMany({
      orderBy: { createdAt: "desc" },
      include: { _count: { select: { applications: true } } },
    })
  } catch (error) {
    loadError = getPublicDatabaseErrorMessage(error)
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-28 pb-10 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Admin Panel - <span className="text-primary">Job Management</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-6 text-balance">
              Manage job postings and control what&apos;s visible to job seekers
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <a href="/admin/applications">View Applications</a>
              </Button>
              <form action={logout}>
                <Button variant="destructive" type="submit">
                  Logout
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-4">
            {loadError ? (
              <Alert variant="destructive">
                <AlertTitle>Database unavailable</AlertTitle>
                <AlertDescription>{loadError}</AlertDescription>
              </Alert>
            ) : null}

            {saveFailed && !loadError ? (
              <Alert variant="destructive">
                <AlertTitle>Could not save</AlertTitle>
                <AlertDescription>
                  The last action failed because the database could not be reached. Check DATABASE_URL on Vercel and redeploy.
                </AlertDescription>
              </Alert>
            ) : null}

            <h2 className="text-2xl font-bold mb-4">Jobs ({loadError ? "—" : jobs.length})</h2>

            <Card className={`mb-8 ${loadError ? "opacity-60 pointer-events-none" : ""}`}>
              <CardHeader>
                <CardTitle>Add New Job</CardTitle>
                <CardDescription>New jobs are saved as Draft by default.</CardDescription>
              </CardHeader>
              <CardContent>
                <form action={createJob} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Job Title *</Label>
                      <Input id="title" name="title" required disabled={!!loadError} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input id="company" name="company" required disabled={!!loadError} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location *</Label>
                      <Input id="location" name="location" required disabled={!!loadError} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="salary">Salary *</Label>
                      <Input id="salary" name="salary" required disabled={!!loadError} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Type *</Label>
                    <Input id="type" name="type" defaultValue="Full-time" required disabled={!!loadError} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea id="description" name="description" rows={4} required disabled={!!loadError} />
                  </div>
                  <Button type="submit" disabled={!!loadError}>
                    Create Job
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {loadError
                ? null
                : jobs.map((job) => (
                    <Card className="hover:shadow-lg transition-shadow" key={job.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <CardTitle className="text-lg">{job.title}</CardTitle>
                              <span
                                className={`text-xs px-2 py-1 rounded-full ${
                                  job.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {job.published ? "Published" : "Draft"}
                              </span>
                            </div>
                            <CardDescription>
                              {job.company} · {job.location} · {job.type}
                            </CardDescription>
                          </div>
                          <div className="flex gap-2">
                            <form action={togglePublish}>
                              <input type="hidden" name="id" value={job.id} />
                              <Button size="sm" variant="outline" type="submit">
                                {job.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </Button>
                            </form>
                            <form action={deleteJob}>
                              <input type="hidden" name="id" value={job.id} />
                              <Button size="sm" variant="destructive" type="submit">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </form>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground">{job.description}</p>
                        <p className="text-xs text-muted-foreground">Applications: {job._count.applications}</p>
                        <form action={updateJob} className="grid sm:grid-cols-2 gap-3">
                          <input type="hidden" name="id" value={job.id} />
                          <Input name="title" defaultValue={job.title} required />
                          <Input name="company" defaultValue={job.company} required />
                          <Input name="location" defaultValue={job.location} required />
                          <Input name="salary" defaultValue={job.salary} required />
                          <Input name="type" defaultValue={job.type} required />
                          <div className="sm:col-span-2">
                            <Textarea name="description" defaultValue={job.description} rows={3} required />
                          </div>
                          <div className="sm:col-span-2">
                            <Button type="submit" variant="outline">
                              Update Job
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                  ))}

              {!loadError && jobs.length === 0 ? (
                <Card>
                  <CardContent className="text-center py-12">
                    <p className="text-muted-foreground">No jobs posted yet. Click &quot;Add New Job&quot; to create one.</p>
                  </CardContent>
                </Card>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
