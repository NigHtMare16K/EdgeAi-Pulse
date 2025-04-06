import { Card, CardContent } from "@/components/ui/card"
import { BotIcon as Robot, Bookmark, Mail } from "lucide-react"

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="glass-effect">
        <CardContent className="p-6 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
            <Robot className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-muted-foreground mb-1">New AI Tools</h3>
            <p className="text-2xl font-bold">24</p>
            <p className="text-xs text-muted-foreground">This week</p>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-effect">
        <CardContent className="p-6 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
            <Bookmark className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-muted-foreground mb-1">Saved Tools</h3>
            <p className="text-2xl font-bold" id="saved-tools-count">
              5
            </p>
            <p className="text-xs text-muted-foreground">Total saved</p>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-effect">
        <CardContent className="p-6 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-muted-foreground mb-1">Digest</h3>
            <p className="text-2xl font-bold" id="digest-frequency">
              Weekly
            </p>
            <p className="text-xs text-muted-foreground">
              Next: <span id="next-digest-date">Friday, Apr 11</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

