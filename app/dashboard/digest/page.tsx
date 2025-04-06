import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import DigestPreview from "@/components/dashboard/digest-preview"

export default function DigestSettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Digest Settings</h1>
        <p className="text-muted-foreground">Customize your AI tools digest preferences</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Digest Preferences</CardTitle>
            <CardDescription>Configure how you want to receive AI tool updates</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-4">
                <Label>Digest Frequency</Label>
                <RadioGroup defaultValue="weekly">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="daily" id="daily" />
                    <Label htmlFor="daily">Daily</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="weekly" id="weekly" />
                    <Label htmlFor="weekly">Weekly</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly">Monthly</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label>Topics of Interest</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="topic-nlp" defaultChecked />
                    <Label htmlFor="topic-nlp">Natural Language Processing</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="topic-vision" defaultChecked />
                    <Label htmlFor="topic-vision">Computer Vision</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="topic-diffusion" defaultChecked />
                    <Label htmlFor="topic-diffusion">Diffusion Models</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="topic-rl" />
                    <Label htmlFor="topic-rl">Reinforcement Learning</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="topic-multimodal" />
                    <Label htmlFor="topic-multimodal">Multimodal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="topic-audio" />
                    <Label htmlFor="topic-audio">Audio Processing</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Sources</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="source-github" defaultChecked />
                    <Label htmlFor="source-github">GitHub</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="source-huggingface" defaultChecked />
                    <Label htmlFor="source-huggingface">Hugging Face</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="source-arxiv" defaultChecked />
                    <Label htmlFor="source-arxiv">ArXiv</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Digest Format</Label>
                <RadioGroup defaultValue="summary">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="summary" id="format-summary" />
                    <Label htmlFor="format-summary">Summary</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="detailed" id="format-detailed" />
                    <Label htmlFor="format-detailed">Detailed</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit">Save Preferences</Button>
            </form>
          </CardContent>
        </Card>

        <DigestPreview />
      </div>
    </div>
  )
}

