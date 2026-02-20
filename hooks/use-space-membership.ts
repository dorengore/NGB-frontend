"use client";

import { useCallback, useState } from "react";
import toast from "react-hot-toast";

import {
  useCheckMembershipQuery,
  useJoinSpaceMutation,
  useLeaveSpaceMutation,
} from "@/lib/redux/api/space-membership-api";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { getUserJoinedSpace } from "@/components/joined-spaces";

export const useSpaceMembership = (initialSpaceId?: string) => {
  const [currentSpaceId, setCurrentSpaceId] = useState(initialSpaceId);
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { data: isMember, isLoading } = useCheckMembershipQuery(
    currentSpaceId ?? "",
    {
      skip: !currentSpaceId,
    },
  );

  const [joinSpace] = useJoinSpaceMutation();
  const [leaveSpace] = useLeaveSpaceMutation();
  const [isProcessing, setIsProcessing] = useState(false);

  // const getUserJoinedSpaces = async (token: string | null) => {
  //   dispatch(setLoading(true));
  //   try {
  //     const { spaces } = await apiRequest("/spaces/joined", "GET", token);

  //     dispatch(setUserJoinedSpaces(spaces));
  //   } catch (error) {
  //     toast.error("Failed to fetch joined spaces.", { position: "top-right" });
  //   } finally {
  //     dispatch(setLoading(false));
  //   }
  // };

  // useEffect(() => {
  //   if (token) {
  //     getUserJoinedSpaces(token);
  //   }
  // }, [token]);

  const handleJoinSpace = async (spaceId: string) => {
    setIsProcessing(true);
    try {
      await joinSpace(spaceId).unwrap();
      toast.success("Joined Space Successfully.", { position: "top-right" });
      // Fetch updated spaces
      await getUserJoinedSpace(token, dispatch);
    } catch (error) {
      toast.error("Failed to join space.", { position: "top-right" });
      console.error(error); // Log the error for debugging
    } finally {
      setIsProcessing(false);
    }
  };

  const handleLeaveSpace = async (spaceId: string) => {
    setIsProcessing(true);
    try {
      await leaveSpace(spaceId).unwrap();
      toast.success("Space Left Successfully.", { position: "top-right" });
      // Fetch updated spaces
      await getUserJoinedSpace(token, dispatch);
    } catch (error) {
      toast.error("Failed to leave space", { position: "top-right" });
      console.error(error); // Log the error for debugging
    } finally {
      setIsProcessing(false);
    }
  };

  const checkMembership = useCallback((spaceId: string) => {
    setCurrentSpaceId(spaceId);
  }, []);

  return {
    isMember,
    handleJoinSpace,
    handleLeaveSpace,
    checkMembership,
    isLoading: isLoading || isProcessing,
  };
};
