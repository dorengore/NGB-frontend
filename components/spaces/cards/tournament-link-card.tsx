"use client";

import { Avatar } from "@heroui/avatar";
import { ArrowLeft } from "lucide-react";

import ProgressBarLink from "@/components/progress/progress-link";
import { useAppSelector } from "@/lib/redux/hooks";

const TournamentLinkCard = () => {
  const { url, imageData } = useAppSelector((state) => state.currentSpace);
  const { id, name } = useAppSelector((state) => state.currentTournament);

  return (
    <div className="flex flex-col gap-4 pt-10 items-center">
      <ProgressBarLink href={`/s/${url}`}>
        <div className="w-[100px] h-[100px]">
          <Avatar className="w-full h-full" src={`${imageData}`} />
        </div>
      </ProgressBarLink>
      <ProgressBarLink href={`/s/${url}/tournaments/${id}`}>
        <h2 className="text-xl font-bold text-white">{name}</h2>
      </ProgressBarLink>
      <ProgressBarLink className="text-sm" href={`/s/${url}/tournaments/${id}`}>
        <ArrowLeft />
        View Tournament
      </ProgressBarLink>
    </div>
  );
};

export default TournamentLinkCard;
