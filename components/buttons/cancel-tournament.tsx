"use client";

import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";
import { useState } from "react";

import ConfirmModal from "../modals/confirm-modal";

const CancelTournament = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Button fullWidth color="danger" variant="ghost" onPress={onOpen}>
        Cancel Tournament
      </Button>
      <ConfirmModal
        isLoading={isLoading}
        isOpen={isOpen}
        title="Cancel Tournament"
        onConfirm={onOpenChange}
        onOpenChange={onOpenChange}
      >
        Are you sure you want to cancel this tournament.
      </ConfirmModal>
    </>
  );
};

export default CancelTournament;
