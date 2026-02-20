import { ReactNode } from "react";
import { Button } from "@heroui/button";
import Link from "next/link";

import { fetchSpaceByUrl } from "../../../(space)/layout";

import CurrentSpaceProvider from "@/context/current-space-provider";
import TournamentHeader from "@/components/tournament-header";
import SpaceTournamentTabs from "@/components/tabs/space-tournament-tabs";

const TournamentLayout = async ({
  children,
  params,
}: {
  params: { spaceId: string; tournamentId: number };
  children: ReactNode;
}) => {
  const currentSpace = await fetchSpaceByUrl(params.spaceId);

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

  return (
    <CurrentSpaceProvider space={currentSpace.space}>
      <div className="flex flex-col pb-20">
        <TournamentHeader space={currentSpace?.space} />
        <SpaceTournamentTabs
          adminId={currentSpace.space.adminId}
          spaceName={currentSpace.space.url}
          tournamentId={params.tournamentId}
        />
        {children}
      </div>
    </CurrentSpaceProvider>
  );
};

export default TournamentLayout;
