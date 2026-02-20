import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { CreateTeamSchema } from "@/lib/validations";
import { apiRequest } from "@/lib/utils/api-request";
import { Team } from "@/types/interface";
import { useAppSelector } from "@/lib/redux/hooks";

interface CreateTeamModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  // onConfirm: () => void;
}

type CreateTeamData = z.infer<typeof CreateTeamSchema>;

const CreateTeamModal = ({ isOpen, onOpenChange }: CreateTeamModalProps) => {
  const router = useRouter();
  const { token } = useAppSelector((state) => state.auth);

  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTeamData>({
    resolver: zodResolver(CreateTeamSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: CreateTeamData) => {
    setIsLoading(true);
    try {
      const { team }: { team: Team } = await apiRequest(
        "/teams",
        "POST",
        token,
        {
          name: values.name,
        }
      );

      reset();
      if (team.id) {
        router.push(`/teams/${team.id}`);
      }
      toast.success("Team Created Successfully");
      onOpenChange();
    } catch (error) {
      toast.error("Error creating team.");
    } finally {
      setIsLoading(false);
    }
  };

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
              <ModalHeader className="flex  flex-col gap-1">
                Create team
              </ModalHeader>
              <ModalBody className="">
                <Input
                  {...register("name")}
                  errorMessage={errors.name?.message}
                  isInvalid={!!errors.name?.message}
                  label="Team Name"
                  labelPlacement="outside"
                  placeholder="Team Name"
                  variant="bordered"
                />
              </ModalBody>
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
                  onClick={handleSubmit(onSubmit)}
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

export default CreateTeamModal;
