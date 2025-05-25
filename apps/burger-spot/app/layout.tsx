import { Inter } from "next/font/google"
import "@workspace/ui/globals.css"
import { ThemeProvider } from "@workspace/ui/components/theme-provider"
import { ThemeToggle } from "@workspace/ui/components/theme-toggle"
import { CartProvider } from "../context/cart-context"

const font = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Burger Spot - Gourmet Burgers & More",
  description: "Experience the best gourmet burgers in town. Fresh ingredients, unique flavors, and a cozy atmosphere.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            {children}
            <ThemeToggle />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
} 