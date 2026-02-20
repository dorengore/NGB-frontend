import type { ReactNode } from "react";
import { cookies } from "next/headers";
import { Button } from "@heroui/button";
import Link from "next/link";

import { fetchSpaceByUrl } from "../../(space)/layout";

import CurrentSpaceProvider from "@/context/current-space-provider";
import CurrentTournamentProvider from "@/context/current-tournament-provider";
import type { TournamentResponseInterface } from "@/types/interface";
import { apiRequest } from "@/lib/utils/api-request";

const getCurrentTournament = async (
  token: string,
  tournamentId: string
): Promise<TournamentResponseInterface | null> => {
  const response = await apiRequest(
    `/tournaments/${tournamentId}`,
    "GET",
    token
  );

  return response;
};

const TournamentLayout = async ({
  children,
  params,
}: {
  params: { spaceId: string; tournamentId: string };
  children: ReactNode;
}) => {
  const currentSpace = await fetchSpaceByUrl(params.spaceId);
  const cookiesStore = cookies();
  const token = cookiesStore.get("token")?.value;

  if (!token) {
    return (
      <div className="flex flex-col gap-3 mt-20 items-center justify-center">
        <h2 className="text-2xl">User Not Logged In.</h2>
        <Button as={Link} href="/login">
          Login
        </Button>
      </div>
    );
  }
  const currentTournament = await getCurrentTournament(
    token,
    params.tournamentId
  );

  if (!currentSpace?.space) {
    return (
      <div className="flex flex-col gap-3 mt-20 items-center justify-center">
        <h2 className="text-2xl">Unable to get space right now.</h2>
        <Button as={Link} href="/">
          Home
        </Button>
      </div>
    );
  }

  if (!currentTournament?.tournament) {
    return (
      <div className="flex flex-col gap-3 mt-20 items-center justify-center">
        <h2 className="text-2xl">Unable to get tournament right now.</h2>
        <Button as={Link} href="/">
          Home
        </Button>
      </div>
    );
  }

  return (
    <CurrentSpaceProvider space={currentSpace.space}>
      <CurrentTournamentProvider tournament={currentTournament.tournament}>
        <div className="flex flex-col pb-20">{children}</div>
      </CurrentTournamentProvider>
    </CurrentSpaceProvider>
  );
};

export default TournamentLayout;
