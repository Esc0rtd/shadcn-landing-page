"use client";

import Image from "next/image";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

interface SponsorsProps {
  imageUrl: string;
  name: string;
}

const sponsors: SponsorsProps[] = [
  {
    imageUrl: "https://media.discordapp.net/attachments/1336746303224545301/1337133861905371166/versions-01.png?ex=67a65673&is=67a504f3&hm=9d2e4be54dfe83f91db3fc01ba5fb13f4bb77620ffa4c62dd8e0611b073bff6b&=&format=webp&quality=lossless&width=661&height=489",
    name: "DHL EXPRESS",
  },
  {
    imageUrl: "https://media.discordapp.net/attachments/1336746303224545301/1337133967245316116/gls-logo-1.png?ex=67a6568c&is=67a5050c&hm=5e4b82f2f2a466428707ad3413d1ed9c9f5bc8b1d7ccac531eb795e824b69afa&=&format=webp&quality=lossless&width=668&height=489",
    name: "GLS",
  },
  {
    imageUrl: "https://media.discordapp.net/attachments/1336746303224545301/1337134280584724510/dpd_logo.png?ex=67a656d7&is=67a50557&hm=1543dba53b1785e07010dca4893a7b6f8140008e71985e5acc3b35ebac6049d1&=&format=webp&quality=lossless&width=747&height=489",
    name: "DPD",
  },
  
  {
    imageUrl: "https://media.discordapp.net/attachments/1336746303224545301/1337134489154879488/HermesLogo.png?ex=67a65708&is=67a50588&hm=e54c3a81dfa9048a51a10705aac1e4de41a3eea4b31f180a9093a1f01213211f&=&format=webp&quality=lossless&width=489&height=489",
    name: "HERMES",
  },
  {
    imageUrl: "https://media.discordapp.net/attachments/1336746303224545301/1337132599654482031/nox.png?ex=67a65546&is=67a503c6&hm=951f6f4bffd5e5a2dc9c8ff1a3988aa7c6e4692c3254266ba5f6dc961a2afa33&=&format=webp&quality=lossless&width=491&height=489",
    name: "NOX",
  },
  {
    imageUrl: "https://media.discordapp.net/attachments/1336746303224545301/1337133193408548985/open_graph_images.png?ex=67a655d4&is=67a50454&hm=3614d1afaa2aa7cebd384c18b45a925ad4c6e00aa4c88b597cf2b1ced1925a1f&=&format=webp&quality=lossless&width=489&height=489",
    name: "TRANS O FLEX",
  },
  {
    imageUrl: "https://media.discordapp.net/attachments/1336746303224545301/1337133628647280670/logo.png?ex=67a6563b&is=67a504bb&hm=9470b982081fec24a49208dccf297219daa6994855fef827c8af9a1031353e13&=&format=webp&quality=lossless",
    name: "AV TRANSPORTE",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">Unsere Partner</h2>
      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ imageUrl, name }) => (
            <div key={name} className="flex items-center text-xl md:text-2xl font-medium">
              <Image src={imageUrl} alt={name} width={50} height={50} className="mr-2 rounded-full" />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
