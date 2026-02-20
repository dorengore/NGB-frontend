"use client";
import { Button } from "@heroui/button";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDisclosure } from "@heroui/modal";

import ConfirmModal from "../modals/confirm-modal";

import { User } from "@/lib/redux/api";
import { useAppSelector } from "@/lib/redux/hooks";
import { apiRequest } from "@/lib/utils/api-request";

export enum FriendRequestStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  UNFRIEND = "UNFRIEND",
  CANCELED = "CANCELED",
}

interface FriendsButtonsProps {
  user: User;
  friendReqStatus?: FriendRequestStatus;
  isReceivedRequest?: boolean;
  isFriendReqAgain?: boolean;
}

const FriendsButtons: React.FC<FriendsButtonsProps> = ({
  user,
  friendReqStatus,
  isReceivedRequest = false,
  isFriendReqAgain = false,
}) => {
  const [status, setStatus] = useState<FriendRequestStatus | undefined>(
    friendReqStatus
  );
  const { isOpen, onOpenChange, onOpen } = useDisclosure();

  const [loading, setIsLoading] = useState<boolean>(false);
  const { token, userId } = useAppSelector((state) => state.auth);

  const handleFriendRequest = async (newStatus: FriendRequestStatus) => {
    setIsLoading(true);
    try {
      await apiRequest(
        `/friends/change-request-status/${user.id}`,
        "PUT",
        token,
        { status: newStatus }
      );
      setStatus(newStatus);
      toast.success(getSuccessMessage(newStatus));
    } catch (error) {
      toast.error(getErrorMessage(newStatus));
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddFriend = async () => {
    setIsLoading(true);
    try {
      await apiRequest(`/friends/send-request/${user.id}`, "POST", token);
      setStatus(FriendRequestStatus.PENDING);
      toast.success("Request Sent");
    } catch (error) {
      toast.error("Unable to add friend");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getSuccessMessage = (status: FriendRequestStatus): string => {
    switch (status) {
      case FriendRequestStatus.PENDING:
        return "Request Sent";
      case FriendRequestStatus.ACCEPTED:
        return "Friend Added";
      case FriendRequestStatus.CANCELED:
        return "Request Canceled";
      case FriendRequestStatus.REJECTED:
        return "Request Rejected";
      case FriendRequestStatus.UNFRIEND:
        return "Friend Removed";
      default:
        return "Action Successful";
    }
  };

  const getErrorMessage = (status: FriendRequestStatus): string => {
    switch (status) {
      case FriendRequestStatus.PENDING:
        return "Unable to send request";
      case FriendRequestStatus.ACCEPTED:
        return "Unable to add friend";
      case FriendRequestStatus.CANCELED:
        return "Unable to cancel request";
      case FriendRequestStatus.REJECTED:
        return "Unable to reject request";
      case FriendRequestStatus.UNFRIEND:
        return "Unable to remove friend";
      default:
        return "Action Failed";
    }
  };

  if (Number(userId) === Number(user.id)) {
    return null;
  }

  const renderButtons = () => {
    switch (status) {
      case FriendRequestStatus.ACCEPTED:
        return (
          <Button
            color="danger"
            isLoading={loading}
            radius="full"
            onPress={onOpen}
          >
            Remove Friend
          </Button>
        );

      case FriendRequestStatus.PENDING:
        if (isReceivedRequest) {
          return (
            <div className="flex items-center justify-center gap-2 flex-col">
              <Button
                color="success"
                isLoading={loading}
                radius="full"
                onPress={() =>
                  handleFriendRequest(FriendRequestStatus.ACCEPTED)
                }
              >
                Accept Request
              </Button>
              <Button
                color="danger"
                isLoading={loading}
                radius="full"
                onPress={() =>
                  handleFriendRequest(FriendRequestStatus.REJECTED)
                }
              >
                Reject Request
              </Button>
            </div>
          );
        } else {
          return (
            <Button
              color="warning"
              isLoading={loading}
              radius="full"
              onPress={() => handleFriendRequest(FriendRequestStatus.CANCELED)}
            >
              Cancel Request
            </Button>
          );
        }

      // case undefined:
      case FriendRequestStatus.REJECTED:
      case FriendRequestStatus.CANCELED:
      case FriendRequestStatus.UNFRIEND:
        if (isFriendReqAgain) {
          return (
            <Button
              color="primary"
              isLoading={loading}
              radius="full"
              onPress={() => handleFriendRequest(FriendRequestStatus.PENDING)}
            >
              Add Friends
            </Button>
          );
        }

      default:
        return (
          <Button
            color="success"
            isLoading={loading}
            radius="full"
            onPress={handleAddFriend}
          >
            Add Friend
          </Button>
        );
    }
  };

  return (
    <div>
      {renderButtons()}
      <ConfirmModal
        isLoading={loading}
        isOpen={isOpen}
        title="Confirm Remove Friend."
        onConfirm={() => handleFriendRequest(FriendRequestStatus.UNFRIEND)}
        onOpenChange={onOpenChange}
      >
        Are you sure you want to remove this friend?
      </ConfirmModal>
    </div>
  );
};

export default FriendsButtons;
