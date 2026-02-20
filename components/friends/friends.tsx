"use client";
import { Key, useState } from "react";
import { Tab, Tabs } from "@heroui/tabs";
import { SendIcon, UserPlus2Icon, Users2Icon } from "lucide-react";

import ReceivedRequests from "./received-requests";
import UserFriends from "./user-friends";
import NoFriends from "./no-friends";

import { FriendRequestInterface, UserFriends as UF } from "@/types/interface";

interface FriendsProps {
  friendsRequest: FriendRequestInterface | null;
  userFriends: UF | null;
}

const Friends = ({ friendsRequest, userFriends }: FriendsProps) => {
  const [selected, setSelected] = useState<Key | null>("requests");

  return (
    <div>
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="User Friends"
          color="primary"
          selectedKey={`${selected}`}
          variant="bordered"
          onSelectionChange={setSelected}
        >
          <Tab
            key="requests"
            title={
              <div className="flex items-center space-x-2">
                <UserPlus2Icon />
                <span>Requests</span>
              </div>
            }
          >
            <ReceivedRequests
              requests={friendsRequest?.user?.receivedRequests}
            />
          </Tab>
          <Tab
            key="friends"
            title={
              <div className="flex items-center space-x-2">
                <Users2Icon />
                <span>Friends</span>
              </div>
            }
          >
            <UserFriends friends={userFriends?.allFriends} />
          </Tab>
          <Tab
            key="add-friend"
            title={
              <div className="flex items-center space-x-2">
                <SendIcon />
                <span>Add Friends</span>
              </div>
            }
          >
            <div className="w-full flex items-center justify-center h-[300px]">
              <NoFriends />
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Friends;
