"use client";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDisclosure } from "@heroui/modal";

import ConfirmModal from "../modals/confirm-modal";

import { apiRequest } from "@/lib/utils/api-request";
import { useAppSelector } from "@/lib/redux/hooks";

const DeactivateSpace = ({ spaceUrl }: { spaceUrl: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const deactivateSpace = async () => {
    setIsLoading(true);

    try {
      const response = await apiRequest(
        `/spaces/deactivate?url=${spaceUrl}`,
        "PUT",
        token
      );

      onOpenChange();

      router.push(`/s/${spaceUrl}`);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        fullWidth
        className="mt-4"
        color="danger"
        isLoading={isLoading}
        radius="full"
        variant="flat"
        onPress={onOpen}
      >
        Deactivate Space
      </Button>
      <ConfirmModal
        isLoading={isLoading}
        isOpen={isOpen}
        title="Deactivate your space."
        onConfirm={deactivateSpace}
        onOpenChange={onOpenChange}
      >
        Are you sure you want to deactivate this space? All your members will be
        lost.
      </ConfirmModal>
    </>
  );
};

export default DeactivateSpace;
