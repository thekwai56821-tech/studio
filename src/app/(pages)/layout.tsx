"use client"

import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"

const pageTitles: { [key: string]: string } = {
  "/components": "Component Library",
  "/layouts": "Layout Templates",
  "/icons": "Icon Set",
  "/ai-stylist": "AI Style Suggestions",
}

function getTitle(pathname: string) {
  return pageTitles[pathname] || "Dashboard"
}

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const title = getTitle(pathname)

  return (
    <SidebarInset>
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:h-16 sm:px-6">
        <SidebarTrigger className="md:hidden" />
        <h1 className="font-headline text-xl font-semibold sm:text-2xl">{title}</h1>
      </header>
      <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
    </SidebarInset>
  )
}
