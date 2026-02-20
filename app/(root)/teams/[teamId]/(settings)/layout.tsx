import { ReactNode } from "react";
import { cookies } from "next/headers";

import { fetchTeam } from "../(team)/layout";

import TeamLinkCard from "@/components/spaces/cards/team-link-card";
import TeamSettingsTab from "@/components/tabs/team-settings-tab";
import { Team } from "@/types/interface";

export const revalidate = 0;

const TeamSettingsLayout = async ({
  children,
  params,
}: {
  params: { teamId: string };
  children: ReactNode;
}) => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("token")?.value;

  if (!token) return <h2>Please login to view this page</h2>;
  // @ts-ignore
  const { team }: { team: Team } = await fetchTeam(params.teamId, token);

  if (!team) {
    throw Error("No Team Found");
  }

  return (
    <div>
      <div className="w-full flex gap-4">
        <div className="flex flex-col gap-3 border-r pr-5">
          <TeamLinkCard
            teamId={`${team.id}`}
            teamProfileImage={team?.imageData}
          />
          <TeamSettingsTab teamId={`${team.id}`} />
        </div>
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default TeamSettingsLayout;
