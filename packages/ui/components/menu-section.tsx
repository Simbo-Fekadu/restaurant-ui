"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "../lib/utils"

interface MenuSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  items: {
    id: string
    name: string
    description: string
    price: number
    image: string
    dietary?: {
      vegetarian?: boolean
      vegan?: boolean
      glutenFree?: boolean
    }
  }[]
}

export function MenuSection({
  title,
  items,
  className,
  ...props
}: MenuSectionProps) {
  return (
    <section className={cn("py-12", className)} {...props}>
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-lg border bg-background transition-colors hover:bg-accent"
          >
            <div className="aspect-square relative">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm font-medium">${item.price.toFixed(2)}</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
              {item.dietary && (
                <div className="mt-2 flex gap-2">
                  {item.dietary.vegetarian && (
                    <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-900/20 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-300">
                      Vegetarian
                    </span>
                  )}
                  {item.dietary.vegan && (
                    <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/20 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                      Vegan
                    </span>
                  )}
                  {item.dietary.glutenFree && (
                    <span className="inline-flex items-center rounded-full bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 text-xs font-medium text-yellow-700 dark:text-yellow-300">
                      Gluten Free
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 