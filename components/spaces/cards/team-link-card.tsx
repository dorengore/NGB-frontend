import { Avatar } from "@heroui/avatar";
import { ArrowLeft } from "lucide-react";
import React from "react";

import ProgressBarLink from "@/components/progress/progress-link";

const TeamLinkCard = ({
  teamId,
  teamProfileImage,
}: {
  teamProfileImage: string | null;
  teamId: string;
}) => {
  return (
    <div className="flex flex-col gap-4 pt-10 items-center">
      <ProgressBarLink href={`/teams/${teamId}`}>
        <div className="w-[100px] h-[100px]">
          <Avatar className="w-full h-full" src={`${teamProfileImage}`} />
        </div>
      </ProgressBarLink>
      <ProgressBarLink href={`/teams/${teamId}`}>
        <h2 className="text-xl font-bold text-white">Team Name</h2>
      </ProgressBarLink>
      <ProgressBarLink className="text-sm" href={`/teams/${teamId}`}>
        <ArrowLeft />
        View team
      </ProgressBarLink>
    </div>
  );
};

export default TeamLinkCard;
