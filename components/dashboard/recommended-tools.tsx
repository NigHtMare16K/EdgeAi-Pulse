"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, ExternalLink, Bookmark, Search } from "lucide-react"
import Link from "next/link"

// Mock data for AI tools
const mockTools = [
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
    saved: true,
  },
  {
    id: "stabilityai/stable-diffusion-xl-base-1.0",
    name: "stable-diffusion-xl-base-1.0",
    company: "Stability AI",
    description:
      "Stable Diffusion XL is a latent text-to-image diffusion model capable of generating photo-realistic images.",
    avatar: "/placeholder.svg?height=50&width=50&text=S",
    downloads: 980000,
    badge: "trending",
    category: "diffusion",
    source: "huggingface",
    saved: false,
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
    saved: true,
  },
  {
    id: "mistralai/Mistral-7B-v0.1",
    name: "Mistral-7B-v0.1",
    company: "Mistral AI",
    description: "Mistral 7B is a 7.3B parameter language model that outperforms Llama 2 13B on all benchmarks.",
    avatar: "/placeholder.svg?height=50&width=50&text=M",
    downloads: 720000,
    badge: "popular",
    category: "nlp",
    source: "huggingface",
    saved: false,
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
    saved: true,
  },
  {
    id: "google/gemma-7b",
    name: "gemma-7b",
    company: "Google",
    description:
      "Gemma is a family of lightweight, state-of-the-art open models built from the same research and technology used to create the Gemini models.",
    avatar: "/placeholder.svg?height=50&width=50&text=G",
    downloads: 580000,
    badge: "new",
    category: "nlp",
    source: "huggingface",
    saved: false,
  },
]

export default function RecommendedTools() {
  const [tools, setTools] = useState(mockTools)
  const [source, setSource] = useState("all")
  const [category, setCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter tools based on selected filters
  const filteredTools = tools.filter((tool) => {
    const matchesSource = source === "all" || tool.source === source
    const matchesCategory = category === "all" || tool.category === category
    const matchesSearch =
      searchQuery === "" ||
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesSource && matchesCategory && matchesSearch
  })

  // Toggle save/unsave tool
  const toggleSave = (id: string) => {
    setTools(tools.map((tool) => (tool.id === id ? { ...tool, saved: !tool.saved } : tool)))
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
    <div>
      <Card className="glass-effect mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Recommended AI Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 flex gap-4">
              <Select defaultValue={source} onValueChange={setSource}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sources</SelectItem>
                  <SelectItem value="github">GitHub</SelectItem>
                  <SelectItem value="huggingface">Hugging Face</SelectItem>
                  <SelectItem value="arxiv">ArXiv</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="nlp">NLP</SelectItem>
                  <SelectItem value="vision">Vision</SelectItem>
                  <SelectItem value="diffusion">Diffusion</SelectItem>
                  <SelectItem value="audio">Audio</SelectItem>
                  <SelectItem value="multimodal">Multimodal</SelectItem>
                  <SelectItem value="rl">Reinforcement Learning</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="relative flex-1">
              <Input
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTools.map((tool) => (
              <Card key={tool.id} className="hover:shadow-md transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-start mb-3 relative">
                    <div className="w-10 h-10 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                      <img
                        src={tool.avatar || "/placeholder.svg"}
                        alt={tool.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-base">{tool.name}</h3>
                      <p className="text-muted-foreground text-xs">{tool.company}</p>
                    </div>
                    {tool.badge && (
                      <Badge className={`absolute top-0 right-0 tool-badge ${tool.badge}`}>{tool.badge}</Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{tool.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-amber-500 text-sm">
                      <Download className="h-3 w-3 mr-1" />
                      <span>{formatDownloads(tool.downloads)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleSave(tool.id)}>
                        <Bookmark className={`h-4 w-4 ${tool.saved ? "fill-primary" : ""}`} />
                        <span className="sr-only">{tool.saved ? "Unsave" : "Save"}</span>
                      </Button>
                      <Button variant="outline" size="sm" asChild className="h-8">
                        <Link
                          href={`https://huggingface.co/${tool.id}`}
                          target="_blank"
                          className="flex items-center gap-1"
                        >
                          <span>View</span>
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

