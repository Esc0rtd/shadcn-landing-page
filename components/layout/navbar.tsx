"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { ToggleTheme } from "./toogle-theme";
import Image from "next/image";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#testimonials",
    label: "Bewertungen",
  },
  {
    href: "#team",
    label: "Team",
  },
  {
    href: "#contact",
    label: "Kontakt",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        {/* Hier das Bild einfügen */}
        <Image
          src="https://media.discordapp.net/attachments/1336746303224545301/1337431215774498816/Unbenannt-1.png?ex=67a76b62&is=67a619e2&hm=05bbf79a7e88266e14d79b52512be2f501a27d8a8e90293be7b2f365a259bc3c&=&format=webp&quality=lossless&width=489&height=489" // Ersetze dies durch deine Bild-URL
          alt="Logo"
          width={36}
          height={36}
          className="rounded-lg mr-2"
        />
        VK Logistiks
      </Link>

      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            >
              {/* Ersetze dies durch ein beliebiges Bild oder Icon */}
              <Image
                src="https://media.discordapp.net/attachments/1336746303224545301/1336746353459724319/VK_LOGO_3d_aa.png?ex=67a5964e&is=67a444ce&hm=8e63191e7749d9ab1a23b62224637cdb1487e342edab4f396c4bbce86c4dd982&=&format=webp&quality=lossless&width=489&height=489                                                                                                                                            " // Ersetze dies durch dein gewünschtes Bild
                alt="Menu"
                width={36}
                height={36}
                className="rounded-lg"
              />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    {/* Hier das Bild einfügen */}
                    <Image
                      src="https://media.discordapp.net/attachments/1336746303224545301/1336746353459724319/VK_LOGO_3d_aa.png?ex=67a5964e&is=67a444ce&hm=8e63191e7749d9ab1a23b62224637cdb1487e342edab4f396c4bbce86c4dd982&=&format=webp&quality=lossless&width=489&height=489" // Ersetze dies durch deine Bild-URL
                      alt="Logo"
                      width={36}
                      height={36}
                      className="rounded-lg mr-2"
                    />
                    VK Logistiks
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />
      </div>
    </header>
  );
};
