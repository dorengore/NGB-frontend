import { Card, CardBody, CardFooter } from "@heroui/card";
import { RocketIcon } from "lucide-react";
import { Link } from "@heroui/link";
import { Avatar } from "@heroui/avatar";

import JoinLeaveSpaceButton from "../buttons/join-leave-space";

import { SpaceInterface } from "@/types/interface";

const SpaceTooltip = ({ space }: SpaceInterface) => {
  return (
    <Card fullWidth shadow="none">
      <CardBody className="gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative  p-5 bg-black/50 w-[30px] h-[30px] flex items-center justify-center rounded-full">
              <Link href={`/s/${space.url}`}>
                {space?.imageData ? (
                  <Avatar src={space?.imageData} />
                ) : (
                  <div>
                    <RocketIcon size={20} />
                  </div>
                )}
              </Link>
            </div>
            <div>
              <Link href={`/s/${space.url}`}>
                <h2>{space.name}</h2>
              </Link>
              <p>1 member</p>
            </div>
          </div>
        </div>
        <p>{space.description}</p>
      </CardBody>
      <CardFooter className="items-center justify-end flex">
        <div>
          <JoinLeaveSpaceButton size={"sm"} spaceId={`${space.id}`} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default SpaceTooltip;
