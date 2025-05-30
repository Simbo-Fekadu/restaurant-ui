import { ClientImage } from "../components/client-image"
import { Hero } from "@workspace/ui/components/hero"
import { menuItems } from "../data/menu"
import { MenuItem } from "../components/menu-item"
import { ScrollButton } from "../components/scroll-button"
import { Navbar } from "../components/navbar"

export default function NoodlesAndVeggiePage() {
  const mainDishes = menuItems.filter((item) => item.category === "main-dishes")
  const appetizers = menuItems.filter((item) => item.category === "appetizers")
  const beverages = menuItems.filter((item) => item.category === "beverages")

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        title="Noodles & Veggie"
        tagline="Experience Authentic Asian Noodle Cuisine"
        image="/images/hero-noodles.jpg"
        imagePosition="right"
        className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-950 dark:to-orange-950"
      >
        <ScrollButton />
      </Hero>

      {/* Menu Section */}
      <section id="menu" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Our Menu</h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Signature Noodles</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mainDishes.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Appetizers</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {appetizers.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Beverages</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {beverages.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Since 2015, we have been bringing the authentic flavors of Asian
                noodle cuisine to our community. Our chefs combine traditional
                recipes with fresh, local ingredients to create an unforgettable
                dining experience.
              </p>
              <p className="text-muted-foreground">
                From Japanese Ramen to Thai Pad Thai, we take pride in serving
                dishes that honor the rich culinary heritage of Asia. Every bowl
                is prepared with care and served with the warmth of Asian
                hospitality.
              </p>
            </div>
            <div className="relative aspect-square">
              <ClientImage
                src="/images/about-noodles.jpg"
                alt="Traditional Asian noodle preparation"
                fill
                className="object-cover rounded-lg"
                priority
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
                  <ClientImage
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
                "The Ramen is absolutely amazing! The broth is rich and flavorful,
                and the noodles are perfectly cooked. A true taste of Japan!"
              </p>
            </div>
            <div className="bg-card rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12">
                  <ClientImage
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
                "The Pad Thai is my favorite! The perfect balance of sweet,
                sour, and savory flavors. The vegetables are always fresh and
                crisp."
              </p>
            </div>
            <div className="bg-card rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12">
                  <ClientImage
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
                "The vegetarian options are incredible! The Vegetable Stir Fry
                Noodles are my go-to dish. The staff is knowledgeable about the
                dishes and very welcoming."
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
                  456 Noodle Street<br />
                  Asian Quarter<br />
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
                  Email: info@noodlesandveggie.com
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