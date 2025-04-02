"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useToast } from "@/components/ui/use-toast"
import { getProfiles, deleteProfile } from "@/lib/data"
import { Edit, Trash2 } from "lucide-react"

export function AdminProfileList() {
  const { toast } = useToast()
  const [profiles, setProfiles] = useState(getProfiles())
  const [profileToDelete, setProfileToDelete] = useState<string | null>(null)

  const handleDelete = (id: string) => {
    deleteProfile(id)
    setProfiles(profiles.filter((profile) => profile.id !== id))
    toast({
      title: "Profile deleted",
      description: "The profile has been successfully deleted.",
    })
    setProfileToDelete(null)
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">Photo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Location</TableHead>
            <TableHead className="hidden lg:table-cell">Email</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {profiles.map((profile) => (
            <TableRow key={profile.id}>
              <TableCell>
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={profile.photo || "/placeholder.svg"} alt={profile.name} fill className="object-cover" />
                </div>
              </TableCell>
              <TableCell className="font-medium">{profile.name}</TableCell>
              <TableCell className="hidden md:table-cell">{profile.address.split(",")[0]}</TableCell>
              <TableCell className="hidden lg:table-cell">{profile.email || "N/A"}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={`/admin/edit/${profile.id}`}>
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Link>
                  </Button>
                  <AlertDialog
                    open={profileToDelete === profile.id}
                    onOpenChange={(open) => {
                      if (!open) setProfileToDelete(null)
                    }}
                  >
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive"
                        onClick={() => setProfileToDelete(profile.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This will permanently delete {profile.name}'s profile. This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          onClick={() => handleDelete(profile.id)}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {profiles.length === 0 && (
        <div className="flex h-32 items-center justify-center">
          <p className="text-muted-foreground">No profiles found.</p>
        </div>
      )}
    </>
  )
}

