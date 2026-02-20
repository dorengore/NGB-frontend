import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@heroui/button";
import Link from "next/link";
import ProgressBarLink from "./progress/progress-link";

export default function LeagueOfLegendsHero() {
  return (
    <div className="relative w-full overflow-hidden ">
      {/* Main content container */}
      <div className="container relative mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Left content - Text and CTA */}
          <div className="z-10 text-center lg:text-left space-y-6">
            <div className="space-y-2">
              {/* <h2 className="font-mono text-lg uppercase tracking-widest text-[#ff9d00]">
                THE AKALI
                <span className="ml-2 inline-block h-[1px] w-64 bg-[#ff9d00]" />
              </h2> */}
              <h1 className="font-serif text-5xl font-bold uppercase tracking-wider text-white md:text-6xl lg:text-7xl">
                LEAGUE OF
                <br />
                LEGENDS
              </h1>
            </div>

            <Button
              as={ProgressBarLink}
              href="/lol"
              color="primary"
              className=" mt-6 rounded-full  px-8 py-6 text-lg font-bold uppercase "
            >
              Play Now
            </Button>
          </div>

          {/* Right content - Character Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Circular gradient behind character */}
            <div className="absolute -right-6 md:right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-white blur-sm" />

            {/* Character image */}
            <Image
              src="/assets/images/akali-transparent.png"
              alt="Akali character from League of Legends"
              width={600}
              height={600}
              className="relative z-10 h-auto max-h-[600px] w-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
