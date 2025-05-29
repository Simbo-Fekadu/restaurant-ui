import { Inter } from "next/font/google"
import "@workspace/ui/globals.css"

const font = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Coffee Shop - Artisanal Coffee & Pastries",
  description: "Discover our premium coffee selection and freshly baked pastries. The perfect spot for coffee lovers and remote workers.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
} 