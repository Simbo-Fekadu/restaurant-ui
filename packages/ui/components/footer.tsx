import { Separator } from "./ui/separator"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Sweet Dreams Bakery</h3>
            <p className="text-gray-400">Creating sweet memories  with our delicious handcrafted cakes.</p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-pink-400" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-pink-400" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-pink-400" />
            </div>
          </div>

     

          <div className="space-y-4">
            <h4 className="font-semibold">Cake Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Wedding Cakes</li>
              <li className="hover:text-white cursor-pointer">Birthday Cakes</li>
              <li className="hover:text-white cursor-pointer">Cupcakes</li>
              <li className="hover:text-white cursor-pointer">Custom Orders</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>04 </li>
              <li>Adama City, SC 12345</li>
              <li>(+125) 09-CAKE</li>
            
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-gray-400">© 2024 Sweet Dreams Bakery. All rights reserved.</p>
          <div className="flex space-x-6 text-gray-400">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
