"use client";
import { User, Settings, Repeat, PaintbrushIcon } from "lucide-react";
import { Tab, Tabs } from "@heroui/tabs";
import { usePathname } from "next/navigation";

import ProgressBarLink from "../progress/progress-link";

const SettingsTabs = () => {
  const pathname = usePathname();

  return (
    <div className="w-full lg:max-w-[250px] p-1 rounded-lg">
      <h2 className="text-gray-400 mb-4 text-sm font-semibold">
        USER SETTINGS
      </h2>
      <Tabs
        fullWidth
        aria-label="User settings"
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
          key={"/user/my-account"}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={"/user/my-account"}
            >
              <div className="flex text-white items-center space-x-2">
                <User size={20} />
                <span>My account</span>
              </div>
            </ProgressBarLink>
          }
        />
        {/* <Tab
          key={`/users/${userId}`}
          title={
            <Link href={`/users/${userId}`}>
              <div className="flex items-center space-x-2">
                <User size={20} />
                <span>My account</span>
              </div>
            </Link>
          }
        /> */}
        <Tab
          key="/user/settings/profile"
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href="/user/settings/profile"
            >
              <div className="flex text-white  items-center space-x-2">
                <PaintbrushIcon size={20} />
                <span>Profile</span>
              </div>
            </ProgressBarLink>
          }
        />
        <Tab
          key="/user/settings/personal"
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href="/user/settings/personal"
            >
              <div className="flex text-white items-center space-x-2">
                <Settings size={20} />
                <span>Personal</span>
              </div>
            </ProgressBarLink>
          }
        />
        <Tab
          key="/user/settings/subscriptions"
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href="/user/settings/subscriptions"
            >
              <div className="flex text-white items-center space-x-2">
                <Repeat size={20} />
                <span>Subscriptions</span>
              </div>
            </ProgressBarLink>
          }
        />

        <Tab
          key="/user/transactions"
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href="/user/transactions"
            >
              <div className="flex text-white items-center space-x-2">
                <Repeat size={20} />
                <span>Transactions</span>
              </div>
            </ProgressBarLink>
          }
        />
      </Tabs>
    </div>
  );
};

export default SettingsTabs;
