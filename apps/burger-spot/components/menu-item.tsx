"use client"

import Image from "next/image"
import { MenuItem as MenuItemType } from "../data/menu"

export function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background transition-colors hover:bg-accent">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover transition-transform group-hover:scale-105"
          style={{ objectPosition: 'center' }}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="text-sm font-medium bg-primary/10 px-2 py-1 rounded-full">
            ${item.price.toFixed(2)}
          </p>
        </div>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {item.description}
        </p>
        {item.dietary && (
          <div className="mt-3 flex flex-wrap gap-2">
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
  )
} 