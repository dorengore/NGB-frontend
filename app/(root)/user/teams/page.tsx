import { cookies } from "next/headers";
import Link from "next/link";
import { Button } from "@heroui/button";

import { apiRequest } from "@/lib/utils/api-request";
import type { TeamInterface } from "@/types/interface";
import NoTeams from "@/components/user-profile/no-teams";
import UserTeams from "@/components/teams/user-teams";

export const revalidate = 0;

const fetchUserTeams = async (token: string): Promise<TeamInterface> => {
  try {
    const response = await apiRequest("/teams", "GET", token);
    return response;
  } catch (error) {
    return { teams: [] };
  }
};

const fetchUserJoinedTeams = async (token: string): Promise<TeamInterface> => {
  try {
    const response = await apiRequest("/teams/joined-teams", "GET", token);
    return response;
  } catch (error) {
    return { teams: [] };
  }
};

const UserTeamsPage = async () => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("token")?.value;

  if (!token) {
    return (
      <div className="flex flex-col gap-3 mt-20 items-center justify-center">
        <h2 className="text-2xl">Please Log In</h2>
        <Button as={Link} href="/login">
          Login
        </Button>
      </div>
    );
  }

  let userTeams: TeamInterface;
  let userJoinedTeam: TeamInterface;
  try {
    [userTeams, userJoinedTeam] = await Promise.all([
      fetchUserTeams(token),
      fetchUserJoinedTeams(token),
    ]);
  } catch (error) {
    return (
      <div className="flex flex-col gap-3 mt-20 items-center justify-center">
        <h2 className="text-2xl text-red-500">
          Error loading teams. Please try again later.
        </h2>
      </div>
    );
  }

  if (!userTeams?.teams || userTeams.teams.length === 0) {
    return (
      <div>
        <h2 className="text-3xl font-bold">Your Teams</h2>
        <NoTeams />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold">Your Teams</h2>
      <UserTeams teams={userTeams.teams} />
      {userJoinedTeam?.teams.length ? (
        <>
          <h2 className="text-3xl font-bold">Your Joined Teams</h2>
          <UserTeams teams={userJoinedTeam.teams} />
        </>
      ) : null}
    </div>
  );
};

export default UserTeamsPage;
