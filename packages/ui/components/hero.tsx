import { cn } from "../lib/utils"

interface HeroProps {
  title: string
  tagline: string
  image: string
  className?: string
  imagePosition?: "left" | "right"
  children?: React.ReactNode
}

export function Hero({
  title,
  tagline,
  image,
  className,
  imagePosition = "right",
  children,
}: HeroProps) {
  return (
    <div className={cn("relative overflow-hidden bg-background py-20 md:py-32", className)}>
      <div className="container mx-auto px-4">
        <div className={cn(
          "grid gap-8 md:grid-cols-2 md:gap-12",
          imagePosition === "left" && "md:flex-row-reverse"
        )}>
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
              {title}
            </h1>
            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              {tagline}
            </p>
            {children}
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 