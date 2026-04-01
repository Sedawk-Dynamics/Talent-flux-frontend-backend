import { notFound, redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma"

async function submitApplication(formData: FormData) {
  "use server"

  const jobId = String(formData.get("jobId") ?? "")
  const name = String(formData.get("name") ?? "")
  const email = String(formData.get("email") ?? "")
  const phone = String(formData.get("phone") ?? "")
  const resumeLink = String(formData.get("resumeLink") ?? "")
  const coverLetter = String(formData.get("coverLetter") ?? "")

  if (!jobId || !name || !email || !phone) {
    return
  }

  await prisma.application.create({
    data: {
      jobId,
      name,
      email,
      phone,
      resumeLink: resumeLink || null,
      coverLetter: coverLetter || null,
    },
  })

  revalidatePath("/admin/applications")
  redirect("/job-seekers?applied=1")
}

export default async function ApplyJobPage({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params

  const job = await prisma.job.findFirst({
    where: {
      id: jobId,
      published: true,
    },
  })

  if (!job) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-28 pb-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle>Apply for {job.title}</CardTitle>
              <CardDescription>
                {job.company} · {job.location} · {job.type}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action={submitApplication} className="space-y-4">
                <input type="hidden" name="jobId" value={job.id} />
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" name="name" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" name="phone" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resumeLink">Resume Link</Label>
                  <Input id="resumeLink" name="resumeLink" placeholder="Drive/Portfolio URL" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <Textarea id="coverLetter" name="coverLetter" rows={5} />
                </div>
                <div className="flex gap-3">
                  <Button type="submit">Submit Application</Button>
                  <Button asChild variant="outline">
                    <a href="/job-seekers">Back to Jobs</a>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  )
}
