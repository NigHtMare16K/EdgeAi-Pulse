import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const popularTools = [
  {
    name: "ChatGPT",
    description: "OpenAI's conversational AI assistant",
    logo: "/placeholder.svg?height=80&width=80",
    url: "https://chat.openai.com",
  },
  {
    name: "Claude",
    description: "Anthropic's helpful, harmless, and honest AI assistant",
    logo: "/placeholder.svg?height=80&width=80",
    url: "https://www.anthropic.com/claude",
  },
  {
    name: "Midjourney",
    description: "AI image generation with exceptional artistic quality",
    logo: "/placeholder.svg?height=80&width=80",
    url: "https://midjourney.com",
  },
  {
    name: "Perplexity",
    description: "AI-powered search engine with real-time information",
    logo: "/placeholder.svg?height=80&width=80",
    url: "https://www.perplexity.ai",
  },
  {
    name: "Hugging Face Spaces",
    description: "Community-built AI applications and demos",
    logo: "/placeholder.svg?height=80&width=80",
    url: "https://huggingface.co/spaces",
  },
  {
    name: "NVIDIA AI Playground",
    description: "Interactive demos of NVIDIA's AI research",
    logo: "/placeholder.svg?height=80&width=80",
    url: "https://www.nvidia.com/en-us/research/ai-playground/",
  },
]

export default function PopularToolsSection() {
  return (
    <section id="popular-tools" className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block">
            Popular AI Tools
          </h2>
          <p className="text-muted-foreground">Direct links to the most widely used AI tools and models</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularTools.map((tool) => (
            <Link key={tool.name} href={tool.url} target="_blank" className="block h-full">
              <Card className="glass-effect h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-20 h-20 rounded-lg overflow-hidden mb-4">
                    <img src={tool.logo || "/placeholder.svg"} alt={tool.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                  <p className="text-muted-foreground">{tool.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

