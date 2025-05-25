"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { useCart } from "../../context/cart-context"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, total } = useCart()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-8">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">
          Looks like you haven't added any items to your cart yet.
        </p>
        <Link href="/#menu">
          <Button>View Menu</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 border-b py-4 items-start"
            >
              <div className="relative w-24 h-24">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-2 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">
                  ${item.price.toFixed(2)} each
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:sticky lg:top-24 bg-card rounded-lg p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (8%)</span>
              <span>${(total * 0.08).toFixed(2)}</span>
            </div>
            <div className="border-t pt-2 mt-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${(total * 1.08).toFixed(2)}</span>
              </div>
            </div>
          </div>
          <Button className="w-full mt-6">Proceed to Checkout</Button>
        </div>
      </div>
    </div>
  )
} 