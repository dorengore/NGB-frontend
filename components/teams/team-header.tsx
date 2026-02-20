"use client";
import { Button } from "@heroui/button";

import InviteMembers from "./invite-members";
import TeamBannerUpload from "./team-banner-upload";
import TeamProfileUpload from "./team-profile-upload";

import { Team } from "@/types/interface";
import { useAppSelector } from "@/lib/redux/hooks";

const TeamHeader = ({ team }: { team: Team }) => {
  const { userId } = useAppSelector((state) => state.auth);

  return (
    <div className="full">
      <TeamBannerUpload team={team} />
      <div className="flex flex-col relative z-20 pt-10 pb-5 gap-5 items-center justify-start ">
        <TeamProfileUpload team={team} />
        <div className="flex w-full ml-auto mt-7 justify-between   items-center px-6 pt-10 gap-4">
          <h2 className="text-5xl font-bold">{team.name}</h2>
          {Number(userId) === Number(team.adminId) && (
            <InviteMembers
              renderPressable={(onPress) => (
                <Button color="primary" radius="full" onPress={onPress}>
                  Add
                </Button>
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamHeader;
