import { MapPin, Briefcase, DollarSign, Building2, FileText, TrendingUp, Award, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { prisma } from "@/lib/prisma"

export const dynamic = "force-dynamic"

export default async function JobSeekersPage() {
  const jobs = await prisma.job.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  })

  const services = [
    {
      icon: FileText,
      title: "Resume Writing",
      description: "Professional resume crafting services to make you stand out",
      link: "/job-seekers/resume-writing",
    },
    {
      icon: TrendingUp,
      title: "Career Counseling",
      description: "Expert guidance to accelerate your career growth",
      link: "/contact",
    },
    {
      icon: Award,
      title: "Skill Development",
      description: "Training programs to enhance your professional skills",
      link: "/training",
    },
    {
      icon: Users,
      title: "Interview Preparation",
      description: "Mock interviews and tips to ace your next opportunity",
      link: "/contact",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Find Your <span className="text-primary">Dream Job</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-6 text-balance">
              Discover top opportunities from companies hiring through TalentFlux.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild variant="outline" size="sm">
              <Link href="/submit-cv">
                <FileText className="h-4 w-4 mr-2" />
                Submit CV
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/job-seekers/resume-writing">
                <Award className="h-4 w-4 mr-2" />
                Resume Writing
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/training">
                <TrendingUp className="h-4 w-4 mr-2" />
                Training Programs
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-1">
                Latest <span className="text-primary">Opportunities</span>
              </h2>
              <p className="text-sm text-muted-foreground">Showing {jobs.length} published jobs</p>
            </div>
          </div>

          <div className="grid gap-4">
            {jobs.map((job) => (
              <div key={job.id}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{job.title}</CardTitle>
                        <CardDescription className="text-sm flex items-center gap-2 mb-2">
                          <Building2 className="h-4 w-4" />
                          {job.company}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {job.salary}
                          </span>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">{new Date(job.createdAt).toLocaleDateString()}</div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <p className="text-muted-foreground mb-3 text-sm">{job.description}</p>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button className="flex-1 text-sm" size="sm" asChild>
                      <Link href={`/job-seekers/apply/${job.id}`}>Apply Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
            {jobs.length === 0 ? (
              <Card>
                <CardContent className="text-center py-10 text-muted-foreground">
                  No published jobs right now. Please check back soon.
                </CardContent>
              </Card>
            ) : null}
          </div>
        </div>
      </section>

      {/* Career Services */}
      <section className="py-14 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 text-balance">
              Career <span className="text-primary">Support Services</span>
            </h2>
            <p className="text-base text-muted-foreground text-balance">
              Beyond job search - comprehensive support for your career journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title}>
                  <Card className="h-full hover:shadow-lg transition-shadow group">
                    <CardHeader className="text-center">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button asChild variant="ghost" className="w-full">
                        <Link href={service.link}>Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-balance">Ready to Take the Next Step?</h2>
          <p className="text-base mb-6 max-w-2xl mx-auto text-balance opacity-90">
            Upload your resume and let us match you with the perfect opportunities
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="sm" variant="secondary">
              <Link href="/submit-cv">Submit Your CV</Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/contact">Talk to Career Counselor</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
