import { Card, CardBody } from "@heroui/card";
import { FlagIcon, RocketIcon, UsersIcon } from "lucide-react";

import JoinLeaveSpaceButton from "@/components/buttons/join-leave-space";
import { SpaceInterface } from "@/types/interface";

const SpaceAbout = ({ space }: SpaceInterface) => {
  return (
    <Card shadow="none">
      <CardBody className="gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* <Tooltip
              className="w-[300px]"
              content={<SpaceTooltip space={space} />}
            > */}
            <div className="relative  p-10 bg-black/50 w-[50px] h-[50px] flex items-center justify-center rounded-full">
              <div>
                <RocketIcon size={35} />
              </div>
            </div>
            {/* </Tooltip> */}
            <h2 className="capitalize">{space.name}</h2>
          </div>
          <div>
            <JoinLeaveSpaceButton spaceId={`${space.id}`} />
          </div>
        </div>
        <p>{space.description}</p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <FlagIcon /> <p>Joined 2 days ago</p>
          </div>
          <div className="flex items-center gap-2">
            <UsersIcon /> <p>1 member</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default SpaceAbout;
