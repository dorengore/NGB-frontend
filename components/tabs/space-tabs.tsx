"use client";
import { Tab, Tabs } from "@heroui/tabs";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ProgressBarLink from "../progress/progress-link";

import { useAppSelector } from "@/lib/redux/hooks";

const SpaceTabs = ({
  spaceName,
  adminId,
}: {
  spaceName: string;
  adminId: number;
}) => {
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(false);
  const { userId } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (userId) {
      setIsAdmin(Number(adminId) === Number(userId));
    }
  }, [userId, adminId]);

  return (
    // <div className="flex sticky top-16 bg-custom-gradient z-[20] flex-wrap mt-8 gap-4 mb-5">
    (<div className="flex flex-wrap mt-8 gap-4 mb-5">
      <Tabs
        fullWidth
        aria-label="Space Tabs"
        classNames={{
          tabList:
            "gap-3 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-[#22d3ee]",
          tab: "max-w-fit font-semibold p-0  h-12",
          tabContent: "group-data-[selected=true]:text-[#06b6d3]",
        }}
        selectedKey={pathname}
        variant={"underlined"}
      >
        <Tab
          key={`/s/${spaceName}`}
          title={
            <ProgressBarLink
              className="p-3 text-white"
              href={`/s/${spaceName}`}
            >
              Home
            </ProgressBarLink>
          }
        />
        <Tab
          key={`/s/${spaceName}/feed`}
          title={
            <ProgressBarLink
              className="p-3 text-white"
              href={`/s/${spaceName}/feed`}
            >
              Feed
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/s/${spaceName}/tournaments`}
          title={
            <ProgressBarLink
              className="p-3 text-white"
              href={`/s/${spaceName}/tournaments`}
            >
              Tournaments
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/s/${spaceName}/about`}
          title={
            <ProgressBarLink
              className="p-3 text-white"
              href={`/s/${spaceName}/about`}
            >
              About
            </ProgressBarLink>
          }
        />

        {isAdmin && (
          <Tab
            key={`/s/${spaceName}/settings/about`}
            className="hidden md:block"
            title={
              <ProgressBarLink
                className="p-3 text-white"
                href={`/s/${spaceName}/settings/about`}
              >
                Settings
              </ProgressBarLink>
            }
          />
        )}
        {/* Mobile Settings link */}
        {isAdmin && (
          <Tab
            key={`/s/${spaceName}/settings`}
            className="md:hidden"
            title={
              <ProgressBarLink
                className="p-3 text-white"
                href={`/s/${spaceName}/settings`}
              >
                Settings
              </ProgressBarLink>
            }
          />
        )}

        <Tab
          key={`/s/${spaceName}/invite-friends`}
          title={<h2 className="p-3 text-white">Invite Friends</h2>}
        />
      </Tabs>
    </div>)
  );
};

export default SpaceTabs;
