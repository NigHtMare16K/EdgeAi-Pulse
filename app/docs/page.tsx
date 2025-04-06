import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Code, Terminal, BookOpen } from "lucide-react"

export default function DocumentationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="container py-8">
        <div className="text-center mb-12 reveal">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block">
            Documentation
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn how to use Edge AI Pulse to discover, compare, and integrate AI tools into your projects.
          </p>
        </div>

        <Tabs defaultValue="getting-started" className="max-w-4xl mx-auto reveal reveal-delay-1">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="getting-started" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Getting Started</span>
            </TabsTrigger>
            <TabsTrigger value="api" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span>API</span>
            </TabsTrigger>
            <TabsTrigger value="cli" className="flex items-center gap-2">
              <Terminal className="h-4 w-4" />
              <span>CLI</span>
            </TabsTrigger>
            <TabsTrigger value="guides" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Guides</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Introduction to Edge AI Pulse</CardTitle>
                <CardDescription>Learn about the platform and its features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Edge AI Pulse is a comprehensive platform for discovering, comparing, and integrating AI tools into
                  your projects. Our platform aggregates data from trusted sources like GitHub, Hugging Face, and ArXiv
                  to provide you with up-to-date information on the latest AI tools and research.
                </p>
                <h3 className="text-lg font-medium mt-4">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Real-time aggregation of AI tools from multiple sources</li>
                  <li>Advanced search and filtering capabilities</li>
                  <li>Personalized recommendations based on your interests</li>
                  <li>Trending analysis and popularity metrics</li>
                  <li>Comprehensive API for integration with your applications</li>
                  <li>Weekly digest of the latest AI tools and research</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Creating an Account</CardTitle>
                <CardDescription>Set up your Edge AI Pulse account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  To get the most out of Edge AI Pulse, we recommend creating an account. This allows you to save your
                  favorite tools, receive personalized recommendations, and subscribe to our weekly digest.
                </p>
                <h3 className="text-lg font-medium mt-4">Steps to Create an Account</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Click on the "Sign up" button in the top-right corner of the page</li>
                  <li>Enter your username, email address, and password</li>
                  <li>Verify your email address by clicking the link in the verification email</li>
                  <li>Complete your profile by selecting your areas of interest</li>
                </ol>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>API Overview</CardTitle>
                <CardDescription>Integrate Edge AI Pulse into your applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Edge AI Pulse API provides programmatic access to our database of AI tools, models, and research
                  papers. You can use our API to integrate AI tool discovery into your applications, dashboards, or
                  development workflows.
                </p>
                <h3 className="text-lg font-medium mt-4">Authentication</h3>
                <p>
                  All API requests require authentication using an API key. You can generate an API key in your account
                  settings. Include your API key in the request headers as follows:
                </p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`Authorization: Bearer YOUR_API_KEY`}</code>
                </pre>

                <h3 className="text-lg font-medium mt-4">Base URL</h3>
                <p>All API requests should be made to the following base URL:</p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`https://api.edgeaipulse.com/v1`}</code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Endpoints</CardTitle>
                <CardDescription>Available API endpoints and their usage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-medium">GET /tools</h3>
                <p>Retrieve a list of AI tools based on various filters and search criteria.</p>
                <h4 className="font-medium mt-2">Query Parameters</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <code>q</code> - Search query
                  </li>
                  <li>
                    <code>source</code> - Filter by source (github, huggingface, arxiv)
                  </li>
                  <li>
                    <code>category</code> - Filter by category (nlp, vision, diffusion, etc.)
                  </li>
                  <li>
                    <code>limit</code> - Number of results to return (default: 20, max: 100)
                  </li>
                  <li>
                    <code>offset</code> - Pagination offset (default: 0)
                  </li>
                </ul>

                <h3 className="text-lg font-medium mt-4">GET /tools/{"{id}"}</h3>
                <p>Retrieve detailed information about a specific AI tool.</p>

                <h3 className="text-lg font-medium mt-4">GET /papers</h3>
                <p>Retrieve a list of research papers based on various filters and search criteria.</p>
                <h4 className="font-medium mt-2">Query Parameters</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <code>q</code> - Search query
                  </li>
                  <li>
                    <code>category</code> - Filter by category (nlp, vision, reinforcement-learning, etc.)
                  </li>
                  <li>
                    <code>limit</code> - Number of results to return (default: 20, max: 100)
                  </li>
                  <li>
                    <code>offset</code> - Pagination offset (default: 0)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cli" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>CLI Installation</CardTitle>
                <CardDescription>Install and set up the Edge AI Pulse CLI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Edge AI Pulse CLI allows you to search for AI tools, models, and research papers directly from
                  your terminal.
                </p>
                <h3 className="text-lg font-medium mt-4">Installation</h3>
                <p>Install the CLI using npm:</p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`npm install -g edgeaipulse-cli`}</code>
                </pre>

                <p className="mt-4">Or using yarn:</p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`yarn global add edgeaipulse-cli`}</code>
                </pre>

                <h3 className="text-lg font-medium mt-4">Authentication</h3>
                <p>Authenticate the CLI with your Edge AI Pulse account:</p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`edgeaipulse login`}</code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CLI Commands</CardTitle>
                <CardDescription>Available commands and their usage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-medium">Search for AI Tools</h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`edgeaipulse search "stable diffusion"`}</code>
                </pre>

                <h3 className="text-lg font-medium mt-4">Filter by Source</h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`edgeaipulse search --source=huggingface "llama"`}</code>
                </pre>

                <h3 className="text-lg font-medium mt-4">Filter by Category</h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`edgeaipulse search --category=nlp "transformer"`}</code>
                </pre>

                <h3 className="text-lg font-medium mt-4">Get Tool Details</h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`edgeaipulse tool meta-llama/Llama-2-70b`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guides" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Finding the Right AI Tool</CardTitle>
                <CardDescription>Tips for discovering the perfect AI tool for your needs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  With thousands of AI tools available, finding the right one for your specific needs can be
                  challenging. Here are some tips to help you discover the perfect AI tool:
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Define your requirements:</strong> Before searching, clearly define what you need the AI
                    tool to do. Consider factors like the type of data you're working with, the specific task you need
                    to accomplish, and any technical constraints.
                  </li>
                  <li>
                    <strong>Use specific search terms:</strong> Instead of searching for general terms like "AI model,"
                    use specific terms related to your task, such as "sentiment analysis" or "image segmentation."
                  </li>
                  <li>
                    <strong>Filter by category:</strong> Use our category filters to narrow down your search to specific
                    domains like NLP, computer vision, or reinforcement learning.
                  </li>
                  <li>
                    <strong>Check popularity metrics:</strong> Look at download counts, GitHub stars, and trending
                    badges to gauge the popularity and reliability of a tool.
                  </li>
                  <li>
                    <strong>Read the documentation:</strong> Always check the documentation to ensure the tool supports
                    your specific use case and technical requirements.
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Integrating AI Models</CardTitle>
                <CardDescription>Best practices for integrating AI models into your applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Once you've found the right AI model, integrating it into your application requires careful planning.
                  Here are some best practices:
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Start with a proof of concept:</strong> Before fully integrating an AI model, create a
                    simple proof of concept to validate that it meets your requirements.
                  </li>
                  <li>
                    <strong>Consider deployment options:</strong> Decide whether to deploy the model on-premises, in the
                    cloud, or at the edge based on your latency, privacy, and resource constraints.
                  </li>
                  <li>
                    <strong>Optimize for performance:</strong> Consider model quantization, pruning, or distillation to
                    improve inference speed and reduce resource requirements.
                  </li>
                  <li>
                    <strong>Implement monitoring:</strong> Set up monitoring to track model performance, detect drift,
                    and identify potential issues.
                  </li>
                  <li>
                    <strong>Plan for updates:</strong> AI models are constantly improving. Plan for how you'll update
                    your integrated models as new versions become available.
                  </li>
                </ol>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </main>
  )
}

