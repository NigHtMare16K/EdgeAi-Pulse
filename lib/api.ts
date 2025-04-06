// API functions for fetching data from external sources

// Hugging Face API
export async function fetchHuggingFaceModels(query?: string, limit = 10) {
  try {
    const baseUrl = "https://huggingface.co/api/models"
    const params = new URLSearchParams()

    if (query) {
      params.append("search", query)
    }

    params.append("limit", limit.toString())
    params.append("sort", "downloads")

    const response = await fetch(`${baseUrl}?${params.toString()}`)

    if (!response.ok) {
      throw new Error("Failed to fetch models from Hugging Face")
    }

    const data = await response.json()

    return data.map((model: any) => ({
      id: model.id,
      name: model.id.split("/").pop(),
      company: model.id.includes("/") ? model.id.split("/")[0] : "Unknown",
      description: model.description || "No description available",
      downloads: model.downloads || 0,
      likes: model.likes || 0,
      tags: model.tags || [],
      avatar: `https://huggingface.co/${model.id}/resolve/main/thumbnail.png`,
      url: `https://huggingface.co/${model.id}`,
      source: "huggingface",
      badge: model.downloads > 1000000 ? "popular" : model.likes > 1000 ? "trending" : "new",
    }))
  } catch (error) {
    console.error("Error fetching Hugging Face models:", error)
    return []
  }
}

// GitHub API
export async function fetchGitHubRepos(query?: string, limit = 10) {
  try {
    const baseUrl = "https://api.github.com/search/repositories"
    const q = query ? `${query} topic:ai topic:machine-learning` : "topic:ai topic:machine-learning"
    const params = new URLSearchParams({
      q,
      sort: "stars",
      order: "desc",
      per_page: limit.toString(),
    })

    const response = await fetch(`${baseUrl}?${params.toString()}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch repositories from GitHub")
    }

    const data = await response.json()

    return data.items.map((repo: any) => ({
      id: repo.full_name,
      name: repo.name,
      company: repo.owner.login,
      description: repo.description || "No description available",
      downloads: repo.watchers_count,
      likes: repo.stargazers_count,
      tags: repo.topics || [],
      avatar: repo.owner.avatar_url,
      url: repo.html_url,
      source: "github",
      badge: repo.stargazers_count > 10000 ? "popular" : repo.stargazers_count > 5000 ? "trending" : "new",
    }))
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error)
    return []
  }
}

// ArXiv API
export async function fetchArxivPapers(query = "artificial intelligence", limit = 10) {
  try {
    const baseUrl = "https://export.arxiv.org/api/query"
    const params = new URLSearchParams({
      search_query: `all:${query}`,
      start: "0",
      max_results: limit.toString(),
      sortBy: "submittedDate",
      sortOrder: "descending",
    })

    const response = await fetch(`${baseUrl}?${params.toString()}`)

    if (!response.ok) {
      throw new Error("Failed to fetch papers from ArXiv")
    }

    const data = await response.text()
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(data, "text/xml")

    const entries = xmlDoc.getElementsByTagName("entry")
    const papers = []

    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i]

      const id = entry.getElementsByTagName("id")[0]?.textContent || ""
      const title = entry.getElementsByTagName("title")[0]?.textContent || ""
      const summary = entry.getElementsByTagName("summary")[0]?.textContent || ""
      const published = entry.getElementsByTagName("published")[0]?.textContent || ""

      const authors = []
      const authorElements = entry.getElementsByTagName("author")
      for (let j = 0; j < authorElements.length; j++) {
        const name = authorElements[j].getElementsByTagName("name")[0]?.textContent || ""
        authors.push(name)
      }

      papers.push({
        id: id.split("/").pop() || "",
        title,
        summary,
        authors,
        published: new Date(published).toLocaleDateString(),
        url: id,
      })
    }

    return papers
  } catch (error) {
    console.error("Error fetching ArXiv papers:", error)
    return []
  }
}

// Combined search function
export async function searchAITools(query?: string, limit = 20) {
  const [huggingFaceModels, githubRepos] = await Promise.all([
    fetchHuggingFaceModels(query, Math.floor(limit / 2)),
    fetchGitHubRepos(query, Math.floor(limit / 2)),
  ])

  return [...huggingFaceModels, ...githubRepos]
}

// Email sending function
export async function sendContactEmail(email: string, message: string) {
  try {
    // In a real app, you would send this to your backend
    // For now, we'll simulate a successful API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Sending email to rachit2115cool@gmail.com")
    console.log("From:", email)
    console.log("Message:", message)

    return { success: true }
  } catch (error) {
    console.error("Error sending contact email:", error)
    return { success: false, error }
  }
}

// Newsletter subscription
export async function subscribeToNewsletter(email: string) {
  try {
    // In a real app, you would send this to your backend
    // For now, we'll simulate a successful API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Subscribing to newsletter:", email)

    return { success: true }
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return { success: false, error }
  }
}

