"use client"

import { menuItems } from "../../data/menu"
import { MenuItem } from "../../components/menu-item"

export default function MenuPage() {
  const mainDishes = menuItems.filter((item) => item.category === "main-dishes")
  const appetizers = menuItems.filter((item) => item.category === "appetizers")
  const beverages = menuItems.filter((item) => item.category === "beverages")

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Menu</h1>
        <div className="space-y-16">
          <div>
            <h2 className="text-2xl font-semibold mb-8 text-center">Signature Noodles</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {mainDishes.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-8 text-center">Appetizers</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {appetizers.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-8 text-center">Beverages</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {beverages.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 