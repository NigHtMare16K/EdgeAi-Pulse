import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Server, Database, Lock } from "lucide-react"

export default function ApiDocsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="container py-8">
        <div className="text-center mb-12 reveal">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block">
            API Documentation
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive documentation for the Edge AI Pulse API
          </p>
        </div>

        <Tabs defaultValue="overview" className="max-w-4xl mx-auto reveal reveal-delay-1">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Server className="h-4 w-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="authentication" className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              <span>Authentication</span>
            </TabsTrigger>
            <TabsTrigger value="endpoints" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span>Endpoints</span>
            </TabsTrigger>
            <TabsTrigger value="examples" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              <span>Examples</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>API Overview</CardTitle>
                <CardDescription>Introduction to the Edge AI Pulse API</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Edge AI Pulse API provides programmatic access to our database of AI tools, models, and research
                  papers. Our API is designed to be simple, reliable, and powerful, allowing you to integrate AI tool
                  discovery into your applications, dashboards, or development workflows.
                </p>
                <h3 className="text-lg font-medium mt-4">API Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>RESTful API with JSON responses</li>
                  <li>Comprehensive search and filtering capabilities</li>
                  <li>Detailed information about AI tools, models, and research papers</li>
                  <li>Trending and popularity metrics</li>
                  <li>Rate limiting with generous free tier</li>
                  <li>Versioned API for stability</li>
                </ul>

                <h3 className="text-lg font-medium mt-4">Base URL</h3>
                <p>All API requests should be made to the following base URL:</p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>https://api.edgeaipulse.com/v1</code>
                </pre>

                <h3 className="text-lg font-medium mt-4">Response Format</h3>
                <p>
                  All API responses are returned in JSON format. Successful responses have a 2xx status code and include
                  the requested data. Error responses have a 4xx or 5xx status code and include an error message.
                </p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`{
  "status": "success",
  "data": {
    // Response data
  }
}`}</code>
                </pre>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto mt-4">
                  <code>{`{
  "status": "error",
  "message": "Error message"
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="authentication" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Authentication</CardTitle>
                <CardDescription>Securing your API requests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  All API requests require authentication using an API key. You can generate an API key in your account
                  settings.
                </p>

                <h3 className="text-lg font-medium mt-4">API Keys</h3>
                <p>To generate an API key:</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Log in to your Edge AI Pulse account</li>
                  <li>Navigate to Settings &gt; API Keys</li>
                  <li>Click "Generate New API Key"</li>
                  <li>Give your API key a name and select the appropriate permissions</li>
                  <li>Click "Generate"</li>
                </ol>

                <div className="bg-amber-100 dark:bg-amber-900/30 p-4 rounded-md mt-4">
                  <p className="text-amber-800 dark:text-amber-200 font-medium">Important</p>
                  <p className="text-amber-700 dark:text-amber-300 text-sm mt-1">
                    Your API key will only be displayed once. Make sure to copy it and store it securely. If you lose
                    your API key, you'll need to generate a new one.
                  </p>
                </div>

                <h3 className="text-lg font-medium mt-4">Using Your API Key</h3>
                <p>Include your API key in the request headers as follows:</p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>Authorization: Bearer YOUR_API_KEY</code>
                </pre>

                <h3 className="text-lg font-medium mt-4">Rate Limiting</h3>
                <p>
                  API requests are subject to rate limiting to ensure fair usage. The rate limits depend on your
                  subscription plan:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Free tier:</strong> 100 requests per day
                  </li>
                  <li>
                    <strong>Pro tier:</strong> 1,000 requests per day
                  </li>
                  <li>
                    <strong>Enterprise tier:</strong> Custom limits based on your needs
                  </li>
                </ul>

                <p className="mt-4">Rate limit information is included in the response headers:</p>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code>{`X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1619712000`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="endpoints" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>API Endpoints</CardTitle>
                <CardDescription>Available endpoints and their parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">GET /tools</h3>
                  <p className="text-muted-foreground">
                    Retrieve a list of AI tools based on various filters and search criteria.
                  </p>
                  <h4 className="font-medium mt-4">Query Parameters</h4>
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
                  <h4 className="font-medium mt-4">Response</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`{
  "status": "success",
  "data": {
    "tools": [
      {
        "id": "meta-llama/Llama-2-70b",
        "name": "Llama-2-70b",
        "company": "Meta AI",
        "description": "Llama 2 is a collection of pretrained and fine-tuned generative text models.",
        "avatar": "https://huggingface.co/meta-llama/Llama-2-70b/resolve/main/thumbnail.png",
        "downloads": 1250000,
        "badge": "popular",
        "category": "nlp",
        "source": "huggingface",
        "url": "https://huggingface.co/meta-llama/Llama-2-70b"
      }
      // More tools...
    ],
    "total": 100,
    "limit": 20,
    "offset": 0
  }
}`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-medium">GET /tools/{"{id}"}</h3>
                  <p className="text-muted-foreground">Retrieve detailed information about a specific AI tool.</p>
                  <h4 className="font-medium mt-4">Path Parameters</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <code>id</code> - Tool ID (e.g., meta-llama/Llama-2-70b)
                    </li>
                  </ul>
                  <h4 className="font-medium mt-4">Response</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`{
  "status": "success",
  "data": {
    "id": "meta-llama/Llama-2-70b",
    "name": "Llama-2-70b",
    "company": "Meta AI",
    "description": "Llama 2 is a collection of pretrained and fine-tuned generative text models.",
    "avatar": "https://huggingface.co/meta-llama/Llama-2-70b/resolve/main/thumbnail.png",
    "downloads": 1250000,
    "badge": "popular",
    "category": "nlp",
    "source": "huggingface",
    "url": "https://huggingface.co/meta-llama/Llama-2-70b",
    "tags": ["language-model", "transformer", "llm"],
    "created_at": "2023-07-18T00:00:00Z",
    "updated_at": "2023-07-18T00:00:00Z",
    "license": "llama2",
    "model_size": "70B",
    "paper_url": "https://arxiv.org/abs/2307.09288",
    "github_url": "https://github.com/facebookresearch/llama"
  }
}`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-medium">GET /papers</h3>
                  <p className="text-muted-foreground">
                    Retrieve a list of research papers based on various filters and search criteria.
                  </p>
                  <h4 className="font-medium mt-4">Query Parameters</h4>
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
                  <h4 className="font-medium mt-4">Response</h4>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`{
  "status": "success",
  "data": {
    "papers": [
      {
        "id": "2307.09288",
        "title": "Llama 2: Open Foundation and Fine-Tuned Chat Models",
        "summary": "We introduce Llama 2, a collection of pretrained and fine-tuned large language models...",
        "authors": ["Hugo Touvron", "Louis Martin", "Kevin Stone", "..."],
        "published": "2023-07-18",
        "url": "https://arxiv.org/abs/2307.09288",
        "categories": ["cs.CL", "cs.AI", "cs.LG"]
      }
      // More papers...
    ],
    "total": 100,
    "limit": 20,
    "offset": 0
  }
}`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="examples" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>API Examples</CardTitle>
                <CardDescription>Code examples in various languages</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">JavaScript (Node.js)</h3>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`const fetch = require('node-fetch');

const API_KEY = 'your_api_key';
const BASE_URL = 'https://api.edgeaipulse.com/v1';

async function searchTools(query) {
  const response = await fetch(BASE_URL + '/tools?q=' + encodeURIComponent(query), {
    headers: {
      'Authorization': 'Bearer ' + API_KEY,
      'Content-Type': 'application/json'
    }
  });
  
  const data = await response.json();
  return data;
}

// Example usage
searchTools('stable diffusion')
  .then(data => console.log(data))
  .catch(error => console.error(error));`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Python</h3>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`import requests

API_KEY = 'your_api_key'
BASE_URL = 'https://api.edgeaipulse.com/v1'

def search_tools(query):
    headers = {
        'Authorization': 'Bearer ' + API_KEY,
        'Content-Type': 'application/json'
    }
    
    params = {
        'q': query
    }
    
    response = requests.get(BASE_URL + '/tools', headers=headers, params=params)
    response.raise_for_status()
    
    return response.json()

# Example usage
try:
    data = search_tools('stable diffusion')
    print(data)
except requests.exceptions.RequestException as e:
    print('Error:', e)`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-medium">cURL</h3>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`curl -X GET "https://api.edgeaipulse.com/v1/tools?q=stable%20diffusion" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json"`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </main>
  )
}

