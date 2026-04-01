"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, CheckCircle2, Star, Award, Users, Target, Zap, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function ResumeWritingPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const packages = [
    {
      name: "Essential",
      price: "₹999",
      description: "Perfect for entry-level professionals",
      features: [
        "Professional resume formatting",
        "ATS-optimized content",
        "1 round of revisions",
        "2-day delivery",
        "LinkedIn profile tips",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "₹2,999",
      description: "Ideal for mid-level professionals",
      features: [
        "Everything in Essential",
        "Custom cover letter",
        "2 rounds of revisions",
        "1-day delivery",
        "LinkedIn profile optimization",
        "Career consultation (30 min)",
      ],
      popular: true,
    },
    {
      name: "Executive",
      price: "₹4,999",
      description: "For senior leaders and executives",
      features: [
        "Everything in Professional",
        "Executive bio writing",
        "Unlimited revisions",
        "Same-day delivery",
        "Personal branding strategy",
        "Career consultation (60 min)",
        "Interview preparation guide",
      ],
      popular: false,
    },
  ]

  const benefits = [
    {
      icon: Target,
      title: "ATS-Optimized",
      description: "Resumes designed to pass Applicant Tracking Systems and reach recruiters",
    },
    {
      icon: Award,
      title: "Industry Experts",
      description: "Written by certified resume writers with 10+ years of experience",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Get your professional resume delivered within 1-3 days",
    },
    {
      icon: Shield,
      title: "100% Satisfaction",
      description: "Unlimited revisions until you're completely satisfied",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Share Your Details",
      description: "Fill out our questionnaire or upload your current resume",
      icon: FileText,
    },
    {
      step: "2",
      title: "Expert Review",
      description: "Our certified writers analyze your background and career goals",
      icon: Users,
    },
    {
      step: "3",
      title: "Draft Creation",
      description: "Receive your professionally crafted resume within 1-3 days",
      icon: Star,
    },
    {
      step: "4",
      title: "Revisions & Final",
      description: "Request changes until you're 100% satisfied with the result",
      icon: CheckCircle2,
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Professional <span className="text-primary">Resume Writing</span> Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
                Stand out from the competition with a professionally crafted resume that highlights your unique value
                and gets you interviews.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="#packages">View Packages</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Consult an Expert</Link>
                </Button>
              </div>
              <div className="flex items-center gap-8 mt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">10,000+</div>
                  <div className="text-sm text-muted-foreground">Resumes Written</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Client Rating</div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Image
                src="/professional-business-team-diverse-professionals-i.jpg"
                alt="Resume Writing Services"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Why Choose Our <span className="text-primary">Resume Services</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                      <CardDescription>{benefit.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" ref={ref} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Choose Your <span className="text-primary">Package</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Tailored solutions for every career stage and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full relative ${pkg.popular ? "border-primary border-2 shadow-xl" : ""}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                    <CardDescription className="mb-4">{pkg.description}</CardDescription>
                    <div className="text-4xl font-bold text-primary">{pkg.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full" variant={pkg.popular ? "default" : "outline"}>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Simple, transparent process from start to finish
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Get Your Dream Job?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-balance opacity-90">
            Let our expert writers create a resume that gets you noticed by top employers
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Order Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/submit-cv">Upload Your Resume</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
