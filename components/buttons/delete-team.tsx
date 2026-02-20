"use client";

import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";

import ConfirmModal from "../modals/confirm-modal";

import { apiRequest } from "@/lib/utils/api-request";
import { useAppSelector } from "@/lib/redux/hooks";

const DeleteTeam = ({ teamId }: { teamId: string }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useAppSelector((state) => state.auth);

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      await apiRequest(`/teams/${teamId}`, "DELETE", token);
      toast.success("Team Delete Successfully");
      router.push("/");
      onOpenChange();
    } catch (error) {
      toast.success("Error Team Deleting");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button
        fullWidth
        color="danger"
        isLoading={isLoading}
        radius="full"
        variant="light"
        onPress={onOpen}
      >
        Delete Team
      </Button>
      <ConfirmModal
        isLoading={isLoading}
        isOpen={isOpen}
        title="Confirm Delete Team"
        onConfirm={handleConfirm}
        onOpenChange={onOpenChange}
      >
        Are you sure you want to delete this team?
      </ConfirmModal>
    </div>
  );
};

export default DeleteTeam;
