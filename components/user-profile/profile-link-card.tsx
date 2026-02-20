"use client";

import { Avatar } from "@heroui/avatar";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

import ProgressBarLink from "../progress/progress-link";

import { useAppSelector } from "@/lib/redux/hooks";

const ProfileLinkCard = () => {
  const { userId, imageData } = useAppSelector((state) => state.auth);
  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    if (imageData) {
      setUserImage(imageData);
    }
  }, [imageData]);

  return (
    <div className="flex flex-col gap-4 pt-10 items-center">
      <ProgressBarLink href={`/users/${userId}`}>
        {/* <Tooltip content={<AdminTooltip />}> */}
        <div className="w-[100px] h-[100px]">
          <Avatar className="w-full h-full" src={`${userImage}`} />
        </div>
        {/* </Tooltip> */}
      </ProgressBarLink>
      <ProgressBarLink href={`/users/${userId}`}>
        <h2 className="text-xl font-bold text-white">MR Wick</h2>
      </ProgressBarLink>
      <ProgressBarLink className="text-sm" href={`/users/${userId}`}>
        <ArrowLeft />
        View Profile
      </ProgressBarLink>
    </div>
  );
};

export default ProfileLinkCard;
