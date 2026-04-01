"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, FileText, CheckCircle2, Award, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SubmitCVPage() {
  const [fileName, setFileName] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const benefits = [
    {
      icon: Award,
      title: "Get Noticed",
      description: "Your CV goes directly to our recruitment team",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Access to exclusive job opportunities",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Personalized career guidance from our consultants",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
                Submit Your <span className="text-primary">CV</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-6 text-balance">
                Take the first step towards your dream career. Upload your CV and let us connect you with the right
                opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 bg-muted/30">
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Submit Your Details</CardTitle>
                  <CardDescription>Fill in your information and upload your CV</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm">First Name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm">Email *</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="+91-9876543210" required />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="experience" className="text-sm">Total Experience *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1">0-1 years</SelectItem>
                            <SelectItem value="1-3">1-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5-8">5-8 years</SelectItem>
                            <SelectItem value="8+">8+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currentCTC" className="text-sm">Current CTC (LPA)</Label>
                        <Input id="currentCTC" placeholder="e.g., 10" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentRole">Current Role/Position *</Label>
                      <Input id="currentRole" placeholder="e.g., Software Engineer" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Preferred Location *</Label>
                      <Input id="location" placeholder="e.g., Bangalore, Mumbai" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="skills">Key Skills *</Label>
                      <Textarea
                        id="skills"
                        placeholder="e.g., React, Node.js, Python, Project Management..."
                        rows={3}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cv">Upload CV/Resume *</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                        <input
                          type="file"
                          id="cv"
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                        />
                        <label htmlFor="cv" className="cursor-pointer">
                          <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                          <p className="text-sm text-muted-foreground mb-2">
                            {fileName ? fileName : "Click to upload or drag and drop"}
                          </p>
                          <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (Max 5MB)</p>
                        </label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your career goals, preferred roles, or any other relevant information..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <FileText className="h-5 w-5 mr-2" />
                      Submit CV
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
                        <p>1. Our recruitment team will review your CV within 24-48 hours</p>
                        <p>2. If your profile matches our current openings, we'll contact you</p>
                        <p>3. Your CV will be kept in our database for future opportunities</p>
                        <p>4. You'll receive career tips and job alerts via email</p>
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
