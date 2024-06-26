import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import profile from "../assets/images/profile.svg";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <div className="flex flex-col h-full">
      <header className="bg-muted p-6 flex items-center gap-4">
        <img src={profile} className="h-16 w-16" alt="" />
        <div className="grid gap-1">
          <div className="text-xl font-bold">Jared Palmer</div>
          <div className="text-sm text-muted-foreground">@jaredpalmer</div>
        </div>
      </header>
      <div className="flex-1 p-6">
        <Tabs
          defaultValue="about"
          className="w-full"
          value={activeTab}
          onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 border-b">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <div className="grid gap-4">
              <div className="grid gap-1">
                <div className="text-sm font-medium text-muted-foreground">
                  Bio
                </div>
                <div>
                  I&apos;m a software engineer and designer. I love building
                  products that solve real problems.
                </div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium text-muted-foreground">
                  Location
                </div>
                <div>San Francisco, CA</div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium text-muted-foreground">
                  Joined
                </div>
                <div>October 2021</div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>
                  Update your profile information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="avatar">Avatar</Label>
                  <div />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Jared Palmer" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@jaredpalmer" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
