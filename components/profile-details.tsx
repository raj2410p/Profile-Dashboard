import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Briefcase, Calendar } from "lucide-react"

interface Profile {
  name: string
  title?: string
  photo?: string
  description: string
  email?: string
  phone?: string
  address: string
  company?: string
  interests?: string[]
  joinDate?: string
}

interface ProfileDetailsProps {
  profile: Profile
}

export function ProfileDetails({ profile }: ProfileDetailsProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4 space-y-0">
        <div className="relative h-20 w-20 overflow-hidden rounded-full">
          <Image src={profile.photo || "/placeholder.svg"} alt={profile.name} fill className="object-cover" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <p className="text-muted-foreground">{profile.title || "Professional"}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h2 className="mb-2 font-semibold">About</h2>
          <p className="text-sm text-muted-foreground">{profile.description}</p>
        </div>

        <div>
          <h2 className="mb-2 font-semibold">Contact Information</h2>
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{profile.email || "email@example.com"}</span>
            </div>
            <div className="flex items-center text-sm">
              <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{profile.phone || "+1 (555) 123-4567"}</span>
            </div>
            <div className="flex items-center text-sm">
              <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{profile.address}</span>
            </div>
          </div>
        </div>

        {profile.company && (
          <div>
            <h2 className="mb-2 font-semibold">Work</h2>
            <div className="flex items-center text-sm">
              <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{profile.company}</span>
            </div>
          </div>
        )}

        {profile.interests && profile.interests.length > 0 && (
          <div>
            <h2 className="mb-2 font-semibold">Interests</h2>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest, index) => (
                <Badge key={index} variant="secondary">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {profile.joinDate && (
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="mr-1 h-3 w-3" />
            <span>Member since {profile.joinDate}</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

