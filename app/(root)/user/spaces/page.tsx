"use client";

import { useEffect } from "react";
import { Image } from "@heroui/image";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import ProgressBarLink from "@/components/progress/progress-link";
import { getUserManagedSpaces } from "@/lib/utils";

const UserSpaces = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);
  const {
    userManagedSpaces: spaces,
    // userJoinedSpaces,
    // isLoading,
  } = useAppSelector((state) => state.space);

  useEffect(() => {
    if (token) {
      getUserManagedSpaces(token, dispatch);
    }
  }, [token]);

  const renderManagedSpaces = spaces?.map((space) => (
    <ProgressBarLink
      key={space.id}
      className="flex flex-col gap-2 items-center justify-center"
      href={`/s/${space.url}`}
    >
      <Image
        height={150}
        radius="full"
        src={`${space.imageData}`}
        width={150}
      />
      <h2 className="text-white">{space.url}</h2>
    </ProgressBarLink>
  ));

  return (
    <div className="pb-20 px-10">
      <div>
        <h2 className="text-3xl  font-bold mb-6">Your Spaces</h2>
        <div className="flex gap-4 items-center">{renderManagedSpaces}</div>
      </div>
    </div>
  );
};

export default UserSpaces;
