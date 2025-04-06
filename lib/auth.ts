// Simple authentication functions
// In a real app, you would use a proper auth provider like NextAuth.js

import { create } from "zustand"
import { persist } from "zustand/middleware"

// Types
export interface User {
  id: string
  username: string
  email: string
}

interface AuthState {
  user: User | null
  isLoggedIn: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signup: (username: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
}

// Mock user database
const mockUsers: Record<string, { id: string; username: string; email: string; password: string }> = {
  "user@example.com": {
    id: "1",
    username: "user",
    email: "user@example.com",
    password: "password123",
  },
}

// Auth store
export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,

      login: async (email: string, password: string) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const user = mockUsers[email]

        if (!user) {
          return { success: false, error: "User not found" }
        }

        if (user.password !== password) {
          return { success: false, error: "Invalid password" }
        }

        const { password: _, ...userWithoutPassword } = user

        set({ user: userWithoutPassword, isLoggedIn: true })

        return { success: true }
      },

      signup: async (username: string, email: string, password: string) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        if (mockUsers[email]) {
          return { success: false, error: "Email already in use" }
        }

        const newUser = {
          id: Date.now().toString(),
          username,
          email,
          password,
        }

        mockUsers[email] = newUser

        const { password: _, ...userWithoutPassword } = newUser

        set({ user: userWithoutPassword, isLoggedIn: true })

        return { success: true }
      },

      logout: () => {
        set({ user: null, isLoggedIn: false })
      },
    }),
    {
      name: "auth-storage",
    },
  ),
)

