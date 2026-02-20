import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@heroui/input";
import { Image } from "@heroui/image";
import { useEffect } from "react";

import { FeedFormData } from "../spaces/cards/feed-card";

import { FeedSchema } from "@/lib/validations";

interface EditFeedModalProps {
  isOpen: boolean;
  isLoading: boolean;
  onOpenChange: () => void;
  onConfirm: (content: string) => void;
  content: string;
  imageData?: string;
}

const EditFeedModal = ({
  isOpen,
  isLoading,
  onOpenChange,
  content,
  imageData,
  onConfirm,
}: EditFeedModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FeedFormData>({
    resolver: zodResolver(FeedSchema),
    defaultValues: {
      content: content,
    },
  });

  useEffect(() => {
    if (content) {
      reset({
        content,
      });
    }
  }, [content]);

  const onSubmit = async (values: FeedFormData) => {
    onConfirm(values.content);
    reset();
  };

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
        size="xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-center flex-col gap-1">
                Edit Feed
              </ModalHeader>
              <ModalBody className="text-center">
                <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                  <Textarea
                    fullWidth
                    size="lg"
                    {...register("content")}
                    errorMessage={errors?.content?.message}
                    isInvalid={!!errors?.content?.message}
                    placeholder="Write a post ..."
                  />
                </form>
                {imageData && <Image alt="Post Image" src={imageData} />}
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
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditFeedModal;
