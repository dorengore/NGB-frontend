import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/modal";

import LoginFormCard from "../cards/login-card";

const LoginFormModal = ({
  isOpen,
  onOpenChange,
  onSwitch,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  onSwitch: () => void;
}) => {
  return (
    <Modal
      backdrop="opaque"
      classNames={{
        body: "py-6",
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
      isOpen={isOpen}
      placement="bottom-center"
      scrollBehavior="outside"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1" />
            <ModalBody className="flex items-center justify-center">
              <LoginFormCard
                isModal={true}
                onOpenChange={onOpenChange}
                onSwitch={onSwitch}
              />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default LoginFormModal;
