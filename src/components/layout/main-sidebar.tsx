"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import {
  Home,
  LayoutPanelTop,
  Palette,
  Shapes,
  Sparkles,
} from "lucide-react"
import ShieldIcon from "@/components/icons/shield-icon"
import ThemeSwitcher from "@/components/theme-switcher"

const menuItems = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/components", label: "Components", icon: Palette },
  { href: "/layouts", label: "Layouts", icon: LayoutPanelTop },
  { href: "/icons", label: "Icons", icon: Shapes },
  { href: "/ai-stylist", label: "AI Stylist", icon: Sparkles },
]

export default function MainSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2.5">
          <ShieldIcon className="size-8 shrink-0" />
          <span className="font-headline text-lg font-semibold group-data-[collapsible=icon]:hidden">
            NanKham
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} passHref>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={item.label}
                >
                  <div>
                    <item.icon />
                    <span>{item.label}</span>
                  </div>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <ThemeSwitcher />
      </SidebarFooter>
    </Sidebar>
  )
}
