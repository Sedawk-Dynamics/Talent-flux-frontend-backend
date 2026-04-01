"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  Rocket,
  Users,
  TrendingUp,
  Heart,
  Award,
  Briefcase,
  GraduationCap,
  DollarSign,
  Calendar,
  MapPin,
  Clock,
  Send,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function JoinUsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: "",
    coverLetter: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  const whyJoinUs = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Continuous learning opportunities and clear career progression paths to help you reach your potential.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description:
        "Work with passionate professionals in an environment that values teamwork, innovation, and mutual respect.",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description:
        "Flexible working arrangements and supportive policies that help you maintain a healthy work-life balance.",
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Performance-based incentives, awards, and recognition programs that celebrate your contributions.",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description:
        "Access to training programs, workshops, certifications, and mentorship to continuously upgrade your skills.",
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description:
        "Industry-leading salaries, comprehensive benefits, and performance bonuses to reward your excellence.",
    },
  ]

  const openPositions = [
    {
      title: "Senior Recruitment Consultant",
      department: "Recruitment",
      location: "Pune, India",
      type: "Full-time",
      experience: "5+ years",
    },
    {
      title: "Technical Trainer",
      department: "Training",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "3-5 years",
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "4-6 years",
    },
    {
      title: "HR Operations Executive",
      department: "Human Resources",
      location: "Pune, India",
      type: "Full-time",
      experience: "2-4 years",
    },
    {
      title: "Career Counselor",
      department: "Consulting",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
    },
    {
      title: "Soft Skills Trainer",
      department: "Training",
      location: "Pune, India",
      type: "Contract",
      experience: "2-3 years",
    },
  ]

  const values = [
    { title: "Excellence", description: "We strive for the highest standards in everything we do" },
    { title: "Integrity", description: "We conduct business with honesty, transparency, and ethics" },
    { title: "Innovation", description: "We embrace change and continuously seek better solutions" },
    { title: "Collaboration", description: "We believe in the power of teamwork and collective success" },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Build Your <span className="text-primary">Dream Career</span> with TalentFlux
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
                Join a dynamic team of passionate professionals dedicated to transforming careers and shaping the future
                of work. Your next opportunity starts here.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="#openings">View Openings</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#apply">Apply Now</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Image
                src="/modern-office-collaboration.png"
                alt="Join Our Team"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section ref={ref} className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Why <span className="text-primary">Join TalentFlux</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Experience a workplace where your talents are valued and your career aspirations become reality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyJoinUs.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance">The principles that guide everything we do</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{value.title}</CardTitle>
                    <CardDescription>{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Current <span className="text-primary">Openings</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Explore exciting opportunities to join our team
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {position.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {position.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {position.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {position.experience}
                          </span>
                        </div>
                      </div>
                      <Button asChild>
                        <Link href="#apply">Apply</Link>
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Apply to <span className="text-primary">Join Us</span>
              </h2>
              <p className="text-lg text-muted-foreground text-balance">
                Take the first step towards an exciting career with TalentFlux
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience *</Label>
                      <Input
                        id="experience"
                        placeholder="5"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Position Applied For *</Label>
                    <Input
                      id="position"
                      placeholder="Senior Recruitment Consultant"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume/CV Link *</Label>
                    <Input
                      id="resume"
                      type="url"
                      placeholder="https://drive.google.com/..."
                      value={formData.resume}
                      onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                      required
                    />
                    <p className="text-xs text-muted-foreground">Please provide a Google Drive or Dropbox link</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      placeholder="Tell us why you'd be a great fit for TalentFlux..."
                      rows={6}
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Rocket className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Don't See the Right Role? We'd Still Love to Hear From You!
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-balance opacity-90">
            Send us your resume and we'll reach out when a suitable position opens up
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="#apply">Share Your Profile</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
