/*import { Button } from "@workspace/ui/components/button"
import { Hero } from "@workspace/ui/components/hero"

export default function CakePage() {
  return (
    <main>
      <Hero
        title="Cake Shop"
        tagline="Artisanal Cakes & Desserts"
        image="/images/hero-cake.jpg"
        imagePosition="right"
      >
        <div className="flex gap-4">
          <Button size="lg">Order Now</Button>
          <Button size="lg" variant="outline">View Menu</Button>
        </div>
      </Hero>
    </main>
  )
} */



  import { CakeMenu } from "../../../packages/ui/components/cake-menu"
import { Hero } from "../../../packages/ui/components/hero"
import { Navigation } from "../../../packages/ui/components/navigation"
import { About } from "../../../packages/ui/components/about"
import { Contact } from "../../../packages/ui/components/contact"
import { Footer } from "../../../packages/ui/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CakeMenu />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
