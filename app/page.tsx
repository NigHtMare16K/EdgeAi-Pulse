import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar"
import CategorySection from "@/components/home/category-section"
import TrendingSection from "@/components/home/trending-section"
import PopularToolsSection from "@/components/home/popular-tools-section"
import NewsletterSection from "@/components/home/newsletter-section"
import ResearchPapers from "@/components/home/research-papers"
import FloatingShapes from "@/components/floating-shapes"
import { Search } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      <FloatingShapes />
      <Navbar />

      <section className="py-20 px-4 md:px-6 flex items-center justify-center text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Discover the Perfect AI Tool for Your Needs
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Real-time aggregation and intelligent matching of the latest AI tools from trusted sources like GitHub,
            Hugging Face, and ArXiv.
          </p>
          <div className="flex flex-col sm:flex-row max-w-xl mx-auto gap-2">
            <Input type="text" placeholder="What kind of AI tool are you looking for?" className="h-12" />
            <Button size="lg" className="gap-2" asChild>
              <Link href="/search">
                <Search size={18} />
                <span>Search</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading categories...</div>}>
        <CategorySection />
      </Suspense>

      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading trending tools...</div>}>
        <TrendingSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading popular tools...</div>}>
        <PopularToolsSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading research papers...</div>}>
        <ResearchPapers />
      </Suspense>

      <NewsletterSection />
    </main>
  )
}

