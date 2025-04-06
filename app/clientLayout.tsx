"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import ContactBubble from "@/components/contact-bubble"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    // Check user's preferred theme
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme) {
      setTheme(savedTheme)
    } else if (prefersDark) {
      setTheme("dark")
    }

    // Initialize scroll reveal
    const initScrollReveal = () => {
      const revealElements = document.querySelectorAll(".reveal")

      const reveal = () => {
        revealElements.forEach((element) => {
          const elementTop = element.getBoundingClientRect().top
          const elementVisible = 150

          if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add("active")
          }
        })
      }

      window.addEventListener("scroll", reveal)
      reveal() // Initial check

      return () => window.removeEventListener("scroll", reveal)
    }

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Initialize scroll reveal after loading
      setTimeout(initScrollReveal, 100)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  // Apply pattern class based on theme
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-pattern")
      document.body.classList.remove("dark-pattern")
    } else {
      document.body.classList.add("dark-pattern")
      document.body.classList.remove("light-pattern")
    }
  }, [theme])

  return (
    <html lang="en" suppressHydrationWarning className={theme}>
      <head>
        <title>Edge AI Pulse - Discover the Perfect AI Tool</title>
        <meta
          name="description"
          content="Real-time aggregation and intelligent matching of the latest AI tools from trusted sources like GitHub, Hugging Face, and ArXiv."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme={theme}
          enableSystem={false}
          onThemeChange={(newTheme) => {
            setTheme(newTheme as "light" | "dark")
            localStorage.setItem("theme", newTheme as string)
          }}
        >
          {isLoading && <LoadingScreen />}
          {children}
          <Footer />
          <ContactBubble />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

