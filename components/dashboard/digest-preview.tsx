import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DigestPreview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Digest Preview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-4">Weekly AI Digest - April 11, 2025</h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-primary font-medium mb-2">Top New Models</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>GPT-4 Turbo - Advanced language model with improved context understanding</li>
                <li>DALL-E 3 - State-of-the-art image generation with enhanced artistic capabilities</li>
                <li>Stable Diffusion XL - Advanced image generation with improved quality and control</li>
              </ul>
            </div>

            <div>
              <h4 className="text-primary font-medium mb-2">Trending Research Papers</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Efficient Training of Large Language Models: A Comprehensive Survey</li>
                <li>Multimodal Foundation Models: From Specialists to General-Purpose Assistants</li>
              </ul>
            </div>

            <div>
              <h4 className="text-primary font-medium mb-2">GitHub Highlights</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>OpenAI/whisper-large-v3 - 850K+ downloads this month</li>
                <li>Meta/llama-recipes - New fine-tuning examples for Llama 2</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

