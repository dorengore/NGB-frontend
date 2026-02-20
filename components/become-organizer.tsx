"use client";
import { PlusIcon } from "lucide-react";

import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import CreateSpace from "@/components/cards/spaces/create-space";

const BecomeOrganizer = () => {
  return (
    <section className="relative rounded-xl w-full overflow-hidden">
      {/* Combined gradient and image overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/assets/images/lolt1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image with styled frame */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden transform rotate-1 border-4 border-[#16181b] ">
              {/* Clip path to create the angled corners */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#212529] to-[#16181b] z-0" />

              <div className="relative z-10 p-4">
                <Image
                  src="/assets/images/lolt1.jpeg"
                  alt="Happy Holidays Metaverse Celebration"
                  width={600}
                  height={400}
                  className="rounded-md object-cover w-full h-auto"
                />
              </div>

              {/* Bottom right corner clip */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#090a0b] transform translate-y-8 translate-x-8 rotate-45" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center md:text-left text-white space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider uppercase">
              Become an organizer
            </h2>

            <p className="text-gray-200 md:text-lg">
              Create a Space for free to host your own competitions, build a
              membership community and monetize.
            </p>

            <div className="pt-4">
              <CreateSpace
                renderTrigger={(onOpen: () => void) => {
                  return (
                    <Button
                      startContent={<PlusIcon />}
                      color="primary"
                      size="lg"
                      onPress={onOpen}
                    >
                      Create Space
                    </Button>
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeOrganizer;
