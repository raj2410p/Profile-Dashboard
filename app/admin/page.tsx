import { Suspense } from "react"
import { AdminProfileList } from "@/components/admin-profile-list"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileForm } from "@/components/profile-form"
import { Loader2, Plus } from "lucide-react"

export default function AdminPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
      </div>

      <Tabs defaultValue="profiles" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="profiles">Manage Profiles</TabsTrigger>
          <TabsTrigger value="add">Add New Profile</TabsTrigger>
        </TabsList>
        <TabsContent value="profiles">
          <div className="mb-4 flex justify-end">
          </div>
          <Suspense
            fallback={
              <div className="flex h-96 items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">Loading profiles...</span>
              </div>
            }
          >
            <AdminProfileList />
          </Suspense>
        </TabsContent>
        <TabsContent value="add">
          <ProfileForm />
        </TabsContent>
      </Tabs>
    </main>
  )
}

