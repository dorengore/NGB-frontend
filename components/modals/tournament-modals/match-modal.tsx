import React from "react";
import { Modal, ModalContent, ModalBody, ModalFooter } from "@heroui/modal";
import { Button } from "@heroui/button";

interface MatchModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  selectedMatch: any;
}

const MatchModal = ({
  selectedMatch,
  isOpen,
  onOpenChange,
}: MatchModalProps) => {
  return (
    <>
      <Modal
        backdrop="opaque"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-transparent text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        isDismissable={false}
        isOpen={isOpen}
        radius="lg"
        size="2xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <div className="relative">
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                  backgroundImage: `url(/assets/images/summoner-rift.png)`,
                  // filter: "blur(1px)",
                }}
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-50 z-10"
                style={{
                  background:
                    "linear-gradient(to top, rgba(27, 23, 38, 1), rgba(24, 11, 58, 0.6))",
                }}
              />
              <ModalBody className="relative z-20 p-8">
                <h2 className="text-3xl mt-20 text-center font-bold text-white ">
                  Match Details
                </h2>
                <p>{!!selectedMatch && selectedMatch.match}</p>
              </ModalBody>
              <ModalFooter className="relative z-20">
                <Button radius="full" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MatchModal;
