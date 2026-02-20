"use client";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";
import { NavbarContent, NavbarItem } from "@heroui/navbar";
import { Avatar } from "@heroui/avatar";
import { CrownIcon, DownloadIcon, SearchIcon } from "lucide-react";
import { Divider } from "@heroui/divider";
import { useRouter } from "next/navigation";

import NavbarCreateModal from "./dropdowns/navbar-create-modal";
import SettingsDropdown from "./dropdowns/settings-dropdown";
import NotificationPopover from "./popovers/notification-popover";
import ChatPopover from "./popovers/chat-popover";
import UpgradeModal from "./modals/upgrade-modal";
import LinkButton from "./buttons/link-button";
import ProgressBarLink from "./progress/progress-link";
import LoginButton from "./buttons/login-button";

import { useAppSelector } from "@/lib/redux/hooks";
import { cn } from "@heroui/theme";

const NavbarRightButtons = ({
  isNavbarTwo,
  isMobile,
}: {
  isNavbarTwo?: boolean;
  isMobile?: boolean;
}) => {
  const router = useRouter();
  const { token, userId, username, imageData } = useAppSelector(
    (state) => state.auth
  );

  const {
    isOpen: isOpenUpgradeModal,
    onOpenChange: onOpenChangeUpgradeModal,
    onOpen: onOpenUpgradeModal,
  } = useDisclosure();

  return (
    <>
      <NavbarContent justify="end">
        {isNavbarTwo || isMobile ? null : (
          <>
            <NavbarItem className="hidden lg:block">
              <Button
                className="px-6"
                color="secondary"
                radius="full"
                size="sm"
                startContent={<DownloadIcon size={18} />}
                variant="ghost"
                onPress={() =>
                  window.open(
                    `${process.env.NEXT_PUBLIC_URL}/download`,
                    "_blank"
                  )
                }
              >
                Download
              </Button>
            </NavbarItem>
            <NavbarItem className="hidden lg:block bg-transparent">
              <Button
                size="sm"
                className={cn(
                  "group relative flex transform gap-2 items-center justify-center overflow-hidden whitespace-nowrap rounded-full border border-white bg-button-gold px-8 text-base/7 font-medium text-white transition-all duration-300 hover:ring-2 hover:bg-button-gold-hover hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2"
                )}
                startContent={<CrownIcon size={18} />}
                onPress={onOpenUpgradeModal}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Upgrade
                </span>
                <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-white opacity-20 transition-all duration-500 group-hover:left-[120%]" />
              </Button>
            </NavbarItem>
          </>
        )}
        {isNavbarTwo ? null : (
          <LinkButton isIconOnly href={"/search"} radius="full" size="sm">
            <SearchIcon size={18} />
          </LinkButton>
        )}
        {isNavbarTwo || isMobile
          ? null
          : token && (
              <>
                <NavbarCreateModal />
                <div className="hidden lg:flex items-center gap-4">
                  <ChatPopover />
                  <NotificationPopover />
                </div>
              </>
            )}
        {isNavbarTwo || isMobile
          ? null
          : token && (
              <div className="w-full h-[80%] hidden lg:block">
                <Divider orientation="vertical" />
              </div>
            )}
        {isMobile || isNavbarTwo ? null : token ? (
          <NavbarItem className="flex items-center gap-3">
            <div className="flex items-center justify-between gap-3">
              <ProgressBarLink href={`/users/${userId}`}>
                <Avatar
                  key={imageData}
                  size="sm"
                  src={imageData ? imageData : undefined}
                  fallback={username ? username.charAt(0).toUpperCase() : "U"}
                />
              </ProgressBarLink>
              <ProgressBarLink
                className="lg:hidden xl:inline"
                href={`/users/${userId}`}
              >
                <h2>{username}</h2>
              </ProgressBarLink>
            </div>
            <div>
              <SettingsDropdown userId={userId} />
            </div>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <LoginButton />
          </NavbarItem>
        )}
      </NavbarContent>
      <UpgradeModal
        isOpen={isOpenUpgradeModal}
        onOpenChange={onOpenChangeUpgradeModal}
      />
    </>
  );
};

export default NavbarRightButtons;
