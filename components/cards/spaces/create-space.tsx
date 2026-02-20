"use client";
import { useDisclosure } from "@heroui/modal";

import SpaceCreateModal from "@/components/modals/space-create-modal";

const CreateSpace = ({ renderTrigger }: any) => {
  const {
    isOpen: isOpenSpaceModal,
    onOpen: onOpenSpaceModal,
    onOpenChange: onOpenChangeSpaceModal,
  } = useDisclosure();

  return (
    <>
      {renderTrigger(onOpenSpaceModal)}
      <SpaceCreateModal
        isOpen={isOpenSpaceModal}
        onOpenChange={onOpenChangeSpaceModal}
      />
    </>
  );
};

export default CreateSpace;
