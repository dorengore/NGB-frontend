"use client";
import { PaintbrushIcon, Users } from "lucide-react";
import { Tab, Tabs } from "@heroui/tabs";
import { usePathname } from "next/navigation";

import ProgressBarLink from "../progress/progress-link";
import DeleteTeam from "../buttons/delete-team";

const TeamSettingsTab = ({ teamId }: { teamId: string }) => {
  const pathname = usePathname();

  return (
    <div className="w-full lg:max-w-[250px] p-1 rounded-lg">
      <h2 className="text-gray-400 mb-4 text-sm font-semibold">
        Team Settings
      </h2>
      <Tabs
        fullWidth
        aria-label="Team settings"
        classNames={{
          tabList: "flex-col",
          tab: "justify-start h-12 px-2 w-full lg:max-w-xl",
          cursor: "w-full ",
          // tabContent: "group-data-[selected=true]:text-blue-500",
        }}
        color="secondary"
        selectedKey={pathname}
        variant="light"
      >
        <Tab
          key={`/teams/${teamId}/settings/about`}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={`/teams/${teamId}/settings/about`}
            >
              <div className="flex text-white  items-center space-x-2">
                <PaintbrushIcon size={20} />
                <span>About</span>
              </div>
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/teams/${teamId}/settings/members`}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={`/teams/${teamId}/settings/members`}
            >
              <div className="flex text-white items-center space-x-2">
                <Users size={20} />
                <span>Members</span>
              </div>
            </ProgressBarLink>
          }
        />
      </Tabs>
      <DeleteTeam teamId={teamId} />
    </div>
  );
};

export default TeamSettingsTab;
