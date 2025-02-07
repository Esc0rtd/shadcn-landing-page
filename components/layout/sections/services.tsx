import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Sonder- und Expressfahrten",
    description:
      "Eilige Lieferungen und Sonderfahrten für Ihre zeitkritischen Sendungen. Wir garantieren schnelle Zustellung – auch außerhalb der regulären Zeiten.",
    pro: ProService.YES,
  },
  {
    title: "Internationale Logistiklösungen",
    description:
      "Wir bieten maßgeschneiderte Lösungen für den internationalen Versand. Ihre Waren erreichen sicher und pünktlich jedes Ziel weltweit.",
    pro: ProService.YES,
  },
  {
    title: "Sendungsverfolgung in Echtzeit",
    description:
      "Behalten Sie den Überblick über jede Sendung. Mit unserer Echtzeit-Tracking-Funktion wissen Sie immer, wo sich Ihre Lieferung befindet.",
    pro: ProService.NO,
  },
  {
    title: "Lagerlogistik",
    description:
      "Optimierte Lagerlösungen für Ihr Unternehmen. Vom einfachen Einlagern bis hin zur komplexen Verwaltung von Beständen bieten wir effiziente Lösungen.",
    pro: ProService.NO,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Unsere Dienstleistungen
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Was wir für Sie tun können
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Zuverlässige Logistiklösungen für Ihre individuellen Bedürfnisse – von Expresslieferungen bis zur internationalen Distribution.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};