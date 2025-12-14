"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Linkedin, Phone, ArrowUpRight, FileText, BookOpen, X, CheckCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [showResumeForm, setShowResumeForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    reason: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Resume Download Request from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nOrganization: ${formData.organization}\nReason for Download: ${formData.reason}\n\nThis person has requested to download your resume.`,
    )

    const mailtoLink = `mailto:jpjchandru@gmail.com?subject=${subject}&body=${body}`
    const mailWindow = window.open(mailtoLink, "_blank")
    if (!mailWindow) {
      const tempLink = document.createElement("a")
      tempLink.href = mailtoLink
      tempLink.click()
    }

    const link = document.createElement("a")
    link.href = "/Chandru-J-Resume.pdf"
    link.download = "Chandru-J-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setSubmitted(true)

    setTimeout(() => {
      setShowResumeForm(false)
      setSubmitted(false)
      setFormData({ name: "", organization: "", reason: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="py-16 lg:py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Heading and Description */}
          <div>
            <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">Contact</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight mb-4">
              {"Let's Connect"}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Ready to build intelligent AI solutions? Get in touch to discuss your project.
            </p>
            <p className="text-sm text-muted-foreground">Available for AI projects and collaborations worldwide.</p>
          </div>

          {/* Right Column - Contact Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone - Opens WhatsApp */}
            <a
              href="https://wa.me/919092674713"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-background hover:bg-accent hover:border-primary/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">WhatsApp</p>
                <p className="text-sm font-medium text-foreground truncate">+91 9092674713</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </a>

            {/* Email */}
            <a
              href="mailto:jpjchandru@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-background hover:bg-accent hover:border-primary/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium text-foreground truncate">jpjchandru@gmail.com</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/chandru-jaiganesh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-background hover:bg-accent hover:border-primary/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="text-sm font-medium text-foreground truncate">chandru-jaiganesh</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </a>

            {/* Medium */}
            <a
              href="https://medium.com/@jpjchandru"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-background hover:bg-accent hover:border-primary/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">Medium</p>
                <p className="text-sm font-medium text-foreground truncate">@jpjchandru</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </a>

            {/* Resume Download - spans full width */}
            <button
              onClick={() => setShowResumeForm(true)}
              className="flex items-center gap-3 p-4 rounded-lg border border-primary bg-primary/5 hover:bg-primary/10 transition-all group sm:col-span-2"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-xs text-muted-foreground">Resume</p>
                <p className="text-sm font-medium text-foreground">Download Resume</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-primary shrink-0" />
            </button>
          </div>
        </div>
      </div>

      {/* Resume Download Modal - unchanged */}
      {showResumeForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-card border border-border rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => {
                setShowResumeForm(false)
                setSubmitted(false)
                setFormData({ name: "", organization: "", reason: "" })
              }}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-semibold text-foreground mb-2">Request Resume</h3>
            <p className="text-sm text-muted-foreground mb-6">Please fill in your details to download the resume.</p>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-medium">Thank you!</p>
                <p className="text-sm text-muted-foreground">Your download has started and notification sent.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="mt-1 bg-background"
                  />
                </div>
                <div>
                  <Label htmlFor="organization" className="text-foreground">
                    Organization *
                  </Label>
                  <Input
                    id="organization"
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Company or organization name"
                    className="mt-1 bg-background"
                  />
                </div>
                <div>
                  <Label htmlFor="reason" className="text-foreground">
                    Reason for Download *
                  </Label>
                  <Textarea
                    id="reason"
                    required
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    placeholder="Why would you like to download the resume?"
                    className="mt-1 min-h-[80px] bg-background"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 transition-colors bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                >
                  Submit & Download
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
