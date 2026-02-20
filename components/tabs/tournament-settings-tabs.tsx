"use client";

import { usePathname } from "next/navigation";
import { Tab, Tabs } from "@heroui/tabs";
import {
  AppWindowMacIcon,
  Calendar,
  Edit3Icon,
  JoystickIcon,
  LockIcon,
  PaintBucketIcon,
  PanelBottom,
  Settings,
  SpeakerIcon,
  TrophyIcon,
  UserPlus,
} from "lucide-react";

import ProgressBarLink from "../progress/progress-link";
import CancelTournament from "../buttons/cancel-tournament";

const TournamentSettingsTabs = ({
  spaceUrl,
  tournamentId,
}: {
  spaceUrl: string;
  tournamentId: number;
}) => {
  const pathname = usePathname();

  return (
    <div className="w-full lg:max-w-[250px] p-1 rounded-lg">
      <h2 className="text-gray-400 mb-4 text-sm font-semibold">
        Tournament Settings
      </h2>
      <Tabs
        fullWidth
        aria-label="Tournament Space settings"
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
          key={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/control-panel`}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/control-panel`}
            >
              <div className="flex text-white items-center space-x-2">
                <PanelBottom size={20} />
                <span>Control Panel</span>
              </div>
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/about`}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/about`}
            >
              <div className="flex text-white items-center space-x-2">
                <Edit3Icon size={20} />
                <span>About</span>
              </div>
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/appearance`}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/appearance`}
            >
              <div className="flex text-white items-center space-x-2">
                <PaintBucketIcon size={20} />
                <span>Appearance</span>
              </div>
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/settings`}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/settings`}
            >
              <div className="flex text-white items-center space-x-2">
                <Settings size={20} />
                <span>Settings</span>
              </div>
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/game-settings`}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/game-settings`}
            >
              <div className="flex text-white items-center space-x-2">
                <JoystickIcon size={20} />
                <span>Game Settings</span>
              </div>
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/schedule`}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/schedule`}
            >
              <div className="flex text-white items-center space-x-2">
                <Calendar size={20} />
                <span>Schedule</span>
              </div>
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/brackets`}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/brackets`}
            >
              <div className="flex text-white items-center space-x-2">
                <AppWindowMacIcon size={20} />
                <span>Brackets</span>
              </div>
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/prizes`}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/prizes`}
            >
              <div className="flex text-white items-center space-x-2">
                <TrophyIcon size={20} />
                <span>Prizes</span>
              </div>
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/restrictions`}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/restrictions`}
            >
              <div className="flex text-white items-center space-x-2">
                <LockIcon size={20} />
                <span>Restrictions</span>
              </div>
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/reservations`}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/reservations`}
            >
              <div className="flex text-white items-center space-x-2">
                <UserPlus size={20} />
                <span>Invitations</span>
              </div>
            </ProgressBarLink>
          }
        />

        <Tab
          key={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/announcements`}
          title={
            <ProgressBarLink
              className=" w-[235px] py-3 px-2 -ml-2"
              href={`/s/${spaceUrl}/tournaments/${tournamentId}/manage/announcements`}
            >
              <div className="flex text-white items-center space-x-2">
                <SpeakerIcon size={20} />
                <span>Announcements</span>
              </div>
            </ProgressBarLink>
          }
        />
      </Tabs>
      <CancelTournament />
    </div>
  );
};

export default TournamentSettingsTabs;
