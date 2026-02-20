"use client";
import { ReactNode, useState, useEffect } from "react";

import LoadingSpinner from "./loading-spinner";
import LinkButton from "./buttons/link-button";
import TournamentLinkCard from "./spaces/cards/tournament-link-card";
import TournamentSettingsTabs from "./tabs/tournament-settings-tabs";

import { useAppSelector } from "@/lib/redux/hooks";

const UnauthorizedTournamentUser = ({ children }: { children: ReactNode }) => {
  const [unAuth, setUnAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const { adminId, url } = useAppSelector((state) => state.currentSpace);
  const { hostedById, id } = useAppSelector((state) => state.currentTournament);
  const { userId } = useAppSelector((state) => state.auth);

  useEffect(() => {
    setUnAuth(Number(userId) !== Number(hostedById));
    setLoading(false);
  }, [hostedById, userId]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (unAuth && !loading) {
    return (
      <div>
        <h2>
          Your are not allowed to view this page.
          {userId}
          {hostedById}
        </h2>
        <LinkButton href="/">Return Home</LinkButton>
      </div>
    );
  }

  return (
    // <div>
    //   <div>
    //     <div className="w-full flex gap-4">
    //       <div className="flex flex-col gap-3 border-r pr-5">
    //         <TournamentLinkCard />
    //         <TournamentSettingsTabs spaceUrl={url} tournamentId={id!} />
    //       </div>
    //       <div className="flex-grow">{children}</div>
    //     </div>
    //   </div>
    // </div>
    <section className="w-full flex gap-3">
      <div className="lg:flex hidden flex-col w-full border-r lg:w-fit px-5 gap-4">
        <TournamentLinkCard />
        <TournamentSettingsTabs spaceUrl={url} tournamentId={id!} />
      </div>
      <div className="flex-grow">{children}</div>
    </section>
  );
};

export default UnauthorizedTournamentUser;
