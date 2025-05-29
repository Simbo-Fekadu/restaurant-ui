import { cn } from "../lib/utils"

interface MenuItemCardProps {
  name: string
  description: string
  price: string
  image: string
  category?: string
  className?: string
}

export function MenuItemCard({
  name,
  description,
  price,
  image,
  category,
  className,
}: MenuItemCardProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-lg bg-background transition-all hover:shadow-lg",
      className
    )}>
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        {category && (
          <p className="mb-1 text-sm font-medium text-muted-foreground">
            {category}
          </p>
        )}
        <h3 className="mb-2 text-xl font-semibold">{name}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <p className="text-lg font-bold">{price}</p>
      </div>
    </div>
  )
} 