"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CallToAction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={ref} className="py-14 md:py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance">
            Ready to Transform Your <span className="text-primary">Hiring</span> or{" "}
            <span className="text-secondary">Career</span>?
          </h2>
          <p className="text-base text-muted-foreground mb-6 text-balance leading-relaxed max-w-2xl mx-auto">
            Let's shape the future of work, together. Connect with our team to discuss your recruitment needs or career
            aspirations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <Button size="sm" className="group">
              <a href="tel:+917703881471" className="flex items-center">
                Call Us Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="sm" variant="outline">
              <a href="mailto:inquiry@talentflux.co.in">Send an Email</a>
            </Button>
          </div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-4 mt-8"
          >
            <div className="bg-card rounded-xl p-4 border border-border">
              <h3 className="font-bold mb-1 text-sm">Phone</h3>
              <p className="text-muted-foreground text-sm">+91-7703881471</p>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border">
              <h3 className="font-bold mb-1 text-sm">Email</h3>
              <p className="text-muted-foreground text-sm">inquiry@talentflux.co.in</p>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border">
              <h3 className="font-bold mb-1 text-sm">Location</h3>
              <p className="text-muted-foreground text-sm">C2-101, 1st Floor, Supertech Ecovillage 2, Greater Noida West, Noida, Gautam Buddha Nagar-201306</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
