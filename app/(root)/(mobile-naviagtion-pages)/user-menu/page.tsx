"use client";
import {
  ArrowRight,
  JoystickIcon,
  RocketIcon,
  Settings,
  StoreIcon,
  TrophyIcon,
  User,
  UsersIcon,
  Wallet2Icon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Avatar } from "@heroui/avatar";

import UserMenuButton from "@/components/buttons/user-menu-button";
import LinkButton from "@/components/buttons/link-button";
import { useAppSelector } from "@/lib/redux/hooks";

const UserMenuPage = () => {
  const { userId, username, imageData } = useAppSelector((state) => state.auth);
  const [userImage, setUserImage] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (imageData) {
      setUserImage(imageData);
    }
    if (username) {
      setUserName(username);
    }
  }, [imageData]);

  return (
    <div className="px-4 pt-5 pb-20">
      <div className="h-20 mb-5">
        <LinkButton
          fullWidth
          className="h-full items-center justify-between"
          endContent={<ArrowRight />}
          href={`/users/${userId}`}
          variant="flat"
        >
          <div className="items-center flex gap-3">
            <Avatar size="lg" src={`${userImage}`} />
            <div className="flex gap-2 flex-col items-start">
              <h2 className="font-bold text-xl">{userName}</h2>
              <p>View Your Profile</p>
            </div>
          </div>
        </LinkButton>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <UserMenuButton href="/user/settings" icon={Settings}>
          Settings
        </UserMenuButton>
        <UserMenuButton href="" icon={Wallet2Icon}>
          Wallet
        </UserMenuButton>
        <UserMenuButton href="" icon={User}>
          Friends
        </UserMenuButton>
        <UserMenuButton href="" icon={UsersIcon}>
          Teams
        </UserMenuButton>
        <UserMenuButton href="/spaces" icon={RocketIcon}>
          Spaces
        </UserMenuButton>
        <UserMenuButton href="" icon={TrophyIcon}>
          Tournaments
        </UserMenuButton>
        <UserMenuButton href="/games" icon={JoystickIcon}>
          Games
        </UserMenuButton>
        <UserMenuButton href="" icon={StoreIcon}>
          Market Place
        </UserMenuButton>
      </div>
    </div>
  );
};

export default UserMenuPage;
