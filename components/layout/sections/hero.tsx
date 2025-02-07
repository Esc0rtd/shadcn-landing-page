"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>NEU</Badge>
            </span>
            <span> DHL EXPRESS FAHRER GESUCHT! </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Erleben Sie
              <span className="text-transparent px-2 bg-gradient-to-r from-[#2a2a2a] to-[#7a7a7a] bg-clip-text">
                VK LOGISTIKS
              </span>
              Transporte
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`Wir bei VK Logistiks stehen für effiziente, schnelle und sichere Transportlösungen. Mit einem starken Team, modernem Fuhrpark und langjähriger Erfahrung sorgen wir dafür, dass Ihre Pakete pünktlich ankommen – jeden Tag, überall.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Kontaktiere uns
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                0157 86 60 13 86
              </Link>
            </Button>
          </div>
        </div>
        {/*
      
    <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] h-24 lg:h-40 bg-primary/50 rounded-full blur-3xl"></div>

    
    <Link href="https://example.com" className="block">
      <img
        src={
          theme === "light"
            ? "https://i.postimg.cc/RZQqRRYP/452245e8a2ddbc-5f8e-4ec7-b7c4-1fd5bbec6ff7-gigapixel-low-resolution-v1-4x.png"
            : "https://i.postimg.cc/RZQqRRYP/452245e8a2ddbc-5f8e-4ec7-b7c4-1fd5bbec6ff7-gigapixel-low-resolution-v1-4x.png"
        }
        alt="dashboard"
        className="w-full h-auto object-cover mx-auto rounded-lg"
      />
    </Link>

    
    <div className="absolute bottom-0 left-0 w-full h-10 md:h-14 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
  </div>
</section> 
 Gradient */}
      </div>
    </section>
  );
};