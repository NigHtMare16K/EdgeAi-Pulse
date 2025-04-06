"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Bookmark } from "lucide-react"
import Link from "next/link"

// Mock data for saved tools
const mockSavedTools = [
  {
    id: "meta-llama/Llama-2-70b",
    name: "Llama-2-70b",
    company: "Meta AI",
    description:
      "Llama 2 is a collection of pretrained and fine-tuned generative text models ranging from 7B to 70B parameters.",
    avatar: "/placeholder.svg?height=50&width=50&text=L",
    downloads: 1250000,
    badge: "popular",
    category: "nlp",
    source: "huggingface",
  },
  {
    id: "openai/whisper-large-v3",
    name: "whisper-large-v3",
    company: "OpenAI",
    description:
      "Whisper is a general-purpose speech recognition model that can transcribe speech in multiple languages.",
    avatar: "/placeholder.svg?height=50&width=50&text=W",
    downloads: 850000,
    badge: "new",
    category: "audio",
    source: "huggingface",
  },
  {
    id: "microsoft/phi-2",
    name: "phi-2",
    company: "Microsoft",
    description:
      "Phi-2 is a 2.7B parameter language model that demonstrates outstanding reasoning and language understanding capabilities.",
    avatar: "/placeholder.svg?height=50&width=50&text=P",
    downloads: 650000,
    badge: "trending",
    category: "nlp",
    source: "github",
  },
]

export default function SavedToolsGrid() {
  const [savedTools, setSavedTools] = useState(mockSavedTools)

  // Remove tool from saved list
  const removeTool = (id: string) => {
    setSavedTools(savedTools.filter((tool) => tool.id !== id))
  }

  // Show/hide empty state based on saved tools count
  useEffect(() => {
    const noSavedTools = document.getElementById("no-saved-tools")
    if (noSavedTools) {
      if (savedTools.length === 0) {
        noSavedTools.classList.remove("hidden")
      } else {
        noSavedTools.classList.add("hidden")
      }
    }
  }, [savedTools])

  // Format download numbers
  const formatDownloads = (downloads: number) => {
    if (downloads >= 1000000) {
      return `${(downloads / 1000000).toFixed(1)}M`
    } else if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(1)}K`
    }
    return downloads.toString()
  }

  if (savedTools.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {savedTools.map((tool) => (
        <Card key={tool.id} className="glass-effect hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-start mb-4 relative">
              <div className="w-12 h-12 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                <img src={tool.avatar || "/placeholder.svg"} alt={tool.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{tool.name}</h3>
                <p className="text-muted-foreground text-sm">{tool.company}</p>
              </div>
              {tool.badge && <Badge className={`absolute top-0 right-0 tool-badge ${tool.badge}`}>{tool.badge}</Badge>}
            </div>
            <p className="text-muted-foreground mb-4 line-clamp-3">{tool.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-amber-500">
                <Download className="h-4 w-4 mr-1" />
                <span>{formatDownloads(tool.downloads)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={() => removeTool(tool.id)}>
                  <Bookmark className="h-4 w-4 fill-primary" />
                  <span className="sr-only">Unsave</span>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`https://huggingface.co/${tool.id}`} target="_blank" className="flex items-center gap-1">
                    <span>View Model</span>
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

