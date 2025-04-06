"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileOutputIcon as FileExport, UserX } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useToast } from "@/components/ui/use-toast"

export default function AccountActions() {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const { toast } = useToast()

  const handleExportData = () => {
    // Mock user data
    const userData = {
      id: "user123",
      username: "johndoe",
      email: "john@example.com",
      preferences: {
        digestFrequency: "weekly",
        topics: ["nlp", "vision", "diffusion"],
        sources: ["github", "huggingface", "arxiv"],
      },
      savedTools: ["meta-llama/Llama-2-70b", "openai/whisper-large-v3", "microsoft/phi-2"],
    }

    // Create a blob and download link
    const blob = new Blob([JSON.stringify(userData, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `edgeai_user_data_${userData.username}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast({
      title: "Data exported successfully",
      description: "Your data has been downloaded as a JSON file.",
    })
  }

  const handleDeleteAccount = () => {
    // In a real app, you would send a request to your backend
    console.log("Account deleted")

    // Show success message
    toast({
      title: "Account deleted",
      description: "Your account has been permanently deleted.",
    })

    // Close dialog
    setShowDeleteConfirm(false)
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Account Actions</CardTitle>
          <CardDescription>Manage your account data and settings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" onClick={handleExportData} className="flex items-center gap-2">
              <FileExport className="h-4 w-4" />
              <span>Export My Data</span>
            </Button>
            <Button
              variant="destructive"
              onClick={() => setShowDeleteConfirm(true)}
              className="flex items-center gap-2"
            >
              <UserX className="h-4 w-4" />
              <span>Delete Account</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteAccount}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete Account
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

