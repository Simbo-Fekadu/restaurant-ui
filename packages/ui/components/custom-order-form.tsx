"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { ArrowLeft, Mail, Cake, Heart, Star, Calendar } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "./language-provider"

export function CustomOrderForm() {
  const { t } = useLanguage()

  const handleCustomOrderEmail = () => {
    const subject = "Custom Cake Order Request - Sweet Dreams Bakery"
    const body = `Hello Sweet Dreams Bakery,%0D%0A%0D%0AI would like to place a CUSTOM cake order with the following details:%0D%0A%0D%0A=== CAKE DETAILS ===%0D%0ACake Type: (Wedding/Birthday/Anniversary/Other)%0D%0ASize: (Small/Medium/Large/Multi-tier)%0D%0ANumber of Servings: %0D%0AShape: (Round/Square/Heart/Custom)%0D%0A%0D%0A=== FLAVORS ===%0D%0ACake Flavor: (Chocolate/Vanilla/Red Velvet/Lemon/Strawberry/Other)%0D%0AFilling: (Buttercream/Chocolate Ganache/Fruit/Cream Cheese/Other)%0D%0AFrosting: (Buttercream/Fondant/Cream Cheese/Whipped Cream)%0D%0A%0D%0A=== DESIGN & DECORATIONS ===%0D%0AColor Scheme: %0D%0ATheme: %0D%0AText/Message: %0D%0ASpecial Decorations: (Flowers/Figures/Edible Images/Other)%0D%0A%0D%0A=== EVENT DETAILS ===%0D%0AEvent Date: %0D%0AEvent Type: %0D%0ADelivery Date Needed: %0D%0ADelivery Time: %0D%0ADelivery Address: %0D%0A%0D%0A=== BUDGET & PREFERENCES ===%0D%0ABudget Range: %0D%0ADietary Restrictions: (Gluten-free/Sugar-free/Vegan/Nut-free/Other)%0D%0AAllergies: %0D%0A%0D%0A=== ADDITIONAL INFORMATION ===%0D%0AInspiration/Reference: (Please attach photos if available)%0D%0ASpecial Requests: %0D%0AQuestions: %0D%0A%0D%0A=== CONTACT INFORMATION ===%0D%0AName: %0D%0APhone: %0D%0AEmail: %0D%0APreferred Contact Method: %0D%0A%0D%0APlease contact me to discuss the details and provide a quote.%0D%0A%0D%0AThank you!%0D%0ABest regards`

    const recipient = "custom@sweetdreamsbakery.com"
    window.open(`mailto:${recipient}?subject=${subject}&body=${body}`, "_self")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-950/20 dark:to-orange-950/20">
      <div className="container px-4 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Button variant="outline" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Custom Cake Order</h1>
            <p className="text-muted-foreground">Design your perfect custom cake</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <Card className="mb-8 overflow-hidden">
            <div className="relative">
              <img
                src="/placeholder.svg?height=300&width=800"
                alt="Custom cake designs"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-3xl font-bold mb-2">Bring Your Dream Cake to Life</h2>
                  <p className="text-lg">From concept to creation, we make it perfect</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Custom Order Options */}
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {/* Email Form Option */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={handleCustomOrderEmail}>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-blue-100 dark:bg-blue-900/20 rounded-full w-fit group-hover:bg-blue-200 dark:group-hover:bg-blue-900/30 transition-colors">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <Badge variant="secondary" className="w-fit mx-auto mb-2">
                  Detailed Request
                </Badge>
                <CardTitle className="text-xl">Email Custom Order Form</CardTitle>
                <CardDescription>Send us a detailed email with all your custom cake specifications</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>✓ Comprehensive order form template</li>
                  <li>✓ All design and flavor options covered</li>
                  <li>✓ Budget and dietary requirements</li>
                  <li>✓ Attach reference images easily</li>
                  <li>✓ Direct communication with our designers</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleCustomOrderEmail}>
                  <Mail className="h-4 w-4 mr-2" />
                  Open Email Form
                </Button>
              </CardContent>
            </Card>

            {/* Consultation Option */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-pink-100 dark:bg-pink-900/20 rounded-full w-fit">
                  <Cake className="h-8 w-8 text-pink-600" />
                </div>
                <Badge variant="secondary" className="w-fit mx-auto mb-2">
                  Personal Consultation
                </Badge>
                <CardTitle className="text-xl">Schedule a Consultation</CardTitle>
                <CardDescription>Book a personal meeting to discuss your custom cake in detail</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>✓ One-on-one design consultation</li>
                  <li>✓ Taste testing available</li>
                  <li>✓ 3D design visualization</li>
                  <li>✓ Immediate feedback and adjustments</li>
                  <li>✓ Professional design advice</li>
                </ul>
                <Button className="w-full bg-pink-600 hover:bg-pink-700" asChild>
                  <Link href="/contact-details">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Consultation
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Custom Cake Categories */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center">Popular Custom Cake Categories</CardTitle>
              <CardDescription className="text-center">
                Get inspired by our most requested custom designs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <Heart className="h-8 w-8 mx-auto mb-2 text-pink-600" />
                  <h3 className="font-semibold">Wedding Cakes</h3>
                  <p className="text-sm text-muted-foreground">Multi-tier, elegant designs</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <Star className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
                  <h3 className="font-semibold">Birthday Cakes</h3>
                  <p className="text-sm text-muted-foreground">Themed, character designs</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <Cake className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <h3 className="font-semibold">Corporate Events</h3>
                  <p className="text-sm text-muted-foreground">Logo cakes, celebrations</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <Calendar className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <h3 className="font-semibold">Special Occasions</h3>
                  <p className="text-sm text-muted-foreground">Anniversaries, graduations</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Process Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Our Custom Cake Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Design & Quote</h3>
                  <p className="text-sm text-muted-foreground">
                    Share your vision with us and receive a detailed quote within 24 hours
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Confirmation</h3>
                  <p className="text-sm text-muted-foreground">
                    Approve the design and place your order with a 50% deposit
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Creation & Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    We craft your cake with love and deliver it fresh on your special day
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                <h4 className="font-semibold text-center mb-2">💡 Custom Order Tips</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Order at least 1-2 weeks in advance for complex designs</li>
                  <li>• Wedding cakes require 3-4 weeks advance notice</li>
                  <li>• Include reference photos for best results</li>
                  <li>• Mention any dietary restrictions or allergies</li>
                  <li>• We offer free consultations for orders over $150</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
