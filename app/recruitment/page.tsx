"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Users,
  Target,
  Search,
  CheckCircle2,
  TrendingUp,
  Award,
  Clock,
  Shield,
  Briefcase,
  UserCheck,
  Crown,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function RecruitmentPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const recruitmentServices = [
    {
      icon: Users,
      title: "Permanent Recruitment",
      description:
        "End-to-end recruitment solutions for permanent positions. We handle everything from job profiling to candidate onboarding.",
      features: ["Executive Search", "Mid-Level Hiring", "Entry-Level Recruitment", "Bulk Hiring"],
    },
    {
      icon: Clock,
      title: "Contract Hiring",
      description:
        "Flexible staffing solutions for project-based and temporary requirements. Quick deployment of skilled professionals.",
      features: ["Contract-to-Hire", "Temporary Staffing", "Project-Based Hiring", "Seasonal Workforce"],
    },
    {
      icon: Target,
      title: "RPO Services",
      description:
        "Complete outsourcing of your recruitment process. We become an extension of your HR team for scalable hiring.",
      features: ["Full RPO", "Project RPO", "Hybrid RPO", "On-Demand RPO"],
    },
    {
      icon: Crown,
      title: "Leadership Hiring",
      description:
        "Executive search and C-suite recruitment. Finding visionary leaders who drive organizational transformation.",
      features: ["C-Level Search", "Board Positions", "VP & Director Roles", "Succession Planning"],
    },
  ]

  const process = [
    {
      step: "1",
      title: "Understanding Requirements",
      description: "Deep dive into your organizational culture, role requirements, and success criteria.",
      icon: Search,
    },
    {
      step: "2",
      title: "Strategic Sourcing",
      description: "Multi-channel talent acquisition using advanced tools and extensive industry networks.",
      icon: Target,
    },
    {
      step: "3",
      title: "Screening & Assessment",
      description: "Rigorous evaluation including technical tests, behavioral assessments, and cultural fit analysis.",
      icon: UserCheck,
    },
    {
      step: "4",
      title: "Interview Coordination",
      description: "Seamless scheduling and coordination between candidates and hiring managers.",
      icon: CheckCircle2,
    },
    {
      step: "5",
      title: "Offer & Onboarding",
      description: "Negotiation support and smooth transition assistance for successful placements.",
      icon: Briefcase,
    },
  ]

  const whyChooseUs = [
    { icon: Shield, title: "Quality Assurance", description: "Guaranteed replacement within 90 days" },
    { icon: Clock, title: "Fast Turnaround", description: "Average time-to-fill: 15-20 days" },
    { icon: TrendingUp, title: "High Success Rate", description: "92% offer acceptance rate" },
    { icon: Award, title: "Industry Expertise", description: "15+ years of recruitment excellence" },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-14 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
                Find the <span className="text-primary">Right Talent</span>, Every Time
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-6 text-balance">
                Strategic recruitment solutions that connect exceptional talent with forward-thinking organizations.
                From permanent placements to executive search, we deliver results.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="sm">
                  <Link href="/submit-job">Post a Job</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="#process">Our Process</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Image
                src="/modern-office-collaboration.png"
                alt="Recruitment Services"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={ref} className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-3 text-balance">
              Recruitment <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-base text-muted-foreground text-balance">
              Comprehensive hiring services tailored to your organizational needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {recruitmentServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-14 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 text-balance">
              Our <span className="text-primary">Hiring Process</span>
            </h2>
            <p className="text-base text-muted-foreground text-balance">
              A systematic approach to finding and securing top talent
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-5">
            {process.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="shrink-0 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 text-balance">
              Why <span className="text-primary">Choose Us</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Build Your Dream Team?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-balance opacity-90">
            Let us help you find the perfect candidates who will drive your organization forward
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/submit-job">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
