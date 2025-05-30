"use client"

import Link from "next/link"
import { useCart } from "../context/cart-context"

export function Navbar() {
  const { items } = useCart()
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Traditional Foods
          </Link>
          <div className="flex gap-8">
            <Link
              href="/#menu"
              className="text-sm font-medium hover:text-primary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Menu
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium hover:text-primary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              About
            </Link>
            <Link
              href="/#reviews"
              className="text-sm font-medium hover:text-primary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Reviews
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium hover:text-primary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contact
            </Link>
            <Link
              href="/cart"
              className="text-sm font-medium hover:text-primary relative"
            >
              Cart
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-4 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 