"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, GraduationCap, Rocket, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FeaturedSections() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const sections = [
    {
      icon: Users,
      title: "Recruitment",
      description:
        "Strategic talent acquisition solutions from permanent placements to executive search. Find the perfect candidates who align with your organizational culture and drive business success.",
      features: ["Permanent Recruitment", "Contract & RPO", "Leadership Hiring", "Fast Turnaround"],
      href: "/recruitment",
      gradient: "from-primary to-primary/80",
    },
    {
      icon: GraduationCap,
      title: "Training",
      description:
        "Comprehensive skill development programs designed to elevate your workforce. From soft skills to technical expertise, we build capabilities that create competitive advantage.",
      features: ["Soft Skills Development", "Leadership Training", "Technical Programs", "Career Transition"],
      href: "/training",
      gradient: "from-secondary to-secondary/80",
    },
    {
      icon: Rocket,
      title: "Join Us",
      description:
        "Become part of a dynamic team that's transforming careers across industries. Explore exciting opportunities with competitive benefits, growth paths, and a collaborative culture.",
      features: ["Career Growth", "Learning & Development", "Work-Life Balance", "Competitive Rewards"],
      href: "/join-us",
      gradient: "from-accent to-accent/80",
    },
  ]

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
            Explore Our <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-base text-muted-foreground text-balance">
            Discover how we can help you achieve your career and business goals
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader>
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl mb-3">{section.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {section.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full group" variant="default">
                      <Link href={section.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
