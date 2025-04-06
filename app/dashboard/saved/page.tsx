"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bookmark, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import { searchAITools } from "@/lib/api"

export default function SavedToolsPage() {
  const [savedTools, setSavedTools] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadSavedTools = async () => {
      setLoading(true)

      try {
        // Get saved tool IDs from localStorage
        const savedIds = JSON.parse(localStorage.getItem("savedItems") || "[]")

        if (savedIds.length === 0) {
          setSavedTools([])
          setLoading(false)
          return
        }

        // Fetch all tools (in a real app, you'd have an API endpoint to fetch by IDs)
        const allTools = await searchAITools("", 100)

        // Filter to only saved tools
        const savedToolsData = allTools.filter((tool) => savedIds.includes(tool.id))

        setSavedTools(savedToolsData)
      } catch (error) {
        console.error("Error loading saved tools:", error)
      } finally {
        setLoading(false)
      }
    }

    loadSavedTools()
  }, [])

  const removeTool = (id: string) => {
    // Update state
    setSavedTools(savedTools.filter((tool) => tool.id !== id))

    // Update localStorage
    const savedIds = JSON.parse(localStorage.getItem("savedItems") || "[]")
    const updatedIds = savedIds.filter((savedId: string) => savedId !== id)
    localStorage.setItem("savedItems", JSON.stringify(updatedIds))
  }

  // Format download numbers
  const formatDownloads = (downloads: number) => {
    if (downloads >= 1000000) {
      return `${(downloads / 1000000).toFixed(1)}M`
    } else if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(1)}K`
    }
    return downloads.toString()
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Saved Tools</h1>
        <p className="text-muted-foreground">Your bookmarked AI tools and models</p>
      </div>

      {loading ? (
        // Loading skeleton
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-muted"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-5 w-3/4 rounded bg-muted"></div>
                    <div className="h-4 w-1/4 rounded bg-muted"></div>
                  </div>
                </div>
                <div className="h-4 w-full rounded bg-muted mb-2"></div>
                <div className="h-4 w-full rounded bg-muted mb-2"></div>
                <div className="h-4 w-3/4 rounded bg-muted mb-4"></div>
                <div className="flex justify-between">
                  <div className="h-4 w-16 rounded bg-muted"></div>
                  <div className="h-8 w-24 rounded bg-muted"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : savedTools.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent className="pt-6">
            <div className="mb-4">
              <Bookmark className="h-12 w-12 mx-auto text-muted-foreground/30" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No Saved Tools</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              You haven&apos;t saved any AI tools yet. Browse the recommended tools and click the bookmark icon to save
              them.
            </p>
            <Button asChild>
              <Link href="/search">Browse Tools</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedTools.map((tool) => (
            <Card
              key={tool.id}
              className="glass-effect hover:shadow-lg transition-all duration-300 hover:-translate-y-1 model-card"
            >
              <CardContent className="p-6">
                <div className="flex items-start mb-4 relative">
                  <div className="w-12 h-12 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                    <img
                      src={tool.avatar || `/images/${tool.source}-logo.png`}
                      alt={tool.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `/images/${tool.source}-logo.png`
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{tool.name}</h3>
                    <p className="text-muted-foreground text-sm">{tool.company || tool.id.split("/")[0]}</p>
                  </div>
                  {tool.badge && (
                    <Badge className={`absolute top-0 right-0 tool-badge ${tool.badge}`}>{tool.badge}</Badge>
                  )}
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-3">{tool.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-500">
                    <Download className="h-4 w-4 mr-1" />
                    <span>{formatDownloads(tool.downloads || tool.stars || 0)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" onClick={() => removeTool(tool.id)}>
                      <Bookmark className="h-4 w-4 fill-primary" />
                      <span className="sr-only">Unsave</span>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={tool.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <span>View Model</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

