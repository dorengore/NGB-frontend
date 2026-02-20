import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Tooltip } from "@heroui/tooltip";
import React from "react";
import { VerifiedIcon } from "lucide-react";
import { AvatarIcon } from "@heroui/avatar";

import ProgressBarLink from "@/components/progress/progress-link";
import JoinLeaveSpaceButton from "@/components/buttons/join-leave-space";

interface SpaceCardProps {
  id: number | null;
  image: string | null;
  description: string;
  banner: string | null;
  name: string;
  members: string;
  verified: boolean;
  spaceUrl: string;
}

const SpaceCard = ({
  image,
  id,
  name,
  members,
  verified,
  banner,
  description,
  spaceUrl,
}: SpaceCardProps) => {
  return (
    <Card fullWidth>
      <CardBody className="relative p-0">
        <div className="w-full grid grid-cols-1 h-[180px]">
          {!banner ? (
            <div className="flex items-center justify-center  h-full">
              <AvatarIcon />
            </div>
          ) : (
            <Image
              alt={name}
              className="w-full h-full object-cover"
              src={banner}
            />
          )}
        </div>

        <div className="absolute top-32 left-3 z-20">
          <ProgressBarLink href={`/s/${spaceUrl.replace(/\s+/g, "-")}`}>
            <Image
              alt={`${name} Avatar`}
              className="rounded-full object-cover border-2 border-white"
              height={80}
              src={image || ""}
              width={80}
            />
          </ProgressBarLink>
        </div>

        <div className="p-4 mt-5 flex flex-col gap-2">
          <div className="flex gap-2 items-center justify-between">
            <div className="flex-1">
              <ProgressBarLink href={`/s/${spaceUrl.replace(/\s+/g, "-")}`}>
                {/* <Tooltip
                  className="max-w-[300px] overflow-y-auto h-[200px]"
                  content={<GameTooltip spaceId={id} />}
                > */}
                <h2 className="text-white text-xl mb-2 overflow-hidden whitespace-nowrap text-ellipsis">
                  {name}
                </h2>
                {/* </Tooltip> */}
              </ProgressBarLink>
            </div>

            {verified && (
              <Tooltip content={`${name} is a verified Space`}>
                <VerifiedIcon
                  className="cursor-pointer"
                  color="green"
                  size={16}
                />
              </Tooltip>
            )}
          </div>
          <p className="line-clamp-5 text-tiny text-blue-gray-200">
            {description || "No description"}
          </p>
        </div>
      </CardBody>
      <CardFooter className="flex md:flex-col gap-3 lg:flex-row items-center md:items-start lg:items-center justify-between">
        <p className="text-[1rem]">{members} members</p>{" "}
        <JoinLeaveSpaceButton size="sm" spaceId={`${id}`} />
      </CardFooter>
    </Card>
  );
};

export default SpaceCard;
