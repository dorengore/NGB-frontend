"use client";

import { Tab, Tabs } from "@heroui/tabs";
import {
  BellIcon,
  HomeIcon,
  MenuIcon,
  MessageCircleIcon,
  User2Icon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ProgressBarLink from "../progress/progress-link";

import { useAppSelector } from "@/lib/redux/hooks";

const BottomNavigationTabs = () => {
  const pathname = usePathname();
  const { token } = useAppSelector((state) => state.auth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);

  return (
    <Tabs
      fullWidth
      aria-label="Navigation"
      className="md:hidden"
      placement="bottom"
      radius="sm"
      selectedKey={pathname}
    >
      <Tab
        key="/"
        className="py-5 px-3"
        title={
          <ProgressBarLink
            className="flex gap-1 flex-col justify-center items-center"
            color="secondary"
            href="/"
          >
            <HomeIcon />
            {/* <span>Home</span> */}
          </ProgressBarLink>
        }
      />
      <Tab
        key="/notifications"
        className="py-5 px-3"
        title={
          <ProgressBarLink
            className="flex gap-1 flex-col justify-center items-center"
            color="secondary"
            href="/notifications"
          >
            <BellIcon />
            {/* <span>Notification</span> */}
          </ProgressBarLink>
        }
      />
      <Tab
        key="/chat"
        className="py-5 px-3"
        title={
          <ProgressBarLink
            className="flex gap-1 flex-col justify-center items-center"
            color="secondary"
            href="/chat"
          >
            <MessageCircleIcon />
            {/* <span>Chat</span> */}
          </ProgressBarLink>
        }
      />

      {isLoggedIn && (
        <Tab
          key="/user-menu"
          className="py-5 px-3"
          title={
            <ProgressBarLink
              className="flex gap-1 flex-col justify-center items-center"
              color="secondary"
              href="/user-menu"
            >
              <User2Icon />
              {/* <span>Me</span> */}
            </ProgressBarLink>
          }
        />
      )}

      <Tab
        key="/menu"
        className="py-5 px-3"
        title={
          <ProgressBarLink
            className="flex gap-1 flex-col justify-center items-center"
            color="secondary"
            href="/menu"
          >
            <MenuIcon />
            {/* <span>Menu</span> */}
          </ProgressBarLink>
        }
      />
    </Tabs>
  );
};

export default BottomNavigationTabs;
