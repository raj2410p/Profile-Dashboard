import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { MapPin, Users } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <MapPin className="h-6 w-6" />
          <span className="font-bold">Wayn Enterprise</span>
        </Link>
        <nav className="ml-auto flex items-center space-x-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <Users className="mr-2 h-4 w-4" />
              Profiles
            </Button>
          </Link>
          <Link href="/admin">
            <Button variant="ghost" size="sm">
              Admin
            </Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}

