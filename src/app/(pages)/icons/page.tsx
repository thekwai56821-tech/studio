import LotusIcon from "@/components/icons/lotus-icon";
import PagodaIcon from "@/components/icons/pagoda-icon";
import ShieldIcon from "@/components/icons/shield-icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const icons = [
  { name: 'Shield', component: ShieldIcon },
  { name: 'Pagoda', component: PagodaIcon },
  { name: 'Lotus', component: LotusIcon },
];

export default function IconsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-headline text-3xl font-bold">Custom Icon Set</h2>
        <p className="text-muted-foreground mt-2">
          Line-based, symbolic icons representing Myanmar culture, objects, and symbols.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {icons.map(({ name, component: IconComponent }) => (
          <Card key={name} className="flex flex-col items-center justify-center p-6">
            <IconComponent className="w-12 h-12 text-primary" />
            <p className="mt-4 text-sm font-medium">{name}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
