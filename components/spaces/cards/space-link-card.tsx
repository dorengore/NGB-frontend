"use client";

import { ArrowLeft } from "lucide-react";
import { Avatar } from "@heroui/avatar";

import ProgressBarLink from "@/components/progress/progress-link";
import { useAppSelector } from "@/lib/redux/hooks";

const SpaceLinkCard = () => {
  const { url, imageData, name } = useAppSelector(
    (state) => state.currentSpace
  );

  return (
    <div className="flex flex-col gap-4 pt-10 items-center">
      <ProgressBarLink href={`/s/${url}`}>
        <div className="w-[100px] h-[100px]">
          <Avatar className="w-full h-full" src={`${imageData}`} />
        </div>
      </ProgressBarLink>
      <ProgressBarLink href={`/s/${url}`}>
        <h2 className="text-xl font-bold text-white">{name}</h2>
      </ProgressBarLink>
      <ProgressBarLink className="text-sm" href={`/s/${url}`}>
        <ArrowLeft />
        View Space
      </ProgressBarLink>
    </div>
  );
};

export default SpaceLinkCard;
