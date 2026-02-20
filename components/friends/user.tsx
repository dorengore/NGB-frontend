import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { useState } from "react";
import toast from "react-hot-toast";

import { User } from "@/lib/redux/api";
import { apiRequest } from "@/lib/utils/api-request";
import { useAppSelector } from "@/lib/redux/hooks";
import FriendsButtons from "../buttons/friends-buttons";

const UserCard = ({ user }: { user: User }) => {
  return (
    <Card className="bg-transparent" shadow="none">
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
        <FriendsButtons user={user} />
      </CardBody>
    </Card>
  );
};

export default UserCard;
