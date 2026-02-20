import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { ArrowUpRight } from "lucide-react";

import { FeatureCardProps } from "@/types/interface";

const FeatureCard = ({
  className,
  heading,
  content,
  onClick,
  buttonText,
  buttonIcon: Icon,
}: FeatureCardProps) => {
  return (
    <section
      className={`flex md:flex-row flex-col relative max-w-7xl w-[90%] mx-auto rounded-lg text-white border-2 my-10 items-center md:gap-16 p-10 md:py-16 ${className}`}
    >
      <ArrowUpRight className="absolute right-5 top-5" size={30} />
      <div className="flex flex-col gap-4 items-start">
        <h2 className="text-3xl uppercase">{heading}</h2>
        <p className="text-tiny font-thin">{content}</p>
        <Button
          className="uppercase"
          color="primary"
          radius="full"
          startContent={<Icon />}
        >
          {buttonText}
        </Button>
      </div>
      <div className="flex items-center justify-center gap-5">
        <Image
          height={212}
          src="/assets/images/clash-royal-img.png"
          style={{
            objectFit: "contain",
          }}
          width={238}
        />
        <Image
          height={213}
          src="/assets/images/pubg-img.png"
          style={{
            objectFit: "contain",
          }}
          width={398}
        />
      </div>
    </section>
  );
};

export default FeatureCard;
