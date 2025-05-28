"use client"

import { Button } from "./ui/button"
import { useLanguage } from "./language-provider"
import { Languages } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "am" : "en")}
      className="flex items-center space-x-2"
    >
      <Languages className="h-4 w-4" />
      <span>{language === "en" ? "አማ" : "EN"}</span>
    </Button>
  )
}
