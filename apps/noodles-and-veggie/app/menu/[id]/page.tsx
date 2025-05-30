"use client"

import { ClientImage } from "../../../components/client-image"
import { menuItems } from "../../../data/menu"
import { notFound } from "next/navigation"
import Link from "next/link"
import { useCart } from "../../../context/cart-context"
import { Button } from "@workspace/ui/components/button"
import { useRouter } from "next/navigation"

export default function MenuItemPage({ params }: { params: { id: string } }) {
  const item = menuItems.find((item) => item.id === params.id)
  const { addToCart } = useCart()
  const router = useRouter()

  if (!item) {
    notFound()
  }

  const handleOrderNow = () => {
    addToCart(item)
    router.push('/order-now')
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <ClientImage
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
                <p className="text-2xl font-semibold text-primary">
                  ETB {item.price.toFixed(2)}
                </p>
              </div>
              <p className="text-muted-foreground text-lg">
                {item.description}
              </p>
              {item.dietary && (
                <div className="flex flex-wrap gap-2">
                  {item.dietary.vegetarian && (
                    <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-900/20 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-300">
                      Vegetarian
                    </span>
                  )}
                  {item.dietary.vegan && (
                    <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/20 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                      Vegan
                    </span>
                  )}
                  {item.dietary.glutenFree && (
                    <span className="inline-flex items-center rounded-full bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 text-xs font-medium text-yellow-700 dark:text-yellow-300">
                      Gluten Free
                    </span>
                  )}
                </div>
              )}
              <div className="pt-6 flex gap-4">
                <Link href="/" className="flex-1 md:flex-none">
                  <Button variant="outline" className="w-full md:w-auto">
                    Back to Home
                  </Button>
                </Link>
                <Button 
                  className="flex-1 md:w-auto bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={handleOrderNow}
                >
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 