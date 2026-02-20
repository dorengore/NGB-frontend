import { cookies } from "next/headers";
import { ReactNode } from "react";

import { Team } from "@/types/interface";
import TeamHeader from "@/components/teams/team-header";
import TeamTabs from "@/components/tabs/team-tabs";

export const fetchTeam = async (
  teamId: string,
  token: string
): Promise<Team | null> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/teams/${teamId}`,
    {
      next: {
        revalidate: 0,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    if (response.status === 400) {
      return null;
    }
    throw Error("No Team Found");
  }

  return response.json();
};

export const revalidate = 0;

const TeamLayout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: { teamId: string };
}) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw Error("Please login to get team details");
  }

  // @ts-ignore
  const { team }: { team: Team } = await fetchTeam(params.teamId, token);

  if (!team) {
    throw Error("No Team Found");
  }

  return (
    <div>
      <TeamHeader team={team} />
      <TeamTabs teamAdminId={team.adminId} teamId={team.id} />
      {children}
    </div>
  );
};

export default TeamLayout;
