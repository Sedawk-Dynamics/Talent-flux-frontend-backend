"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

interface PricingPlan {
  name: string
  price: number
  description: string
  features: string[]
  popular?: boolean
}

export default function PricingPage() {
  const plans: PricingPlan[] = [
    {
      name: "Starter",
      price: 999,
      description: "Perfect for individuals and small projects",
      features: [
        "CV Review & Feedback",
        "Interview Preparation (2 sessions)",
        "Resume Building Guidance",
        "Email Support",
        "Valid for 30 days",
      ],
    },
    {
      name: "Professional",
      price: 2999,
      description: "Ideal for career development",
      features: [
        "Everything in Starter",
        "Career Mentoring (4 sessions)",
        "Mock Interviews (3 rounds)",
        "LinkedIn Profile Optimization",
        "Job Search Assistance",
        "Priority Support",
        "Valid for 90 days",
      ],
      popular: true,
    },
    {
      name: "Executive",
      price: 4999,
      description: "Comprehensive career transformation",
      features: [
        "Everything in Professional",
        "1-on-1 Career Coach",
        "Leadership Development Program",
        "Salary Negotiation Coaching",
        "Personal Branding Strategy",
        "Exclusive Job Referrals",
        "24/7 Priority Support",
        "Valid for 6 months",
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-28 pb-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
                Simple & Transparent <span className="text-primary">Pricing</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-6 text-balance">
                Choose the perfect plan for your career growth. All plans include our core services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={plan.popular ? "md:scale-105" : ""}
                >
                  <Card className={`h-full flex flex-col ${plan.popular ? "border-primary border-2 shadow-xl" : ""}`}>
                    {plan.popular && (
                      <div className="bg-primary text-primary-foreground text-xs font-bold py-2 text-center rounded-t-lg">
                        MOST POPULAR
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-6">
                        <div className="text-4xl font-bold text-primary">
                          ₹{plan.price.toLocaleString()}
                          <span className="text-lg text-muted-foreground ml-2">/package</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <ul className="space-y-3 mb-8 flex-1">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className={`w-full ${plan.popular ? "" : "variant-outline"}`}>
                        <Link href="/contact">Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="bg-muted/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold mb-2">Can I upgrade my plan?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! You can upgrade anytime. We'll calculate the difference and apply it to your next renewal.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">What payment methods do you accept?</h3>
                  <p className="text-sm text-muted-foreground">
                    We accept all major credit cards, debit cards, and digital payment methods like UPI, Google Pay, and
                    Apple Pay.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Is there a refund policy?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, we offer a 7-day money-back guarantee if you're not satisfied with our services.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Can I cancel anytime?</h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! You can cancel your plan at any time without penalties or hidden charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
