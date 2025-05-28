"use client"

import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { useLanguage } from "./language-provider"

export function Hero() {
  const { t } = useLanguage()

  const handleViewMenu = () => {
    const menuSection = document.getElementById("menu")
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-950/20 dark:to-orange-950/20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge variant="secondary" className="w-fit">
                {t("hero.badge")}
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{t("hero.title")}</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">{t("hero.description")}</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700" onClick={handleViewMenu}>
                {t("hero.viewMenu")}
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/custom-order">{t("hero.customOrders")}</a>
              </Button>
            </div>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">


        <img
  src="/images/Beautifulweddingcake.png"
  alt="Beautiful wedding cake"
  className="h-full w-full object-cover"
/>


          </div>
        </div>
      </div>
    </section>
  )
}
