import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { MessageSquare, Camera, PaintbrushIcon as PaintBrush, Volume2, Layers, Bot } from "lucide-react"

export default function CategorySection() {
  const categories = [
    {
      name: "Natural Language Processing",
      icon: MessageSquare,
      description: "Text analysis, generation, and understanding tools",
      class: "nlp",
      links: [
        { name: "GPT-4", url: "https://openai.com/gpt-4" },
        { name: "Llama 2", url: "https://huggingface.co/meta-llama/Llama-2-70b" },
        { name: "Mistral", url: "https://huggingface.co/mistralai/Mistral-7B-v0.1" },
      ],
    },
    {
      name: "Computer Vision",
      icon: Camera,
      description: "Image and video processing solutions",
      class: "vision",
      links: [
        { name: "DALL-E 3", url: "https://openai.com/dall-e-3" },
        { name: "Stable Diffusion", url: "https://stability.ai/stable-diffusion" },
        { name: "DETR", url: "https://huggingface.co/facebook/detr-resnet-50" },
      ],
    },
    {
      name: "Diffusion Models",
      icon: PaintBrush,
      description: "Generative models for creating images and other content",
      class: "diffusion",
      links: [
        { name: "Midjourney", url: "https://midjourney.com" },
        { name: "SD 1.5", url: "https://huggingface.co/runwayml/stable-diffusion-v1-5" },
        { name: "SDXL", url: "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0" },
      ],
    },
    {
      name: "Audio Processing",
      icon: Volume2,
      description: "Speech recognition and audio analysis",
      class: "audio",
      links: [
        { name: "Whisper", url: "https://huggingface.co/openai/whisper-large-v3" },
        { name: "Wav2Vec2", url: "https://huggingface.co/facebook/wav2vec2-large-960h" },
        { name: "ElevenLabs", url: "https://elevenlabs.io" },
      ],
    },
    {
      name: "Multimodal",
      icon: Layers,
      description: "Models that work with multiple types of data",
      class: "multimodal",
      links: [
        { name: "Gemini", url: "https://deepmind.google/technologies/gemini/" },
        { name: "CLIP", url: "https://huggingface.co/openai/clip-vit-large-patch14" },
        { name: "Claude", url: "https://www.anthropic.com/claude" },
      ],
    },
    {
      name: "Reinforcement Learning",
      icon: Bot,
      description: "Models that learn through interaction with environments",
      class: "rl",
      links: [
        {
          name: "Decision Transformer",
          url: "https://huggingface.co/docs/transformers/model_doc/decision_transformer",
        },
        { name: "OpenAI Gym", url: "https://github.com/openai/gym" },
        { name: "DeepMind Acme", url: "https://github.com/deepmind/acme" },
      ],
    },
  ]

  return (
    <section id="categories" className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block">
            Browse by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="glass-effect hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className={`category-icon ${category.class}`}>
                  <category.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      className="inline-block px-3 py-1 bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

