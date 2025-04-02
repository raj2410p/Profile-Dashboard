import { Suspense } from "react"
import ProfileList from "@/components/profile-list"
import { SearchFilters } from "@/components/search-filters"
import { Loader2 } from "lucide-react"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">Dashboard</h1>
      <SearchFilters />
      <Suspense
        fallback={
          <div className="flex h-96 items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            <span className="ml-2 text-muted-foreground">Loading profiles...</span>
          </div>
        }
      >
        <ProfileList />
      </Suspense>
    </main>
  )
}

