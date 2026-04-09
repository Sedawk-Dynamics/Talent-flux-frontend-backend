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
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    currentCTC: "",
    currentRole: "",
    location: "",
    skills: "",
    message: "",
  })

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    if (selected) {
      setFile(selected)
      setFileName(selected.name)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const form = new FormData()

      Object.keys(formData).forEach((key) => {
        form.append(key, formData[key])
      })

      if (file) {
        form.append("cv", file)
      }

      const res = await fetch("/api/submit-cv", {
        method: "POST",
        body: form,
      })

      const data = await res.json()

      if (data.success) {
        alert("CV submitted successfully!")

        // reset
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          experience: "",
          currentCTC: "",
          currentRole: "",
          location: "",
          skills: "",
          message: "",
        })
        setFile(null)
        setFileName("")
      } else {
        alert("Failed to submit CV")
      }
    } catch (error) {
      alert("Something went wrong")
    }

    setLoading(false)
  }

  const benefits = [
    { icon: Award, title: "Get Noticed", description: "Your CV goes directly to our recruitment team" },
    { icon: TrendingUp, title: "Career Growth", description: "Access to exclusive job opportunities" },
    { icon: Users, title: "Expert Support", description: "Personalized career guidance" },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 text-center">
        <h1 className="text-4xl font-bold">
          Submit Your <span className="text-primary">CV</span>
        </h1>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Submit Your Details</CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <Input id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                  <Input id="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Input id="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                  <Input id="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                </div>

                <Select onValueChange={(val) => setFormData({ ...formData, experience: val })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                  </SelectContent>
                </Select>

                <Input id="currentCTC" placeholder="CTC" value={formData.currentCTC} onChange={handleChange} />
                <Input id="currentRole" placeholder="Role" value={formData.currentRole} onChange={handleChange} required />
                <Input id="location" placeholder="Location" value={formData.location} onChange={handleChange} required />

                <Textarea id="skills" placeholder="Skills" value={formData.skills} onChange={handleChange} required />

                {/* File Upload */}
                <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                {fileName && <p className="text-sm">{fileName}</p>}

                <Textarea id="message" placeholder="Message" value={formData.message} onChange={handleChange} />

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Submitting..." : "Submit CV"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}