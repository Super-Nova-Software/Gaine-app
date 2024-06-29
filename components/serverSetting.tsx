import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ClubIcon, Text, VoicemailIcon } from "lucide-react"
import Image from 'next/image'
import { ModeToggle } from "./mode-toggle"

export default function Component() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1  p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold">Server Settings</h1>
          <Button>Save Changes
          <ModeToggle />
          </Button>
        </div>
          {/* <ModeToggle /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Server Name</CardTitle>
              <CardDescription>Change the name of your server.</CardDescription>
            </CardHeader>
            <CardContent>
              <Input placeholder="Server Name" defaultValue="My First Server" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Server Description</CardTitle>
              <CardDescription>Add a description for your server.</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Server Description"
                defaultValue="Welcome to my Discord server! This is a place for us to chat, share ideas, and have fun."
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Server Icon</CardTitle>
              <CardDescription>Upload an icon for your server.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Image src="/placeholder.svg" alt="Server Icon" width={64} height={64} className="rounded-full" />
                <Button variant="outline">Upload Icon</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Roles</CardTitle>
              <CardDescription>Manage the roles in your server.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500" />
                    <span>Admin</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500" />
                    <span>Moderator</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-yellow-500" />
                    <span>Member</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
                <Button size="sm">Add Role</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Channels</CardTitle>
              <CardDescription>Manage the channels in your server.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Text  className="w-5 h-5" />
                    <span>general</span>
                  </div>
                   <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit channel</SheetTitle>
          <SheetDescription>
            Make changes to your channel here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Channel1" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@channel1" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <VoicemailIcon className="w-5 h-5" />
                    <span>voice-chat</span>
                  </div>
                  <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit channel</SheetTitle>
          <SheetDescription>
            Make changes to your channel here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Channel1" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@channel1" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ClubIcon className="w-5 h-5" />
                    <span>announcements</span>
                  </div>
                  <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit channel</SheetTitle>
          <SheetDescription>
            Make changes to your channel here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Channel1" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@channel1" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
                </div>
                <Button size="sm">Add Channel</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}