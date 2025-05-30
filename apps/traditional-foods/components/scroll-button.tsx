"use client"

import { Button } from "@workspace/ui/components/button"

export function ScrollButton() {
  return (
    <Button
      size="lg"
      onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
    >
      View Menu
    </Button>
  )
} 