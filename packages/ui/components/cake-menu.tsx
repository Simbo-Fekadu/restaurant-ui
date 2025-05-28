"use client"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Star, Heart, ShoppingCart } from "lucide-react"
import { useLanguage } from "./language-provider"

const cakes = [
  {
    id: 1,
    nameKey: "cake.chocolate.name",
    descriptionKey: "cake.chocolate.description",
    price: 45,
    image: "/images/ChocolateCake.png?height=300&width=400",
    categoryKey: "category.birthday",
    rating: 4.9,
    popular: true,
  },
  {
    id: 2,
    nameKey: "cake.vanilla.name",
    descriptionKey: "cake.vanilla.description",
    price: 120,
    image: "/images/Vanilla BeanWeddingCake.png?height=300&width=400",
    categoryKey: "category.wedding",
    rating: 5.0,
    popular: false,
  },
  {
    id: 3,
    nameKey: "cake.redVelvet.name",
    descriptionKey: "cake.redVelvet.description",
    price: 38,
    image: "/images/RedVelvetDelight.png?height=300&width=400",
    categoryKey: "category.birthday",
    rating: 4.8,
    popular: true,
  },
  {
    id: 4,
    nameKey: "cake.lemon.name",
    descriptionKey: "cake.lemon.description",
    price: 42,
   image: "/images/LemonRaspberry Cake.png?height=300&width=400",
    categoryKey: "category.special",
    rating: 4.7,
    popular: false,
  },
  {
    id: 5,
    nameKey: "cake.strawberry.name",
    descriptionKey: "cake.strawberry.description",
    price: 35,
  image: "/images/StrawberryShortcake.png?height=300&width=400",
    categoryKey: "category.birthday",
    rating: 4.6,
    popular: true,
  },
  {
    id: 6,
    nameKey: "cake.tiramisu.name",
    descriptionKey: "cake.tiramisu.description",
    price: 48,
    image: "/images/TiramisuCake.png?height=300&width=400",
    categoryKey: "category.special",
    rating: 4.9,
    popular: false,
  },
]

export function CakeMenu() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-background" id="menu">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("cakeMenu.title")}</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">{t("cakeMenu.subtitle")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cakes.map((cake) => (
            <Card key={cake.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={cake.image || "/placeholder.svg"}
                  alt={t(cake.nameKey)}
                  className="h-48 w-full object-cover"
                />
                {cake.popular && <Badge className="absolute top-2 left-2 bg-pink-600">{t("cakeMenu.popular")}</Badge>}
                <Button variant="secondary" size="icon" className="absolute top-2 right-2">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{t(cake.categoryKey)}</Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-muted-foreground">{cake.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl">{t(cake.nameKey)}</CardTitle>
                <CardDescription>{t(cake.descriptionKey)}</CardDescription>
              </CardHeader>

              <CardFooter className="flex items-center justify-between">
                <div className="text-2xl font-bold text-pink-600">${cake.price}</div>
                <Button className="bg-pink-600 hover:bg-pink-700">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {t("cakeMenu.addToCart")}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            {t("cakeMenu.viewFullMenu")}
          </Button>
        </div>
      </div>
    </section>
  )
}
