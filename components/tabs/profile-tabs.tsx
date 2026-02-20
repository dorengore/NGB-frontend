"use client";
import { Tab, Tabs } from "@heroui/tabs";
import { usePathname } from "next/navigation";
import { Chip } from "@heroui/chip";

import ProgressBarLink from "../progress/progress-link";

const ProfileTabs = ({ userId }: { userId: string }) => {
  // const { userId } = useAppSelector((state) => state.auth);
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap mt-8 gap-4 mb-5">
      <Tabs
        fullWidth
        aria-label="Tabs variants"
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
          key={`/users/${userId}`}
          title={
            <ProgressBarLink
              className="p-3 text-white"
              href={`/users/${userId}`}
            >
              Overview
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/users/${userId}/stats`}
          title={
            <ProgressBarLink
              className="p-3 text-white"
              href={`/users/${userId}/stats`}
            >
              Stats
              <Chip className="text-[10px] ml-2" color="secondary" size="sm">
                Pro
              </Chip>
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/users/${userId}/teams`}
          title={
            <ProgressBarLink
              className="p-3 text-white"
              href={`/users/${userId}/teams`}
            >
              Teams
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/users/${userId}/spaces`}
          title={
            <ProgressBarLink
              className="p-3 text-white"
              href={`/users/${userId}/spaces`}
            >
              Spaces
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/users/${userId}/ladders`}
          title={
            <ProgressBarLink
              className="p-3 text-white"
              href={`/users/${userId}/ladders`}
            >
              Ladders
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/users/${userId}/tournaments`}
          title={
            <ProgressBarLink
              className="p-3 text-white"
              href={`/users/${userId}/tournaments`}
            >
              Tournaments
            </ProgressBarLink>
          }
        />
      </Tabs>
    </div>
  );
};

export default ProfileTabs;
