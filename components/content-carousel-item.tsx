import { Typography } from "@material-tailwind/react";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";

import type { ContentCarouselItemProps } from "@/types/interface";

const ContentCarouselItem = ({
  backgroundImage,
  gameLogo,
  heading,
  content,
  onClick,
}: ContentCarouselItemProps) => {
  return (
    <div className="relative h-full w-full">
      <img
        alt="background "
        className="h-full w-full object-cover"
        src={backgroundImage}
      />
      <div className="absolute  inset-0 grid h-full w-full place-items-center bg-custom-gradient">
        <div className="text-center flex flex-col justify-center items-center gap-4 md:w-3/4">
          <Image className="mx-auto" src={gameLogo} width={300} />
          {
            // @ts-ignore
            <Typography
              className="w-full text-2xl md:text-3xl lg:text-4xl"
              color="white"
              variant="h1"
            >
              {heading}
            </Typography>
          }
          {
            // @ts-ignore
            <Typography
              className="mb-4 w-2/4 text-sm font-thin opacity-80"
              color="white"
            >
              {content}
            </Typography>
          }
          <div className="flex justify-center gap-2">
            <Button color="primary" radius="full" size="lg" onClick={onClick}>
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarouselItem;
