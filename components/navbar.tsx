"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Menu, User, Settings, LogOut } from "lucide-react"
import PricingDialog from "./pricing-dialog"
import { useAuth } from "@/lib/auth"

export default function Navbar() {
  const pathname = usePathname()
  const [isPricingOpen, setIsPricingOpen] = useState(false)
  const { user, isLoggedIn, logout } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-primary rounded-md"></div>
              <div className="absolute inset-0 border-2 border-primary rounded-md transform rotate-45"></div>
            </div>
            <span>Edge AI Pulse</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-foreground/60"
            }`}
          >
            Home
          </Link>
          <Link
            href="/#categories"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-primary"
          >
            Categories
          </Link>
          <Link
            href="/#trending"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-primary"
          >
            Trending
          </Link>
          <Link href="/search" className="text-sm font-medium text-foreground/60 transition-colors hover:text-primary">
            Search
          </Link>
          <Link
            href="/research"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-primary"
          >
            Research
          </Link>
          <Button
            variant="ghost"
            onClick={() => setIsPricingOpen(true)}
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-primary"
          >
            Pricing
          </Button>
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>{user?.username?.charAt(0) || "U"}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{user?.username || "User"}</p>
                    <p className="text-xs text-muted-foreground">{user?.email || "user@example.com"}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">
                    <User className="mr-2 h-4 w-4" />
                    <span>My Account</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/saved">
                    <User className="mr-2 h-4 w-4" />
                    <span>Saved Tools</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/profile">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Sign in</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign up</Link>
              </Button>
            </div>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 py-6">
                <div className="flex flex-col space-y-3">
                  <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                    Home
                  </Link>
                  <Link href="/#categories" className="text-sm font-medium transition-colors hover:text-primary">
                    Categories
                  </Link>
                  <Link href="/#trending" className="text-sm font-medium transition-colors hover:text-primary">
                    Trending
                  </Link>
                  <Link href="/search" className="text-sm font-medium transition-colors hover:text-primary">
                    Search
                  </Link>
                  <Link href="/research" className="text-sm font-medium transition-colors hover:text-primary">
                    Research
                  </Link>
                  <Button
                    variant="ghost"
                    onClick={() => setIsPricingOpen(true)}
                    className="justify-start px-0 text-sm font-medium transition-colors hover:text-primary"
                  >
                    Pricing
                  </Button>
                </div>
                <div className="flex flex-col gap-2">
                  {!isLoggedIn ? (
                    <>
                      <Button variant="outline" asChild>
                        <Link href="/login">Sign in</Link>
                      </Button>
                      <Button asChild>
                        <Link href="/signup">Sign up</Link>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" asChild>
                        <Link href="/dashboard">My Account</Link>
                      </Button>
                      <Button variant="outline" onClick={logout}>
                        Log out
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <PricingDialog open={isPricingOpen} onOpenChange={setIsPricingOpen} />
    </header>
  )
}

