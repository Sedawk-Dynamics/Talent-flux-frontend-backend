import { prisma } from "@/lib/prisma"
import { motion } from "framer-motion"
import {
  Rocket,
  Users,
  TrendingUp,
  Heart,
  Award,
  Briefcase,
  GraduationCap,
  IndianRupee ,
  Calendar,
  MapPin,
  Clock,
  Send,
  Building2,
} from "lucide-react"

export const dynamic = "force-dynamic";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default async function JoinUsPage() {
  const jobs = await prisma.job.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  })

  const whyJoinUs = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Continuous learning opportunities and clear career progression paths.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with passionate professionals in a supportive environment.",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working policies for a healthy life balance.",
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Performance-based incentives and recognition programs.",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Training, certifications, and mentorship programs.",
    },
    {
      icon: IndianRupee ,
      title: "Competitive Compensation",
      description: "Industry-leading salary and benefits.",
    },
  ]

  const values = [
    { title: "Excellence", description: "We strive for the highest standards." },
    { title: "Integrity", description: "We act with honesty and transparency." },
    { title: "Innovation", description: "We continuously improve and evolve." },
    { title: "Collaboration", description: "We grow together as a team." },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Your <span className="text-primary">Dream Career</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Join our team and grow with TalentFlux.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="#openings">View Openings</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#apply">Apply Now</Link>
              </Button>
            </div>
          </div>
          <Image
            src="/modern-office-collaboration.png"
            alt="Join Us"
            width={600}
            height={400}
            className="rounded-2xl"
          />
        </div>
      </section>

      {/* Why Join Us */}
      <section className="pt-16 pb-6">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">
              Why <span className="text-primary">Join Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyJoinUs.map((item, i) => {
              const Icon = item.icon
              return (
                <Card key={i}>
                  <CardHeader>
                    <Icon className="text-primary mb-2" />
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pt-6 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center mb-8">
          <h2 className="text-3xl font-bold">
            Our <span className="text-primary">Values</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <Card key={i} className="text-center">
              <CardHeader>
                <CardTitle className="text-primary">{v.title}</CardTitle>
                <CardDescription>{v.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Openings (REAL DATA) */}
      <section id="openings" className="pt-10 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">
              Current <span className="text-primary">Openings</span>
            </h2>
            <p className="text-muted-foreground">
              Showing {jobs.length} jobs
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {jobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <div className="text-sm text-muted-foreground flex gap-4 mt-2 flex-wrap">
                        <span className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" /> {job.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" /> {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <IndianRupee  className="h-4 w-4" /> {job.salary}
                        </span>
                      </div>
                    </div>

                    <Button asChild>
                      <Link href={`/job-seekers/apply/${job.id}`}>
                        Apply
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}

            {jobs.length === 0 && (
              <p className="text-center text-muted-foreground">
                No jobs available right now.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <Rocket className="mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">
          Don’t see the right role?
        </h2>
        <Button asChild variant="secondary">
          <Link href="/submit-cv">Submit CV</Link>
        </Button>
      </section>

      <Footer />
    </main>
  )
}