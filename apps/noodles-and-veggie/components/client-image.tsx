"use client"

import Image from "next/image"

interface ClientImageProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  priority?: boolean
  width?: number
  height?: number
  sizes?: string
  style?: React.CSSProperties
}

export function ClientImage({ src, alt, fill, className, priority, width, height, sizes, style }: ClientImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      style={style}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = '/images/placeholder.txt';
      }}
    />
  )
} 