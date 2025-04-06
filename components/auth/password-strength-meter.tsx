"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { Check, X } from "lucide-react"

export default function PasswordStrengthMeter() {
  const [password, setPassword] = useState("")
  const [strength, setStrength] = useState(0)

  // Update password when input changes
  useEffect(() => {
    const passwordInput = document.getElementById("password") as HTMLInputElement

    const handlePasswordChange = () => {
      setPassword(passwordInput.value)
    }

    if (passwordInput) {
      passwordInput.addEventListener("input", handlePasswordChange)

      return () => {
        passwordInput.removeEventListener("input", handlePasswordChange)
      }
    }
  }, [])

  // Calculate password strength
  useEffect(() => {
    let score = 0

    // Check length
    if (password.length >= 8) score += 25

    // Check uppercase
    if (/[A-Z]/.test(password)) score += 25

    // Check lowercase
    if (/[a-z]/.test(password)) score += 25

    // Check number
    if (/[0-9]/.test(password)) score += 25

    setStrength(score)
  }, [password])

  // Get color based on strength
  const getStrengthColor = () => {
    if (strength < 50) return "bg-destructive"
    if (strength < 75) return "bg-amber-500"
    return "bg-emerald-500"
  }

  return (
    <div className="space-y-2 mt-1">
      <Progress value={strength} className="h-1" indicatorClassName={getStrengthColor()} />

      <div className="text-xs text-muted-foreground">
        <p>Password must contain:</p>
        <ul className="grid grid-cols-2 gap-1 mt-1">
          <li className="flex items-center gap-1">
            {password.length >= 8 ? (
              <Check className="h-3 w-3 text-emerald-500" />
            ) : (
              <X className="h-3 w-3 text-muted-foreground" />
            )}
            <span className={password.length >= 8 ? "text-emerald-500" : ""}>At least 8 characters</span>
          </li>
          <li className="flex items-center gap-1">
            {/[A-Z]/.test(password) ? (
              <Check className="h-3 w-3 text-emerald-500" />
            ) : (
              <X className="h-3 w-3 text-muted-foreground" />
            )}
            <span className={/[A-Z]/.test(password) ? "text-emerald-500" : ""}>Uppercase letter</span>
          </li>
          <li className="flex items-center gap-1">
            {/[a-z]/.test(password) ? (
              <Check className="h-3 w-3 text-emerald-500" />
            ) : (
              <X className="h-3 w-3 text-muted-foreground" />
            )}
            <span className={/[a-z]/.test(password) ? "text-emerald-500" : ""}>Lowercase letter</span>
          </li>
          <li className="flex items-center gap-1">
            {/[0-9]/.test(password) ? (
              <Check className="h-3 w-3 text-emerald-500" />
            ) : (
              <X className="h-3 w-3 text-muted-foreground" />
            )}
            <span className={/[0-9]/.test(password) ? "text-emerald-500" : ""}>Number</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

