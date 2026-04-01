"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2 } from "lucide-react"
  
export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const reasons = [
    {
      title: "Proven Expertise",
      description: "Decades of success in leadership hiring and specialized recruitment across diverse industries.",
    },
    {
      title: "Personalized Approach",
      description: "Tailored solutions that align perfectly with your company culture and career aspirations.",
    },
    {
      title: "Career Mentoring & Coaching",
      description: "Empowering individuals to grow, lead, and thrive in their professional journey.",
    },
    {
      title: "Industry Diversity",
      description: "Experience across multiple sectors ensures we deliver the right talent for every role.",
    },
    {
      title: "Trusted Partner",
      description: "We prioritize integrity, transparency, and long-term success in every engagement.",
    },
    {
      title: "Future-Ready Teams",
      description:
        "We don't just fill positions — we unlock potential, drive innovation, and shape the future of work.",
    },
  ]

  return (
    <section id="why-us" ref={ref} className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-balance">
            Why Choose <span className="text-primary">TalentFlux</span>?
          </h2>
          <p className="text-base text-muted-foreground text-balance">
            We go beyond recruitment — we build lasting partnerships
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex gap-3 p-4 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow h-full">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-1" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-sm">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-xs">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
