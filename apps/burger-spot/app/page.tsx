import Image from "next/image"
import { Hero } from "@workspace/ui/components/hero"
import { menuItems } from "../data/menu"
import { Navbar } from "../components/navbar"
import { MenuItem } from "../components/menu-item"
import { ScrollButton } from "../components/scroll-button"

export default function BurgerSpotPage() {
  const burgers = menuItems.filter((item) => item.category === "burgers")
  const sides = menuItems.filter((item) => item.category === "sides")
  const drinks = menuItems.filter((item) => item.category === "drinks")
  // const desserts = menuItems.filter((item) => item.category === "desserts")

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        title="Burger Spot"
        tagline="Crafting the Perfect Burger Experience"
        image="/images/hero-burger.jpg"
        imagePosition="right"
        className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-950 dark:to-red-950"
      >
        <ScrollButton />
      </Hero>

      {/* Menu Section */}
      <section id="menu" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Our Menu</h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Signature Burgers</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {burgers.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Sides</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sides.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Drinks</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {drinks.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          {/* <div>
            <h3 className="text-2xl font-semibold mb-6">Desserts</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {desserts.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2015, Burger Spot has been serving the community with
                gourmet burgers made from locally-sourced ingredients. Our commitment
                to quality and innovation has made us a favorite destination for
                burger enthusiasts.
              </p>
              <p className="text-muted-foreground">
                Every burger is crafted with care, featuring our signature blend of
                premium beef, fresh vegetables, and house-made sauces. We take pride
                in offering a unique dining experience that keeps our customers
                coming back for more.
              </p>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/images/about-burger.jpg"
                alt="Chef preparing a burger"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Customer Reviews</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-card rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src="/images/review-1.jpg"
                    alt="Sarah Johnson"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Best burgers in town! The Classic Burger is absolutely perfect.
                The meat is juicy, and the buns are always fresh. Highly recommend!"
              </p>
            </div>
            <div className="bg-card rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src="/images/review-2.jpg"
                    alt="Mike Thompson"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Mike Thompson</h3>
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Amazing quality and service. The Cheese Lover's Dream is a must-try!
                The combination of different cheeses is perfect."
              </p>
            </div>
            <div className="bg-card rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src="/images/review-3.jpg"
                    alt="Emily Davis"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Emily Davis</h3>
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Love their vegetarian options! The Veggie Delight is so flavorful
                that even my meat-loving friends enjoy it. Great atmosphere too!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Visit Us</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <p className="text-muted-foreground">
                  123 Burger Street<br />
                  Foodie District<br />
                  New York, NY 10001
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Thursday: 11:00 AM - 10:00 PM<br />
                  Friday - Saturday: 11:00 AM - 11:00 PM<br />
                  Sunday: 12:00 PM - 9:00 PM
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <p className="text-muted-foreground">
                  Phone: (555) 123-4567<br />
                  Email: info@burgerspot.com
                </p>
              </div>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564756836!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 