"use client";

import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import ConfirmModal from "@/components/modals/confirm-modal";
import GetStartedForm from "@/components/forms/get-started-form";
import { UserInfoSchema } from "@/lib/validations";

type UserInfoType = z.infer<typeof UserInfoSchema>;

const GetStartedPage = () => {
  const [loading, setIsLoading] = useState<boolean>(false);
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);

  const {
    isOpen: isOpenConfirm,
    onOpen: onOpenConfirm,
    onOpenChange: onOpenChangeConfirm,
  } = useDisclosure();

  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<UserInfoType>({
    resolver: zodResolver(UserInfoSchema),
    defaultValues: {
      username: "",
      email: "",
      currency: "",
    },
  });

  const onSubmit = (values: UserInfoType) => {
    setIsLoading(true);
    try {
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  // const handleAvatarSelect = (avatar: string) => {
  //   setSelectedAvatar(avatar);
  //   setValue("image", avatar);
  // };

  return (
    <section className="w-full">
      <Modal
        hideCloseButton
        backdrop="opaque"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46] p-0",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        isOpen={true}
        scrollBehavior="inside"
        size="full"
        style={{
          minHeight: "100dvh",
        }}
      >
        <ModalContent>
          <ModalHeader>
            <Navbar className="bg-[#19172c]" maxWidth="full">
              <NavbarContent justify="start">
                <NavbarItem>LOGO</NavbarItem>
              </NavbarContent>
              <NavbarContent justify="end">
                <NavbarItem>
                  <Button
                    radius="full"
                    variant="bordered"
                    onPress={onOpenConfirm}
                  >
                    Skip
                  </Button>
                </NavbarItem>
              </NavbarContent>
            </Navbar>
          </ModalHeader>
          <ModalBody>
            <form
              className="max-w-lg w-full mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <GetStartedForm
                control={control}
                errors={errors}
                register={register}
                setValue={setValue}
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              isLoading={loading}
              radius="full"
              size="lg"
              onClick={handleSubmit(onSubmit)}
            >
              Get Started
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ConfirmModal
        isOpen={isOpenConfirm}
        title={"Confirm"}
        onConfirm={() => {}}
        onOpenChange={onOpenChangeConfirm}
      >
        Are you sure you want to skip on boarding?
      </ConfirmModal>
    </section>
  );
};

export default GetStartedPage;
