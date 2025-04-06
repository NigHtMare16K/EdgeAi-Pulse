"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Chart } from "@/components/ui/chart"

// Chart data
const trendsData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Tool Views",
      data: [1200, 1900, 3000, 5000, 8000, 12000],
      borderColor: "rgb(124, 58, 237)",
      backgroundColor: "rgba(124, 58, 237, 0.1)",
      tension: 0.4,
      fill: true,
    },
    {
      label: "Saved Tools",
      data: [200, 400, 600, 800, 1200, 1800],
      borderColor: "rgb(236, 72, 153)",
      backgroundColor: "rgba(236, 72, 153, 0.1)",
      tension: 0.4,
      fill: true,
    },
  ],
}

const categoryData = {
  labels: ["NLP", "Vision", "Diffusion", "Audio", "Multimodal", "RL"],
  datasets: [
    {
      label: "Distribution",
      data: [35, 25, 20, 10, 7, 3],
      backgroundColor: [
        "rgba(124, 58, 237, 0.7)",
        "rgba(236, 72, 153, 0.7)",
        "rgba(14, 165, 233, 0.7)",
        "rgba(16, 185, 129, 0.7)",
        "rgba(139, 92, 246, 0.7)",
        "rgba(245, 158, 11, 0.7)",
      ],
      borderColor: [
        "rgb(124, 58, 237)",
        "rgb(236, 72, 153)",
        "rgb(14, 165, 233)",
        "rgb(16, 185, 129)",
        "rgb(139, 92, 246)",
        "rgb(245, 158, 11)",
      ],
      borderWidth: 1,
    },
  ],
}

export default function DashboardCharts() {
  const [period, setPeriod] = useState("6m")

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="glass-effect">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-medium">AI Tools Trends</CardTitle>
          <Select defaultValue={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">1 Month</SelectItem>
              <SelectItem value="3m">3 Months</SelectItem>
              <SelectItem value="6m">6 Months</SelectItem>
              <SelectItem value="1y">1 Year</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <Chart
              type="line"
              data={trendsData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "top",
                  },
                  tooltip: {
                    mode: "index",
                    intersect: false,
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="glass-effect">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Category Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <Chart
              type="doughnut"
              data={categoryData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "right",
                  },
                },
                cutout: "60%",
              }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

