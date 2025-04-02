import { Suspense } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MapComponent } from "@/components/map-component"
import { ProfileDetails } from "@/components/profile-details"
import { getProfileById } from "@/lib/data"
import { ChevronLeft, Loader2 } from "lucide-react"

interface ProfilePageProps {
  params: {
    id: string
  }
}

export default function ProfilePage({ params }: ProfilePageProps) {
  const profile = getProfileById(params.id)

  if (!profile) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to profiles
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Suspense
          fallback={
            <div className="flex h-96 items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          }
        >
          <ProfileDetails profile={profile} />
        </Suspense>

        <Card>
          <CardContent className="p-0">
            <div className="p-6">
              <h2 className="text-xl font-semibold">Location</h2>
              <p className="text-muted-foreground">{profile.address}</p>
            </div>
            <Separator />
            <div className="h-[400px] w-full">
              <Suspense
                fallback={
                  <div className="flex h-full items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    <span className="ml-2 text-muted-foreground">Loading map...</span>
                  </div>
                }
              >
                <MapComponent address={profile.address} name={profile.name} />
              </Suspense>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

