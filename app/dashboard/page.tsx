import { Suspense } from "react"
import DashboardStats from "@/components/dashboard/dashboard-stats"
import DashboardCharts from "@/components/dashboard/dashboard-charts"
import RecommendedTools from "@/components/dashboard/recommended-tools"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Welcome back, <span className="font-medium">User</span>!
        </p>
      </div>

      <Suspense fallback={<div className="h-24 animate-pulse bg-muted rounded-lg"></div>}>
        <DashboardStats />
      </Suspense>

      <Suspense fallback={<div className="h-80 animate-pulse bg-muted rounded-lg"></div>}>
        <DashboardCharts />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-muted rounded-lg"></div>}>
        <RecommendedTools />
      </Suspense>
    </div>
  )
}

