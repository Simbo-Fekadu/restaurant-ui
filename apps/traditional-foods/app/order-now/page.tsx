"use client"

import { Button } from "@workspace/ui/components/button"
import { Card } from "@workspace/ui/components/card"
import { Navbar } from "../../components/navbar"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export default function OrderNowPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 py-16 mt-16">
        <Card className="max-w-2xl mx-auto p-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <CheckCircle2 className="w-16 h-16 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold">Order Received!</h1>
            <p className="text-muted-foreground text-lg">
              Thank you for your order. We have received your request and will begin preparing your authentic Ethiopian meal right away.
            </p>
            
            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <h2 className="text-xl font-semibold">What's Next?</h2>
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Your order is being prepared by our expert chefs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Estimated preparation time: 20-25 minutes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>You'll receive a confirmation call shortly</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 space-x-4">
              <Link href="/#menu">
                <Button variant="outline">Back to Menu</Button>
              </Link>
              <Link href="/">
                <Button>Return Home</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
} 