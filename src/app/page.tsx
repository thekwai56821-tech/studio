
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarInset } from "@/components/ui/sidebar";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "နမ့်ခမ်းမြို့မ ဌာနေပြည်သူ့စစ် အဖွဲ့ ဌာနချုပ်",
    description: "အင်အား ( ၃၃ + ၅၅ = ၈၈)",
    href: "/components",
  },
  {
    title: "နမ့်ခမ်းမြို့မ ဌာနေပြည်သူ့စစ် အဖွဲ့ (၁)",
    description: "အင်အား ( ၃၃ + ၅၅ = ၈၈)",
    href: "/layouts",
  },
  {
    title: "နမ့်ခမ်းမြို့မ ဌာနေပြည်သူ့စစ် အဖွဲ့(၂)",
    description: "အင်အား (၃၃ + ၅၅ = ၈၈)",
    href: "/icons",
  },
  {
    title: "နမ့်ခမ်းမြို့မ ဌာနေ ပြည်သူ့စစ် အဖွဲ့(၃)",
    description: "အင်အား ( ၃၃ + ၅၅ = ၈၈)",
    href: "/group-3",
  },
    {
    title: "နမ့်ခမ်းမြို့မ ဌာနေ ပြည်သူ့စစ် အဖွဲ့(၄)",
    description: "အင်အား ( ၃၃ + ၅၅ = ၈၈)",
    href: "/group-4",
  },
];

export default function Home() {
  return (
    <SidebarInset>
      <main>
        <div className="flex flex-col gap-8">
          <div className="relative overflow-hidden">
             <div className="w-full overflow-x-hidden">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-blue-600 animate-marquee whitespace-nowrap">
                နမ့်ခမ်းမြို့မဌာနေပြည်သူ့စစ်အဖွဲ့ Data Management System
              </h1>
            </div>
          </div>

          <div className="relative w-full aspect-[4/1] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1664331746481-bbae5490f39e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxNeWFubWFyJTIwQXJteSUyMEZsYWd8ZW58MHx8fHwxNzU3MTc0ODI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Advertisement banner"
              fill
              className="object-cover"
              data-ai-hint="Myanmar Army Flag"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6 lg:p-8">
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
