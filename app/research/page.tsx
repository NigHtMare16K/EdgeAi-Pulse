"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Search, Calendar, User, FileText } from "lucide-react"
import Link from "next/link"
import { fetchArxivPapers } from "@/lib/api"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ResearchPage() {
  const [papers, setPapers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchTerm, setSearchTerm] = useState("artificial intelligence")
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    async function loadPapers() {
      setLoading(true)
      const data = await fetchArxivPapers(searchTerm)
      setPapers(data)
      setLoading(false)
    }

    loadPapers()
  }, [searchTerm])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchTerm(searchQuery)
  }

  // Filter papers based on active tab
  const filteredPapers = papers.filter((paper) => {
    if (activeTab === "all") return true

    const categories: Record<string, string[]> = {
      ai: ["artificial intelligence", "machine learning", "deep learning", "neural network"],
      nlp: ["natural language processing", "language model", "text generation", "transformer"],
      vision: ["computer vision", "image recognition", "object detection", "segmentation"],
      robotics: ["robotics", "reinforcement learning", "control systems", "autonomous"],
    }

    const keywords = categories[activeTab] || []
    const paperText = `${paper.title} ${paper.summary}`.toLowerCase()

    return keywords.some((keyword) => paperText.includes(keyword))
  })

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="container py-8">
        <div className="text-center mb-12 reveal">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block">
            AI Research Papers
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the latest research papers in artificial intelligence, machine learning, and related fields from
            ArXiv.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8 reveal reveal-delay-1">
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              type="text"
              placeholder="Search research papers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" className="gap-2">
              <Search size={16} />
              <span>Search</span>
            </Button>
          </form>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All Topics</TabsTrigger>
              <TabsTrigger value="ai">AI & ML</TabsTrigger>
              <TabsTrigger value="nlp">NLP</TabsTrigger>
              <TabsTrigger value="vision">Vision</TabsTrigger>
              <TabsTrigger value="robotics">Robotics</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="space-y-6 reveal reveal-delay-2">
          {loading ? (
            // Loading skeleton
            Array.from({ length: 5 }).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-6 bg-muted rounded-md mb-2 w-3/4"></div>
                  <div className="h-4 bg-muted rounded-md mb-4 w-1/4"></div>
                  <div className="h-4 bg-muted rounded-md mb-2 w-full"></div>
                  <div className="h-4 bg-muted rounded-md mb-2 w-full"></div>
                  <div className="h-4 bg-muted rounded-md w-2/3"></div>
                </CardContent>
              </Card>
            ))
          ) : filteredPapers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No papers found for "{searchTerm}"</p>
              <p className="text-sm text-muted-foreground mt-2">Try a different search term or category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {filteredPapers.map((paper) => (
                <Card key={paper.id} className="glass-effect hover:shadow-lg transition-all duration-300 model-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{paper.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{paper.published}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="h-4 w-4 mr-1" />
                        <span>
                          {paper.authors.slice(0, 3).join(", ")}
                          {paper.authors.length > 3 ? ` and ${paper.authors.length - 3} more` : ""}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{paper.summary}</p>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={paper.url} target="_blank" className="flex items-center gap-1">
                          <FileText className="h-4 w-4 mr-1" />
                          <span>Read Paper</span>
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}

