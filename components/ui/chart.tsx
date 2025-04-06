import type React from "react"
;('"use client')

import { Chart as ChartJS, registerables } from "chart.js"
import { useRef, useEffect } from "react"

ChartJS.register(...registerables)

export function Chart({ type, data, options }: { type: any; data: any; options: any }) {
  const chartRef = useRef(null)

  useEffect(() => {
    const chartCanvas = chartRef.current?.getContext("2d")
    if (!chartCanvas) return

    const chartInstance = new ChartJS(chartCanvas, {
      type: type,
      data: data,
      options: options,
    })

    return () => {
      chartInstance.destroy()
    }
  }, [type, data, options])

  return <canvas ref={chartRef} />
}

export const ChartContainer = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

export const ChartTooltip = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

export const ChartTooltipContent = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

export const ChartLegend = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

export const ChartLegendContent = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

export const ChartStyle = () => {
  return null
}

