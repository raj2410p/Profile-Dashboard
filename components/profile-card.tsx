"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MapPin } from "lucide-react"

interface Profile {
  id: string
  name: string
  photo: string
  address: string
  description: string
}

interface ProfileCardProps {
  profile: Profile
  onSummaryClick: () => void
}

export function ProfileCard({ profile, onSummaryClick }: ProfileCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image src={profile.photo || "/placeholder.svg"} alt={profile.name} fill className="object-cover" />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-bold">{profile.name}</h3>
        <div className="mb-4 flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-1 h-4 w-4" />
          <span className="truncate">{profile.address}</span>
        </div>
        <p className="line-clamp-3 text-sm text-muted-foreground">{profile.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between gap-2 p-6 pt-0">
        <Button asChild className="flex-1">
          <Link href={`/profile/${profile.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

