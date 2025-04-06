"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Chart } from "@/components/ui/chart"
import { Download, ExternalLink } from "lucide-react"
import Link from "next/link"

// Mock data for trending models
const mockModels = [
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
  },
]

// Chart data for different time periods
const chartData = {
  week: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "LLMs",
        data: [1200, 1350, 1500, 1800, 2100, 2400, 2800],
        borderColor: "rgb(124, 58, 237)",
        backgroundColor: "rgba(124, 58, 237, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Diffusion Models",
        data: [800, 950, 1100, 1300, 1500, 1700, 1900],
        borderColor: "rgb(236, 72, 153)",
        backgroundColor: "rgba(236, 72, 153, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Multimodal",
        data: [500, 600, 700, 850, 1000, 1200, 1400],
        borderColor: "rgb(14, 165, 233)",
        backgroundColor: "rgba(14, 165, 233, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  },
  month: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "LLMs",
        data: [12000, 15000, 18000, 22000],
        borderColor: "rgb(124, 58, 237)",
        backgroundColor: "rgba(124, 58, 237, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Diffusion Models",
        data: [8000, 10000, 12000, 15000],
        borderColor: "rgb(236, 72, 153)",
        backgroundColor: "rgba(236, 72, 153, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Multimodal",
        data: [5000, 6500, 8000, 10000],
        borderColor: "rgb(14, 165, 233)",
        backgroundColor: "rgba(14, 165, 233, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  },
  year: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "LLMs",
        data: [50000, 60000, 75000, 90000, 110000, 130000, 150000, 180000, 210000, 240000, 280000, 320000],
        borderColor: "rgb(124, 58, 237)",
        backgroundColor: "rgba(124, 58, 237, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Diffusion Models",
        data: [30000, 40000, 50000, 65000, 80000, 95000, 110000, 130000, 150000, 170000, 200000, 230000],
        borderColor: "rgb(236, 72, 153)",
        backgroundColor: "rgba(236, 72, 153, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Multimodal",
        data: [20000, 25000, 30000, 40000, 50000, 60000, 70000, 85000, 100000, 120000, 140000, 160000],
        borderColor: "rgb(14, 165, 233)",
        backgroundColor: "rgba(14, 165, 233, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  },
}

export default function TrendingSection() {
  const [period, setPeriod] = useState("week")
  const [currentChartData, setCurrentChartData] = useState(chartData.week)

  useEffect(() => {
    setCurrentChartData(chartData[period as keyof typeof chartData])
  }, [period])

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
    <section id="trending" className="py-16 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block">
            Trending AI Tools
          </h2>
          <div className="flex justify-center gap-2 mt-4">
            <Button variant={period === "week" ? "default" : "outline"} onClick={() => setPeriod("week")} size="sm">
              This Week
            </Button>
            <Button variant={period === "month" ? "default" : "outline"} onClick={() => setPeriod("month")} size="sm">
              This Month
            </Button>
            <Button variant={period === "year" ? "default" : "outline"} onClick={() => setPeriod("year")} size="sm">
              This Year
            </Button>
          </div>
        </div>

        <Card className="glass-effect mb-12">
          <CardContent className="p-6">
            <h3 className="text-xl font-medium mb-4 text-center">Model Downloads Trend</h3>
            <div className="h-[300px] w-full">
              <Chart
                type="line"
                data={currentChartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                    tooltip: {
                      mode: "index",
                      intersect: false,
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      title: {
                        display: true,
                        text: "Downloads",
                      },
                    },
                  },
                }}
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockModels.map((model) => (
            <Card
              key={model.id}
              className="glass-effect hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start mb-4 relative">
                  <div className="w-12 h-12 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                    <img
                      src={model.avatar || "/placeholder.svg"}
                      alt={model.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{model.name}</h3>
                    <p className="text-muted-foreground text-sm">{model.company}</p>
                  </div>
                  {model.badge && (
                    <Badge className={`absolute top-0 right-0 tool-badge ${model.badge}`}>{model.badge}</Badge>
                  )}
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-3">{model.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-500">
                    <Download className="h-4 w-4 mr-1" />
                    <span>{formatDownloads(model.downloads)}</span>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={`https://huggingface.co/${model.id}`}
                      target="_blank"
                      className="flex items-center gap-1"
                    >
                      <span>View Model</span>
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

