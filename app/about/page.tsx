"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Target, Users, Eye, Heart, Lightbulb } from "lucide-react"
import Image from "next/image"
import { ContactForm } from "@/components/contact-form"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We uphold the highest standards of honesty and ethical behavior in all our interactions.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering exceptional results consistently.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace innovation and continuously seek better ways to serve our clients and candidates.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of collaboration and building strong partnerships.",
    },
  ]

  const stats = [
    { value: "500+", label: "Successful Placements" },
    { value: "25+", label: "Corporate Clients" },
    { value: "20+", label: "Management Team Experience" },
    { value: "95%", label: "Client Satisfaction" },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
                  About <span className="text-primary">TalentFlux</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
                  Crafting Careers, Fueling Dreams - Your strategic partner in talent acquisition and career
                  development.
                </p>
                <Button size="lg" asChild>
                  <a href="#contact">Work With Us</a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/diverse-business-professionals-in-meeting-discussi.jpg"
                  alt="TalentFlux Team"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl"
              >
                <Eye className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To bridge the gap between exceptional talent and outstanding opportunities, fostering growth and
                  success for both individuals and organizations across diverse industries.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-secondary/10 to-primary/10 p-8 rounded-2xl"
              >
                <Target className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the most trusted partner in talent solutions, recognized for transforming careers and businesses
                  through innovative recruitment strategies and comprehensive training programs.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-6"
              >
                Our Core <span className="text-primary">Values</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground text-pretty"
              >
                The principles that guide everything we do
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-background p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  )
}
