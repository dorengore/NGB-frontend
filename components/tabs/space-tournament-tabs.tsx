"use client";
import { Tabs, Tab } from "@heroui/tabs";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import ProgressBarLink from "../progress/progress-link";

import { useAppSelector } from "@/lib/redux/hooks";

const SpaceTournamentTabs = ({
  adminId,
  spaceName,
  tournamentId,
}: {
  spaceName: string;
  adminId: number;
  tournamentId: number;
}) => {
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const { userId } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (userId) {
      setIsAdmin(Number(userId) === Number(adminId));
    }
  }, [userId, adminId]);

  return (
    <div className="flex flex-wrap mt-8 gap-4 mb-5">
      <Tabs
        fullWidth
        aria-label="Tournament Tabs"
        classNames={{
          tabList:
            "gap-3 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-[#22d3ee]",
          tab: "max-w-fit font-semibold px-6 h-12",
          tabContent: "group-data-[selected=true]:text-[#06b6d3]",
        }}
        selectedKey={pathname}
        variant={"underlined"}
      >
        <Tab
          key={`/s/${spaceName}/tournaments/${tournamentId}`}
          title={
            <ProgressBarLink
              href={`/s/${spaceName}/tournaments/${tournamentId}`}
            >
              Overview
            </ProgressBarLink>
          }
        />
        <Tab
          key={`/s/${spaceName}/tournaments/${tournamentId}/bracket`}
          title={
            <ProgressBarLink
              href={`/s/${spaceName}/tournaments/${tournamentId}/bracket`}
            >
              Bracket
            </ProgressBarLink>
          }
        />
        <Tab
          key={`/s/${spaceName}/tournaments/${tournamentId}/matches`}
          title={
            <ProgressBarLink
              href={`/s/${spaceName}/tournaments/${tournamentId}/matches`}
            >
              Matches
            </ProgressBarLink>
          }
        />
        <Tab
          key={`/s/${spaceName}/tournaments/${tournamentId}/participants`}
          title={
            <ProgressBarLink
              href={`/s/${spaceName}/tournaments/${tournamentId}/participants`}
            >
              Teams
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/s/${spaceName}/tournaments/${tournamentId}/free-agents`}
          title={
            <ProgressBarLink
              href={`/s/${spaceName}/tournaments/${tournamentId}/free-agents`}
            >
              Free agents
            </ProgressBarLink>
          }
        />
        <Tab
          key={`/s/${spaceName}/tournaments/${tournamentId}/results`}
          title={
            <ProgressBarLink
              href={`/s/${spaceName}/tournaments/${tournamentId}/results`}
            >
              Results
            </ProgressBarLink>
          }
        />
        {isAdmin && (
          <Tab
            key={`/s/${spaceName}/tournaments/${tournamentId}/manage/control-panel`}
            title={
              <ProgressBarLink
                className="p-3 text-white"
                href={`/s/${spaceName}/tournaments/${tournamentId}/manage/control-panel`}
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

export default SpaceTournamentTabs;
