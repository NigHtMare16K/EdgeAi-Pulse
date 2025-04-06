import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar"
import Navbar from "@/components/navbar"
import FloatingShapes from "@/components/floating-shapes"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <FloatingShapes />
      <Navbar />

      <SidebarProvider>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-6">
            <DashboardSidebar />
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}

