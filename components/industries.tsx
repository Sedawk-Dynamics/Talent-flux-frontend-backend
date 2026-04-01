"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Industries() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const industries = [
    "Information Technology",
    "Healthcare & Pharma",
    "BFSI & Financial Services",
    "Data Analytics",
    "Manufacturing",
    "Energy & Power",
    "Retail & E-commerce",
    "EdTech & FinTech",
    "InsureTech",
    "KPO & ITES",
  ]

  return (
    <section id="industries" ref={ref} className="py-14 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-balance">
            Industry <span className="text-secondary">Expertise</span>
          </h2>
          <p className="text-base text-muted-foreground text-balance">
            Deep domain knowledge across multiple sectors for specialized recruitment solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-card rounded-xl p-4 border border-border text-center hover:shadow-md transition-shadow">
                <p className="font-medium text-xs">{industry}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
