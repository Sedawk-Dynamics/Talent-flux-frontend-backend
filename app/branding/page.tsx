"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Target, Palette, Megaphone, Users, TrendingUp, Award, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { ContactForm } from "@/components/contact-form"

export default function BrandingPage() {
  const strategies = [
    {
      icon: Target,
      title: "Brand Analysis",
      description: "Deep dive into your current employer brand perception and market positioning",
    },
    {
      icon: Users,
      title: "Talent Research",
      description: "Understanding what drives candidates to apply and join your organization",
    },
    {
      icon: Palette,
      title: "Brand Architecture",
      description: "Crafting a compelling employer value proposition that resonates",
    },
    {
      icon: TrendingUp,
      title: "Market Positioning",
      description: "Differentiating your brand in a competitive talent landscape",
    },
  ]

  const benefits = [
    "Attract top-tier talent organically",
    "Reduce recruitment costs significantly",
    "Improve employee retention rates",
    "Enhance company reputation",
    "Build a strong talent pipeline",
    "Stand out in competitive markets",
  ]

  const services = [
    {
      title: "Employer Brand Strategy",
      description:
        "A great company with a weak employer brand can struggle to fill vacancies with the right talent. Our strategies candidly look at how talent finds your company and why they decide to apply.",
      icon: Target,
    },
    {
      title: "Brand Asset Creation",
      description:
        "Good recruitment marketing brings interest, but if you haven't got an honest, magnetic employer brand, you lose it. We're agile; scaling up to bring in our creative partners with the ability to create all recommended assets.",
      icon: Palette,
    },
    {
      title: "Employer Branding Campaigns",
      description:
        "Executing employer branding tactics is how our strategies prove their worth. Once quality brand assets are in place, we manage campaigns that attract the right talent to your employer brand.",
      icon: Megaphone,
    },
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
                  Employer <span className="text-primary">Branding</span> Excellence
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
                  Transform your company into a talent magnet with strategic employer branding that attracts, engages,
                  and retains top professionals.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="#contact">Start Your Journey</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#services">Learn More</a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/modern-employer-branding-strategy-meeting-with-div.jpg"
                  alt="Employer Branding Strategy"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Employer Branding Matters */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-6"
              >
                Why Employer Branding <span className="text-primary">Matters</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground text-pretty"
              >
                A great company with a weak employer brand can struggle to fill vacancies with the right talent, relying
                heavily on costly recruitment agencies and headhunters.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-6"
              >
                Our Employer Branding <span className="text-primary">Services</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground text-pretty"
              >
                Comprehensive employer branding solutions from strategy to execution
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Strategy Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-6"
              >
                Our Strategic <span className="text-primary">Approach</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground text-pretty"
              >
                A data-driven methodology to build and strengthen your employer brand
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => {
                const Icon = strategy.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{strategy.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{strategy.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Award className="h-16 w-16 mx-auto mb-6 opacity-90" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  Ready to Transform Your Employer Brand?
                </h2>
                <p className="text-xl mb-8 opacity-90 text-pretty">
                  Let's create a magnetic employer brand that attracts the best talent to your organization.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <a href="#contact">Get Started Today</a>
                </Button>
              </motion.div>
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
