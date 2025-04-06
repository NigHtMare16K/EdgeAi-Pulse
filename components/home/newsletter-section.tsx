"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"
import { subscribeToNewsletter } from "@/lib/api"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Please enter your email",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      await subscribeToNewsletter(email)

      toast({
        title: "Subscription successful!",
        description: "You'll now receive our weekly AI digest.",
      })

      setEmail("")
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Stay Updated with AI Trends
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Subscribe to our weekly newsletter to receive the latest AI research papers, tools, and industry news
            directly in your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-effect p-6 rounded-xl flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading} className="min-w-[120px]">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Join over 10,000 AI enthusiasts receiving our weekly digest.
          <br />
          We respect your privacy and you can unsubscribe at any time.
        </div>
      </div>
    </section>
  )
}

