import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import React from "react";

interface PaymentInformationModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  selectedPlan: string;
}

const PaymentInformationModal = ({
  isOpen,
  onOpenChange,
  selectedPlan,
}: PaymentInformationModalProps) => {
  return (
    <>
      <Modal
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
              <ModalHeader className="flex flex-col gap-1">
                <h2>Payment information</h2>
                <p className="text-[.8rem] leading-6">
                  Buying a subscription is fast, easy and secure. You may cancel
                  the subscription at any time.
                </p>
              </ModalHeader>
              <Divider />
              <ModalBody className="">Summary</ModalBody>
              <ModalFooter className="items-center justify-center">
                <Button
                  fullWidth
                  color="primary"
                  radius="full"
                  // onPress={onConfirm}
                >
                  Pay
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default PaymentInformationModal;
