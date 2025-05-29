"use client"

import { useState } from "react"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/cards"
import { Badge } from "@workspace/ui/components/badge"
import { Separator } from "@workspace/ui/components/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@workspace/ui/components/sheet"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"
import { ShoppingCart, Plus, Minus, Coffee, Star, Clock, MapPin } from "lucide-react"
import Image from "next/image"

interface CoffeeItem {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
  prepTime: string
}

interface CartItem extends CoffeeItem {
  quantity: number
  size: string
  customizations: string
}

const coffeeMenu: CoffeeItem[] = [
  {
    id: 1,
    name: "Espresso",
    description: "Rich and bold single shot of espresso",
    price: 2.5,
    image: "/placeholder.svg?height=200&width=200",
    category: "Hot Coffee",
    rating: 4.8,
    prepTime: "2 min",
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Espresso with steamed milk and foam",
    price: 4.25,
    image: "/placeholder.svg?height=200&width=200",
    category: "Hot Coffee",
    rating: 4.9,
    prepTime: "4 min",
  },
  {
    id: 3,
    name: "Latte",
    description: "Smooth espresso with steamed milk",
    price: 4.75,
    image: "/placeholder.svg?height=200&width=200",
    category: "Hot Coffee",
    rating: 4.7,
    prepTime: "4 min",
  },
  {
    id: 4,
    name: "Americano",
    description: "Espresso with hot water",
    price: 3.25,
    image: "/placeholder.svg?height=200&width=200",
    category: "Hot Coffee",
    rating: 4.6,
    prepTime: "3 min",
  },
  {
    id: 5,
    name: "Iced Coffee",
    description: "Cold brew coffee served over ice",
    price: 3.75,
    image: "/placeholder.svg?height=200&width=200",
    category: "Cold Coffee",
    rating: 4.5,
    prepTime: "2 min",
  },
  {
    id: 6,
    name: "Frappuccino",
    description: "Blended coffee with ice and whipped cream",
    price: 5.25,
    image: "/placeholder.svg?height=200&width=200",
    category: "Cold Coffee",
    rating: 4.8,
    prepTime: "5 min",
  },
  {
    id: 7,
    name: "Mocha",
    description: "Espresso with chocolate and steamed milk",
    price: 5.0,
    image: "/placeholder.svg?height=200&width=200",
    category: "Specialty",
    rating: 4.9,
    prepTime: "5 min",
  },
  {
    id: 8,
    name: "Macchiato",
    description: "Espresso with a dollop of foamed milk",
    price: 4.5,
    image: "/placeholder.svg?height=200&width=200",
    category: "Specialty",
    rating: 4.7,
    prepTime: "3 min",
  },
]

export default function CoffeeOrderApp() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    notes: "",
  })

  const categories = ["All", "Hot Coffee", "Cold Coffee", "Specialty"]

  const addToCart = (item: CoffeeItem, size = "Medium", customizations = "") => {
    const existingItem = cart.find(
      (cartItem) => cartItem.id === item.id && cartItem.size === size && cartItem.customizations === customizations,
    )

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id && cartItem.size === size && cartItem.customizations === customizations
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      )
    } else {
      setCart([...cart, { ...item, quantity: 1, size, customizations }])
    }
  }

  const removeFromCart = (id: number, size: string, customizations: string) => {
    setCart(cart.filter((item) => !(item.id === id && item.size === size && item.customizations === customizations)))
  }

  const updateQuantity = (id: number, size: string, customizations: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(id, size, customizations)
    } else {
      setCart(
        cart.map((item) =>
          item.id === id && item.size === size && item.customizations === customizations
            ? { ...item, quantity: newQuantity }
            : item,
        ),
      )
    }
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const sizeMultiplier = item.size === "Large" ? 1.5 : item.size === "Small" ? 0.8 : 1
      return total + item.price * sizeMultiplier * item.quantity
    }, 0)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const filteredMenu =
    selectedCategory === "All" ? coffeeMenu : coffeeMenu.filter((item) => item.category === selectedCategory)

  const placeOrder = () => {
    if (cart.length === 0) return

    // Here you would typically send the order to your backend
    alert(`Order placed successfully! Total: $${getTotalPrice().toFixed(2)}`)
    setCart([])
    setCustomerInfo({ name: "", phone: "", notes: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Coffee className="h-8 w-8 text-amber-600" />
              <h1 className="text-2xl font-bold text-gray-900">BrewMaster Café</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>Downtown Location</span>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="relative">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Cart
                    {getTotalItems() > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                        {getTotalItems()}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[400px] sm:w-[540px]">
                  <SheetHeader>
                    <SheetTitle>Your Order</SheetTitle>
                    <SheetDescription>Review your items and place your order</SheetDescription>
                  </SheetHeader>
                  <div className="mt-6 space-y-4">
                    {cart.length === 0 ? (
                      <p className="text-center text-gray-500 py-8">Your cart is empty</p>
                    ) : (
                      <>
                        <div className="space-y-4 max-h-60 overflow-y-auto">
                          {cart.map((item, index) => (
                            <div
                              key={`${item.id}-${item.size}-${index}`}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                              <div className="flex-1">
                                <h4 className="font-medium">{item.name}</h4>
                                <p className="text-sm text-gray-600">Size: {item.size}</p>
                                {item.customizations && <p className="text-xs text-gray-500">{item.customizations}</p>}
                                <p className="text-sm font-medium text-amber-600">
                                  $
                                  {(
                                    item.price * (item.size === "Large" ? 1.5 : item.size === "Small" ? 0.8 : 1)
                                  ).toFixed(2)}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() =>
                                    updateQuantity(item.id, item.size, item.customizations, item.quantity - 1)
                                  }
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() =>
                                    updateQuantity(item.id, item.size, item.customizations, item.quantity + 1)
                                  }
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>

                        <Separator />

                        <div className="space-y-4">
                          <div className="grid gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="name">Name</Label>
                              <Input
                                id="name"
                                placeholder="Your name"
                                value={customerInfo.name}
                                onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="phone">Phone</Label>
                              <Input
                                id="phone"
                                placeholder="Your phone number"
                                value={customerInfo.phone}
                                onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="notes">Special Instructions</Label>
                              <Textarea
                                id="notes"
                                placeholder="Any special requests..."
                                value={customerInfo.notes}
                                onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                              />
                            </div>
                          </div>

                          <div className="flex justify-between items-center text-lg font-bold">
                            <span>Total:</span>
                            <span className="text-amber-600">${getTotalPrice().toFixed(2)}</span>
                          </div>

                          <Button
                            className="w-full"
                            onClick={placeOrder}
                            disabled={cart.length === 0 || !customerInfo.name || !customerInfo.phone}
                          >
                            Place Order
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Freshly Brewed Coffee</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Order your favorite coffee and pick it up in minutes</p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Ready in 2-5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              <span>4.8/5 Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Menu</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our carefully crafted selection of premium coffee drinks, made with the finest beans and expert
              brewing techniques.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Coffee Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMenu.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <Badge variant="secondary">{item.category}</Badge>
                  </div>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{item.prepTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-amber-600">${item.price.toFixed(2)}</span>
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline" onClick={() => addToCart(item, "Small")}>
                        S
                      </Button>
                      <Button size="sm" onClick={() => addToCart(item, "Medium")}>
                        M
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => addToCart(item, "Large")}>
                        L
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="h-6 w-6 text-amber-400" />
                <h4 className="text-lg font-bold">BrewMaster Café</h4>
              </div>
              <p className="text-gray-400">
                Serving the finest coffee since 2020. Quality beans, expert brewing, exceptional service.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Hours</h5>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                <p>Saturday: 7:00 AM - 9:00 PM</p>
                <p>Sunday: 7:00 AM - 7:00 PM</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <div className="space-y-2 text-gray-400">
                <p>📍 123 Coffee Street, Downtown</p>
                <p>📞 (555) 123-BREW</p>
                <p>✉️ hello@brewmaster.com</p>
              </div>
            </div>
          </div>
          <Separator className="my-6 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 BrewMaster Café. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
