"use client"

import { motion } from "framer-motion"
import { GraduationCap, CheckCircle2, Users, Target, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SubmitTrainingPage() {
  const benefits = [
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Industry professionals with real-world experience",
    },
    {
      icon: Target,
      title: "Customized Programs",
      description: "Training tailored to your organization's specific needs",
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      description: "Track progress with our comprehensive assessment tools",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Request <span className="text-primary">Training Program</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
                Upskill your team with customized training programs designed to meet your organization's unique needs
                and goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                      <CardDescription>{benefit.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Training Requirements</CardTitle>
                  <CardDescription>Tell us about your training needs and we'll create a custom program</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input id="companyName" placeholder="Your Company Name" required />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="contactName">Contact Person *</Label>
                        <Input id="contactName" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="designation">Designation</Label>
                        <Input id="designation" placeholder="Training Manager" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="training@company.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="+91-9876543210" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="it">Information Technology</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="pharma">Pharmaceutical</SelectItem>
                          <SelectItem value="bfsi">BFSI</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="participants">Number of Participants *</Label>
                        <Input id="participants" type="number" placeholder="e.g., 20" min="1" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="duration">Preferred Duration</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-day">1 Day</SelectItem>
                            <SelectItem value="2-3-days">2-3 Days</SelectItem>
                            <SelectItem value="1-week">1 Week</SelectItem>
                            <SelectItem value="2-weeks">2 Weeks</SelectItem>
                            <SelectItem value="1-month">1 Month</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="trainingType">Training Topic/Area *</Label>
                      <Input
                        id="trainingType"
                        placeholder="e.g., Leadership Development, Technical Skills..."
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="objectives">Training Objectives *</Label>
                      <Textarea
                        id="objectives"
                        placeholder="What specific skills or knowledge should participants gain from this training?"
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="audience">Target Audience *</Label>
                      <Textarea
                        id="audience"
                        placeholder="Describe the participants (e.g., mid-level managers, entry-level developers, sales team...)"
                        rows={3}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deliveryMode">Preferred Delivery Mode *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select delivery mode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="in-person">In-Person</SelectItem>
                          <SelectItem value="virtual">Virtual/Online</SelectItem>
                          <SelectItem value="hybrid">Hybrid</SelectItem>
                          <SelectItem value="no-preference">No Preference</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Training Location (if in-person)</Label>
                      <Input id="location" placeholder="City or venue details" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline">Preferred Timeline *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="When would you like to schedule the training?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Within 2 weeks</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="2-3-months">2-3 months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range (Optional)</Label>
                      <Input id="budget" placeholder="e.g., ₹50,000 - ₹1,00,000" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additional">Additional Requirements</Label>
                      <Textarea
                        id="additional"
                        placeholder="Any specific requirements, preferences, or challenges you'd like us to address..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <GraduationCap className="h-5 w-5 mr-2" />
                      Submit Training Request
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting, you agree to our Privacy Policy and Terms of Service
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-lg mb-2">What Happens Next?</CardTitle>
                      <CardDescription className="space-y-2">
                        <p>1. Our training consultants will review your requirements within 24 hours</p>
                        <p>2. We'll design a customized training program tailored to your needs</p>
                        <p>3. You'll receive a detailed proposal with curriculum and pricing</p>
                        <p>4. Once approved, we'll schedule and deliver the training program</p>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
