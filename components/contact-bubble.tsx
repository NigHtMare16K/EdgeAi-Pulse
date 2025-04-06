"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, X, Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function ContactBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !message) {
      toast({
        title: "Please fill all fields",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call with a delay instead of using EmailJS
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Log the message to console (in a real app, this would send to a backend)
      console.log("Contact form submission:", {
        email,
        message,
      })

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })

      setEmail("")
      setMessage("")
      setIsOpen(false)
    } catch (error) {
      console.error("Error:", error)
      toast({
        title: "Something went wrong",
        description: "Please try again later or email us directly at info@edgeaipulse.com",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-bubble">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="contact-bubble-btn"
        size="icon"
        aria-label={isOpen ? "Close contact form" : "Open contact form"}
      >
        {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div className="contact-bubble-menu animate-fade-in">
          <h3 className="font-medium text-lg mb-2">Contact Us</h3>
          <p className="text-muted-foreground text-sm mb-4">Have a question or feedback? Send us a message!</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="min-h-[100px] resize-none"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </div>
      )}
    </div>
  )
}

