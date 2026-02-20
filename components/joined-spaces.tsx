"use client";
import { Avatar } from "@heroui/avatar";
import { Tooltip } from "@heroui/tooltip";
import { Button } from "@heroui/button";
import { PlusIcon } from "lucide-react";
import { Divider } from "@heroui/divider";
import { Spinner } from "@heroui/spinner";
import { memo, useEffect, useState } from "react";

import CreateSpace from "./cards/spaces/create-space";
import ProgressBarLink from "./progress/progress-link";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { AppDispatch } from "@/lib/redux/store";
import {
  clearUserJoinedSpaces,
  setLoading,
  setUserJoinedSpaces,
} from "@/lib/redux/slices/space-slice";
import { apiRequest } from "@/lib/utils/api-request";

export const getUserJoinedSpace = async (
  token: string | null,
  dispatch: AppDispatch
) => {
  dispatch(setLoading(true));
  try {
    const { spaces } = await apiRequest("/spaces/joined", "GET", token);

    dispatch(setUserJoinedSpaces(spaces));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

const JoinedSpaces = () => {
  // const { isLoading, userJoinedSpaces: spaces } = useAppSelector(
  //   (state) => state.space,
  // );
  const dispatch = useAppDispatch();

  const { token } = useAppSelector((state) => state.auth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { userJoinedSpaces: spaces, isLoading } = useAppSelector(
    (state) => state.space
  );

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
      getUserJoinedSpace(token, dispatch);
    } else {
      setIsLoggedIn(false);
      clearUserJoinedSpaces();
    }
  }, [token]);

  const renderSpaces = spaces?.map((space) => (
    <ProgressBarLink key={space.id} href={`/s/${space.url}`}>
      <Tooltip key={space.id} content={space.name} placement="right">
        <Avatar
          className="cursor-pointer"
          radius="full"
          src={`${space.imageData}`}
        />
      </Tooltip>
    </ProgressBarLink>
  ));

  return (
    <aside className="sticky top-[170px]">
      {isLoading ? (
        <div className="flex mt-6 items-center justify-center">
          <Spinner color="secondary" size="sm" />
        </div>
      ) : (
        <>
          <Divider />
          <div className="flex mt-3 flex-col gap-2">
            {isLoggedIn && (
              <>
                {renderSpaces}
                <CreateSpace
                  renderTrigger={(onOpen: () => void) => (
                    <Tooltip showArrow content="Create Space" placement="right">
                      <Button isIconOnly radius="full" onPress={onOpen}>
                        <PlusIcon />
                      </Button>
                    </Tooltip>
                  )}
                />
              </>
            )}
          </div>
        </>
      )}
    </aside>
  );
};

export default memo(JoinedSpaces);
