import React, { ReactNode } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";

interface ConfirmModalProps {
  children: ReactNode;
  isOpen: boolean;
  onOpenChange: () => void;
  onConfirm: () => void;
  title: string;
  isLoading?: boolean;
}

const ConfirmModal = ({
  children,
  isOpen,
  onOpenChange,
  onConfirm,
  title,
  isLoading,
}: ConfirmModalProps) => {
  return (
    <>
      <Modal
        hideCloseButton
        backdrop="opaque"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        isOpen={isOpen}
        radius="lg"
        size="sm"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-center flex-col gap-1">
                {title}
              </ModalHeader>
              <ModalBody className="text-center">{children}</ModalBody>
              <ModalFooter className="items-center justify-center">
                <Button
                  fullWidth
                  color="danger"
                  radius="full"
                  variant="light"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  fullWidth
                  color="primary"
                  isLoading={isLoading}
                  radius="full"
                  onPress={onConfirm}
                >
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConfirmModal;
