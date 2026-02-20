"use client";
import { Tab, Tabs } from "@heroui/tabs";
import { CompassIcon, PaintbrushIcon, Repeat, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

import ProgressBarLink from "../progress/progress-link";

const SpacesTabs = () => {
  const pathname = usePathname();

  return (
    <div className="w-full bg-blue-gray-800 h-full  max-w-[250px] p-1 rounded-lg">
      <h2 className="text-gray-400 mb-4 text-sm font-semibold">Discover</h2>
      <Tabs
        fullWidth
        aria-label="Discover Spaces"
        classNames={{
          tabList: "flex-col",
          tab: "justify-start h-12 px-2 w-full max-w-xl",
          cursor: "w-full ",
          // tabContent: "group-data-[selected=true]:text-blue-500",
        }}
        color="secondary"
        selectedKey={pathname}
        variant="light"
      >
        <Tab
          key={"/spaces"}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={"/spaces"}
            >
              <div className="flex text-white items-center space-x-2">
                <CompassIcon size={20} />
                <span>Home</span>
              </div>
            </ProgressBarLink>
          }
        />

        <Tab
          key={"/spaces/featured"}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={"/spaces/featured"}
            >
              <div className="flex text-white items-center space-x-2">
                <CompassIcon size={20} />
                <span>Featured</span>
              </div>
            </ProgressBarLink>
          }
        />

        <Tab
          key="/spaces/brand"
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href="/spaces/brand"
            >
              <div className="flex text-white  items-center space-x-2">
                <PaintbrushIcon size={20} />
                <span>Brand</span>
              </div>
            </ProgressBarLink>
          }
        />
        <Tab
          key="/spaces/community"
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href="/spaces/community"
            >
              <div className="flex text-white items-center space-x-2">
                <Settings size={20} />
                <span>Community</span>
              </div>
            </ProgressBarLink>
          }
        />
        <Tab
          key="/spaces/content-creator"
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href="/spaces/content-creator"
            >
              <div className="flex text-white items-center space-x-2">
                <Repeat size={20} />
                <span>Content Creator</span>
              </div>
            </ProgressBarLink>
          }
        />
      </Tabs>
    </div>
  );
};

export default SpacesTabs;
