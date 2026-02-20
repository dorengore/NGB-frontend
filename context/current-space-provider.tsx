"use client";

import { useEffect } from "react";

import { useAppDispatch } from "@/lib/redux/hooks";
import {
  CurrentSpaceState,
  setCurrentSpace,
} from "@/lib/redux/slices/current-space-slice";

interface CurrentSpaceProviderProps {
  space: CurrentSpaceState;
  children: React.ReactNode;
}

const CurrentSpaceProvider = ({
  space,
  children,
}: CurrentSpaceProviderProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentSpace(space));
  }, [space, dispatch]);

  return <>{children}</>;
};

export default CurrentSpaceProvider;
