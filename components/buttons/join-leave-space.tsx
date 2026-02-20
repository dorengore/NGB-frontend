"use client";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import ConfirmModal from "../modals/confirm-modal";

import LoginButton from "./login-button";

import { useAppSelector } from "@/lib/redux/hooks";
import { useSpaceMembership } from "@/hooks/use-space-membership";

interface JoinLeaveSpaceButtonProps {
  size?: "md" | "lg" | "sm";
  spaceId: string;
}

const JoinLeaveSpaceButton = ({
  size = "md",
  spaceId,
}: JoinLeaveSpaceButtonProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // const [isMember, setIsMember] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const {
    isMember,
    isLoading,
    checkMembership,
    handleJoinSpace,
    handleLeaveSpace,
  } = useSpaceMembership(spaceId);
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
      checkMembership(spaceId);
    } else {
      setIsLoggedIn(false);
      checkMembership(spaceId);
    }
  }, [token]);

  return (
    <>
      {!isLoggedIn ? (
        <LoginButton />
      ) : (
        <>
          <Button
            className="px-6"
            color={isMember ? "default" : "primary"}
            isLoading={isLoading}
            radius="full"
            size={size ? size : "lg"}
            onPress={isMember ? onOpen : () => handleJoinSpace(spaceId)}
          >
            {isMember ? "Member" : "Join"}
          </Button>
          <ConfirmModal
            isOpen={isOpen}
            title="Confirm leave space"
            onConfirm={() => {
              handleLeaveSpace(spaceId);
              onOpenChange();
            }}
            onOpenChange={onOpenChange}
          >
            Are you sure you want to leave this space?
          </ConfirmModal>
        </>
      )}
    </>
  );
};

export default JoinLeaveSpaceButton;
