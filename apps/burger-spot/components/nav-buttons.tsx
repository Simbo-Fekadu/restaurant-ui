"use client"

import { Button } from "@workspace/ui/components/button"

export function NavButtons() {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex gap-4">
      <Button size="lg" onClick={scrollToMenu}>
        View Menu
      </Button>
      <Button size="lg" variant="outline">
        Make Reservation
      </Button>
    </div>
  )
} 