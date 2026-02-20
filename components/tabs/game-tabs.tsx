"use client";
import { Tab, Tabs } from "@heroui/tabs";
import { usePathname } from "next/navigation";

import ProgressBarLink from "../progress/progress-link";

const GameTabs = ({ gameName }: { gameName: string }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap mt-8 gap-4 mb-5">
      <Tabs
        fullWidth
        aria-label="Game Tabs"
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
          key={`/${gameName}`}
          title={
            <ProgressBarLink className="p-3 text-white" href={`/${gameName}`}>
              Overview
            </ProgressBarLink>
          }
        />
        <Tab
          key={`/${gameName}/tournament`}
          title={
            <ProgressBarLink
              className="p-3 text-white"
              href={`/${gameName}/tournament`}
            >
              Tournament
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/${gameName}/custom-games`}
          title={
            <ProgressBarLink
              className="p-3 text-white"
              href={`/${gameName}/custom-games`}
            >
              Custom Games
            </ProgressBarLink>
          }
        />
      </Tabs>
    </div>
  );
};

export default GameTabs;
