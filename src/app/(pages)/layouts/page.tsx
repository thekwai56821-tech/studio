import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";

const recentActivities = [
    { id: 'R1', component: 'Button', change: 'Updated color palette', time: '15m ago' },
    { id: 'R2', component: 'Form', change: 'Added new validation', time: '1h ago' },
    { id: 'R3', component: 'Icon Set', change: 'New pagoda icon added', time: '3h ago' },
    { id: 'R4', component: 'Card', change: 'Adjusted shadow style', time: '1d ago' },
]

export default function LayoutsPage() {
  return (
    <div className="space-y-12">
      
      {/* Dashboard Layout */}
      <section>
        <h2 className="font-headline text-3xl font-bold mb-4">Dashboard Layout</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Components</CardTitle>
              <CardDescription>Total UI Components</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">48</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Icons</CardTitle>
              <CardDescription>Custom Icons</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">12</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Layouts</CardTitle>
              <CardDescription>Page Templates</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">4</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Contributors</CardTitle>
              <CardDescription>Team Members</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">8</p>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-6">
            <CardHeader>
                <CardTitle className="font-headline">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Component</TableHead>
                            <TableHead>Change</TableHead>
                            <TableHead className="text-right">Time</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {recentActivities.map(activity => (
                             <TableRow key={activity.id}>
                                <TableCell className="font-medium">{activity.component}</TableCell>
                                <TableCell>{activity.change}</TableCell>
                                <TableCell className="text-right">{activity.time}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Settings Layout */}
      <section>
        <h2 className="font-headline text-3xl font-bold mb-4">Settings Page Layout</h2>
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Profile Settings</CardTitle>
                <CardDescription>Manage your personal and display settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="myoma_user" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" placeholder="Tell us about yourself." />
                </div>
                <Separator />
                <div className="space-y-4">
                    <h3 className="text-lg font-medium font-headline">Notifications</h3>
                    <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                            <Label htmlFor="email-notifications" className="text-base">Email Notifications</Label>
                            <p className="text-sm text-muted-foreground">Receive updates about new components.</p>
                        </div>
                        <Switch id="email-notifications" defaultChecked />
                    </div>
                     <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                            <Label htmlFor="push-notifications" className="text-base">Push Notifications</Label>
                            <p className="text-sm text-muted-foreground">Get notified on your mobile device.</p>
                        </div>
                        <Switch id="push-notifications" />
                    </div>
                </div>
                <Button>Save Changes</Button>
            </CardContent>
        </Card>
      </section>
    </div>
  )
}
