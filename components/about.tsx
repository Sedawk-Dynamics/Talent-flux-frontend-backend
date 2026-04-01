"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Eye, Heart } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower organizations and professionals by delivering exceptional recruitment solutions, leadership hiring expertise, and personalized career mentoring.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the most trusted global partner in talent acquisition and career development — recognized for shaping future-ready leaders.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Integrity, Excellence, Innovation, Collaboration, Empowerment, Diversity & Inclusion guide everything we do.",
    },
  ]

  return (
    <section id="about" ref={ref} className="pt-16 md:pt-24 pb-6 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              The Leading Recruitment Partner of India
            </h2>
            <p className="text-lg text-muted-foreground text-balance leading-relaxed mb-6">
              TalentFlux is a premier recruitment and talent advisory firm founded by seasoned industry leaders with
              over two decades of experience in the hiring ecosystem. We redefine how organizations discover, engage,
              and retain top-tier talent.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our comprehensive approach combines cutting-edge technology with deep industry insights to deliver
              recruitment solutions that drive business success and career growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <img
                src="/diverse-business-professionals-in-meeting-discussi.jpg"
                alt="TalentFlux team collaboration"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                <div className="bg-card rounded-2xl p-6 border border-border h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
