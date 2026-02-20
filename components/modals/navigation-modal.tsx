"use client";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Listbox, ListboxItem } from "@heroui/listbox";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/modal";
import toast from "react-hot-toast";

const NavigationModal = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) => {
  const list = [
    {
      key: "download",
      label: "Download",
    },
    {
      key: "organizers",
      label: "Organizers",
    },

    {
      key: "brands",
      label: "Brands",
    },
    {
      key: "communities",
      label: "Communities",
    },
    {
      key: "developers",
      label: "Developers",
    },
    {
      key: "Pricing",
      label: "Pricing",
    },
  ];

  return (
    <Modal
      backdrop="opaque"
      classNames={{
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
      isOpen={isOpen}
      placement="bottom"
      // scrollBehavior="outside"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Natural Born Gamers
            </ModalHeader>
            <ModalBody className="flex items-center justify-center">
              <Listbox
                aria-label="Menu"
                itemClasses={{
                  base: "px-3 w-full first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
                }}
                items={list}
                style={{
                  width: "100%",
                }}
                onAction={(key) => toast.success(`${key}`)}
              >
                {(item) => (
                  <ListboxItem key={item.key}>{item.label}</ListboxItem>
                )}
              </Listbox>
              <div className="flex w-full items-center gap-4">
                <Link className="w-full" href="/login">
                  <Button fullWidth radius="full">
                    Login
                  </Button>
                </Link>
                <Link className="w-full" href="/sign-up">
                  <Button fullWidth color="primary" radius="full">
                    Sign up for free
                  </Button>
                </Link>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default NavigationModal;
