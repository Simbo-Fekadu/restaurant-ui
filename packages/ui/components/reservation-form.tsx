"use client"

import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import { cn } from "../lib/utils"

interface ReservationFormProps extends React.HTMLAttributes<HTMLFormElement> {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

export function ReservationForm({
  className,
  onSubmit,
  ...props
}: ReservationFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (onSubmit) onSubmit(e)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("grid gap-4", className)}
      {...props}
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          name="date"
          type="date"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="time">Time</Label>
        <Input
          id="time"
          name="time"
          type="time"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="guests">Number of Guests</Label>
        <Input
          id="guests"
          name="guests"
          type="number"
          min="1"
          max="10"
          placeholder="2"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="notes">Special Requests</Label>
        <textarea
          id="notes"
          name="notes"
          className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Any special requests or dietary requirements?"
        />
      </div>
      <Button type="submit" className="w-full">
        Make Reservation
      </Button>
    </form>
  )
} 