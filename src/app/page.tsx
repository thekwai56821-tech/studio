import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarInset } from "@/components/ui/sidebar";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Component Library",
    description: "Explore reusable UI components with Myanmar aesthetics.",
    href: "/components",
  },
  {
    title: "Layout Templates",
    description: "Pre-designed layouts for various screen sizes.",
    href: "/layouts",
  },
  {
    title: "Icon Set",
    description: "Custom icons representing Myanmar culture and symbols.",
    href: "/icons",
  },
  {
    title: "AI Style Suggestions",
    description: "Generate UI styles and palettes with AI.",
    href: "/ai-stylist",
  },
];

export default function Home() {
  return (
    <SidebarInset>
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-8">
          <div className="text-center relative overflow-hidden">
             <div className="w-full overflow-x-hidden">
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-blue-600 animate-marquee whitespace-nowrap">
                နမ့်ခမ်းမြို့မဌာနေပြည်သူ့စစ်အဖွဲ့ Data Management System
              </h1>
            </div>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              A design system and component library inspired by the rich
              cultural heritage of Myanmar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Link href={feature.href} key={feature.title} className="group">
                <Card className="h-full transition-all duration-200 ease-in-out group-hover:shadow-lg group-hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="font-headline text-2xl">
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {feature.description}
                        </CardDescription>
                      </div>
                      <ArrowRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </SidebarInset>
  );
}
