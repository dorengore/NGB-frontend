"use client";

import { usePathname } from "next/navigation";
import { Tabs, Tab } from "@heroui/tabs";
import { useEffect, useState } from "react";

import ProgressBarLink from "../progress/progress-link";

import { useAppSelector } from "@/lib/redux/hooks";

const TeamTabs = ({
  teamId,
  teamAdminId,
}: {
  teamAdminId: number;
  teamId: number;
}) => {
  const pathname = usePathname();
  const { userId } = useAppSelector((state) => state.auth);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (teamAdminId && userId) {
      setIsAdmin(teamAdminId === userId);
    }
  }, [userId, teamAdminId]);

  return (
    <div className="flex flex-col mt-8 gap-4 mb-5">
      <Tabs
        fullWidth
        aria-label="Team Tabs"
        classNames={{
          tabList:
            "gap-3 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-[#22d3ee]",
          tab: "max-w-fit font-semibold p-0  h-12",
          tabContent: "group-data-[selected=true]:text-[#06b6d3]",
        }}
        selectedKey={pathname}
        variant="underlined"
      >
        <Tab
          key={`/teams/${teamId}`}
          title={
            <ProgressBarLink
              className="p-3 text-white"
              href={`/teams/${teamId}`}
            >
              Overview
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/teams/${teamId}/members`}
          title={
            <ProgressBarLink
              className="p-3 text-white"
              href={`/teams/${teamId}/members`}
            >
              Members
            </ProgressBarLink>
          }
        />
        {isAdmin && (
          <Tab
            key={`/teams/${teamId}/settings/about`}
            title={
              <ProgressBarLink
                className="p-3 text-white"
                href={`/teams/${teamId}/settings/about`}
              >
                Settings
              </ProgressBarLink>
            }
          />
        )}
      </Tabs>
    </div>
  );
};

export default TeamTabs;
