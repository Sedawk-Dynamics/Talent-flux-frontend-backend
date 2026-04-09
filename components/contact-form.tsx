"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        alert("Message sent successfully!")

        // reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        })
      } else {
        alert("Failed to send message")
      }
    } catch (error) {
      alert("Something went wrong")
    }

    setLoading(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to transform your hiring process or advance your career? Let's start a conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground">
                Have questions? Our team is here to help you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail className="text-primary" />
                <a href="mailto:inquiry@talentflux.co.in">
                  inquiry@talentflux.co.in
                </a>
              </div>

              <div className="flex gap-4">
                <Phone className="text-secondary" />
                <a href="tel:+917703881471">+91-7703881471</a>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-accent" />
                <p>
                  Greater Noida West, Noida <br />
                  India
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border rounded-2xl p-8 space-y-6"
            >
              <div>
                <Label>Full Name *</Label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label>Email *</Label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label>Phone *</Label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label>Company</Label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label>Message *</Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}