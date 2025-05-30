"use client"

import Image from "next/image"
import { useState } from "react"

interface ClientImageProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  style?: React.CSSProperties
}

export function ClientImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  priority,
  sizes,
  style,
}: ClientImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={`
        duration-700 ease-in-out
        ${isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}
        ${className}
      `}
      onLoadingComplete={() => setIsLoading(false)}
      priority={priority}
      sizes={sizes}
      style={style}
    />
  )
} 