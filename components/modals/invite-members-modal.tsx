import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { Spinner } from "@heroui/spinner";
import { useParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import { useGetUserAllFriendsQuery } from "@/lib/redux/api";
import { apiRequest } from "@/lib/utils/api-request";
import { useAppSelector } from "@/lib/redux/hooks";

export interface InviteMembersProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

const InviteMembersModal = ({ isOpen, onOpenChange }: InviteMembersProps) => {
  const { data: userFriends, isLoading, isError } = useGetUserAllFriendsQuery();
  const { teamId } = useParams();
  const [loading, setIsLoading] = useState<boolean>(false);
  const { token } = useAppSelector((state) => state.auth);

  const addMemberToTeam = async (friendId: string) => {
    setIsLoading(true);
    try {
      await apiRequest(
        `/teams/${teamId}/members?friendId=${friendId}`,
        "POST",
        token
      );
      toast.success("Member added");
      onOpenChange();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
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
        scrollBehavior="outside"
        size="md"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {/* Invite members */}
                Add members
              </ModalHeader>
              <ModalBody>
                {isError ? (
                  <h2>No Friends Found</h2>
                ) : isLoading ? (
                  <div className="flex items-center justify-center">
                    <Spinner />
                  </div>
                ) : (
                  userFriends?.allFriends.map((user) => (
                    <Card
                      key={user.id}
                      className="bg-transparent"
                      shadow="none"
                    >
                      <CardBody className="p-0 flex-row items-center justify-between">
                        <div className="flex gap-3 items-center">
                          <Image
                            height={50}
                            radius="full"
                            src={user.imageData || "/assets/avatars/3.png"}
                            width={50}
                          />
                          <h2>{user.username}</h2>
                        </div>
                        <Button
                          color="secondary"
                          isLoading={loading}
                          radius="full"
                          variant="ghost"
                          onPress={() => addMemberToTeam(`${user.id}`)}
                        >
                          Add
                        </Button>
                      </CardBody>
                    </Card>
                  ))
                )}
                {/* <Input
                  label="Search"
                  labelPlacement="outside"
                  placeholder="Enter friend name"
                  variant="bordered"
                /> */}
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  radius="full"
                  variant="light"
                  onPress={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default InviteMembersModal;
