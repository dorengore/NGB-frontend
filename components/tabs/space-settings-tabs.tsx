"use client";
import {
  User,
  Repeat,
  PaintbrushIcon,
  JoystickIcon,
  Repeat2Icon,
  Wallet,
  Users2,
  UsersIcon,
} from "lucide-react";
import { Tab, Tabs } from "@heroui/tabs";
import { usePathname } from "next/navigation";

import ProgressBarLink from "../progress/progress-link";
import DeactivateSpace from "../buttons/deactivate-space";

const SpaceSettingsTab = ({ spaceUrl }: { spaceUrl: string }) => {
  const pathname = usePathname();

  return (
    <div className="w-full lg:max-w-[250px] p-1 rounded-lg">
      <h2 className="text-gray-400 mb-4 text-sm font-semibold">
        Space Settings
      </h2>
      <Tabs
        fullWidth
        aria-label="Space settings"
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
          key={`/s/${spaceUrl}/settings/upgrade`}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={`/s/${spaceUrl}/settings/upgrade`}
            >
              <div className="flex text-white items-center space-x-2">
                <User size={20} />
                <span>Upgrade</span>
              </div>
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/s/${spaceUrl}/settings/about`}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={`/s/${spaceUrl}/settings/about`}
            >
              <div className="flex text-white  items-center space-x-2">
                <PaintbrushIcon size={20} />
                <span>About</span>
              </div>
            </ProgressBarLink>
          }
        />
        <Tab
          key={`/s/${spaceUrl}/settings/games`}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={`/s/${spaceUrl}/settings/games`}
            >
              <div className="flex text-white items-center space-x-2">
                <JoystickIcon size={20} />
                <span>Games</span>
              </div>
            </ProgressBarLink>
          }
        />
        <Tab
          key={`/s/${spaceUrl}/settings/subscriptions`}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={`/s/${spaceUrl}/settings/subscriptions`}
            >
              <div className="flex text-white items-center space-x-2">
                <Repeat2Icon size={20} />
                <span>Subscriptions</span>
              </div>
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/s/${spaceUrl}/settings/transactions`}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={`/s/${spaceUrl}/settings/transactions`}
            >
              <div className="flex text-white items-center space-x-2">
                <Wallet size={20} />
                <span>Transactions</span>
              </div>
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/s/${spaceUrl}/settings/tournaments`}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={`/s/${spaceUrl}/settings/tournaments`}
            >
              <div className="flex text-white items-center space-x-2">
                <Repeat size={20} />
                <span>Tournaments</span>
              </div>
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/s/${spaceUrl}/settings/members`}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={`/s/${spaceUrl}/settings/members`}
            >
              <div className="flex text-white items-center space-x-2">
                <Users2 size={20} />
                <span>Members</span>
              </div>
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/s/${spaceUrl}/settings/roles`}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={`/s/${spaceUrl}/settings/roles`}
            >
              <div className="flex text-white items-center space-x-2">
                <UsersIcon size={20} />
                <span>Roles</span>
              </div>
            </ProgressBarLink>
          }
        />
      </Tabs>
      <DeactivateSpace spaceUrl={spaceUrl} />
    </div>
  );
};

export default SpaceSettingsTab;
