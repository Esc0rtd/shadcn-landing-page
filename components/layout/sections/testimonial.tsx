import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
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
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://media.discordapp.net/attachments/1336746303224545301/1337058626824572982/hero-image-light.jpg",
    name: "Max Müller",
    userName: "Logistikleiter",
    comment:
      "Die Lieferung war schnell und zuverlässig. Besonders die Expresszustellung hat uns beeindruckt! Sehr zu empfehlen.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Anna Weber",
    userName: "Einkaufsmanagerin",
    comment:
      "Wir arbeiten regelmäßig mit VK Logistiks zusammen und sind immer sehr zufrieden. Die Kommunikation und das Timing sind hervorragend.",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Johannes Fischer",
    userName: "Vertriebsleiter",
    comment:
      "Mit VK Logistiks haben wir immer einen zuverlässigen Partner an unserer Seite. Die Lieferung unserer Maschinen erfolgte pünktlich und in einwandfreiem Zustand.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Claudia Schmitt",
    userName: "Supply Chain Managerin",
    comment:
      "Die Tracking-Optionen von VK Logistiks haben uns die Arbeit sehr erleichtert. Wir konnten jederzeit den Status unserer Sendungen einsehen.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Michael Bauer",
    userName: "Frachtmanager",
    comment:
      "Ich war besonders beeindruckt von der Flexibilität bei unseren Sonderanforderungen. Die Lieferung war pünktlich und der Kundenservice hervorragend.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sabrina Koch",
    userName: "Logistikkoordinatorin",
    comment:
      "Ein sehr zuverlässiger Service. Die Zustellung war schnell, und ich konnte mich jederzeit auf den Lieferstatus verlassen.",
    rating: 4.8,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Kundenbewertungen
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Was unsere Kunden sagen
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`size-4 fill-primary text-primary ${
                          index < review.rating ? "fill-primary" : "fill-muted"
                        }`}
                      />
                    ))}
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={review.image}
                        alt={review.name}
                      />
                      <AvatarFallback>{review.name[0]}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};