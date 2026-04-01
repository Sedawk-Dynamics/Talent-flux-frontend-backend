"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, UserPlus, GraduationCap, Briefcase, TrendingUp, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Users,
      title: "Permanent Recruitment",
      description:
        "Strategic sourcing and advanced screening for high-quality candidates aligned with your organizational culture.",
      color: "primary",
    },
    {
      icon: UserPlus,
      title: "Contract & RPO",
      description:
        "Flexible hiring solutions including contract-to-hire, contractual hiring, and complete recruitment process outsourcing.",
      color: "secondary",
    },
    {
      icon: GraduationCap,
      title: "Training Services",
      description:
        "Soft-skill development, leadership training, technical training, and communication excellence programs.",
      color: "accent",
    },
    {
      icon: Briefcase,
      title: "Early Career Programs",
      description:
        "Campus to corporate readiness, interview preparation, resume building, and professional development.",
      color: "primary",
    },
    {
      icon: TrendingUp,
      title: "Career Mentoring",
      description:
        "Personalized coaching to help professionals unlock their potential, navigate transitions, and lead with confidence.",
      color: "secondary",
    },
    {
      icon: Award,
      title: "Leadership Hiring",
      description:
        "Executive search and board-level recruitment for senior leadership positions across diverse industries.",
      color: "accent",
    },
  ]

  return (
    <section id="services" ref={ref} className="pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-base text-muted-foreground text-balance">
            Comprehensive recruitment and talent development solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
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
