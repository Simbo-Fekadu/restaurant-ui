"use client"

import { Button } from "./ui/button"
import { ShoppingCart, Phone } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { LanguageToggle } from "./language-toggle"
import { NavigationClient } from "./navigation-client"

export function Navigation() {
  const handleOrderNow = () => {
    // Scroll to menu section on homepage
    const menuSection = document.getElementById("menu")
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" })
    } else {
      // If not on homepage, redirect to homepage with menu anchor
      window.location.href = "/#menu"
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <NavigationClient />

        <div className="flex items-center space-x-4">
          <LanguageToggle />
          <ThemeToggle />
          <Button variant="outline" size="sm" onClick={handleOrderNow}>
            <Phone className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Order Now</span>
          </Button>
          <Button size="sm" asChild>
            <a href="/cart">
              <ShoppingCart className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Cart</span>
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
