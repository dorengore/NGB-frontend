"use client";

import { ReactNode } from "react";
import { useDisclosure } from "@heroui/modal";

import CreateTeamModal from "@/components/modals/create-team-modal";

interface CreateTeamProps {
  renderPressable: (onPress: () => void) => ReactNode;
}

const CreateTeam = ({ renderPressable }: CreateTeamProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {renderPressable(onOpen)}
      <CreateTeamModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default CreateTeam;
