import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { Spinner } from "@heroui/spinner";
import { Input } from "@heroui/input";
import { useEffect, useMemo, useState } from "react";
import { useDebounce } from "use-debounce";

import UserCard from "../friends/user";

import {
  useGetAllUsersQuery,
  useGetUserFriendRequestsQuery,
} from "@/lib/redux/api";

interface AddFriendsProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

const AddFriendsModal = ({ isOpen, onOpenChange }: AddFriendsProps) => {
  const { data: users, isLoading } = useGetAllUsersQuery();
  const { data: userFriendRequests } = useGetUserFriendRequestsQuery();
  const [searchValue, setSearchValue] = useState<string>("");
  const [isDebouncing, setIsDebouncing] = useState<boolean>(false);
  const [debouncedValue] = useDebounce(searchValue, 300);

  const handleSearchValue = (value: string) => {
    setSearchValue(value);
    setIsDebouncing(true);
  };

  useEffect(() => {
    if (debouncedValue || debouncedValue.trim() === "") {
      setIsDebouncing(false);
    }
  }, [debouncedValue]);

  const filteredUsers = useMemo(() => {
    if (!users || debouncedValue.trim() === "") return [];
    const sentRequestUserIds =
      userFriendRequests?.user.sentRequests.map((user) => user.id) || [];
    const lowercasedSearch = debouncedValue.toLowerCase();

    return users.filter(
      (user) =>
        user.username.toLowerCase().includes(lowercasedSearch) &&
        !sentRequestUserIds.includes(user.id)
    );
  }, [debouncedValue, users, userFriendRequests]);

  return (
    (<Modal
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
            <ModalHeader>
              <h2>Add Friends</h2>
            </ModalHeader>
            <ModalBody>
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <Spinner />
                </div>
              ) : (
                (<>
                  <Input
                    label="Search"
                    labelPlacement="outside"
                    placeholder="Search for friends"
                    value={searchValue}
                    variant="bordered"
                    onValueChange={handleSearchValue}
                  />
                  <div>
                    {isDebouncing && (
                      <div className="flex items-center justify-center mb-4">
                        <Spinner size="sm" />
                      </div>
                    )}

                    {!isDebouncing &&
                      debouncedValue.trim() &&
                      (filteredUsers.length > 0 ? (
                        filteredUsers.map((user) => (
                          <UserCard key={user.id} user={user} />
                        ))
                      ) : (
                        <p>No users found</p>
                      ))}
                  </div>
                </>)
                // users?.map((user) => <UserCard key={user.id} user={user} />)
              )}
            </ModalBody>
            <ModalFooter>
              <Button
                onPress={() => {
                  onClose();
                  setSearchValue("");
                }}
              >
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>)
  );
};

export default AddFriendsModal;
