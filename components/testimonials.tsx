"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      quote:
        "TalentFlux understood our complex hiring needs perfectly and delivered exceptional candidates within record time. Their expertise in our industry is unmatched.",
      author: "Priya Sharma",
      role: "VP of Engineering, Tech Innovations Inc.",
    },
    {
      quote:
        "The personalized approach and dedication to understanding our company culture made all the difference. We found leaders who truly fit our vision.",
      author: "Rajesh Kumar",
      role: "CHRO, Global Finance Solutions",
    },
    {
      quote:
        "Their career mentoring program transformed my professional trajectory. The guidance was invaluable in helping me transition to a leadership role.",
      author: "Anita Desai",
      role: "Senior Director, Healthcare Analytics",
    },
  ]

  return (
    <section ref={ref} className="py-14 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-balance">
            What Our <span className="text-secondary">Clients</span> Say
          </h2>
          <p className="text-base text-muted-foreground text-balance">
            Trusted by leading organizations and professionals worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-5">
                  <Quote className="h-6 w-6 text-primary mb-3" />
                  <p className="text-muted-foreground mb-4 leading-relaxed italic text-xs">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
