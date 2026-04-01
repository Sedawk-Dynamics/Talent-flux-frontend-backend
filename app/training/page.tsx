"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Users,
  Lightbulb,
  MessageSquare,
  Target,
  TrendingUp,
  BookOpen,
  Award,
  Briefcase,
  Presentation,
  Code,
  Brain,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function TrainingPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const trainingPrograms = [
    {
      icon: MessageSquare,
      title: "Soft Skills Development",
      description:
        "Build essential interpersonal skills for professional success including communication, teamwork, and emotional intelligence.",
      modules: ["Communication Excellence", "Team Collaboration", "Time Management", "Problem Solving"],
      duration: "4-6 weeks",
      level: "All Levels",
    },
    {
      icon: Users,
      title: "Leadership Training",
      description:
        "Comprehensive leadership development programs designed to create effective leaders who inspire and drive results.",
      modules: ["Strategic Thinking", "People Management", "Decision Making", "Change Management"],
      duration: "8-12 weeks",
      level: "Mid to Senior",
    },
    {
      icon: Code,
      title: "Technical Skills",
      description:
        "Industry-relevant technical training across various domains including IT, data analytics, and digital transformation.",
      modules: ["Programming Languages", "Data Analytics", "Cloud Computing", "Project Management"],
      duration: "12-16 weeks",
      level: "Beginner to Advanced",
    },
    {
      icon: Presentation,
      title: "Corporate Communication",
      description:
        "Master the art of professional communication including presentations, business writing, and stakeholder management.",
      modules: ["Business Writing", "Presentation Skills", "Email Etiquette", "Client Communication"],
      duration: "6-8 weeks",
      level: "All Levels",
    },
    {
      icon: Briefcase,
      title: "Interview Preparation",
      description:
        "Comprehensive interview coaching to help candidates present their best selves and secure their dream roles.",
      modules: ["Mock Interviews", "Resume Building", "Body Language", "Salary Negotiation"],
      duration: "2-4 weeks",
      level: "All Levels",
    },
    {
      icon: Brain,
      title: "Career Transition",
      description:
        "Specialized programs for professionals looking to switch careers or move into new domains with confidence.",
      modules: ["Skill Assessment", "Career Mapping", "Personal Branding", "Networking Strategies"],
      duration: "6-10 weeks",
      level: "All Levels",
    },
  ]

  const trainingApproach = [
    {
      icon: Target,
      title: "Customized Curriculum",
      description: "Tailored training programs designed to meet your specific organizational needs and goals.",
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Industry veterans with real-world experience and proven track records in their domains.",
    },
    {
      icon: Lightbulb,
      title: "Interactive Learning",
      description: "Engaging sessions with case studies, role plays, group activities, and hands-on exercises.",
    },
    {
      icon: Award,
      title: "Certification",
      description: "Recognized certificates upon successful completion to boost professional credibility.",
    },
  ]

  const benefits = [
    "Improved employee productivity and performance",
    "Enhanced team collaboration and communication",
    "Reduced skill gaps and faster onboarding",
    "Increased employee engagement and retention",
    "Better leadership pipeline and succession planning",
    "Competitive advantage in the marketplace",
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-secondary/5 via-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-5xl font-bold mb-5 text-balance">
                Elevate Your Team with <span className="text-primary">Expert Training</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-6 text-balance">
                Transform your workforce with comprehensive training programs designed to build skills, boost
                confidence, and accelerate career growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/#contact">Explore Programs</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#programs">View Curriculum</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Image
                src="/professional-business-team-diverse-professionals-i.jpg"
                alt="Training Programs"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="programs" ref={ref} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
              Our Training <span className="text-primary">Programs</span>
            </h2>
            <p className="text-base text-muted-foreground text-balance">
              Comprehensive learning paths for professional development and skill enhancement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPrograms.map((program, index) => {
              const Icon = program.icon
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7 text-secondary" />
                      </div>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <CardDescription className="text-sm">{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold mb-2">Key Modules:</p>
                        <ul className="space-y-1">
                          {program.modules.map((module) => (
                            <li key={module} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {module}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t text-sm">
                        <span className="text-muted-foreground">
                          <BookOpen className="h-4 w-4 inline mr-1" />
                          {program.duration}
                        </span>
                        <span className="text-muted-foreground">{program.level}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
              Our Training <span className="text-primary">Approach</span>
            </h2>
            <p className="text-base text-muted-foreground text-balance">
              A proven methodology that delivers measurable results
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingApproach.map((item, index) => {
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
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary" />
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

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-5 text-balance">
                Transform Your Organization with <span className="text-primary">Strategic Training</span>
              </h2>
              <p className="text-base text-muted-foreground mb-6">
                Investing in your team's development pays dividends in productivity, engagement, and business outcomes.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-secondary" />
                    </div>
                    <span className="text-base">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/diverse-business-professionals-in-meeting-discussi.jpg"
                alt="Training Benefits"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">Ready to Upskill Your Team?</h2>
          <p className="text-base mb-6 max-w-2xl mx-auto text-balance opacity-90">
            Let's design a customized training program that meets your organization's unique needs
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/#contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
