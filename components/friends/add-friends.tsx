"use client";

import { useDisclosure } from "@heroui/modal";
import { ReactNode } from "react";

import AddFriendsModal from "../modals/add-friends-modal";

interface AddFriendsProps {
  renderPressable: (onPress: () => void) => ReactNode;
}

const AddFriends = ({ renderPressable }: AddFriendsProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {renderPressable(onOpen)}
      <AddFriendsModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default AddFriends;
