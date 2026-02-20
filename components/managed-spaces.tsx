"use client";

import { useEffect } from "react";
import { Image } from "@heroui/image";

import ProgressBarLink from "./progress/progress-link";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import {
  setLoading,
  setUserManagedSpaces,
} from "@/lib/redux/slices/space-slice";
import { AppDispatch } from "@/lib/redux/store";
import { apiRequest } from "@/lib/utils/api-request";

export const getUserManagedSpaces = async (
  token: string | null,
  dispatch: AppDispatch
) => {
  dispatch(setLoading(true));
  try {
    const managedSpaces = await apiRequest("/spaces/own", "GET", token);

    dispatch(setUserManagedSpaces(managedSpaces));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

const ManagedSpaces = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);
  const {
    userManagedSpaces: spaces,
    userJoinedSpaces,
    isLoading,
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

  const renderJoinedSpaces = userJoinedSpaces?.map((space) => (
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
    <div className="pb-20 ">
      <div>
        <h2 className="text-3xl  font-bold mb-6">Spaces you manage</h2>
        <div className="flex gap-4 items-center">{renderManagedSpaces}</div>
      </div>
      <div className="mt-16">
        <h2 className="text-3xl  font-bold mb-6">Spaces you are member of</h2>
        <div className="flex gap-4 items-center">{renderJoinedSpaces}</div>
      </div>
    </div>
  );
};

export default ManagedSpaces;
