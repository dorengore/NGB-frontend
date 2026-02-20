"use client";

import { useDisclosure } from "@heroui/modal";
import { ReactNode } from "react";

import InviteMembersModal from "../modals/invite-members-modal";

interface InviteMembersProps {
  renderPressable: (onPress: () => void) => ReactNode;
}

const InviteMembers = ({ renderPressable }: InviteMembersProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {renderPressable(onOpen)}
      <InviteMembersModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default InviteMembers;
