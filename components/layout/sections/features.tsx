import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Mobilität",
    description:
      "Mit unserer mobilen Lösung haben Sie jederzeit Zugriff auf Ihre Logistikdaten – egal, wo Sie sich befinden. Flexibilität und Effizienz stehen bei uns an erster Stelle.",
  },
  {
    icon: "BadgeCheck",
    title: "Zuverlässigkeit",
    description:
      "Unser Service steht für höchste Verlässlichkeit. Pünktliche Lieferung und transparente Prozesse gehören zu unseren wichtigsten Grundsätzen.",
  },
  {
    icon: "Goal",
    title: "Gezielte Routenplanung",
    description:
      "Durch unsere präzise Routenoptimierung stellen wir sicher, dass Ihre Sendungen schnell und sicher ans Ziel kommen, und das zu den niedrigsten Kosten.",
  },
  {
    icon: "PictureInPicture",
    title: "Transparente Kommunikation",
    description:
      "Sie wissen immer genau, wo sich Ihre Sendung befindet. Echtzeit-Tracking und regelmäßige Updates machen die Logistikplanung stressfrei.",
  },
  {
    icon: "MousePointerClick",
    title: "Einfache Bestellung",
    description:
      "Bestellen Sie Logistikdienstleistungen ganz einfach über unsere benutzerfreundliche Plattform – keine komplizierten Schritte, nur schnelle Lösungen.",
  },
  {
    icon: "Newspaper",
    title: "Klarheit in der Dokumentation",
    description:
      "Jede Sendung wird gründlich dokumentiert. Sie erhalten alle nötigen Informationen auf einen Blick, um Ihre Logistikprozesse jederzeit zu überwachen.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Unsere Stärken
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Was uns auszeichnet
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Vertrauen Sie auf unsere Expertise in der Logistik, um Ihre Prozesse zu optimieren und Ihre Ziele schneller zu erreichen.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};