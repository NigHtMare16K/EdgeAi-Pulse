import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="container py-8">
        <div className="text-center mb-12 reveal">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block">
            About Edge AI Pulse
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our mission is to make AI tools and research accessible to everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 reveal reveal-delay-1">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Edge AI Pulse was founded in 2023 by a team of AI researchers and engineers who were frustrated with the
              fragmented nature of the AI tools landscape. With new models and tools being released every day across
              multiple platforms, it was becoming increasingly difficult to keep track of the latest developments.
            </p>
            <p className="text-muted-foreground mb-4">
              We set out to create a platform that would aggregate data from trusted sources like GitHub, Hugging Face,
              and ArXiv, providing a single source of truth for AI tools and research. Our goal is to help developers,
              researchers, and businesses discover the perfect AI tools for their needs, saving them time and effort in
              the process.
            </p>
            <p className="text-muted-foreground">
              Today, Edge AI Pulse is used by thousands of developers, researchers, and businesses around the world to
              discover, compare, and integrate AI tools into their projects.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-primary rounded-xl"></div>
              <div className="absolute inset-0 border-2 border-primary rounded-xl transform rotate-45"></div>
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary-foreground">
                Edge AI Pulse
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 reveal reveal-delay-2">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="glass-effect">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in being transparent about our data sources, algorithms, and business practices. We strive
                  to provide accurate and unbiased information about AI tools and research.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                <p className="text-muted-foreground">
                  We believe that AI tools and research should be accessible to everyone, regardless of their technical
                  background or resources. We strive to make our platform easy to use and understand.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                    <line x1="16" y1="8" x2="2" y2="22"></line>
                    <line x1="17.5" y1="15" x2="9" y2="15"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We are committed to continuous innovation and improvement. We are constantly exploring new ways to
                  enhance our platform and provide more value to our users.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16 reveal reveal-delay-3">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="glass-effect">
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-1">John Doe</h3>
                <p className="text-primary mb-4">Founder & CEO</p>
                <p className="text-muted-foreground mb-4">
                  Former AI researcher at Google Brain with over 10 years of experience in machine learning and
                  artificial intelligence.
                </p>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Jane Smith" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-1">Jane Smith</h3>
                <p className="text-primary mb-4">CTO</p>
                <p className="text-muted-foreground mb-4">
                  Former lead engineer at OpenAI with expertise in natural language processing and large language
                  models.
                </p>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Michael Johnson" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-1">Michael Johnson</h3>
                <p className="text-primary mb-4">Head of Product</p>
                <p className="text-muted-foreground mb-4">
                  Former product manager at Microsoft with a passion for creating user-friendly and accessible products.
                </p>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mb-8 reveal reveal-delay-4">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We're always looking for talented individuals to join our team. If you're passionate about AI and want to
            help make it more accessible to everyone, we'd love to hear from you.
          </p>
          <Button asChild>
            <Link href="/careers">View Open Positions</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}

