import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { UsersIcon } from "lucide-react";
import { Input } from "@heroui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import ListItemWithIcon from "../hero-list-item";

import { SpaceFormSchema } from "@/lib/validations";
import { useCreateSpaceMutation } from "@/lib/redux/api/space-api";

interface SpaceCreateProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

type SpaceFormData = z.infer<typeof SpaceFormSchema>;

const SpaceCreateModal = ({ isOpen, onOpenChange }: SpaceCreateProps) => {
  const [createSpace, { isLoading }] = useCreateSpaceMutation();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SpaceFormData>({
    resolver: zodResolver(SpaceFormSchema),
    defaultValues: {
      spaceName: "",
      spaceUrl: "",
    },
  });

  const onSubmit = async (values: SpaceFormData) => {
    try {
      const result = await createSpace({
        category: "Brand",
        description: values.description || "",
        name: values.spaceName,
        url: values.spaceUrl,
        bannerData: "",
        imageData: "",
      }).unwrap();

      toast.success("Space Created", {
        position: "top-right",
      });

      reset();
      onOpenChange();
      // @ts-ignore
      router.push(`/s/${result?.space?.url}`);
    } catch (error: any) {
      toast.error(error?.data?.message, {
        position: "top-right",
      });
    }
  };

  return (
    <>
      <Modal
        backdrop="opaque"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-white",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        isOpen={isOpen}
        radius="lg"
        size="2xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create Space
              </ModalHeader>
              <ModalBody className="p-0 flex-row gap-3">
                <div className="w-2/4 p-3 bg-[#1c1a32]">
                  <h2 className="text-2xl mb-6">
                    A Space is your own esports arena.
                  </h2>
                  <ul className="flex flex-col gap-6">
                    <ListItemWithIcon
                      content="A home for your community competitions"
                      icon={UsersIcon}
                    />
                    <ListItemWithIcon
                      content="A home for your community competitions"
                      icon={UsersIcon}
                    />
                    <ListItemWithIcon
                      content="A home for your community competitions"
                      icon={UsersIcon}
                    />
                    <ListItemWithIcon
                      content="A home for your community competitions"
                      icon={UsersIcon}
                    />
                  </ul>
                </div>
                <div className="p-3">
                  <form
                    className="flex flex-col gap-4"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <Input
                      {...register("spaceName")}
                      errorMessage={errors.spaceName?.message}
                      isInvalid={!!errors.spaceName?.message}
                      label="Name"
                      labelPlacement="outside"
                      placeholder="my space name"
                      size="lg"
                      variant="bordered"
                    />
                    <Input
                      {...register("spaceUrl")}
                      description="You wont be able to change it later"
                      errorMessage={errors.spaceUrl?.message}
                      isInvalid={!!errors.spaceUrl?.message}
                      label="Website"
                      labelPlacement="outside"
                      placeholder="myspace"
                      size="lg"
                      startContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">
                            https://localhost:3000/
                          </span>
                        </div>
                      }
                      type="url"
                      variant="bordered"
                    />
                  </form>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" radius="full" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  isLoading={isLoading}
                  radius="full"
                  onClick={handleSubmit(onSubmit)}
                >
                  Create Space
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SpaceCreateModal;
