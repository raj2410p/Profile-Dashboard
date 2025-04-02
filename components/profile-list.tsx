"use client"

import { useState } from "react"
import { ProfileCard } from "@/components/profile-card"
import { MapComponent } from "@/components/map-component"
import { getProfiles, type Profile } from "@/lib/data"
import { useSearchParams } from "next/navigation"
import { MapPin } from "lucide-react"

export default function ProfileList() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null)
  const searchParams = useSearchParams()

  const searchQuery = searchParams.get("query")?.toLowerCase() || ""
  const locationFilter = searchParams.get("location")?.toLowerCase() || ""

  const profiles = getProfiles()

  const filteredProfiles = profiles.filter((profile) => {
    const matchesSearch =
      !searchQuery ||
      profile.name.toLowerCase().includes(searchQuery) ||
      profile.description.toLowerCase().includes(searchQuery)

    const matchesLocation = !locationFilter || profile.address.toLowerCase().includes(locationFilter)

    return matchesSearch && matchesLocation
  })

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} onSummaryClick={() => setSelectedProfile(profile)} />
            ))
          ) : (
            <div className="col-span-full flex h-96 items-center justify-center">
              <p className="text-muted-foreground">No profiles found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
      <div className="sticky top-20 h-[calc(100vh-10rem)] rounded-lg border bg-card shadow-sm">
        {selectedProfile ? (
          <MapComponent address={selectedProfile.address} name={selectedProfile.name} />
        ) : (
          <div className="flex h-full flex-col items-center justify-center p-6 text-center">
            <MapPin className="mb-2 h-12 w-12 text-muted-foreground" />
            <h3 className="text-lg font-medium">No location selected</h3>
            <p className="text-sm text-muted-foreground">
              Click the "View on Map" button on any profile to see their location.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

