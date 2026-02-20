import {
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "@heroui/modal";
import { RadioGroup } from "@heroui/radio";
import { Image } from "@heroui/image";
import { useState } from "react";
import { Button } from "@heroui/button";

import { CustomRadio } from "../plans-modal";

import { Space } from "@/lib/redux/api/space-api";

interface SelectSpaceModal {
  isOpen: boolean;
  onOpenChange: () => void;
  spaces: Space[];
  onSpaceSelect: (space: Space) => void;
}

const SelectSpaceModal = ({
  isOpen,
  onOpenChange,
  spaces,
  onSpaceSelect,
}: SelectSpaceModal) => {
  const [tempSpaceId, setTemSpaceId] = useState<string>("");

  const handleConfirm = () => {
    const selectedSpace = spaces.find(
      (space) => Number(space.id) === Number(tempSpaceId)
    );

    if (selectedSpace) {
      onSpaceSelect(selectedSpace);
    }
    onOpenChange();
  };

  return (
    <>
      <Modal
        closeButton
        backdrop="opaque"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        isDismissable={false}
        isOpen={isOpen}
        radius="lg"
        size="sm"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex-col">
                <h2>Select host</h2>
                <p className="text-tiny">
                  Select one of the Spaces you manage to continue.
                </p>
              </ModalHeader>
              <ModalBody className="relative z-20">
                <RadioGroup
                  defaultValue={tempSpaceId}
                  label="Your Spaces"
                  onValueChange={setTemSpaceId}
                >
                  {spaces.map((space) => (
                    <CustomRadio key={space.id} value={space.id}>
                      <div className="flex items-center  gap-4">
                        <Image
                          alt="space image"
                          radius="full"
                          src={`${space.imageData}`}
                          width={60}
                        />
                        <h2>{space.name}</h2>
                      </div>
                    </CustomRadio>
                  ))}
                </RadioGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" radius="full" onPress={onClose}>
                  Cancel
                </Button>
                <Button radius="full" onPress={handleConfirm}>
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

export default SelectSpaceModal;
