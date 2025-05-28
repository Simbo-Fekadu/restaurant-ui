"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui//button"
import { Badge } from "./ui/badge"
import { ArrowLeft, Award, Clock, Users, Heart, MapPin, Phone, Mail, Star, Cake, ChefHat } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "../../../packages/ui/components/language-provider"

export function AboutPage() {
  const { t } = useLanguage()

  const teamMembers = [
    {
      name: "Chef Sarah Alemayehu",
      role: "Head Baker & Founder",
      experience: "25+ years",
      specialty: "Wedding Cakes & French Pastries",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Chef Michael Tadesse",
      role: "Pastry Chef",
      experience: "15+ years",
      specialty: "Custom Decorations & Chocolate Work",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Chef Hanan Bekele",
      role: "Cake Designer",
      experience: "10+ years",
      specialty: "Fondant Art & Theme Cakes",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const achievements = [
    { year: "2023", title: "Best Bakery in Adama", organization: "Adama Business Awards" },
    { year: "2022", title: "Excellence in Customer Service", organization: "Ethiopian Hospitality Association" },
    { year: "2021", title: "Top Wedding Cake Designer", organization: "Oromia Wedding Expo" },
    { year: "2020", title: "Community Choice Award", organization: "Adama Chamber of Commerce" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-950/20 dark:to-orange-950/20">
        <div className="container px-4 py-8">
          <div className="flex items-center space-x-4 mb-8">
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <div>
              <h1 className="text-4xl font-bold">About Sweet Dreams Bakery</h1>
              <p className="text-muted-foreground text-lg">Creating sweet memories in Adama </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-12">
        {/* Our Story Section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 mb-16">
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">
                Our Story
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Baking Dreams in the Heart of Adama
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded  in the beautiful city of Adama, Sweet Dreams Bakery began as a small family business
                  with a simple dream: to bring joy to our community through exceptional cakes and pastries.
                </p>
                <p>
                  What started as a modest bakery on Haile Gebreselassie Street has grown into Adama's most beloved
                  destination for custom cakes, wedding celebrations, and daily fresh pastries. Our commitment to
                  quality ingredients and traditional baking techniques, combined with modern design innovations, has
                  made us the go-to choice for life's sweetest moments.
                </p>
                <p>
                  Today, we're proud to serve not just Adama, but customers from across the Oromia region who travel to
                  experience our signature cakes and warm Ethiopian hospitality.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent className="flex items-center space-x-3 p-4">
                  <Award className="h-8 w-8 text-pink-600" />
                  <div>
                    <h3 className="font-semibold">Award Winning</h3>
                    <p className="text-sm text-muted-foreground">Best Bakery in Adama 2023</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center space-x-3 p-4">
                  <Clock className="h-8 w-8 text-pink-600" />
                  <div>
                    <h3 className="font-semibold">Fresh Daily</h3>
                    <p className="text-sm text-muted-foreground">Made every morning</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center space-x-3 p-4">
                  <Users className="h-8 w-8 text-pink-600" />
                  <div>
                    <h3 className="font-semibold">15,000+ Happy</h3>
                    <p className="text-sm text-muted-foreground">Satisfied customers</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center space-x-3 p-4">
                  <Heart className="h-8 w-8 text-pink-600" />
                  <div>
                    <h3 className="font-semibold">Made with Love</h3>
                    <p className="text-sm text-muted-foreground">Every single cake</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-4">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Sweet Dreams Bakery in Adama"
              className="w-full h-64 object-cover rounded-xl"
            />
            <img
              src="/placeholder.svg?height=300&width=600"
              alt="Our baking process"
              className="w-full h-48 object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Location & Contact Info */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center space-x-2">
              <MapPin className="h-6 w-6 text-pink-600" />
              <span>Visit Us in Adama</span>
            </CardTitle>
            <CardDescription className="text-center">
              Located in the heart of Adama, easily accessible from all parts of the city
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Our Location</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-pink-600" />
                      <span>Haile Gebreselassie Street, Near Adama Stadium</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-pink-600" />
                      <span>Adama, Oromia Region, Ethiopia</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Contact Information</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-pink-600" />
                      <span>+251 22 111 2345</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-pink-600" />
                      <span>+251 911 123 456 (Mobile)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-pink-600" />
                      <span>orders@sweetdreamsbakery.et</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>6:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Public Holidays</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> We're open extended hours during Ethiopian holidays and wedding seasons!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Team */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              Our Team
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Meet Our Master Bakers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our talented team of experienced bakers and cake artists bring decades of expertise and passion to every
              creation
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-pink-600 font-medium mb-2">{member.role}</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>
                      <strong>Experience:</strong> {member.experience}
                    </p>
                    <p>
                      <strong>Specialty:</strong> {member.specialty}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center space-x-2">
              <Star className="h-6 w-6 text-yellow-500" />
              <span>Awards & Recognition</span>
            </CardTitle>
            <CardDescription className="text-center">
              Recognized for excellence in baking and customer service
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50">
                  <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">
                    {achievement.year}
                  </div>
                  <div>
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Our Values */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">What We Stand For</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="text-center">
                <Cake className="h-12 w-12 mx-auto mb-4 text-pink-600" />
                <CardTitle>Quality First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  We use only the finest ingredients, sourced locally when possible, to ensure every bite is perfect.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-pink-600" />
                <CardTitle>Community Love</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  We're proud to be part of the Adama community and support local events and celebrations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <ChefHat className="h-12 w-12 mx-auto mb-4 text-pink-600" />
                <CardTitle>Craftsmanship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Every cake is handcrafted with attention to detail, combining traditional techniques with modern
                  artistry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="text-center">
          <CardContent className="py-12">
            <h2 className="text-2xl font-bold mb-4">Ready to Create Sweet Memories?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're planning a wedding, birthday, or any special celebration, we're here to make your cake
              dreams come true. Visit us in Adama or get in touch today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700" asChild>
                <Link href="/custom-order">Order Custom Cake</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact-details">Visit Our Bakery</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
