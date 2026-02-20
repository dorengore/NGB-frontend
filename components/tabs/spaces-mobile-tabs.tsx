"use client";
import { usePathname } from "next/navigation";
import { Tab, Tabs } from "@heroui/tabs";

import ProgressBarLink from "../progress/progress-link";

const SpacesMobileTabs = () => {
  const pathname = usePathname();

  return (
    // <div className="flex sticky top-16 bg-custom-gradient z-[20] flex-wrap mt-8 gap-4 mb-5">
    (<div className="flex flex-wrap  gap-4 mb-5">
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
          key={`/spaces`}
          title={
            <ProgressBarLink className="p-3 text-white" href={`/spaces`}>
              Home
            </ProgressBarLink>
          }
        />
        <Tab
          key={"/spaces/featured"}
          title={
            <ProgressBarLink
              className="p-3 text-white"
              href={`/spaces/featured`}
            >
              Featured
            </ProgressBarLink>
          }
        />

        <Tab
          key="/spaces/brand"
          title={
            <ProgressBarLink className="p-3 text-white" href={`/spaces/brand`}>
              Brand
            </ProgressBarLink>
          }
        />

        <Tab
          key="/spaces/community"
          title={
            <ProgressBarLink
              className="p-3 text-white"
              href={`/spaces/community`}
            >
              Community
            </ProgressBarLink>
          }
        />
      </Tabs>
    </div>)
  );
};

export default SpacesMobileTabs;
