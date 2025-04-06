import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Tag } from "lucide-react"
import Link from "next/link"

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Rise of Multimodal AI Models",
    excerpt:
      "Explore how multimodal AI models like GPT-4V and Gemini are changing the landscape of artificial intelligence by processing and generating content across different modalities.",
    image: "/placeholder.svg?height=400&width=600",
    author: {
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    date: "April 2, 2025",
    readTime: "8 min read",
    tags: ["Multimodal AI", "GPT-4", "Gemini"],
  },
  {
    id: 2,
    title: "How to Fine-tune Llama 3 for Your Specific Use Case",
    excerpt:
      "A step-by-step guide to fine-tuning Meta's Llama 3 model for your specific domain or task, with practical examples and code snippets.",
    image: "/placeholder.svg?height=400&width=600",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    date: "March 28, 2025",
    readTime: "12 min read",
    tags: ["Llama 3", "Fine-tuning", "Tutorial"],
  },
  {
    id: 3,
    title: "The State of AI Research in 2025",
    excerpt:
      "A comprehensive overview of the current state of AI research, including the latest breakthroughs, trends, and challenges in the field.",
    image: "/placeholder.svg?height=400&width=600",
    author: {
      name: "Michael Johnson",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    date: "March 15, 2025",
    readTime: "10 min read",
    tags: ["AI Research", "Trends", "2025"],
  },
  {
    id: 4,
    title: "Comparing the Top 5 Image Generation Models",
    excerpt:
      "An in-depth comparison of the top 5 image generation models, including DALL-E 3, Midjourney V6, and Stable Diffusion XL, with examples and performance metrics.",
    image: "/placeholder.svg?height=400&width=600",
    author: {
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    date: "March 10, 2025",
    readTime: "15 min read",
    tags: ["Image Generation", "DALL-E", "Midjourney", "Stable Diffusion"],
  },
  {
    id: 5,
    title: "Ethical Considerations in AI Development",
    excerpt:
      "A discussion of the ethical considerations in AI development, including bias, fairness, transparency, and accountability.",
    image: "/placeholder.svg?height=400&width=600",
    author: {
      name: "David Brown",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    date: "March 5, 2025",
    readTime: "9 min read",
    tags: ["AI Ethics", "Bias", "Fairness"],
  },
  {
    id: 6,
    title: "Building an AI-powered Recommendation System",
    excerpt:
      "Learn how to build an AI-powered recommendation system using collaborative filtering, content-based filtering, and hybrid approaches.",
    image: "/placeholder.svg?height=400&width=600",
    author: {
      name: "Emily Chen",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    date: "February 28, 2025",
    readTime: "14 min read",
    tags: ["Recommendation Systems", "Machine Learning", "Tutorial"],
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="container py-8">
        <div className="text-center mb-12 reveal">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block">
            Edge AI Pulse Blog
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and news about the latest developments in AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className={`glass-effect hover:shadow-lg transition-all duration-300 hover:-translate-y-1 reveal reveal-delay-${(index % 4) + 1}`}
            >
              <div className="aspect-video overflow-hidden rounded-t-xl">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{post.author.name}</span>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/blog/${post.id}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mb-8 reveal reveal-delay-4">
          <Button variant="outline">Load More Articles</Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}

