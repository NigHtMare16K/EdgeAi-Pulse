"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { HelpCircle, Mail, MessageSquare, Phone } from "lucide-react"

export default function SupportPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="container py-8">
        <div className="text-center mb-12 reveal">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block">
            Support Center
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get help with Edge AI Pulse. Find answers to common questions or contact our support team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 reveal reveal-delay-1">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">FAQs</h3>
              <p className="text-muted-foreground mb-4">
                Find answers to commonly asked questions about Edge AI Pulse.
              </p>
              <Button variant="outline" asChild>
                <a href="#faqs">View FAQs</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-muted-foreground mb-4">Chat with our support team for immediate assistance.</p>
              <Button variant="outline" onClick={() => window.open("https://chat.edgeaipulse.com", "_blank")}>
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-muted-foreground mb-4">
                Send us an email and we'll get back to you as soon as possible.
              </p>
              <Button variant="outline" asChild>
                <a href="#contact-form">Contact Us</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div id="faqs" className="reveal reveal-delay-2">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Find answers to common questions about Edge AI Pulse</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is Edge AI Pulse?</AccordionTrigger>
                    <AccordionContent>
                      Edge AI Pulse is a comprehensive platform for discovering, comparing, and integrating AI tools
                      into your projects. Our platform aggregates data from trusted sources like GitHub, Hugging Face,
                      and ArXiv to provide you with up-to-date information on the latest AI tools and research.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I create an account?</AccordionTrigger>
                    <AccordionContent>
                      To create an account, click on the "Sign up" button in the top-right corner of the page. Enter
                      your username, email address, and password, then verify your email address by clicking the link in
                      the verification email.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is Edge AI Pulse free to use?</AccordionTrigger>
                    <AccordionContent>
                      Edge AI Pulse offers a free tier with limited features. We also offer Pro and Enterprise plans
                      with additional features and higher usage limits. You can view our pricing plans by clicking on
                      the "Pricing" link in the navigation menu.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>How do I save an AI tool?</AccordionTrigger>
                    <AccordionContent>
                      To save an AI tool, click on the bookmark icon next to the tool. You can view your saved tools in
                      the "Saved Tools" section of your dashboard.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>How often is the data updated?</AccordionTrigger>
                    <AccordionContent>
                      Our data is updated in real-time from sources like GitHub, Hugging Face, and ArXiv. This ensures
                      that you always have access to the latest AI tools and research.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <div id="contact-form" className="reveal reveal-delay-3">
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Send us a message and we'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Subject" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mb-8 reveal reveal-delay-4">
          <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            If you couldn't find what you're looking for, you can also reach us through the following channels:
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:support@edgeaipulse.com" className="text-primary hover:underline">
                support@edgeaipulse.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

