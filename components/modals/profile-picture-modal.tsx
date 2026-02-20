import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Avatar } from "@heroui/avatar";
import { Input } from "@heroui/input";
import { Image } from "@heroui/image";

import { avatars } from "@/data";

interface ConfirmModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  setValue: any;
}

const ProfilePictureModal = ({
  isOpen,
  onOpenChange,
  setValue,
}: ConfirmModalProps) => {
  const [selectedAvatar, setSelectedAvatar] = useState<File | string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedAvatar(e.target.files[0]);
      setValue("image", e.target.files[0]);
    }
  };

  console.log(selectedAvatar);

  return (
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
      placement="center"
      radius="lg"
      scrollBehavior="outside"
      size="2xl"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex  flex-col gap-1">
              Update profile picture
            </ModalHeader>
            <ModalBody className="">
              <div className="flex flex-col items-center">
                <label
                  className="w-48 h-48 rounded-full border-dashed border-2 border-gray-400 flex flex-col items-center justify-center cursor-pointer hover:border-gray-600 transition"
                  htmlFor="profile-upload"
                >
                  {!selectedAvatar ? (
                    <span className="text-gray-400 text-center px-6 text-sm">
                      Drag and drop your picture here.
                    </span>
                  ) : (
                    <Image
                      alt="avatar"
                      height={190}
                      radius="full"
                      src={`${selectedAvatar}`}
                      style={{
                        objectFit: "cover",
                      }}
                      width={208}
                    />
                  )}
                </label>

                <Input
                  accept="image/*"
                  className="hidden"
                  id="profile-upload"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>

              <Divider className="mt-10" />
              <h2 className="text-center my-5 text-xl">
                Or select one of our avatars
              </h2>

              <div className="grid grid-cols-4 gap-4">
                {avatars.map((avatar, index) => (
                  <Avatar
                    key={index}
                    className={`w-32 h-32 cursor-pointer ${
                      selectedAvatar === avatar ? "ring-2 ring-cyan-500" : ""
                    }`}
                    size="lg"
                    src={avatar}
                    onClick={() => setSelectedAvatar(avatar)}
                  />
                ))}
              </div>
            </ModalBody>
            <ModalFooter className="">
              <Button
                color="danger"
                radius="full"
                variant="light"
                onPress={onClose}
              >
                Close
              </Button>
              <Button color="primary" radius="full" onPress={onClose}>
                Save
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ProfilePictureModal;
