import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Car",
    title: "Modern ausgestattete Fahrzeuge",
    description:
      "Unsere Flotte umfasst topaktuelle, zuverlässige Fahrzeuge mit modernster Technik – für eine effiziente und komfortable Paketzustellung.",
  },
  {
    icon: "Target",
    title: "Wachstumschancen",
    description:
      "Werde Teil eines wachsenden Unternehmens mit zahlreichen Entwicklungsmöglichkeiten. Dein Engagement wird gesehen und belohnt.",
  },
  {
    icon: "Wallet",
    title: "Leistungsgerechte Vergütung",
    description:
      "Profitiere von fairer Bezahlung, pünktlicher Zahlung und attraktiven Bonusmöglichkeiten, die an deine Leistung gekoppelt sind.",
  },
  {
    icon: "UserPlus",
    title: "Flexible Arbeitszeiten",
    description:
      "Gestalte deine Arbeitszeiten flexibel und passgenau zu deinem Leben – perfekte Balance zwischen Arbeit und Freizeit.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">JETZT BEWERBEN</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Verstärke unser Team als Paketzusteller / Kurierfahrer (m/w/d)
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Wir suchen Verstärkung in den Regionen:
            <br />
            Raum Nürnberg
            <br />
            Raum Würzburg
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
