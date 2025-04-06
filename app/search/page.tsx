"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bookmark, Download, ExternalLink, Search } from "lucide-react"
import { fetchHuggingFaceModels, fetchGitHubRepos } from "@/lib/api"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [results, setResults] = useState<any[]>([])
  const [savedItems, setSavedItems] = useState<string[]>([])

  useEffect(() => {
    // Load saved items from localStorage
    const saved = localStorage.getItem("savedItems")
    if (saved) {
      setSavedItems(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (!searchQuery.trim()) return

      setLoading(true)
      try {
        let data = []
        if (activeTab === "all" || activeTab === "huggingface") {
          const hfData = await fetchHuggingFaceModels(searchQuery)
          if (activeTab === "all") {
            data = [...data, ...hfData]
          } else {
            data = hfData
          }
        }

        if (activeTab === "all" || activeTab === "github") {
          const ghData = await fetchGitHubRepos(searchQuery)
          if (activeTab === "all") {
            data = [...data, ...ghData]
          } else {
            data = ghData
          }
        }

        // Sort by downloads/stars
        data.sort((a, b) => {
          const aMetric = a.downloads || a.stars || 0
          const bMetric = b.downloads || b.stars || 0
          return bMetric - aMetric
        })

        setResults(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [searchQuery, activeTab])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchQuery(query)
  }

  const toggleSave = (id: string) => {
    setSavedItems((prev) => {
      const newSaved = prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]

      localStorage.setItem("savedItems", JSON.stringify(newSaved))
      return newSaved
    })
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toString()
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Search AI Tools</h1>

        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              type="text"
              placeholder="Search for AI models, tools, libraries..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" className="gap-2">
              <Search size={18} />
              <span>Search</span>
            </Button>
          </form>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All Sources</TabsTrigger>
              <TabsTrigger value="huggingface">Hugging Face</TabsTrigger>
              <TabsTrigger value="github">GitHub</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="space-y-6">
          {loading ? (
            // Loading skeleton
            Array.from({ length: 5 }).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-muted"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-5 w-3/4 rounded bg-muted"></div>
                      <div className="h-4 w-1/4 rounded bg-muted"></div>
                      <div className="h-4 w-full rounded bg-muted"></div>
                      <div className="h-4 w-full rounded bg-muted"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : searchQuery && results.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
              <p className="text-sm text-muted-foreground mt-2">Try a different search term or source</p>
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4 relative">
                      <div className="w-12 h-12 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                        <img
                          src={item.avatar || `/images/${item.source}-logo.png`}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = `/images/${item.source}-logo.png`
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-muted-foreground text-sm">{item.company || item.id.split("/")[0]}</p>
                      </div>
                      {item.badge && (
                        <Badge className={`absolute top-0 right-0 tool-badge ${item.badge}`}>{item.badge}</Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-amber-500">
                        <Download className="h-4 w-4 mr-1" />
                        <span>{formatNumber(item.downloads || item.stars || 0)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleSave(item.id)}>
                          <Bookmark className={`h-4 w-4 ${savedItems.includes(item.id) ? "fill-primary" : ""}`} />
                          <span className="sr-only">{savedItems.includes(item.id) ? "Unsave" : "Save"}</span>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <span>View</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Search for AI models, tools, libraries, and more</p>
              <p className="text-sm text-muted-foreground mt-2">
                Try searching for "stable diffusion", "llama", or "vision"
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}

