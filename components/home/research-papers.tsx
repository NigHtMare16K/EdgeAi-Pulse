"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ExternalLink, Search } from "lucide-react"
import Link from "next/link"
import { fetchArxivPapers } from "@/lib/api"

export default function ResearchPapers() {
  const [papers, setPapers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchTerm, setSearchTerm] = useState("artificial intelligence")

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

  return (
    <section id="research" className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block">
            Latest Research Papers
          </h2>
          <p className="text-muted-foreground mb-6">Stay updated with cutting-edge AI research from ArXiv</p>

          <form onSubmit={handleSearch} className="max-w-xl mx-auto flex gap-2">
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
        </div>

        {loading ? (
          <div className="grid grid-cols-1 gap-6">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-6 bg-muted rounded-md mb-2 w-3/4"></div>
                  <div className="h-4 bg-muted rounded-md mb-4 w-1/4"></div>
                  <div className="h-4 bg-muted rounded-md mb-2 w-full"></div>
                  <div className="h-4 bg-muted rounded-md mb-2 w-full"></div>
                  <div className="h-4 bg-muted rounded-md w-2/3"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {papers.map((paper) => (
              <Card key={paper.id} className="glass-effect hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{paper.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {paper.authors.slice(0, 3).join(", ")}
                    {paper.authors.length > 3 ? ` and ${paper.authors.length - 3} more` : ""}
                    <span className="mx-2">•</span>
                    {paper.published}
                  </p>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{paper.summary}</p>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={paper.url} target="_blank" className="flex items-center gap-1">
                        <span>Read Paper</span>
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

