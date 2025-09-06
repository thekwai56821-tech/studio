
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

const bannerImages = [
  {
    src: "https://images.unsplash.com/photo-1619235912839-7726c6d9072b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxteWFubWFyJTIwYXJteXxlbnwwfHx8fDE3NTcxODE5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Myanmar Army personnel on parade",
    hint: "myanmar army"
  },
  {
    src: "https://images.unsplash.com/photo-1584289262029-ba24402685b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxteWFubWFyJTIwbmF2eXxlbnwwfHx8fDE3NTcxODE5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Myanmar Navy ship at sea",
    hint: "myanmar navy"
  },
  {
    src: "https://images.unsplash.com/photo-1723862437091-1c05c880b6c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxteWFubWFyJTIwYXJteXxlbnwwfHx8fDE3NTcxODE5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Myanmar Army tanks on display",
    hint: "myanmar army"
  },
  {
    src: "https://images.unsplash.com/photo-1543787098-035d81944517?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxteWFubWFyJTIwbmF2eXxlbnwwfHx8fDE3NTcxODE5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Myanmar Navy ship",
    hint: "myanmar navy"
  }
];

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-8 p-4 sm:p-6 lg:p-8 relative z-10">
        <div className="relative overflow-hidden">
            <div className="w-full overflow-x-hidden">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-blue-800 animate-marquee whitespace-nowrap">
              နမ့်ခမ်းမြို့မ ဌာနေပြည်သူ့စစ်အဖွဲ့ Data Management System
            </h1>
          </div>
        </div>

        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {bannerImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full aspect-[4/1] overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    data-ai-hint={image.hint}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Link href={feature.href} key={feature.title} className="group">
              <Card className="h-full transition-all duration-200 ease-in-out group-hover:shadow-lg group-hover:-translate-y-1 bg-white/30">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="overflow-hidden">
                      <CardTitle className="font-headline text-2xl animate-slide-in opacity-0">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="mt-2 animate-slide-in opacity-0 [animation-delay:0.1s]">
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
  );
}
